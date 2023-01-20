const modalService = () => {
    const btnService = document.querySelector('.button-services');
    const modal = document.querySelector('.modal-callback');
    const overlay = document.querySelector('.modal-overlay');
    const closeBtn = document.querySelector('.modal-close');
    const slideBtn = document.querySelectorAll('.fancyboxModal');
    const btn = document.querySelector('.up');
    const body = document.querySelector('body');
    const screenWidth = window.screen.width;

    console.log(body);


    slideBtn.forEach((item) => {
        item.addEventListener('click', function () {
            modal.style.display = 'block';
            overlay.style.display = 'block';
            modal.style.opacity = '1';
            btn.style.display = 'none';
        });
    });
    btnService.addEventListener('click', function () {
        modal.style.display = 'block';
        modal.style.opacity = '1';
        overlay.style.display = 'block';
        btn.style.display = 'none';
    });

    function closeModal() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        btn.style.display = 'block';
    }

    function scrolRemove() {
        let div = document.createElement('div');

        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';

        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        console.log(scrollWidth);
        body.style.width = screenWidth + scrollWidth
        console.log(screenWidth);

    }


    scrolRemove()
    console.log(scrolRemove);
    overlay.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
};

export default modalService;