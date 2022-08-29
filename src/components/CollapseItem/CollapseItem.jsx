import React from 'react'
import { Collapse } from 'antd';
import {UpOutlined,DownOutlined} from '@ant-design/icons';
import styles from "./CollapseItem.module.css"
const CollapseItem = ({data}) => {

    const { Panel } = Collapse;

  return (
    <div className='collapseItems'>
       
        <Collapse
        accordion
       bordered={false}
        expandIcon={({ isActive }) => isActive ? <DownOutlined />: <UpOutlined />}
        defaultActiveKey={['1']}
        className={styles.collaps}
        
        //onChange={onChange}
       
      >
        <Panel header={data && data.title} key="1" >
          <div className={styles.wrapperCollapse}>
            <ul>

        {
       data && data.info.map(items=>{
            return (
              <>
            <li> {items.firstTim} <img src={items.imageFirst} alt="logo"/></li>
              <li>{items.time}</li>
              <li><img src={items.imageSecond} alt="logo"/> {items.secondTim}</li>
              </>
            )
          })
        }

              
              </ul>

          </div>
        </Panel>
       
      </Collapse>
      
    </div>
  )
}

export default CollapseItem