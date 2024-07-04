async function productList(){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}


 const Page = async () => {
  let product = await productList();
  console.log(product);  
  return (
    <div>
      <h1>PRODUCT LIST</h1>
      {
        product.map((item)=>(
            <h3>Name: {item.title} ,Price:  {item.price}</h3>
        ))
      }
    </div>
  )
}

export default Page