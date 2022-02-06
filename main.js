// Capturar datos
const buttonGo = document.getElementById('go')

function capturar_nombre(){
    let name = document.getElementById('nombre').value;
    console.log(name)    
    return name
}
function building_url(){
    let url = ''
    let name = capturar_nombre();
    if (name != ''){
        url = 'https://api.nationalize.io?name=' + name
        console.log(url)
    }
    else{
        alert("POR FAVOR INGRESE UN NOMBRE EN EL CAMPO");
        console.log(url)
    }
    
    return url
}
let url = building_url()

fetch(url, {

})
.then(response => response.text())
.then(data => {
    debugger
    console.log(data)
})
    





// function building_url(name) {
//     console.log(name)
// }

buttonGo.addEventListener('click', capturar_nombre)



