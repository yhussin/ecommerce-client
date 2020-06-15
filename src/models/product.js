const url = process.env.REACT_APP_API_URL || `http://localhost:5000`

class ProductModel {
    static all = () => {
        console.log('I am product model')
        return fetch(`${url}/products`).then(res => res.json())
    }
    static show = (productId) => {
        return fetch(`${url}/products/${productId}`).then(res => res.json())
    }
    static create = (productData) => {
        return fetch(`${url}/products/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json)
    }
    static removeItem = (id) => {
        return fetch(`${url}/products/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json)
    }
    static update = (productData) => {
        return fetch(`${url}/products/:id`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json)
    }

}

export default ProductModel;