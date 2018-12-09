import styles from './products.css';

import {connect} from 'dva';
import  ProductList from '../components/ProductList';


const Products = ({dispatch,products})=>{
  function handleDelete(id) {
    dispatch({
      type:'products/delete',
      payload:id,
    });
  }

  return(
    <div>
      <h2>产品列表</h2>
      <ProductList dispatch={dispatch} onDelete={handleDelete} products={products} />
    </div>
  );
};

export default connect(({products}) => ({
  products,
}))(Products);
