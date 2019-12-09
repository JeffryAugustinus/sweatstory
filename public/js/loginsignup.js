//OVERLAY BUTTON
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//MAIN LOGIN BUTTON
$("#loginButton").click(function() {
    let data = {
      email: $("#loginEmail").val(),
      password: $("#loginPassword").val()
    }
  
    fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(data) 
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        if (response.success) {
          document.cookie = `token=${response.data};`;
          localStorage.setItem('token', response.data)
          return window.location.replace('/');
        }
  
        alert(response.errors);
      })
      .catch(err => {
        console.log(err);
      })
})

//MAIN SIGNUP BUTTON
$("#signupButton").click(function() {
    let data = {
      email: $("#email").val(),
      password: $("#password").val().toString()
    }
  
    fetch('/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data) 
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        if (response.success) {
          return window.location.replace('/');
        }
  
        alert(response.errors);
      })
      .catch(err => {
        console.log(err);
      })
})
  