import whatsUpImg from "../../assets/about/WhatsApp-Image.jpeg";
import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const FaQna = () => {
  const faqs = [
    {
      id: 1,
      question: "How can I contact your customer support?",
      answer:
        "You can reach our customer support team by filling out the contact form on this page or by emailing us at hello@nextvstream.com. We aim to respond to all inquiries within 24 hours.",
    },
    {
      id: 2,
      question: "What are your business hours?",
      answer:
        "Our customer support is available from Monday to Friday, 9:00 AM to 6:00 PM (GMT). Please note that response times may vary during weekends and holidays.",
    },
    {
      id: 3,
      question: "Can I request a refund for my purchase?",
      answer:
        "Refund requests are handled on a case-by-case basis. If you have an issue with your purchase, please contact our customer support team with your order details, and we will assist you accordingly.",
    },
    {
      id: 4,
      question: "How long does it take to receive a response to my inquiry?",
      answer:
        "We strive to respond to all inquiries within 24 hours. However, during peak periods, it may take slightly longer. Rest assured that we value your inquiry and will get back to you as soon as possible.",
    },
  ];
  const questions = [
    {
      id: 5,
      question: "Do you offer technical support for your products/services?",
      answer:
        "Yes, we provide technical support for our products/services. If you encounter any technical issues or need assistance, please reach out to our customer support team, and we will be glad to help you.",
    },
    {
      id: 6,
      question: "Can I change or cancel my order after it has been placed?",
      answer:
        "If you need to change or cancel your order, please contact our customer support team as soon as possible. We will do our best to accommodate your request, but please note that order changes or cancellations may not be possible if the order has already been processed or shipped.",
    },
    {
      id: 7,
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit cards, debit cards, and PayPal. You can find the available payment options during the checkout process on our website.",
    },
    {
      id: 8,
      question: "Are my personal details and payment information secure?",
      answer:
        "Yes, we take the security of your personal details and payment information seriously. We utilize industry-standard encryption protocols and follow best practices to ensure the security of your data during transmission and storage.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

  const toggleFaq = (id) => {
    if (activeIndex === id) {
      setActiveIndex(null);
    } else {
      setActiveIndex(id);
    }
  };
  const toggleFaq2 = (id) => {
    if (activeIndex2 === id) {
      setActiveIndex2(null);
    } else {
      setActiveIndex2(id);
    }
  };

  return (
    <div className="bg-[#f6f9fd] py-16 ">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-[#ff8057] mb-2">FAQ</h1>
          <p className="text-lg">
            Here are some answers to Frequently Asked Questions.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-14">
          <div>
            <img src={whatsUpImg} alt="" />
          </div>
          {/* <div> */}
          <div className="">
            {faqs.map((faq, id) => (
              <div
                key={id}
                className="p-4 bg-[#ffffff] shadow-[0px 2px 5px 0px]  shadow-[rgba(0,0,0,0.08)] border border-[#d9d9d9] rounded-md mb-5"
              >
                <div
                  className={`flex justify-between items-center gap-2 ${
                    activeIndex === id ? "box" : ""
                  }`}
                  onClick={() => toggleFaq(id)}
                >
                  <h3
                    className={`text-base font-semibold text-[rgba(0,0,0,0.45)] ${
                      activeIndex === id ? "box" : ""
                    }`}
                  >
                    {faq.question}
                  </h3>
                  {activeIndex === id ? (
                    <FaAngleUp
                      onClick={() => {
                        toggleFaq(id);
                        // Set the button state here if needed
                      }}
                      className="duration-500"
                      size={20}
                    />
                  ) : (
                    <FaAngleDown className="duration-500" size={20} />
                  )}
                </div>
                {activeIndex === id && (
                  <>
                    <p className="text-base font-medium pt-5 duration-500 ease-in-out">
                      {faq.answer}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
          {/* </div> */}
          <div className="">
            {questions.map((faq2, id) => (
              <div
                key={id}
                className="p-4 bg-[#ffffff] shadow-[0px 2px 5px 0px]  shadow-[rgba(0,0,0,0.08)] border border-[#d9d9d9] rounded-md mb-5"
              >
                <div
                  className={`flex justify-between items-center gap-2 ${
                    activeIndex2 === id ? "box" : ""
                  }`}
                  onClick={() => toggleFaq2(id)}
                >
                  <h3
                    className={`text-base font-semibold text-[rgba(0,0,0,0.45)] ${
                      activeIndex2 === id ? "box" : ""
                    }`}
                  >
                    {faq2.question}
                  </h3>
                  {activeIndex2 === id ? (
                    <FaAngleUp
                      onClick={() => {
                        toggleFaq2(id);
                      }}
                      className="duration-500"
                      size={20}
                    />
                  ) : (
                    <FaAngleDown className="duration-500" size={20} />
                  )}
                </div>
                {activeIndex2 === id && (
                  <>
                    <p className="text-base font-medium pt-5 duration-500 ease-in-out">
                      {faq2.answer}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaQna;
