import { getShoppingCart } from "../utilities/fakedb"

const cardProductLoader = async ()=>{
    const loaderProduct = await fetch('products.json')
    const  product = await loaderProduct.json()
    

    const storeData = getShoppingCart()
    const saveCard = []
    for(const id in storeData){
        const addedProduct = product.find(pd=> pd.id===id)
        if(addedProduct){
            const quantity = storeData[id]
            addedProduct.quantity= quantity
            saveCard.push(addedProduct)
        }
    }

    return saveCard 
}

export default cardProductLoader