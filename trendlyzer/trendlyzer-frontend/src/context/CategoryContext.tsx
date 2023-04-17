import React, { createContext, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { ICategoryContext } from '../models/ContextModel';
import categoryList from '../config/categories';

const defaultState = {
  categoryList: [...categoryList],
  selectedCategory: '',
  handleCategoryChange: () => {},
};

export const CategoryContext = createContext<ICategoryContext>(defaultState);

const CategoryProvider = ({ children }: any) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (value: SelectChangeEvent) =>
    setSelectedCategory(value.target.value);

  return (
    <CategoryContext.Provider
      value={{
        categoryList: defaultState.categoryList,
        selectedCategory,
        handleCategoryChange,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
