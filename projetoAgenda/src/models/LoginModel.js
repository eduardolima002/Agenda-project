const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Home', LoginSchema);

class Login {
  constructor(body){
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  register(){
    this.valida();
    if(this.errors.length > 0) return;
  }

  valida(){
    cleanUp();

    if(!validator.isEmail(this.body.email)) this.errors.push('e-mail inválido');

    if(this.body.password.length < 3 && this.body.password.length > 50) this.errors.push('A senha deve conter entre 3 a 50 caracteres');
  }

  cleanUp(){
    for(let key in this.body){
      if(typeof(this.body[key] !== 'string')){
        this.body[key] = '';
      }
    }

    this.body = {
      email: this.body.email,
      senha: this.body.password
    }

  }
}

module.exports = Login;
