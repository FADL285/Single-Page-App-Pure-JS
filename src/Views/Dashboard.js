import AbstractView from './AbstractView';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Dashboard');
  }

  async render() {
    return `
      <h1>Welcome Fadl, How are you today?</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adip
        </p>
      <p>
        View recent <a href="/posts" data-link>Posts</a>
      </p>
    `;
  }
}
