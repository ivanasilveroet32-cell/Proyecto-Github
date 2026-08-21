// Detecta si se ejecuta en Node.js
if (typeof window === 'undefined') {
    console.log("¡Hola Mundo!");
  } 
  
  // Detecta si se ejecuta en el navegador
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      const titulo = document.querySelector('h1');
      if (titulo) {
        titulo.textContent = "¡Hola Mundo desde el navegador!";
      }
    });
  }
  