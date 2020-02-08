'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'MainController.landing').as('landing');

Route.get('users/:id', 'UserController.show').middleware('auth');

Route.post('login', 'UserController.login').as('login.attempt');

Route.get('login', 'UserController.loginForm').as('login');

Route.get('register', 'UserController.registerForm').as('register');

Route.post('register', 'UserController.register').as('register.attempt');

Route.get('logout', 'UserController.logout').as('logout');

Route.post('post', 'PostController.make').as('post.make');
