// Capturar datos
const buttonGo = document.getElementById('go');
const inputName = document.getElementById('nombre')
const results = document.getElementById('results');
const firtsCountry = document.getElementById('firts_country');
const secondCountry = document.getElementById('second_country');
const thridCountry = document.getElementById('thrid_country');
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
    console.log(data);
    //console.log(data.country[0].country_id);
    // console.log(data.country.length);
    // console.log(data);
    // console.log(typeof(data.country.length));
    if (data.country.length === 0){
        console.log("No se encontraron resultados.");
        let p = document.createElement("p");
        p.textContent = "No se encontraron resultados.";
        results.appendChild(p);
    }else{
        //for (const country of data.country) {
            // console.log(country.country_id);
            //let itemList = document.getElementById('firts_country');
        //console.log(firtsCountry.getAttribute('href'));
        firtsCountry.textContent = data.country[0].country_id ;
        let firtsLink = firtsCountry.getAttribute('href'); 
        firtsLink += `${firtsCountry.textContent}+pais`;
        firtsCountry.setAttribute('href', firtsLink);
        results.appendChild(firtsCountry);


        secondCountry.textContent = data.country[1].country_id;
        let secondLink = secondCountry.getAttribute('href') ;
        secondLink += `${secondCountry.textContent}+pais`;
        secondCountry.setAttribute('href', secondLink);
        results.appendChild(secondCountry);

        thridCountry.textContent = data.country[2].country_id;
        let thirdLink = thridCountry.getAttribute('href') ;
        thirdLink += `${thridCountry.textContent}+pais`;
        thridCountry.setAttribute('href', thirdLink);
        results.appendChild(thridCountry);
        //}   
    }
        })
    }
    firtsCountry.setAttribute('href', 'https://www.google.com/search?q=');
    secondCountry.setAttribute('href', 'https://www.google.com/search?q=');
    thridCountry.setAttribute('href', 'https://www.google.com/search?q=');
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
