// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import './EventsDropdownMenu.css' 
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EventCalIcon from "../../assets/event_cal_icon.svg";
import EventTypeIcon from "../../assets/event_type_icon.svg";

export default function DropdownMenu() {
  return (
    <div className="dropdown-menu">
      <div className="dropdown-title">
        <span>Events</span>
        <KeyboardArrowDownIcon fontSize="small"/>
      </div>
      <div className="dropdown-content">
        <div className="hoverable-spacer"></div>
        <ul>
          <Link className="navbar__link" to='/event-types'>
            <li><img src={EventCalIcon}/>Event Types</li>
          </Link>
          <Link className="navbar__link" to='/event-calendar'>
            <li><img src={EventTypeIcon}/>Event Calendar</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
