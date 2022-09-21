const view = () => {
    // const search = document.querySelector('.button__search');
    // if (search) {
    //     const form = document.querySelector('.form');
    //     form.classList.add('form--hidden');
    //     search.addEventListener('click', () => {
    //         form.classList.toggle('form--hidden');
    //         form.classList.toggle('form--visible');
    //     });
    // }

    const button = document.querySelector('.button__view');
    if (button) {
        const listButton = document.querySelector('.button__view--list');
        const gridButton = document.querySelector('.button__view--grid');

        const view = localStorage.getItem('view');
        if (!view) {
            localStorage.setItem('view', 'list');
            gridButton.classList.toggle('invisible');
        }
        if (view === 'list') {
            gridButton.classList.toggle('invisible');
        }
        if (view === 'grid') {
            listButton.classList.toggle('invisible');
        }

        button.addEventListener('click', () => {
            let state = localStorage.getItem('view');
            if (!state) {
                state = 'list';
            }
            state = state === 'list' ? 'grid' : 'list';
            localStorage.setItem('view', state);
            // grid.classList.toggle('invisible');
            // list.classList.toggle('invisible');

            location.reload();
        });
    }
};

export { view };
