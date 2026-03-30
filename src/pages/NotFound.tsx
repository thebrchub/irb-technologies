import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 relative overflow-hidden px-6 py-24 pt-32">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl border border-slate-800 mb-8 relative">
           <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-2xl"></div>
           <ShieldAlert className="w-10 h-10 text-amber-500 relative z-10" />
        </div>

        <h1 className="text-[6rem] md:text-[8rem] font-extrabold text-slate-900 leading-none tracking-tighter mb-4">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 tracking-tight">
          Secure Channel Not Found
        </h2>
        
        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
          The digital asset you are looking for has been moved, deleted, or never existed in our infrastructure.
        </p>

        <Link
          to="/"
          className="group flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
        >
          <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
          Return to Base
        </Link>
      </div>
    </div>
  );
};

export default NotFound;