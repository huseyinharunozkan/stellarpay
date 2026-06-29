import { useState } from "react";
import { connectWallet, disconnectWallet } from "../services/stellar";

function Wallet() {
  const [walletAddress, setWalletAddress] = useState("");

  const handleConnect = async () => {
    try {
      const address = await connectWallet();
      setWalletAddress(address);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDisconnect = () => {
    disconnectWallet();
    setWalletAddress("");
  };

  return (
    <div>
      <h2>Wallet</h2>

      {walletAddress ? (
        <>
          <p>
            <strong>Address:</strong>{" "}
  {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-6)}`}
          </p>

          <button onClick={handleDisconnect}>
            Disconnect Wallet
          </button>
        </>
      ) : (
        <button onClick={handleConnect}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default Wallet;