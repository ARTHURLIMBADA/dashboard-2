// LOGIN COMPONENT

'use strict';


Vue.component('login', {
  template: `
              <form class="login-form middle">
                <h1>Login</h1>
                  <div class="sign-container"><input v-on:click="focus" type="text" id="username" placeholder="Username"><div/>
                  <div class="sign-container"><input v-on:click="scream" type="password" id="password" placeholder="Password"><div/>
                  <div class="sign-container"><input v-on:click="checkpass" type="submit" value="LOGIN" class="btn success"><div/>
                  <div class="sign-container"><a href="#" class="forgot-link">Forgot Password?</a><div/>
                
              </form>
            `,
  methods: {
    checkpass: function() {
      event.preventDefault();

      var pass = document.getElementById('password').value; 
      var user = document.getElementById('username').value; 

      if(user === 'andrew' && pass === '123456') {
        alert('Username and password correct!');

        window.location = "./dashboard.html";
        
      } else {
        alert('Sign In Unavailable');
      }
    },
    
    focus: function() {
      var input = document.getElementById('username');
      
      input.style.borderColor = "red";
      
    },
    scream: function() {
        alert("Your username or password is incorrect");
      
    }
  }
});



var login = new Vue({
  el: '#login'
});
