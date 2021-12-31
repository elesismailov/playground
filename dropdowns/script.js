

{
const btn1 = document.querySelector('#dropdown1 > button')

function resetDropdown() {
    function reset() {
        btn1.nextElementSibling.removeEventListener('animationend', reset)
        btn1.nextElementSibling.style.animationDirection = '';
        btn1.setAttribute('aria-expanded', false)
        // btn1.parentElement.style.pointerEvents = '';
    }
    setTimeout(() => {
        btn1.nextElementSibling.style.animation = '';
        btn1.nextElementSibling.style.animationDirection = 'reverse';
        btn1.nextElementSibling.addEventListener('animationend', reset)
    }, 0);
    btn1.nextElementSibling.style.animation = 'none';
    // btn1.parentElement.style.pointerEvents = 'none';
}

btn1.addEventListener('click', function(event) {

    function clickAway(event) {
        if (event.target.nodeName !== "BUTTON" & event.target !== btn1) {
            event.preventDefault()
            // btn1.setAttribute('aria-expanded', false)
            document.removeEventListener('click', clickAway)
            resetDropdown()
        }
    }

    if (this.getAttribute('aria-expanded') === 'true') {
        resetDropdown()
    } else {
        this.setAttribute('aria-expanded', true)
        document.addEventListener('click', clickAway)
    }
})

document.querySelectorAll('#dropdown1 li button').forEach(btn => {
    btn.addEventListener('click', function(event) {
        btn1.textContent = btn.textContent;
        resetDropdown()
    })
})

btn1.nextElementSibling.addEventListener('animationend', function(event) {
    console.log('ended')
    // btn1.nextElementSibling.style.animation = '';
})

}