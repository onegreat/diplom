const linkAnim = () => {
    const menu = document.querySelectorAll('.top-menu>ul>li');

    menu.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const scrollDest = document.getElementById(e.target.getAttribute("href").substring(1));

            scrollDest.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })
}

export default linkAnim