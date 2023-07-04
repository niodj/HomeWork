import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import { Link } from 'react-router-dom';


/*
* 1 - описать тип MessageType*
* 2 - описать тип MessagePropsType в файле Message.tsx*
* 3 - в файле Message.tsx отобразить приходящие данные*
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx*
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: {
        avatar: string
        name: string
    }
    message: {
        text: string
        time: string
    }
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Some Name'  // можно менять
    },
    message: {
        text: 'some textsome textkfdjghldkfjl ksjdfglkjsdf h lsfdjh lsdfj lkdfsj gld fjhgldsfjg ldkfj gldjfgl djfhg lkjdsfh ljdsf gkjdsfl gjhsdflj gsdlfj glsdkfjgl sdkjfgl ksjdfh glkjsd kljd some textsome textsome textsome textsome text', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Friend Name', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css', // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <a href="https://www.figma.com/file/9L5iRbECtW4vAnlUklpgcp/Home-Task-%231?type=design&node-id=6-37&mode=design&t=k5iZOqkNKz6hV8L3-0" target="_blank">figma</a>
            <div className={s2.hwTitle}>Homework #1</div>
            <hr/>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0} message0={message0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
