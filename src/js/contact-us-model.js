// Get the modal
var modalContact = document.getElementById('contact-us-modal');

// Get the button that opens the modal
var btnContact = document.getElementById('contact-us-btn');

// Get the <span> element that closes the modal
var spanContact = document.getElementById('contact-us-close');

// When the user clicks the button, open the modal
btnContact.onclick = function () {
  modalContact.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
spanContact.onclick = function () {
  modalContact.style.display = 'none';
  console.log('X click');
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalContact) {
    modalContact.style.display = 'none';
  }
};
