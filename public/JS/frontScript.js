function deleteFunction(e){
    const id = e.getAttribute("data-id");
    const endpoint = `/delete/todo/${id}`;
    fetch(endpoint, {
        method:'DELETE'
    }).then(res => res.json()).then(data => {
        window.location.href = data.redirect;
    }).catch((err) => console.log(err));
}

var updateId;
function getUpdateId(e){
    updateId = e.getAttribute("data-id");
    document.getElementById('edit_field').value = e.getAttribute("data-todo");
}

async function editFunction(e){
    let data = new FormData(e);
    const endpoint = `/edit/todo/${updateId}`;
    await fetch(endpoint, {
        method:'PUT',
        body: new URLSearchParams(data)
    })
}
