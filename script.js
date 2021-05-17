////////////////CATEGORIAS//////////////////////////////

function listarCat() {
  fetch(`https://fakestoreapi.com/products/categories`)
    .then((res) => res.json())
    .then((data) => pintarCat(data));
}

function pintarCat(arrayNew) {
  let selectElement = document.createElement("select");
  selectElement.setAttribute("id", "selector");

  document.getElementById("resultadoRopa").appendChild(selectElement);

  for (let index = 0; index < arrayNew.length; index++) {
    let optionElement = document.createElement("option");

    selectElement.appendChild(optionElement);
    let textNode = document.createTextNode(`${arrayNew[index]}`);
    optionElement.appendChild(textNode);
  }

  ////////////SELECCIONAR CATEGORIA ///////////////////////////
  document.getElementById("selector").addEventListener("change", function () {


    document.getElementById("botonprecio").innerText = "Precio Ascendente"

    document.getElementById("resultadoCategorias").innerHTML = "";
    const catSeleccionada = document.getElementById("selector").value;

    /////categoria seleccionada
    console.log(catSeleccionada);
    obtenerProd(catSeleccionada);

    function obtenerProd(catProdCat) {
      fetch(`https://fakestoreapi.com/products/category/${catProdCat}`)
        .then((res) => res.json())
        .then((data) => pintarProdTotal(data));
    }
  });
}

////////////////////PRODUCTOS////////////////////////////////

function obtenerCatProd() {
  fetch(`https://fakestoreapi.com/products/`)
    .then((res) => res.json())
    .then((data) => pintarProd(data));
}

function pintarProd(arrayProd) {
  for (let index = 0; index < arrayProd.length; index++) {
    document
      .getElementById("selector")
      .addEventListener("change", function () {

        
      });
  }
}

function pintarProdTotal(productos) {
 

  let divPadre = document.createElement("div");
  divPadre.setAttribute("id", "resultadoCategorias");

  sacardato(productos);

  for (let index = 0; index < productos.length; index++) {
    var order = productos.sort(function (a, b) {
      return b.price - a.price;
    });

    document.getElementById("resultadoCategorias").innerHTML += `
  <div id="tarjeta" class="miniatura">
    <p><b>${order[index].title}</p>
    <div><img src="${order[index].image}"></div>
    <p id="price" >Precio : <div class="precio"> ${order[index].price}€</div></p>
   
    <p>Descripción :</p>
    <p class="descripcion">${order[index].description}</p>
  </div>
  `;
  }
}

obtenerCatProd();

listarCat();

function sacardato(peee) {

  
  
  document.getElementById("botonprecio").addEventListener("click", () => {
    document.getElementById("resultadoCategorias").innerHTML = "";
    let botonACambiar = document.getElementById("botonprecio");

    console.log(botonACambiar.innerText);

    if (botonACambiar.innerText === "Precio Ascendente") {
      document.getElementById("resultadoCategorias").innerHTML = "";

      botonACambiar.innerText = "Precio Descendente";

      for (let index = 0; index < peee.length; index++) {
        var order2 = peee.sort(function (b, a) {
          return b.price - a.price;
    
        });

        document.getElementById("resultadoCategorias").innerHTML += `
     <div id="tarjeta" class="miniatura">
     <p><b>${order2[index].title}</p>
     <div><img src="${order2[index].image}"></div>
     <p id="price" >Precio : <div class="precio"> ${order2[index].price}€</div></p>
     
     <p>Descripción :</p>
     <p class="descripcion">${order2[index].description}</p>
     </div>
     `;
      }
    } 
   
    else if (botonACambiar.innerText === "Precio Descendente") {
      document.getElementById("resultadoCategorias").innerHTML = "";

      botonACambiar.innerText = "Precio Ascendente";
      

      for (let index = 0; index < peee.length; index++) {
        var order2 = peee.sort(function (a, b) {
          return b.price - a.price;
        });

        if(order2[index].category !== document.getElementById("selector").value){

          alert("ha cambiado")
        }
        document.getElementById("resultadoCategorias").innerHTML += `
       <div id="tarjeta" class="miniatura">
       <p><b>${order2[index].title}</p>
       <div><img src="${order2[index].image}"></div>
       <p id="price" >Precio : <div class="precio"> ${order2[index].price}€</div></p>
       
       <p>Descripción :</p>
       <p class="descripcion">${order2[index].description}</p>
       </div>
       `;
       
        
      }
    
     
    } 
    

    
      


   
    
   
    
  });
}
