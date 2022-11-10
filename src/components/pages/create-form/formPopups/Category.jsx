import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// import SearchIcon from './icons/search.svg';

const animatedComponents = makeAnimated();

const options = [
  { label: 'Technology', value: 'technology' },
  { label: 'Development', value: 'development' },
];

const Styles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: '#F1F4F8',
    width: '741px',
    position: 'absolute',
    left: '24px',
    top: '66px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#CECECE',
    borderRadius: '16px',
  }),
  option: (styles) => ({
    ...styles,
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: 'rgba(102, 95, 239, 0.2)',
    borderRadius: '32px',
    borderColor: '#793EF5',
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: '#793EF5',
    cursor: 'pointer',
    ':hover': {
      color: 'white',
    },
  }),
  multiValueLabel: (styles) => ({ ...styles, color: '#793EF5' }),
  placeholder: (styles) => ({
    ...styles,
    color: 'rgba(47, 48, 49, 0.54)',
    fontFamily: 'Space Grotesk',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
  }),
};

function Category({ onChange, onInputChange }) {
  const [selectedOptions, setSelectedOptions] = useState('');
  console.log(selectedOptions);

  return (
    <div className="Pops category">
      <span className="Pops text">Category</span>
      <Select
        components={animatedComponents}
        isClearable={false}
        styles={Styles}
        onChange={(item) => setSelectedOptions(item)}
        onInputChange={onInputChange}
        options={options}
        isMulti
        placeholder={'Search Category'}
        closeMenuOnSelect={false}
      ></Select>
    </div>
  );
}
export default Category;
