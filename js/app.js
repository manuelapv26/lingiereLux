const btnAddToCart = document.querySelector('.btnAdd');
const emptyCart = document.getElementById('empty-cart')
const container = document.getElementById('container-cards');
const card = document.querySelectorAll('.card');
const bar = document.getElementById('search-bar');
const btnCreate = document.getElementById('btn-create');
const modifyModal = document.getElementById('btn-modify');
const btnFilterAsc = document.getElementById('btn-filter-asc');
const btnFilterDesc = document.getElementById('btn-filter-desc');
const btnModify = document.getElementById('btn-modify')
const btnUpdate = document.getElementById('update-product');
let imgSelected = " ";
let skuProduct = 0;

const modalModify = document.querySelector('.modal-modify')
const btnCloseModal2 = document.getElementById('close-modal2')

const modal = document.querySelector('.modal');
const btnCloseModal = document.getElementById('close-modal');
const newSku = document.getElementById('new-sku')
const newProduct = document.getElementById('new-product');
const newPrice = document.getElementById('new-price');
const newDescrip = document.getElementById('new-description');
const newCategory = document.getElementById('new-category');
const newStock = document.getElementById('new-stock');
const newImage = document.getElementById('new-image');
const btnNewProduct = document.getElementById('btn-new-create');


let products = [
    {sku: "1", image:'./images/lenceria1.PNG', category: 'Colección Atenea',price: 180, name: 'Body Negro',description:'Body negro en encaje con diseño de flores cosidas a mano', stock: 8},
    {sku: "2",image:'./images/lenceria2.png',category: 'Colección Mérida',price: 150,name: 'Conjunto Vino Tinto',description: 'Conjunto vino tinto en encaje de dos piezas',stock:5},
    {sku: "3", image:'./images/lenceria30.png',category: 'Colección Mulán',price: 290,name: 'Conjunto lingirieLux',description: 'Conjunto negro con gangartilla en encaje de dos piezas',stock:3},
    {sku: "4", image:'./images/lenceria3.png',category: 'Colección Esmeralda',price: 152,name: 'Conjunto Negro Corazones',description: 'Conjunto negro con corazones en encaje de dos piezas',stock:9},
    {sku: "5", image:'./images/lenceria4.png',category: 'Colección Afrodita',price: 175,name: 'Conjunto Blanco Con Ligueros',description: 'Conjunto blanco con ligueros en encaje de dos piezas',stock:7},
    {sku: "6", image:'./images/lenceria5.PNG',category: 'Colección Esmeralda',price: 155,name: 'Conjunto Azul Con Ligueros',description: 'Conjunto blanco con ligueros en encaje de dos piezas',stock:8},
    {sku: "7", image:'./images/lenceria6.PNG',category: 'Colección Mérida',price: 180,name: 'Conjunto Negro Con Ligueros',description: 'Conjunto negro con ligueros en encaje de dos piezas',stock: 5},
    {sku: "8", image:'./images/lenceria7.png',category: 'Colección Afrodita',price: 187,name: 'Conjunto Negro',description: 'Conjunto negro con dieseños dorados en encaje de dos piezas',stock:12 },
    {sku: "9", image:'./images/lenceria8.png',category: 'Colección Esmeralda', price: 155,name: 'Conjunto Rojo',description: 'Conjunto rojo en encaje de dos piezas',stock:7 },
    {sku: "10", image:'./images/lenceria9.png',category: 'Colección Atenea',price: 160,name: 'Conjunto Rojo Con Ligueros',description: 'Conjunto rojo con ligueros y diseños florales en encaje de dos piezas',stock:9},
    {sku:"11",image:'./images/lenceria10.png',category: 'Colección Mulán',price: 150,name: 'Conjunto Azul Con Ligueros',description: 'Conjunto azul con ligueros en encaje de dos piezas',stock:5},
    {sku:"12",image:'./images/lenceria11.png',eacategory: 'Colección Esmeralda',price: 175,name: 'Conjunto Negro Con Ligueros',description: 'Conjunto negro con ligueros en encaje transparente de dos piezas',stock:9},
    {sku:"13",image:'./images/lenceria12.png',category: 'Colección Mulán',price: 165,name: 'Body Negro',description: 'Conjunto negro con diseños en azul y rojo en encaje',stock:8},
    {sku:"14",image:'./images/lenceria13.png',category: 'Colección Atenea',price: 110,name: 'Conjunto Verde',description: 'Conjunto verde en encaje con listones verdes',stock:11},
    {sku:"15",image:'./images/lenceria14.png',category: 'Colección Mérida',price: 100,name: 'Conjunto Rojo',description: 'Conjunto rojo en encaje con listones rojos',stock: 10},
    {sku:"16",image:'./images/lenceria15.png',category: 'Colección Afrodita',price: 110,name: 'Conjunto Blanco',description: 'Conjunto blanco con ligueros en encaje de dos piezas',stock:13},
    {sku:"17",image:'./images/lenceria16.png',category: 'Colección Afrodita',price: 285,name: 'Conjunto D´Lux',description: 'Conjunto blanco,negro,azul en encaje de dos piezas',stock:3},
    {sku:"18",image:'./images/lenceria17.png',category: 'Colección Esmeralda',price: 178,name: 'Conjunto M´Lux',description: 'Conjunto de interiores en encaje x7',stock:4},
    {sku:"19",image:'./images/lenceria18.png',category: 'Colección Atenea',price: 168,name: 'Conjunto Negro',description: 'Conjunto negro abierto en la copa de dos piezas',stock:14},
    {sku:"20",image:'./images/lenceria19.png',category: 'Colección Mulán',price: 180,name: 'Conjunto Negro',description: 'Conjunto negro de dos piezas',stock:7},
    {sku:"21",image:'./images/lenceria20.png',category: 'Colección Mérida',price: 170,name: 'Conjunto Rojo Con Gargantilla',description: 'Conjunto rojo con gargantilla en encaje de dos piezas',stock:9},
    {sku:"22",image:'./images/lenceria21.png',category: 'Colección Afrodita',price: 190,name: 'Conjunto Negro Con Ligueros',description: 'Conjunto negro con ligueros y diseños cosidos a mano en encaje de dos piezas',stock:7},
    {sku:"23",image:'./images/lenceria22.png',category: 'Colección Atenea',price: 175,name: 'Conjunto Azul Claro Con Ligueros',description: 'Conjunto azul claro con ligueros en encaje de dos piezas',stock:5},
    {sku:"24",image:'./images/lenceria23.png',category: 'Colección Esmeralda',price: 255,name: 'Conjunto L´Lux',description: 'Conjunto rosado,negro,rojo en encaje de dos piezas',stock:10},
    {sku:"25",image:'./images/lenceria24.png',category: 'Colección Mérida',price: 255,name: 'Conjunto Amarillo',description: 'Conjunto amarillo en encaje de dos piezas',stock:9},
    {sku:"26",image:'./images/lenceria25.png',category: 'Colección Atenea',price: 200,name: 'Conjunto Negro',description: 'Conjunto negro con corset en encaje de dos piezas',stock:7},
    {sku:"27",image:'./images/lenceria26.png',category: 'Colección Mulán',price: 190,name: 'Conjunto Negro',description: 'Conjunto negro transparente en la copa en encaje de dos piezas',stock: 16},
    {sku:"28",image:'./images/lenceria27.png',category: 'Colección Esmeralda',price: 200,name: 'Conjunto N´Lux',description: 'Conjunto rosado,verde en encaje de dos piezas',stock:12},
    {sku:"29",image:'./images/lenceria28.png',category: 'Colección Mérida',price: 170,name: 'Conjunto Azul',description: 'Conjunto azul transparente en la copa en encaje de dos piezas',stock:8},
    {sku:"30",image:'./images/lenceria29.png',category: 'Colección Afrodita',price: 130,name: 'Conjunto Naranja',description: 'Conjunto naranja en encaje de dos piezas',stock:10}
];

function makeCard(product) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('data-category', product.category)
    card.setAttribute('id', product.sku);

    const titleCard = document.createElement('h2')
    titleCard.textContent = product.name
    titleCard.classList.add('card-title')

    const priceCard = document.createElement('p')
    priceCard.textContent = `$${product.price}  USD`
    priceCard.classList.add('card-price')

    const descripCard = document.createElement('p')
    descripCard.textContent = product.description
    descripCard.classList.add('card-descrip')

    const categoryCard = document.createElement('p')
    categoryCard.textContent = product.category
    categoryCard.classList.add('card-details')

    const imgCard = document.createElement('img')
    imgCard.src = product.image
    imgCard.alt = product.name
    imgCard.classList.add('card-image')

    const stockCard = document.createElement('p')
    stockCard.textContent = `Disponibles:${product.stock}`
    stockCard.classList.add('card-stock')

    const addToCart = document.createElement('button')
    addToCart.textContent = "Agregar al Carrito"
    addToCart.classList.add('card-button')
    

    card.appendChild(imgCard)
    card.appendChild(titleCard)
    card.appendChild(priceCard)
    card.appendChild(descripCard)
    card.appendChild(categoryCard)
    card.appendChild(stockCard)
    card.appendChild(addToCart)

    container.appendChild(card)
}

window.addEventListener('DOMContentLoaded', () => {
    products.forEach(product => makeCard(product));
});

function filterByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    const container = document.getElementById('container-cards'); // Agregado
    container.innerHTML = '';
    filteredProducts.forEach(product => makeCard(product));
}

const categoryButtons = document.querySelectorAll('.genre-button');

categoryButtons.forEach(button => {
    button.addEventListener('click', function () {
        const category = this.textContent.trim();
        filterByCategory(category);
    });
});


window.addEventListener('DOMContentLoaded', () => {
    products.forEach( product => makeCard(product) )
})

bar.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );    

    container.innerHTML = '';

    filteredProducts.forEach(product => makeCard(product));
});


btnCreate.addEventListener('click', showModal);
btnCloseModal.addEventListener('click', function() {
  modal.style.display = 'none'
  document.querySelector('.overlay').style.display = 'none'
});

btnModify.addEventListener('click', showModalModify);
btnCloseModal2.addEventListener('click', function () {
    modalModify.style.display = 'none'
    document.querySelector('.overlay').style.display = 'none'
});
btnNewProduct.addEventListener('click', createNewProduct);
newImage.addEventListener('change', importImg);

function showModal() {
  modal.style.display = 'block'
  document.querySelector('.overlay').style.display = 'block'
}

function showModalModify(){
    modalModify.style.display = 'block'
    document.querySelector('.overlay').style.display = 'block'
}

function createNewProduct() {
    const skuProduct = newSku.value;
    const productName = newProduct.value;
    const price = newPrice.value;
    const description = newDescrip.value;
    const category = newCategory.value;
    const stock = newStock.value;

    const newProductObject = {
        sku: skuProduct,
        name: productName,
        price: price,
        description: description,
        category: category,
        image: imgSelected,
        stock: stock,
    };

    products.push(newProductObject);
    makeCard(newProductObject);
    modal.style.display = 'none';
    newSku.value = '';
    newProduct.value = '';
    newPrice.value = '';
    newDescrip.value = '';
    newCategory.value = '';
    newStock.value = '';
    newImage.value = '';

    document.querySelector('.overlay').style.display = 'none'
}

function importImg(event) {
    const currentImg = event.target.files[0];
    const objectURL = URL.createObjectURL(currentImg);
    imgSelected = objectURL;
}

function renderCards(){
    container.innerHTML = ''; // Limpiar el contenedor antes de renderizar
  
    products.map(product => {
        product ? makeCard(product) : null;
    });
  }
  
function sortProducts(order) {
    if (order === 'asc') {
      products = sortByPriceAscending(products);
    } else if (order === 'desc') {
      products = sortByPriceDescending(products);
    }
  
    renderCards();
}

btnFilterAsc.addEventListener('click', () => {
    sortProducts('asc');
});

btnFilterDesc.addEventListener('click', () => {
    sortProducts('desc');
});
  
function sortByPriceAscending(products) {
    return products.slice().sort((a, b) => a.price - b.price);
}
  
function sortByPriceDescending(products) {
    return products.slice().sort((a, b) => b.price - a.price);
}

container.addEventListener('click', function (event) {
    if (event.target.classList.contains('card-button')) {
        const card = event.target.closest('.card');
        if (card) {
            const sku = card.getAttribute('id');
            const productToAdd = products.find(product => product.sku === sku);
            addToCart(productToAdd);
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    try {
        const storedCart = localStorage.getItem('products-in-cart');
        if (storedCart) {
            // Intenta analizar la cadena JSON
            cart = JSON.parse(storedCart);
            updateCart();  // Actualiza la interfaz del carrito después de cargar desde localStorage
        }
    } catch (error) {
        // Maneja el error al analizar la cadena JSON
        console.error('Error parsing cart from localStorage:', error);
        // Puedes tomar medidas adicionales según tus necesidades, como restablecer el carrito o informar al usuario.
    }

    // Resto del código...
});

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    try {
        const storedCart = localStorage.getItem('products-in-cart');
        if (storedCart) {
            // Intenta analizar la cadena JSON
            cart = JSON.parse(storedCart);
            updateCart();  // Actualiza la interfaz del carrito después de cargar desde localStorage
        }
    } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
    
    }

});

function addToCart(productToAdd) {
  const { sku, stock } = productToAdd;
  if (stock > 0) {
      const existingItem = cart.find(item => item.sku === sku);

      if (existingItem) {
          existingItem.quantity += 1;
      } else {
          cart.push({ ...productToAdd, quantity: 1 });
      }

      // Actualizar el stock del producto
      productToAdd.stock -= 1;

      // Guardar el carrito en localStorage
      localStorage.setItem('products-in-cart', JSON.stringify(cart));

      // Actualizar la interfaz del carrito
      updateCart();
  }
}

function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';

  let totalPrice = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-new-product');
    cartItem.innerHTML = `<p id = "text">${item.name} - Cantidad:</p> 
    <div class = "buttons">
      <button class = "btn-Minum" onclick="decrementQuantity('${item.sku}')">-</button><p id="text">
      ${item.quantity}</p>
      <button class = "btn-Plus" onclick="incrementQuantity('${item.sku}')">+</button>
      <button class = "btn-Delete" onclick="removeFromCart('${item.sku}')">Eliminar</button>
    </div>`;

    cartItemsDiv.appendChild(cartItem);

    totalPrice += item.price * item.quantity;
  });

  document.getElementById('cart-total').innerText = `$${totalPrice}`;
}
function incrementQuantity(sku) {
  const item = cart.find(item => item.sku === sku);
  if (item && item.quantity < item.stock) {
    item.quantity++;
    updateCart();
  }
}

function decrementQuantity(sku) {
  const item = cart.find(item => item.sku === sku);
  if (item && item.quantity > 1) {
    item.quantity--;
    updateCart();
  }
  
}

// Función para eliminar un producto del carrito
function removeFromCart(sku) {
  cart = cart.filter(item => item.sku !== sku);
  localStorage.setItem('products-in-cart', JSON.stringify(cart));
  updateCart();
}

// Función para vaciar completamente el carrito
document.getElementById('empty-cart').addEventListener('click', () => {
  cart = [];
  localStorage.setItem('prdocuts-in-cart', cart)
  updateCart();
});



// Evento al hacer clic en "Añadir al carrito" en cada producto
container.addEventListener('click', function(event) {
    if (event.target.classList.contains('btnAdd')) {
      const sku = event.target.getAttribute('id');
      const productToAdd = products.find(product => product.sku === sku);
      addToCart(productToAdd);
    }
  });
  
  // Función para eliminar un producto del carrito
  function removeFromCart(sku) {
    cart = cart.filter(item => item.sku !== sku);
    localStorage.setItem('products-in-cart', JSON.stringify(cart));
    updateCart();
}

  
  // Función para vaciar completamente el carrito
  emptyCart.addEventListener('click', () => {
    cart = [];
    localStorage.setItem('products-in-cart', cart);
    updateCart();
  });

const callProduct = document.getElementById('call-product').addEventListener('click', updateModifyForm);

function updateModifyForm() {
  const skuToModify = document.getElementById('new-sku2').value;
  const productToModify = products.find(product => product.sku === skuToModify);

  if (productToModify) {
    // Llena los campos del formulario con los datos del producto
    document.getElementById('new-product2').value = productToModify.name;
    document.getElementById('new-price2').value = productToModify.price;
    document.getElementById('new-description2').value = productToModify.description;
    document.getElementById('new-stock2').value = productToModify.stock;
    document.getElementById('new-category2').value = productToModify.category;

    const imgPreview = document.getElementById('new-image2');
        imgPreview.src = productToModify.image;
        imgSelected = productToModify.image;

    document.getElementById('new-image2').addEventListener('change', updateImagePreview);

  } else {
    // Si no se encuentra el producto, puedes mostrar un mensaje de error o realizar alguna acción adicional.
    console.log('Producto no encontrado');
  }
}

function updateImagePreview(event) {
    const currentImg = event.target.files[0];
    const objectURL = URL.createObjectURL(currentImg);
    imgSelected = objectURL;
  
    const imgPreview = document.getElementById('new-image2-preview');
    imgPreview.src = objectURL;
  }

// Agrega un evento de clic al botón "Actualizar producto"
btnUpdate.addEventListener('click', updateProduct);

function updateProduct() {
  const skuToUpdate = document.getElementById('new-sku2').value;
  const indexToUpdate = products.findIndex(product => product.sku === skuToUpdate);

  if (indexToUpdate !== -1) {
    // Actualiza los valores del producto con los nuevos valores del formulario
    products[indexToUpdate].name = document.getElementById('new-product2').value;
    products[indexToUpdate].image = imgSelected;
    products[indexToUpdate].price = document.getElementById('new-price2').value;
    products[indexToUpdate].description = document.getElementById('new-description2').value;
    products[indexToUpdate].stock = document.getElementById('new-stock2').value;
    products[indexToUpdate].category = document.getElementById('new-category2').value;


    // Limpia el formulario después de la actualización
    document.getElementById('new-sku2').value = '';
    document.getElementById('new-product2').value = '';
    document.getElementById('new-image2').value = '';
    document.getElementById('new-price2').value = '';
    document.getElementById('new-description2').value = '';
    document.getElementById('new-stock2').value = '';
    document.getElementById('new-category2').value = '';

    // Cierra el modal de modificación
    document.querySelector('.overlay').style.display = 'none'
    modalModify.style.display = 'none'

    // Vuelve a renderizar las tarjetas con los productos actualizados
    renderCards();
  } else {
    // Si no se encuentra el producto, puedes mostrar un mensaje de error o realizar alguna acción adicional.
    console.log('Producto no encontrado para actualizar');
  }
}