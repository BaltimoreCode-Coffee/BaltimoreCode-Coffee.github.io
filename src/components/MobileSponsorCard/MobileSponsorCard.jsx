import './MobileSponsorCard.css' 
import { Link } from "react-router-dom";

function MobileSponsorCard({content}) {
    return   ( 
        <Link className="mobile-sponsor-link"  to={content.website} target="_blank">
        <div className="mobile-sponsor-card" id={content.id}>
            <img src={content.image_url} className="mobile-sponsor-card__logo" />
            <h3>{content.name}</h3>
            <p>{content.description}</p>
            <p className="mobile-sponsor-card__type">{content.type}</p>
        </div>
        </Link>
     )
    
}
export default MobileSponsorCard;