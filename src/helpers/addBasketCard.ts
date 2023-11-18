import { store } from '../store';
import { SET_BASKET } from '../store/basket';
import { Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// function that will run when you click the add to cart button
export const addToCart = (item: any, dispatch: Dispatch) => {
    const baskets = store.getState().basket.basket;
    dispatch(SET_BASKET([...baskets, item]));
    toast.info('Product added to shopping cart');
};
