import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './app.routes'
import logins from './logins'

angular.module('fiveSportsApp', [uirouter, logins])
  .config(routes)
