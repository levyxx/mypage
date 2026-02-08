import { motion } from 'framer-motion';

const languages = [
  "Go", "Python", "TypeScript", "C++", "C", "C#"
];

const others = [
  "Docker", "Linux", "Shell", "Unity", "Blender"
];

const Tag = ({ name, index }: { name: string, index: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="px-4 py-2 bg-slate-800 text-slate-200 rounded-lg border border-slate-700 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
  >
    {name}
  </motion.span>
);

const TechStack = () => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Tech Stack
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl text-slate-400 mb-4 text-center">Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((lang, index) => (
                <Tag key={lang} name={lang} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-slate-400 mb-4 text-center">Tools & Others</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {others.map((tool, index) => (
                <Tag key={tool} name={tool} index={index + languages.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
