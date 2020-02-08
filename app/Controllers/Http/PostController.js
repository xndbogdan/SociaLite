'use strict';
const Post = use('App/Models/Post');

class PostController {
  async make ({request, auth, view, response}) {
    var datetime = new Date();
    let postData = request.only(['content'])
    postData['created_at'] = datetime.toString();
    postData['updated_at'] = datetime.toString();
    postData['user_id'] = auth.user.id;
    let post = await Post.create(postData);

    return response.redirect('/', true)
  }
}

module.exports = PostController
