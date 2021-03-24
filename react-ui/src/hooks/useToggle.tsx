import { useState } from 'react';

const useToggle = (initialValue: boolean = false) => {
  const [toggled, setToggled] = useState(initialValue);

  const toggle = () => {
    setToggled((prev) => !prev);
  };

  return [toggled, toggle];
};

export { useToggle };
