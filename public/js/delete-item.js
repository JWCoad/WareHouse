async function deleteItemHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/item/${id}`, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }

}

document.querySelector('#deleteButton').addEventListener('submit', deleteItemHandler);
