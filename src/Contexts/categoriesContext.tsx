import React, { createContext } from 'react';
import { CategorieProps, CategorieContextType } from './categoriesType';

interface ChildrenProps {
  children: React.ReactNode;
}

const categList: CategorieProps[] = [
  {
    id: 0,
    name: 'None',
    color: '#afafaf',
  },
  {
    id: 1,
    name: 'Home',
    color: '#FF9C9C',
  },
  { id: 2, name: 'School', color: '#FFD79C' },
  {
    id: 3,
    name: 'Shopping list',
    color: '#9CD0FF',
  },
];

export const CategoriesContext = createContext<CategorieContextType | null>(null);

export const CategoriesContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  return <CategoriesContext.Provider value={{ categList }}>{children}</CategoriesContext.Provider>;
};
