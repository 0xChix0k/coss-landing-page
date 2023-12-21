import Div1 from './container/home/Div1';
import Div2 from './container/home/Div2';
import Div3 from './container/home/Div3';
import Div4 from './container/home/Div4';
import Footer from 'components/footer/Footer';

const Home = () => {
  return (
    <div style={{ width: '100%' }}>
      <Div1 />
      <Div2 />
      <Div3 />
      <Div4 />
      <Footer />
    </div>
  );
};
export default Home;
