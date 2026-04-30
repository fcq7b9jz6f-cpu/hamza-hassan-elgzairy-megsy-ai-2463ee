import React from 'react';
import { ui } from '../lib/theme';
import { motion } from 'framer-motion';
import { Briefcase, Cpu, Code, Zap, Target } from 'lucide-react';

const About = () => {
  const aboutImageUrl = 'https://images.pexels.com/photos/33433724/pexels-photo-33433724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

  return (
    <div className={`${ui.section} ${ui.container}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
      >
        <h1 className={`${ui.h1} ${ui.gradientText} mb-4`}>About Me</h1>
        <p className="text-lg sm:text-xl text-text-muted">
          An AI Engineer driven by a passion for building intelligent, scalable, and impactful solutions that shape the future.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="aspect-square relative rounded-3xl overflow-hidden glass p-2">
             <img src={aboutImageUrl} alt="Hamza Hassan Elgzairy" className="w-full h-full object-cover rounded-2xl" />
             <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/50 backdrop-blur-md rounded-xl border border-white/10">
                <p className='font-bold text-lg'>Hamza H. Elgzairy</p>
                <p className='text-sm text-violet-300'>AI Engineer @ Megsy AI</p>
             </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <h2 className={`${ui.h2} mb-6`}>From Curiosity to Creation</h2>
          <div className="space-y-6 text-text-muted text-lg leading-relaxed">
            <p>
              My journey into the world of Artificial Intelligence began not in a classroom, but with a profound curiosity about how complex systems learn and adapt. This curiosity evolved into a dedicated career focused on the intersection of data, algorithms, and user experience. As an AI Engineer at <a href='https://megsy.ai' target='_blank' rel='noopener noreferrer' className='text-violet-400 font-semibold'>Megsy AI</a>, I am on the front lines, architecting and implementing the core intelligence that powers our next-generation platform.
            </p>
            <p>
              I specialize in the full development lifecycle of AI systems—from conceptualization and data processing to model training, deployment, and integration into full-stack applications. My work is not just about writing code; it's about solving real-world problems and creating tangible value through technology.
            </p>
             <p>
              I thrive in dynamic environments where innovation is constant. Whether it's fine-tuning a large language model, designing a scalable API for an AI service, or collaborating with a team to bring a complex feature to life, my goal is always to build products that are not only intelligent but also reliable and intuitive.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Core Competencies Section */}
    <div className="mt-24 sm:mt-32">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className={`${ui.h2} mb-4`}>Core Competencies</h2>
             <p className="text-lg text-text-muted">
             I leverage a diverse skill set to translate complex technical challenges into elegant solutions.
            </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`${ui.card} text-center`}>
                <Cpu size={32} className="mx-auto text-violet-400 mb-4"/>
                <h3 className='font-bold text-xl mb-2'>Machine Learning</h3>
                <p className='text-text-muted text-sm'>Expert in Scikit-learn, TensorFlow, PyTorch. Experience with NLP, Computer Vision and predictive modeling.</p>
            </div>
            <div className={`${ui.card} text-center`}>
                <Code size={32} className="mx-auto text-sky-400 mb-4"/>
                <h3 className='font-bold text-xl mb-2'>Backend Development</h3>
                <p className='text-text-muted text-sm'>Building robust APIs and data pipelines using Python (FastAPI), Node.js, and integrating with databases like PostgreSQL and Supabase.</p>
            </div>
            <div className={`${ui.card} text-center`}>
                <Zap size={32} className="mx-auto text-amber-400 mb-4"/>
                <h3 className='font-bold text-xl mb-2'>MLOps & Deployment</h3>
                <p className='text-text-muted text-sm'>Proficient in containerization with Docker, CI/CD pipelines, and deploying scalable models on cloud platforms (AWS, GCP).</p>
            </div>
            <div className={`${ui.card} text-center`}>
                <Target size={32} className="mx-auto text-fuchsia-400 mb-4"/>
                <h3 className='font-bold text-xl mb-2'>Product Strategy</h3>
                <p className='text-text-muted text-sm'>Adept at aligning technical possibilities with business goals to deliver AI features that have a measurable market impact.</p>
            </div>
        </div>
    </div>

    </div>
  );
};

export default About;
