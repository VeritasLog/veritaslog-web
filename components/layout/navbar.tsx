import ConnectWalletButton from "./connect-wallet";

function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">VeritasLog Dashboard</h1>
        <p className="text-muted-foreground">Truth. Verified. Transparent.</p>
      </div>
      <ConnectWalletButton />
    </div>
  );
}

export default Navbar;
