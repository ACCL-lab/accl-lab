// src/components/TeamSection.jsx
import teamData from "../data/team";
import TeamGroup from "./TeamGroup";

export default function TeamSection() {
  return (
    <div id="team-section" className="py-5 section-offset">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold">Our Team</h1>

        {/* Director */}
        <div className="text-center mb-5" data-aos="zoom-in">
          <img
            src={teamData.director.image}
            alt={teamData.director.name}
            className="img-fluid rounded-circle shadow mb-3"
            width={170}
          />
          <h4 className="fw-bold mb-1">{teamData.director.name}</h4>
          <p className="text-muted">{teamData.director.role}</p>
          <p className="fw-medium text-dark d-flex align-items-center justify-content-center">
            <i className="fas fa-envelope text-danger me-2"></i>
            <span style={{ cursor: "pointer" }}>{teamData.director.email}</span>
          </p>
          <div className="social-icons mt-2">
            {teamData.director.social?.github && (
              <a href={teamData.director.social.github} target="_blank" rel="noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  style={{ margin: "0 5px" }}
                />
              </a>
            )}
            {teamData.director.social?.linkedin && (
              <a href={teamData.director.social.linkedin} target="_blank" rel="noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  style={{ margin: "0 5px" }}
                />
              </a>
            )}
            {teamData.director.social?.scholar && (
              <a href={teamData.director.social.scholar} target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg"
                  alt="Google Scholar"
                  width={24}
                  height={24}
                  style={{ margin: "0 5px" }}
                />
              </a>
            )}
            {teamData.director.social?.orcid && (
              <a href={teamData.director.social.orcid} target="_blank" rel="noreferrer">
                <img
                  src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png"
                  alt="ORCID"
                  width={24}
                  height={24}
                  style={{ margin: "0 5px" }}
                />
              </a>
            )}
          </div>
        </div>

        {/* Groups */}
        <TeamGroup title="Ph.Ds" members={teamData.phd} />
        <TeamGroup title="M.Techs" members={teamData.mtech} />
        <TeamGroup title="Project Staff" members={teamData.projectstaff} />
        <TeamGroup title="B.Techs" members={teamData.btech} />
        <TeamGroup title="M.Sc Researchers" members={teamData.msc} />
        <TeamGroup title="Interns" members={teamData.interns} />
        <TeamGroup title="Past Members" members={teamData.past} />
      </div>
    </div>
  );
}
