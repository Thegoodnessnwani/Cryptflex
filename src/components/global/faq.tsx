import { useState } from "react";

const FAQItem = ({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" py-4">
            <div className="border-b-2 border-gray-300 px-4 rounded-lg bg-white">
                <button
                    onClick={toggleOpen}
                    className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 focus:outline-none p-4"
                >
                    <span>{question}</span>
                    <span>{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen && (
                    <p className="mt-2 text-gray-600 p-4 pt-0">{answer}</p>
                )}
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqData = [
        {
            question: "What if i want to cancel my plan?",
            answer: "You can cancel your plan at any time. However, please note that cancellation policies may vary depending on the stage of your plan. Contact our support team for more details.",
        },
        {
            question: "Is my personal and financial information secure?",
            answer: "Yes, we priortize the security of your data. We use blockchain technology for transactions and implement industry-standard encryption for all sensitive information.",
        },
        {
            question: "What happens if i miss a payment?",
            answer: "If you miss a payment, your plan will be paused.",
        },
        {
            question:
                "How does Cryptflex differ from traditional “buy now, pay later” services?",
            answer: "We’re specifically designed for crypto earners, allowing you use your digital assets. We operate on solana blockchain.",
        },
        // Add more FAQ items here
    ];

    return (
        <div className="w-full max-w-3xl mx-auto p-6">
            <h2 className="text-2xl lg:text-4xl text-center mb-8 font-semibold mt-5">
                FAQS
            </h2>
            {faqData.map((item, index) => (
                <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </div>
    );
};

export default FAQ;
