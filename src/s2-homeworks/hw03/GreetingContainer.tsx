import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: any // need to fix any
}

export const pureAddUser = (name: any, setError: any, setName: any, addUserCallback: any) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (!name.trim()) {
        return setError('Ошибка! Введите имя!')
    }
    addUserCallback(name)
    setName('')
}


export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
    if (!name.trim()) {
        return setError('Ошибка! Введите имя!')
    }

}

export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter'){addUser(e.target.value)}

}

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

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e)
        pureOnEnter(e, addUser)

    }

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
