import { SET_TOTAL_AMOUNT, basketSelector } from '../store/basket';
import { useDispatch, useSelector } from 'react-redux';
import BasketCard from './BasketCard';
import { useEffect, useState } from 'react';
import { ITotalAmountData } from '@/types/Payment';

const OrderBooks = () => {
  const { basket } = useSelector(basketSelector);
  const dispatch = useDispatch();
  const [totalAmountData, setTotalAmountData] = useState<ITotalAmountData[]>();

  // Collection of all prices contained in totalAmountData
  const totalPrice = totalAmountData?.reduce((acc: any, currentValue) => {
    return acc + currentValue.price;
  }, 0);

  useEffect(() => {
    dispatch(SET_TOTAL_AMOUNT(totalPrice));
  }, [setTotalAmountData,totalPrice]);

  return (
    <div className='mr-5'>
      <table className='w-full mb-5 '>
        <tbody className='ssm:flex ssm:flex-col'>
          <tr className='text-xs text-[#999999] text-left ssm:flex ssm:gap-5'>
            <th>PRODUCT NAME</th>
            <th>NUMBER</th>
            <th>UNIT PRICE</th>
            <th>PRICE</th>
          </tr>
          {
            basket?.map((item: any) => (
              <BasketCard
                item={item}
                key={item.id}
                setTotalAmountData={setTotalAmountData}
                totalAmountData={totalAmountData}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default OrderBooks;
