// Capturar datos
const buttonGo = document.getElementById('go');
const inputName = document.getElementById('nombre')
const results = document.getElementById('results');
const google = 'https://www.google.com/?hl=es';
// results.innerHTML = '';

buttonGo.addEventListener('click', ()=> {
    let name = inputName.value;
    results.innerHTML = '';
    let url = '';
    if (name === ''){
        alert('Please enter a name.');
    }else{
        
        url = 'https://api.nationalize.io?name=' + name;
        // console.log(url);

        fetch(url, {
        })
        .then(response => response.json())
        .then(data => {
	// debugger
    //console.log(data);
    //console.log(typeof(data.country));
    console.log(data);
    console.log(typeof(data.country.length));
    if (data.country === 0){
        console.log("No se encontraron resultados.");
    }else{
        for (const country of data.country) {
            // console.log(country.country_id);
            let itemList = document.createElement('li');
            itemList.textContent = country.country_id ;
            results.appendChild(itemList);
    
            
        }   
    }
        })
    }
    inputName.value = '';
})

// function building_url(){
//     let url = ''
//     let name = capturar_nombre();
//     if (name != ''){
//         url = 'https://api.nationalize.io?name=' + name
//         console.log(url)
//     }
//     else{
//         alert("POR FAVOR INGRESE UN NOMBRE EN EL CAMPO");
//         console.log(url)
//     }
    
//     return url
// }
// let url = building_url()
