import React from 'react';

export const SocialProof: React.FC = () => {
    // Using Pravatar for consistent placeholder faces
    const avatars = [
        "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a04258a2462d826712d",
        "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    ];

    return (
        <div className="flex items-center gap-3 animate-fade-in-up delay-200">
            <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border border-white/30 overflow-hidden ring-2 ring-black/10">
                        <img src={src} alt="Pilot" className="w-full h-full object-cover opacity-90" />
                    </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-[10px] text-white font-medium ring-2 ring-black/10">
                    +2k
                </div>
            </div>
            <span className="text-xs text-blue-100/70 font-light">
                Joined by <span className="font-semibold text-white">12,000+</span> technician worldwide
            </span>
        </div>
    );
};