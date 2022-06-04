import React from "react";
import '../style/about.scss'
import About1 from "../../static/assets/images/super-duper-mart.jpg"

export default function About() {
  return <div className="text-body">
    <img src={About1} />
    <p>The Super-Duper Marts chain operated chains stores throughout the United States and offered a wide variety of foods like Salisbury Steak and BlamCo Mac & Cheese and household products like Abraxo cleaner, gardening supplies and home décor. The company also had a "Super-Duper Discount Club", offering 10% reductions on purchases.</p>
    <p>Some stores, like the Lexington location also had a cafeteria that offered customers hot coffee, espresso, tea, and other hot beverages as well as snack foods. Advertisements can also be seen in the Mojave Wasteland and a miniature model can be found in the World of Refreshment. An automated Super-Duper Mart can be found in the Appalachian city of Watoga, advertised as the "future of grocery stores."</p>

  </div >;
}
