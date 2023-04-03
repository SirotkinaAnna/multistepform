(() => {
    const div = document.querySelector('#third')
    div.classList.add("circleFirst")
    div.classList.remove('circleDiv')
    const addon = document.querySelectorAll('.total');
    const divTotal = document.querySelectorAll('.addons')
    for (let i = 0; i < addon.length; i++) {
        addon[i].addEventListener('change', () => {
            if (addon[i].checked) {
                divTotal[i].classList.add('addons-clicked')
            } else {
                divTotal[i].classList.remove('addons-clicked')
            }
        })
    }
})()