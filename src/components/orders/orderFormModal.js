import OrderForm from './orderForm';

export default function OrderFormModal({ isOpen, onClose, onSubmit }) {
  const handleFormSubmit = (formData) => {
    // Call the onSubmit function with the form data when the form is submitted
    onSubmit(formData);
  };

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Create Order</h2>
          <OrderForm onSubmit={handleFormSubmit} />
          <button
            className="bg-blue-500 text-white rounded-full px-4 py-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
}