import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
// import "./styles.css";
// import { Pagination } from "swiper";
import Main from './Components/Main';
import Header from './Components/Header';
import Footr from './Components/Footr';

// import {Button, Row, Col} from "react-bootstrap"







function App() {

  return (

<div>

<Header/>
<Main/>
<Footr/></div>




  )
}

window.onload = function () {
  const ul1 = document.querySelector(".ul1")
  const ul2 = document.querySelector(".ul2")
  const ul3 = document.querySelector(".ul3")
  const ul4 = document.querySelector(".ul4")
  const ul5 = document.querySelector(".ul5")

ul1.addEventListener("click" ,function() {
  ul1.style.color = "white"
  ul2.style.color = "white"
  ul3.style.color = "white"
  ul4.style.color = "white"
  ul5.style.color = "white"


})
ul2.addEventListener("click" ,function() {
  ul1.style.color = "white"
  ul2.style.color = "white"
  ul3.style.color = "white"
  ul4.style.color = "white"
  ul5.style.color = "white"
})
ul3.addEventListener("click" ,function() {
  ul1.style.color = "white"
  ul2.style.color = "white"
  ul3.style.color = "white"
  ul4.style.color = "white"
  ul5.style.color = "white"
})
ul4.addEventListener("click" ,function() {
  ul1.style.color = "white"
  ul2.style.color = "white"
  ul3.style.color = "white"
  ul4.style.color = "white"
  ul5.style.color = "white"
})
ul5.addEventListener("click" ,function() {
  ul1.style.color = "white"
  ul2.style.color = "white"
  ul3.style.color = "white"
  ul4.style.color = "white"
  ul5.style.color = "white"
})


}

export default App;
