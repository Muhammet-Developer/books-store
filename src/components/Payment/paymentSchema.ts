import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    nameSurname: Yup.string().required('Please enter the name of the Cardholder'),
    cardNo: Yup.string()
      .required('Please enter Card Number')
      .max(19, 'You can enter up to 50 characters in this field.')
      .min(16, 'You must enter at least 2 characters in this field')
      .matches(
        /^\d{4}( \d{4}){3}$/,
        'Enter the credit card number in the correct format'
      ),
    cvc: Yup.string()
      .required('Please enter 3 digit CVC')
      .max(3, 'Please enter 3 digit CVC')
      .min(3, 'Please enter 3 digit CVC'),
    date: Yup.string(),
    month: Yup.string(),
  });