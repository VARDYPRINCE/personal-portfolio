import { Link } from "react-scroll";
import "./footer.css";
import SocialHandles from "../../ui/SocialHandles/SocialHandles";
import { menu } from "../../data";

const Footer = () => {
  return (
    <footer>
      <div className="section__wrapper">
        <ul className="flex__center nav">
          {menu.map((list, index) => (
            <Link
              to={list.name.toLowerCase()}
              smooth={true}
              duration={500}
              className="tab"
              key={index}
            >
              {list.name}
            </Link>
          ))}
        </ul>
        <SocialHandles />
        <div className="copyright">
          <h3>Copyright &copy; All right reserved - | 2024</h3>
          {/* <p className="text__muted">Built with love by Uche Prince</p> */}
        </div>
        {/* <div className="base__logo">
          <h1 className="full__name shine">
            Uche Prince
          </h1>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
