document.addEventListener("DOMContentLoaded", () => {
    // Obtención de la URL actual
    const currentUrl = window.location.pathname.split("/").pop();
   
    // Seleccoón todos los enlaces del navbar
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link =>{
      const linkUrl = link.getAttribute("href");
        // Comparación con la URL actual y agregación la clase active al enlace correspondiente
        if (linkUrl.includes(currentUrl)) {
          link.style.color = "green";
        }
    });
    
  });
  
  