function toggleMenu() {
  var mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.toggle('active');
}

document.addEventListener('click', function (event) {
  var mobileNav = document.getElementById('mobileNav');
  var menuIcon = document.getElementById('menu-icon');

  // Check if the click is outside the mobile menu and menu icon
  if (event.target !== mobileNav && event.target !== menuIcon && !mobileNav.contains(event.target)) {
      mobileNav.classList.remove('active');
  }
});
