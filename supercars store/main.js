 window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });




  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.car-card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
 });