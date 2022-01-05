import AbstractView from './AbstractView';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Dashboard');
  }

  async render() {
    return `
      <h1>Posts</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adip
        </p>
      <ul>
        <li>
          <a href="/posts/1" data-link>Post #1</a>
        </li>
        <li>
          <a href="/posts/2" data-link>Post #2</a>
        </li>
        <li>
          <a href="/posts/3" data-link>Post #3</a>
        </li>
        <li>
          <a href="/posts/4" data-link>Post #4</a>
        </li>
      </ul>
    `;
  }
}
