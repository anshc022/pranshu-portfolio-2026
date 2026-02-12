import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

const Signup = () => {
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [msg, setMsg] = useState('');
    const [form, setForm] = useState({ username: '', email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // NOTE: In production, point to actual backend URL
            const res = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            
            const data = await res.json();
            
            if (res.ok) {
                setStatus('success');
                setMsg(data.message);
                setForm({ username: '', email: '', password: '' });
            } else {
                setStatus('error');
                setMsg(data.error || "Registration failed");
            }
        } catch (err) {
            setStatus('error');
            setMsg("Network Error: Is the backend running?");
        }
    };

    return (
        <section className="py-24 flex items-center justify-center min-h-[60vh]">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md p-8 glass-card rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl relative overflow-hidden"
            >
                {/* Status Badge */}
                {status === 'success' && (
                    <div className="absolute top-0 left-0 w-full bg-emerald-500/20 text-emerald-400 text-sm font-medium py-2 text-center flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4" /> {msg}
                    </div>
                )}
                {status === 'error' && (
                    <div className="absolute top-0 left-0 w-full bg-red-500/20 text-red-400 text-sm font-medium py-2 text-center flex items-center justify-center gap-2">
                        <AlertCircle className="w-4 h-4" /> {msg}
                    </div>
                )}

                <h2 className="text-3xl font-bold text-white mb-2 mt-4 text-center">Join the Network</h2>
                <p className="text-neutral-400 text-center mb-8 text-sm">Create your access credentials.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <InputGroup icon={<User />} type="text" placeholder="Username" value={form.username} onChange={e => setForm({...form, username: e.target.value})} />
                    <InputGroup icon={<Mail />} type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                    <InputGroup icon={<Lock />} type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />

                    <button 
                        disabled={status === 'loading'}
                        className="w-full py-4 mt-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? 'Processing...' : 'Register Now'}
                        {!status === 'loading' && <ArrowRight className="w-5 h-5" />}
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

const InputGroup = ({ icon, type, placeholder, value, onChange }) => (
    <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-white transition-colors">
            {React.cloneElement(icon, { size: 20 })}
        </div>
        <input 
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all placeholder:text-neutral-600"
        />
    </div>
);

export default Signup;
