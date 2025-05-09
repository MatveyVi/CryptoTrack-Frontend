import { Button, Modal as HeroModal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react'
import React, { JSX } from 'react'
import { PiSealWarningFill } from 'react-icons/pi';

type Props = {
    onOpen: () => void;
    isOpen: boolean;
    onOpenChange: () => void;
    header?: string;
    icon?: JSX.Element;
    text?: string;
    note?: string;
    button?: string;
}

export const Modal: React.FC<Props> = ({
    onOpen,
    isOpen,
    onOpenChange,
    header,
    icon,
    text,
    note,
    button,
}) => {
  return (
    <>
        <HeroModal
            backdrop="blur"
            classNames={{
            body: "py-6",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
            base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
            header: "border-b-[1px] border-[#292f46]",
            footer: "border-t-[1px] border-[#292f46]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={isOpen}
        radius="lg"
        onOpenChange={onOpenChange}
        
      >
            <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold">{header}</ModalHeader>
              <ModalBody>
                <div className="flex justify-center text-9xl text-green-500 drop-shadow-lg">
                    {/* <PiSealWarningFill /> */}
                    {icon}
                </div>
                <p className='font-semibold'>
                    {/* Мы отправили письмо для активации аккаунта. Перейдите по ссылке, чтобы завершить регистрацию. */}
                    {text}
                </p>
                <p className='text-small text-'>
                    {/* Если не видите сообщение, проверьте папку "Спам" */}
                    {note}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button fullWidth className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                  {/* Понял! */}
                  {button}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
        </HeroModal>
    </>
  )
}
