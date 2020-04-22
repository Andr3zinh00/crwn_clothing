export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        :
        cartItem
    )
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}


export const removeItemFromCart = (cartItems, cartItemRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemRemove.id)
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }//seta um novo objeto com quantidade - 1
      : cartItem //mantem a carta do mesmo jeito q estava, o estado não muda se um objeto novo for passado!
    
  )

}