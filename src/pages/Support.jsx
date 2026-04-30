import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, HelpCircle, Loader2 } from 'lucide-react';
import { ui } from '../lib/theme';

export default function Support() {
  const [messages, setMessages] = React.useState([
    { role: 'assistant', content: 'مرحباً بك! أنا مساعد حمزة الذكي. كيف يمكنني مساعدتك في استكشاف منتجاتنا الرقمية أو خدمات Megsy AI اليوم؟' }
  ]);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('/api/proxy/lemondata/v1/chat/completions', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk-mxr7hvA0iwxgxRQfXB6QUXGRINYX7dl0Y8dNyr2S2b499e6W'
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { 
              role: 'system', 
              content: 'أنت مساعد ذكي للمهندس حمزة الجزايري (Hamza Hassan Elgzairy)، مهندس AI في Megsy AI. موقع حمزة يحتوي على متجر لبيع برومبتات Midjourney، كورسات AI، وقوالب برمجية. تواصل بلهجة احترافية وودودة باللغة العربية. شجع المستخدمين على استكشاف المتجر أو التواصل مع حمزة للاستشارات.' 
            },
            ...messages,
            { role: 'user', content: userMessage }
          ]
        })
      });

      const data = await response.json();
      const aiContent = data.choices[0].message.content;

      setMessages(prev => [...prev, { role: 'assistant', content: aiContent }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'عذراً، حدث خطأ أثناء الاتصال بالخادم. حاول مرة أخرى قريباً!' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={ui.section + " pt-32 min-h-screen bg-black"}>
      <div className={ui.container + " max-w-4xl"}>
        <div className="text-center mb-12">
          <div className="inline-flex p-3 rounded-2xl bg-violet-500/10 border border-violet-500/20 mb-4">
            <Bot className="text-violet-400" size={32} />
          </div>
          <h1 className={ui.h2}>الدعم <span className={ui.gradientText}>الذكي</span></h1>
          <p className="text-white/50 mt-4 font-medium uppercase tracking-[0.2em] text-sm">Powered by Megsy Engine</p>
        </div>

        <div className={ui.card + " flex flex-col h-[600px] relative overflow-hidden ring-1 ring-white/10 shadow-2xl"}>
          {/* Chat Headers */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 z-20" />
          
          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide"
          >
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center border ${
                      msg.role === 'user' ? 'bg-zinc-800 border-white/10' : 'bg-violet-600/20 border-violet-500/30'
                    }`}>
                      {msg.role === 'user' ? <User size={20} /> : <Bot className="text-violet-400" size={20} />}
                    </div>
                    <div className={`p-4 rounded-3xl ${
                      msg.role === 'user' 
                      ? 'bg-zinc-900 border border-white/5 text-white/90' 
                      : 'bg-violet-950/20 border border-violet-500/20 text-white leading-relaxed'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {loading && (
              <div className="flex justify-end pr-14">
                <div className="flex gap-2">
                  <span className="w-2 h-2 bg-violet-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 bg-violet-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 bg-violet-500 rounded-full animate-bounce" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-6 bg-zinc-950/50 border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اسألني أي شيء عن المتجر أو خدماتنا..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pr-14 pl-6 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all text-right"
                dir="rtl"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center hover:bg-violet-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
              </button>
            </div>
          </form>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <QuickAction icon={Sparkles} label="كيف أشتري برومبت؟" />
          <QuickAction icon={HelpCircle} label="ما هي Megsy AI؟" />
          <QuickAction icon={Sparkles} label="طرق الدفع المتاحة" />
        </div>
      </div>
    </div>
  );
}

const QuickAction = ({ icon: Icon, label }) => (
  <button className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/5 transition-colors text-right justify-end group">
    <span className="text-white/60 text-sm group-hover:text-white transition-colors">{label}</span>
    <Icon className="text-violet-400" size={18} />
  </button>
);
