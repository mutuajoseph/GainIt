import React from 'react'
import styled from 'styled-components'
import {  FaUserCircle } from 'react-icons/all'
import '../App.css'

const HeaderNav = () => {
    return (
        <HeaderWrap>
          <div>
            <div></div>
            <FaUserCircle className="user-icon"/>
            <span>John Doe</span>
          </div>
        </HeaderWrap>
    )
}

export default HeaderNav

const HeaderWrap = styled.div`
  /* border: 1px solid #111; */
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 .4rem;

  > div span {
    margin-left: .6rem;
  }
`
