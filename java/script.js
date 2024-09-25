document.addEventListener('DOMContentLoaded', function() {
  // Menandai menu yang aktif
  const menuItems = document.querySelectorAll('.menu');
  const currentPath = window.location.pathname;

  menuItems.forEach(item => {
    const itemPath = new URL(item.href).pathname;
    if (itemPath === currentPath) {
      item.classList.add('active');
    }
  });

  const registrationForm = document.getElementById('registrationForm');
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah form melakukan submit default

      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const errorMessage = document.getElementById('errorMessage');

      // Cek apakah password cocok
      if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
      } else {
        errorMessage.style.display = 'none';
        window.location.href = 'index.html'; 
      }
    });
  }
});

function searchRecipe() {
  // Ambil nilai input dari search bar
  const searchTerm = document.getElementById('searchBar').value.toLowerCase();
  
  // Ambil semua card makanan
  const foodCards = document.getElementsByClassName('card');
  
  // Loop melalui setiap card dan tampilkan/hilangkan berdasarkan kecocokan dengan search term
  for (let i = 0; i < foodCards.length; i++) {
      let cardTitle = foodCards[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
      
      if (cardTitle.includes(searchTerm)) {
          foodCards[i].style.display = 'block'; // Tampilkan jika sesuai
      } else {
          foodCards[i].style.display = 'none'; // Sembunyikan jika tidak sesuai
      }
  }
}