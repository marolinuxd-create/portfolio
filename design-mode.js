/* Design Mode - enables reordering and editing of page elements */

window.designMode = {
  active: false,
  
  init() {
    // Listen for design mode toggle from parent
    window.addEventListener('message', (e) => {
      if (e.data.type === '__activate_edit_mode') {
        this.enable();
      } else if (e.data.type === '__deactivate_edit_mode') {
        this.disable();
      }
    });
    
    // Announce availability
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
  },
  
  enable() {
    this.active = true;
    document.body.classList.add('design-mode-active');
    this.makeElementsDraggable();
  },
  
  disable() {
    this.active = false;
    document.body.classList.remove('design-mode-active');
    this.removeDragListeners();
  },
  
  makeElementsDraggable() {
    // Make draggable: index rows, case study sections, about sections, etc.
    const draggables = document.querySelectorAll(
      '.index-row, .cs-section, .peek, [data-draggable]'
    );
    
    draggables.forEach((el) => {
      el.draggable = true;
      el.style.cursor = 'grab';
      el.addEventListener('dragstart', this.handleDragStart.bind(this));
      el.addEventListener('dragover', this.handleDragOver.bind(this));
      el.addEventListener('drop', this.handleDrop.bind(this));
      el.addEventListener('dragend', this.handleDragEnd.bind(this));
    });
  },
  
  removeDragListeners() {
    const draggables = document.querySelectorAll('[draggable="true"]');
    draggables.forEach((el) => {
      el.draggable = false;
      el.style.cursor = 'auto';
    });
  },
  
  handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
    e.target.style.opacity = '0.5';
  },
  
  handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    e.target.style.borderTop = '2px solid var(--accent)';
    return false;
  },
  
  handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    const source = document.querySelector('[style*="opacity: 0.5"]');
    if (source && source !== e.target) {
      const parent = source.parentNode;
      const target = e.target.closest('[draggable="true"]');
      if (target && parent) {
        parent.insertBefore(source, target);
      }
    }
    e.target.style.borderTop = 'none';
    return false;
  },
  
  handleDragEnd(e) {
    e.target.style.opacity = '1';
    document.querySelectorAll('[draggable="true"]').forEach((el) => {
      el.style.borderTop = 'none';
    });
  }
};

// Initialize when ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.designMode.init());
} else {
  window.designMode.init();
}
