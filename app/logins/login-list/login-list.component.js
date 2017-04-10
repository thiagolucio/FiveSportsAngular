function loginListCtrl() {
  console.log(this);
}

module.exports = {
  template: require('./login-list.html'),
  controller: loginListCtrl,
  bindings: {
    logins: '='
  }
}
