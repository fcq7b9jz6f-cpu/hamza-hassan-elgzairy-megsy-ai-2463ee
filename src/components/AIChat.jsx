import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Bot, Loader2, Sparkles } from "lucide-react";

export default function AIChat() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "مرحباً! أنا مساعد حمزة الذكي. كيف يمكنني مساعدتك اليوم في استكشاف منتجاتنا أو معرفة المزيد عن Megsy AI؟" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/proxy/lemondata/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `أنت مساعد ذكي لموقع حمزة الجزايري (Hamza Hassan Elgzairy)، مهندس ذكاء اصطناعي في Megsy AI.
              حمزة مطور خبير في AI Agents ونماذج اللغات الكبيرة.
              الموقع يبيع منتجات رقمية مثل: AI Prompt Packs, Full AI Courses, Automation Templates.
              ردودك يجب أن تكون احترافية، ودودة، وباللغة العربية. 
              دافع عن جودة منتجات حمزة وأخبرهم أن Megsy AI هي مستقبل الأتمتة.`
            },
            ...messages,
            userMsg
          ]
        })
      });

      const data = await response.json();
      const aiMsg = data.choices[0].message;
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "عذراً، حدث خطأ في الاتصال بالسيرفر. حاول مرة أخرى." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-[600px] bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
      <div className="p-6 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <Bot className="text-white w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-white">مساعد Megsy الذكي</h3>
            <p className="text-xs text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              متصل الآن
            </p>
          </div>
        </div>
        <Sparkles className="text-white/20 w-5 h-5" />
      </div>

      <div className="flex-grow overflow-y-auto p-6 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl flex gap-3 ${
              m.role === "user" 
                ? "bg-violet-600 text-white rounded-tr-none" 
                : "bg-white/10 text-white/90 rounded-tl-none border border-white/5"
            }`}>
              <div className="flex-grow break-words leading-relaxed">{m.content}</div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none border border-white/5">
              <Loader2 className="w-5 h-5 animate-spin text-violet-400" />
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-black/40 border-t border-white/10">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اسأل أي شيء عن حمزة أو المنتجات..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 pr-16 text-white focus:outline-none focus:border-violet-500 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 aspect-square rounded-full bg-violet-600 flex items-center justify-center hover:bg-violet-500 transition-colors disabled:opacity-50"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
}