

{
const btn1 = document.querySelector('#dropdown1 > button')

function closeDropdown() {
    function reset() {
        btn1.nextElementSibling.removeEventListener('animationend', reset)
        btn1.nextElementSibling.style.animationDirection = '';
        btn1.setAttribute('aria-expanded', false)
    }
    btn1.nextElementSibling.style.animation = 'none';
    setTimeout(() => {
        btn1.nextElementSibling.style.animation = '';
        btn1.nextElementSibling.style.animationDirection = 'reverse';
        btn1.nextElementSibling.addEventListener('animationend', reset)
    }, 0);
    document.removeEventListener('click', clickAway)
}

function clickAway(event) {
    if (event.target.nodeName !== "BUTTON" & event.target !== btn1) {
        event.preventDefault()
        closeDropdown()
    }
}

btn1.addEventListener('click', function(event) {
    if (this.getAttribute('aria-expanded') === 'true') {
        closeDropdown()
    } else {
        this.setAttribute('aria-expanded', true)
        document.addEventListener('click', clickAway)
    }
})

document.querySelectorAll('#dropdown1 li button').forEach(btn => {
    btn.addEventListener('click', function(event) {
        btn1.textContent = btn.textContent;
        closeDropdown()
    })
})

}