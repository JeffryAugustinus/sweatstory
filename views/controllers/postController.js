const fetch = require("axios");
process.env.BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:8000'

module.exports = {
  index: function(req, res) {
    fetch(`${process.env.BASE_URL}/api/v1/posts`, {
      method: 'GET',
      headers: {
        'Accept':'application/json'
      }
    })
      .then(response => {
        res.render('pages/index', {
          user: req.headers.authorization,
          showButton: false,
          posts: response.data.data,
        })
      })
  },
  show: function(req, res) {
    fetch(`${process.env.BASE_URL}/api/v1/posts/${req.params._id}`, {
      method: 'GET',
      headers: {
        'Accept':'application/json'
      }
    })
      .then(response => {
        res.render('pages/index', {
          user: req.headers.authorization,
          showButton: true,
          posts: [response.data.data]
        })
      }) 
  },

  destroy: function(req, res) {
    fetch(`${process.env.BASE_URL}/api/v1/posts/${req.params._id}`, {
      method: 'DELETE',
      headers: {
        'Accept':'application/json',
        'Authorization': req.cookies.token
      }
    })
      .then(response => {
        res.redirect('/')
      })  
  },

  create: function(req, res) {
    res.render('pages/create', {
      user: req.headers.authorization
    })
  },
  edit: function(req, res) {
    fetch(`${process.env.BASE_URL}/api/v1/posts/${req.params._id}`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Authorization': req.cookies.token
      }
    })
      .then(response => {
        res.render('pages/index/', {
          user: req.headers.authorization,
          showButton: true,
          posts: response.data.data,
        })
      })
  },

}
