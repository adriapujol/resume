const info = document.querySelectorAll('.box-title');
info.forEach((category) => category.addEventListener('click', showList));

function showList(e) {
    const infoBox = e.target.parentElement.parentElement;
    infoBox.classList.toggle('active');
    infoBox.children[1].classList.toggle('hide');
}
