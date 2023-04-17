import { getShoppingCart } from "../utilities/fakedb"

const cardProduct = async () =>{
    const loaderProduct = await fetch('products.json')
    const product = await loaderProduct.json()

    const storeCard = getShoppingCart()
    const saveCard = []

    for(const id in storeCard){
        const addedProduct = product.find(pd=> pd.id=== id)
        if(addedProduct){
            const quantity = storeCard[id]
            addedProduct.quantity=quantity;
            saveCard.push(addedProduct)
        }
    }


    // if we need to send two parameter
    // return [saveCard, product]
    // return {saveCard, product}
    return saveCard
}

export default cardProduct;