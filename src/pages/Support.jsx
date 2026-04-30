import React, { useState, useEffect, useRef } from "react";
import { ui } from "../lib/theme";
import { Send, Bot, User, Sparkles, Loader2 } from "lucide-react";

const Support = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "أهلاً بك! أنا المساعد الذكي لحمزة الجزايري. كيف يمكنني مساعدتك في مجال الذكاء الاصطناعي أو منتجاتنا الرقمية اليوم؟" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/proxy/lemondata/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer sk-mxr7hvA0iwxgxRQfXB6QUXGRINYX7dl0Y8dNyr2S2b499e6W`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { 
                role: "system", 
                content: "أنت مساعد ذكي لموقع حمزة الجزايري (Hamza Elgzairy). حمزة مهندس AI في Megsy AI. الموقع يبيع منتجات رقمية (Prompt packs, Courses, Scripts). كن ودوداً، مهنياً، ومختصراً. دائماً تحدث بالعربية بلهجة مصرية مهذبة أو فصحى بسيطة." 
            },
            ...messages.slice(-5), // Send last 5 context
            userMsg
          ]
        })
      });

      const data = await response.json();
      const aiReply = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: "assistant", content: aiReply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "عذراً، حدث خطأ في الاتصال. برجاء المحاولة لاحقاً." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-black">
      <section className={ui.section}>
        <div className={ui.container}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <div className="inline-block p-4 rounded-3xl bg-violet-600/10 border border-violet-600/20 text-violet-400 mb-6">
                    <Bot size={48} />
                </div>
                <h1 className={ui.h2}>دعم <span className={ui.gradientText}>ذكي مباشر</span></h1>
                <p className="text-gray-400">تحدث مع وكيل الذكاء الاصطناعي الخاص بي للحصول على إجابات فورية حول الخدمات والمنتجات.</p>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col h-[600px] shadow-2xl backdrop-blur-xl">
              {/* Messages Area */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-start" : "justify-end"}`}>
                    <div className={`max-w-[80%] flex gap-4 ${m.role === "user" ? "flex-row" : "flex-row-reverse"}`}>
                      <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${m.role === "user" ? "bg-zinc-800" : "bg-violet-600 shadow-glow"}`}>
                        {m.role === "user" ? <User size={20} /> : <Sparkles size={20} />}
                      </div>
                      <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === "user" ? "bg-zinc-800 text-white" : "bg-violet-600 text-white"}`}>
                        {m.content}
                      </div>
                    </div>
                  </div>
                ))}
                {loading && (
                    <div className="flex justify-end">
                        <div className="bg-violet-600/20 border border-violet-600/40 p-4 rounded-2xl flex items-center gap-2">
                            <Loader2 size={16} className="animate-spin text-violet-400" />
                            <span className="text-xs text-violet-400">الذكاء الاصطناعي يفكر...</span>
                        </div>
                    </div>
                )}
              </div>

              {/* Input Area */}
              <form onSubmit={handleSend} className="p-4 bg-black/40 border-t border-white/10 flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="كيف يمكنني مساعدتك؟"
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                />
                <button 
                  disabled={loading}
                  className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center text-white hover:bg-violet-500 transition-colors disabled:opacity-50"
                >
                  <Send size={24} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
