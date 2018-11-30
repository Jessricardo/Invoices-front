// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Login/reducer'),
          import('containers/Login/sagas'),
          import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      onEnter: (nextState, replace) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) replace('/home');
      },
    }, {
      path: '/registrar',
      name: 'signup',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Signup/reducer'),
          import('containers/Signup/sagas'),
          import('containers/Signup'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('signup', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      onEnter: (nextState, replace) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) replace('/home');
      },
    }, {
      path: '/home',
      name: 'mainLayout',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/MainLayout/reducer'),
          import('containers/MainLayout/sagas'),
          import('containers/MainLayout'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('mainLayout', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      onEnter: (nextState, replace) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) replace('/');
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
