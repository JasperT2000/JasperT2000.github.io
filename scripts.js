function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';

  document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.classList.remove('active');
  });
  const activeLink = document.getElementById('nav-' + pageId);
  if (activeLink) activeLink.classList.add('active');
}

function checkHash() {
  const hash = window.location.hash.substring(1);
  const page = (hash === 'projects') ? 'projects' : 'about';
  showPage(page);
}

window.addEventListener('hashchange', checkHash);
window.onload = checkHash;
