const linkAnim = () => {

    const anchors = document.querySelectorAll('.scroll-to')
    console.log(anchors)
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

}

export default linkAnim