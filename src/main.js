import '/css/style.css';
import RouterManager from './Utilities/RouterManager';

class App {
  static init() {
    RouterManager.router();
    this.linkClicksHandler();
    this.changeStateHandler();
  }

  static linkClicksHandler() {
    document.body.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        RouterManager.navigateTo(e.target.href);
      }
    });
  }

  static changeStateHandler() {
    window.addEventListener('popstate', () => {
      RouterManager.router();
    });
  }
}

App.init();
