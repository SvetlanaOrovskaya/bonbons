import { useParams } from 'react-router-dom';
import { Product } from '../../components/Product/Product';

export const ProductPage = () => {

  const id = useParams();

  console.log(id);

  return <Product  id={id.productId} />;
};
