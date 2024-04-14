const url = 'https://jsonplaceholder.typicode.com/posts';

const template = item => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };
  });

  return promise;
};

const usersData = [];

const getUser = async userId => {
  const userExist = usersData.find(user => user.id === userId);

  if (userExist) {
    return userExist;
  }

  const fetchUser = await xhrPromise(
    'GET',
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const user = await JSON.parse(fetchUser);
  usersData.push(user);
  return user;
};

xhrPromise('GET', url).then(async response => {
  const posts = JSON.parse(response);
  let result = '';

  posts.forEach(item => {
    result += template(item);
  });

  document.getElementById('blog').innerHTML = result;

  const authors = document.querySelectorAll('.author');

  for (const author of authors) {
    const id = +author.dataset.id;
    const user = await getUser(id);
    author.textContent = user.name;
  }
});
