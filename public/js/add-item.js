const newItemHandler = async (event) => {
    event.preventDefault();
  
    const item_name = document.querySelector('input[name="item-name]').value;
    const item_category = document.querySelector('input[name="item-category"]').value;
    const item_color = document.querySelector('input[name="item-color"]').value;
    const item_material = document.querySelector('input[name="item-material"]').value;
    const item_price = document.querySelector('input[name="item-price"]').value;

    if (item_name && item_category && item_color && item_material && item_price) {
      const response = await fetch(`/api/items`, {
        method: 'POST',
        body: JSON.stringify({item_name, item_category, item_color, item_material, item_price}),
        headers: {
          'Content-Type': 'application/json',
        }
      });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create item');
      }
    }
  };

   
  
  document.querySelector('.new-post-form').addEventListener('submit', newItemHandler);
