import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.css'

function MainPage({user}) {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(()=>{
        if(user){
            setUserInfo(user);
        }
    },[user])
    if(!userInfo) return null;
    return (
        <div>
            <h2 className={styles.list}>добро пожаловать {userInfo.name} {userInfo.lastname}, мы тебя ждали!</h2>
        </div>
    );
}

export default MainPage;