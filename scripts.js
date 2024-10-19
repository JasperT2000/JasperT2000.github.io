// Function to show the correct section
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

// Function to check the hash in the URL and load the correct section
function checkHash() {
  // Default to 'about' section if no hash is present
  let page = 'about';
  
  // Check the URL for a hash
  if (window.location.hash) {
    const hash = window.location.hash.substring(1); // Remove the #
    
    // If the hash corresponds to a page, show that page
    if (hash === 'projects') {
      page = 'projects';
    }
  }
  
  // Show the corresponding page
  showPage(page);
}

// Event listener for changes in the hash (browser navigation)
window.addEventListener('hashchange', function() {
  checkHash();  // Check hash and show the correct section
});

// On page load, check the hash and display the correct section
window.onload = checkHash;
