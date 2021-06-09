const remove = async () => {
    const response = await fetch('api/delete', {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'},
    })

    if(response.ok) { //warning before deleting item
        alert("Are you sure you want to delete?");
    } else {
        alert(response.statusText)
    }
var el = document.getElementById('deleteButton');
if(el){
  el.addEventListener('click', remove);
} else {
  console.log(el);
}
};


// document.querySelector('.deleteBtn').addEventListener('click', remove)