import React from 'react'
import './styles/home.css'
import '../global.css'
import paddy from '../assets/cropsimg/paddy.jpg'
import tea from '../assets/cropsimg/tea.jpg'
import more from '../assets/cropsimg/more.jpg'
import bgImage from '../assets/Head video/headvid.mp4'

import pro1 from '../assets/Images/profile1.jpeg'
import pro2 from '../assets/Images/profile8.jpeg'
import pro3 from '../assets/Images/profile4.jpeg'

import feedImage1 from "../assets/Images/Feed1.jpeg";
import feedImage2 from "../assets/Images/Feed2.jpeg";
import feedImage3 from "../assets/Images/Feed3.jpeg";
import feedImage4 from "../assets/Images/Feed4.jpeg";
import feedImage5 from "../assets/Images/Feed5.jpeg";
import feedImage6 from "../assets/Images/Feed6.jpeg";
import feedImage7 from "../assets/Images/Feed7.jpeg";
import feedImage8 from "../assets/Images/Feed8.jpeg";





const Home = () => {
  return (
    <>
        <div>
      <div className="video">
        <div className="text-wrapper">
          <h4>Weclome to</h4>
          <h1>Farmi<span>fy</span></h1>
          <p>
      Farmify is an agricultural advice website offering expert tips, resources, 
      and tools to help farmers optimize crop yields, manage resources efficiently, 
      and stay updated with the latest farming practices.</p>
          <h5>Scroll down to Explore the Agriculture</h5>
        </div>
        <video autoPlay loop muted>
        <source src={bgImage} type='video/mp4'/>
      </video>
     
    </div>
    <div className='head'>
      <h2>Crop Database</h2>
      <p>We have detailed information on a wide range of crops, including planting guidelines, 
      soil requirements, pest control, and harvesting techniques.You can get so many information 
      about agricultagricultural crops from “Farmify”. join as platinum member and sher your experianseexperience
      amoung other members.</p>
    </div>
    <div className='divcrop'>
    <h2>Crops</h2>
    <div className="cards">
      
      <div className="card">
        <img src={paddy} alt="Rice" />
          <h3>Rice</h3>
        <p>A paddy field is a flooded field of arable land used for growing semiaquatic crops, most notably rice and taro.</p>
        <a href="/crops/1">Visit</a>
      </div>

      <div className="card">
        <img src={tea} alt="Tea" />
          <h3>Tea</h3>
        <p> Tea is a popular beverage made from Camellia sinensis leaves, enjoyed globally for its various flavors and health benefits.</p>
        <a href="/crops/2">Visit</a>
      </div>


      <div className="card">
        <img src={more} alt="more" />
         <h3>More</h3>
        <p>You can get some experience about other crops from here.click visit.</p>
        <a href="/crops">Visit</a>
      </div>
      </div>
      </div>

      <div className="divvol">
      <h2>Volanteers</h2>
      <div className="volanteer">  
      <div className="volanteer-card">
        <img src={pro1} alt="profile1" />
         <h3>Mr. H.N. Bopitiya</h3>
          <p>Director of Field Crop Research and Development Institute</p>
          <a href="/Volunteer">View Profile</a>
          
      </div>

      <div className="volanteer-card">
        <img src={pro2} alt="profile2" />
         <h3>Ms. Renuka Herath</h3>
          <p>Lead Resaecher of Field Crops Research and Development Institute</p>
          <a href="/Volunteer">View Profile</a>
          
      </div>

      <div className="volanteer-card">
        <img src={pro3} alt="profile3" />
         <h3>Mr. Suneth Warnasooriya</h3>
          <p>A distinguished farmer of 8 years in the field of paddy</p>
          <a href="/Volunteer">View Profile</a>
          
      </div>
      </div>
      </div>

      <section className="feed">
          <div className="forum-header">
            <h2>Feed</h2>
            <button className="see-more2">More</button>
          </div>
          <div className="feed-grid">
            <img onClick={feedImage1} src={feedImage1} alt="Feed 1" />
            <img src={feedImage2} alt="Feed 2" />
            <img src={feedImage3} alt="Feed 3" />
            <img src={feedImage4} alt="Feed 4" />
            <img src={feedImage5} alt="Feed 5" />
            <img src={feedImage6} alt="Feed 6" />
            <img src={feedImage7} alt="Feed 7" />
            <img src={feedImage8} alt="Feed 8" />
            
          </div>
        </section>
      
    </div>
    </>

  )
}

export default Home