import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useLazyCurrentQuery, useLoginMutation } from '../../app/services/userApi';
import { useNavigate, useNavigation } from 'react-router-dom';
import { hasErrorField } from '../../utils/has-error-field';
import { Input } from '../../components/input';
import { AlertMessage } from '../../components/alert-message';
import { Button, Link } from '@heroui/react';
import { useLazyMarketQuery } from '../../app/services/coinApi';


type Login = {
    email: string;
    password: string;
}
type Props = {
    setSelected: (valus: string) => void;
}

export const Login: React.FC<Props> = ({
    setSelected
}) => {
    const {
        handleSubmit,
        control,
        formState: { errors }
      } = useForm<Login>({
        mode: 'onSubmit',
        reValidateMode: 'onBlur',
        defaultValues: {
          email: '',
          password: '',
        }
      })

    const [login, { isLoading }] = useLoginMutation()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [triggerCurrentQuery] = useLazyCurrentQuery()

    const onSubmit = async (data: Login) => {
        try {
            await login(data).unwrap()
            navigate('/home')
            window.location.reload();
        } catch (error) {
            if (hasErrorField(error)) {
                setError(error.data.error)
            }
        }
    }

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
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
            <AlertMessage error={error} />
            <p className='text-center text-small'>
                Нет аккаунта?{" "}
                <Link
                    size='sm'
                    className='cursor-pointer'
                    onPress={() => setSelected('sign-up')}
                >
                    Зарегистрируйтесь
                </Link>
            <div className="flex gap-2 justify-end mt-7">
                <Button fullWidth color='primary' type='submit' isLoading={isLoading}>
                    Войти
                </Button>
            </div>
            </p>
        </form>
    )
}
