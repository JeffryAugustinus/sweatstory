module.exports = {
 
  register: function(req, res) {
    res.render('pages/loginsignup'); 
  },

  login: function(req, res) {
    res.render('pages/loginsignup'); 
  },

  logout: function(req, res) { 
    res.clearCookie('token');
    res.render('pages/loginsignup');
  }

}
