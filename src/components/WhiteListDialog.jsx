import { X } from "lucide-react";
import bg from "./assets/bg.png";
import x from "./assets/icons/xd.png";

export default function WhitelistDialog({ onClose }) {
    return (
        <div style={{ fontFamily: "'Tektur', sans-serif" }} className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative w-[90%] lg:w-[40%] py-16 neon-card border border-cyan-300 rounded-2xl overflow-hidden">

                {/* Background image (behind everything) */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-100 z-0"
                    style={{ backgroundImage: `url(${bg})` }}
                ></div>

                {/* CONTENT (on top) */}
                <div className="relative z-10">
                    {/* close button */}
                    <button
                        onClick={onClose}
                        className="absolute -top-12 right-4 text-white/70 hover:text-white"
                    >
                        <X size={24} />
                    </button>

                    <h1 className="text-center mb-8 text-cyan-400 text-2xl">
                        Thank you for joining the whitelist!
                    </h1>

                    <p className="text-center text-gray-300 mt-3">
                        You're officially part of the Ezzstar ecosystem.
                    </p>

                    <h2 className="text-center text-pink-600 text-xl mt-6">
                        Complete The Last Step Below
                    </h2>

                    <div className="flex gap-4 justify-center mt-6">
                        <a target="_blank" href="https://x.com/ezzstarx?s=21">
                            <button className="btn-blue flex">Follow us <img src={x} alt="" className="w-6 " /></button>
                        </a>
                        <a target="_blank" href="https://discord.gg/sY3gsZVyeg">

                            <button className="btn-purple">Join Discord</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
