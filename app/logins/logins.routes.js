routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('logins', {
    url: '/',
    template: require('./logins.html'),
    resolve: {
      logins: ['FiveSportService', (FiveSportService) => {
        return FiveSportService.getLogins()
      }]
    }
  });
}
