"use client";

import { useEffect, useState } from "react";
import { FaCalendarAlt, FaCalendarCheck, FaCheckCircle, FaCity, FaEnvelope, FaMountain, FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaPeopleRoof, FaPerson, FaX } from "react-icons/fa6";

const PlanTripForm = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

    }, []);

    const openTripFormPopover = () => {
        setIsVisible(true);
    }

    const closeTripFormPopover = () => {
        setIsVisible(false)
    }

    return (
        <>
            <section className="makeTripBtn">
                <button type="button" onClick={openTripFormPopover}>Click here to plan trip</button>
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
                        <form className="form">
                            <div className="input-group">
                                <FaUser className="icon" size={20} />
                                <input type="text" placeholder="Name" autoComplete="off" />
                            </div>

                            <div className="input-group">
                                <FaEnvelope className="icon" size={20} />
                                <input type="email" placeholder="Email" autoComplete="off" />
                            </div>

                            <div className="input-group">
                                <FaPhoneAlt className="icon" size={20} />
                                <input type="text" placeholder="Phone No." autoComplete="off" />
                            </div>

                            <div className="input-group">
                                <FaCalendarAlt className="icon" size={20} />
                                <input type="date" />
                            </div>

                            <div className="input-group">
                                <FaMountain className="icon" size={20} />
                                <input type="text" placeholder="Destination" autoComplete="off" />
                            </div>

                            <div className="input-group">
                                <FaCity className="icon" size={20} />
                                <input type="text" placeholder="Departure City" autoComplete="off" />
                            </div>

                            <div className="input-group">
                                <FaPeopleRoof className="icon" size={20} />
                                <input type="number" placeholder="Number of Rooms" autoComplete="off" />
                            </div>

                            <div className="input-group">
                                <FaCalendarCheck className="icon" size={20} />
                                <input type="number" placeholder="Number of Days" autoComplete="off" />
                            </div>

                            <div className="input-group">
                                <FaPerson className="icon" size={20} />
                                <input type="number" placeholder="Number of People" autoComplete="off" />
                            </div>

                        </form>
                        <button type="submit" className="enquirySubmit">Send</button>
                        <p><FaCheckCircle color="green" /> This data is only shared within our company</p>
                        <p><FaCheckCircle color="green" /> Your privacy is safe with us</p>

                    </div>

                </div>
            </div>
        </>

    );
};

export default PlanTripForm;  
