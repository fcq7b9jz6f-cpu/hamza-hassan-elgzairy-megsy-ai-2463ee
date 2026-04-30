import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Bot, Sparkles } from "lucide-react";

export default function AIChat({ system = "أنت مساعد دعم فني ودود لهذا الموقع. أجب باختصار ودقة بالعربية." }) {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef(null);
  
  // API Key Provided by user
  const LDM_KEY = "sk-mxr7hvA0iwxgxRQfXB6QUXGRINYX7dl0Y8dNyr2S2b499e6W";

  useEffect(() => {
    if (open && msgs.length === 0) {
      setMsgs([{ role: "assistant", content: "مرحباً بك! أنا مساعد حمزة الذكي. كيف يمكنني مساعدتك في رحلتك مع الذكاء الاصطناعي اليوم؟" }]);
    }
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, busy, open]);

  async function send(e) {
    if (e) e.preventDefault();
    const q = input.trim();
    if (!q || busy) return;

    const nextMsgs = [...msgs, { role: "user", content: q }];
    setMsgs(nextMsgs);
    setInput("");
    setBusy(true);

    try {
      // Using direct fetch with the provided key via proxy
      const response = await fetch("/api/proxy/lemondata/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${LDM_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: system },
            ...nextMsgs.map(m => ({ role: m.role, content: m.content }))
          ],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content || "عذراً، أواجه مشكلة في الاتصال بـ Megsy AI حالياً.";
      setMsgs([...nextMsgs, { role: "assistant", content: reply }]);
    } catch (err) {
      setMsgs([...nextMsgs, { role: "assistant", content: "حدث خطأ غير متوقع. حاول مرة أخرى لاحقاً." }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button 
        onClick={() => setOpen(true)} 
        className="fixed bottom-6 left-6 z-50 group"
      >
        <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center text-white shadow-2xl transition transform hover:scale-110 active:scale-95">
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-fuchsia-500"></span>
          </span>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:justify-start sm:pl-8 sm:pb-8 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
          <div 
            className="w-full sm:w-[450px] h-full sm:h-[650px] bg-[#0c0c0e] border-t sm:border border-white/10 sm:rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom sm:slide-in-from-left duration-500"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 p-6 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center relative">
                  <Bot className="w-7 h-7 text-fuchsia-400" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0c0c0e]" />
                </div>
                <div>
                  <h3 className="font-black text-lg tracking-tight">Hamza Assistant</h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" /> Powered by Megsy AI
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {msgs.map((m, i) => (
                <div 
                  key={i} 
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[85%] px-5 py-4 rounded-3xl text-sm leading-relaxed shadow-lg ${
                      m.role === "user" 
                        ? "bg-violet-600 text-white rounded-tr-none" 
                        : "bg-white/5 border border-white/5 text-white/90 rounded-tl-none"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {busy && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 px-5 py-4 rounded-3xl rounded-tl-none">
                    <Loader2 className="w-5 h-5 animate-spin text-fuchsia-500" />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Footer Form */}
            <form onSubmit={send} className="p-6 border-t border-white/5 bg-black/40">
              <div className="relative group">
                <input 
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="اسأل عن المنتجات، المشاريع، أو حمزة..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 pr-14 outline-none focus:border-violet-500 focus:bg-white/[0.08] transition-all text-sm"
                  disabled={busy}
                />
                <button 
                  disabled={busy || !input.trim()}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white shadow-lg disabled:opacity-50 disabled:bg-white/10 transition-all hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4 rotate-180" />
                </button>
              </div>
              <p className="text-[10px] text-center text-white/20 mt-4 uppercase tracking-[0.2em] font-bold">
                Secure Terminal Session
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}