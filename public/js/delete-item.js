async function deleteItemHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')
    [window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/item/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }

}

document.querySelector('#deleteButton').addEventListener('click', deleteItemHandler);


