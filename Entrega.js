class ProductManager {
    constructor(){
        this.product=[]
    }

    getProduct(){
       return this.product
    }

    getProductByID(id){
        let result = this.product.find(product=>product.id==id)
        return result=='undefine' ? 'no se encuentra el producto': result
    }

    addProduct(title,description,price,thumbnail,code,stock){
        let search = this.product.find(product=>product.code==code)    
            if (search!=code) {
                const newProduct = {
                    id: this.product.length+1,
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock
                }
                this.product.push(newProduct) 
            }
    }
}


const manager = new ProductManager();




