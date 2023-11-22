// manejamos formulario
function agregarProblemas() {
    // con esto obtenemos los valores introducidos en el form
    let numero = document.getElementById('numero').value;
    let problema = document.getElementById('problema').value;
  
    // guardamos los problemas en un array
    let problemaspc = [problema];
  
    // mostramos los resultados
    mostrarResultados(numero, problema);
  
    // limpiamos los inputs cada vez que presionamos el boton
    document.getElementById('numero').value = '';
    document.getElementById('problema').value = '';
  }
  
  //con esto mostramos los resultados en una lista
  function mostrarResultados(numero, problema) {
    // obtenemos el elemento de la lista
    let listaResultados = document.getElementById('resultados');
  
    // creamos una lista
    let nuevoElemento = document.createElement('li');
  
    // establecemos el contenido del elemento
    nuevoElemento.textContent = `Numero de Computadora: ${numero}, Problema: ${problema}`;
  
    // agregamos el elemento a la lista
    listaResultados.appendChild(nuevoElemento);
  }
  
  
  