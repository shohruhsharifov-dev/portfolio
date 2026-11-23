import { initYear } from './modules/utils.js';
import { initThemeToggle } from './modules/theme.js';
import { initNavigation } from './modules/navigation.js';
import { initProjectModal } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initThemeToggle();
  initNavigation();
  initProjectModal();
});