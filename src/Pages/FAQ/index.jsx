import { useState } from "react";
// import { Link } from "react-router-dom";
import faqs from "../../Data/faq";
import "./style.css";

const FaqPage = () => {
  const renderFaqs = () =>
    Object.entries(faqs).map((entry) => (
      <FaqBlock title={entry[0]} content={entry[1]} />
    ));

  return (
    <div className="faq-page">
      <div className="faq-container">
        <h2 className="heading3 faq-heading">FAQ</h2>
        {renderFaqs()}
      </div>
    </div>
  );
};

export default FaqPage;

const FaqBlock = ({ title, content }) => {
  return (
    <div className="faq-content">
      <h3 className="faq-list-title">{title}</h3>
      <ul>
        {content.map((faqItem) => (
          <FaqItem
            question={faqItem.question}
            answer={faqItem.answer}
            key={faqItem.id}
          />
        ))}
      </ul>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <li className="faq-link" onClick={toggleShow}>
        {question}{" "}
        <span className="faq-hidden-plus">
          {show ? "-" : "+"}
        </span>
      </li>
      <hr className="divider faq-divider" />
      {show && (
        <div
          className="info-container"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </>
  );
};
