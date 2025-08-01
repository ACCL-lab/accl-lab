import { FaEnvelope } from "react-icons/fa";

const groupToBorderClass = {
  "Director": "border-director",
  "Ph.Ds": "border-phd",
  "M.Techs": "border-mtech",
  "Project Staff": "border-project",
  "B.Techs": "border-btech",
  "Interns": "border-intern",
  "M.Sc Researchers": "border-msc",
  "Past Students": "border-past",
};

export default function TeamCard({ member, groupTitle }) {
  const { name, role, email, image, social = {} } = member;
  const borderClass = groupToBorderClass[groupTitle] || "";

  return (
    <div className="col-md-4 col-lg-3" data-aos="fade-up">
      <div className="card text-center border-0 shadow-sm p-3 h-100">
        <img
          src={image}
          className={`team-photo mx-auto mb-3 rounded-circle ${borderClass}`}
          alt={name}
          width={170}
          height={170}
        />
        <h6 className="mb-1">{name}</h6>
        <small className="text-muted">{role}</small>

        {email && (
          <p className="fw-medium text-dark d-flex align-items-center justify-content-center">
            <FaEnvelope className="text-danger me-2" />
            <span style={{ cursor: "pointer" }} title="Click to copy">{email}</span>
          </p>
        )}

        <div className="social-icons mt-2">
          {social?.github && (
            <a href={social.github} target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width={24} height={24} style={{ margin: "0 10px" }} />
            </a>
          )}
          {social?.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width={24} height={24} style={{ margin: "0 10px" }} />
            </a>
          )}
          {social?.scholar && (
            <a href={social.scholar} target="_blank" rel="noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg" alt="Google Scholar" width={24} height={24} style={{ margin: "0 10px" }} />
            </a>
          )}
          {social?.orcid && (
            <a href={social.orcid} target="_blank" rel="noreferrer">
              <img src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" alt="ORCID" width={24} height={24} style={{ margin: "0 5px" }} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
