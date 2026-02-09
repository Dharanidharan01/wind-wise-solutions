import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, ChevronRight, User, Trash2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp?: number;
};

type ChatState = {
  messages: Message[];
  isFirstVisit: boolean;
  lastPage: string;
  sessionId: string;
};

const STORAGE_KEY = "saece-chatbot-state";

const QUICK_ACTIONS = [
  { label: "Services", path: "/services", icon: "🔧", description: "Explore our service offerings" },
  { label: "Products", path: "/products", icon: "📦", description: "Browse wind turbine parts" },
  { label: "About Us", path: "/company", icon: "🏢", description: "Learn about SAECE" },
  { label: "Careers", path: "/career", icon: "💼", description: "Join our team" },
  { label: "Contact", path: "/contact", icon: "📞", description: "Get in touch" },
  { label: "Safety", path: "/safety", icon: "🛡️", description: "Our safety standards" },
];

const PAGE_CONTEXT: Record<string, { name: string; followUp: string }> = {
  "/": { name: "Home", followUp: "Welcome to our homepage! Would you like me to guide you through our services or help you find something specific?" },
  "/services": { name: "Services", followUp: "You're now on the Services page. Would you like details on a specific service like Technical Support, Inspection, or our Call Basis service?" },
  "/products": { name: "Products", followUp: "Here's our Products catalog! Looking for specific components like mechanical parts, electrical spares, or lubricants?" },
  "/company": { name: "Company", followUp: "This is our Company page. Would you like to know more about our leadership team, mission, or company history?" },
  "/career": { name: "Careers", followUp: "Interested in joining SAECE? I can help you explore current openings or guide you through the application process!" },
  "/contact": { name: "Contact", followUp: "Ready to get in touch? You can fill out the form, call us directly, or chat on WhatsApp. How can I assist?" },
  "/safety": { name: "Safety", followUp: "Safety is our priority! Want to learn about our safety protocols, training programs, or certifications?" },
  "/in-house": { name: "In-House", followUp: "Explore our in-house capabilities! We specialize in blade bearings, gearboxes, generators, and more. What interests you?" },
  
};

const SUGGESTED_QUESTIONS = [
  "What services do you offer?",
  "How can I get a quote?",
  "Do you have job openings?",
  "What brands do you support?",
];

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/website-assistant`;

// Custom Robot Icon Component
const RobotIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
    <rect x="7" y="11" width="3" height="3" rx="1" fill="currentColor" />
    <rect x="14" y="11" width="3" height="3" rx="1" fill="currentColor" />
    <path d="M9 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="3" r="1.5" fill="currentColor" />
    <path d="M2 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M2 16H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 16H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Typing indicator with animated dots
const TypingIndicator = () => (
  <div className="flex gap-1 px-3 py-2">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 rounded-full bg-blue-400"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
      />
    ))}
  </div>
);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const lastPathRef = useRef(location.pathname);
  const hasInitializedRef = useRef(false);

  // Generate session ID
  const getSessionId = useCallback(() => {
    let sessionId = sessionStorage.getItem("saece-session-id");
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem("saece-session-id", sessionId);
    }
    return sessionId;
  }, []);

  // Load state from localStorage
  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state: ChatState = JSON.parse(saved);
        // Only restore if same session
        const currentSessionId = getSessionId();
        if (state.sessionId === currentSessionId && state.messages.length > 0) {
          setMessages(state.messages);
          setIsFirstVisit(state.isFirstVisit);
          lastPathRef.current = state.lastPage;
        }
      }
    } catch (error) {
      console.error("Failed to load chat state:", error);
    }
  }, [getSessionId]);

  // Save state to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      const state: ChatState = {
        messages,
        isFirstVisit,
        lastPage: location.pathname,
        sessionId: getSessionId(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [messages, isFirstVisit, location.pathname, getSessionId]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Detect page navigation and add contextual follow-up
  useEffect(() => {
    if (lastPathRef.current !== location.pathname && messages.length > 0 && isOpen) {
      const pageInfo = PAGE_CONTEXT[location.pathname] || 
        Object.entries(PAGE_CONTEXT).find(([path]) => location.pathname.startsWith(path))?.[1];
      
      if (pageInfo) {
        const followUpMessage: Message = {
          role: "assistant",
          content: pageInfo.followUp,
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, followUpMessage]);
      }
      lastPathRef.current = location.pathname;
    }
  }, [location.pathname, messages.length, isOpen]);

  // Initial greeting for first-time visitors
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = isFirstVisit
        ? "Hey there! 👋 Welcome to SAECE! I'm your AI assistant. I noticed this is your first visit - would you like a quick tour of what we offer, or do you have something specific in mind?"
        : "Welcome back! 👋 How can I help you today?";
      
      setMessages([{ role: "assistant", content: greeting, timestamp: Date.now() }]);
      if (isFirstVisit) setIsFirstVisit(false);
    }
  }, [isOpen, messages.length, isFirstVisit]);

  const handleQuickAction = (path: string, addMessage = true) => {
    if (addMessage) {
      const action = QUICK_ACTIONS.find(a => a.path === path);
      if (action) {
        setMessages(prev => [
          ...prev,
          { role: "user", content: `Take me to ${action.label}`, timestamp: Date.now() }
        ]);
      }
    }
    lastPathRef.current = path; // Update before navigating
    navigate(path);
    
    // Add contextual message after navigation
    setTimeout(() => {
      const pageInfo = PAGE_CONTEXT[path];
      if (pageInfo) {
        setMessages(prev => [
          ...prev,
          { role: "assistant", content: pageInfo.followUp, timestamp: Date.now() }
        ]);
      }
    }, 300);
  };

  const handleSuggestedQuestion = (question: string) => {
    setShowSuggestions(false);
    streamChat(question);
  };

  const clearChat = () => {
    setMessages([]);
    setShowSuggestions(true);
    localStorage.removeItem(STORAGE_KEY);
    // Add fresh greeting
    setTimeout(() => {
      setMessages([{
        role: "assistant",
        content: "Chat cleared! 🔄 How can I help you today?",
        timestamp: Date.now()
      }]);
    }, 100);
  };

  const streamChat = async (userMessage: string) => {
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage, timestamp: Date.now() }];
    setMessages(newMessages);
    setIsLoading(true);
    setShowSuggestions(false);

    let assistantContent = "";

    try {
      const response = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ 
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          currentPage: location.pathname
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Failed to get response");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      // Add empty assistant message
      setMessages((prev) => [...prev, { role: "assistant", content: "", timestamp: Date.now() }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: "assistant", content: assistantContent, timestamp: Date.now() };
                return updated;
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I apologize, but I'm having trouble responding right now. Please try again or contact us directly at +91 9080508426.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const message = input.trim();
    setInput("");
    streamChat(message);
  };

  return (
    <>
      {/* Chat Toggle Button - Positioned left of WhatsApp */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-[88px] z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 flex items-center justify-center border-2 border-blue-400/30"
            aria-label="Open chat assistant"
          >
            <RobotIcon className="h-7 w-7" />
            {/* Pulse animation ring */}
            <span className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[560px] max-h-[calc(100vh-100px)] bg-card border border-blue-200/30 rounded-2xl shadow-2xl shadow-blue-500/10 flex flex-col overflow-hidden"
          >
            {/* Header - Blue themed */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center ring-2 ring-white/30">
                  <RobotIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm flex items-center gap-1.5">
                    SAECE Assistant
                    <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
                  </h3>
                  <p className="text-xs text-blue-100">AI-Powered • Always here to help</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearChat}
                  className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/20"
                  title="Clear chat"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "flex gap-2",
                      message.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {message.role === "assistant" && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex-shrink-0 flex items-center justify-center ring-1 ring-blue-200">
                        <RobotIcon className="h-4 w-4 text-blue-600" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed",
                        message.role === "user"
                          ? "bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl rounded-br-md shadow-sm"
                          : "bg-gradient-to-br from-slate-50 to-slate-100 text-foreground rounded-2xl rounded-bl-md border border-slate-200/50"
                      )}
                    >
                      {message.content}
                    </div>
                    {message.role === "user" && (
                      <div className="w-7 h-7 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center">
                        <User className="h-4 w-4 text-slate-600" />
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Typing indicator */}
                {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-2 items-center"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center ring-1 ring-blue-200">
                      <RobotIcon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl rounded-bl-md border border-slate-200/50">
                      <TypingIndicator />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Suggested Questions - Show for new conversations */}
              {showSuggestions && messages.length <= 1 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 space-y-3"
                >
                  <p className="text-xs text-muted-foreground font-medium">💡 Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_QUESTIONS.map((question, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs rounded-full border border-blue-200/50 transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Quick Navigation */}
              {messages.length <= 1 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4"
                >
                  <p className="text-xs text-muted-foreground font-medium mb-2">🧭 Quick Navigation</p>
                  <div className="grid grid-cols-2 gap-2">
                    {QUICK_ACTIONS.map((action) => (
                      <button
                        key={action.path}
                        onClick={() => handleQuickAction(action.path)}
                        className="flex items-center gap-2 px-3 py-2.5 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 rounded-xl text-xs font-medium text-foreground transition-all border border-slate-200/50 group"
                      >
                        <span className="text-base">{action.icon}</span>
                        <div className="flex-1 text-left">
                          <span className="block group-hover:text-blue-700">{action.label}</span>
                        </div>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </ScrollArea>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-slate-200/50 bg-slate-50/50">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white border-slate-200 focus-visible:ring-blue-500 focus-visible:ring-1 focus-visible:border-blue-300"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isLoading}
                  className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 shadow-md shadow-blue-500/20"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="flex items-center justify-between mt-2 px-1">
                <p className="text-[10px] text-muted-foreground">
                  Powered by AI
                </p>
                <button
                  type="button"
                  onClick={() => handleQuickAction("/contact", false)}
                  className="text-[10px] text-blue-600 hover:underline flex items-center gap-1"
                >
                  Need human support? →
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
