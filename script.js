const h2 = document.createElement("h2");
h2.textContent = "A Little about me";
document.querySelector("body").appendChild(h2)

const button = document.querySelector('button')
button.addEventListener('click', event => {
    button.textContent = `Click count ${event.detail}`;
});
