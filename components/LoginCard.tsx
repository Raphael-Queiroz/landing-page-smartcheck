import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

export const LoginCard: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [keepLogged, setKeepLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="w-full max-w-md p-8 md:p-10 rounded-[24px] relative overflow-hidden animate-fade-in-up bg-[#1e293b]/50 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/40">
        
        {/* Removed top accent line gradient */}

        <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Bem Vindo a SmartCheck</h2>
            <p className="text-slate-300 text-sm">Entre para continuar o treinamento.</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider pl-1">
                    Pilot ID / Email
                </label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-5 py-3.5 rounded-lg text-sm transition-all duration-300 bg-black/20 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400 focus:bg-black/40 focus:scale-[1.02] focus:shadow-[0_0_15px_rgba(96,165,250,0.2)]"
                />
            </div>

            <div className="space-y-1.5 relative">
                <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider pl-1">
                    Secure Password
                </label>
                <div className="relative">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-5 py-3.5 rounded-lg text-sm transition-all duration-300 bg-black/20 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-400 focus:bg-black/40 focus:scale-[1.02] focus:shadow-[0_0_15px_rgba(96,165,250,0.2)] tracking-widest"
                    />
                    <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors text-xs font-medium uppercase tracking-wider"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                <button 
                    type="button"
                    onClick={() => setKeepLogged(!keepLogged)}
                    className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                    {keepLogged ? (
                        <CheckSquare className="w-4 h-4 text-blue-400" />
                    ) : (
                        <Square className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                    )}
                    <span>Keep me logged in</span>
                </button>
                <a href="#" className="text-blue-300 hover:text-blue-200 font-medium transition-colors">
                    Forgot Access?
                </a>
            </div>

            <button 
                type="submit"
                className="w-full bg-blue-400/70 hover:bg-blue-400/90 text-white py-3.5 rounded-lg font-bold text-sm transform transition-all duration-300 shadow-lg shadow-blue-400/20 border border-blue-300/30 backdrop-blur-md hover:scale-[1.02]"
            >
                Continue My Journey
            </button>
        </form>

        <div className="mt-8 text-center border-t border-white/10 pt-6">
            <p className="text-xs text-slate-400">
                New to the cockpit?{' '}
                <a href="#" className="text-blue-300 hover:text-blue-200 font-semibold transition-colors">
                    Create an account
                </a>
            </p>
        </div>
    </div>
  );
};