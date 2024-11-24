// Get the button
const backToTopButton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block"; // Show the button
  } else {
    backToTopButton.style.display = "none"; // Hide the button
  }
};

// When the user clicks the button, scroll to the top
backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scroll to the top
  });
};

// Function to show the information //
function showInfo() {
  document.querySelector('.info').style.display = 'block';
}

// Function to hide the information
function hideInfo() {
  document.querySelector('.info').style.display = 'none';
}

function signUp() {
  let firstNameData = document.getElementById('firstName').value
  let lastNameData = document.getElementById('lastName').value
  let emailData = document.getElementById('email').value
  let countryData = document.getElementById('country').value
  let passwordData = document.getElementById('password').value
  let cfPasswordData = document.getElementById('cfPassword').value

  if (firstNameData === '' || lastNameData === '' || emailData === '' || countryData === '' || passwordData === '') {
    alert('Please fill all of the gaps')
    return
  }

  let users = JSON.parse(localStorage.getItem('users')) || []


  for (let i = 0; i < users.length; i++) {
    if (passwordData !== cfPasswordData) {
      alert('Incorrect password')
      return
    }
    if (users[i].email === emailData || users[i].firstName === firstNameData || users[i].lastName === lastNameData) {
      alert('Account already exist')  
    }
  }

  alert('Sign Up Successfully')

  const data = {
    firstName: firstNameData,
    lastName: lastNameData,
    email: emailData,
    country: countryData,
    password: passwordData,
    cfPasword: cfPasswordData
  }

  users.push(data)
  localStorage.setItem('users', JSON.stringify(users))

}



function logIn() {
  event.preventDefault();
  let firstNameData = document.getElementById('firstName').value
  let lastNameData = document.getElementById('lastName').value
  let emailData = document.getElementById('email').value
  let countryData = document.getElementById('country').value
  let passwordData = document.getElementById('password').value
  let cfPasswordData = document.getElementById('cfPassword').value
  
  let users = JSON.parse(localStorage.getItem('users')) || []
  
  if (firstNameData === '' || lastNameData === '' || emailData === '' || countryData === '' || passwordData === '') {
    alert('Please fill all of the gaps')
    return
  }
  
  for (let i = 0; i < users.length; i++) {
    if (passwordData !== cfPasswordData) {
      alert('Incorrect Password')
      return
    }
    if (users[i].email === emailData && users[i].firstName === firstNameData && users[i].lastName === lastNameData && users[i].country === countryData && users[i].password === passwordData) {
      alert('Log in successfully')
      location.href ="./index.html"
      return
    }
  }
}