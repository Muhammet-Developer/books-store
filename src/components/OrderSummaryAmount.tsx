import { useNavigate } from 'react-router-dom';
import { basketSelector } from '../store/basket';
import { useSelector } from 'react-redux';
const OrderSummaryAmount = () => {
  const navigate = useNavigate();
  const { basket, totalAmount } = useSelector(basketSelector);
  return (
    <div className='border rounded-md border-[#CCCCCC] p-5 '>
      <p className='text-xl'>
      Order Summary
      </p>
      <p className='pt-2 text-xs text-[#5e6a75]'>{basket?.length} Product</p>
      <div className='w-full h-[1px] bg-slate-200 my-5'></div>
      <div className='flex justify-between items-center'>
        <p className='pt-2 text-[13px] font-semibold'>Amount Payable</p>
        <p className='text-[15px] font-bold text-[#E7030A]'>{totalAmount} TL</p>
      </div>
      <button onClick={() => navigate('/payment')} className="h-10 w-full bg-[#E7030A] text-white font-medium mt-3 text-center  rounded-lg hover:bg-slate-200 duration-500 hover:duration-500 hover:text-black">
        Buy
      </button>

    </div>
  );
};

export default OrderSummaryAmount;
