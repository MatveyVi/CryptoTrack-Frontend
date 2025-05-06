import { Navbar, NavbarBrand } from '@heroui/react'
import { SITE_NAME } from '../../constants'
import React from 'react'
import { DropDownButton } from '../dropdown-button'

export const Header = () => {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">{SITE_NAME}</p>
            </NavbarBrand>
            <DropDownButton />
            // добавить кнопки портфолио выйти и тп
        </Navbar>
    )
}
