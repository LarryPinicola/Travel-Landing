import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="">
          <h1 className="">Trippy</h1>
          <p className="">Choose your favorite destination</p>
        </div>
        {/* social icons */}
        <div className="">
          <a href="">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-behance-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div className="">
          <h4 className="">Project</h4>
          <a href="">Change log</a>
          <a href="">Status</a>
          <a href="">License</a>
          <a href="">All versions</a>
        </div>

        <div className="">
          <h4 className="">Community</h4>
          <a href="">Github</a>
          <a href="">Issues</a>
          <a href="">Project</a>
          <a href="">Twitter</a>
        </div>

        <div className="">
          <h4 className="">Help</h4>
          <a href="">Support</a>
          <a href="">Troubleshooting</a>
          <a href="">Contact Us</a>
        </div>

        <div className="">
          <h4 className="">Others</h4>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
          <a href="">License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
