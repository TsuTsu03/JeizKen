import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'May I invite a "PLUS ONE" to the event?',
      answer:
        "As much as we would love to celebrate with all our friends and family, we are only able to accommodate a limited number of guests. We appreciate your understanding that entry will be limited to those listed on our guest list."
    },
    {
      question: "Is there parking space available for my car?",
      answer:
        "Yes, there is parking available for everyone at the venue. However, please take note that it is first come, first served basis, so you might not want to be late."
    },
    {
      question: "What if I RSVP'd but cannot attend?",
      answer:
        "We would love to have you at our wedding, but we understand that there are circumstances beyond our control. However, please let us know as soon as possible so we can reallocate your seat/s."
    },

    {
      question: "When is the appropriate time to leave?",
      answer:
        "This celebration has been months in the making and we wish to share it with those dearest to our hearts. We hope you'll join us in having fun and celebrating with us all the way to the end of the program!"
    },

    {
      question: "Am I allowed to bring my kids at the wedding?",
      answer:
        "Though children hold a special place in our hearts, we have chosen to keep our wedding an adults-only celebration, with the exception of our adorable little entourage."
    }
  ];

  return (
    <section className="shadow-lg rounded-lg py-20 shadow-2xl  px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-script italic text-primary mb-8"
            data-testid="text-faq-title"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've compiled answers to the most common questions about our
            wedding day. If you have additional questions, please don't hesitate
            to contact us.
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
            <h3 className="text-xl font-semibold text-primary mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're here to help! Feel free to reach out to us if you need more
              information about our special day.
            </p>
            <p className="text-muted-foreground mb-6">
              You may also contact our wedding coordinator
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-primary">
                Events Management Services
              </p>
              <p className="text-primary">09178396781</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
