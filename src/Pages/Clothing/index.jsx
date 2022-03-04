import stepone from "../../Img-Assets/brie-how-it-works-step-1-send-us-your-kit.jpg";
import steptwo from "../../Img-Assets/brie-how-it-works-step-2-find-a-new-home.jpg";
import stepthree from "../../Img-Assets/brie-how-it-works-step-3-so-much-good.jpg";
import hands from "../../Img-Assets/brie-support-a-non-profit(1).jpg";
import plant from "../../Img-Assets/brie-make-an-environmental-impact.jpg";
import hanger from "../../Img-Assets/brie-be-selective (3).jpg";
import "./style.css";

const Clothing = () => {
    return (
        <div className="landing-page">
            <section id="banner">
                <div className="container h-full">
                    <div className="banner-content-wrapper h-full">
                        <div className="banner-contents">
                            <h1 className="title heading2">
                                BECOME A DONATION <br />
                                PARTNER
                            </h1>
                            <p className="body-text bodytext--primary">
                                Clean out your closet while helping the environment and <br /> supporting a cause that matters to you.
                            </p>
                            <p className="body-text bodytext--secondary">
                                Clean out your closet while helping the <br />environment and supporting a cause <br />that matters to you.
                            </p>
                            <button className="btn">
                                GET FREE DONATION KIT
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="second-section">
                <div className="container">

                    <h1 className="sub-title heading2">
                        HOW IT WORKS
                    </h1>
                
                    <div className="step-cols">
                        <div className="steps">
                            <img src={stepone} alt="a box illustration" className="step-illustration" />
                            <div className="step-texts">
                                <h2 className="steps-para-head heading3">
                                    1. Send us your kit
                                </h2>
                                <p className="body-text cols">
                                    Select a charity and fill up your box with your best pre-loved clothing. Get your free label and ship it off.
                                </p>
                            </div>
                        </div>
                        <div className="steps">
                            <img src={steptwo} alt="" className="step-illustration" />
                            <div className="step-texts">
                                <h2 className="steps-para-head heading3">
                                    2. Find it a new home
                                </h2>
                                <p className="body-text cols">
                                    It's as simple as that! Your donations are listed or responsibly recycled.
                                </p>
                            </div>
                        </div>
                        <div className="steps">
                            <img src={stepthree} alt="" className="step-illustration"/>
                            <div className="step-texts">
                                <h2 className="steps-para-head heading3">
                                    3. Do so much good
                                </h2>
                                <p className="body-text cols">
                                    Once your item sell, the charity gets paid, you keep the environment clean, and you get a tax deduction.
                                </p>
                            </div>
                        </div>
                    </div>
                        <div className="flex justify-center items-center">
                            <button className="btn">
                                GET STARTED
                            </button>
                        </div>
                </div>
            </section>


            <section id="third-section">
                <div className="container">
                    <div className="grid-container ">
                        <div className="section-images cols">
                            <img src={hands} alt="two hands forming the shape of love" />
                        </div>
                        <div className="section-texts cols">
                            {/* <div className="g-rectangle"></div> */}
                            <div className="m-left-auto">
                                <h2 className="third-section-header heading1">
                                    SUPPORT A <br /> NON-PROFIT
                                </h2>
                                <p className="body-text">
                                    Whatever your passion, we strive to partner with a wide array of organizations that are breaking barriers everyday, such as feeding the hungry and fighting breast cancer.
                                    <span><a href="https://#">See Charity Payouts</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                
                    <div className="grid-container reverse-container">
                        <div className="section-texts cols">
                            {/* <div className="b-rectangle"></div> */}
                            <div className="m-right-auto">
                                <h2 className="third-section-header heading1">
                                    MAKE AN <br /> ENVIRONMENTAL <br /> IMPACT
                                </h2>
                                <p className="body-text">
                                    The fashion industry is one of the most polluting industries in the world. Recycling alone won't solve the fashion waste problem. Give your used clothes a second life, and support sustainability by reducing the cost of fashion.
                                </p>
                            </div>
                        </div>
                        <div className="section-images cols">
                            <img src={plant} alt="" />
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="section-images cols">
                            <img src={hanger} alt="" />
                        </div>
                        <div className="section-texts cols">
                            {/* <div className="g-rectangle"></div> */}
                            <div className="m-left-auto">
                                <h2 className="third-section-header heading1">
                                    BE SELECTIVE
                                </h2>
                                <p className="body-text">
                                    Though we would like to accept all clothing, we are limited to what we can process. The better the brand and quality, the greater your charitable payout and tax deduction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ask-section">
                <h3 className="heading4">Still have more questions?</h3>
                <button className="btn faq-btn">
                    VISIT FAQ PAGE
                </button>
            </section>
        </div>
    );
}
 
export default Clothing;