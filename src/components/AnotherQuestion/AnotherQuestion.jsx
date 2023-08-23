import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const AnotherQuestion = () => {
  const faqs = [
    {
      id: 1,
      question: "What are your pricing plans?",
      answer:
        "We offer various pricing plans to cater to different needs. Our plans range from basic to premium, providing different levels of features and services. Please visit our pricing page for detailed information on each plan.",
    },
    {
      id: 2,
      question: "Can I upgrade or downgrade my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time to better suit your requirements. Simply contact our customer support team, and they will assist you with the necessary changes.",
    },
    {
      id: 3,
      question: "Are there any hidden fees in your pricing plans?",
      answer:
        "No, we believe in transparent pricing. The prices displayed on our pricing page are inclusive of all applicable fees. You will not encounter any hidden charges or surprises when subscribing to our plans.",
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit cards, debit cards. During the checkout process, you will be able to select your preferred payment option.",
    },
    {
      id: 5,
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. We believe in providing our customers with flexibility. If you wish to cancel your subscription, please contact our customer support team, and they will assist you with the process.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (id) => {
    if (activeIndex === id) {
      setActiveIndex(null);
    } else {
      setActiveIndex(id);
    }
  };

  return (
    <div className=" py-16 ">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-semibold  mb-2">
            <span className="text-[#ff8057]">Frequently</span> Asked Questions!
          </h1>
          <p className="text-base font-medium max-w-3xl mx-auto mt-3">
            At vero eos et accusamus iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos.
          </p>
        </div>
        <div className="mt-10">
          {/* <div> */}
          <div className="w-2/3 mx-auto">
            {faqs.map((faq, id) => (
              <div
                key={id}
                className="p-4 bg-[#ffffff]  shadow-[0px 2px 5px 0px rgba(0,0,0,0.08)!important] border border-[#d9d9d9] rounded-md mb-5"
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
        </div>
      </div>
    </div>
  );
};

export default AnotherQuestion;
