# 🌐 VeritasLog Web - Decentralized Compliance Logging Interface

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Sui Wallet](https://img.shields.io/badge/Sui-Wallet-blue)](https://sui.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **VeritasLog Web** is the frontend interface for the VeritasLog decentralized compliance logging system. Built with Next.js, it provides an intuitive user experience for interacting with the VeritasLog smart contracts on Sui blockchain, managing compliance logs, and handling access control workflows.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Installation Guide](#-installation-guide)
- [Configuration](#-configuration)
- [Usage Guide](#-usage-guide)
- [Integration with Smart Contracts](#-integration-with-smart-contracts)
- [Deployment](#-deployment)
- [Development](#-development)
- [Testing](#-testing)
- [Security Considerations](#-security-considerations)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**VeritasLog Web** is the user-facing application that bridges traditional web interfaces with blockchain technology. It enables enterprises and organizations to:

- **Register and manage** immutable compliance logs on Sui blockchain
- **Upload log files** to Walrus decentralized storage
- **Control access** through role-based permissions and approval workflows
- **Audit and monitor** all compliance activities in real-time
- **Interact seamlessly** with Sui blockchain through wallet integration

This web application complements the [VeritasLog Smart Contracts](https://github.com/VeritasLog/veritaslog-contracts) to provide a complete decentralized compliance solution.

### Use Cases

- 🏦 **Financial Compliance**: Transaction monitoring, KYC/AML record keeping
- 🏥 **Healthcare**: HIPAA-compliant audit trails, medical records access logs
- 🏭 **Manufacturing**: Quality assurance logs, safety incident reports
- 🔐 **Cybersecurity**: Security incident response documentation
- 📊 **Regulatory Compliance**: Government audits, transparency initiatives

---

## ✨ Key Features

### 🔐 **Wallet Integration**

- Sui Wallet Kit integration for seamless blockchain interactions
- Support for multiple wallet providers (Sui Wallet, Ethos, Suiet)
- Secure transaction signing and authorization

### 📝 **Log Management**

- Intuitive interface for registering new compliance logs
- Rich metadata input: title, severity, module/department, timestamps
- Real-time log listing with filtering and search capabilities
- Log detail views with complete audit information

### 📤 **Walrus Storage Integration**

- Direct file upload to Walrus decentralized storage
- Automatic CID (Content Identifier) generation
- Support for various file types (PDFs, documents, images)
- Progress tracking for uploads

### 👥 **Access Control Dashboard**

- Request access to specific logs (Auditor role)
- Review and approve/deny access requests (Admin role)
- View pending requests and access history
- Role-based UI with conditional rendering

### 📊 **Audit Trail Visualization**

- Timeline view of all log activities
- Access request history with approval status
- Owner and requester information display
- Severity-based color coding and filtering

### 🎨 **Modern UI/UX**

- Responsive design for desktop and mobile devices
- Dark mode support
- Intuitive navigation with clear role separation
- Real-time updates using React state management

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    VeritasLog Web Application                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────┐              ┌──────────────────┐         │
│  │   Next.js App    │              │   React Pages    │         │
│  │   (App Router)   │◄────────────►│   & Components   │         │
│  └──────────────────┘              └──────────────────┘         │
│          │                                   │                  │
│          ▼                                   ▼                  │
│  ┌──────────────────┐              ┌──────────────────┐         │
│  │  Sui Wallet Kit  │              │  State Management│         │
│  │   Integration    │              │   (React Hooks)  │         │
│  └──────────────────┘              └──────────────────┘         │
│          │                                   │                  │
│          └───────────────┬───────────────────┘                  │
│                          ▼                                      │
│                 ┌──────────────────┐                            │
│                 │   API Services   │                            │
│                 └──────────────────┘                            │
│                          │                                      │
│          ┌───────────────┼───────────────┐                      │
│          ▼               ▼               ▼                      │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │ Sui Blockchain│ │Walrus Storage│ │   Utilities  │            │
│  │   (Testnet)   │ │   (IPFS)     │ │  (Helpers)   │            │
│  └──────────────┘ └──────────────┘ └──────────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Component Hierarchy

```
app/
├── layout.tsx (Root Layout + Wallet Provider)
├── page.tsx (Landing/Dashboard)
├── admin/
│   ├── page.tsx (Admin Dashboard)
│   ├── register/page.tsx (Register Log Form)
│   └── approvals/page.tsx (Approve Access Requests)
├── auditor/
│   ├── page.tsx (Auditor Dashboard)
│   └── requests/page.tsx (Request Access Form)
└── logs/
    ├── page.tsx (All Logs List)
    └── [id]/page.tsx (Log Detail View)
```

---

## 📁 Project Structure

```
veritaslog-web/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Home/Dashboard page
│   ├── globals.css               # Global styles
│   ├── admin/                    # Admin-specific pages
│   │   ├── page.tsx              # Admin dashboard
│   │   ├── register/             # Register log page
│   │   │   └── page.tsx
│   │   └── approvals/            # Access approval page
│   │       └── page.tsx
│   ├── auditor/                  # Auditor-specific pages
│   │   ├── page.tsx              # Auditor dashboard
│   │   └── requests/             # Request access page
│   │       └── page.tsx
│   └── logs/                     # Log viewing pages
│       ├── page.tsx              # All logs list
│       └── [id]/                 # Dynamic log detail
│           └── page.tsx
├── components/                   # Reusable React components
│   ├── ui/                       # UI components (buttons, cards, etc.)
│   ├── layout/                   # Layout components (header, footer, nav)
│   ├── logs/                     # Log-specific components
│   │   ├── LogCard.tsx
│   │   ├── LogList.tsx
│   │   └── LogDetail.tsx
│   ├── access/                   # Access control components
│   │   ├── AccessRequestForm.tsx
│   │   └── AccessApprovalList.tsx
│   └── wallet/                   # Wallet-related components
│       └── WalletConnect.tsx
├── lib/                          # Utility functions and configurations
│   ├── sui/                      # Sui blockchain utilities
│   │   ├── client.ts             # Sui client configuration
│   │   ├── contracts.ts          # Smart contract interactions
│   │   └── wallet.ts             # Wallet utilities
│   ├── walrus/                   # Walrus storage utilities
│   │   ├── upload.ts             # File upload functions
│   │   └── retrieve.ts           # File retrieval functions
│   ├── utils.ts                  # General utility functions
│   └── constants.ts              # App constants (contract addresses, etc.)
├── types/                        # TypeScript type definitions
│   ├── log.ts                    # Log-related types
│   ├── user.ts                   # User/role types
│   └── sui.ts                    # Sui-specific types
├── hooks/                        # Custom React hooks
│   ├── useSuiWallet.ts           # Wallet connection hook
│   ├── useLogs.ts                # Log data fetching hook
│   └── useAccessControl.ts       # Access control hook
├── public/                       # Static assets
│   ├── images/                   # Images and icons
│   └── fonts/                    # Custom fonts
├── .env.local                    # Environment variables (not in git)
├── .env.example                  # Environment variables template
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Project dependencies
└── README.md                     # This file
```

### Key Directories

- **`app/`**: Next.js 16 App Router directory with all pages and layouts
- **`components/`**: Reusable React components organized by feature
- **`lib/`**: Business logic, API calls, and utility functions
- **`types/`**: TypeScript type definitions for type safety
- **`hooks/`**: Custom React hooks for shared logic
- **`public/`**: Static assets served directly

---

## 🛠️ Tech Stack

### Core Framework

- **[Next.js 16](https://nextjs.org/)**: React framework with App Router
- **[React 19](https://react.dev/)**: UI library with latest features
- **[TypeScript 5](https://www.typescriptlang.org/)**: Type-safe JavaScript

### Blockchain Integration

- **[@mysten/sui.js](https://github.com/MystenLabs/sui)**: Sui TypeScript SDK
- **[@mysten/dapp-kit](https://sdk.mystenlabs.com/dapp-kit)**: Sui dApp development kit
- **[@mysten/wallet-kit](https://github.com/MystenLabs/wallet-kit)**: Wallet adapter for Sui

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)**: Re-usable component library
- **[Lucide React](https://lucide.dev/)**: Icon library

### Storage

- **Walrus Storage**: Decentralized file storage (integrated via API)

### State Management

- **React Context API**: Global state management
- **React Hooks**: Local state and side effects

### Development Tools

- **[ESLint](https://eslint.org/)**: Code linting
- **[Prettier](https://prettier.io/)**: Code formatting
- **[Turbopack](https://turbo.build/)**: Fast bundler for Next.js

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17 or later ([Download](https://nodejs.org/))
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- **Sui Wallet** browser extension ([Install](https://chrome.google.com/webstore/detail/sui-wallet/))
- **Testnet SUI** tokens in your wallet

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/VeritasLog/veritaslog-web.git
cd veritaslog-web
```

2. **Install dependencies**

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Sui Network Configuration
NEXT_PUBLIC_SUI_NETWORK=testnet
NEXT_PUBLIC_SUI_RPC_URL=https://fullnode.testnet.sui.io:443

# VeritasLog Smart Contract
NEXT_PUBLIC_PACKAGE_ID=0x...  # Your deployed package ID
NEXT_PUBLIC_REGISTRY_ID=0x... # Your registry object ID

# Walrus Storage Configuration
NEXT_PUBLIC_WALRUS_PUBLISHER_URL=https://publisher.walrus-testnet.walrus.space
NEXT_PUBLIC_WALRUS_AGGREGATOR_URL=https://aggregator.walrus-testnet.walrus.space

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=VeritasLog
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

You should see the VeritasLog landing page! 🎉

---

## 📦 Installation Guide

### Detailed Setup Steps

#### 1. System Requirements

Ensure your system meets these requirements:

- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **Node.js**: Version 18.17 or later
- **RAM**: Minimum 4GB
- **Browser**: Chrome, Firefox, or Edge (latest versions)

#### 2. Install Node.js

**macOS (using Homebrew)**:

```bash
brew install node
```

**Windows**:
Download installer from [nodejs.org](https://nodejs.org/)

**Linux (Ubuntu/Debian)**:

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Verify installation**:

```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show 9.x.x or higher
```

#### 3. Install Sui Wallet Extension

1. Visit [Sui Wallet Chrome Store](https://chrome.google.com/webstore/detail/sui-wallet/)
2. Click "Add to Chrome"
3. Create a new wallet or import existing
4. Switch network to "Testnet"
5. Get testnet tokens from [Sui Faucet](https://faucet.testnet.sui.io/)

#### 4. Clone and Configure

```bash
# Clone repository
git clone https://github.com/VeritasLog/veritaslog-web.git
cd veritaslog-web

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Open .env.local in your editor
nano .env.local  # or use your preferred editor
```

#### 5. Configure Environment Variables

Replace placeholders in `.env.local` with actual values:

```env
# Get PACKAGE_ID and REGISTRY_ID from smart contract deployment
# See: https://github.com/VeritasLog/veritaslog-contracts

NEXT_PUBLIC_PACKAGE_ID=0x1a2b3c4d...  # From contract deployment output
NEXT_PUBLIC_REGISTRY_ID=0x9f8e7d6c...  # From contract deployment output
```

**Where to find these values:**

- Deploy the smart contract following [this guide](https://github.com/VeritasLog/veritaslog-contracts#-deployment-guide)
- Copy the `Package ID` and `Registry Object ID` from deployment output
- Paste them into `.env.local`

---

## ⚙️ Configuration

### Environment Variables Reference

| Variable                            | Description                        | Example                                          | Required |
| ----------------------------------- | ---------------------------------- | ------------------------------------------------ | -------- |
| `NEXT_PUBLIC_SUI_NETWORK`           | Sui network to connect to          | `testnet`, `mainnet`, `devnet`                   | Yes      |
| `NEXT_PUBLIC_SUI_RPC_URL`           | Sui RPC endpoint URL               | `https://fullnode.testnet.sui.io:443`            | Yes      |
| `NEXT_PUBLIC_PACKAGE_ID`            | Deployed smart contract package ID | `0x1a2b3c4d5e6f...`                              | Yes      |
| `NEXT_PUBLIC_REGISTRY_ID`           | VeritasLog registry object ID      | `0x9f8e7d6c5b4a...`                              | Yes      |
| `NEXT_PUBLIC_WALRUS_PUBLISHER_URL`  | Walrus publisher endpoint          | `https://publisher.walrus-testnet.walrus.space`  | Yes      |
| `NEXT_PUBLIC_WALRUS_AGGREGATOR_URL` | Walrus aggregator endpoint         | `https://aggregator.walrus-testnet.walrus.space` | Yes      |
| `NEXT_PUBLIC_APP_URL`               | Application base URL               | `http://localhost:3000`                          | Yes      |
| `NEXT_PUBLIC_APP_NAME`              | Application display name           | `VeritasLog`                                     | No       |

### Network Configurations

#### Testnet (Default)

```env
NEXT_PUBLIC_SUI_NETWORK=testnet
NEXT_PUBLIC_SUI_RPC_URL=https://fullnode.testnet.sui.io:443
```

#### Mainnet

```env
NEXT_PUBLIC_SUI_NETWORK=mainnet
NEXT_PUBLIC_SUI_RPC_URL=https://fullnode.mainnet.sui.io:443
```

#### Local Development

```env
NEXT_PUBLIC_SUI_NETWORK=localnet
NEXT_PUBLIC_SUI_RPC_URL=http://127.0.0.1:9000
```

---

## 💻 Usage Guide

### For Super Admins

#### 1. Connect Wallet

- Click "Connect Wallet" button in header
- Select your wallet provider (Sui Wallet, Ethos, etc.)
- Approve connection in wallet popup

#### 2. Access Admin Dashboard

- Navigate to `/admin` or click "Admin Dashboard" in navigation
- View system statistics and recent activities

#### 3. Add Admins

- Go to Admin Dashboard → "Manage Admins"
- Enter new admin address (0x...)
- Click "Add Admin" and confirm transaction
- Wait for blockchain confirmation

### For Admins

#### 1. Register New Compliance Log

**Step-by-step:**

a. Navigate to `/admin/register`

b. Fill in log details:

- **Title**: Descriptive name (e.g., "Failed Login Attempt Detected")
- **Severity**: Select from dropdown
  - 🔴 Critical: System-wide failures, security breaches
  - 🟠 High: Major issues requiring immediate attention
  - 🟡 Medium: Important issues with workaround available
  - 🟢 Low: Minor issues, informational
  - 🔵 Info: General information, routine operations
- **Module**: Department or system (e.g., "Authentication", "Payments")
- **File**: Upload log file (PDF, TXT, JSON, CSV, etc.)

c. Click "Upload to Walrus" to upload file

- Progress bar shows upload status
- Walrus CID is automatically generated

d. Click "Register Log"

- Confirm transaction in wallet
- Wait for confirmation
- Log is now immutably stored on blockchain

**Example Log:**

```
Title: Unauthorized API Access Attempt
Severity: Critical
Module: Authentication
File: auth-logs-2024-11-24.json
Timestamp: Auto-generated (2024-11-24 10:30:00 UTC)
```

#### 2. Approve Access Requests

**Step-by-step:**

a. Navigate to `/admin/approvals`

b. View pending requests list:

- Requester address
- Log title and ID
- Request timestamp
- Log severity

c. Review request details:

- Click on request to see full log metadata
- Verify requester has legitimate need

d. Take action:

- Click "Approve" to grant access
- Click "Deny" to reject (optional)
- Confirm transaction in wallet

e. Requester is notified and can now view log

### For Auditors

#### 1. Browse Available Logs

**Step-by-step:**

a. Navigate to `/logs`

b. View all registered logs in the system

c. Use filters:

- **Severity**: Filter by log severity level
- **Module**: Filter by department/system
- **Date**: Filter by creation date
- **Search**: Search by title or keywords

d. Click on log card to view details

#### 2. Request Access to Logs

**Step-by-step:**

a. Find desired log in `/logs` or go directly to `/logs/[id]`

b. View log metadata:

- Title, severity, module
- Owner information
- Creation timestamp
- Access status (public/restricted)

c. Click "Request Access" button

d. Add justification (optional):

- Explain why you need access
- Reference audit ticket number
- Provide context

e. Confirm transaction in wallet

f. Wait for admin approval

#### 3. View Approved Logs

**Step-by-step:**

a. Navigate to `/auditor/requests`

b. View your access requests:

- ⏳ Pending: Waiting for approval
- ✅ Approved: Access granted
- ❌ Denied: Access rejected

c. For approved logs:

- Click "View Log" to see full details
- Click "Download from Walrus" to retrieve file
- File is retrieved from decentralized storage

---

## 🔗 Integration with Smart Contracts

### Contract Interaction Examples

#### 1. Register Log (Admin)

```typescript
import { TransactionBlock } from "@mysten/sui.js/transactions";

const registerLog = async (
  walrusCid: string,
  title: string,
  severity: string,
  moduleName: string,
  createdAt: number
) => {
  const tx = new TransactionBlock();

  tx.moveCall({
    target: `${PACKAGE_ID}::registry::register_log`,
    arguments: [
      tx.object(REGISTRY_ID),
      tx.pure(walrusCid),
      tx.pure(title),
      tx.pure(severity),
      tx.pure(moduleName),
      tx.pure(createdAt),
    ],
  });

  const result = await signAndExecuteTransactionBlock({
    transactionBlock: tx,
    options: {
      showEffects: true,
      showObjectChanges: true,
    },
  });

  return result;
};
```

#### 2. Request Access (Auditor)

```typescript
const requestAccess = async (logId: number) => {
  const tx = new TransactionBlock();

  tx.moveCall({
    target: `${PACKAGE_ID}::registry::request_access`,
    arguments: [tx.object(REGISTRY_ID), tx.pure(logId)],
  });

  const result = await signAndExecuteTransactionBlock({
    transactionBlock: tx,
  });

  return result;
};
```

#### 3. Approve Access (Admin)

```typescript
const approveAccess = async (logId: number, requesterAddress: string) => {
  const tx = new TransactionBlock();

  tx.moveCall({
    target: `${PACKAGE_ID}::registry::approve_access`,
    arguments: [
      tx.object(REGISTRY_ID),
      tx.pure(logId),
      tx.pure(requesterAddress),
    ],
  });

  const result = await signAndExecuteTransactionBlock({
    transactionBlock: tx,
  });

  return result;
};
```

### Fetching Data from Blockchain

#### Get Registry Object

```typescript
import { SuiClient } from "@mysten/sui.js/client";

const suiClient = new SuiClient({ url: SUI_RPC_URL });

const getRegistry = async () => {
  const registry = await suiClient.getObject({
    id: REGISTRY_ID,
    options: {
      showContent: true,
    },
  });

  return registry;
};
```

#### Parse Logs from Registry

```typescript
const getLogs = async () => {
  const registry = await getRegistry();
  const content = registry.data?.content;

  if (content && "fields" in content) {
    const logs = content.fields.logs;
    return logs;
  }

  return [];
};
```

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

Vercel provides the best experience for Next.js applications:

#### 1. Connect Repository

a. Visit [vercel.com](https://vercel.com/)
b. Click "Add New Project"
c. Import your GitHub repository
d. Vercel auto-detects Next.js configuration

#### 2. Configure Environment Variables

In Vercel dashboard:

- Go to Project Settings → Environment Variables
- Add all variables from `.env.local`
- Make sure to prefix with `NEXT_PUBLIC_` for client-side access

#### 3. Deploy

- Click "Deploy"
- Vercel automatically builds and deploys
- Your app is live! 🎉

#### 4. Custom Domain (Optional)

- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

**Production URL Example:**

```
https://veritaslog.vercel.app
```

### Alternative Deployment Options

#### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build project
npm run build

# Deploy
netlify deploy --prod
```

#### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Build image
docker build -t veritaslog-web .

# Run container
docker run -p 3000:3000 --env-file .env.local veritaslog-web
```

#### Self-Hosted (VPS)

```bash
# On your server
git clone https://github.com/VeritasLog/veritaslog-web.git
cd veritaslog-web

# Install dependencies
npm ci

# Build for production
npm run build

# Start with PM2
npm install -g pm2
pm2 start npm --name "veritaslog" -- start

# Configure nginx as reverse proxy
```

---

## 🛠️ Development

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Type check
npm run type-check
```

### File Watcher

Next.js has built-in hot reload. Changes to files automatically refresh the browser.

### Project Scripts

From `package.json`:

```json
{
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  }
}
```

### Adding New Pages

Next.js App Router uses file-based routing:

```bash
# Create new page
mkdir -p app/my-page
touch app/my-page/page.tsx
```

```tsx
// app/my-page/page.tsx
export default function MyPage() {
  return (
    <div>
      <h1>My New Page</h1>
    </div>
  );
}
```

Access at: `http://localhost:3000/my-page`

### Adding New Components

```bash
# Create component
mkdir -p components/my-component
touch components/my-component/MyComponent.tsx
```

```tsx
// components/my-component/MyComponent.tsx
export function MyComponent({ title }: { title: string }) {
  return <div>{title}</div>;
}
```

### Styling Guidelines

**Use Tailwind utility classes:**

```tsx
<div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Title</h2>
</div>
```

**Custom CSS (when necessary):**

```css
/* app/globals.css */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors;
  }
}
```

---

## 🔒 Security Considerations

### Wallet Security

- ✅ Never store private keys in application
- ✅ All transactions require user approval
- ✅ Use official Sui wallet adapters only
- ✅ Validate all transaction data before signing

### API Security

- ✅ All blockchain interactions are read-only except signed transactions
- ✅ Environment variables for sensitive configuration
- ✅ No API keys exposed in client-side code
- ✅ HTTPS only in production

### Data Security

- ✅ No sensitive data stored in localStorage/sessionStorage
- ✅ File uploads sanitized before sending to Walrus
- ✅ Access control enforced at smart contract level
- ✅ User input validated and sanitized

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

- **Developer**: Dhisa (ijlalwindhi15@gmail.com)
- **Organization**: VeritasLog Team

---

## 📞 Support

For questions, feedback, or support:

- 📧 Email: ijlalwindhi15@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/VeritasLog/veritaslog-web/issues)

---

<div align="center">

**Built with ❤️ on Sui Blockchain**

_Empowering transparency, one log at a time_
