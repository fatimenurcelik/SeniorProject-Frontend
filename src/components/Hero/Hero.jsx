import "./hero.css"
import logo from './arac.jpg'; 

const Hero = () => {
  return (
    <div className="container">
        <br />
    <div className="row">
      <div className="col">
        <img className="img-fluid image" src={logo} alt=""/>
      </div>
      <div className="col hero">
        <h3>Sürüş yaparken tasarruf et</h3>
        <p className="fs-5s">
        Sürücü olarak kaydol ve yolcularla yolculuk paylaşarak seyahat giderlerinden tasarruf et. 
        İlk yolculuğunu yayınlamak sadece dakikalar sürer. Yola çıkmaya hazır mısın?
        </p>
      </div>
    </div>
    </div>


  )
}

export default Hero