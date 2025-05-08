import React, { JSX } from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
    icon: JSX.Element;
    href: string;
    color?:
    "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    size?: 'sm' | 'md' | 'lg'
}

export const NavButton: React.FC<Props> = ({
    children,
    icon,
    href,
    variant = 'light',
    size,
    color = 'default'
}) => {
  return (
    <Button className='flex justify-start text-md' icon={icon} variant={variant} size={size} color={color}>
        <Link to={href}>
            {children}
        </Link>
    </Button>
  )
}
