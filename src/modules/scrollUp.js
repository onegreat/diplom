const scrollUp = () => {

    const arrowTop = document.querySelector('.up');

    arrowTop.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener('scroll', function () {
        arrowTop.hidden = (window.pageYOffset < 650);
    })

}

export default scrollUp