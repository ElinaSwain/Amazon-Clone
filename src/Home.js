import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428680220_.jpg"
                alt="" />

                <div className="home__row">
                    <Product
                        id="111"
                        title="The Lean StartUp Book : How Constant Innovation Creates Radically Successful Businesses"
                        price ={5}
                        rating = {5}
                        image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />       
                    
                    <Product
                        id="222"
                        title="Philips HL7505/02 500-Watt Mixer Grinder with 3 Jars (Red)- Dry jar, Chutney and Wet jar"
                        price ={10}
                        rating = {5}
                        image = "https://m.media-amazon.com/images/I/419K73+cBsL._AC_UY218_.jpg" />       
                             
                </div>
                
                <div className="home__row">
                <Product
                        id="333"
                        title="Samsung 27-inch (68.4cm) WQHD Curved Gaming Monitor -Quad HD, 144 Hz Refresh Rate- LC27JG54QQWXXL"
                        price ={10}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/71ytMOWT5OL._AC_UY218_.jpg" />       
                     
                    <Product
                        id="444"
                        title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Grey)"
                        price ={20}
                        rating = {5}
                        image = "https://m.media-amazon.com/images/I/71xaI+n5CSL._AC_UY218_.jpg" />       
                
                    <Product
                        id="555"
                        title="New Apple iPad Pro (11-inch, Wi-Fi + Cellular, 512GB) - Space Grey (2nd Generation)"
                        price ={15}
                        rating = {5}
                        image = "https://m.media-amazon.com/images/I/81uZx3TL29L._AC_UY218_.jpg" />       
                                  
                </div>
                
                <div className="home__row">
                <Product
                        id="666"
                        title="LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray) (2020 Model)"
                        price ={25}
                        rating = {4}
                        image = "https://m.media-amazon.com/images/I/71FutyZQeXL._AC_UY218_.jpg" />       
                    
                </div>
            </div>            
        </div>
    )
}

export default Home
