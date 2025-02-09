import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Scissors, Clock, Shield, Smartphone, Calendar, Info } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    { 
      question: 'What are your service price ranges?',
      answer: 'Our professional hairstyling services range from JMD $3,000 for basic styles to JMD $28,000 for premium installations. See our full catalog with detailed pricing for each style.'
    },
    {
      question: 'Can I change my appointment after booking?',
      answer: 'Yes! You can modify your appointment up to 24 hours before your scheduled time through our website portal or by WhatsApp.'
    },
    {
      question: 'How long do services typically take?',
      answer: 'Service duration varies: Braids (2-5 hours), Locs (3-6 hours), Weaves (2-4 hours). We\'ll confirm time estimates when you book.'
    },
    {
      question: 'What preparation is needed for my appointment?',
      answer: 'Please arrive with clean, dry hair. For specific styles, we may recommend coming with hair washed 24hrs prior. Full details sent after booking.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash (JMD), credit/debit cards, and mobile payments. A 20% deposit secures all bookings via our secure payment portal.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancel free up to 24hrs before. Late cancellations forfeit deposit. No-shows will require full payment for future bookings.'
    },
    {
      question: 'Can I bring my own hair extensions?',
      answer: 'Yes! We charge 15% less when you provide quality hair. Well inspect materials before service to ensure best results.'
    },
    {
      question: 'How do I maintain my style after leaving?',
      answer: 'We provide customized aftercare instructions + recommended products. All clients receive a free maintenance checklist.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="min-h-screen bg-beige-50 w-full rounded-lg py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <Scissors className="w-12 h-12 text-primary-color mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900">Salon FAQs</h2>
        <p className="text-gray-600 mt-2">Your Beauty Journey Made Simple</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl bg-white transition-all hover:shadow-sm"
          >
            <div
              className="flex items-center justify-between px-6 py-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-gray-900 font-medium text-lg">{faq.question}</h3>
              <span className="text-primary-color">
                {activeIndex === index ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
              </span>
            </div>
            {activeIndex === index && (
              <div className="px-6 py-4 text-gray-600 border-t border-gray-100 bg-gray-50">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary-color flex-shrink-0 mt-1" />
                  <p>{faq.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Still have questions? Chat with us directly:
        </p>
        <a
          href="https://wa.me/1XXXXXXXXXX"
          className="inline-flex items-center gap-2 bg-primary-color text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
        >
          <Smartphone className="w-5 h-5" />
          WhatsApp Now
        </a>
      </div>
    </section>
  );
};

export default FAQ;