import { useEffect, useState } from "react";
import { api } from "./services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  // useEffect(() => {
  //   fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setProductList(response);
  //       setFilteredList(response);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    const getProducts = async () => {
      try{
        const response = await api.get()

        setProductList(response.data)
        setFilteredList(response.data)

      } catch {
        toast.error(`Tivemos algum problema ao carregar o site, tente novamente mais tarde.`, {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

      }
    }

    getProducts()
  }, [])

  const filterList = (value) => {
    if (value === "") {
      setFilteredList([...productList]);

    } else {
      setFilteredList(
        productList.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
      );

    }
  };


  const addProductoToCart = (product) => {
      let isProductNew = cartList.find(e => e.id === product.id)

    if(!isProductNew){
      const newCartList = [...cartList, product]
      setCartList(newCartList)  

      toast.success(`${product.name} adicionado ao carrinho! 😋`, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    } else {
      toast.error(`Vá com calma, guloso! ${product.name} já está no carrinho! 😋`, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        
    }

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
      <ToastContainer />
    </>
  );
}

export default App;
