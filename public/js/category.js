async function selectCategoryHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (name && password) {
        const response = await fetch('/api/items', {
            method: 'POST',
            body: JSON.stringify({
               category_id
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');

            document.location.replace('/category/:id');

        } else {
            alert('Failed!');
        }
    }
}

document.querySelector('img').addEventListener('click', selectCategoryHandler);
