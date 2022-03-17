import { useEffect, useRef} from "react";
import ReactPlayer from "react-player";
import "./style.css";
import playerthumbnail from "../../Img-Assets/brie-our-story-video-image.jpg";
import fourwayspartnership from "../../Img-Assets/brie-four-way-partnership.jpg";
import onlyoneearth from "../../Img-Assets/brie-only-one-earth.jpg";
import thrillingandaffordable from "../../Img-Assets/brie-thrilling-and-affordable.jpg";

const About = () => {
    // const [index, setIndex] = useState(0);
    const playerRef = useRef(null);

    useEffect(() => {
        if (playerRef) {
            playerRef.current.showPreview();
        }    
    }, [])
    
    return (
        <div className="about-page">
            <div id="biege-section">
                <div className="biege-section-content">
                    <div className="neon-bg">
                        <h2 className="title heading2">
                            OUR STORY
                        </h2>
                    </div>
                    <p className="body-text grid-body-text main-para--about">
                        We are an online thrift store that empowers giving
                    </p>
                    <div className="player-wrapper">
                        {/* <img src={playerthumbnail} alt="" className="player-thumbnail" /> */}
                        <ReactPlayer
                            ref={playerRef}
                            className="react-player"
                            url={"https://youtu.be/I10XB1-IIbA"}
                            playing
                            width="100%"
                            height="100%"
                            controls={true}
                            light={playerthumbnail}
                            playIcon             
                        />
                    </div>
                </div>
            </div>

            <section className="mission-text">
                <div className="b-rectangle b-rectangle--about"></div>
                <h2 className=" sub-title heading2 front-rectangle-text">
                    OUR MISSION
                </h2>
                <div className="mission-para">
                    <p className="body-text--big">
                        To put people & planet first
                    </p>
                    <p className="body-text mission__body-text">
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
                            <div className="grid-body-text--about1">
                                <div className="g-rectangle g-rectangle--about"></div>
                                <h2 className="third-section-header heading1">A FOUR-WAY <br />PARTNERSHIP
                                </h2>
                                <p className="body-text line-height--small grid-body-text">
                                Brie is proud to partner with our donors, shoppers, and the most impactful non-profits to drive all meaningful change in all areas of social and charitable giving.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid-container  reverse-container">
                        <div className="section-texts cols">
                            <div className="grid-body-text--about2">
                                <div>
                                    <div className="b-rectangle b-rectangle--about2"></div>
                                    <h2 className="third-section-header heading1">
                                        WE HAVE ONE<br /> EARTH
                                    </h2>
                                    <p className="body-text line-height--small grid-body-text">
                                    Our focus on sustainability is evident in every step we take, from receiving, listing, and delivering items to your doorstep. We only use packaging made from recycled materials that are recyclable or compostable.
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
                            <div className="grid-body-text--about3">
                                <div className="g-rectangle g-rectangle--about"></div>
                                <h2 className="third-section-header heading1">
                                    THRILLING AND AFFORDABLE
                                </h2>
                                <p className="body-text line-height--small grid-body-text">
                                Thrifting is a treasure hunt! You never know what gems you will find. Refreshing your wardrobe should not have to come at a high cost to you or the environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dyk-section">
                <div className="b-rectangle b-rectangle--about3"></div>
                <h2 className=" sub-title heading2 front-rectangle-text">
                    DID YOU KNOW?
                </h2>
                <div className="mission-para">
                    <p className="body-text--big">
                        The most sustainable way to shop is secondhand
                    </p>
                    <p className="body-text dyk__body-text grid-body-text">
                    We extend the life of each product for as long as we can. Once the product is too worn out for
                    further use, we recycle it and let it come back as another product.
                    </p>
                </div>
            </section>
        </div>
    );
}
 
export default About;