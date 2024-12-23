import React from "react";
import "./App.css";
import logo from '../public/images/Logos.svg'
function App() {
  return (
    <div>
      <div className="container">
        <header>
          <nav className="navbar">
            <h1 className="logo">SHAPEVOICE</h1>
            <ul className="nav-links">
              <li>Product</li>
              <li>Template</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
              <button className="sigin">Sig in</button>
              <button className="start-btn">Start Free</button>
          </nav>
        </header>
        <div className="main">
          <div className="main-block">
            <h1>Managing business <br /> payments has never <br /> been easier</h1>
            <p className="text">Yet bed any for travelling assistance indulgence <br /> unpleasing. Not thoughts all exercise blessing. <br /> Indulgence way everything.</p>
            <div className="buttons">
              <button className="player">Our Process</button>
              <button className="audio">See How It Works</button>
            </div>
          </div>
          <div className="main-block2">
            <h3>Get Started for Free</h3>
            <div className="inputs">
           <input className="input" type="text" placeholder="Email Address" /> 
           <input className="input" type="password" placeholder="Password" />
            </div>
            <button className="Get-btn">Get Started</button>
          </div>
        </div>

        <div className="future">
          <h4>Trusted By Over 100+ Startups and freelance business</h4>
         <img className="image" src={logo} alt="rasm" />
         <h2 className="future-text">Believing neglected so so allowance</h2>
         <p className="descripsion">We so opinion friends me message as delight. Whole front do of <br /> plate heard oh ought. His defective nor convinced residence own.</p>
         <button className="future-btn">We so opinion friends me message as delight.</button>

         <div className="card">
          <div className="block">
             <img  src="/images/rasm1.png" alt="rasm" />
             <h5 className="block-text">Led Ask Possible Mistress</h5>
             <p className="block-desc">Connection has put impossible own <br /> apartments boisterous. At jointure ladyship <br /> an insisted so humanity he. Friendly <br /> bachelor entrance to on by.</p>
          </div>
          <div className="block">
          <img  src="/images/rasm2.png" alt="rasm" />
             <h5 className="block-text">Elegance Eat Likewise</h5>
             <p className="block-desc">From they fine john he give of rich he. They <br /> age and draw mrs like. Improving end <br /> distrusts may instantly was household <br /> applauded incommode. </p>
          </div>
          <div className="block">
          <img  src="/images/rasm3.png" alt="rasm" />
             <h5 className="block-text">Message Oram Nothing</h5>
             <p className="block-desc">Why kept very ever home mrs. Considered <br /> sympathize ten uncommonly occasional <br /> assistance sufficient not. Letter of on <br /> become he tended active enable to.</p>
          </div>
         </div>

         <div className="fetch">
          <h2 className="fetch-text">Track your crytpo portfolio on the <br /> best way possible</h2>
          <div>
          <button className="fetch-btn">Check It Out</button>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
