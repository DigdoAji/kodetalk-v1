import { useState } from 'react';

const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return [value, setValue];
};

export default useInput;
