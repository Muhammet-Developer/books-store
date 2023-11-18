import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import Navbar from './components/Navbar';
import BookDetailView from './views/BookDetailView';
import BasketView from './views/BasketView';
import PaymentView from './views/PaymentView';
import NotFoundView from './views/NotFoundView';

const Router = () => {
  const [booksData, setBooksData] = useState<any>();
    
  return (
    <>
      <Navbar setBooksData={setBooksData}/>
      <Routes>
        <Route path="/" element={<HomeView booksData={booksData}/>} />
        <Route path="/bookDetail/:name" element={<BookDetailView/>} />
        <Route path="/basket" element={<BasketView/>} />
        <Route path="/payment" element={<PaymentView/>} />

        {/* 404 Page */}
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </>
  );
};

export default Router;