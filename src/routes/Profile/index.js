import { injectReducer } from '../../store/reducers'

export default (store) => ({
  // path: '/thong-tin',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ProfileView = require('./containers/ProfileContainer').default
      const reducer = require('./modules/reducer').default

      /*  Add the reducer to the store on key 'posts'  */
      injectReducer(store, { key: 'profile', reducer })


      /*  Return getComponent   */
      cb(null, ProfileView)

    /* Webpack named bundle   */
    }, 'profile')
  }
})
