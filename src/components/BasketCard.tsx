import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SET_BASKET, basketSelector } from '../store/basket';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ITotalAmountData } from '@/types/Payment';

interface IBasketCard {
  item: any, 
  totalAmountData: ITotalAmountData[] | undefined,
  setTotalAmountData:React.Dispatch<React.SetStateAction<ITotalAmountData[] | undefined>>
}
const BasketCard = ({ item, setTotalAmountData, totalAmountData }: IBasketCard) => {
  const [bookQuantity, setBookQuantity] = useState<number>(1);
  const { basket } = useSelector(basketSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // In the first render, depending on the number of available items, add them to setArray
    if (!totalAmountData && basket && basket.length > 0) {
      const initialArray: ITotalAmountData[] = basket.map((basketItem: any) => ({
        id: basketItem.id,
        price: basketItem.saleInfo.listPrice.amount * 1 // Default quantity
      }));
      setTotalAmountData(initialArray);
    }
  }, [totalAmountData, basket, setTotalAmountData]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    setBookQuantity(newQuantity);

    // Calculate calculatedValue according to the new quantity
    const updatedCalculatedValue = item?.saleInfo?.listPrice?.amount * newQuantity;
    const updatedItem: ITotalAmountData = {
      id: item.id,
      price: updatedCalculatedValue  //new updatedCalculatedValue update added
    };
    const newArray = totalAmountData ? [...totalAmountData] : [];

    // If id is in array, update
    const existingIndex = newArray?.findIndex((elem) => elem.id === item.id);
    if (existingIndex !== -1) {
      newArray[existingIndex] = updatedItem;
    } else {
       // Add if not present
      newArray.push(updatedItem);
    }
    setTotalAmountData(newArray);
  };

  const handleDelete = (id: string) => {
    // Remove item from cart
    dispatch(SET_BASKET(basket?.filter((item: any) => item?.id !== id)));

    // If the deleted item exists in an array, remove it too
    if (totalAmountData) {
      const updatedArray = totalAmountData?.filter((elem) => elem.id !== id);
      setTotalAmountData(updatedArray);
    }
  };

  return (
    <tr className='border-b-2 pb-2' key={item.id}>
      <td className='pt-5 flex'>
        {item?.volumeInfo?.imageLinks ?
          <img src={item?.volumeInfo?.imageLinks?.thumbnail} alt="" width={80} className='mb-5 cursor-pointer' onClick={() => navigate(`/bookDetail/${item?.volumeInfo?.title}`, { state: item })} />
          : <img src='./coverNotAvailable.jpg' alt="" width={80} className='mb-5' />}
        <div>
          <p className='max-w-[550px] pl-1 text-[17px] font-medium'>{item?.volumeInfo?.title}</p>
          <p className='max-w-[550px] pl-1 text-[15px] font-medium'>{item?.volumeInfo?.authors}</p>
        </div>
      </td>
      <td>
        <input type="number" className="bg-gray-50 border ssm:ml-2  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5"
          min={1} max={10} value={bookQuantity || ''} onChange={(e: any) => handleChange(e)} />
      </td>
      <td>
        <p className="pt-2 ssm:pt-0 font-bold text-xl ssm:ml-4">{item?.saleInfo?.listPrice?.amount} {item?.saleInfo?.listPrice?.currencyCode}</p>
      </td>
      <td >
        <p className=" font-bold text-xl ssm:ml-4 text-center">{item?.saleInfo?.listPrice?.amount * bookQuantity} {item?.saleInfo?.listPrice?.currencyCode}</p>
        <p className='text-xs cursor-pointer decoration-solid hover:text-[#E20714] ssm:ml-4 text-center ' onClick={() => handleDelete(item?.id)}>Delete</p>
      </td>
    </tr>
  );
};

export default BasketCard;





