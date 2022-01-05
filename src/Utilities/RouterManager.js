import routesList from './routes';

export default class {
  static async router() {
    const routes = routesList();

    // test each route for potential match
    const potentialMatches = routes.map((route) => ({
      route,
      result: route.path
        ? location.pathname.match(this.pathToRegex(route.path))
        : null
    }));

    let match = potentialMatches.find((route) => route.result !== null);

    if (!match) {
      match = {
        route: routes.at(-1),
        result: [location.pathname]
      };
    }

    const view = new match.route.view(this.getParams(match));

    document.getElementById('app').innerHTML = await view.render();
  }

  static pathToRegex(path) {
    return new RegExp(
      '^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$'
    );
  }

  static getParams(match) {
    if (!match.route.path) return;

    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
      (result) => result[1]
    );

    return Object.fromEntries(keys.map((key, idx) => [key, values[idx]]));
  }

  static async navigateTo(url) {
    if (!url) return;
    history.pushState(null, null, url);
    await this.router();
  }
}
