import React from 'react'
import s from './FriendMessage.module.css'
import {message0, MessageType} from '../HW1';

export type FriendPropsType = {
    message: MessageType
    message0: MessageType
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendPropsType) => {

    return (
        <div className={s.wrapper}>
<div className={s.avaAndTime}>
            <div className={s.friendImageAndText}>
                <img id={'hw1-friend-avatar-' + props.message.id}
                     src={props.message.user.avatar}
                />

            </div>

            <div id={'hw1-time-' + props.message.id} className={s.friendTime}>
                {/*создаёт студент*/ }
                {props.message.message.time}
                {/**/}
            </div>
</div>
            <div className={s.nameAndMessage}>

                <div id={'hw1-friend-name-' + props.message.id} className={s.friendName}>
                    {/*создаёт студент*/}
                    {props.message.user.name}
                    {/**/}
                </div>
                <div id={'hw1-text-' + props.message.id} className={s.messageText}>
                    {/*создаёт студент*/}
                    {props.message0.message.text}
                    {/**/}
                </div>
            </div>
        </div>
    )
}

export default FriendMessage
