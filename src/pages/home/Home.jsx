import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Login from "../../components/login/login";
import More from "../../components/more/more";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/footer/footer";
import Moree from "../../components/more/more";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Login/>
      <More/>
      <Hero/>
      <Footer/>
      <Moree/>
    </div>
  )
}

export default Home