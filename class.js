class Mkulima{
    constructor(farms,products,orders){
        this.farms=[];
        this.products = [];
        this.orders= [];
       
    

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
removeFarm(farmId){
//     this.farm.shift(this.farmId);
// return this.farm
let removeId=this.getFarm(farmId)
let indexId=this.farms.indexOf(removeId)
return this.farms.splice(indexId,1)

}
updateFarm(farmId,name,farmer,phoneNumber,address){

var farm ={
farmId:farmId,
name:name,
farmer: farmer,
phoneNumber:phoneNumber,
address:address,
    }

this.farms.push(farm);

}
    getFarm(farmId){
        for (var i = 0;i<this.farms.length;i++){
            let farm= this.farms[i];
            if(farm.farmId==farmId){
                return farm;
            }
        }
    }
   
   
   addProduct(productId,name,price){
       var product={
           productId:productId,
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
console.log(mkulima.addFarm(65888099,"Babra ","Andrew",90989888,"Magadi road"));
console.log(mkulima.farms);
console.log(mkulima.getFarm(65888099));
console.log(mkulima.removeFarm(65888099));
console.log(mkulima.addFarm(1122234,"Jeaninne ","Jack",2547645333,"Kilimani"));
console.log(mkulima.farms);
console.log(mkulima.getFarm(65888099));
console.log(mkulima.removeFarm(65888099));



// console.log(mkulima.calculateOrderCost("seeds",1000));
// console.log(mkulima.printProducts);