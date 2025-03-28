import EventsDropdownMenu from "../EventsDropdownMenu/EventsDropdownMenu";
import logo from "../../assets/bcc-nav.svg";
import HamburgerMenuIcon from "@mui/icons-material/Menu";
import EventCalIcon from "../../assets/event_cal_icon.svg";
import EventTypeIcon from "../../assets/event_type_icon.svg";
import route_names from "../../data_obj/RouteNames";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileSlidingMenu from "../MobileSlidingMenu/MobileSlidingMenu";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  function toggleMenuDisplay() {
    if (window.innerWidth <= 830) {
      setIsMobileMenuOpen(true);
    } else {
      setIsMobileMenuOpen(false);
    }
  }

  useEffect(() => {
    toggleMenuDisplay();
    window.addEventListener("resize", toggleMenuDisplay);

    return () => {
      window.removeEventListener("resize", toggleMenuDisplay);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="BCC logo" className="navbar__icon" />
      </Link>
      {!isMobileMenuOpen && (
        <ul className="navbar__desktop-menu">
          <li className="navbar__desktop-menu-item">
            <EventsDropdownMenu />
          </li>
          <li className="navbar__desktop-menu-item">
            <Link className="navbar__link" to={route_names.about_us}>
              About Us
            </Link>
          </li>
          <li className="navbar__desktop-menu-item">
            <Link className="navbar__link" to={route_names.blog}>
              Blog
            </Link>
          </li>
          <li className="navbar__desktop-menu-item">
            <Link className="navbar__link" to={route_names.get_involved}>
            Get Involved
            </Link>
          </li>
          <li className="navbar__desktop-menu-item">
            <Link
              className="navbar__link"
              to="https://hcb.hackclub.com/donations/start/baltimore-code-and-coffee"
              target="blank"
            >
              Sponsor
            </Link>
          </li>
         
        </ul>
      )}
      {isMobileMenuOpen && (
        <MobileSlidingMenu
          buttonId="mobileNavEventsButton"
          menuId="mobileNavEventsMenu"
          buttonIcon={<HamburgerMenuIcon fontSize="large" />}
          menuItems={[
            {
              name: "Event",
              id: "mobileEventBtn",
              disabled: true,
            },
            {
              name: "Event Calendar",
              id: "mobileEventCalBtn",
              handleClick: () => {
                navigate(route_names.event_cal);
              },
              icon: EventCalIcon,
            },
            {
              name: "Event Types",
              id: "mobileEventTypeBtn",
              handleClick: () => {
                navigate(route_names.event_type);
              },
              icon: EventTypeIcon,
            },
            
            {
              name: "About Us",
              id: "mobileAboutUsBtn",
              handleClick: () => {
                navigate(route_names.about_us);
              },
            },
            {
              name: "Blog",
              id: "mobileBlogBtn",
              handleClick: () => {
                navigate(route_names.blog);
              },
            },
            {
              name: "Get Involved",
              id: "mobileVolunteerBtn",
              handleClick: () => {
                navigate(route_names.get_involved);
              },
            },
            {
              name: "Sponsor",
              id: "mobileSponsorBtn",
              handleClick: () => {
                window.open(
                  "https://hcb.hackclub.com/donations/start/baltimore-code-and-coffee"
                );
              },
            },
           
          ]}
        ></MobileSlidingMenu>
      )}
    </nav>
  );
}

export default Navbar;