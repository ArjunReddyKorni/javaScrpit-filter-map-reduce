//Write code here
//Write a JavaScript function to create a product object which has
// the properties like productId, productName, description and unitPrice.  


   product = {

     productId: 10,
     productName: 'product',
     description: 'productionDiscrption',
     unitPrice: 100
  }


  function displayProductDetails(productData){
  console.log(`productId = ${productData.productId}`);
  console.log(`productName = ${productData.productName}`);
  console.log(`description = ${productData.description}`);
  console.log(`unitPrice = ${productData.unitPrice}`);
  }

  displayProductDetails(product);