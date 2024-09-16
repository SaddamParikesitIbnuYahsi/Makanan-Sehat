document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu');
  const currentPath = window.location.pathname;

  menuItems.forEach(item => {
    const itemPath = new URL(item.href).pathname;
    if (itemPath === currentPath) {
      item.classList.add('active');
    }
  });
});