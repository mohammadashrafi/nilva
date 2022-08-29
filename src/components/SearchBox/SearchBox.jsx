import React from 'react'
import { Input} from 'antd';
import styles from './SearchBox.module.css'
const SearchBox = () => {

    const { Search } = Input;


  return (
    <div className='wrapperSearch'>
<Search placeholder="جستجو"
 //onSearch={onSearch}
 className={styles.search}
 
  bordered={false}
   />
    </div>
  )
}

export default SearchBox