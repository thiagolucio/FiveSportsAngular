import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './logins.routes.js'
import loginList from './login-list/login-list.component'
import FiveSportService from './logins.service'

export default angular.module('fiveSportsApp.logins', [uirouter])
  .config(routes)
  .component('loginList', loginList)
  .service('FiveSportService', FiveSportService)
  .name
