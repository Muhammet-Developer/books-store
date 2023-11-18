import { useState, useEffect } from 'react';
import { api } from '../services/book.service';
import {  useSelector } from 'react-redux';
import { basketSelector } from '../store/basket';
import { useNavigate } from 'react-router-dom';

interface INavbarProps {
    setBooksData: React.Dispatch<any>
}
const Navbar = ({ setBooksData }: INavbarProps) => {

  const { basket } = useSelector(basketSelector);

  //default search hugo 
  const [search, setSearch] = useState('hugo');
  const navigate = useNavigate();
  // const key = process.env.VITE_API_BASE_URL;
  // console.log(key)
  // function where books are thrown on request
  const booksFetch = async () => {
    const { data } = await api.get(`/volumes?q=${search}&key=${import.meta.env.VITE_API_KEY}&maxResults=40` );
    setBooksData(data);
  };

  // When the user clicks the enter key or search button, if the input is not empty, the booksFetch function works.
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (search?.length) {
      booksFetch();
    }
  };

  useEffect(() => {
    booksFetch();
  }, [basket?.length]);

  return (
    <>
      <div className='max-w-[1216px] mx-auto min-h-24 xl:mx-5 flex justify-between sm:flex-col sm:py-5 sm:gap-5 items-center'>
        <div className="flex items-center lg:flex-col">
          <img src="/booksStoreLogo.png" alt="Books-store" className="h-20 cursor-pointer" onClick={() => navigate('/')} />
          <p className="text-2xl font-serif text-[#16BDCA] ml-4 lg:ml-0 cursor-pointer" onClick={() => navigate('/')}>BooksStore.com</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex h-12 items-center sm:justify-center">
            <input type="search"  placeholder='Search for book title, author or publisher' onChange={(e: any) => setSearch(e.target.value)} className=" h-12 w-80 xs:w-72 px-3 py-2 bg-white border border-slate-300 rounded-l-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
            <div className="bg-[#16BDCA] h-12 flex p-2 cursor-pointer" onClick={handleSubmit}>
              <img src="/search.svg" alt="search" width={30} />
            </div>
          </div>
        </form>
        <div className='sm:mx-auto' onClick={()=> navigate('/basket')}>
          <div className="relative cursor-pointer ">
            <div className='bg-[#E20714] rounded-full w-6 h-6 text-center pb-1 absolute left-[32px] top-2 text-white '>{basket?.length}</div>
            <img src="/basket.svg" alt="search" width={50} />
          </div>
        </div>
      </div>
      <div className='border-b-2 '></div>
    </>
  );
};

export default Navbar;
