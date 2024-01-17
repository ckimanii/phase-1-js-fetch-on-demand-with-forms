const init = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formInput = document.querySelector('#searchByID').value;
        if (formInput){
            fetch(`http://localhost:3000/movies/${formInput}`)
            .then(res => res.json())
            .then(data => {
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');
                title.innerHTML = data.title;
                summary.innerHTML = data.summary;
            });
        };
    });

}

document.addEventListener('DOMContentLoaded', init);