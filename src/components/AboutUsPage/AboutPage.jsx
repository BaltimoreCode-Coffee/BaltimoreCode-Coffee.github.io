import MemberCard from './MemberCard'
import { useEffect, useState } from 'react';
import supabase from "../../utils/supabaseClient.js";
import "./AboutPage.css";

export default function AboutPage() {
  const [members, setMembers] = useState([]);

  // Fetching members and team roles from Supabase
  useEffect(() => {
    const fetchData = async () => {
      // members
      const { data: memberData, error: memberError } = await supabase
        .from('member')
        // Update select to pull from the team_roles table as well
        .select('id, first_name, last_name, profile_link, headshot, team_roles(role, team_id)');

     

      // team roles
      // const { data: roleData, error: roleError } = await supabase
      //   .from('team_roles')
      //   .select('id, role, team_id, member_id');

      if (memberError) {
        console.error('Error fetching data:', memberError || roleError);
      } else {
        //console.log('Fetched members:', memberData);

        
        setMembers(memberData);

        
        //console.log('Team 1 members:', getMemberInfo(1));
        //console.log('Team 3 members:', getMemberInfo(3));

      }
    };

    fetchData();
  }, []);

  const getMemberInfo = (teamId) => {
    // Filter & map members based on selected teamId
    return members
      .filter(member => {
        // Check if the member has roles for the given teamId
        return member.team_roles.some(role => role.team_id === teamId)
      })
      .map(member => {
        // Find roles that match both the member_id and team_id
        const roles = member.team_roles
          .filter(role => role.team_id === teamId)
          .map(role => role.role) // Extract the roles
          .join(', '); // Join the roles with a comma
        
    if (roles.length === 0) return null;

    return {
        id: member.id,
        name: `${member.first_name} ${member.last_name}`,
        img: member.headshot,
        profile: member.profile_link,
        role: roles || 'No role assigned'
    };
  });
};

return (
  <section className="about-us">
    
   
    <div className="about-us-top">
    <h1 className="about-us-h1">Our Mission</h1>
      <p>Foster learning and build meaningful relationships within Baltimore&apos;s tech community.</p>
      
    </div>
    <div className="gallery-container">
      {/* First Row : Gets items by Mapping*/}
      <div className="row-1">
        <h2 className="about-us contributor-title">Our Team</h2>
        <div className="gallery-items-container">
          {getMemberInfo(3).map(member => (
            <div key={member.id} className="gallery-item1">
              <MemberCard
                name={member.name}
                img={member.img}
                profile={member.profile}
                role={member.role}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="row-2">
        <h2 className="about-us contributor-title">Web Team Contributors</h2>
        <div className="gallery-items-container">
          {getMemberInfo(1).map(member => (
            <div key={member.id} className="gallery-item2">
              <MemberCard
                name={member.name}
                img={member.img}
                profile={member.profile}
                role={member.role}
              />
            </div>
          ))}
        </div>
      </div>
    
    </div>
  </section>
);
}
