import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react'
import React from 'react'

type Props = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    button: string
}

export const Settings: React.FC<Props> = ({
    isOpen,
    onClose,
    onOpen,
    button,
}) => {
    
    return (
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
                    <ModalHeader className='flex justify-center font-bold'>Настройки</ModalHeader>
                    <ModalBody></ModalBody>
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
    )
}
