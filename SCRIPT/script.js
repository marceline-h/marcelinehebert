// Sélectionner toutes les images de la galerie
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;

     // Si l'image a un data-link, afficher le lien lui-même
    const linkHTML = img.dataset.link 
      ? ` <a href="${img.dataset.link}" target="_blank">${img.dataset.link}</a>` 
      : '';

    // Affiche la légende avec texte + lien si présent
    lightboxCaption.innerHTML = img.alt + linkHTML;
  });
});
// Fermer en cliquant sur le bouton
lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Fermer en cliquant sur le fond
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Ne placer les images qu'en desktop
if (window.innerWidth > 768) {
  document.querySelectorAll('.img').forEach(img => {
    img.style.top = img.dataset.top;
    img.style.left = img.dataset.left;
    img.style.width = img.dataset.width;
  });

// Remettre le curseur normal après avoir quitté une image
document.querySelectorAll('.img').forEach(img => {
  img.addEventListener('mouseleave', () => {
    document.body.style.cursor = 'default';
  });
  
  img.addEventListener('mouseenter', () => {
    document.body.style.cursor = 'pointer';
  });

});
