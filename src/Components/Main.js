
import { Pagination } from "swiper";
import { ImLocation2 } from "react-icons/im"
import { BsStarFill } from "react-icons/bs"
import React, { useRef, useState } from "react";

// import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules

import main1 from "./Img/main1.png"
import main2 from "./Img/main2.png"
import main3 from "./Img/main3.png"
import main4 from "./Img/main4.png"
import China from "./Img/China.png"
import main5 from "./Img/main5.png"
import main6 from "./Img/main6.png"
import main7 from "./Img/main7.png"






function Book() {
    return (
        <main>
            <div id="location" className="main_top">
                <div className="container">
                    <div className="row">
                        <h1>Popular Location</h1>
                        <p>For every one of us, travel came first. We’ve spent years living as nomads, pioneers, and <br /> voyagers— from island hopping in the</p>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="main_blok">
                                <div className="main_min-blok">
                                    <img src={main1} alt="" />
                                </div>
                                <h3>Istanbul, Turkey</h3>
                                <p>Istanbul is a major city in Turkey that <br /> straddles Europe. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="main_blok">
                                <div className="main_min-blok">
                                    <img src={main2} alt="" />
                                </div>
                                <h3>Kuala Lumpur, malaysia</h3>
                                <p>A 272-step long trek leads you to <br /> this century. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="main_blok">
                                <div className="main_min-blok">
                                    <img src={main3} alt="" />
                                </div>
                                <h3>Seoul, South Korea</h3>
                                <p>South Korea officially the Republic of <br /> Korea is a country in East Asia.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id="blog" className="main_section">
                <div className="constainer">
                    <div className="row">
                        <h1>Special Offers</h1>
                        <p>With the New Year comes a refreshing sense of wanderlust, a longing in our souls <br /> to escape to warmer climates, </p>
                    </div>
                </div>
                <>
                    <Swiper 
                        slidesPerView={4}
                        spaceBetween={30}
                        centeredSlides={false}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                            
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="main_swiper">
                                <div className="main_swiper-img">
                                    <img src={main4} alt="" />
                                </div>
                                <h4>Statue of Liberty.</h4>
                                <div className="main_swiper-blok">
                                    <i><ImLocation2 size="19px" color="red" /></i>
                                    <h5>New York</h5>
                                    <div className="main_swiper-min-blok">
                                        <i><BsStarFill size="20px" color="yellow" /></i>
                                        <p>4.8</p>
                                    </div>

                                </div>
                                <p>4 Day 5 Nights</p>
                                <p><strong>$450/</strong>person</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="main_swiper">
                                <div className="main_swiper-img">
                                    <img src={China} alt="" />
                                </div>
                                <h4>The Great Wall </h4>
                                <div className="main_swiper-blok">
                                    <i><ImLocation2 size="19px" color="red" /></i>
                                    <h5>China</h5>
                                    <div className="main_swiper-min-blok">
                                        <i><BsStarFill size="20px" color="yellow" /></i>
                                        <p>4.9</p>
                                    </div>

                                </div>
                                <p>7 Day 8 Nights</p>
                                <p><strong>$850/</strong>person</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="main_swiper">
                                <div className="main_swiper-img">
                                    <img src={main5} alt="" />
                                </div>
                                <h4>Dizin</h4>
                                <div className="main_swiper-blok">
                                    <i><ImLocation2 size="19px" color="red" /></i>
                                    <h5>Iran</h5>
                                    <div className="main_swiper-min-blok">
                                        <i><BsStarFill size="20px" color="yellow" /></i>
                                        <p>4.6</p>
                                    </div>

                                </div>
                                <p>5 Day 6 Nights</p>
                                <p><strong>$550/</strong>person</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="main_swiper">
                                <div className="main_swiper-img">
                                    <img src={main6} alt="" />
                                </div>
                                <h4>Sajek Valley</h4>
                                <div className="main_swiper-blok">
                                    <i><ImLocation2 size="19px" color="red" /></i>
                                    <h5>Bangladesh</h5>
                                    <div className="main_swiper-min-blok">
                                        <i><BsStarFill size="20px" color="yellow" /></i>
                                        <p>4.7</p>
                                    </div>

                                </div>
                                <p>3 Day 4 Nights</p>
                                <p><strong>$400/</strong>person</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="main_swiper">
                                <div className="main_swiper-img">
                                    <img src={main7} alt="" />
                                </div>
                                <h4>Osaka Castle</h4>
                                <div className="main_swiper-blok">
                                    <i><ImLocation2 size="19px" color="red" /></i>
                                    <h5>Japan</h5>
                                    <div className="main_swiper-min-blok">
                                        <i><BsStarFill size="20px" color="yellow" /></i>
                                        <p>4.7</p>
                                    </div>

                                </div>
                                <p>4 Day 5 Nights</p>
                                <p><strong>$700/</strong>person</p>
                            </div>
                        </SwiperSlide>



                    </Swiper>
                </>
            </div>


        </main>

    )
}


export default Book;


 





