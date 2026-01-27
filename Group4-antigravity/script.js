document.addEventListener('DOMContentLoaded', () => {
    const btnMore = document.querySelector('.btn-more');
    
    if (btnMore) {
        btnMore.addEventListener('click', () => {
            alert('Loading more PHINMA University features...');
            // In a real app, this could load more content or navigate to a gallery
        });
    }

    // Add a subtle fade-in effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
});
