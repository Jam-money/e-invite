const pages = document.querySelectorAll('.page');
let currentPage = 0;

// Show only the first page at start
pages.forEach((page, index) => {
  page.style.display = index === 0 ? 'block' : 'none';
});

function showNextPage() {
  // Hide current page
  pages[currentPage].style.display = 'none';

  // Move to next page in loop
  currentPage = (currentPage + 1) % pages.length;

  // Show next page
  pages[currentPage].style.display = 'block';
}

// Click anywhere on any page to go to the next
pages.forEach((page) => {
  page.addEventListener('click', showNextPage);
});

