document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animation on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load

  // Testimonial carousel
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  let currentTestimonial = 0;
  
  function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
      card.style.display = i === index ? 'block' : 'none';
    });
  }

  // Auto-rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
  }, 5000);

  // Initialize
  showTestimonial(0);

  // Back to top button
  // const backToTopButton = document.createElement('button');
  // backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  // backToTopButton.className = 'btn btn-primary back-to-top';
  // backToTopButton.style.position = 'fixed';
  // backToTopButton.style.bottom = '20px';
  // backToTopButton.style.right = '20px';
  // backToTopButton.style.borderRadius = '50%';
  // backToTopButton.style.width = '50px';
  // backToTopButton.style.height = '50px';
  // backToTopButton.style.display = 'none';
  // backToTopButton.style.zIndex = '99';
  // document.body.appendChild(backToTopButton);

  // window.addEventListener('scroll', function() {
  //   if (window.scrollY > 300) {
  //     backToTopButton.style.display = 'block';
  //   } else {
  //     backToTopButton.style.display = 'none';
  //   }
  // });

  // backToTopButton.addEventListener('click', function() {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // });

  // Scroll to top button
        const scrollToTopBtn = document.getElementById('scrollToTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('active');
            } else {
                scrollToTopBtn.classList.remove('active');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
  // Form validation
  const newsletterForm = document.querySelector('footer form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput.value && emailInput.value.includes('@')) {
        alert('धन्यवाद! तुमची विनंती यशस्वीरित्या नोंदवली गेली आहे.');
        emailInput.value = '';
      } else {
        alert('कृपया वैध ईमेल पत्ता प्रविष्ट करा.');
      }
    });
  }
});