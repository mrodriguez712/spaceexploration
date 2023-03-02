// modal
let apply = document.querySelector('.apply')
let FAQS = document.querySelector('.FAQs')

let modal = document.querySelector('.modal')
let modalFAQS = document.querySelector('.modal-FAQS')

let span =  document.querySelector('.close')
let closefaqs = document.querySelector('.close-faqs')

let modalBtn = document.querySelector('.modal-btn')

apply.addEventListener('click', function() {
    modal.style.display = 'block'
})

FAQS.addEventListener('click', function() {
    modalFAQS.style.display = 'block'
})

span.onclick = function() {
    modal.style.display = 'none'
}

closefaqs.onclick = function() {
    modalFAQS.style.display = 'none'
}


// inside modal

function myFunction() {
    let input = document.getElementById('input-password')
    if (input.type === 'password') {
        input.type = 'text'
    } else {
        input.type = 'password'
    }
}

modalBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})


