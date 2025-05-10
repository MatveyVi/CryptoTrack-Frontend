import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react'
import React from 'react'

type Props = {
    isOpen: boolean;
    onClose: () => void;
    user: string;
}

export const UserModal: React.FC<Props> = ({
    isOpen,
    onClose,
    user,

}) => {
  return (
    <Modal
        backdrop="blur"
        classNames={{
        body: "py-6",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10", 
        }} 
    >
        <ModalContent>
            <ModalHeader className='font-semibold text-lg'>{user}</ModalHeader>
            <ModalBody>

            </ModalBody>
            <ModalFooter>
                <Button
                    fullWidth className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}
                >

                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}
