import { Link } from "react-router-dom";
import "./style.css";

const ReturnPolicy = () => {
  return (
    <div className="return-policy">
      <h2 className="heading3 return-heading">RETURN POLICY</h2>
      <p className="date-text">Last updated March 22, 2022</p>
      <p className="body-text return__bodytext">
        Thank you for your purchase. We hope you are happy with your purchase.
        However, if you are not completely satisfied with your order for any
        reason, you may return it to us for a full refund. Please see below for
        more information on our return policy.
      </p>
      <h3 className="heading4 return-subheadings">RETURNS</h3>
      <p className="body-text return__bodytext">
        All returns must be postmarked within fourteen (14) days of the purchase
        date. All returned items must be in the same condition that they arrived
        in with no signs of wear and the barcode sticker must be attached and
        intact.
      </p>
      <h3 className="heading4 return-subheadings">NOT RETURNABLE</h3>
      <p className="body-text return__bodytext">The following items cannot be returned:</p>
      <ul>
        <li className="body-text return__bodytext">
          Handbags, swimwear, and items that are marked “Final Sale cannot be returned
        </li>
      </ul>
      <p className="body-text return__bodytext">
        For defective or damaged products, please contact us at {" "}
        <Link to="hi@brie.co"className="inline-link"> hi@brie.co.</Link>
      </p>
      <h3 className="heading4 return-subheadings">RETURN PROCESS</h3>
      <p className="body-text return__bodytext">
        To return an item, go to <Link to="www.brie.co/returns" className="inline-link">www.brie.co/returns</Link> and follow the steps.
      </p>
      <p className="body-text return__bodytext">
        Print out the return label. Put the items to return in the same or
        similar package. Seal the package and tape the return label to the top of the box. Drop it off at the nearest carrier location.
      </p>
      <p className="body-text return__bodytext">
        Please note, you will be responsible for all return shipping charges. $6.99 will be deducted from your return to cover shipping charges.
      </p>
      <h3 className="heading4 return-subheadings">REFUNDS</h3>
      <p className="body-text return__bodytext">
        After receiving your return and inspecting the condition of your item,
        we will process your return. Please allow at least 1-2 weeks from the
        receipt of your item to process your return. Refunds may take 1-2
        billing cycles to appear on your credit card statement, depending on
        your credit card company.
      </p>
      <h3 className="heading4 return-subheadings">QUESTIONS</h3>
      <p className="body-text return__bodytext">
        If you have any questions concerning our return policy, please contact us
        at: <Link to="hi@brie.co">hi@brie.co</Link>
      </p>
    </div>
  );
};

export default ReturnPolicy;
