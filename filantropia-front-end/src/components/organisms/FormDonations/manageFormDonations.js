export const validateForm = (values) => {
  const errors = {};

  // if (!values.firstName) {
  //   errors.firstName = "Required";
  // } else if (values.firstName.length > 15) {
  //   errors.firstName = "Must be 15 characters or less";
  // }

  // if (!values.page) {
  //   errors.page = "Required";
  // }

  // if (!values.email) {
  //   errors.email = "Required";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = "Invalid email address";
  // }

  return errors;
};

export const INITIAL_VALUES = {
  typeDocument: "",
  document: "",
  names: "",
  surnames: "",
  tel: "",
  genre: "",
  email: "",
  civilStatus: "",
  calendar: "",
  country: "",
  department: "",
  city: "",
  donationFund: "",
  valueOfDonation: "",
  recurrence: false,
  findUs: "",
  wayToPay: "",
  accept: false,
};
