type Product = {
    "sku" : string,
    "name": string,
    "image": string,
    "price": number,
    "stock": Array<stock>
}

type Stock = {
    "quantity": number,
    "local": Local
}

type Local = {
    "id": number,
    "name": string
}