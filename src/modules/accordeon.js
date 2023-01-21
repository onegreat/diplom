const accordeon = () => {
    const elements = document.querySelectorAll('.element');
    const contents = document.querySelectorAll('.element-content');

    elements.forEach(el => {
        el.addEventListener('click', (e) => {

            elements.forEach(item => {
                item.classList.remove('active');
            });
            contents.forEach(item => {
                item.classList.remove('active');
            });

            const self = e.currentTarget;
            const content = self.querySelector('.element-content');

            self.classList.add('active');

            if (self.classList.contains('active')) {
                content.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    });
};

export default accordeon;