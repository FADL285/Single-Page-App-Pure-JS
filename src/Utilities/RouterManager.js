import Dashboard from '../Views/Dashboard';
import Posts from '../Views/Posts';
import Settings from '../Views/Settings';
import NotFound from '../Views/NotFound';

export default class {
  static async router() {
    const routes = [
      { path: '/', view: Dashboard },
      { path: '/posts', view: Posts },
      { path: '/settings', view: Settings },
      { view: NotFound } // 404 must be the last element in the array
    ];

    // test each route for potential match
    const potentialMatches = routes.map((route) => ({
      route,
      isMatch: location.pathname === route.path
    }));

    let match = potentialMatches.find((route) => route.isMatch);

    if (!match) {
      match = {
        route: routes.at(-1),
        isMatch: true
      };
    }

    const view = new match.route.view();

    document.getElementById('app').innerHTML = await view.render();
  }

  static navigateTo(url) {
    if (!url) return;
    history.pushState(null, null, url);
    this.router();
  }
}
