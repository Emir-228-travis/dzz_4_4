import React, {useEffect, useState} from 'react';
import styles from './ErrorPage.module.css'

function ErrorPage({user}) {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(()=>{
        if(user){
            setUserInfo(user);
        }
    },[user])
    if(!userInfo) return null;
    return (
        <div>
            <h2 className={styles.page}>Тебe сюда нельзя - {user.name} {userInfo.lastname}</h2>
        </div>
    );
}

export default ErrorPage;