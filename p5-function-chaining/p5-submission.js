const products4 = [
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

//Find the stock of each non-premium products using function chaining
//Write code here


let count1=0;

let gucciStock1=products4.filter(item=>item.productName=="Gucci Round Bucklet Belt" && item.price<=300)
            .reduce((count,item)=>{return ++count;
            },count)
           
let smileySymbol=products4.filter(item=>item.productName=='Smiley T-Shirt' && item.price<=300)
            .reduce((count,item)=>{return ++count;
            },count)
let shineSymbol=products4.filter(item=>item.productName=='Shinie Nail Paint' && item.price<=300)
            .reduce((count,item)=>{return ++count;
            },count)

let esbedaStock1=products4.filter(item=>item.productName== 'Esbeda Wallet' && item.price<=300)
            .reduce((count,item)=>{return ++count;
            },count)


            console.log("Gucci Round Bucklet Belt = "+gucciStock1)
            console.log("Smiley T-Shirt = "+smileySymbol)
            console.log("Shinie Nail Paint = "+shineSymbol)
            console.log("Esbeda Wallet = "+esbedaStock1)