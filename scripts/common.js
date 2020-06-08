const modalContainer = document.getElementById('modal-container');
const signUpModal = document.getElementById('modal-dialog-signup');
const signInModal = document.getElementById('modal-dialog-signin');

function onSignUpRequested() {
  modalContainer.style.display = 'block';
  signUpModal.style.display = 'block';
}

function onSignUpCloseRequested() {
  modalContainer.style.display = 'none';
  signUpModal.style.display = 'none';
}

function onSignInRequested() {
  modalContainer.style.display = 'block';
  signInModal.style.display = 'block';
}

function onSignInCloseRequested() {
  modalContainer.style.display = 'none';
  signInModal.style.display = 'none';
}