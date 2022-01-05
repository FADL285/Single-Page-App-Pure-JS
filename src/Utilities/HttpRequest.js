export default class {
  static async get() {
    const response = await fetch('/data/posts.json');
    const posts = await response.json();

    return posts;
  }
}
