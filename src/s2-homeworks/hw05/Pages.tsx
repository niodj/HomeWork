import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>

            <Routes>
                <Route path={'/pre-junior*/'} element={PATH.PRE_JUNIOR}></Route>
                <Route path={'/junior*/'} element={PATH.JUNIOR}></Route>
                <Route path={'/junior-plus*/'} element={PATH.JUNIOR_PLUS}></Route>
            </Routes>
        </div>
    )
}

export default Pages
