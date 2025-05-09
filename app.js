const sidebarLinks = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('section');
  
sidebarLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const container = document.querySelector('.main-container');
        container.style.transform = `translateX(-${index * 100}vw)`;
      });
    });