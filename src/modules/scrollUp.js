const scrollUp = () => {

    const arrowTop = document.querySelector('.up');

    arrowTop.onclick = function () {
        window.scrollTo(window.pageXOffset, 0);
    }

    window.addEventListener('scroll', function () {
        arrowTop.hidden = (window.pageYOffset < 650);
    })

}

export default scrollUp