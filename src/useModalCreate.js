import { useState } from 'react';

const useModalCreate = () => {
  const [isShowingCreate, setIsShowingCreate] = useState(false);

  function toggleCreate() {
    setIsShowingCreate(!isShowingCreate);
  }

  return {
    isShowingCreate,
    toggleCreate,
  }
};

export default useModalCreate;