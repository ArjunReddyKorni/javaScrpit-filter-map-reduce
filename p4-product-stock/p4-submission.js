const products3 = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 450
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 300
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 420
    },
    {
        productName: 'Smiley T-Shirt',
        price: 350
    },
    {
        productName: 'Smiley T-Shirt',
        price: 150
    },
    {
        productName: 'Shinie Nail Paint',
        price: 100
    },
    {
        productName: 'Shinie Nail Paint',
        price: 250
    },
    {
        productName: 'Esbeda Wallet',
        price: 250
    }
];

//Find the stock of each product type
let [gucciStock,smileyStock,shineStock,esbedaStock,count] = [0,0,0,0,0];
function stock(products3,product_name){
 let products = products3.filter((item,productName)=> item.productName === product_name )
 return products;
}

//Write code here


let gucci = stock(products3,"Gucci Round Bucklet Belt")
let smiley = stock(products3,"Smiley T-Shirt");
let shine = stock(products3,"Shinie Nail Paint");
let esbeda = stock(products3,"Esbeda Wallet");
console.log("Gucci Round Bucklet Belt = "+gucci.reduce((accumulate,item) => ++gucciStock,count));
console.log("Smiley T-Shirt = "+smiley.reduce((accumulate,item) => ++smileyStock,count));
console.log("Shinie Nail Paint = "+shine.reduce((accumulate,item) => ++shineStock,count));
console.log("Esbeda Wallet = "+esbeda.reduce((accumulate,item) => ++esbedaStock,count));


