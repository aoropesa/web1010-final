const navLogo = document.querySelector('.brand-logo')
const missionBtn = document.querySelector('#mission-btn')
const missionContent = document.querySelector('.mission-content')
const cardAction = document.querySelector('#services-btn')
const servicesContent = document.querySelector('.services-content')
const form = document.querySelector('.contact-form')
const formBtn = document.querySelector('.contact-form button')

navLogo.addEventListener('click',function(event){
  event.preventDefault(),
  console.log('clicked on logo')
})

missionBtn.addEventListener('click',function (event) {
  missionContent.classList.toggle('hidden')
})
cardAction.addEventListener('click',function (event) {
  servicesContent.classList.toggle('hidden')
})


form.addEventListener('submit', function(event){
  event.preventDefault()
  $.ajax({
    url: 'http://fvi-grad.com:4004/email',
    method: 'POST',
    data: $(form).serialize(),
    success: function () {
      form.reset()
      formBtn.classList.add('sent')
      formBtn.textContent = 'Message Sent!'

    }
  })
})
