import AbstractView from './AbstractView';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Dashboard');
  }

  async render() {
    return `
      <h2>404</h2>
      <h1>Page Not Found</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adip
        </p>
      <p>
        Go to <a href="/" data-link>Home</a>
      </p>
    `;
  }
}
