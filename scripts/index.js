const createPostModal = document.getElementById('modal-dialog-createpost');

function onAllPostsRequested() {
  window.location.href = 'html/postslist.html';
}

function onCreatePostRequested() {
  modalContainer.style.display = 'block';
  createPostModal.style.display = 'block';
}

function onCreatePostCloseRequested() {
  modalContainer.style.display = 'none';
  createPostModal.style.display = 'none';
}




