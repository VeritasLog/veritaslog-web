"use client";
import { useState } from "react";
import { Lock, Send } from "lucide-react";
import { toast } from "sonner";
import { useSignAndExecuteTransaction } from "@mysten/dapp-kit";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { CustomField } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { requestAccess } from "@/lib/contracts";

interface ModalRequestAccessProps {
  logId: string;
  logTitle?: string;
  onRequestSent?: () => void;
}

const schema = z.object({
  reason: z.string().min(1, "Reason is required"),
});
type FormValues = z.infer<typeof schema>;

export default function ModalRequestAccess({
  logId,
  logTitle,
  onRequestSent,
}: ModalRequestAccessProps) {
  const { mutateAsync: signAndExecute } = useSignAndExecuteTransaction();
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      reason: "",
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      setLoading(true);

      await requestAccess(signAndExecute, Number(logId), values.reason);
      toast.success("Request Sent", {
        description: "Your access request has been submitted to administrators",
      });

      form.reset();
      setOpen(false);
      onRequestSent?.();
    } catch (error) {
      console.error("Error requesting access:", error);
      toast.error("Error", {
        description: "Failed to send access request",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" className="w-full mt-2">
          <Lock className="h-4 w-4 mr-2" />
          Request Access
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>
            Request Access to {logTitle || `Log #${logId}`}
          </DialogTitle>
          <DialogDescription>
            Please provide a reason for requesting access to this compliance
            log. Administrators will review your request.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <CustomField
              control={form.control}
              name="reason"
              label="Reason for Access"
              primary
              render={({ field }) => (
                <Textarea
                  id="reason"
                  placeholder="e.g., Need to audit the compliance log for quarterly review..."
                  {...field}
                  rows={4}
                  className="resize-none"
                />
              )}
            />
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                <Send className="h-4 w-4 mr-2" />
                Send Request
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
