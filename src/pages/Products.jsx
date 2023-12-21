import { StContain } from 'pages/styles/products/stylesProducts';
import PDiv1 from './container/products/PDiv1';
import PDiv2 from './container/products/PDiv2';
import PDiv3 from './container/products/PDiv3';
import PTabs from './container/products/PTabs';
import Footer from 'components/footer/Footer';

const Products = () => {
  return (
    <StContain>
      <PDiv1 />
      <PTabs />
      <PDiv2 />
      <PDiv3 />
      <Footer />
    </StContain>
  );
};
export default Products;
