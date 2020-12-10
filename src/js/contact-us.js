let msgForm = document.querySelector('#contact-us');
let msgUsername = document.querySelector('#contact-us-username');
let msgEmail = document.querySelector('#contact-us-email');
let msgMessage = document.querySelector('#contact-us-message');
let msgSubmit = document.querySelector('#contact-us-submit');

msgSubmit.addEventListener('click', e => {
  e.preventDefault();
  // verify email value
  if (
    msgUsername.value == null ||
    msgEmail.value == null ||
    msgMessage.value == null ||
    msgUsername.value == '' ||
    msgEmail.value == '' ||
    msgMessage.value == ''
  ) {
    console.log('enter your email please.');
  } else {
    let data = {
      method: 'POST',
      //then convert obj to json value
      body: JSON.stringify({
        username: msgUsername.value,
        email: msgEmail.value,
        message: msgMessage.value,
        list: 'reactjs-books',
        js: true
      }),
      headers: { 'Content-Type': 'application/json' }
    };

    const url = 'https://my-mail-chimp.herokuapp.com/api/v1/messages';

    fetch(url, data).then(res => {
      if (res.ok) {
        console.log('thanks for the message.');
        msgForm.classList.add('fadOut');
        msgForm.innerHTML =
          "<div class='message' > Thanks for contacting us!<br/> We will be in touch with you shortly.</div>";
      } else {
      }
    });
  }
});
