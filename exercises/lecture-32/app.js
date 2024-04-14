const url = 'https://jsonplaceholder.typicode.com/posts';

const template = item => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;

const fetching = async (url, method, body) => {
  if (method) {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error();
      }

      return response;
    } catch (error) {
      throw new Error();
    }
  } else {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error();
      }

      return response;
    } catch (error) {
      throw new Error();
    }
  }
};

fetching(url)
  .then(response => response.json())
  .then(posts => {
    let result = '';
    posts.forEach(post => {
      result += template(post);
    });
    document.getElementById('blog').innerHTML = result;

    const users = document.querySelectorAll('.author');
    return users;
  })
  .then(users => {
    users.forEach(user => {
      const id = user.dataset.id;
      fetching(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(userData => {
          user.textContent = userData.name;
        })
        .catch(error =>
          console.log('Something went wrong with getting user`s name')
        );
    });
  })
  .catch(error => console.log('Something went wrong with fetching data'));
