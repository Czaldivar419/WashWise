import ShopCreation from '../../components/shop/shopCreation';
import Navbar from '@/components/utils/nav';

export default function CreateShopPage() {
  return (
    <div className='min-h-screen min-w-screen bg-gradient-to-b from-cyan-500 via-blue-500 to-blue-300'>
      <h1 className='text-center text-4xl'>Create a New Shop</h1>
      <ShopCreation />
      <Navbar />
    </div>
  );
}