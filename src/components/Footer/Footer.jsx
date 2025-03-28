import "./Footer.css";
import { Link  } from "react-router-dom";
import EventsDropdownMenu from "../EventsDropdownMenu/EventsDropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeetup,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/whitetranslogo.svg";
import route_names from "../../data_obj/RouteNames";


function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    
    <footer>
      <section className="mini-footer">
        <div className="mini-footer-logo-container">
          <img
            src={logo}
            id="footer-logo"
            alt="Baltimore Code and Coffee logo"
          />
          </div>
        <div className="mini-footer-menu">
          <ul>
          <li>
              <Link to={route_names.event_cal} onClick={scrollToTop}>Event Calendar</Link>
           </li>
            
           <li>
              <Link to={route_names.event_type} onClick={scrollToTop}>Event Types</Link>
           </li>
           <li>
              <Link to={route_names.about_us} onClick={scrollToTop}>About Us</Link>
            </li>
            <li>
              <Link to={route_names.get_involved}>Get Involved</Link>
            </li> 
            <li>
              <Link to={route_names.blog} onClick={scrollToTop}>Blog</Link>
            </li>
            <li>
              <a
                href="https://hcb.hackclub.com/donations/start/baltimore-code-and-coffee"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sponsor
              </a>
            </li>
          </ul>
        </div>
        <div className="social-list">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/company/baltimore-code-coffee/"
                className="social-button"
                target ='_blank'
              >
                <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://baltimoretech.slack.com/archives/CTDNSM6EP"
                className="social-button"
                target = '_blank'
              >
                <FontAwesomeIcon className="social-icon" icon={faSlack} />
              </a>
            </li>
            <li>
              <a
                href="https://www.meetup.com/baltimore-code-and-coffee"
                className="social-button"
                target = '_blank'
              >
                <FontAwesomeIcon className="social-icon" icon={faMeetup} />
              </a>
            </li>
          </ul>
        </div>
        <div>
        <p className="copyright">
          © 2024 Baltimore Code and Coffee All rights reserved.
        </p>
        </div>
      </section>

      <section className="full-footer">
      <section className="top-half">
        <div className="footer-logo-container">
          <img
            src={logo}
            id="footer-logo"
            alt="Baltimore Code and Coffee logo"
          />
          <span className="email">
            <FontAwesomeIcon id="envelope" icon={faEnvelope} />{" "}
            <a href="mailto:bmorecodecoffee@gmail.com"> bmorecodecoffee@gmail.com</a>
          </span>
        </div>
        <div className="footer-links">
          <ul>
          <li>
              <EventsDropdownMenu />
            </li>
            <li>
              <Link to={route_names.about_us}>About Us</Link>
            </li>
            <li>
              <Link to={route_names.blog}>Blog</Link>
            </li>
            <li>
              <Link to={route_names.get_involved}>Get Involved</Link>
            </li>
            <li>
              <a
                href="https://hcb.hackclub.com/donations/start/baltimore-code-and-coffee"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sponsor
              </a>
            </li>
            
          </ul>
        </div>
      </section>
      <div className="bottom-half">
        <p className="copyright">
          © 2024 Baltimore Code and Coffee All rights reserved.
        </p>
        <ul className="social-list">
          <li>
            <a
              href="https://www.linkedin.com/company/baltimore-code-coffee/"
              className="social-button"
              target = '_blank'
            >
              <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://baltimoretech.slack.com/archives/CTDNSM6EP"
              className="social-button"
              target = '_blank'
            >
              <FontAwesomeIcon className="social-icon" icon={faSlack} />
            </a>
          </li>
          <li>
            <a
              href="https://www.meetup.com/baltimore-code-and-coffee"
              className="social-button"
              target = '_blank'
            >
              <FontAwesomeIcon className="social-icon" icon={faMeetup} />
            </a>
          </li>
        </ul>
      </div>
      </section>
    </footer>

  );
}

export default Footer;