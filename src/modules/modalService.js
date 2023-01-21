import { calcScroll } from "./helpers";
const modalService = () => {
    const btnService = document.querySelector('.button-services');
    const modal = document.querySelector('.modal-callback');
    const overlay = document.querySelector('.modal-overlay');
    const closeBtn = document.querySelector('.modal-close');
    const slideBtn = document.querySelectorAll('.fancyboxModal');
    const btn = document.querySelector('.up');
    const body = document.querySelector('body');
    const screenWidth = window.screen.width;
    let pagePosY, pagePosX

    const scrollRemove = (isEnabled = true) => {


        if (isEnabled) {
            body.classList.add('disable-scroll')
            body.dataset.position = pagePosY
            body.style.top = -pagePosY + 'px'
            body.style.paddingRight = calcScroll + 'px'


        } else {
            pagePosY = +body.dataset.position
            body.style.top = 'auto'
            body.classList.remove('disable-scroll')
            window.scroll({ top: pagePosY, left: 0 })
            body.removeAttribute('data-position')

        }
    }

    window.addEventListener('scroll', () => {
        pagePosY = window.scrollY
        pagePosX = window.screen.width
    })

    slideBtn.forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault()
            scrollRemove()
            calcScroll()
            body.style.paddingRight = calcScroll() + 'px'
            modal.style.display = 'block';
            overlay.style.display = 'block';
            modal.style.opacity = '1';
            btn.style.display = 'none';

        });
    });
    btnService.addEventListener('click', function (e) {
        e.preventDefault()
        scrollRemove()
        body.style.paddingRight = calcScroll + 'px'
        modal.style.display = 'block';
        modal.style.opacity = '1';
        overlay.style.display = 'block';
        btn.style.display = 'none';

    });

    function closeModal() {
        scrollRemove(false)
        body.style.paddingRight = 0 + 'px'
        modal.style.display = 'none';
        overlay.style.display = 'none';
        btn.style.display = 'block';
    }

    overlay.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
};

export default modalService;