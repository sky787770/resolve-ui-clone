import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is an AI chatbot?",
      answer: "An AI chatbot is an intelligent software program that can simulate human conversation and provide automated responses to customer inquiries. It uses artificial intelligence to understand context and deliver helpful information."
    },
    {
      question: "How does it work?",
      answer: "Our AI chatbot works by analyzing your uploaded data, documents, and website content. It then uses advanced language models to understand questions and provide accurate, contextual responses based on your business information."
    },
    {
      question: "How long does it take to set up?",
      answer: "Setup typically takes just 5 minutes! Simply upload your data, customize the appearance, and embed the chatbot on your website. No coding knowledge required."
    },
    {
      question: "Can I customize the chatbot's appearance?",
      answer: "Yes! You can fully customize colors, fonts, chat bubble design, and even add your company logo to match your brand perfectly."
    },
    {
      question: "What data sources can I connect?",
      answer: "You can connect PDFs, Word documents, Excel files, website URLs, and even integrate with platforms like Google Drive, Notion, and more."
    },
    {
      question: "Is there a free trial?",
      answer: "Absolutely! We offer a 10-day free trial with full access to all features. No credit card required to get started."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - FAQ List */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto">
              {/* Person with Question Marks */}
              <div className="relative">
                {/* Person */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                </div>
                
                {/* Question Marks */}
                <div className="absolute top-4 left-8">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">❓</span>
                  </div>
                </div>
                
                <div className="absolute top-8 right-12">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">❓</span>
                  </div>
                </div>
                
                <div className="absolute top-16 left-16">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">❓</span>
                  </div>
                </div>
                
                {/* Thought Bubble */}
                <div className="absolute top-0 right-0">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-2 border-blue-200">
                    <HelpCircle className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                
                {/* Abstract Shapes */}
                <div className="absolute top-1/2 left-0 w-6 h-6 bg-purple-200 rounded-full opacity-60"></div>
                <div className="absolute top-1/3 right-0 w-4 h-4 bg-pink-200 rounded-full opacity-60"></div>
                <div className="absolute bottom-1/3 left-4 w-3 h-3 bg-yellow-200 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
