import React from 'react'
import styles from "./Floatbox.module.css"
import {NavLink} from "react-router-dom"
import { CarryOutOutlined,FolderViewOutlined,SlackOutlined,SketchOutlined,UserOutlined } from '@ant-design/icons';
const FloatBox = () => {
  return (
    <div className={styles.wrapperFloat}>
        <ul>
            <li><NavLink end activeClassName={styles.Active} to="/" className={event => event.isActive ? styles.Active : styles.inActive }> <span>مسابقات</span> <CarryOutOutlined style={{fontSize:'30px'}}/></NavLink></li>
            <li><NavLink to="/explo" className={event => event.isActive ? styles.Active : styles.inActive }> <span>اکتشاف</span><FolderViewOutlined style={{fontSize:'30px'}}/></NavLink></li>
            <li><NavLink to="/football" className={event => event.isActive ? styles.Active : styles.inActive }> <span>فوتبال</span><SlackOutlined style={{fontSize:'30px'}}/></NavLink></li>
            <li><NavLink to="/legs" className={event => event.isActive ? styles.Active : styles.inActive }><span>لیگ ها</span><SketchOutlined style={{fontSize:'30px'}}/></NavLink></li>
            <li><NavLink to="/profile" className={event => event.isActive ? styles.Active : styles.inActive }> <span>پروفایل</span><UserOutlined style={{fontSize:'30px'}}/></NavLink></li>
        </ul>

    </div>
  )
}

export default FloatBox