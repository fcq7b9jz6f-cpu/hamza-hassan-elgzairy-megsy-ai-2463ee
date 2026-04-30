import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Code, ShoppingBag } from 'lucide-react';
import { ui } from '../lib/theme';
import { motion } from 'framer-motion';

const stagger = (delay) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: delay || 0.1 } },
});

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const heroImageUrl = "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"; // Placeholder, will be replaced with the image from find_images

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        className={`${ui.section} relative min-h-screen flex items-center justify-center text-center`} 
        variants={stagger(0.2)} 
        initial="hidden" 
        animate="visible">
        <div className="absolute inset-0 z-0">
          <img src="https://images.pexels.com/photos/1963075/pexels-photo-1963075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Hero Background" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <motion.div variants={fadeIn} className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 border-4 border-violet-500/50 shadow-lg overflow-hidden">
            <img src={heroImageUrl} alt="Hamza Hassan Elgzairy" className="w-full h-full object-cover" />
          </motion.div>
          <motion.h1 variants={fadeIn} className={`${ui.h1} mb-4`}>
            Hamza Hassan Elgzairy
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl md:text-2xl text-text-muted mb-8 max-w-2xl">
            AI Engineer @ <a href="https://megsy.ai" target="_blank" rel="noopener noreferrer" className="font-semibold text-violet-400 hover:text-violet-300">Megsy AI</a>, crafting intelligent systems that push the boundaries of technology.
          </motion.p>
          <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
            <Link to="/projects" className={ui.btnPrimary}>
              View My Work <ArrowRight size={20} />
            </Link>
            <Link to="/about" className={ui.btnGhost}>
              More About Me
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section className={`${ui.section} bg-surface-2`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger()}>
        <div className={ui.container}>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.h2 variants={fadeIn} className={ui.h2}>What I Do</motion.h2>
            <motion.p variants={fadeIn} className="mt-4 text-lg text-text-muted">
              I focus on creating robust, scalable, and impactful AI solutions. From developing complex models to building user-centric applications, my work spans the full spectrum of AI engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeIn} className={`${ui.card} text-center`}>
              <div className="inline-block p-4 bg-violet-900/50 rounded-full mb-4">
                <BrainCircuit className="text-violet-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Model Development</h3>
              <p className="text-text-muted">Specializing in building and training custom machine learning and deep learning models for various applications, including NLP and computer vision. I have extensive experience with frameworks like TensorFlow and PyTorch.</p>
            </motion.div>
            <motion.div variants={fadeIn} className={`${ui.card} text-center`}>
              <div className="inline-block p-4 bg-sky-900/50 rounded-full mb-4">
                <Code className="text-sky-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Full-Stack AI Integration</h3>
              <p className="text-text-muted">Bridging the gap between AI models and real-world applications. I design and implement full-stack systems, integrating AI functionalities into scalable web services and user-friendly interfaces using technologies like React and Node.js.</p>
            </motion.div>
            <motion.div variants={fadeIn} className={`${ui.card} text-center`}>
              <div className="inline-block p-4 bg-fuchsia-900/50 rounded-full mb-4">
                <ShoppingBag className="text-fuchsia-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Product Creation</h3>
              <p className="text-text-muted">Leveraging my expertise to create valuable digital assets for developers and AI enthusiasts. I develop high-quality AI prompt packs, comprehensive courses, and ready-to-use project templates to accelerate AI development.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
