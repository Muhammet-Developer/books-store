import BookCards from '../components/BookCards';

interface IProps {
  booksData: any
}
const HomeView = ({ booksData }: IProps) => {
  return (
    <div className="max-w-[1216px] mx-auto ">
      <div className="mt-10 flex flex-wrap justify-between gap-7 md:justify-center pb-5 mlg:justify-around">
        {booksData?.totalItems ? booksData?.items?.map((item: any, key: any) => (
          <div key={key} className='xl:mx-5'>
            <BookCards item={item} />
          </div>
        )) :
          <div className='mx-auto'>
            <img src="/search.gif" alt="" className='mx-auto' />
            <p className='text-center font-bold text-xl'>No products found according to the criteria you are looking for...</p>
          </div>}
      </div>
    </div>
  );
};

export default HomeView;