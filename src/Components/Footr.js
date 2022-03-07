import React from "react"


import footr1 from "./Img/footr1.png"
import footr2 from "./Img/footr2.png"
import footr3 from "./Img/footr3.png"
import footr4 from "./Img/footr4.png"

import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"


function Footr() {

   return (

      <footer>

         <div id="about" className="footr_top">
            <div className="container">
               <div className="row">
                  <h1>From Blog & News</h1>
                  <p>Welcome to Community Conversations, a new interview series featuring <br /> Intrepid travellers, creatives and activists in our community.</p>
               </div>
               <div className="row">
                  <div className="footr_blok1 col-lg-6">
                     <div className="footr_blok1-min">
                        <img width="100%" src={footr1} alt="" />
                     </div>
                     <h2>Banff National Park</h2>
                     <p>Banff National Park lies in the heart of the majestic Rocky <br /> Mountains in the province of Alberta, and showcases <br /> some of Canada's most beautiful scenery. <br /> Turquoise-colored lakes, snow-capped peaks, and glaciers <br /> are all easily accessible

                     </p>
                     <a href="#">@thomasalva_adison</a>

                  </div>
                  <div className="footr_blok2 col-lg-6">
                  <div className="footr_blok2-min">
                     <div className="footr_blok2-min-blok1">
                     <img src={footr2} alt="" />
                     </div>
                     <div className="footr_blok-min-blok2">
                        <h3>The Hiroshima Peace!</h3>
                        <p>It was formally opened to the <br /> public in August that year.</p>
                        <a href="#">@shova_bd88</a>
                     </div>
                  </div>
                  {/* ikki blok */}
                  <div className="footr_blok2-min">
                     <div className="footr_blok2-min-blok1">
                     <img src={footr3} alt="" />
                     </div>
                     <div className="footr_blok-min-blok2">
                        <h3>The faithful prayers!</h3>
                        <p>A major pilgrimage center for <br /> Hindus, the holy city.</p>
                        <a href="#">@adem/smith</a>
                     </div>
                  </div>
                  {/* uchichi blok */}
                  <div className="footr_blok2-min">
                     <div className="footr_blok2-min-blok1">
                     <img src={footr4} alt="" />
                     </div>
                     <div className="footr_blok-min-blok2">
                        <h3>Colourful waters!</h3>
                        <p>Forest-driven water and energy <br /> cycles are poorly.</p>
                        <a href="#">@jhon7leew</a>
                     </div>
                  </div>


                  </div>
               </div>
            </div>
         </div>
         <div id="contact" className="footr_main">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3">
                  <div className="footr_main-blok">
                     <h1>Trevland</h1>
                     <p>Contact us</p>
                     <a href="#">komilmaxmudov9@gmail.com</a>
                     <div className="footr_main-blok-icon">
                        <i><FaFacebookSquare className="fa-facebook"/></i>
                        <i> <FaInstagram className="fa-instagram"/></i>
                        <i><FaTwitter className="fa-twitter"/></i>
                        <i><FcGoogle className="fa-google"/></i>
                     </div>
                  </div>

                  </div>
                  <div className="col-lg-2">
                     <div className="footr_main-blok">
                        <ul className="footr-ul">
                           <li className="footr-li">
                              <a id="a1" className="footr-a" href="#">Services</a>
                           </li>
                           <li  className="footr-li">
                              <a id="a2" className="footr-a" href="#">About</a>
                           </li>
                           <li className="footr-li">
                              <a id="a3" className="footr-a" href="#">Our story</a>
                           </li>
                           <li className="footr-li">
                              <a id="a4" className="footr-a" href="#">Benefits</a>
                           </li>
                           <li className="footr-li">
                              <a id="a5" className="footr-a" href="#">Branding</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="footr_main-blok">
                        <ul className="footr-ul">
                           <li className="footr-li">
                              <a id="a6" className="footr-a" href="#">Legal</a>
                           </li>
                           <li className="footr-li">
                              <a id="a7" className="footr-a" href="#">Terms & Conditions</a>
                           </li>
                           <li className="footr-li">
                              <a id="a8" className="footr-a" href="#">Privecy Policy</a>
                           </li>
                           <li className="footr-li">
                              <a id="a9" className="footr-a" href="#">Terms of use</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="footr_main-blok">
                        <h3>SUBSCRIBE NOW</h3>
                        <form className="footr-input">
                           <input type="text"  placeholder="Email"/>
                           <button>Send</button>
                        </form>                    
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </footer>
   )

}
export default Footr;
 


window.onload = function () {
const  a1 = document.getElementById("a1")
const  a2 = document.getElementById("a2")
const  a3 = document.getElementById("a3")
const  a4 = document.getElementById("a4")
const  a5 = document.getElementById("a5")
const  a6 = document.getElementById("a6")
const  a7 = document.getElementById("a7")
const  a8 = document.getElementById("a8")
const  a9 = document.getElementById("a9")


   

   a1.onclick = function(){
     this.style.color = "#C9453B"
   }
   a2.onclick = function(){
      this.style.color = "#C9453B"
    }
    a3.onclick = function(){
      this.style.color = "#C9453B"
    }
    a4.onclick = function(){
      this.style.color = "#C9453B"
    }
    a5.onclick = function(){
      this.style.color = "#C9453B"
    }
    a6.onclick = function(){
      this.style.color = "#C9453B"
    }
    a7.onclick = function(){
      this.style.color = "#C9453B"
    }
    a8.onclick = function(){
      this.style.color = "#C9453B"
    }
    a9.onclick = function(){
      this.style.color = "#C9453B"
    }



}
