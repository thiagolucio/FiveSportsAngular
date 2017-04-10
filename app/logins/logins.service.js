export default class FiveSportService {
  constructor($http) {
    this.$http = $http
  }
  getLogins() {
    return this.$http.get('https://rawgit.com/thiagolucio/FiveSports/master/users.json')
  }

}
