
const filterBtns  = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // 1. Update active button style
    filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
    btn.classList.add('filter-btn--active');

    const selected = btn.dataset.filter; // "necklaces" or "other"

    // 2. Show / hide cards
    productCards.forEach(card => {
      const category = card.dataset.category;

      // Show all if no filter logic needed, otherwise match
      if (category === selected) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});