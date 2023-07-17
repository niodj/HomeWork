import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (!name.trim()) {
        return setError('Ошибка! Введите имя!')
    }
    addUserCallback(name)
    setName('')
}


export const pureOnBlur = (name: string, setError: (error: string) => void) => { // если имя пустое - показать ошибку
    if (!name.trim()) {
        return setError('Ошибка! Введите имя!')
    }

}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: (name: string) => void) => {
    if (e.key === 'Enter') {
        addUser(e.currentTarget.value);
    }
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>("") // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        error && setError('');
    };
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            pureOnEnter(e, addUser);
        } else {
            setName('')
        }
    };

    const totalUsers = users.length
    const lastUserName = users[users.length - 1]?.name

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
