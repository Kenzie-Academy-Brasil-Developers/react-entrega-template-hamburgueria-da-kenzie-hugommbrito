import { useEffect, useState } from "react";

import { GlobalStyles } from "./styles/GlobalStyles";

import { StyledMain, StyledCardContainer } from "./AppStyles";
import { Header } from "./components/Header";
import { Card } from "./components/Cards";
import { Cart } from "./components/Cart";

function App() {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

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


  return (
    <>
      <GlobalStyles />
      <Header filter={filterList} />
      <StyledMain >
        <StyledCardContainer>
          {filteredList.map((card) => (
            <Card key={card.id} info={card} setCartList={setCartList} currentCardList={cartList} setCartTotal={setCartTotal}/>
          ))}
        </StyledCardContainer>
        <Cart cartList={cartList} cartTotal={cartTotal} setCartList={setCartList} setCartTotal={setCartTotal} ></Cart>
      </StyledMain>
    </>
  );
}

export default App;
