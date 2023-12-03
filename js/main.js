// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням).
// Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

const inputRefButton = document.querySelector('#refInput');
const openRefButton = document.querySelector('#refOpen');

function inputReferenceHandler() {
    const refMatcher = new RegExp(
        '[-a-zA-Z0-9@:%._\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\+.~#?&/=]*)'
    );
    const protocolMatcher = new RegExp('^https?:\/\/');
    const promptInput = prompt('Reference:');

    if (typeof promptInput === 'string' && promptInput.match(refMatcher)) {
        const location = promptInput.match(protocolMatcher) ? promptInput : `http://${promptInput}`;
        openRefButton.setAttribute('data-location', location);
        openRefButton.removeAttribute('disabled');
        openRefButton.textContent = `Go to -> ${location}`;
    } else {
        alert('You putted invalid reference or press Cancel');
    }
}

function openReferenceHandler(event) {
    const location = event.target.getAttribute('data-location');

    if (location) {
        window.open(location, '_blank')
    }
}

inputRefButton.addEventListener('click', inputReferenceHandler);
openRefButton.addEventListener('click', openReferenceHandler);
