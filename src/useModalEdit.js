import { useState } from 'react';

const useModalEdit = () => {
  const [isShowingEdit, setIsShowingEdit] = useState(false);

  function toggleEdit() {
    setIsShowingEdit(!isShowingEdit);
  }

  return {
    isShowingEdit,
    toggleEdit,
  }
};

export default useModalEdit;