let toBeHide = document.querySelector('#to-be-hide');
let subscribeForm = document.querySelector('#subscribe-form');
let subscribeEmail = document.querySelector('#subscribe-email');
let subscribeSubmit = document.querySelector('#subscribe-submit');

subscribeSubmit.addEventListener('click', e => {
  e.preventDefault();
  // verify email value
  if (subscribeEmail.value == null || subscribeEmail.value == '') {
    console.log('enter your email please.');
  } else {
    let data = {
      method: 'POST',
      //then convert obj to json value
      body: JSON.stringify({ email: subscribeEmail.value, list: 'reactjs-books', js: true }),
      headers: { 'Content-Type': 'application/json' }
    };

    const url = 'https://my-mail-chimp.herokuapp.com/api/v1/subscribes';

    fetch(url, data).then(res => {
      if (res.ok) {
        console.log('thank you for subscribing.');
        toBeHide.classList.add('fadout');
        toBeHide.innerHTML = "<div class=' title fadein' >Thank You For Subscribing!</div>";
      } else {
        console.log('thank you for subscribing.');
        toBeHide.classList.add('fadout');
        toBeHide.innerHTML =
          "<div class='message fadeIn' >Something went wrong please try again.</div>";
      }
    });
  }
});
