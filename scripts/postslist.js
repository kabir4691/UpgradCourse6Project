const deletePostModal = document.getElementById('modal-dialog-deletepost');
const allPostsContainer = document.getElementById('post-all-container');

let postIdToDelete = null;

function onPostDeleteRequested(postId) {
  postIdToDelete = postId;
  modalContainer.style.display = 'block';
  deletePostModal.style.display = 'block';
}

function onPostDeleteConfirmed() {
  modalContainer.style.display = 'none';
  deletePostModal.style.display = 'none';

  for (let i = 0; i < postsList.length; i++) {
    const post = postsList[i];
    if (postIdToDelete === post.id) {
      console.log(i, postIdToDelete, post);
      postsList.splice(i, 1);
      break;
    }
  }

  postIdToDelete = null;
  render();
}

function onPostDeleteRejected() {
  modalContainer.style.display = 'none';
  deletePostModal.style.display = 'none';
  postIdToDelete = null;
}

class Post {
  constructor(id, author, title, text) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.text = text;
  }
}

let postsList = [];
postsList.push(new Post(
  1,
  'Srishti Gupta',
  '‘let’ me be a ‘const’(ant), not a ‘var’(iable)!',
  'Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.'
));
postsList.push(new Post(
  2,
  'Colby Fayock',
  'What is linting and how can it save you time?',
  'One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have.'
));
postsList.push(new Post(
  3,
  'Yazeed Bzadough',
  'How to Get More Views on Your Tech Blog',
  "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."
));
postsList.push(new Post(
  4,
  'Cedd Burge',
  'How to write easily describable code',
  'When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code.'
));
postsList.push(new Post(
  5,
  'Srishti Gupta',
  'Everything you should know about ‘module’ & ‘require’ in Node.js',
  'Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz.'
));

function render() {
  allPostsContainer.innerHTML = '';
  postsList.forEach(post => {
    const postCardContainerElem = document.createElement('div');
    postCardContainerElem.className = 'post-card-container';
    const postCardElem = document.createElement('div');
    postCardElem.className = 'post-card';
    const postContainerElem = document.createElement('div');
    postContainerElem.className = 'post-container';
    const usernameElem = document.createElement('p');
    usernameElem.className = 'username';
    usernameElem.innerHTML = post.author.split(' ').join('<br/>');
    const postContentElem = document.createElement('div');
    postContentElem.className = 'post-content';
    const postHeadingContainerElem = document.createElement('div');
    postHeadingContainerElem.className = 'post-heading-container';
    const postHeadingElem = document.createElement('p');
    postHeadingElem.className = 'post-heading';
    postHeadingElem.innerHTML = post.title;
    const postDeleteElem = document.createElement('button');
    postDeleteElem.classList.add('fa', 'fa-trash', 'post-delete');
    postDeleteElem.addEventListener('click', () => {
      onPostDeleteRequested(post.id);
    });
    const postTextElem = document.createElement('p');
    postTextElem.className = 'post-text';
    postTextElem.innerHTML = post.text;
    const postEllipsisContainerElem = document.createElement('div');
    postEllipsisContainerElem.className = 'post-ellipsis-container';
    const postEllipsisElem = document.createElement('button');
    postEllipsisElem.classList.add('fa', 'fa-ellipsis-h', 'post-ellipsis');
    postEllipsisElem.addEventListener('click', () => {
      window.location.href = './post.html';
    });
    postHeadingContainerElem.appendChild(postHeadingElem);
    postHeadingContainerElem.appendChild(postDeleteElem);
    postContentElem.appendChild(postHeadingContainerElem);
    postContentElem.appendChild(postTextElem);
    postEllipsisContainerElem.appendChild(postEllipsisElem);
    postContentElem.appendChild(postEllipsisContainerElem);
    postContainerElem.appendChild(usernameElem);
    postContainerElem.appendChild(postContentElem);
    postCardElem.appendChild(postContainerElem);
    postCardContainerElem.appendChild(postCardElem);
    allPostsContainer.appendChild(postCardContainerElem);
  });
}

render();



