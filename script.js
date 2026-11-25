
let apikey = '811f06201cad2f9b332d675f9a86de33'
let url = 'https://api.openweathermap.org/data/2.5/weather'
let difKelvin = '273.15'

document.getElementById('botonBusqueda').addEventListener('click',()=>{
    const ciudad=document.getElementById('ciudadEntrada').value

    if (ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){

fetch (`${url}?q=${ciudad}&appid=${apikey}&lang=es`)

    .then(data=>data.json())
    .then(data=>mostrarDatosClima(data))

}

function mostrarDatosClima(data){

    
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''
    const cuidadNombre=data.name
    const paisNombre=data.sys.country
    const temperatura=data.main.temp
    const descripcion=data.weather[0].description
    const humedad=data.main.humidity
    const icono = data.weather[0].icon

    const ciudadTitulo=document.createElement('h2')
    ciudadTitulo.textContent=`${cuidadNombre}, ${paisNombre}`
    const temperaturaInfo = document.createElement('p')
    const iconinfo=document.createElement('img')
    iconinfo.src=`https://openweathermap.org/img/wn/${icono}@4x.png`
    temperaturaInfo.textContent=`La Temperatura es: ${Math.floor(temperatura-difKelvin)} ºC`
    const descripcionInfo=document.createElement('p')
    descripcionInfo.textContent=`La descripción meteorológica es: ${descripcion}`
    const humedadInfo=document.createElement('p')
    humedadInfo.textContent=`La Humedad es: ${humedad} %`
    
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconinfo)
}

