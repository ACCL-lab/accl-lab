import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import newsData from '../data/newsData';
import newsImage from '../assets/images/news.png';

const News = () => {
  const [activeNews, setActiveNews] = useState(null);

  return (
    <>
      <h2 className="text-center mb-4 page-header">Latest News</h2>

      <div className="row align-items-stretch gx-5 flex-md-row flex-column-reverse">
        {/* Image Column */}
        <div className="col-md-6 text-center" data-aos="fade-right">
          <img
            src={newsImage}
            alt="News"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '450px', objectFit: 'cover', width: '100%' }}
          />
        </div>

        {/* News List Column */}
        <div className="col-md-6 d-flex mb-4 mb-md-0" data-aos="fade-left">
          <div className="news-box p-3 rounded shadow-sm bg-light w-100">
            <h5 className="mb-3">
              <span role="img" aria-label="announcement" className="me-1">📢</span> Recent News
            </h5>

            <ul className="list-unstyled news-list">
              {newsData.map((news, index) => (
                <li
                  key={index}
                  className="mb-2 news-item"
                  onClick={() => setActiveNews(news)}
                >
                  <span className="text-primary">
                    {news.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal Popup for News */}
      {activeNews && (
        <Modal show={true} onHide={() => setActiveNews(null)} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{activeNews.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {activeNews.description && (
              <div
                style={{ whiteSpace: 'pre-line' }}
                dangerouslySetInnerHTML={{ __html: activeNews.description }}
              />
            )}

            {activeNews.authors && (
              <p><strong>By:</strong> {activeNews.authors}</p>
            )}
          </Modal.Body>

          <Modal.Footer>
            {activeNews.link ? (
              <a
                href={activeNews.link}
                className="btn btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Link
              </a>
            ) : (
              <button className="btn btn-outline-secondary" disabled>
                No Link Available
              </button>
            )}
            <Button variant="secondary" onClick={() => setActiveNews(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default News;
