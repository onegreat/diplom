const accordeon = () => {
    const elements = document.querySelectorAll('.accordeon-element');
    const contents = document.querySelectorAll('.accordeon-element>element-content');



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
                elements.style.display = 'block'
            } else {
                el.classList.remove('active');
            }
        });
    });
};

export default accordeon;