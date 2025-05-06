'use client';

import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
    {
        question: 'Does concordia expedition offer group tours?',
        answerDivs: [
            'Yes concordia expedition offers all types of tours such as group, couple, single or expedition tour',
        ]
    },
    {
        question: 'Do I get a refund if i plan to cancel my trip?',
        answerDivs: [
            'Yes you will get a refund if you cancel your trip 3 days before the trip'
        ],
    },
    {
        question: 'Do I have to bring camping and tekking gears',
        answerDivs: [
            'Yes you have to bring your own trekking gears. We wil lprovide some of the things like camps and mules'
        ],
    },
    {
        question: 'Are my pictures safe?',
        answerDivs: [
            'Yes all your data is safe with us. We do not share this data outside company.'
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
