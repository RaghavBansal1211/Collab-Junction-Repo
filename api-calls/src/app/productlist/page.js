"use client"
import { useEffect, useState } from 'react'



const Page = () => {
    const [product,setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await fetch("https://dummyjson.com/products");
                data = await data.json();
                console.log(data);
                setProduct(data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, []);

  return (
    <div>
      <h1>PRODUCT LIST</h1>

      {
           product.map((item) => (
            <h3>{item.title}</h3>
           )) 
             
      }
    </div>
  )
}

export default Page