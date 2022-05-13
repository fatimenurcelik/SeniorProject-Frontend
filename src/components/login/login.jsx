import "./login.css"

const login = () => {
  return (
     //<div>login</div>
      <div className="container">
      <div className="row">
        <div className="col">
          <h1>GEZGİN</h1>
          <br /><br />
        <form className="form">
          <h3>Giriş Yap</h3>
          <br />
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            {/* <input type="password" class="form-control" id="exampleInputPassword1"> */}
          </div>
          <div className="mb-3 form-check">
            {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"> */}
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <a href="../Hotel.jsx">
            <button type="submit" class="btn btn-primary mb-3">Giriş Yap</button>
          </a>
          {/* tıklanabilir link yap  */}
          <h5>Hesabın yok mu ? Hemen üye ol </h5>
        </form>
        </div>
        <div className="col">
          <p className="fs-4 fw-bold loginP">
            Gezgine hosgeldin. Gezgin seni ekonomik seyahat ve konaklama hizmeti veren diğer kullanıcılar ile tanıştırıyor.
            Üstelik sende hizmet verebilirsin.
          </p>
        </div>
      </div>
      </div>



  )
}

export default login