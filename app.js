// app.js

// Mobile Menu Functionality
function openmenu() {
  document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
  document.getElementById("sidemenu").style.right = "-200px";
}

// Coursework Expansion
document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.category');
  categories.forEach(category => {
      category.addEventListener('click', () => {
          category.classList.toggle('expanded');
      });
  });
});

// Portfolio Filtering
const portfolioFilters = document.querySelectorAll('.project-filter');
const portfolioItems = document.querySelectorAll('.work');

portfolioFilters.forEach(filter => {
  filter.addEventListener('click', () => {
      // Remove active class from all filters
      portfolioFilters.forEach(f => f.classList.remove('active'));
      // Add active class to clicked filter
      filter.classList.add('active');
      
      const filterValue = filter.dataset.filter;
      
      portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
              item.style.display = "block";
          } else {
              item.style.display = "none";
          }
      });
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Contact Form Handling
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = {
          name: this.querySelector('[name="name"]').value,
          email: this.querySelector('[name="email"]').value,
          message: this.querySelector('[name="message"]').value
      };

      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
          alert('Please fill in all fields');
          return;
      }

      // Send form data
      console.log('Form submitted:', formData);
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.textContent = 'Message sent successfully!';
      contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
      

      this.reset();
      
      setTimeout(() => {
          successMessage.remove();
      }, 3000);
  });
}

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(element => {
  observer.observe(element);
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-39VH3H4M3K');

const projectModals = document.querySelectorAll('.project-modal');
const closeButtons = document.querySelectorAll('.close-modal');

projectModals.forEach(modal => {
  modal.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
      btn.closest('.project-modal').style.display = 'none';
  });
});

document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = link.dataset.project;
      document.getElementById(projectId).style.display = 'block';
  });
});

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll indicator click handler
    document.querySelector('.scroll-indicator').addEventListener('click', () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });


    function openmenu() {
      document.getElementById('sidemenu').classList.add('active');
  }
  
  function closemenu() {
      document.getElementById('sidemenu').classList.remove('active');
  }
  
  /* Add this JavaScript */
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 100) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});