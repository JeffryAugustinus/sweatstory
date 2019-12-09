module.exports = {
 
  register: function(req, res) {
    // if (req.cookies.token) return res.redirect('/');
    res.render('pages/loginsignup'); 
  },

  login: function(req, res) {
    // if (req.cookies.token) return res.redirect('/');
    res.render('pages/loginsignup'); 
  },

  logout: function(req, res) { 
    res.clearCookie('token');
    res.render('pages/loginsignup');
  }

}
