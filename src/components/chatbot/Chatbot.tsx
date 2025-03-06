
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, ChevronUp, ChevronDown } from "lucide-react";
import { mountains, Mountain, getMountainById } from "@/utils/mountains";
import { packages, TrekkingPackage } from "@/utils/packages";

// Types
interface Message {
  id: string;
  sender: 'user' | 'bot';  // Explicitly define as union type
  text: string;
  timestamp: Date;
}

type Recommendation = 'mountain' | 'package' | null;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation>(null);
  const [recommendedItems, setRecommendedItems] = useState<Mountain[] | TrekkingPackage[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Initial greeting message
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      setTimeout(() => {
        addBotMessage("Halo! Selamat datang di MountainID. Ada yang dapat saya bantu tentang pendakian gunung di Indonesia?");
      }, 600);
    }
  }, [isOpen, messages.length]);
  
  // Scroll to bottom on new messages
  useEffect(() => {
    scrollToBottom();
  }, [messages, recommendation]);
  
  // Focus on input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen, isMinimized]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const addBotMessage = (text: string) => {
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { id: Date.now().toString(), sender: 'bot' as const, text, timestamp: new Date() }
      ]);
      setIsTyping(false);
    }, 1000);
  };
  
  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (newMessage.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: newMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Process user message and generate bot response
    processUserMessage(newMessage);
  };
  
  const processUserMessage = (message: string) => {
    const lowerMsg = message.toLowerCase();
    
    // Check if asking about mountains
    if (lowerMsg.includes('gunung') || lowerMsg.includes('pendakian') || lowerMsg.includes('pemula') || 
        lowerMsg.includes('menengah') || lowerMsg.includes('profesional')) {
      
      // Check for difficulty levels
      if (lowerMsg.includes('pemula')) {
        addBotMessage("Untuk pendaki pemula, kami merekomendasikan Gunung Bromo, Gunung Prau, atau Gunung Andong. Gunung-gunung ini memiliki trek yang relatif mudah dan cocok untuk pengalaman pertama mendaki.");
        setRecommendation('mountain');
        setRecommendedItems(mountains.filter(m => m.difficulty === 'Pemula'));
        return;
      }
      
      if (lowerMsg.includes('menengah')) {
        addBotMessage("Untuk pendaki tingkat menengah, kami rekomendasikan Gunung Merbabu, Gunung Gede, atau Gunung Papandayan. Gunung-gunung ini menawarkan tantangan yang cukup namun masih dapat ditaklukkan dengan persiapan yang baik.");
        setRecommendation('mountain');
        setRecommendedItems(mountains.filter(m => m.difficulty === 'Menengah'));
        return;
      }
      
      if (lowerMsg.includes('profesional') || lowerMsg.includes('sulit')) {
        addBotMessage("Untuk pendaki profesional, kami rekomendasikan Gunung Rinjani, Gunung Semeru, atau Gunung Kerinci. Gunung-gunung ini membutuhkan pengalaman dan persiapan khusus karena medannya yang menantang.");
        setRecommendation('mountain');
        setRecommendedItems(mountains.filter(m => m.difficulty === 'Profesional'));
        return;
      }
      
      // General mountain information
      addBotMessage("Kami menyediakan jasa pendakian untuk berbagai gunung di Indonesia sesuai tingkat kesulitan. Apakah Anda ingin rekomendasi untuk pemula, menengah, atau profesional?");
      return;
    }
    
    // Check if asking about packages
    if (lowerMsg.includes('paket') || lowerMsg.includes('harga') || lowerMsg.includes('biaya')) {
      addBotMessage("Kami menyediakan beberapa paket pendakian dengan harga berbeda. Ada paket standar (Open Trip), premium (Private Trip), dan paket khusus untuk grup spesial. Berikut detailnya:");
      setRecommendation('package');
      setRecommendedItems(packages);
      return;
    }
    
    // Check if asking about payment
    if (lowerMsg.includes('bayar') || lowerMsg.includes('pembayaran') || lowerMsg.includes('transfer')) {
      addBotMessage("Kami menerima pembayaran melalui berbagai metode seperti transfer bank, e-wallet (GoPay, OVO, DANA), QRIS, dan kartu kredit. Pembayaran harus diselesaikan dalam 24 jam setelah pemesanan, atau sistem akan otomatis membatalkan pesanan Anda.");
      return;
    }
    
    // Check if asking about preparation
    if (lowerMsg.includes('persiapan') || lowerMsg.includes('perlengkapan') || lowerMsg.includes('bawa')) {
      addBotMessage("Persiapan pendakian yang baik sangat penting. Perlengkapan dasar yang perlu Anda bawa: pakaian hangat, jas hujan, sepatu gunung, headlamp, sleeping bag, matras, bekal makanan, dan air minum yang cukup. Untuk pendakian di gunung tinggi, Anda juga memerlukan jaket tebal, sarung tangan, dan penutup kepala. Kami juga menyediakan paket dengan perlengkapan lengkap jika Anda membutuhkan.");
      return;
    }
    
    // Check if asking about booking
    if (lowerMsg.includes('pesan') || lowerMsg.includes('booking') || lowerMsg.includes('reservasi')) {
      addBotMessage("Untuk melakukan pemesanan, Anda dapat memilih gunung dan paket yang diinginkan, kemudian klik tombol 'Pesan Sekarang'. Anda akan diminta untuk mengisi data diri dan jumlah peserta. Setelah itu, Anda akan diarahkan ke halaman pembayaran. Jika ada pertanyaan lebih lanjut, silakan hubungi admin kami di WhatsApp 0896-0456-3179.");
      return;
    }
    
    // Default response
    addBotMessage("Terima kasih atas pertanyaan Anda. Saya dapat membantu memberikan informasi tentang gunung, paket pendakian, persiapan, dan proses pemesanan. Jika ada hal spesifik yang ingin Anda tanyakan, silakan beri tahu saya.");
  };
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isMinimized) setIsMinimized(false);
  };
  
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  
  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-40 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 transition-all duration-300 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chat Window */}
      <div 
        className={`fixed z-50 bottom-6 right-6 w-[350px] max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-20 pointer-events-none'
        }`}
        style={{ height: isMinimized ? '60px' : '500px', maxHeight: '80vh' }}
      >
        {/* Chat Header */}
        <div className="bg-primary text-white p-3 flex items-center justify-between">
          <div className="flex items-center">
            <MessageCircle size={20} className="mr-2" />
            <h3 className="font-medium">Asisten MountainID</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleMinimize} 
              className="text-white/80 hover:text-white"
              aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
            >
              {isMinimized ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            <button 
              onClick={toggleChat} 
              className="text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        
        {/* Chat Body */}
        {!isMinimized && (
          <div className="flex flex-col h-[calc(100%-110px)]">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-gray-100 text-gray-800 rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Recommendations */}
              {recommendation === 'mountain' && !isTyping && (
                <div className="pt-2">
                  <p className="text-xs text-gray-500 mb-2">Rekomendasi Gunung:</p>
                  <div className="flex overflow-x-auto pb-2 space-x-2 hide-scrollbar">
                    {recommendedItems.map((mountain) => (
                      <div 
                        key={mountain.id} 
                        className="flex-shrink-0 w-40 rounded-lg border border-gray-200 overflow-hidden"
                      >
                        <div 
                          className="h-24 bg-cover bg-center"
                          style={{ backgroundImage: `url(${(mountain as Mountain).image})` }}
                        />
                        <div className="p-2">
                          <h4 className="font-medium text-sm">{mountain.name}</h4>
                          <p className="text-xs text-gray-500">{(mountain as Mountain).difficulty}</p>
                          <Button variant="link" size="sm" className="text-xs p-0 h-auto mt-1" asChild>
                            <a href={`/mountains/${mountain.id}`}>Detail</a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {recommendation === 'package' && !isTyping && (
                <div className="pt-2">
                  <p className="text-xs text-gray-500 mb-2">Paket Tersedia:</p>
                  <div className="space-y-2">
                    {recommendedItems.map((pkg) => (
                      <div 
                        key={pkg.id} 
                        className="rounded-lg border border-gray-200 overflow-hidden"
                      >
                        <div className="p-3">
                          <h4 className="font-medium">{pkg.name}</h4>
                          <p className="text-xs text-accent font-medium">{(pkg as TrekkingPackage).price}</p>
                          <p className="text-xs text-gray-500 mt-1">{(pkg as TrekkingPackage).type}</p>
                          <Button variant="link" size="sm" className="text-xs p-0 h-auto mt-1" asChild>
                            <a href={`/packages/${pkg.id}`}>Detail</a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-3 border-t flex gap-2">
              <Input
                ref={inputRef}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Ketik pesan..."
                className="flex-1"
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={newMessage.trim() === ''}
              >
                <Send size={18} />
              </Button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;
