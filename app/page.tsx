// import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
    FaTiktok,
    FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import ScrollToBottom from "./components/ScrollToContact";
import PlanTripForm from "./tripPlan/PlanTripForm";
import FAQ from './FAQ/FAQ';
import SlideUpText from './textSlide/textSlide';


export default function Home() {

    return (
        <div>
            <section className="contactHeader">
                <h1>Contact: </h1>

                <a target="_blank" href="https://wa.me/+923499816568"><FaWhatsapp size={20} /> +923499816568</a>
                <a target="_blank" href="https://wa.me/+923415848526"><FaWhatsapp size={20} /> +923415848526</a>
                <a target="_blank" href="mailto:concordiaexpeditions@gmail.com"><FaEnvelope size={20} /> concordiaexpeditions@gmail.com</a>
            </section>

            <section className="home">
                <header>
                    <Image className="logo" src={"/logos/logo-transparent-white.png"} alt="" style={{ marginTop: "30px" }} width={"250"} height={"250"} />
                    {/* <nav id="navbar">
                        <i className="fa fa-close"></i>
                        <Link href="/about" className="active">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/gallery">Gallery</Link>
                        <Link href="/tour">Tour Packages</Link>
                        <a href="#"><ScrollToBottom /></a>
                    </nav> */}
                </header>

                <div className="main">
                    {/* <h1 style={{ textTransform: "uppercase" }}>Explore Pakistan’s stunning landscapes and vibrant culture.</h1>
                    <p style={{ textTransform: "uppercase" }}>Go, Find, Explore</p> */}
                    <SlideUpText />

                </div>

            </section>

            <section className="achivment">
                <div className="box">
                    <Image src="/assets/Corporate.jpg" alt="" width={150} height={150} />
                    <p>Corporate Tour</p>
                </div>
                <div className="box">
                    <Image src="/assets/Private.jpg" alt="" width={150} height={150} />
                    <p>Private Tour</p>
                </div>
                <div className="box">
                    <Image src="/assets/Group.jpg" alt="" width={150} height={150} />
                    <p>Group Tour</p>
                </div>
                <div className="box">
                    <Image src="/assets/Expedition.jpg" alt="" width={150} height={150} />
                    <p>Expeditions</p>
                </div>
            </section>

            <PlanTripForm />

            <section className="clients">

                <div className="heading-box">
                    <h2 className="heading">Our Corporate Clients</h2>

                </div>

                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <Image src="/assets/ufone-logo.webp" width={100} height={100} alt="" />
                        </div>
                        <div className="slide">
                            <Image src="/assets/LGS-logo.webp" width={100} height={100} alt="" />
                        </div>
                        <div className="slide">
                            <Image src="/assets/ecolean-logo.webp" width={200} height={100} alt="" />
                        </div>

                    </div>
                </div>

            </section>


            <section className="location">

                <div className="responsive-text">
                    <div className="heading-box">
                        <h6 className="label">best location</h6>
                        <h2 className="heading">Pakistan Tourism</h2>
                    </div>
                    <div className="text-box">
                        <p>Experience the unmatched natural wonders and cultural treasures of Pakistan.</p>
                    </div>
                </div>

                <div className="images">
                    <div className="box">
                        <Image src="/assets/location1.jpg" alt="" width={"500"} height={"500"} />
                        <ul>
                            <li>bromo, east java</li>
                            <li>bromo tengger tour</li>
                        </ul>
                    </div>
                    <div className="box">
                        <Image src="/assets/location2.jpg" alt="" width={"500"} height={"500"} />
                        <ul>
                            <li>denpasar, bali</li>
                            <li>bali beacj tourism</li>
                        </ul>
                    </div>
                    <div className="box">
                        <Image src="/assets/location4.jpg" alt="" width={"500"} height={"500"} />
                        <ul>
                            <li>lampung, south sumatra</li>
                            <li>sumatra tourism</li>
                        </ul>
                    </div>
                    <div className="box">
                        <Image src="/assets/location3.jpg" alt="" width={"300"} height={"500"} />
                        <ul>
                            <li>jogjakarta, central java</li>
                            <li>borobudur temple tour</li>
                        </ul>
                    </div>
                    <div className="box">
                        <Image src="/assets/location5.jpg" alt="" width={"300"} height={"500"} />
                        <ul>
                            <li>jogjakarta, central java</li>
                            <li>borobudur temple tour</li>
                        </ul>
                    </div>
                </div>

            </section>


            <section className="booking">
                <div className="image">
                    <Image src="/assets/work-process.jpg" alt="Pakistan Tourism" width={300} height={100} />
                </div>

                <div className="process">
                    <h6 className="label">Book with us</h6>
                    <h2 className="heading">one click for you</h2>

                    <div className="box scale">
                        <span>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <div className="text">
                            <h4>Find your destination</h4>
                            <p>Discover top travel spots across Pakistan that match your interests and dreams.</p>
                        </div>
                    </div>
                    <div className="box">
                        <span>
                            <i className="fa-solid fa-ticket"></i>
                        </span>
                        <div className="text">
                            <h4>Plan your trip</h4>
                            <p>Customize your itinerary with ease choose dates, activities, and accommodations.</p>
                        </div>
                    </div>
                    <div className="box">
                        <span>
                            <i className="fa-regular fa-money-bill-1"></i>
                        </span>
                        <div className="text">
                            <h4>Make payment</h4>
                            <p>Securely book your trip with hassle-free and trusted payment options.</p>
                        </div>
                    </div>
                    <div className="box">
                        <span>
                            <i className="fa-regular fa-map"></i>
                        </span>
                        <div className="text">
                            <h4>explore destination</h4>
                            <p>Embark on an unforgettable journey and experience the magic of Pakistan.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="packages">
                <div className="responsive-text">
                    <div className="heading-box">
                        <h6 className="label">tour packages</h6>
                        <h2 className="heading">our tourist destination</h2>
                    </div>
                    <div className="text-box">
                        <p>Experience the most iconic and breathtaking destinations Pakistan has to offer.</p>
                    </div>
                </div>
                <div className="images">

                    {/* P1 */}
                    <div className="box">
                        <Image src="/assets/package1.jpg" alt="" fill />
                        <ul className="top">
                            <li>7 days</li>
                        </ul>
                        <div className="bottom">
                            <time dateTime="2024-10-27">27 october</time>
                            <ul>
                                <li>HUNZA</li>
                                <li>PKR 50,000</li>
                            </ul>
                        </div>
                    </div>

                    {/* P2 */}
                    <div className="box">
                        <Image src="/assets/package2.jpg" alt="" fill />
                        <ul className="top">
                            <li>5 days</li>

                        </ul>
                        <div className="bottom">
                            <time dateTime="2024-10-27">27 october</time>
                            <ul>
                                <li>SKARDU</li>
                                <li>PKR 50,000</li>
                            </ul>
                        </div>
                    </div>

                    {/* P3 */}
                    <div className="box">
                        <Image src="/assets/package3.jpg" alt="" fill />
                        <ul className="top">
                            <li>3 days</li>

                        </ul>
                        <div className="bottom">
                            <time dateTime="2024-10-27">27 october</time>
                            <ul>
                                <li>FAIRY MEADOWS</li>
                                <li>PKR 40,000</li>
                            </ul>
                        </div>
                    </div>

                    {/* P4 */}
                    <div className="box">
                        <Image src="/assets/package1.jpg" alt="" fill />
                        <ul className="top">
                            <li>7 days</li>
                        </ul>
                        <div className="bottom">
                            <time dateTime="2024-10-27">27 october</time>
                            <ul>
                                <li>KASHMIR</li>
                                <li>PKR 25,000</li>
                            </ul>
                        </div>
                    </div>

                    {/* P5 */}
                    <div className="box">
                        <Image src="/assets/package2.jpg" alt="" fill />
                        <ul className="top">
                            <li>5 days</li>

                        </ul>
                        <div className="bottom">
                            <time dateTime="2024-10-27">27 october</time>
                            <ul>
                                <li>SWAT - KALAM</li>
                                <li>PKR 30,000</li>
                            </ul>
                        </div>
                    </div>

                    {/* P6 */}
                    <div className="box">
                        <Image src="/assets/package3.jpg" alt="" fill />
                        <ul className="top">
                            <li>3 days</li>

                        </ul>
                        <div className="bottom">
                            <time dateTime="2024-10-27">27 october</time>
                            <ul>
                                <li>PHANDER VALLEY</li>
                                <li>PKR 90,000</li>
                            </ul>
                        </div>
                    </div>

                    {/* P7 */}
                    <div className="box">
                        <Image src="/assets/package3.jpg" alt="" fill />
                        <ul className="top">
                            <li>3 days</li>

                        </ul>
                        <div className="bottom">
                            <time dateTime="2024-10-27">27 october</time>
                            <ul>
                                <li>GHIZER VALLEY</li>
                                <li>PKR 100,000</li>
                            </ul>
                        </div>
                    </div>

                    {/* P8 */}
                    <div className="box">
                        <Image src="/assets/package3.jpg" alt="" fill />
                        <ul className="top">
                            <li>3 days</li>

                        </ul>
                        <div className="bottom">
                            <time dateTime="2024-10-27">27 october</time>
                            <ul>
                                <li>CHITRAL</li>
                                <li>PKR 45,000</li>
                            </ul>
                        </div>
                    </div>

                    {/* P9 */}
                    <div className="box">
                        <Image src="/assets/package3.jpg" alt="" fill />
                        <ul className="top">
                            <li>3 days</li>

                        </ul>
                        <div className="bottom">
                            <time dateTime="2024-10-27">27 october</time>
                            <ul>
                                <li>BEACHES OF PAKISTAN</li>
                                <li>PKR 110,000</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>


            {/* <section className="blog">
                <h6 className="label">our blog</h6>
                <h1 className="heading">our travel memories</h1>
                <div className="container">
                    <div className="box">
                        <Image src="/assets/blog1.jpg" alt="" width={"500"} height={"500"} />
                        <div className="content">
                            <time dateTime="2024-10-30">oct 30, 2024</time>
                            <h3>2025 Travel trends - what you need to know</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officia soluta praesentium sequi ipsa qui.</p>
                        </div>
                    </div>
                    <div className="box">
                        <Image src="/assets/blog2.jpg" alt="" width={"500"} height={"500"} />
                        <div className="content">
                            <time dateTime="2024-11-03">Nov 03, 2024</time>
                            <h3>jeep adventure is a new attraction for tourists visiting garut</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officia soluta praesentium sequi ipsa qui.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="faq">
                <h6 className="label">Have any question</h6>
                <h1 className="heading">FAQs</h1>
                <main>
                    <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
                    <FAQ />
                </main>

            </section>


            <footer>
                <div className="links">
                    <ul>
                        <h4>about</h4>
                        <li><a href="#">about us</a></li>
                        <li>
                            <h4>Contact</h4>
                            <ul style={{ marginTop: "8px" }}>
                                <li><a href="#"><FaWhatsapp /> +923499816568</a></li>
                            </ul>
                        </li>
                        <li><Link href="/gallery">Gallery</Link></li>
                    </ul>

                    <ul>
                        <h4>FAQ</h4>
                        <li><a href="#">booking</a></li>
                        <li><a href="#">payment</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">terms & condition</a></li>
                    </ul>
                </div>


                <ul className="social-links">
                    <li>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/concordia_expeditions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <FaInstagram className="social-icons" />
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://www.tiktok.com/@concordia.expedit?_t=ZS-8w4cexGGByq&_r=1"
                        >
                            <FaTiktok className="social-icons" />
                        </a>
                    </li>
                    <li><FaFacebook className="social-icons" /></li>
                    <li><FaYoutube className="social-icons" /></li>
                    <li><FaXTwitter className="social-icons" /></li>
                </ul>

            </footer>

        </div>
    );
}
