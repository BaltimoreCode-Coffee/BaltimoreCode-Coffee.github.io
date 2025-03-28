import "./GetInvolved.css";
import collage from "../../assets/volunteer_collage.png";
import { Link } from "react-router-dom";

export default function GetInvolved() {
  return (
    <section className="volunteer">
      <div className="volunteer_header">
        <h1 className="volunteer_title">Make Your Mark</h1>
        <div className="volunteer_top">
            <p>Play an active role in Baltimore's rise as a tech hub by joining our volunteer team!</p>
          </div>
      </div>
      
      <div className="volunteer_content">
        <div className="volunteer_text">
          
          
          <div className="volunteer_bottom">
            <p>We're a completely volunteer led organization, volunteers plan and run events, curate speaker pipelines, and secure venues.
              If you're passionate about tech and looking to increase your involvement in the
              community, becoming a volunteer at Code & Coffee might be for you.
              <br /> <br /> 
              As a volunteer, you'll have the opportunity to turn your technical skills into leadership skills, and
              play a part in building Baltimore's vibrant tech ecosystem. Join us today and be a part of
              something meaningful!
            </p>
          </div>
          
          <button className="volunteer button">
            <Link to="https://forms.gle/1TGsVjN8LLFPm8eH9" target="_blank">Volunteer</Link>
          </button>
        </div>
        
        <img src={collage} className="collage" alt="Volunteer collage" />
        
        <button className="mobile-button">
            <Link to="https://forms.gle/1TGsVjN8LLFPm8eH9" target="_blank">Volunteer</Link>
          </button>
          
      </div>
    </section>
  );
}