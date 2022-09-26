document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {

    const number = document.querySelector('#number').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.chucknorris.io/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);  

            let output = `
                <li>${response.value}</li>
            `;

            document.querySelector('.jokes').innerHTML = output;

        }
    }

    xhr.onloadend = function () {
        if(this.status !== 200) {
            let output = `
                <li>Something went wrong. Please do not put any number in textbox</li>
            `;

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}