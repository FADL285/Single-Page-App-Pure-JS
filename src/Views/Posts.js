import AbstractView from './AbstractView';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Dashboard');
  }

  async render() {
    return `
      <h1>Posts</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adip
        </p>
      <ul>
        <li>Post #1</li>
        <li>Post #2</li>
        <li>Post #3</li>
        <li>Post #4</li>
      </ul>
    `;
  }
}
