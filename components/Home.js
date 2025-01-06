
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to MarocEX</h1>
        <p>
          MarocEX is the first decentralized exchange (DEX) tailored for Morocco and the Arab world. 
          Swap tokens, provide liquidity, and explore the future of decentralized finance (DeFi) in your language and region.
        </p>
        <button className="home-button">Start Trading</button>
      </header>
      <section className="home-features">
        <h2>Why Choose MarocEX?</h2>
        <ul>
          <li>🌍 Focused on Morocco and Arab users.</li>
          <li>🔒 Secure, transparent, and decentralized.</li>
          <li>⚡ Fast token swaps with minimal fees.</li>
          <li>📱 Mobile-friendly and easy-to-use interface.</li>
        </ul>
      </section>
      <section className="home-cta">
        <h2>Join the Revolution</h2>
        <p>
          Whether you're a DeFi enthusiast or a first-time crypto user, MarocEX empowers you to trade and manage tokens effortlessly. 
          Your gateway to the decentralized future starts here.
        </p>
        <button className="cta-button">Connect Your Wallet</button>
      </section>
    </div>
  );
};

export default Home;
