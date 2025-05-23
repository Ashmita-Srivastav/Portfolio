  const sections = document.querySelectorAll("section");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };
 const words = ["Full Stack Developer","Computer Science Engineer","Coder","Tech Enthusiast"];
  let index = 0;

  const span = document.getElementById("change");

  setInterval(() => {
    span.classList.add("fade-out");
    
    setTimeout(() => {
      index = (index + 1) % words.length;
      span.textContent = words[index];
      span.classList.remove("fade-out");
      span.classList.add("fade-in");
    }, 300);
  }, 2000);

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const heading = entry.target.querySelector("h3");
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        if (entry.target.id === "contact" && heading) {
          heading.classList.add("rotate");
        }
      } else {
        if (entry.target.id === "contact" && heading) {
          heading.classList.remove("rotate");
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      }
      document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    });
  });