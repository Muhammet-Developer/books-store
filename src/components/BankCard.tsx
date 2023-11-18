
const BankCard = ({ formik }: { formik: any }) => {
  return (
    <div className='mr-5'>
      <div className="w-[350px] min-h-[200px] bg-[url('/bgBankCard.png')] bg-cover shadow-lg border rounded-md px-5">
        <div className='font-medium tracking-more-wider text-white text-3xl mt-20'>{formik?.cardNo ? formik?.cardNo : '**** **** **** ****'} </div>
        <div className='font-medium tracking-more-wider text-white text-2xl line-clamp-[18]'>{formik?.nameAndSurname ? formik?.nameAndSurname : 'Name Surname'}</div>
        <div className='flex justify-end gap-10 pb-5'>
          <div>
            <div className='font-medium tracking-more-wider text-white text-lg'>Expiry</div>
            <div className='font-medium tracking-more-wider text-white text-base text-center'>{formik?.date ? formik?.date : '--'}/{formik?.month ? formik?.month : '--'}</div>
          </div>
          <div>
            <div className='font-medium tracking-more-wider text-white text-lg'>cvv</div>
            <div className='font-medium tracking-more-wider text-white text-base text-center'>{formik?.cvc ? formik?.cvc : '---'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
