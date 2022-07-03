const storeList = document.querySelector('.item-list.store--item-list')
const cartList = document.querySelector('.item-list.cart--item-list')
const totalEl = document.querySelector('.total-number')


const state = {
  store : [
    {
      id: 1,
      name: "beetroot",
      price: 0.52,
      amountInCart: 0,
    },
    {
      id: 2,
      name: "carrot",
      price: 0.35,
      amountInCart: 10,
    },
    {
      id: 3,
      name: "apple",
      price: 0.40,
      amountInCart: 7,
    },
    {
      id: 4,
      name: "apricot",
      price: 0.61,
      amountInCart: 5,
    },
    {
      id: 5,
      name: "avocado",
      price: 1.45,
      amountInCart: 0,
    },
    {
      id: 6,
      name: "bananas",
      price: 0.27,
      amountInCart: 12,
    },
    {
      id: 7,
      name: "bell-pepper",
      price: 0.32,
      amountInCart: 32,
    },
    {
      id: 8,
      name: "berry",
      price: 0.65,
      amountInCart: 0,
    },
    {
      id: 9,
      name: "blueberry",
      price: 0.80,
      amountInCart: 15,
    },
    {
      id: 10,
      name: "eggplant",
      price: 0.47,
      amountInCart: 0,
    }
  ]
}


function getCart() {
  return state.store.filter(item => item.amountInCart > 0)
}

function getTotal() {
  let total = 0
  const cart = getCart()


  for (const item of cart){
  total +=  item.price * item.amountInCart
  }

  return total
}

function addItemToCart(item) {
  item.amountInCart++
}

function removeItemFromCart(item) {
  if(item.amountInCart > 0)  item.amountInCart--
}


function renderStoreItem(storeItem) {
  const liEl = document.createElement("li")

  const divEl = document.createElement("div")
  divEl.setAttribute("class", "store--item-icon")

  const imgEl = document.createElement("img")
  imgEl.setAttribute("alt", storeItem.name)
  const imgId = storeItem.id.toString().padStart(3, "0")
  imgEl.setAttribute("src", `/assets/icons/${imgId}-${storeItem.name}.svg`)

  divEl.append(imgEl)

  const buttonEl = document.createElement("button")
  buttonEl.textContent = 'Add to cart'
  buttonEl.addEventListener("click", function () {
    addItemToCart(storeItem)
    render()
  })

  liEl.append(divEl, buttonEl)
  // @ts-ignore
  storeList.append(liEl)
}


function renderStore() {
  // destroy the content

  // @ts-ignore
  storeList.innerHTML = ''
  
  for (const storeItem of state.store) {
    renderStoreItem(storeItem)
  }
}


function renderCartItem(cartItem) {
  const liEl = document.createElement('li')

const imgEl = document.createElement('img')
imgEl.setAttribute("class", "cart--item-icon")
const imgId = cartItem.id.toString().padStart(3, "0")
imgEl.setAttribute("src", `/assets/icons/${imgId}-${cartItem.name}.svg`)
imgEl.setAttribute("alt", cartItem.name)

const nameEl = document.createElement('p')
nameEl.textContent = cartItem.name

const minusButtonEl = document.createElement('button')
minusButtonEl.setAttribute('class', "quantity-btn remove-btn center" )
minusButtonEl.textContent = '-'
minusButtonEl.addEventListener("click", function () {
  removeItemFromCart(cartItem)
  render()
})

const quantityEl = document.createElement('span')
quantityEl.setAttribute("class", "quantity-text center")
// @ts-ignore
quantityEl.textContent = cartItem.amountInCart

const plusButtonEl = document.createElement('button')
plusButtonEl.setAttribute('class', "quantity-btn add-btn center")
plusButtonEl.textContent = '+'
plusButtonEl.addEventListener("click", function () {
  addItemToCart(cartItem)
  render()
})

liEl.append(imgEl, nameEl, minusButtonEl, quantityEl, plusButtonEl)

// @ts-ignore
cartList.append(liEl)
}

function renderCart() {

  // @ts-ignore
  cartList.innerHTML = ''

  const cart = getCart()
  for (const cartItem of cart) {
   renderCartItem(cartItem)
   }
}


function renderTotal() {
   // @ts-ignore
   totalEl.textContent = '£' + getTotal().toFixed(2)
}

function render() {
  renderStore()
  renderCart()
  renderTotal()
}

render()
render()
render()