const accordeon = () => {
    const elements = document.querySelectorAll('.accordeon .element');
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

            self.classList.toggle('active');

            if (self.classList.contains('active')) {
                content.classList.add('active');
            }
        });
    });
};

export default accordeon;
