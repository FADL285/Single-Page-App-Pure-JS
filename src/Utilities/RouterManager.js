export default class {
  static async router() {
    const routes = [
      { path: '/', view: () => console.log('Dashboard') },
      { path: '/posts', view: () => console.log('Posts') },
      { path: '/settings', view: () => console.log('Settings') },
      { view: () => console.log('404') } // 404 must be the last element in the array
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

    match.route.view();
  }

  static navigateTo(url) {
    if (!url) return;
    history.pushState(null, null, url);
    this.router();
  }
}
