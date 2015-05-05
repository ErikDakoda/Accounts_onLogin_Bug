# Accounts_onLogin_Bug
Reproduction of bug in meteor accounts-base Accounts.onLogin()

This is the todos sample application with the addition of a single file: client/Accounts_OnLogin_Bug.js
This file has three separate calls to Accounts.onLogin.
The onLogin callbacks should log to the console:
-Accounts.onLogin 1
-Accounts.onLogin 2
-Accounts.onLogin 3

Steps to reproduce:

Click Join and create a new account
Sign out and back in

Expected: all three console.log statements should be called when user logs in
Found: only the first console.log (therefore only the first callback) is called

onLoginHook in accounts-base does have all three callbacks
but "onLoginHooks.each" only executes the first one
