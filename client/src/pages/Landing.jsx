import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Job Search is made easy with few clicks. Are you looking for your
            dream job? your search might end here!!! :D
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="mainImg" className="img main-img" />
      </div>
    </>
  );
};

export default Landing;
