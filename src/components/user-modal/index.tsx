import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, User } from '@heroui/react'
import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';
import { Settings } from '../settings';

type Props = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    user: string;
    email: string;
    avatarUrl: string;
    button: string;
}

export const UserModal: React.FC<Props> = ({
    isOpen,
    onOpen,
    onClose,
    user,
    email,
    avatarUrl,
    button,
}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout())
        localStorage.removeItem('token')
        navigate('/auth')
    }

        const [isSettingsOpen, setIsSettingsOpen] = useState(false)
        const openSettings = () => setIsSettingsOpen(true)

  return (
    <>
    <Modal
        backdrop="blur"
        classNames={{
        body: "py-6",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10", 
        }} 
        isOpen={isOpen}
        radius='lg'
        onClose={onClose}
    >
        <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className='flex justify-center font-bold text-2xl'>
                    <User name={user} avatarProps={{src: `${avatarUrl}`}} />
                </ModalHeader>
                <ModalBody className='flex justify-center items-center font-bold'>
                    <p className='mb-4'>Почта: {email}</p>
                    <Button
                        className='font-bold'
                        color='primary'
                        size='md'
                        fullWidth
                        startContent={<IoMdSettings />}
                        onClick={openSettings}
                    >
                        Настройки
                    </Button>
                    <Button
                        className='font-bold'
                        color='danger'
                        size='md'
                        fullWidth
                        startContent={<FiLogOut/>}
                        onClick={handleLogout}
                    >
                        Выйти из аккаунта
                    </Button>
                </ModalBody>
                <ModalFooter>
                    <Button
                        fullWidth className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}
                    >
                        {button}
                    </Button>
                </ModalFooter>
                </>
            )}
        </ModalContent>
    </Modal>
    <Settings 
        isOpen={isSettingsOpen}
        onOpen={() => setIsSettingsOpen(true)}
        onClose={() => {
            setIsSettingsOpen(false)
        }}
        button='Сохранить'
    />
    </>
  )
}
