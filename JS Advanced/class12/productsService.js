

const getProductsByCategory = function(product, categoryName) {
    const productName = product
                               .filter((element) => element.category === categoryName)
                               .map((element) => element.name)
                               return productName;
}



const getSumOfPrices = function(array) {
    return array.reduce((result, element) => (result + element.price), 0)
}


const getAveragePrice = function(array) {
    const sum = getSumOfPrices(array)
   const result = sum / array.length; 
   return result;
}

const getTheCheapestProduct = function(array) {
    let productWithMinPrice = array[0];
    array.forEach(element => {
        if(element.price < productWithMinPrice.price) {
            productWithMinPrice = element;
        }        
    });
    return productWithMinPrice;
}


export default{
    getProductsByCategory,
    getSumOfPrices,
    getAveragePrice,
    getTheCheapestProduct
};