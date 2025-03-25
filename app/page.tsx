// import styles from "./page.module.css";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <section className="home">
          <header>
              <Image src={"/logos/logo-transparent-white.png"} alt="" width={"80"} height={"80"} />
              <nav id="navbar">
                  <i className="fa fa-close"></i>
                  <a href="#" className="active">about</a>
                  <a href="#">services</a>
                  <a href="#">tour</a>
                  <a href="#">contact</a>
              </nav>
              <div className="actions">
                  <a className="btn" href="#">login</a>
                  <i className="fa fa-bars"></i>
              </div>
          </header>

          <div className="main">
              <h1>Extraordinary natural and cultural charm</h1>
              <p>Exploring indonesia is an unforgettable adventure.</p>

              <div className="search">
                  <ul>
                      <li><i className="fa-regular fa-calendar-days"></i><span>date</span><i className="fa-solid fa-chevron-down"></i></li>

                      <li><i className="fa-regular fa-credit-card"></i><span>date</span><i className="fa-solid fa-chevron-down"></i></li>
                      
                      <li><i className="fa-regular fa-user"></i><span>date</span><i className="fa-solid fa-chevron-down"></i></li>
                  </ul>
                  <button className="btn">search</button>
              </div>
          </div>

      </section>


      <section className="achivment">
          <div className="box">
              <h5>10M+</h5>
              <p>total customers</p>
          </div>
          <div className="box">
              <h5>09+</h5>
              <p>years of experience</p>
          </div>
          <div className="box">
              <h5>12K</h5>
              <p>total destinations</p>
          </div>
          <div className="box">
              <h5>5.0</h5>
              <p>average rating</p>
          </div>
      </section>


      <section className="location">

          <div className="responsive-text">
              <div className="heading-box">
                  <h6 className="label">best location</h6>
                  <h2 className="heading">indonesia tourism</h2>
              </div>
              <div className="text-box">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae ex sit consequuntur, dicta quaerat voluptatibus distinctio corporis beatae iusto ipsam.</p>
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
                  <Image src="/assets/location2.jpg" alt=""  width={"500"} height={"500"} />
                  <ul>
                      <li>denpasar, bali</li>
                      <li>bali beacj tourism</li>
                  </ul>
              </div>
              <div className="box">
                  <Image src="/assets/location3.jpg" alt=""  width={"500"} height={"500"} />
                  <ul>
                      <li>lampung, south sumatra</li>
                      <li>sumatra tourism</li>
                  </ul>
              </div>
              <div className="box">
                  <Image src="/assets/location4.jpg" alt=""  width={"500"} height={"500"} />
                  <ul>
                      <li>jogjakarta, central java</li>
                      <li>borobudur temple tour</li>
                  </ul>
              </div>
          </div>

      </section>


      <section className="booking">
          <div className="image">
              <Image src="/assets/work-process.jpg" alt="" width={"300"} height={"300"} />
          </div>

          <div className="process">
              <h6 className="label">how it works</h6>
              <h2 className="heading">one click for you</h2>

              <div className="box scale">
                  <span>
                      <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <div className="text">
                      <h4>find your destination</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
                  </div>
              </div>
              <div className="box">
                  <span>
                      <i className="fa-solid fa-ticket"></i>
                  </span>
                  <div className="text">
                      <h4>book a ticket</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
                  </div>
              </div>
              <div className="box">
                  <span>
                      <i className="fa-regular fa-money-bill-1"></i>
                  </span>
                  <div className="text">
                      <h4>make payment</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
                  </div>
              </div>
              <div className="box">
                  <span>
                      <i className="fa-regular fa-map"></i>
                  </span>
                  <div className="text">
                      <h4>explore destination</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus at eligendi cumque consequatur doloribus dolores!</p>
              </div>
          </div>
          <div className="images">

              <div className="box">
                  <Image src="/assets/package1.jpg" alt="" fill />
                  <ul className="top">
                      <li>7 days</li>
                      <li><i className="fa solid fa-star"></i>  4.9</li>
                  </ul>
                  <div className="bottom">
                      <time dateTime="2024-10-27">27 october</time>
                      <ul>
                          <li>bali tour packages</li>
                          <li>$285</li>
                      </ul>
                  </div>
              </div>
              <div className="box">
                  <Image src="/assets/package2.jpg" alt="" fill />
                  <ul className="top">
                      <li>5 days</li>
                      <li><i className="fa solid fa-star"></i>  4.9</li>
                  </ul>
                  <div className="bottom">
                      <time dateTime="2024-10-27">27 october</time>
                      <ul>
                          <li>java tour packages</li>
                          <li>$192</li>
                      </ul>
                  </div>
              </div>
              <div className="box">
                  <Image src="/assets/package3.jpg" alt="" fill />
                  <ul className="top">
                      <li>3 days</li>
                      <li><i className="fa solid fa-star"></i>  4.9</li>
                  </ul>
                  <div className="bottom">
                      <time dateTime="2024-10-27">27 october</time>
                      <ul>
                          <li>solo tour packages</li>
                          <li>$235</li>
                      </ul>
                  </div>
              </div>

          </div>
      </section>


      <section className="blog">
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
                  <Image src="/assets/blog2.jpg" alt=""  width={"500"} height={"500"} />
                  <div className="content">
                      <time dateTime="2024-11-03">Nov 03, 2024</time>
                      <h3>jeep adventure is a new attraction for tourists visiting garut</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officia soluta praesentium sequi ipsa qui.</p>
                  </div>
              </div>
          </div>
          <div className="action">
              <a href="#">view more</a>
          </div>
      </section>


      <footer>
          <div className="links">
              <ul>
                  <h4>about</h4>
                  <li><a href="#">about us</a></li>
                  <li><a href="#">blog</a></li>
                  <li><a href="#">careers</a></li>
                  <li><a href="#">jobs</a></li>
                  <li><a href="#">in press</a></li>
                  <li><a href="#">gallery</a></li>
              </ul>
              <ul>
                  <h4>support</h4>
                  <li><a href="#">contact us</a></li>
                  <li><a href="#">online chat</a></li>
                  <li><a href="#">whatsapp</a></li>
                  <li><a href="#">telegram</a></li>
                  <li><a href="#">ticketing</a></li>
                  <li><a href="#">call center</a></li>
              </ul>
              <ul>
                  <h4>FAQ</h4>
                  <li><a href="#">account</a></li>
                  <li><a href="#">booking</a></li>
                  <li><a href="#">payment</a></li>
                  <li><a href="#">returns</a></li>
                  <li><a href="#">privacy policy</a></li>
                  <li><a href="#">terms & condition</a></li>
              </ul>
          </div>
          <div className="newsletter">
              <h4>newsletter</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas delectus expedita reiciendis illo soluta voluptatum.</p>
              <div className="email-box">
                  <input type="text" placeholder="enter your email" />
                  <button>submit</button>
              </div>
              <ul className="social-links">
                  <li><i className="fa-brands fa-square-instagram"></i></li>
                  <li><i className="fa-brands fa-square-facebook"></i></li>
                  <li><i className="fa-brands fa-youtube"></i></li>
              </ul>
          </div>
      </footer>

    </div>
  );
}
