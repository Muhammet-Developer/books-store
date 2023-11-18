import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  basketSelector } from '../store/basket';
import { useState, useEffect } from 'react';
import { addToCart } from '../helpers/addBasketCard';
const BookDetail = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector(basketSelector);
  const { state } = useLocation();
  const [disabledButtonFind, setDisabledButtonFind] = useState();

  // is a disabled function so that the product added to the cart is not added again
  const disabledButton = (id: any) => {
    const find = basket?.find((item: any) => item?.id === id);
    setDisabledButtonFind(find);
    return find;
  };

  // Products in the cart even if the page is refreshed to disable the button for the relevant card on the home page
  const allDisabledData = basket?.map((item: any) => item.id).includes(state.id);

  useEffect(() => {
  }, [disabledButtonFind]);

  return (
    <div>
      <p className="font-semibold text-2xl ">{state?.volumeInfo?.title}</p>
      <p className='pt-2 text-sm text-[#5e6a75]'>Description: {state?.volumeInfo?.description ? state?.volumeInfo?.description : 'Description Not Found'}</p>
      <div className='w-full h-[1px] bg-slate-200 my-5'></div>
      <p className='pt-2 text-sm text-[#5e6a75]'>Writer: {state?.volumeInfo?.authors ? state?.volumeInfo?.authors : 'Writer Not Found'}</p>
      <p className='pt-2 text-sm text-[#5e6a75]'>Publisher: {state?.volumeInfo?.publisher ? state?.volumeInfo?.publisher : 'Author Not Found'}</p>
      <p className='pt-2 text-sm text-[#5e6a75]'>Published Date: {state?.volumeInfo?.publishedDate ? state?.volumeInfo?.publishedDate : 'Published Date Not Found'}</p>
      <p className='pt-2 text-sm text-[#5e6a75]'>Page Count: {state?.volumeInfo?.pageCount ? state?.volumeInfo?.pageCount : 'Page Count Not Found'}</p>
      <p className='pt-2 text-sm text-[#5e6a75]'>Language: {state?.volumeInfo?.language ? state?.volumeInfo?.pageCount : 'Language Not Found'}</p>
      <div className='w-full h-[1px] bg-slate-200 my-5'></div>
      {state?.saleInfo?.isEbook ?
        <>
          <p className="pt-2 font-bold text-xl">{state?.saleInfo?.listPrice?.amount} {state?.saleInfo?.listPrice?.currencyCode}</p>
          <p className="pt-2 font-bold text-xl mb-4">{state?.saleInfo?.saleability === 'FREE' && state?.saleInfo?.saleability}</p>

        </>
        : <p className="pt-2 text-xl">Not in stock</p>}

      {/* When saleability is free, there is no price information and the book can be read for free. When it is free, you are directed to the relevant page of the book, if it is not free, price information is written */}

      {state?.saleInfo?.saleability === 'FREE' ?
        <div className='!h-12 !w-96'>
          <a href={state?.saleInfo?.buyLink} target='_blank' className=" bg-[#16BDCA] text-white font-medium mt-3 text-center px-24 pb-2.5 py-2 rounded-lg ">
            Read
          </a>
        </div>
        : <button disabled={state?.saleInfo?.isEbook === false || disabledButtonFind || allDisabledData && true} 
          onClick={() => { addToCart(state,dispatch), disabledButton(state.id); }} 
          className="h-10 w-full bg-[#16BDCA] text-white font-medium mt-3 text-center  rounded-lg disabled:bg-[#5e6a75]">
          {state?.saleInfo?.isEbook ? 'Add To Cart' : 'No Stock'}
        </button>
      }

    </div>
  );
};

export default BookDetail;
