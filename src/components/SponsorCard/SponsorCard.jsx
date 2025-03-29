import './SponsorCard.css' 
import { Link } from "react-router-dom";

function SponsorCard({sponsor}) {
    return ( 
       
        <div className="sponsor-card" id={sponsor.id}>
             <Link  to={sponsor.website} target="_blank">
            <div className="sponsor-card__top">
                <img src={sponsor.image_url} className="sponsor-card__logo" />
            </div>
            <div className="sponsor-card__bottom">
                <h3>{sponsor.name}</h3>
                <p>{sponsor.description}</p>
            </div>
            <div className="sponsor-card__type">
                {sponsor.type}
            </div>
            </Link>
        </div>
  
     );
}

export default SponsorCard;