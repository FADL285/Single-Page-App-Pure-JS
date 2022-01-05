import AbstractView from './AbstractView';
import HttpRequest from '../Utilities/HttpRequest';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');
  }

  async render() {
    const posts = await HttpRequest.get();

    let postsList = '';
    posts.forEach((post) => {
      postsList += `<li class="card">
        <div class="card-body">
          <h3>
            <a href="/posts/${post.slug}" data-link class="card-title">${post.title}</a>
          </h3>
          <p><a href="/posts/${post.slug}" data-link class="card-text">${post.description}</a></p>
        </div>
      </li>`;
    });

    const htmlContent = `
      <h1>Posts</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adip
      </p>
      <ul>${postsList}</ul>
    `;

    return htmlContent;
  }
}
