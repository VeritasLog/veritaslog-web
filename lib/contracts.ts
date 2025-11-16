/* eslint-disable @typescript-eslint/no-explicit-any */
import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import { MODULE, PACKAGE_ID, REGISTRY_ID } from "./sui";

// Types
export interface AccessRequest {
  requester: string;
  reason: string;
  requestedAt: number;
}

export interface Log {
  walrusCid: string;
  owner: string;
  allowed: string[];
  createdAt: number;
  severityCode: number;
  metaCommitment: number[];
  pending: string[];
}

/**
 * Request access to a log
 */
export async function requestAccess(
  signAndExecute: any,
  logId: number,
  reason: string
): Promise<any> {
  const tx = new Transaction();
  const registryObj = tx.object(REGISTRY_ID);

  tx.moveCall({
    target: `${PACKAGE_ID}::${MODULE}::request_access`,
    arguments: [
      registryObj,
      tx.pure.u64(BigInt(logId)),
      tx.pure.string(reason),
    ],
  });

  return await signAndExecute({
    transaction: tx,
    chain: "sui:testnet",
  });
}

/**
 * Approve access request (Admin only)
 */
export async function approveAccess(
  signAndExecute: any,
  logId: number,
  requesterAddress: string
): Promise<any> {
  const tx = new Transaction();
  const registryObj = tx.object(REGISTRY_ID);

  tx.moveCall({
    target: `${PACKAGE_ID}::${MODULE}::approve_access`,
    arguments: [
      registryObj,
      tx.pure.u64(BigInt(logId)),
      tx.pure.address(requesterAddress),
    ],
  });

  return await signAndExecute({
    transaction: tx,
    chain: "sui:testnet",
  });
}

/**
 * Reject access request (Admin only)
 */
export async function rejectAccess(
  signAndExecute: any,
  logId: number,
  requesterAddress: string,
  reason: string = "Access denied by administrator"
): Promise<any> {
  const tx = new Transaction();
  const registryObj = tx.object(REGISTRY_ID);

  tx.moveCall({
    target: `${PACKAGE_ID}::${MODULE}::reject_access`,
    arguments: [
      registryObj,
      tx.pure.u64(BigInt(logId)),
      tx.pure.address(requesterAddress),
      tx.pure.string(reason),
    ],
  });

  return await signAndExecute({
    transaction: tx,
    chain: "sui:testnet",
  });
}

/**
 * Fetch all pending access requests from events
 * This is more efficient than querying each log
 */
export async function getAllPendingRequests(
  client: SuiClient
): Promise<Array<AccessRequest & { logId: number }>> {
  try {
    // Query AccessRequestEvent events
    const events = await client.queryEvents({
      query: {
        MoveEventType: `${PACKAGE_ID}::${MODULE}::AccessRequestEvent`,
      },
      limit: 100,
      order: "descending",
    });

    const allRequests: Array<AccessRequest & { logId: number }> = [];

    for (const event of events.data) {
      const parsedData = event.parsedJson as any;

      // Check if this request hasn't been approved/rejected yet
      // by checking if there's a corresponding approve/reject event
      const isStillPending = await checkIfRequestPending(
        client,
        Number(parsedData.log_id),
        parsedData.requester
      );

      if (isStillPending) {
        allRequests.push({
          logId: Number(parsedData.log_id),
          requester: parsedData.requester,
          reason: parsedData.reason,
          requestedAt: Number(parsedData.requested_at),
        });
      }
    }

    return allRequests;
  } catch (error) {
    console.error("Error getting all pending requests:", error);
    return [];
  }
}

/**
 * Check if a request is still pending (not approved/rejected)
 */
async function checkIfRequestPending(
  client: SuiClient,
  logId: number,
  requester: string
): Promise<boolean> {
  try {
    // Check for approve events
    const approveEvents = await client.queryEvents({
      query: {
        MoveEventType: `${PACKAGE_ID}::${MODULE}::AccessApprovedEvent`,
      },
      limit: 50,
    });

    // Check for reject events
    const rejectEvents = await client.queryEvents({
      query: {
        MoveEventType: `${PACKAGE_ID}::${MODULE}::AccessRejectedEvent`,
      },
      limit: 50,
    });

    // Check if this specific request was approved or rejected
    for (const event of [...approveEvents.data, ...rejectEvents.data]) {
      const parsedData = event.parsedJson as any;
      if (
        Number(parsedData.log_id) === logId &&
        parsedData.requester === requester
      ) {
        return false; // Already processed
      }
    }

    return true; // Still pending
  } catch (error) {
    console.error("Error checking request status:", error);
    return true;
  }
}
