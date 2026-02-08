import { motion } from 'framer-motion';
import { Gamepad2, GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex-1">
              <h3 className="text-lg font-semibold text-white">Nagoya University</h3>
              <p className="text-slate-400 mt-1">
                Department of Electrical, Electronics and Information Engineering
              </p>
              <p className="text-slate-500 text-sm mt-2">School of Engineering</p>
              <p className="text-slate-500 text-sm mt-2">The average GPA is 4.06 / 4.3</p>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-green-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Experience</h2>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex-1">
               <a href="https://www.kurusugawa.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  <h3 className="text-lg font-semibold text-white">Kurusugawa Computer Inc.</h3>
               </a>
              <p className="text-slate-400 mt-1">
                Software Development Part-time
              </p>
              <p className="text-slate-500 text-sm mt-3">
                Developing Slack Apps, GAS applications and more. Mainly using Go, TypeScript and Python. I also provide support for company projects.
              </p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-amber-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Certifications</h2>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex-1">
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></span>
                  <div>
                    <span className="text-white font-semibold">FE</span>
                    <p className="text-sm text-slate-500">Fundamental Information Technology Engineer</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></span>
                  <div>
                    <span className="text-white font-semibold">AP</span>
                    <p className="text-sm text-slate-500">Applied Information Technology Engineer</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></span>
                  <div>
                    <span className="text-white font-semibold">AWS CLF</span>
                    <p className="text-sm text-slate-500">AWS Certified Cloud Practitioner</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></span>
                  <div>
                    <span className="text-white font-semibold">G Certificate</span>
                    <p className="text-sm text-slate-500">JDLA Deep Learning for GENERAL</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <Gamepad2 className="text-purple-400" size={28} />
              <h2 className="text-2xl font-bold text-white">Hobbies</h2>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex-1">
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
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  Racing Games
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
