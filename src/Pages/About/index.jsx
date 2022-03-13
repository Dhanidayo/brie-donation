import ReactPlayer from "react-player";
import "./style.css";
import playerthumbnail from "../../Img-Assets/brie-our-story-video-image.jpg";
import fourwayspartnership from "../../Img-Assets/brie-four-way-partnership.jpg";
import onlyoneearth from "../../Img-Assets/brie-only-one-earth.jpg";
import thrillingandaffordable from "../../Img-Assets/brie-thrilling-and-affordable.jpg";

const About = () => {
    return (
        <div className="about-page">
            <div id="biege-section">
                <div className="container h-full">
                    <div className="biege-section-content">
                        <div className="neon-bg">
                            <h2 className="title heading2">
                                OUR STORY
                            </h2>
                        </div>
                        <p className="body-text">
                            We are an online thrift store that empowers giving
                        </p>
                        <div id="player-wrapper">
                            <img src={playerthumbnail} alt="" className="player-thumbnail" />
                            <ReactPlayer
                             className="react-player"
                             url={"../../video/mov_bbb.mp4"}
                             width="1920px"
                             height="180px"
                            />
                        </div>
                    </div>

                    <section className="mission-text">
                        <div className="lilac-bg">
                            <h2 className=" sub-title heading2">
                                OUR MISSION
                            </h2>
                        </div>
                        <div className="mission-para">
                            <p className="body-text--big">
                                To put people & planet first
                            </p>
                            <p className="body-text">
                                We prioritize doing good and weave it into every part of our company's DNA.
                            </p>
                        </div>
                    </section>

                    <section className="third-section">
                        <div className="container">
                            <div className="grid-container">
                                <div className="section-images cols">
                                    <img src={fourwayspartnership} alt=""/>
                                </div>
                                <div className="section-texts cols">
                                    <div className="padding-m">
                                        <h2 className="third-section-header heading1">A FOUR-WAY <br />PARTNERSHIP
                                        </h2>
                                        <p className="body-text line-height--small">
                                        Brie is proud to partner with our donors, shoppers, and the most impactful non-profits to change
                                        lives and drive meaningful change in all forms of social and charitable giving.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-container  reverse-container">
                                <div className="section-texts cols">
                                    <div className="padding-s">
                                        <div>
                                            <h2 className="third-section-header heading1">
                                                WE HAVE ONE<br /> EARTH
                                            </h2>
                                            <p className="body-text line-height--small">
                                            Our focus on sustainability is evident in every step we take, from receiving , listing, and delivering items to your doorstep. We only use packaging made from recycled materials that are recyclable or compostable.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-images cols">
                                    <img src={onlyoneearth} alt="" />
                                </div>
                            </div>
                            <div className="grid-container">
                                <div className="section-images cols">
                                    <img src={thrillingandaffordable} alt="" />
                                </div>
                                <div className="section-texts cols">
                                    <div className="padding-l">
                                        <h2 className="third-section-header heading1">
                                            THRILLING AND AFFORDABLE
                                        </h2>
                                        <p className="body-text line-height--small">
                                        Thrifting is a treasure hunt! You never know what gems you will find. Refreshing your wardrobe should not have to come at a high cost to you or the environment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="dyk-section">
                        <div className="lilac-bg">
                            <h2 className=" sub-title heading2">
                                DID YOU KNOW?
                            </h2>
                        </div>
                        <div className="mission-para">
                            <p className="body-text--big">
                                The most sustainable way to shop is secondhand
                            </p>
                            <p className="body-text">
                            We extend the life of each product for as long as we can. Once the product is too worn out for
                            further use, we recycle it and let it come back as another product.
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
 
export default About;