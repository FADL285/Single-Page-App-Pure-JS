import AbstractView from './AbstractView';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Dashboard');
  }

  async render() {
    return `
      <h1>Settings</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adip
        </p>
      <p>
        Go to 404 Page <a href="/fadl" data-link>click me</a>
      </p>
    `;
  }
}
