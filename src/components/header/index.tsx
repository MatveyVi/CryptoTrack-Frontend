import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import { SITE_NAME } from '../../constants'
import React, { useState } from 'react'
import { DropDownButton } from '../dropdown-button'
import { NavButton } from '../nav-button'
import { VscGraph } from 'react-icons/vsc'
import { MdFavorite } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { selectCurrent, selectIsAuthenticated } from '../../features/user/userSlice'
import { IoMdLogIn } from 'react-icons/io'
import { UserCard } from '../user-card'




export const Header = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const user = useSelector(selectCurrent)

    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const openModal = () => setIsProfileOpen(true)
    const closeModal = () => setIsProfileOpen(false)
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
                                <Button
                                    onClick={setIsProfileOpen(true)}
                                >
                                    <UserCard 
                                        name={user?.name || ''}
                                        avatarUrl={user?.avatarUrl || ''}
                                    />
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
