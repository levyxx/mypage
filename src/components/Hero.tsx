import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4 tracking-wide">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            levyxx
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Software Engineer based in Nagoya.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com/levyxx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white"
          >
            <Github size={24} />
          </a>
          {/* Qiita icon is not available in lucide-react, using Code2 as placeholder or text */}
          <a
            href="https://qiita.com/levyx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white flex items-center justify-center w-[48px] h-[48px] font-bold"
          >
            Q
          </a>
          <a
             href="https://atcoder.jp/users/Levyx"
             target="_blank"
             rel="noopener noreferrer"
             className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white flex items-center justify-center w-[48px] h-[48px] font-bold"
          >
            At
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        Scroll Down
      </motion.div>
    </section>
  );
};

export default Hero;
