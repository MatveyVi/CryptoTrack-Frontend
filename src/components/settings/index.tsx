import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tab, Tabs } from '@heroui/react'
import React, { useState } from 'react'

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
    
const [selected, setSelected] = useState('profile   ')

    return (
        <Modal
            size='3xl'
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
            motionProps={{ // исправление отсутствия анимации табов из-за конфликта компонентов
                variants: {
                  enter: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.3,
                      ease: 'easeOut',
                    },
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.95,
                    transition: {
                      duration: 0.2,
                      ease: 'easeIn',
                    },
                  },
                },
              }} 
        >
            <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className='flex justify-center font-bold'>Настройки</ModalHeader>
                    <ModalBody>
                        <Tabs
                            fullWidth
                            color='primary'
                            size='lg'
                            selectedKey={selected}
                            onSelectionChange={(key) => setSelected(key as string)}
                            variant='light'
                            classNames={{
                                tabList: "bg-[#19172c] text-[#a8b0d3] border-r border-[#292f46]",
                                tab: "data-[selected=true]:text-white data-[selected=true]:bg-[#292f46] transition-all duration-300",
                                cursor: "bg-[#6f4ef2]",
                                panel: "bg-[#19172c] text-[#a8b0d3]",
                                
                              }}
                        >
                            <Tab key='profile' title='Профиль'>
                              
                            </Tab>

                            <Tab key='account' title='Аккаунт'>
                        
                            </Tab>

                            <Tab key='notification' title='Нотификации'>
                        
                            </Tab>
                        </Tabs>
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
    )
}
