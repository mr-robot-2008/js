document.querySelectorAll('.button').forEach(button => {
    let text = button.querySelector('.text');
    text.innerHTML = '<span>' + text.textContent.trim().split('').join('</span><span>') + '</span>';
    button.addEventListener('click', e => {
        if(!button.classList.contains('delete')) {

            button.classList.add('delete');

            setTimeout(() => button.classList.remove('delete'), 2400);

        }
        e.preventDefault();
    });
});
