import './App.css';
import React from 'react';
import List from './lists/list/List';
import ResultOrder from './resultOrder/ResultOrder';
import Title from './titles/Title';
import ListOrder from './lists/listOrder/ListOrder';
import TitleOrder from './titles/TitleOrder'


const PRODUCTS_ITEM_SELECTOR = '.products__item';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      products: [],
      result: 0,
      addedProducts: []
    }

    this.onClickAddProduct = this.onClickAddProduct.bind(this)
    this.onClickDeleteProduct = this.onClickDeleteProduct.bind(this)
  }


  componentDidMount(){
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then((data) => this.setState({
        products: data
      }))
  }

  // componentDidUpdate(prevProps, prevState){
  //   return (prevState.result !== this.state.result);
  // }
  
  
  onClickAddProduct(e){
    const priceElem = this.getPriceElem(e.target);
    const {result, addedProducts} = this.state;

    this.setState({
      result: result + priceElem.price,
      addedProducts: [...addedProducts, priceElem]
    })
  }

  onClickDeleteProduct(e){
    const priceElem = this.getPriceElem(e.target);
    const {result, addedProducts} = this.state;

    this.setState({
      result: result - priceElem.price,
      addedProducts: addedProducts.filter((item) => item.id !== priceElem.id)
    })
  }


  getPriceElem(el){
    const id = this.getIdElem(el);
    const findedElem = this.getElemById(id);

    return findedElem;
  }


  getIdElem(el){
    return el.closest(PRODUCTS_ITEM_SELECTOR).dataset.id;
  }

  getElemById(idElem){
    const {products} = this.state;

    return products.find((item) => +item.id === +idElem)
  }


  render(){
    const {products, result, addedProducts} = this.state;

    return (
      <div className="App">
        <Title />
        <ResultOrder result={result}/>
        <List list={products} addProduct={this.onClickAddProduct}/>

        <TitleOrder />
        <ListOrder listOrder={addedProducts} deleteProduct={this.onClickDeleteProduct}/>
      </div>
    );
  }

}

export default App;