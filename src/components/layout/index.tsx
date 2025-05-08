import React from 'react'
import { Header } from '../header'
import { Container } from '../container'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <Header />
        <Container>
          <Outlet />
        </Container>
    </>
  )
}
