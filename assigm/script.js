document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#left-panel a');
    const contentSections = document.querySelectorAll('#content p');
  
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
  
        // Hide all content sections
        contentSections.forEach(section => {
          section.classList.add('hidden');
        });
  
        // Show the selected content section
        const targetSection = document.getElementById(targetId);
        targetSection.classList.remove('hidden');
      });
    });
  });