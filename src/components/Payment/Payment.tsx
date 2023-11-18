import { useState } from 'react';
import { useFormik } from 'formik';
import { IPayment } from '../../types/Payment';
import BankCard from '../BankCard';
import { useDispatch, useSelector } from 'react-redux';
import { SET_RESET, basketSelector } from '../../store/basket';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { month, year } from './data';
import { validationSchema } from './paymentSchema';
const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { totalAmount } = useSelector(basketSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues: IPayment = {
    nameSurname: '',
    cardNo: '',
    cvc: '',
    date: '1',
    month: '23',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate('/');
        dispatch(SET_RESET());
        toast.success('Payment Completed Successfully');
      }, 2000);
    },
  });

  // only need to enter numbers and the function to divide into groups of 4 digits
  const handleCardNumberChange = (e: any) => {
    let formattedCardNumber = e.target.value.replace(/\D/g, '');
    formattedCardNumber = formattedCardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
    formik.setFieldValue('cardNo', formattedCardNumber);
  };

  return (
    <div className='flex justify-between '>
      <div className='flex  md:mt-5 '>
        <div className='rounded-xl px-3'>
          <form onSubmit={formik.handleSubmit}>
            <div className=' h-12 border-b-2 text-center pt-2'>
            Payment Information
            </div>
            <div className='border border-red-500 mx-10 text-center p-4 rounded-lg mt-4'>
            Debit/Credit Card
            </div>
            <div>
              <div className='flex flex-col '>
                <label htmlFor='nameSurname' className='mt-3'>
                  {' '}
                  Name on Card
                </label>
                <input
                  type='text'
                  name='nameSurname'
                  id='nameSurname'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 w-96 sm:w-full'
                  value={formik.values.nameSurname || ''}
                  onChange={formik.handleChange}
                />
                {formik.errors.nameSurname && formik.touched.nameSurname && (
                  <div className='text-rose-500'>{formik.errors.nameSurname}</div>
                )}
              </div>
              <div className='flex flex-col '>
                <label htmlFor='cardNo' className='mt-3'>
                  {' '}
                  Card Number
                </label>
                <input
                  type='tel'
                  name='cardNo'
                  id='cardNo'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#EEEEEE] '
                  placeholder='XXXX XXXX XXXX XXXX'
                  // pattern='[\d| ]{16,22}'
                  maxLength={19}
                  value={formik.values.cardNo || ''}
                  onChange={handleCardNumberChange}
                />
                {formik.errors.cardNo && formik.touched.cardNo && (
                  <div className='text-rose-500'>{formik.errors.cardNo}</div>
                )}
              </div>
              <div className='flex mt-2 w-full '>
                <div className='flex flex-col justify-between w-full'>
                  <label htmlFor='creditCard'> Expiry Date</label>
                  <div className='flex'>
                    <div className='w-[50%]'>
                      <label htmlFor='month'>Ay</label>

                      <select
                        className='bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-[#EEEEEE]'
                        name='month'
                        id='month'
                      >
                        {month.map((item, key) => (
                          <option value={item.month} key={key}>
                            {item.month}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='w-[50%] ml-2'>

                      <label htmlFor='years' >Year</label>
                      <select
                        className='bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-[#EEEEEE]'
                        name='years'
                        id='years'
                      >
                        {year.map((item, key) => (
                          <option value={item.year} key={key}>
                            {item.year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col mt-3'>
                <label htmlFor='cvc '> CVC</label>
                <input
                  type='text'
                  pattern='^[0-9]{3,4}$'
                  inputMode='numeric'
                  name='cvc'
                  id='cvc'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-[#EEEEEE] '
                  placeholder='cvc'
                  maxLength={3}
                  value={formik.values.cvc || ''}
                  onChange={(e) => formik.setFieldValue('cvc', e.target.value.replace(/[^0-9]/g, ''))}
                />
                {formik.errors.cvc && formik.touched.cvc && (
                  <div className='text-rose-500 '>
                    {formik.errors.cvc}
                  </div>
                )}
              </div>
            </div>
            <button
              type='submit'
              disabled={totalAmount > 1 ? false:true}
              className='bg-blue-800 text-white  py-4 rounded-xl text-xl  mt-5 w-full mb-2 disabled:bg-slate-400'
            >
              {isLoading ? (
                <div role='status' className='flex justify-center'>
                  <svg
                    aria-hidden='true'
                    className='w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='currentColor'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentFill'
                    />
                  </svg>
                </div>
              ) : (
                <p>{totalAmount}</p>
              )}{' '}
              {!isLoading && ' MAKE TL PAYMENT'}
            </button>
          </form>
        </div>
      </div>
      <BankCard formik={formik?.values} />
    </div>
  );
};

export default Payment;