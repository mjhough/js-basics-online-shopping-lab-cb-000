var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randomNum = Math.floor(Math.random() * (100 - 1)) + 1
  cart.push({ [item]: randomNum  })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length > 0) {
    var string = ""
    for (var i = 0; i < cart.length; i++) {
      var key = Object.keys(cart[i])[0]
      var value = cart[i][key]
      if (!string) {
        string += `In your cart, you have ${key} at $${value}`
      } else if (cart.length === 2) {
        string += ` and ${key} at $${value}`
      } else if (i === cart.length - 1) {
        string += `, and ${key} at $${value}`
      } else {
        string += `, ${key} at $${value}`
      }
    }
    console.log(`${string}.`)
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  if (cart.length > 0) {
    var total = 0
    for (var i = 0; i < cart.length; i++) {
      var value = cart[i][Object.keys(cart[i])[0]]
      total += value
    }
    return total
  } else {
    return 0
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
