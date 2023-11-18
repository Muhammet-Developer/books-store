import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {  basketSelector } from '../store/basket';
import { useSelector } from 'react-redux';
import { useWindowSize } from 'usehooks-ts';
import { addToCart } from '../helpers/addBasketCard';

const BookCards = ({ item }: { item: any }) => {
  const dispatch = useDispatch();
  const { basket } = useSelector(basketSelector);
  const [disabledButtonFind, setDisabledButtonFind] = useState();
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();
  const { width } = useWindowSize();

  // is a disabled function so that the product added to the cart is not added again
  const disabledButton = (id: any) => {
    const find = basket?.find((item: any) => item?.id === id);
    setDisabledButtonFind(find);
    return find;
  };

  // Products in the cart even if the page is refreshed to disable the button for the relevant card on the home page
  const allDisabledData = basket?.map((item: any) => item.id).includes(item.id);

  useEffect(() => {
    // To show the add to cart button if width 1024 is small 
    setShowButton(width < 1024 && true);
  }, [disabledButtonFind, width]);

  return (
    <div className='relative' onMouseOver={() => { width > 1024 && setShowButton(true); }} onMouseLeave={() => { width > 1024 && setShowButton(false); }}>
      <div className="min-h-[423px] w-[263px] bg-[#F9F9FA] px-4 rounded-md shadow-md cursor-pointer"
        // when you click on the relevant card, send the detailed information of the card via state and open the relevant page
        onClick={() => navigate(`/bookDetail/${item?.volumeInfo?.title}`, { state: item })}
      >
        <div className="h-[185px] pt-5">
          {item?.volumeInfo?.imageLinks ?
            <img src={item?.volumeInfo?.imageLinks?.thumbnail} alt="" className="h-[185px] mx-auto" />
            : <img src='./coverNotAvailable.jpg' alt="" className="h-[185px] mx-auto" />}
        </div>
        <p className="pt-10 font-serif text-base line-clamp-1">{item?.volumeInfo?.title}</p>
        <p className="pt-4 font-semibold text-base ">{item?.volumeInfo?.authors}</p>
        {item?.saleInfo?.isEbook ?
          <>
            <p className="pt-2 font-bold text-xl">{item?.saleInfo?.listPrice?.amount} {item?.saleInfo?.listPrice?.currencyCode}</p>
            <p className="pt-2 font-bold text-xl mb-2">{item?.saleInfo?.saleability === 'FREE' && item?.saleInfo?.saleability}</p>
          </>
          : <p className="pt-2 text-xl">Not in stock</p>}
      </div>

      <div className='absolute top-[340px] w-full px-5'>

        {/* When saleability is free, there is no price information and the book can be read for free. When it is free, you are directed to the relevant page of the book, if it is not free, price information is written */}
        {showButton ?
          item?.saleInfo?.saleability === 'FREE' ?
            <div className='!h-12 '>
              <a href={item?.saleInfo?.buyLink} target='_blank' className=" bg-[#16BDCA] text-white font-medium mt-3 text-center px-24 pb-2.5 py-2 rounded-lg ">
                Read
              </a>
            </div>
            : <button disabled={item?.saleInfo?.isEbook === false || disabledButtonFind || allDisabledData && true}
              // addToCart and disabledButton  call a function and send the required id and item information
              onClick={() => { addToCart(item,dispatch), disabledButton(item.id); }}
              className="h-10 w-full bg-[#16BDCA] text-white font-medium mt-3 text-center  rounded-lg disabled:bg-[#5e6a75]">
              {item?.saleInfo?.isEbook ? 'Add To Cart' : 'No Stock'}
            </button>
          : ''}
      </div>
    </div>
  );
};

export default BookCards;
