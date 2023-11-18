import BookDetailImage from '../components/BookDetailImage';
import BookDetail from '../components/BookDetail';

const BookDetailView = () => {
  return (
    <div className='max-w-[1216px] mx-auto pt-20 flex md:flex-col md:justify-center'>
      <div className='w-[40%] md:w-full'>
        <BookDetailImage />
      </div>
      <div className='w-[60%] md:w-full md:px-5 xl:mr-5 md:py-5'>
        <BookDetail />
      </div>
    </div>
  );
};

export default BookDetailView;
