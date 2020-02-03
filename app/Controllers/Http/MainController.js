'use strict'
class MainController {
  landing({request, response ,view}) {
    return view.render('landing')
  }
}

module.exports = MainController
