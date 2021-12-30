

{
const btn1 = document.querySelector('#dropdown1 > button')


btn1.addEventListener('click', function(event) {
    // this.getAttribute('aria-expanded') === 'true'
    //     ? this.setAttribute('aria-expanded', false)
    //     : this.setAttribute('aria-expanded', true)

    function clickAway(event) {
        if (event.target.nodeName !== "BUTTON" & event.target !== btn1) {
            event.preventDefault()
            btn1.setAttribute('aria-expanded', false)
            document.removeEventListener('click', clickAway)
        }
    }

    if (this.getAttribute('aria-expanded') === 'true') {
        this.setAttribute('aria-expanded', false)
    } else {
        this.setAttribute('aria-expanded', true)
        document.addEventListener('click', clickAway)
    }
})

document.querySelectorAll('#dropdown1 li button').forEach(btn => {
    btn.addEventListener('click', function(event) {
        btn1.textContent = btn.textContent;
        btn1.setAttribute('aria-expanded', false)
    })
})

}