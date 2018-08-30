
exports = module.exports = function(app) {

  //Load react js bundle
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

  //api post routes
  app.post('/account/login', require('./src/api/userVerification/login').login)
  app.post('/account/signup', require('./src/api/userVerification/signup').signup)
  app.post('/account/signup/emailCheck', require('./src/api/userVerification/emailcheck').checkEmail)
  
  //api get routes
  app.get('/account/profile/:token', require('./src/api/userVerification/profile').getProfile)

}