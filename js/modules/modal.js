import { projectsData } from '../data/projects.js';

export function initProjectModal() {
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDescription = document.getElementById('modal-description');
  const modalFeaturesList = document.getElementById('modal-features');
  const modalMediaText = document.getElementById('modal-media-text');
  const modalImage = document.getElementById('modal-image');
  const galleryPrev = document.getElementById('gallery-prev');
  const galleryNext = document.getElementById('gallery-next');
  const galleryDots = document.getElementById('gallery-dots');

  let currentImages = [];
  let currentIndex = 0;

  function getImages(project) {
    if (Array.isArray(project.images) && project.images.length) {
      return project.images.map(img =>
        typeof img === 'string'
          ? { src: img, alt: project.imageAlt || project.title }
          : { src: img.src, alt: img.alt || project.title }
      );
    }
    if (project.image) {
      return [{ src: project.image, alt: project.imageAlt || project.title }];
    }
    return [];
  }

  function showImage(index) {
    currentIndex = (index + currentImages.length) % currentImages.length; // wraps around
    const { src, alt } = currentImages[currentIndex];
    modalImage.src = src;
    modalImage.alt = alt;

    galleryDots.querySelectorAll('button').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
      dot.setAttribute('aria-current', i === currentIndex ? 'true' : 'false');
    });
  }

  function setupGallery(project) {
    currentImages = getImages(project);
    const hasImages = currentImages.length > 0;
    const hasMultiple = currentImages.length > 1;

    modalImage.classList.toggle('hidden', !hasImages);
    modalMediaText.classList.toggle('hidden', hasImages);
    galleryPrev.classList.toggle('hidden', !hasMultiple);
    galleryNext.classList.toggle('hidden', !hasMultiple);
    galleryDots.classList.toggle('hidden', !hasMultiple);

    if (!hasImages) {
      modalImage.removeAttribute('src');
      galleryDots.innerHTML = '';
      return;
    }

    galleryDots.innerHTML = currentImages
      .map((_, i) => `<button type="button" data-index="${i}" aria-label="Show image ${i + 1}"></button>`)
      .join('');

    showImage(0); // always start on the first image
  }

  galleryPrev.addEventListener('click', () => showImage(currentIndex - 1));
  galleryNext.addEventListener('click', () => showImage(currentIndex + 1));

  galleryDots.addEventListener('click', (e) => {
    const dot = e.target.closest('button[data-index]');
    if (dot) showImage(Number(dot.dataset.index));
  });

  document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('hidden') || currentImages.length < 2) return;
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });


  if (modal && projectCards.length > 0) {
    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-id');
        const project = projectsData.find(p => p.id === projectId);
        
        if (!project) return;

        modalTitle.textContent = project.title;
        modalCategory.textContent = project.category;
        modalDescription.textContent = project.description;
        modalMediaText.textContent = project.imageText;

        modalMediaText.textContent = project.imageText;
        setupGallery(project);

        if (modalFeaturesList && project.features) {
          modalFeaturesList.innerHTML = project.features
            .map(feature => `<li>${feature}</li>`)
            .join('');
        }

        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
      });
    });

    modalCloseBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  }
}