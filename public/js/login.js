const loginFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (name && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      Swal.fire({
        title: "Failed to login!",
        icon: "error",
        text: "Your password or username is incorrect",
        confirmButtonText: "Ok",
        confirmButtonColor: "#f6645b",
      });
    }

  }

};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
