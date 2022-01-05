import AbstractView from './AbstractView';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle(`Post #${this.params.id}`);
  }

  async render() {
    return `
      <h1>View Post #${this.params.id}</h1>
      <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo sed, incidunt suscipit distinctio consequuntur necessitatibus ut debitis maiores vitae modi dolor voluptatibus inventore laudantium molestiae libero, itaque quaerat culpa harum eum asperiores dolorum obcaecati. Accusantium voluptatibus, inventore officia maiores exercitationem beatae eligendi pariatur quia autem nemo voluptates perferendis reiciendis nulla, mollitia expedita repudiandae earum velit non ut et veritatis incidunt iste sed. Sunt aspernatur quibusdam amet eius vel doloremque natus, ratione delectus dolor? Provident corrupti, sequi ullam iste qui modi quibusdam aut sint quisquam id aperiam odio tempore labore nam, deserunt quis, dignissimos atque? Similique a earum modi nihil corporis!
        </p>
      <p>
        View recent <a href="/posts" data-link>Posts</a>
      </p>
    `;
  }
}
