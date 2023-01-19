import { animate } from "./helpers";

const modal = () => {
    const buttons = document.getElementById('callback-btn')
    const modal = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalClose = document.querySelector('.modal-close')
    const modalFormName = document.querySelector('#fio')
    const modalFormPhone = document.querySelector('#tel')
    const body = document.body

    console.log(body);


    // modalFormName.addEventListener('blur', (e) => {
    //     e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '').toLowerCase().replace(/([^а-я]|^)([а-я])(?=[а-я]{2})/g, function (_, g1, g2) {
    //         return g1 + g2.toUpperCase();
    //     })
    // })

    // modalFormPhone.addEventListener('blur', (e) => {
    //     e.target.value = e.target.value.replace(/[^\d()+]/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '');
    // })

    buttons.addEventListener('click', () => {
        if (document.documentElement.clientWidth > 768) {
            animate({
                duration: 100,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.display = 'block'
                    modal.style.opacity = '0'
                    setTimeout(() => {
                        modal.style.transition = 'all 1s ease'
                        modal.style.opacity = '1'
                    })
                }
            });
        }
        body.classList.add('disable-scroll')
        modalOverlay.style.display = 'block'
        modal.style.display = 'block'
    })

    modalClose.addEventListener('click', (e) => {
        body.classList.remove('disable-scroll')
        modal.style.display = 'none'
        modalOverlay.style.display = 'none'
        modal.style.opacity = '0'
    })

    modalOverlay.addEventListener('click', (e) => {
        body.classList.remove('disable-scroll')
        modal.style.display = 'none'
        modalOverlay.style.display = 'none'
        modal.style.opacity = '0'
    })


}

export default modal