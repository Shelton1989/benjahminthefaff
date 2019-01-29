(function(){
    emailjs.init("user_PHzhXFbNTsbtIPNO0QHxX");
  })();
  $(document).ready(function(){
    $('.tabs').tabs();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
  });

  function scrollToElement(e) {
    let x = e.innerHTML
    document.getElementById(x).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'})
  }
  function toTop() {
    document.getElementById('Home').scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'})
  }
  setInterval(()=>{
    document.getElementById('to-top-icon').classList.add('animated', 'bounce');
    setTimeout(()=>{
      document.getElementById('to-top-icon').classList.remove('animated', 'bounce');
    },2500) 
  },5000);

  document.getElementById('contact-form').addEventListener('submit',()=>{
    event.preventDefault();
    var templateParameters = {
      name: document.getElementById('first_name').value,
      lastName: document.getElementById('last_name').value,
      email: document.getElementById('email').value,
      cellNumber: document.getElementById('number').value,
      message: document.getElementById('message').value,
    }
    emailjs.send('sendgrid', 'template_wC3FlAvk', templateParameters)
    .then(function(response){
      document.getElementById('success-div').innerHTML = 'Success'
    }, function(error){
      document.getElementById('success-div').innerHTML = 'Error, please refresh the page and resubmit.'
    });
  });