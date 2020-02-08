'use strict';
const Post = use('App/Models/Post');

class MainController {
  async landing({request, response ,view, auth}) {
    if(!auth.user){
      return view.render('landing')
    } else {
      const posts = await Post.query().with('user').fetch();
      return view.render('landingLogged', {posts: posts.toJSON()})
    }

  }
}

module.exports = MainController
