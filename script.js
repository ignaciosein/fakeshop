/////EJERCICIO 1.1///////
/* fetch('https://dog.ceo/api/breeds/list/all')
            .then(res=>res.json())
            .then(data=>console.log(data.message))  


  //////EJERCICIO 1.2//////////
 fetch('https://dog.ceo/api/breed/affenpinscher/images/random')
.then(res=>res.json())
.then(data=>console.log(data))     
 
          
//////EJERCICIO 1.3//////////

/* 
fetch('https://dog.ceo/api/breed/hound/images')
.then(res=>res.json())
.then(data=>console.log(data))             */


//////EJERCICIO 1.4//////////

 
/* function imagen(raza)
{

fetch(`https://dog.ceo/api/breed/${raza}/images`)
.then(res=>res.json())
.then(data=>console.log(data.message))       


}

imagen("beagle")
 */




//////EJERCICIO 2.1//////////

/* 
function github(usuario){
fetch(`https://api.github.com/users/${usuario}`)
.then(res=>res.json())
.then(data=>console.log(data))    


}

github("ignaciosein")



 */



//////EJERCICIO 2.2//////////
/*    document.getElementById("enviar").addEventListener("click", function(){


 let mostrar = document.getElementById("cajaTexto").value;

 
 function buscarUser(usuario){
    fetch(`https://api.github.com/users/${usuario}`)
    .then(res=>res.json())
   .then(data=>document.getElementById("resultado").innerHTML =("Nombre: "+data.name+ " ,Repositorios: "+data.public_repos+" ,Avatar : <img src="+data.avatar_url+" </img>")) 
  // .then(data=>console.log(data))   
     
    }
 

return buscarUser(mostrar);
 
})
 */

////3. Promesas, promesas y más promesas./////


/* 

function github(usuario){
    fetch(`https://api.github.com/users/${usuario}`)
    .then(res=>res.json())
    .then(data=>console.log(data))    
    
    
    }
    
    github("ignaciosein") */
    

//////////////////////////////
 

 



/* 
  function github(usuario){
  fetch(`https://api.github.com/users/${usuario}`)
  .then(res=>res.json())
  .then(data=>console.log(data.message))

   
   
 
 
  };

 
  
  let nombre = github(arrayVacio)
 
   */




 //Promise.all([]) */
 

 /* 
 let users = ["silvialcastilla","adriandez","juanmabarcia"]

 function github(usuario){
  users.map(usuario => { 
    
   // fetch(`https://api.github.com/users/${usuario}`)
  // .then(res=>res.json())
   // .then(data=>console.log(data.name))
 

    Promise.all([
    
      fetch(`https://api.github.com/users/${usuario}`)
      .then(res=>res.json())
      .then(data=>console.log(data.name))
    
    ]);






  })
  
  };
 
  
github(users);







 */

// 1- Hacer fetch de productos
//https://fakestoreapi.com/products
// 2- Generar en el DOM una lista UL/LI con el titulo de cada elemento
//Chequear estructura de la respuesta:
//http://jsonviewer.stack.hu/

/* 

function github(){
  fetch(`https://fakestoreapi.com/products`)
  .then(res=>res.json())
  .then(data=> pintarArray(data))
  
  }

  github()



  function pintarArray (arrayNew){
    console.log(arrayNew)

  let ulElement =  document.createElement("ul")
 
for (let index = 0; index < arrayNew.length; index++) {
 
  let liElement =  document.createElement("li")
//ulElement.innerHTML += `<li>${arrayNew[index].title}</li>`

ulElement.innerHTML = `<li>${arrayNew[index].title}</li>`

document.getElementById("resultadoRopa").appendChild(liElement)

}



document.getElementById("resultadoRopa").appendChild(ulElement)
 

  } */


/*   var node = document.createElement("LI");                 // Create a <li> node
  var textnode = document.createTextNode("Water");         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList" */







/// 1- Hacer fetch de productos
//https://fakestoreapi.com/products
// 2- Generar en el DOM una lista UL/LI con el titulo de cada elemento
//Chequear estructura de la respuesta:

 
  

/* function github(){
  fetch(`https://fakestoreapi.com/products`)
  .then(res=>res.json())
  .then(data=> pintarArray(data))
  
  }

  github()



  function pintarArray (arrayNew){


  let ulElement =  document.createElement("ul")
  document.getElementById("resultadoRopa").appendChild(ulElement) 
 
for (let index = 0; index < arrayNew.length; index++) {
 
  let liElement =  document.createElement("li")
   
//ulElement.innerHTML += `<li>${arrayNew[index].title}</li>`

//ulElement.appendChild(liElement);

ulElement.appendChild(liElement) 
let textnode = document.createTextNode(`${arrayNew[index].title}`); 
   
liElement.appendChild(textnode);   

}

 

  } */

////////////////////////CATEGORIAS////////////////////

   function listarCat(){
    fetch(`https://fakestoreapi.com/products/categories`)
    .then(res=>res.json())
    .then(data=> pintarCat(data))
    
    }
  
    listarCat()
  
  
  
    function pintarCat (arrayNew){
  
     
  
    let selectElement =  document.createElement("select")
  selectElement.setAttribute("id", "selector")

 
    let optionElement =  document.createElement("option").innerText = "Todas las categorias"
 
    document.getElementById("resultadoRopa").appendChild(selectElement) 
   
  for (let index = 0; index < arrayNew.length; index++) {
   
    let optionElement =  document.createElement("option")
     
  //ulElement.innerHTML += `<li>${arrayNew[index].title}</li>`
  
  //ulElement.appendChild(liElement);
  
  selectElement.appendChild(optionElement) 
  let textNode = document.createTextNode(`${arrayNew[index]}`); 
  
  //console.log(textNode)
 //let filtrar = textNode.map(elemento1 => textNode.length)  
   

  optionElement.appendChild(textNode);   


 
 

  }

  document.getElementById("selector").addEventListener("change", function(){

    const valueDelSelector = document.getElementById("selector").value 

    


   console.log(valueDelSelector)

    function obtenerProd(catProdCat){
      fetch(`https://fakestoreapi.com/products/category/${catProdCat}`)
      .then(res=>res.json())
      .then(data=> pintarProdTotal(data))
       
      }

   obtenerProd(valueDelSelector)
      

  })

  }  
  


  ////////////////////PRODUCTOS////////////////////////////////
 
  

  function obtenerCatProd(){
    fetch(`https://fakestoreapi.com/products/`)
    .then(res=>res.json())
    .then(data=> pintarProd(data))
    
    }
  
    obtenerCatProd()
  
  
  
    function pintarProd (arrayProd){
  
     
  
     
   
  for (let index = 0; index < arrayProd.length; index++) {
   
  document.getElementById("selector").addEventListener("change", function() {

   
    
   // document.getElementById("resultadoCategorias").innerHTML = `${arrayProd[index].category=="electronics"}`
 //console.log()
  //console.log(arrayProd[index].category="jewelery")


   }) 

  
 

  } 

  
  }
  
 
  function pintarProdTotal (productos){

 console.log(productos)

 let divPadre =  document.createElement("div")
 divPadre.setAttribute("id", "resultadoCategorias") 

/*      let tarjeta =  document.createElement("div")
    tarjeta.setAttribute("id", "jeejejjeje")  */  
     
    
  document.getElementById("resultadoCategorias").innerHTML = ""
for (let index = 0; index < productos.length; index++) {
 
 
  
 

  let resultadoTotal = document.getElementById("resultadoCategorias").innerHTML +=   
  `
  <div id="tarjeta" class="miniatura">
    <p><b>${productos[index].title}</p>
    <div><img src="${productos[index].image}"></div>
    ${productos[index].description}
  </div>
  `
  
  



  }

 
  
 


 



  }

