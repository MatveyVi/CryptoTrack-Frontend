import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarContent, NavbarItem } from '@heroui/react'
import React from 'react'
import { BsCurrencyExchange } from 'react-icons/bs'
import { FaChevronDown } from 'react-icons/fa'
import { LuTrendingUpDown } from 'react-icons/lu'

export const DropDownButton = () => {
  return (
    <NavbarContent className='flex gap-4' justify='center'>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={<FaChevronDown />}
                                radius="sm"
                                variant="light"
                            >
                                Cryptocurrencies
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label='Cryptocurrencies variants'
                        itemClasses={{
                            base: "gap-4",
                          }}
                    >
                        <DropdownItem
                            key='market'
                            description='Изучите текущую капитализацию и рыночные данные криптовалют.'
                            startContent={<BsCurrencyExchange />} // icon
                        >
                            Market
                        </DropdownItem>
                        <DropdownItem
                            key='trending'
                            description='Откройте для себя самые горячие криптовалюты, которые сейчас в тренде.'
                            startContent={<LuTrendingUpDown />} // icon
                        >
                            Trending
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
  )
}
