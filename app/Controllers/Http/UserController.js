'use strict';
const User = use('App/Models/User')

class UserController {

  async login ({ request, auth, view, response }) {
    const { email, password } = request.all()
    if(await auth.attempt(email, password)){
      return response.redirect('/', true)
    }
    else {
      const data = {messages: ['Invalid credentials']};
      session.withErrors(data.messages)
      return view.render('auth.login');
    }
  }

  async register ({request, auth, view}) {
    var datetime = new Date();
    let userData = request.only(['username', 'email', 'password'])
    userData['created_at'] = datetime.toString();
    userData['updated_at'] = datetime.toString();
    let user = await User.create(userData);

    return response.redirect('/', true)
  }

  show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else\'s profile'
    }
    return auth.user
  }

  async logout ({auth, view, response}) {
    await auth.logout();
    return response.redirect('/', true)
  }

  loginForm({request, response ,view}) {
    return view.render('auth.login')
  }

  registerForm({request, response ,view}) {
    return view.render('auth.register')
  }

}

module.exports = UserController;
