(() => {
    const div = document.querySelector('#second')
    div.classList.add("circleFirst")
    div.classList.remove('circleDiv')
    const price = document.querySelectorAll('.price');
    const myBold = document.querySelectorAll('.myBold')
    const span = document.querySelectorAll(".yearly");
    const swit = document.querySelector("#switch");
    const valueNew = [90, 120, 150]
    swit.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            for (let spans of span) {
                spans.classList.remove('d-none')

            }
            myBold[0].classList.add('text-muted');
            myBold[0].classList.remove('fw-bold');
            myBold[1].classList.add('fw-bold');
            myBold[1].classList.remove('text-muted');
            for (let i = 0; i < price.length; i++) {
                price[i].innerText = `$${valueNew[i]}/yr`

            }
        } else {
            for (let spans of span) {
                spans.classList.add('d-none')

            }
            myBold[1].classList.remove('fw-bold');
            myBold[1].classList.add('text-muted');
            myBold[0].classList.add('fw-bold');
            myBold[0].classList.remove('text-muted');
            for (let i = 0; i < price.length; i++) {
                price[i].innerText = `$${valueNew[i] / 10}/mo`

            }
        }
    })
    for (sp of span) {
        sp.style.fontSize = '12px';
    }
})()