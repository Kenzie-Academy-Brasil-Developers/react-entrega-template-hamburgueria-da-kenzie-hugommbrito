import { useEffect, useState } from "react";

import { GlobalStyles } from "./styles/GlobalStyles";

import { StyledMain, StyledCardContainer } from "./AppStyles";
import { Header } from "./components/Header";
import { Card } from "./components/Cards";
import { Cart } from "./components/Cart";

function App() {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProductList(response);
        setFilteredList(response);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterList = (value) => {
    // eslint-disable-next-line eqeqeq
    if (value == "") {
      setFilteredList([...productList]);
    } else {
      setFilteredList(
        productList.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
      );
      console.log(filteredList);
    }
  };


  const addProductoToCart = (product) => {     
    const newCartList = [...cartList, product]
    setCartList(newCartList)  
  }
  
  useEffect(() => {
    setCartTotal(cartList.reduce((acc, curr) => ((acc.price||acc) + curr.price), 0))

  }, [cartList])

  return (
    <>
      <GlobalStyles />
      <Header filter={filterList} />
      <StyledMain >
        <StyledCardContainer>
          {filteredList.map((card) => (
            <Card key={card.id} info={card} addToCart={addProductoToCart}/>
          ))}
        </StyledCardContainer>
        <Cart cartList={cartList} cartTotal={cartTotal} setCartList={setCartList} setCartTotal={setCartTotal} ></Cart>
      </StyledMain>
    </>
  );
}

export default App;
