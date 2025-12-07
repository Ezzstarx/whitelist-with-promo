import { motion } from "framer-motion";
import { X } from "lucide-react"; // close icon
import metamask from "./assets/icons/wallet/meta.png";
import binance from "./assets/icons/wallet/binance.png";
import trust from "./assets/icons/wallet/trust.png";
import okx from "./assets/icons/wallet/okx.png";
import coinbase from "./assets/icons/wallet/coinbase.png";
import walletconnect from "./assets/icons/wallet/wallet-connect.png";
import more from "./assets/icons/wallet/more.png";

export default function Connect({ onClose }) {
  const wallets = [
    { name: "Metamask Wallet", icon: metamask },
    { name: "Binance Web3", icon: binance },
    { name: "Trust Wallet", icon: trust },
    { name: "OKX Wallet", icon: okx },
    { name: "Coinbase Wallet", icon: coinbase },
    { name: "Wallet Connect", icon: walletconnect },
    { name: "More", icon: more },
  ];

  const connetWallet = () => {
    // Add wallet connection logic here
    onClose();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-50"
    >
      {/* MODAL BOX */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-3xl bg-[#0d0d11] rounded-2xl border border-cyan-300 shadow-[0_0_40px_rgba(0,0,0,0.5)] p-8 relative text-white"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h1 className="text-2xl font-bold">Connect Wallet</h1>
        <p className="text-sm text-white/60 mt-2 max-w-xl leading-relaxed">
          Start by connecting with one of the wallets below. Be sure to store your
          private keys or seed phrase securely. Never share them with anyone.
        </p>

        {/* Wallet Options */}
        <div className="grid grid-cols-3 md:grid-cols-7 gap-6 mt-8 text-center">
          {wallets.map((w, i) => (
            <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div
                className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                group-hover:bg-white/10 transition"
              >
                <img src={w.icon} alt={w.name} className="" />
              </div>
              <p style={{ fontFamily: "'Tektur', sans-serif" }} className="text-xs text-white/80 leading-tight">{w.name}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-8" />

        {/* Footer */}
        <div className="flex justify-between items-center w-full flex-wrap gap-4">
          <a href="#" className="text-[#C503BC] underline text-sm hover:underline">
            Learn How to Connect
          </a>

          <div className="flex gap-4">
            <button style={{ fontFamily: "'Tektur', sans-serif" }}
              onClick={onClose}
              className="px-6 py-2 rounded-xl border border-white/20 text-white/70 hover:bg-white/10 "
            >
              Cancel
            </button>

            <button onClick={connetWallet} style={{ fontFamily: "'Tektur', sans-serif" }}
              className="px-6 py-2  rounded-xl bg-gradient-to-r from-[#6a6aff] to-[#c56bff]
              shadow-[0_0_20px_rgba(120,70,255,0.5)] hover:opacity-90 transition"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
