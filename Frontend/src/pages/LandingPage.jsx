
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { Bot, Mail, Zap, Shield, ArrowRight, Github, Star } from 'lucide-react';
// import Button from '../components/ui/Button';

// const LandingPage = () => {
//   const navigate = useNavigate();

//   const features = [
//     {
//       icon: Bot,
//       title: "AI-Powered Agents",
//       description: "Create intelligent email agents that understand context and respond automatically"
//     },
//     {
//       icon: Mail,
//       title: "Real Email Integration",
//       description: "Each agent gets a real email address with full inbox management"
//     },
//     {
//       icon: Zap,
//       title: "Webhook Automation",
//       description: "Trigger agents via GitHub webhooks and other integrations"
//     },
//     {
//       icon: Shield,
//       title: "Secure & Reliable",
//       description: "Enterprise-grade security with real-time monitoring and analytics"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
//       {/* Navigation */}
//       <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="flex items-center space-x-3"
//             >
//               <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
//                 <Bot className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-900">AgentMail</span>
//             </motion.div>
            
//             <motion.div 
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="flex items-center space-x-4"
//             >
//               <Button
//                 variant="ghost"
//                 onClick={() => navigate('/login')}
//                 className="text-gray-600 hover:text-gray-900"
//               >
//                 Sign In
//               </Button>
//               <Button
//                 onClick={() => navigate('/register')}
//                 className="bg-blue-500 hover:bg-blue-600"
//               >
//                 Get Started
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
//               AI Email Agents
//               <span className="block text-blue-500">Made Simple</span>
//             </h1>
            
//             <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
//               Create intelligent AI agents with real email addresses. Automate responses, 
//               integrate with GitHub, and build powerful email workflows that work 24/7.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 size="lg"
//                 onClick={() => navigate('/register')}
//                 className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-4"
//               >
//                 Start Building Free
//                 <ArrowRight className="w-5 h-5 ml-2" />
//               </Button>
              
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 onClick={() => navigate('/login')}
//                 className="text-lg px-8 py-4"
//               >
//                 View Demo
//               </Button>
//             </div>
//           </motion.div>

//           {/* Hero Visual */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="mt-16"
//           >
//             <div className="relative max-w-4xl mx-auto">
//               <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
//                 <div className="bg-gray-900 px-6 py-4 flex items-center space-x-2">
//                   <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                   <span className="ml-4 text-gray-400 text-sm">AgentMail Dashboard</span>
//                 </div>
//                 <div className="p-8">
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {[1, 2, 3].map((i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: 0.5 + i * 0.1 }}
//                         className="bg-gray-50 rounded-lg p-4"
//                       >
//                         <div className="w-8 h-8 bg-blue-500 rounded-lg mb-3"></div>
//                         <div className="h-2 bg-gray-300 rounded mb-2"></div>
//                         <div className="h-2 bg-gray-200 rounded w-2/3"></div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Floating Elements */}
//               <motion.div
//                 animate={{ y: [-10, 10, -10] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
//               >
//                 <Mail className="w-8 h-8 text-white" />
//               </motion.div>
              
//               <motion.div
//                 animate={{ y: [10, -10, 10] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 className="absolute -bottom-4 -left-4 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg"
//               >
//                 <Bot className="w-6 h-6 text-white" />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Everything you need to build AI email agents
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Powerful features that make creating and managing AI email agents effortless
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                   <feature.icon className="w-8 h-8 text-blue-500" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold text-white mb-6">
//               Ready to build your first AI agent?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Join developers who are already automating their email workflows with AgentMail
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 size="lg"
//                 onClick={() => navigate('/register')}
//                 className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-4"
//               >
//                 Start Free Trial
//                 <ArrowRight className="w-5 h-5 ml-2" />
//               </Button>
              
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 className="text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100"
//               >
//                 <Github className="w-5 h-5 mr-2" />
//                 View on GitHub
//               </Button>
//             </div>
            
//             <div className="flex items-center justify-center mt-8 text-gray-400">
//               <Star className="w-4 h-4 mr-1" />
//               <span>No credit card required • Free forever plan available</span>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-white border-t border-gray-200 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center space-x-3 mb-4 md:mb-0">
//               <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
//                 <Bot className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-900">AgentMail</span>
//             </div>
            
//             <div className="text-gray-600">
//               <p>&copy; 2024 AgentMail. Built for developers, by developers.</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;










import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Navigation will be handled externally
import { 
  Bot, Mail, Zap, Shield, ArrowRight, Github, Star, Play, Check, 
  ChevronDown, GitBranch, Brain 
} from 'lucide-react';

const LandingPage = () => {
  // Navigation functions to be passed as props or implemented externally
  const handleNavigation = (path) => {
    console.log(`Navigate to: ${path}`);
    // In real implementation, this would use your routing solution
  };
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [terminalText, setTerminalText] = useState('');

  const terminalMessages = [
    '> Initializing AI Agent Infrastructure...',
    '> Provisioning secure email endpoints...',
    '> Configuring autonomous response systems...',
    '> AgentMail ready for deployment ✅'
  ];

  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    const interval = setInterval(() => {
      if (index < terminalMessages.length) {
        if (charIndex < terminalMessages[index].length) {
          setTerminalText(prev => prev + terminalMessages[index][charIndex]);
          charIndex++;
        } else {
          setTerminalText(prev => prev + '\n');
          index++;
          charIndex = 0;
        }
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Native Architecture",
      description: "Purpose-built for AI agents with intelligent parsing, context understanding, and autonomous decision-making capabilities"
    },
    {
      icon: Mail,
      title: "Real Email Integration",
      description: "Each agent gets a real email address with full inbox management and autonomous email handling"
    },
    {
      icon: Zap,
      title: "Autonomous Actions",
      description: "Agents can read, analyze, and respond to emails without human intervention via webhooks and integrations"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with real-time monitoring, analytics, and reliable infrastructure"
    }
  ];

  const FloatingAgent = ({ delay = 0, size = 60 }) => (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20`}
      style={{ width: size, height: size }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        rotate: [0, 360],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 animate-pulse" />
    </motion.div>
  );

  const AgentOrbit = () => (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute top-20 left-1/4"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <FloatingAgent delay={0} size={40} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <FloatingAgent delay={2} size={60} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/3"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <FloatingAgent delay={4} size={35} />
      </motion.div>
    </div>
  );

  const CodeDemo = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-4 text-gray-400 text-sm">AgentMail API</span>
      </div>
      <pre className="text-sm text-gray-300 overflow-x-auto">
        <code>{`// Deploy an AI agent in seconds
const agent = new AgentMail({
  name: "github-responder",
  inbox: "ai@yourcompany.com",
  model: "gpt-4"
});

// Autonomous email handling
agent.on('email', async (email) => {
  const action = await agent.analyze(email);
  if (action.type === 'github_contributor') {
    await agent.reply(generateWelcome(action.data));
  }
});`}</code>
      </pre>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950/50 to-purple-950/50 text-white overflow-hidden">
      
      {/* Navigation */}
      <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AgentMail</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <button
                onClick={() => handleNavigation('/login')}
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800/50"
              >
                Sign In
              </button>
              <motion.button
                onClick={() => setShowSignupModal(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <AgentOrbit />
        
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-emerald-900/20" />
        
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0,10 L 10,10 L 10,0 M 10,10 L 20,10 M 10,10 L 10,20" 
                      stroke="currentColor" strokeWidth="0.5" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Email Agents
              </span>
              <br />
              <motion.span
                className="text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Made Simple
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            The first AI-native email infrastructure. Create intelligent agents with real email addresses 
            that autonomously handle responses, integrate with GitHub, and build powerful workflows 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => setShowSignupModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building Free <ArrowRight className="ml-2 inline-block" size={20} />
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border border-gray-600 rounded-xl font-semibold text-lg hover:border-gray-400 transition-colors duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} /> Watch Demo
            </motion.button>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
                <div className="bg-gray-800 px-6 py-4 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-sm">AgentMail Dashboard</span>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mb-3"></div>
                        <div className="h-2 bg-gray-600 rounded mb-2"></div>
                        <div className="h-2 bg-gray-700 rounded w-2/3"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Mail className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <Bot className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Autonomous Intelligence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Traditional email clients require human interaction. AgentMail enables your AI agents 
              to operate independently with advanced automation capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gray-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all group"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Demo Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Deploy in <span className="text-purple-400">Minutes</span>
            </h2>
            <p className="text-xl text-gray-400">
              Simple API, powerful capabilities. Get your AI agents handling emails autonomously.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <CodeDemo />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Real-time Agent Monitoring</h3>
              <div className="space-y-4">
                {[
                  "Email received from new GitHub contributor",
                  "Agent analyzing intent and context",
                  "Generating personalized welcome response", 
                  "Email sent successfully"
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Check size={14} />
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="py-20 px-4 bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-950/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-gray-400 text-sm">AgentMail Terminal</span>
            </div>
            <div className="font-mono text-green-400 min-h-[200px]">
              <pre className="whitespace-pre-wrap">{terminalText}</pre>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-green-400 ml-1"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Deploy Your <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">AI Agents</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join developers who are already automating their email workflows with intelligent 
              agents that work around the clock.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setShowSignupModal(true)}
                className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center mt-8 text-gray-400">
              <Star className="w-4 h-4 mr-1" />
              <span>No credit card required • Free forever plan available</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AgentMail</span>
            </div>
            
            <div className="text-gray-400">
              <p>&copy; 2024 AgentMail. Built for developers, by developers.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Signup Modal */}
      <AnimatePresence>
        {showSignupModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSignupModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Join AgentMail</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Create password"
                    className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                  />
                </div>
                <motion.button
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Create Account
                </motion.button>
                <div className="text-center">
                  <button
                    className="flex items-center justify-center gap-2 w-full py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition-colors text-white"
                  >
                    <Github size={20} />
                    Continue with GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
