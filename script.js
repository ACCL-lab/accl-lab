// -----------------------------
// Animation Library Init
// -----------------------------
AOS.init();

// -----------------------------
// Smooth Scrolling for Hero Button
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// hero section background particles
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("network-bg", {
    particles: {
      number: {
        value: 60,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#cccccc" },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.6,
        random: true
      },
      size: {
        value: 6,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#888888",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        out_mode: "bounce"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: false }
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: { opacity: 0.7 }
        }
      }
    },
    retina_detect: true
  });
});



// publications filter logic
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.publication-card');

  // Function to filter cards
  function filterPublications(range) {
    cards.forEach(card => {
      card.style.display = (range === "all" || card.dataset.range === range) ? 'block' : 'none';
    });

    // Update active button
    buttons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.year === range) {
        btn.classList.add('active');
      }
    });
  }

  // Attach click handlers
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const range = btn.dataset.year;
      filterPublications(range);
    });
  });

  // 🔥 Apply "All" filter by default on page load
  filterPublications("all");
});


// Project Filter Logic
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('#projects .col-md-6');

  // Filter function
  function filterProjects(filter) {
    // Toggle active button
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-filter') === filter) {
        btn.classList.add('active');
      }
    });

    // Show/hide cards based on status
    projectCards.forEach(card => {
      const status = card.getAttribute('data-status');
      card.style.display = (filter === 'all' || filter === status) ? 'block' : 'none';
    });
  }

  // Attach event listeners
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      filterProjects(filter);
    });
  });

  // 🔥 Apply "All" filter on page load
  filterProjects("all");
});

// -----------------------------

// Copy Email Function
function copyEmail() {
  const email = document.getElementById("emailText").innerText;
  navigator.clipboard.writeText(email).then(() => {
    const toastEl = document.getElementById('copyToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }).catch((err) => {
    console.error('Failed to copy email: ', err);
    alert("Failed to copy email.");
  });
}
