import { useState } from "react";

import OrderFormModal from "../orders/orderFormModal";

export default function ShopProfile({ shop }) {
    const [ isModalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (

<div className="max-w-2xl mx-auto">
  <div className="h-6">

  </div>
    <div className="px-3 py-2">
      
        <div className="flex flex-col gap-1 text-center">
        <img
            src={shop.images.length > 0 ? shop.images[0] : '/public/default.svg'}
            alt="Profile"
            className="rounded-full h-40 w-40 mx-auto mb-2"
          />
            <p className="font-serif font-semibold text-gray-100">{shop.name}</p>
            <span className="text-sm text-gray-100">{shop.address}</span>
            <span className="text-sm text-gray-100">{shop.bio}</span>
        </div>


   
        <div className="flex justify-center items-center gap-2 my-3">
            <div className="font-semibold text-center mx-4">
                <p className="text-black">102</p>
                <span className="text-gray-100">Washes</span>
            </div>
            <div className="font-semibold text-center mx-4">
                <p className="text-black">102</p>
                <span className="text-gray-100">Followers</span>
            </div>
        </div>
      

 
        <div className="flex justify-center gap-2 my-5">
          <button className="bg-pink-500 px-4 py-2 rounded-full text-white shadow-lg">
            Follow
          </button>
          <button className="bg-white border border-gray-500 px-4 py-2 rounded-full shadow-lg">
            Message
          </button>
          <button
            className="bg-blue-500 px-4 py-2 rounded-full text-white shadow-lg"
            onClick={openModal}
          >
            Create Order
          </button>
        </div>
    </div>
    <OrderFormModal isOpen={isModalOpen} onClose={closeModal} />

</div>

    );
  }
  