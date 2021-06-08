async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="item-name"]').value;
    const material = document.querySelector('input[name="material"]').value;
    const color = document.querySelector('input[name="color"]').value;
    const price = document.querySelector('input[name="price"]').value;


    const response = await fetch(`/api/items`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            material,
            color,
            price
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        alert('Success! your item was added.');
        document.location.replace('/add-item');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#new-item-form').addEventListener('submit', newFormHandler);

