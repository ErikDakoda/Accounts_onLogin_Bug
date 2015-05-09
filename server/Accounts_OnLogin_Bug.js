Meteor.startup(function () {


  // Expected: all three console.log statements should be called when user logs in
  // Found: only the first console.log is called

  // onLoginHook in accounts-base does have all three callbacks
  // but each only executes the first one


  Accounts.onLogin(function () {
    console.log('Accounts.onLogin 1');
  });


  Accounts.onLogin(function () {
    console.log('Accounts.onLogin 2');
  });


  Accounts.onLogin(function () {
    console.log('Accounts.onLogin 3');
  });


});
