import React from "react";
import '../style/Homem.css';
import Navbar from "./Navbar"
import bg1 from "../assets/hero-header.png"


const Dashboard = () => {
    return (

        <>
        <Navbar />
        <section className="opp" id="header">
      <div className="baigan" style={{ backgroundImage: `url(${bg1})`, backgroundPosition: 'right top', backgroundSize:'contain',width: '100%',height: '100vh',backgroundRepeat:'no-repeat' }}></div>
      <div>
        <div className="fcb">
          <div className="ucl">
            <h1 className="fifa">A New Way to Invest <br className="d-block d-lg-block" />in Agriculture</h1>
            <p className="twt">Zou provides farmers, ranchers, private foresters, and agricultural producers with online self-service applications and educational materials.</p>
          </div>
      </div>
      </div>
    </section>

        </>
    )
}

export default Dashboard;