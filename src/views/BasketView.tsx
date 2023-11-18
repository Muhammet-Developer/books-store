import OrderBooks from '../components/OrderBooks';
import OrderSummaryAmount from '../components/OrderSummaryAmount';
import { SET_TOTAL_AMOUNT, basketSelector } from '../store/basket';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const BasketView = () => {
  const { basket, totalAmount } = useSelector(basketSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // reset the total amount to zero if the basket is empty
  useEffect(() => {
    if (basket.length === 0) {
      dispatch(SET_TOTAL_AMOUNT(0));
    }
  }, [basket.length,totalAmount]);

  return (
    <div className='max-w-[1216px] mx-auto pt-20 '>
      {basket.length ?
        <>
          <p className='text-4xl mb-10 font-bold xl:ml-5' >My Basket ({basket?.length} Product)</p>
          <div className='flex md:flex-col md:justify-center xl:mx-5'>
            <div className='w-[70%] md:w-full'>
              <OrderBooks />
            </div>
            <div className='w-[30%] md:w-full '>
              <OrderSummaryAmount />
            </div>
          </div>
        </>
        :
        <div>
          <img src="/empty-basket-1.gif" alt="" className='mx-auto' />
          <p className='text-center font-bold text-xl'>Your Shopping Cart Empty</p>
          <div className='flex justify-center'>
            <button onClick={() => navigate('/')} className="h-10 w-96 sm:w-72  bg-[#E7030A] text-white font-medium mt-3 text-center  rounded-lg hover:bg-slate-200 duration-500 hover:duration-500 hover:text-black">
              Home
            </button>
          </div>
        </div>}
    </div>
  );
};

export default BasketView;
