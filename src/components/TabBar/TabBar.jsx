import React, { useEffect } from 'react'
import { Tabs,ConfigProvider } from 'antd';
import styles from "./TabBar.module.css"
import CollapseItem from '../CollapseItem/CollapseItem';

import {useDispatch,useSelector} from "react-redux"
import { postData } from '../../Redux/PostList';

const TabBar = () => {

  const dispatch=useDispatch()
  const {post,loading}=useSelector(state=>state.dataList)

useEffect(()=>{

 // dispatch(postData())  اینجا در لود اول دیتا نمایش داده میشه

},[])


    const { TabPane } = Tabs;

const onChange=(event)=>{
  switch (event) {
    case '1':
      return   // dispatch(postData())   اینجا درخواست به ریداکس فرستاده میشه
  
      case '2':
        return  /* other dispatch */
        case '3':
          return /* other dispatch */

        case '4':
          return /* other dispatch */

          case '5':
            return /* other dispatch */

           
    default:
      break;
  }
}


if(loading) return <h1>Loading......</h1>




  return (
    <div className={styles.tab}>
        <ConfigProvider direction='rtl'>
        <Tabs defaultActiveKey="1" 
        tabBarStyle={{backgroundColor:'#fff',padding:'0 10px'}}
        onChange={onChange}
        >
    <TabPane tab="دیروز" key="1" style={{paddingBottom:'100px'}}>

      {
     post && post.map(item=><CollapseItem data={item}/>)
      }


      
    </TabPane>
    <TabPane tab="امروز" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="فردا" key="3">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="جمعه" key="4">
      Content of Tab Pane 4
    </TabPane>
    <TabPane tab="31 خرداد" key="5">
      Content of Tab Pane 5
    </TabPane>
  </Tabs>
  </ConfigProvider>
    </div>
  )
}

export default TabBar