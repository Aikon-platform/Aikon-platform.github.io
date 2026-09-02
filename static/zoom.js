document.addEventListener('DOMContentLoaded', () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `<div class="modal-background"></div>
        <div class="modal-content is-clipped"><img></div>
        <button class="modal-close is-large" aria-label="close"></button>`;
    document.body.appendChild(modal);

    const img = modal.querySelector('.modal-content img');
    const close = () => modal.classList.remove('is-active');

    document.querySelectorAll('.doc-section img').forEach(el => el.addEventListener('click', () => {
        img.src = el.src;
        img.alt = el.alt;
        modal.classList.add('is-active');
    }));

    modal.addEventListener('click', e => {
        if (!e.target.matches('.modal-content img')) close();
    });
    document.addEventListener('keydown', e => e.key === 'Escape' && close());
});
