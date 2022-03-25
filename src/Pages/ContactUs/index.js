import contactImg from "../../Img-Assets/brie-contact-us-image.jpg";
import "./style.css";

const ContactUs = () => {
    return (
        <div className="container">
            <div className="contact-page">
                <div className="contact-row">
                    <div className="contact-text contact-col">
                        <div className="contact">
                            <h3 className="contact-heading">CONTACT US</h3>
                            <p className="contact-body-text">Monday To Thursday 9am - 5:30pm,</p>
                            <p className="contact-body-text">Friday 9am - 2:00pm</p>
                        </div>
                        <div className="contact">
                            <h3 className="contact-heading">Email</h3>
                            <p className="contact-body-text">hi@brie.co</p>
                        </div>
                        <div className="contact">
                            <h3 className="contact-heading">Press Inquiries</h3>
                            <p className="contact-body-text">press@brie.co</p>
                        </div>
                    </div>
                    <div className="contact-img contact-col">
                        <img src={contactImg} alt="" className="contact-image" />
                    </div>
                </div>
        </div>
        </div>
    );
}
 
export default ContactUs;