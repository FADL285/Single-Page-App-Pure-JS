// ! Views
// ================= \\
import Dashboard from '../Views/Dashboard';
import Posts from '../Views/Posts';
import Post from '../Views/Post';
import Settings from '../Views/Settings';
import NotFound from '../Views/NotFound';

// ! Routes
// ================= \\
export default () => [
  { path: '/', view: Dashboard },
  { path: '/posts', view: Posts },
  { path: '/posts/:slug', view: Post},
  { path: '/settings', view: Settings },
  { view: NotFound } //! 404 must be the last element in the array
];
