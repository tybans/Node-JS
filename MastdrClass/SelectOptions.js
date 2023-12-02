let selectOptions = document.querySelector("select")
//console.log(selectOptions);
selectOptions.addEventListener('click', (event) =>{
    console.log(event.target.value, event.target.name);
})