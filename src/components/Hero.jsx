import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.class}>
        <img src={props.heroImg} alt="HeroImg" className="heroImg" />
        <div className="heroText">
          <h1 className="">{props.title}</h1>
          <p className="">{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
}
export default Hero;
