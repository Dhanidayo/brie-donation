const faqs = {
  " SHIPPING AND RETURNS": [
    {
      question: "Where do you ship?",
      answer:
        "Brie currently ships only within the United States, excluding Hawaii and Alaska. We hope to begin offering shipping to those States and Canada in the near future.",
      id: "Q1",
    },
    {
      question: "How long does shipping take?",
      answer: `<p className="list-text">
        Brie typically processes orders within three days. After your
        package ships, it takes about 3-8 business days to arrive. We
        are shipping from New York.
      </p>
      <p className="list-text">
        Note: We do not process or ship any orders on Saturdays,
        Sundays, or on the following holidays:
      </p>
      <ul className="faq-list-container">
        <li className="list-text">New Year's Eve</li>
        <li className="list-text">New Year's Day</li>
        <li className="list-text">Marthin Luther King, Jr. Day</li>
        <li className="list-text">President's Day</li>
        <li className="list-text">Memorial Day</li>
        <li className="list-text">Independence Day</li>
        <li className="list-text">Labor Day</li>
        <li className="list-text">Thanksgiving Day</li>
        <li className="list-text">Christmas Eve</li>
        <li className="list-text">Christmas</li>
      </ul>
      <p className="list-text">
        Delivery can be subject to weather delays.
      </p>`,
      id: "Q2",
    },
    {
      question: "How much does shipping cost?",
      answer:
        "We are happy to offer free shipping on all orders over $75. Orders that do not meet the limit will incur a charge of $7.99.",
      id: "Q3",
    },
    {
      question: "What’s your return policy?",
      answer: `<p className="list-text">
        We want our customers to be 100% satisfied with their
        purchase. If that is not the case, items can be returned
        within 14 days from the date of delivery. $8.99 will be
        deducted from your refund for the cost of the return shipping
        label.
      </p>
      <p className="list-text">
        Final sale items are not eligible for return.
      </p>`,
      id: "Q4",
    },
  ],
  BUYERS: [
    {
      question: "Why should I shop at Brie?",
      answer: `<p className="list-text">
      Brie is the first platform of its kind! Your purchases have a
      significant impact. You support incredible non-profits, plant
      trees, keep clothing out of landfills, reduce pollution and
      water waste.
    </p>
    <p className="list-text">
      We are also working on a dashboard where you can see the
      lifetime of good you have done using our platform.
    </p>`,
      id: "Q5",
    },
    {
      question: "What are the restrictions for the shopping cart?",
      answer: `<p className="list-text">
      Because we have just one of each item, you can reserve up to
      25 items in your cart for 4 hours. Once the timer runs out,
      the items are released back onto the site for others to buy.
    </p>
    <p className="list-text">
      Please note: The timer cart duration may vary at times, such
      as sales and holidays.
    </p>`,
      id: "Q6",
    },
    {
      question: "What is the accepted form of payment?",
      answer:
        "We accept Visa, Mastercard, Discover, American Express,Diners, JCB, China UnionPay cards or debit cards. We are unable to accept checks, money orders.",
      id: "Q7",
    },
    {
      question: "Is it possible to use multiple promo codes at checkout?",
      answer: "You can use one promo code per order.",
      id: "Q8",
    },
    {
      question: "Why am I being charged tax on pre-owned items?",
      answer:
        "Brie is legally required to collect sales tax on orders shipped to states that charge a sales tax.",
      id: "Q9",
    },
    {
      question: "Can I make changes to my order after it has been placed?",
      answer:
        "All orders are processed and completed as quickly as possible. If there is a modification request or need to cancel an order, please contact us as soon as possible after placing your order. We cannot guarantee that your changes or modifications will be granted, we will do our best to accommodate your request.",
      id: "Q10",
    },
    {
      question: "What is Brie's Authentication Guarantee?",
      answer: `<p className="list-text">
      Brie's authenticity and quality experts carefully examine each
      item we list. Should you ever have any concerns about the
      authenticity of the product you ordered, please get in touch
      with us <a href="http://hi@brie.co" className="inline-link">hi@brie.co</a>. We have a zero-tolerance policy towards
      replicas. If the item turns out to be unauthentic, we will
      issue a full refund.
    </p>`,
      id: "Q11",
    },
    {
      question: "What happens if my items arrived damaged or not as described?",
      answer:
        "We work hard to inspect each item to maintain the highest quality standards and list the items as accurately as possible. However, some things may occasionally slip through the cracks. Please get in touch with us immediately upon opening your package to resolve the issue directly.",
      id: "Q12",
    },
  ],
  "DONATION PARTNERS": [
    {
      question: "How do I order a Partner Donation Kit?",
      answer: `<p className="list-text">
      Click the purple “Donate” button in the header to visit our
      <u>
        <b>Become a Donation Partner</b>
      </u>
      page.
    </p>`,
      id: "Q13",
    },
    {
      question: "How can I find the closest drop-off location to ship my kit?",
      answer: `<p className="list-text">
      We use FedEx to ship our kits. To find the nearest drop-off
      location,
      <a
        href="https://local.fedex.com/en-us"
        className="inline-link"
      >
        click here
      </a>
      and enter your address.
    </p>`,
      id: "Q14",
    },
    {
      question: "What can I send to Brie?",
      answer: `<p className="list-text">
      We accept all women's clothing, shoes, and accessories brands.
      The items must be in <u>great condition</u> and <u>in style</u>. All clothing must have size tags attached and
      be recently washed and fully dry.
    </p>
    <p className="list-text">
      <u>
        <b>We do not accept:</b>
      </u>
    </p>
    <ul className="faq-list-container">
      <li className="list-text">Men's clothing and accessories</li>
      <li className="list-text">
        Children's clothing and accessories
      </li>
      <li className="list-text">Missing sizes</li>
      <li className="list-text">Odors and heavy scents</li>
      <li className="list-text">Stains</li>
      <li className="list-text">Rips, split seams, broken parts</li>
      <li className="list-text">Fading or pilling</li>
      <li className="list-text">Alterations or custom-made</li>
      <li className="list-text">Counterfeit merchandise</li>
      <li className="list-text">Bras lingerie, underwear</li>
      <li className="list-text">Pajamas and nightgowns</li>
      <li className="list-text">Wedding dresses</li>
      <li className="list-text">Prom dresses</li>
      <li className="list-text">Uniforms</li>
      <li className="list-text">
        Culture-specific or niche clothing
      </li>
      <li className="list-text">
        Graphics or references to local teams or places that are not
        widely known
      </li>
      <li className="list-text">
        Items with a retail value less than $10
      </li>
      <li className="list-text">
        Items that are not clothing: housewares, toys, books,
        bedding, etc.
      </li>
    </ul>`,
      id: "Q15",
    },
    {
      question: "What are your quality standards?",
      answer: `<p className="list-text">
      We only list great condition items that are on trend, in style
      and freshly washed and fully dry. All size tags <u>must</u> be
      attached.
    </p>
    <p className="list-text">
      <u>
        <b>Clothing:</b>
      </u>
    </p>
    <ul className="faq-list-container">
      <li className="list-text">No missing sizes or labels</li>
      <li className="list-text">No odors or heavy scents</li>
      <li className="list-text">No stains</li>
      <li className="list-text">
        No rips, split seams, broken parts
      </li>
      <li className="list-text">No fading or pilling</li>
      <li className="list-text">No scuffs or marks</li>
      <li className="list-text">No alterations</li>
      <li className="list-text">No counterfeits</li>
    </ul>
    <p className="list-text">
      <u>
        <b>Handbags:</b>
      </u>
    </p>
    <ul className="faq-list-container">
      <li className="list-text">Clean interior</li>
      <li className="list-text">Clean exterior</li>
      <li className="list-text">No scuffs or marks</li>
      <li className="list-text">No odors or heavy scents</li>
      <li className="list-text">No stains</li>
      <li className="list-text">
        No rips, split seams, broken parts
      </li>
      <li className="list-text">No fading or pilling</li>
      <li className="list-text">No counterfeits</li>
    </ul>
    <p className="list-text">
      <u>
        <b>Shoes:</b>
      </u>
    </p>
    <ul className="faq-list-container">
      <li className="list-text">Clean interior</li>
      <li className="list-text">Clean exterior (including sole)</li>
      <li className="list-text">Not misshaped</li>
      <li className="list-text">Not worn out</li>
      <li className="list-text">Not dirty</li>
      <li className="list-text">No scuffs</li>
      <li className="list-text">No marks</li>
      <li className="list-text">No odors or heavy scents</li>
      <li className="list-text">No counterfeits</li>
    </ul>`,
      id: "Q16",
    },
    {
      question: "Can I send outdated or poor-quality clothing?",
      answer: `<p className="list-text">
      As much as we would love to accept all clothing, we can only
      take items in great condition and in style that can be
      resold.Processing takes a lot of time and resources. We want
      tofocus that energy on listing more items that can sell so
      that more charities can get paid.
    </p>
    <p className="list-text">
      Don’t let the clothing you don’t send to us go to the
      landfill, even if it is in poor condition. Use the
      <a
        className="inline-link"
        href="https://earth911.com/recycling-guide/how-to-recycle-clothing-accessories/#recycling-locator"
      >
        recycling locator
      </a>
      to find the nearest drop-off location near you. Items can
      still be recycled even if they are torn, stained, have missing
      buttons, or broken zippers. The fibers are turned into new
      clothes, pillow stuffing, wiping cloths, even insulation for
      homes.
    </p>`,
      id: "Q17",
    },
    {
      question:
        "What are the shipping instructions for the Partner Donation Kit?",
      answer: `<p className="list-text">
      You can either request a shipping bag with a label to be sent
      to you or print a shipping label from your email.
    </p>
    <ul className="faq-list-container">
      <li className="list-text"> Use each label only once</li>
      <li className="list-text">
        The weight limit for your donation <u>package</u> should not
        exceed 35 lbs
      </li>
      <li className="list-text">
        Boxes should not should not exceed 25"x16" x16"
      </li>
      <li className="list-text">
        If you are using a used box, make sure it is in excellent
        condition and won’t break during transportation.
      </li>
      <li className="list-text">
        Use the FedEx locator
        <a
          className="inline-link"
          href="https://local.fedex.com/en-us"
        >
          here
        </a>
        to find the nearest drop-off near you
      </li>
    </ul>`,
      id: "Q18",
    },
    {
      question: "How much do charities get paid?",
      answer: `<table>
      <tr>
        <th>SELLING PRICE</th>
        <th>CHARITY PAYOUT</th>
      </tr>
      <tr>
        <td>$5.00-$19.99 </td>
        <td>5%-25%</td>
      </tr>
      <tr>
        <td>$20.00 - $49.99 </td>
        <td>30%-45%</td>
      </tr>
      <tr>
        <td>$50.00 - $99.99 </td>
        <td>50%-65%</td>
      </tr>
      <tr>
        <td>$100 and up</td>
        <td>70%</td>
      </tr>
    </table>
    <p className="list-text--small">
      *Due to our shipping label, processing, and overhead costs, we
      cannot give a charity payout on items that sell for less than
      $5
    </p>
    <p className="list-text--small">
      ** Sales and promotions will affect the donation. The donation
      will be based on the total product price after the promo and
      not on the original sale price.
    </p>`,
      id: "Q19",
    },
    {
      question: "Can you return my donations?",
      answer:
        "We are so sorry, but once you send items to us, we cannot return them. Please make sure before you send us anything, that you are willing to part with it.",
      id: "Q20",
    },
    {
      question: "What happens to my items that you don't list?",
      answer:
        "We have high-quality standards to offer an exceptional buying experience to our customers. We never throw away any clothing and make sure that unlisted items either get sold in mystery boxes, are responsibly recycled, upcycled, or sold to third-party sellers who can extend the life of the garment. We take sustainability and keeping clothing out of landfills seriously!",
      id: "Q21",
    },
    {
      question: "How long does it take to list the Partner Donation Kit?",
      answer:
        "We are working as fast as possible to sort and list all items. However we are still a brand new company and are short-staffed. We hope to ramp up and increase the number of warehouse employees soon.",
      id: "Q22",
    },
    {
      question: "Why should I choose Brie instead of a donation bin?",
      answer: `<p className="list-text">
      We donate much more to charities than most donation bin
      companies do. We are transparent, and our donation partners
      choose where the proceeds will go. We also plant a tree with
      every order.
    </p>
    <p className="list-text">
      Unless you give your clothing to a reputable donation bin like
      Goodwill or Salvation Army, many donation bins are for-profit
      companies that resell your clothing to thrift stores and
      third-world countries and only give a tiny percentage to
      charity (if any).
    </p>`,
      id: "Q23",
    },
  ],
  "MEDIA & INFLUENCERS": [
    {
      question: "Do you have an ambassador program?",
      answer: `<p className="list-text">
      Yes! We are thrilled to have launched our Brie Ambassador
      Program and can’t wait to meet you! Just complete this
      <a
        className="inline-link"
        href="https://forms.gle/dG9FJT7xouf5z2DY6"
      >
        quick survey
      </a>
      to get started. We accept applications on a rolling basis and
      will contact you if you’re accepted.
    </p>
    <p className="list-text">As an ambassador, you will...</p>
    <ul className="faq-list-container">
      <li className="list-text">Receive 20% off all purchases</li>
      <li className="list-text">
        Receive a 10% discount to share on your social networks
      </li>
      <li className="list-text">
        Spread the word about Brie through all social channels such
        as YouTube, Instagram, Facebook, Twitter, Blogging, etc.
      </li>
    </ul>`,
      id: "Q24",
    },
    {
      question: "Who do I contact about press or media inquiries?",
      answer: `<p className="list-text">Please email us at <a href="https://press@brie.co" className="inline-link">press@brie.co</a></p>`,
      id: "Q25",
    },
  ],
};

export default faqs;
