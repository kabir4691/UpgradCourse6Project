const postTitleElem = document.getElementById('post-title');
const postTextElem = document.getElementById('post-text');
const editPostElem = document.getElementById('post-edit');
const savePostElem = document.getElementById('post-save');
const likeStatusElem = document.getElementById('post-like-status');
const likeCountElem = document.getElementById('post-like-count');
const commentInputElem = document.getElementById('comment-input');
const commentsContainerElem = document.getElementById('comments-container');

let likeCount = 0;
let commentList = [];

function onEditPostRequested() {
  editPostElem.style.display = 'none';
  savePostElem.style.display = 'inline';
  postTitleElem.contentEditable = true;
  postTextElem.contentEditable = true;
}

function onSavePostRequested() {
  savePostElem.style.display = 'none';
  editPostElem.style.display = 'inline';
  postTitleElem.contentEditable = false;
  postTextElem.contentEditable = false;
}

function onLikePostRequested() {
  likeCount++;
  likeStatusElem.innerText = 'Liked';
  likeCountElem.innerText = likeCount === 1 ? '1 person likes this!' : `${likeCount} people like this!`;
}

function renderComments() {
  if (commentList.length === 0) {
    commentsContainerElem.style.display = 'none';
    return;
  }
  commentsContainerElem.style.display = 'block';
  commentsContainerElem.innerText = '';
  commentList.forEach(comment => {
    const element = document.createElement('p');
    element.className = 'comment';
    element.innerText = comment;
    commentsContainerElem.appendChild(element);
  });
}

function onAddCommentRequested() {
  const commentText = commentInputElem.value;
  if (!commentText) return;
  commentList.push(commentText);
  commentInputElem.value = '';
  renderComments();
}

renderComments();

