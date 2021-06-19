import React from "react"
import { useSelector } from "react-redux"
import {Redirect, Route} from "react-router-dom"

const AuthRoute = ({component: Component, ...rest}) => {

    const adminDetails = useSelector(state => state.adminLogin)
    const {adminInfo} = adminDetails

    return (
        <Route
            {...rest}
            render={props => !adminInfo ? <Redirect to='/login'/> : <Component {...props}/>}
        />
    )
}

export default AuthRoute