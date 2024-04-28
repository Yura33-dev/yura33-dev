/* eslint-disable react/prop-types */
import { createContext } from 'react';

export const BlogContext = createContext({});

function BlogContextProvider({ children, value }) {
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}

export default BlogContextProvider;
