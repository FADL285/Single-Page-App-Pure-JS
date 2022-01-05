import AbstractView from './AbstractView';
import HttpRequest from '../Utilities/HttpRequest';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle(`${this.params.slug}`);
  }

  async render() {
    const posts = await HttpRequest.get();
    const currentPost = posts.find((post) => post.slug === this.params.slug);
    this.setTitle(`${currentPost.title}`);

    return `
      <h1>${currentPost.title}</h1>
      <p>${currentPost.body}</p>
      <hr>
      <p>
        View All <a href="/posts" data-link>Posts</a>
      </p>
    `;
  }
}
