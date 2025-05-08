import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import { SITE_NAME } from '../../constants'
import React from 'react'
import { DropDownButton } from '../dropdown-button'
import { NavButton } from '../nav-button'
import { VscGraph } from 'react-icons/vsc'
import { MdFavorite } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../../features/user/userSlice'
import { Button } from '../button'
import { IoMdLogIn } from 'react-icons/io'




export const Header = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated)
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit text-xl">{SITE_NAME}</p>
            </NavbarBrand>
            <DropDownButton />
            <NavbarContent justify='end'>
                <NavbarItem>
                    <NavButton href='portfolio' icon={<VscGraph />}>
                        Portfolio
                    </NavButton>
                </NavbarItem>
                <NavbarItem>
                    <NavButton href='watchlist' icon={<MdFavorite />}>
                        Watchlist
                    </NavButton>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
                    <NavbarItem className='text-xl'>
                        {
                            isAuthenticated ? (
                                <Button>
                                    Profile(dev)
                                </Button>
                            ) :
                                (
                                    <NavButton href='auth' icon={<IoMdLogIn />} color='primary' variant='shadow' size='md'>
                                        Sign in
                                    </NavButton>
                                )
                        }
                    </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
