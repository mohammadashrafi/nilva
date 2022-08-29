import React from 'react'
import FloatBox from '../floatBox/FloatBox'
import Headers from '../Headers/Headers'
import SearchBox from '../SearchBox/SearchBox'
const Layout = ({children}) => {
  return (
    <>
 <Headers/>
    <SearchBox/>
    {children}
    <FloatBox/>
    </>
  )
}

export default Layout