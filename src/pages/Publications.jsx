import React, { useState } from 'react';
import publications from '../data/publicationsData';
import '../styles/style.css';

const filterYear = (year) => {
  if (year >= 2021) return '2021-present';
  if (year >= 2016) return '2016-2020';
  if (year >= 2010) return '2010-2015';
  return 'unknown';
};

const Publications = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPubs = publications.filter(pub => {
    const range = filterYear(pub.year);
    return activeFilter === 'all' || activeFilter === range;
  });

  return (
    <section className="py-5 section-offset" id="publications">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold">Publications</h1>

        <div className="text-center mb-4">
          {['all', '2010-2015', '2016-2020', '2021-present'].map(year => (
            <button
              key={year}
              className={`btn btn-outline-primary mx-1 filter-btn ${
                activeFilter === year ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(year)}
            >
              {year === 'all' ? 'All' : year}
            </button>
          ))}
        </div>

        <div className="row">
          {filteredPubs.map((pub, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{pub.title}</h5>
                  <p className="card-text"><strong>Authors:</strong> {pub.authors}</p>
                  {
                  //<p className="card-text"><strong>Venue:</strong> {pub.venue}</p>
                  }
                  <p className="card-text"><strong>Published On:</strong> {pub.publishedon}</p>
                  {pub.doi && (
                    <a href={pub.doi} className="btn btn-sm btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                      View DOI
                    </a>
                  )}
                  {pub.pdf && (
                    <a href={pub.pdf} className="btn btn-sm btn-outline-secondary ms-2" target="_blank" rel="noopener noreferrer">
                      View PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPubs.length === 0 && (
          <p className="text-center text-muted">No publications found in this range.</p>
        )}
      </div>
    </section>
  );
};

export default Publications;
