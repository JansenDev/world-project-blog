import React from 'react';
import { Route, Routes } from "react-router-dom";
import { IRoute, routes } from './routes';

function Navegation() {
    return (
        <>
            <Routes>
                {RenderRoutes(routes)}
            </Routes>
        </>
    )
}

function RenderRoutes(routes: IRoute[]) {
    const isEmpty = !routes || !routes.length

    if (isEmpty) return

    return routes.map((props: any, index) => (
        <Route key={index} caseSensitive {...props} >
            {RenderRoutes(props.children!)}
        </Route>
    ))
}

export default Navegation