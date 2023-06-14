const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String
});

const LoginModel = mongoose.model('Home', LoginSchema);

class Login {
  constructor(body){
    this.body = body;
  }
}

module.exports = Login;
