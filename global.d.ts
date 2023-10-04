type Product = {
    "sku" : string,
    "name": string,
    "image": string,
    "price": number,
    "stock": {[key: string]: stock}
}

type CartItem = {
    "quantity": int,
    "product": Product
}

type Stock = {
    "quantity": number,
    "local": Local
}

type Local = {
    "id": string,
    "name": string
}