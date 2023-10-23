import ShopCreation from '../../components/shop/shopCreation';
import Navbar from '@/components/nav';

export default function CreateShopPage() {
  return (
    <div className='bg-blue-300 min-h-screen min-w-screen'>
      <h1 className='text-center text-4xl'>Create a New Shop</h1>
      <ShopCreation />
      <Navbar />
    </div>
  );
}