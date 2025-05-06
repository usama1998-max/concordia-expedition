'use client';

import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
    {
        question: 'What is Next.js?',
        answerDivs: [
            'Next.js is a React framework.',
            'It supports server-side rendering.',
            'It improves SEO for React apps.',
            'It has built-in routing.',
            'It supports API routes.',
        ],
    },
    {
        question: 'How does SSR work in Next.js?',
        answerDivs: [
            'SSR stands for Server-Side Rendering.',
            'Next.js fetches data on the server before rendering.',
            'It sends the full HTML to the client.',
            'Improves initial load performance.',
            'Ideal for dynamic content and SEO.',
        ],
    },
    {
        question: 'What is Next.js?',
        answerDivs: [
            'Next.js is a React framework.',
            'It supports server-side rendering.',
            'It improves SEO for React apps.',
            'It has built-in routing.',
            'It supports API routes.',
        ],
    },
    {
        question: 'What is Next.js?',
        answerDivs: [
            'Next.js is a React framework.',
            'It supports server-side rendering.',
            'It improves SEO for React apps.',
            'It has built-in routing.',
            'It supports API routes.',
        ],
    }
    // Add more questions if needed
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [btnIndex, setBtnIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
        setBtnIndex(openIndex === index ? null : index);
    };

    return (
        <div className="FAQ" style={{
            display: "block",
            // border: "1px solid black"
        }}>

            {faqData.map((faq, index) => (
                <div className='faqSection' key={index}>
                    <button
                        onClick={() => toggle(index)}
                        className='faqBtn'
                    >
                        <p>{faq.question}</p> <div>{btnIndex == index ? <FiMinus className='icon' /> : <FiPlus className='icon' />}</div>
                    </button>
                    {openIndex === index && (
                        <div style={{
                            padding: "15px",
                            fontSize: "1.5rem",
                            background: "#f8f8fa",
                            color: "black",
                            marginTop: "10px",
                            borderRadius: "15px"
                        }}>

                            {faq.answerDivs.map((text, i) => (
                                <div key={i}>
                                    {text}
                                </div>
                            ))}

                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
