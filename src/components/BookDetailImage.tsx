import { useLocation } from 'react-router-dom';

const BookDetailImage = () => {
  const { state } = useLocation();

  return (
    <div>
      {/* If imageLinks is available, add the image of the relevant book, otherwise add the default image */}
      {state?.volumeInfo?.imageLinks ?
        <img src={state?.volumeInfo?.imageLinks?.thumbnail} alt="" className=" mx-auto" width={300} />
        : <img src='/coverNotAvailable.jpg' alt="" className=" mx-auto" width={300} />}
    </div>
  );
};

export default BookDetailImage;
