const listaValores = document.getElementById('listaValores')
const inputPesoChileno = document.getElementById('inputPesoChileno')
const botonCambio = document.getElementById('boton')
const selectMonedas = document.getElementById('listaMonedas')
const resultado = document.getElementById('resultado')

const getConversor = async () => {
    try {
        const response = await fetch("https://mindicador.cl/api")
        const arrayApi = await response.json();
        const valorDolar = arrayApi.dolar.valor
        const valorEuro = arrayApi.euro.valor

        botonCambio.addEventListener('click', () => {
            let monedaSeleccionada = selectMonedas.value
            let valorIngresado = parseFloat(inputPesoChileno.value)

            console.log(valorIngresado)

            if(valorIngresado <= 0 || valorIngresado === '' || valorIngresado === null){
                resultado.innerHTML = "Favor ingrese un valor mayor a Cero"

            }else if(monedaSeleccionada == 1){
                let conversionDolar = (valorIngresado / valorDolar).toFixed(2)
                resultado.innerHTML = `$${valorIngresado} CLP es igual a $${conversionDolar} USD`
            }else if(monedaSeleccionada == 2){
                let conversionEuro = (valorIngresado / valorEuro).toFixed(2)
                resultado.innerHTML = `$${valorIngresado} CLP es igual a $${conversionEuro} EUR`
            }
        })
        
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Esto es finally, siempre se ejecutará")
    }

    }
;

getConversor()