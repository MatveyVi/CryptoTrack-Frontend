import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRegisterMutation } from '../../app/services/userApi';
import { useNavigate } from 'react-router-dom';
import { hasErrorField } from '../../utils/has-error-field';
import { isErrored } from 'stream';
import { Input } from '../../components/input';
import { AlertMessage } from '../../components/alert-message';
import { Button, Link, useDisclosure } from '@heroui/react';
import { Modal } from '../../components/modal';
import { PiSealWarningFill } from 'react-icons/pi';

type Register = {
  name: string;
  email: string;
  password: string;
}

type Props = {
  setSelected: (value: string) => void;
}

export const Register: React.FC<Props> = ({
  setSelected
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Register>({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  })

  const [register, { isLoading }] = useRegisterMutation()
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSubmit = async (data: Register) => {
    try {
      await register(data).unwrap()
      setIsModalOpen(true)
    } catch (error) {
      if (hasErrorField(error)) {
        setError(error.data.error)
      }
    }
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
      <Modal 
        isOpen={isModalOpen} 
        onOpen={() => setIsModalOpen(true)}
        onOpenChange={() => {
          setIsModalOpen(false)
          setSelected('login')
        }}
        header='Почти готово!'
        icon={<PiSealWarningFill />}
        text='Мы отправили Вам письмо для активации аккаунта на почту. Перейдите по ссылке в письме, чтобы завершить регистрацию.'
        note='Если не видите сообщение, проверьте папку "Спам"'
        button='Понял!'
      />
      <Input
        control={control}
        name='name'
        label='Имя'
        type='text'
        required='Обязательное поле'
      />
      <Input
        control={control}
        name='email'
        label='Email'
        type='email'
        required='Обязательное поле'
      />
      <Input
        control={control}
        name='password'
        label='Пароль'
        type='password'
        required='Обязательное поле'
      />
      <p className='text-center text-small'>
        Уже есть аккаунт?{" "}
        <Link 
          size='md'
          className='cursor-pointer'
          onPress={() => setSelected('login')}
        >
          Войдите
        </Link>
        <div className="flex gap-2 justify-end mt-7">
          <Button fullWidth color='primary' type='submit' isLoading={isLoading}>
            Зарегистрироваться
          </Button>
        </div>
      </p>
      <AlertMessage error={error} />
    </form>
  )
}
