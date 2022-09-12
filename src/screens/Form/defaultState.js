export const defaultState = {
  imageUpload: {
    imagePath: {},
    sheetSnap: ['20%'],
  },
  agePicker: {
    label: 'Age',
    age: undefined,
    ageArray: [10, 20, 30, 40, 50, 60, 70],
    sheetSnap: ['60%'],
    placeholder: 'Select Age',
  },
  name: {
    value: '@hkrhasan',
    edit: false,
  },
  firstName: {
    label: 'First Name',
    value: '',
    error: '',
    maxLength: 8,
    minLength: 0,
    minLengthError: 'FirstName must be 8 characters',
  },
  phone: {
    value: '',
    error: '',
    length: 10,
    label: 'Phone',
  },
  country: {
    data: [
      {label: 'India', value: 'india'},
      {label: 'China', value: 'china'},
      {label: 'Pakistan', value: 'pakistan'},
      {label: 'USA', value: 'usa'},
    ],
    value: null,
    label: 'Select country',
    zIndex: 10,
  },
  state: {
    data: [
      {label: 'Delhi', value: 'delhi'},
      {label: 'Chennai', value: 'Chennai'},
      {label: 'Mumbai', value: 'Mumbai'},
      {label: 'Punjab', value: 'Punjab'},
    ],
    values: [],
    label: 'Select States',
  },
  about: {
    value: '',
    error: '',
    label: '',
  },
  radios: {
    data: [
      {id: 1, label: 'Male', selected: true},
      {id: 2, label: 'Female', selected: false},
      {id: 3, label: 'Others', selected: false},
    ],
    label: 'Gender',
  },
  quantity: {
    value: 0,
    min: 0,
    max: 10,
    label: 'Quantity',
  },
  date: {
    value: new Date(),
    placeholder: 'dd-mm-yyyy',
    dateFormat: 'dd-MM-yyyy',
    label: 'DOB',
  },
  slider: {
    sliderValue: {value: 0.2},
  },
  checks: {
    data: [
      {title: 'I agree', checked: true},
      {title: 'I agree', checked: false},
    ],
  },
};

// export const resetState = managers => {
//   const {
//     // image upload controllers
//     setImagePath,
//     setImageSnapPoints,
//     setLaunchType,
//     closeImageSheet,
//     // age picker controller
//     setAge,
//     setAgeSnapPoints,
//     closeAgeSheet,
//   } = managers || {};
// };
