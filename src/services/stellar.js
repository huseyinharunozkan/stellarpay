import {
  isConnected,
  requestAccess,
} from "@stellar/freighter-api";

export async function connectWallet() {
  try {
    const connected = await isConnected();

    if (!connected) {
      throw new Error("Freighter wallet is not available.");
    }

    const result = await requestAccess();

console.log("Freighter Result:", result);

return result.address;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function disconnectWallet() {
  return null;
}