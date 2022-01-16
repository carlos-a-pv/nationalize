// Capturar datos
function capturar_nombre(){
    let name = document.getElementById('nombre').value;
    return name
}
const pais = document.querySelector('#pais')

function render_paises(nombre) {
    pais.innerHTML = nombre
}

fetch('https://api.nationalize.io/?name=carlos')
.then(response => response.json())
.then(data => {
    debugger
    render_paises(data.name)
})

