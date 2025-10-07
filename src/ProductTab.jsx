import Product from "./Product.jsx";
function ProductTab(){
    //let option1=["hi-tech","durable","fast"];
    //let option2=["hi-tech","durable","fast"];
    return(
       <>
        <Product 
        title="phone"
         price={30000}
         />
        <Product 
         title="laptop"
          price={50000}
          />

        <Product  title="pen" price={100}/>
     
      
    </>
    );
}

export default ProductTab;