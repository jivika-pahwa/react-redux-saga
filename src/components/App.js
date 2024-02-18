import '../App.css';
import Header from './Header';
import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { productListing } from '../redux/productAction';

// const getState = (state) => {
//   return {
//     productData: state?.productData
//   }
// }

function App() {
  const dispatch = useDispatch();
  const ProductList = useSelector((state) => state?.productData);
  console.log("ProductList", ProductList);
  const OfficeEssentials = {
    item1: 'Laptop Bag',
    item2: 'Formals Outfit',
    item3: 'Nude Makeup',
    item4: 'Sandals',
    item5: 'Heels',
  };

  var arr = [{
    id: 1,
    name: 'bill'
  }, {
    id: 2,
    name: 'ted'
  }];

  return (
    <div className='App'>
      <header>
        React Redux Saga Project
        <br /> <br />
        <button onClick={() => dispatch(addToCart(OfficeEssentials))}>Add To Cart</button>
        <button onClick={() => dispatch(removeToCart(OfficeEssentials.item2))}>Remove From Cart</button>
        <button onClick={() => dispatch(emptyCart(OfficeEssentials))}>Empty Cart</button>
        <button onClick={() => dispatch(productListing())}>Get Product List</button>
      </header>
      <Header />
      <h3>Product Listing</h3>
      {ProductList?.map((item) => {
        return (<p> {item.id} - {item.title} </p>)
      })}

      <h4>dummy data</h4>
      {arr.map((item) => {
        return <p>{item.name}</p>
      })}
    </div>
  );
}

export default App;
