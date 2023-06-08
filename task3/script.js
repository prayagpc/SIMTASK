
var userData = [
    { username: "admin", password: "password" },
    { username: "prayag", password: "prayagpc" },
    { username: "sclaeitmore", password: "task3" },
  ];
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
     
      var user = userData.find(function(user) {
          return user.username === username && user.password === password;
      });
  
      if (user) {
          alert('Login successful!');
      } else {
          alert('Invalid username or password. Please try again.');
      }
  });
  