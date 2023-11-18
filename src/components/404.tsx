import { useNavigate } from 'react-router-dom';
const Page404 = () => {
    const navigate = useNavigate();
    return (
        <div className='max-w-[1216px] mx-auto pt-20 '>
            <div className='px-40 py-20  '>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-[#16BDCA] text-9xl'>404</h1>
                    <h6 className='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
                        <span className='text-red-500'>Oops!</span> Page not found
                    </h6>
                    <p className='mb-8 text-center text-gray-500 md:text-lg'>
                        The page you’re looking for doesn’t exist.
                    </p>
                    <button onClick={() => navigate('/')} className="h-10 w-24 bg-[#16BDCA] text-white font-medium mt-3 text-center  rounded-lg hover:bg-slate-200 duration-500 hover:duration-500 hover:text-black">
                        Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page404;
