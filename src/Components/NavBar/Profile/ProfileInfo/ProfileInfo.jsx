import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {

    return (
        <div className={s.profileBlock}>
            <div className={s.profileBar}>
                <img
                    src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q= "
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                <img className={s.avatarLogo} src="https://img.freepik.com/premium-vector/gamer-mascot-geek-boy-esports-logo-avatar-with-headphones-glasses-cartoon-character_8169-228.jpg?w=2000" alt="Avatar Logo"/>
                </div>
                <div className={s.discription}>
                    <div>Name: Dmitry</div>
                    <div>FirstName: Krasovskiy</div>
                    <div>Age: 27</div>
                    <div>Date of Birth: 29.03.1995</div>
                    <div>About myself: Привет меян зовут Дмитрий. Занимаюсь FrontEnd разработкой. В свободное время улучшаю свои качества в сфере IT разработки.</div>
                    <div>Education: Undergraduate Lawyer</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;