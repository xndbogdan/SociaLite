'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Like extends Model {
  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method post
   *
   * @return {Object}
   */
  post () {
    return this.belongsTo('App/Models/Post','post_id');
  }
  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method post
   *
   * @return {Object}
   */
  user () {
    return this.belongsTo('App/Models/User','user_id');
  }
}

module.exports = Like
