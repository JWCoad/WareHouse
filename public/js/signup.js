async function signupFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (name && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                name,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            Swal.fire({
                title: "New user created!",
                icon: "success",
                confirmButtonText: "Ok",
                confirmButtonColor: "#1bbc9b",
            });

        } else {
            Swal.fire({
                title: "Failed to signup!",
                icon: "error",
                text: "Your password needs to be 8 characters or more",
                confirmButtonText: "Ok",
                confirmButtonColor: "#f6645b",
            });
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', signupFormHandler);
