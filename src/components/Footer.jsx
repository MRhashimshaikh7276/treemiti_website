import stylish from '../styles/Footer.module.css'
import instagram from "../media/Instagram.png"
import facebook from "../media/Facebook.png"
import x from "../media/Twitter.png"
import youtube from "../media/Youtube.png"


export default function Footer() {




    return (
        <footer>
            <div className={stylish.footerwrep}>
                <div style={{ textAlign: 'center', margin: '20px' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.004085869511!2d73.7537904759517!3d20.008343222041294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb705d8d581d%3A0x15b55e47c4a7f07a!2sTreemiti%20Informatics!5e0!3m2!1sen!2sin!4v1725275187836!5m2!1sen!2sin"
                        width="600"
                        height="421"
                        style={{ border: 0, borderRadius: "1rem" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map of Treemiti Informatics"
                    ></iframe>
                </div>

                <div className={stylish.footer1}>
                    <div >
                        <h3>ADDRESS</h3>
                        <address>Block 3, 1st Floor, Bhagyalaxmi Apartment, Opp. Model Colony, College Road, Nashik, Maharashtra 422005, INDIA</address>
                    </div>
                    <div>
                        <h3>CONTACT</h3>
                        <ul>
                            <li>+919579573923</li>
                            <li>WhatsApp</li>
                            <li>contact@treemiti.com</li>
                            <li>www.treemiti.com</li>
                        </ul>
                    </div>
                </div>

                <div className={stylish.footer2}>
                    <div>
                        <h3>OUR GROUP</h3>
                        <ul>
                            <li>Treemiti Infotech</li>
                            <li>Treemiti Interiors</li>
                            <li>Treemiti Hosting</li>
                        </ul>
                    </div>
                    <div>
                        <h3>SUPPORT</h3>
                        <ul>
                            <li>Self Development</li>
                            <li>Career Guidance</li>
                            <li>Online Education</li>
                            <li>Placement Cell</li>
                        </ul>
                    </div>
                </div>

                <div className={stylish.footer3}>
                    <ul>
                        <li style={{ fontSize: '40px', fontWeight: "700" }}>Win a Free Class!</li>

                        <li>Enter your email to get tips, free giveaways, and more in our weekly newsletter.
                        </li>

                        <li>
                            <input type='email' placeholder='Enter Your Email' />
                            <button>Sign up</button>
                        </li>

                        <li>
                            <ul className='imgFit row'>
                           <li className='imgFit'> <img src={instagram} alt='instagram' /></li>
                           <li className='imgFit'> <img src={facebook} alt='facebook' /></li>
                           <li className='imgFit'> <img src={x} alt='x' /></li>
                           <li className='imgFit'> <img src={youtube} alt='youtubex' /></li>
                            
                           
                           
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
            <div className={stylish.FooterEnd}>
                <div className={stylish.FooterEndWrap}>

                    <div>
                        <h3>© Copyright 2012. All rights reserved by Treemiti. Designed & Developed by Treemiti Infotech</h3>
                    </div>
                    <div>
                        <h3>Privacy Policy | Disclaimer</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}