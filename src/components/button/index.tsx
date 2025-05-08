import React, { JSX } from 'react'
import { Button as HeroButton } from '@heroui/react'
import { S } from 'vitest/dist/chunks/config.d.UqE-KR0o.js';

type Props = {
    children: React.ReactNode;
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
    icon?: JSX.Element;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    color?:
    "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
    size?: 'sm' | 'md' | 'lg'
}

export const Button: React.FC<Props> = ({
    children,
    variant = 'light',
    icon,
    className,
    type,
    color = 'default',
    size = 'md'
}) => {
  return (
    <HeroButton
            startContent={icon}
            size={size}
            color={color}
            variant={variant}
            className={className}
            type={type}
    >
        {children}
    </HeroButton>
  )
}
