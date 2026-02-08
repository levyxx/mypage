import { motion } from 'framer-motion';
import { Gamepad2, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold text-white">Nagoya University</h3>
              <p className="text-slate-400 mt-1">
                Department of Electrical, Electronics and Information Engineering
              </p>
              <p className="text-slate-500 text-sm mt-2">School of Engineering</p>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Gamepad2 className="text-purple-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Hobbies</h2>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 h-full">
              <h3 className="text-lg font-semibold text-white mb-2">Games</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Action Games
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Rhythm Games
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
