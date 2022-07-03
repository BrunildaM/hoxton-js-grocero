/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/


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

// <li>
// <div class="store--item-icon">
//  <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
// </div>
// <button>Add to cart</button>
// </li>

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


function renderCart() {
  const cart = getCart()

  //<li>
  //<img
    //class="cart--item-icon"
    //src="assets/icons/001-beetroot.svg"
    //alt="beetroot"
  ///>
  //<p>beetroot</p>
  //<button class="quantity-btn remove-btn center">-</button>
  //<span class="quantity-text center">1</span>
  //<button class="quantity-btn add-btn center">+</button>
//</li>

const liEl = document.createElement('li')
const imgEl = document.createElement('img')
const nameEl = document.createElement('p')
const minusButtonEl = document.createElement('button')
const quantityEl = document.createElement('span')
const plusButtonEl = document.createElement('button')
}


function renderTotal() {

}

function render() {
  renderStore()
}

render()
render()
render()