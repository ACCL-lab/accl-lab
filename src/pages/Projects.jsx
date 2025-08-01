import React, { useState } from "react";
import projects from "../data/projectsdata";
import { Modal, Button } from "react-bootstrap";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((proj) => proj.status === filter);

  return (
    <div className="projects-section py-5 section-offset" id="projects">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold">Funded Projects</h1>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-end mb-4">
          <div className="btn-group" role="group" aria-label="Filter projects">
            {["All", "Ongoing", "Completed"].map((status) => (
              <button
                key={status}
                className={`btn btn-outline-${
                  status === "Ongoing" ? "success" : status === "Completed" ? "secondary" : "dark"
                } filter-btn ${filter === status ? "active" : ""}`}
                onClick={() => setFilter(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="row gy-4 justify-content-center">
          {filteredProjects.map((project) => (
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch" key={project.id}>
              <div className="card h-100 shadow-sm border-0 bg-white rounded project-card">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-1">
                    <span className={`badge bg-${project.status === "Ongoing" ? "success" : "secondary"}`}>
                      {project.status}
                    </span>
                    {project.funding && (
                      <span className="badge bg-info text-dark">
                        {project.funding}
                      </span>
                    )}
                    <span className="badge bg-warning text-dark">{project.date}</span>
                  </div>
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.shortDesc}</p>
                  <button
                    className="btn btn-sm btn-outline-primary mt-auto"
                    onClick={() => setActiveProject(project)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeProject && (
          <Modal show={true} onHide={() => setActiveProject(null)} centered size="lg">
            <Modal.Header closeButton>
              <Modal.Title>{activeProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {activeProject.fundingDetails && (
                <div className="mb-3">
                  <h5 className="fw-bold">Funding Information</h5>
                  <ul className="list-unstyled">
                    {activeProject.fundingDetails.amount && (
                      <li><strong>Fund:</strong> {activeProject.fundingDetails.amount}</li>
                    )}
                    {activeProject.fundingDetails.role && (
                      <li><strong>Role:</strong> {activeProject.fundingDetails.role}</li>
                    )}
                    {activeProject.fundingDetails.agency && (
                      <li><strong>Funding Agency:</strong> {activeProject.fundingDetails.agency}</li>
                    )}
                    {activeProject.fundingDetails.scheme && (
                      <li><strong>Scheme:</strong> {activeProject.fundingDetails.scheme}</li>
                    )}
                    {activeProject.fundingDetails.duration && (
                      <li><strong>Duration:</strong> {activeProject.fundingDetails.duration}</li>
                    )}
                  </ul>
                </div>
              )}

              {activeProject.detailsIntro && <p>{activeProject.detailsIntro}</p>}
              {activeProject.detailsPoints && (
                <ul>
                  {activeProject.detailsPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
              {activeProject.detailsConclusion && <p>{activeProject.detailsConclusion}</p>}
            </Modal.Body>

            <Modal.Footer>
              {activeProject.report && activeProject.report !== "#" ? (
                <a
                  href={activeProject.report}
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Report
                </a>
              ) : (
                <button className="btn btn-outline-secondary" disabled>
                  View Report
                </button>
              )}
              <Button variant="secondary" onClick={() => setActiveProject(null)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Projects;
