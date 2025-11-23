import Navbar from "@/components/layout/navbar-logs";
import { SuiProviders } from "@/lib/sui-provider";

function LogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SuiProviders>
      <main className="p-6 space-y-6">
        <Navbar />
        {children}
      </main>
    </SuiProviders>
  );
}

export default LogsLayout;
