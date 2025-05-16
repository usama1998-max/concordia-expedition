"use client";

import { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaCalendarCheck, FaCheckCircle, FaCity, FaComment, FaEnvelope, FaMountain, FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaPeopleRoof, FaPerson, FaX } from "react-icons/fa6";
import { toast } from 'react-toastify';
// import api from '@/app/lib/microservice';
import emailjs from '@emailjs/browser';

const PlanTripForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {

    }, []);

    const openTripFormPopover = () => {
        setIsVisible(true);
    }

    const closeTripFormPopover = () => {
        setIsVisible(false)
    }

    const handleExternalSubmit = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
            formRef.current.reset();

        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // your form handling logic
        console.log('Form submitted');

        if (!formRef.current) return

        const formData = new FormData(e.currentTarget); // or formRef.current
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        setIsVisible(false);

        try {
            //const response = await api.post('/send-email/', data);

            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                    formRef.current,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                )
                .then(
                    () => toast.success('Submitted successfully!'),
                    (error) => {
                        console.log(error);
                        toast.error('Submission failed');
                    }
                )



        } catch (error) {
            toast.error('Submission failed');
            console.error(error);
        }

        // toast.success('Success!');
    };


    return (
        <>
            <section className="makeTripBtn">
                <h1>Click Here</h1>
                <button type="button" onClick={openTripFormPopover}>plan my tour</button>
            </section>

            <div className="tripPlanOverlay" style={{
                display: isVisible ? "block" : "none",
            }}>
                <button type="button" onClick={closeTripFormPopover}>
                    <FaX size={30} />
                </button>
                <div className="tripPlan">
                    <h4>Make Trip</h4>
                    <p>Make your trip and we will send you the details</p>
                    <div className="tripPlanForm">
                        <form className="form" ref={formRef} onSubmit={handleSubmit}>
                            <div className="input-group">
                                <FaUser className="icon" size={20} />
                                <input type="text" placeholder="Name" name="name" autoComplete="off" required />
                            </div>

                            <div className="input-group">
                                <FaEnvelope className="icon" size={20} />
                                <input type="email" placeholder="Email" name="email" autoComplete="off" required />
                            </div>

                            <div className="input-group">
                                <FaPhoneAlt className="icon" size={20} />
                                <input type="text" placeholder="Phone No." name="phone" autoComplete="off" required />
                            </div>

                            <div className="input-group">
                                <FaCalendarAlt className="icon" size={20} />
                                <input type="date" name="date" required />
                            </div>

                            <div className="input-group">
                                <FaMountain className="icon" size={20} />
                                <input type="text" placeholder="Destination" name="destination" autoComplete="off" required />
                            </div>

                            <div className="input-group">
                                <FaCity className="icon" size={20} />
                                <input type="text" placeholder="Departure City" name="departure" autoComplete="off" required />
                            </div>

                            <div className="input-group">
                                <FaPeopleRoof className="icon" size={20} />
                                <input type="number" min={0} placeholder="Number of Rooms" name="rooms" autoComplete="off" required />
                            </div>

                            <div className="input-group">
                                <FaCalendarCheck className="icon" size={20} />
                                <input type="number" min={0} placeholder="Number of Days" name="days" autoComplete="off" required />
                            </div>

                            <div className="input-group">
                                <FaPerson className="icon" size={20} />
                                <input type="number" min={0} placeholder="Number of People" name="people" autoComplete="off" required />
                            </div>

                            <div className="input-group">
                                <FaComment className="icon" size={20} />
                                <input type="text" maxLength={200} placeholder="Comments..." name="comments" autoComplete="off" required />
                            </div>


                        </form>
                        <button type="submit" className="enquirySubmit" onClick={handleExternalSubmit}>Send</button>

                        <p><FaCheckCircle color="green" /> This data is only shared within our company</p>
                        <p><FaCheckCircle color="green" /> Your privacy is safe with us</p>

                    </div>

                </div>
            </div>
        </>

    );
};

export default PlanTripForm;  
