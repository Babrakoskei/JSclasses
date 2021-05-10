class Mkulima{
    constructor(farms,vendors,products,orders){
        this.farms=[];
        this.products = [];
        this.orders= [];
        this.vendors
    

    }
    addFarm(farmId,name, farmer, phoneNumber,address){
        var farm = {
            farmId:farmId,
            name:name,
            farmer:farmer,
            phoneNumber: phoneNumber,
            address: address,

        }
   this.farms.push(farm)
    }
removeFarm(FarmId){
let farm = this.getFarm(FarmId);
let index= this.farms.indexOf(farm);
this.farms.splice(index,1);
}
updateFarm(farmId,name,farmer,phoneNumber,address){

var farm ={
FarmId:FarmId,
name:name,
farmer: farmer,
phoneNumber:phoneNumber,
address:address,
    }

this.farms.push(farm);

}
    getfarm(FarmId){
        for (var i = 0;i<this.farms.length;i++){
            let farm= this.farms[i];
            if(this.farms.farmId===FarmId){
                return farm;
            }
        }
    }
   
   
   addProduct(addProductId,name,price){
       var product={
           ProductId:ProductId,
           name:name,
           price:price,
       }
       this.product.push(product);

   }

   removeProduct(productId){
       for(var i=0;i<this.product.length;i++){
       let product= this.product[i];
       if(this.product.productId===product){
           return product;
       }
   }
}
printProducts(){
    let products= this.getProduct;
    return `${product} costs ${price}`;
}
calculateOrderCost(productId,quantity){
    var cost = quantity*3000;
    return `${productId} costs ${cost}`;
}
}
let mkulima = new Mkulima("Bora bora farm","Passion","Mary");
console.log(mkulima.addFarm(65888099,"Babra ","Andrew",90989888,"Magadi"))
console.log(mkulima.farms);
console.log(mkulima.calculateOrderCost("seeds",1000));
console.log(mkulima.removeFarm(90989888));
console.log(mkulima.printProducts);