import { animate } from "./helpers";

const modal = () => {
    const buttons = document.getElementById('callback-btn')
    const modal = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalClose = document.querySelector('.modal-close')
    const modalFormName = document.querySelector('#fio')
    const modalFormPhone = document.querySelector('#tel')
    // const modalFormMail = document.querySelector('#form3-email')

    console.log(modalOverlay)


    modalFormName.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^А-Яа-я -]/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '').toLowerCase().replace(/([^а-я]|^)([а-я])(?=[а-я]{2})/g, function (_, g1, g2) {
            return g1 + g2.toUpperCase();
        })
    })

    modalFormPhone.addEventListener('blur', (e) => {
        e.target.value = e.target.value.replace(/[^\d()+]/gi, '').replace(/\ \ +/gi, ' ').replace(/\-\-+/gi, '-').replace(/^\s/g, '').replace(/\s$/g, '');
    })

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
                        modal.style.transition = 'all 3s ease'
                        modal.style.opacity = '1'
                    })
                }
            });
        }
        modalOverlay.style.display = 'block'
        modal.style.display = 'block'
    })

    modalClose.addEventListener('click', (e) => {
        console.log(e.target)

        modal.style.display = 'none'
        modalOverlay.style.display = 'none'
        modal.style.opacity = '0'
    })

    console.log(buttons)
}

export default modal