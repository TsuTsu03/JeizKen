import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "RSVP",
      answer: "We are so excited to celebrate our wedding day with you! To ensure an intimate and enjoyable experience for everyone, we have reserved seating for each guest individually. We kindly ask that each invitation is for ONE (1) PERSON ONLY. Please RSVP by August 20, 2025 to confirm your attendance. We can't wait to share this unforgettable day with you!"
    },
    {
      question: "May I invite a \"PLUS ONE\" to the event?",
      answer: "As much as we would love to accommodate all our friends and family, we have a limited number of guests. Please understand that this event is strictly by invitation only. Kindly check our invitation to know the number of seats allotted for you. Guests not found on the guestlist provided will not be allowed to enter."
    },
    {
      question: "Is there parking space available for my car?",
      answer: "Yes, there is parking available for everyone at the venue. However, please take note that it is first come, first served basis, so you might not want to be late."
    },
    {
      question: "What if I RSVP'd but cannot attend?",
      answer: "We would love to have you at our wedding, but we understand that there are circumstances beyond our control. However, please let us know as soon as possible so we can reallocate your seat/s."
    },
    {
      question: "I said \"NO\" to the RSVP but I had a change of plans-I can attend now! What should I do?",
      answer: "Please check with us first. Unfortunately, we have a strict guest list. Kindly inform us if your schedule clears up, so we can try to accommodate you. If seats become available, we will let you know as soon as possible. Please do not attend unannounced, as we may not have any available seats for you."
    },
    {
      question: "Can I sit anywhere at the reception?",
      answer: "Please don't. It took us a lot of effort and discussion to finish the seating arrangement, which is planned for everyone's convenience and preference, but there is no need to worry! You'll surely be seated with your friends or people that you have same interest with. Our coordinators will gladly assist you in finding your designated seat after registration. Feel free to ask them for assistance and they will gladly help you."
    },
    {
      question: "When is the appropriate time to leave?",
      answer: "This event took us months to plan, and we want to celebrate it with the people that are very dear to our hearts. We want you to have fun! Celebrate with us until the end of the program!"
    },
    {
      question: "How can I help the couple have a great time during their wedding?",
      answer: "Pray with us for favorable weather and the continuous blessings of our Lord as we enter this new chapter of our lives as husband and wife. RSVP as soon as your schedule is cleared. Dress appropriately and follow our wedding motif. Be on time. Follow the seating arrangement in the reception. Stay until the end of the program. Join the activities and enjoy!"
    },
    {
      question: "Am I allowed to take pictures and/or videos during the ceremony?",
      answer: "We request everyone to keep the ceremony camera-free. While our I Do's are unplugged, our reception is not and definitely as a couple who loves pictures, you'll get tons of options to take your pictures. We prepared for this event wholeheartedly. Please use our official hashtag: #AlexanderTheGreatGotAnArmie"
    },
    {
      question: "Do we really need to RSVP? We already said \"YES\" to the couple.",
      answer: "Yes, please. We will be needing your formal RSVP to consolidate guest details and finalize the headcount for catering and seating purposes."
    },
    {
      question: "Am I allowed to bring my kids at the wedding?",
      answer: "While we love all of the children in our lives, we have decided to keep our wedding ceremony and reception an adults-only event with the exception our little adorable entourage."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title font-display text-primary mb-6 gold-underline inline-block">
            Frequently Asked Questions
          </h2>
          <div className="w-32 h-0.5 mx-auto mb-6 bg-[#2c2421]"></div>
          <p className="text-elegant-body text-muted-foreground max-w-2xl mx-auto">
            We've compiled answers to the most common questions about our wedding day. 
            If you have additional questions, please don't hesitate to contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl shadow-soft overflow-hidden animate-fade-up`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gold/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-display font-semibold text-primary pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gold" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gold" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-border mb-4"></div>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-elegant border border-border rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-xl font-display font-semibold text-primary mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're here to help! Feel free to reach out to us directly if you need more information about our special day.
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-8 h-px bg-gold"></div>
              <div className="w-2 h-2 bg-gold rounded-full animate-float"></div>
              <div className="w-8 h-px bg-gold"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;