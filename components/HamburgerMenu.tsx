import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { Page } from "../interfaces"
import Link from "next/link"

type HamburgerMenuProps = {
    pages: Page[]
}

export default function HamburgerMenu({ pages }: HamburgerMenuProps) {
    return (
        <Menu as="div" className="relative z-20 inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    {({ open }) =>
                        open ? (
                            <XMarkIcon className="w-8 h-8 lg:w-10 lg:h-10 " />
                        ) : (
                            <Bars4Icon className="w-8 h-8 lg:w-10 lg:h-10 " />
                        )
                    }
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-screen p-16 mt-2 -mr-8 origin-top-right bg-zinc-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {pages.map((page: Page, index: number) => (
                        <Menu.Item key={index}>
                            {/* Div is needed to prevent console warning about passing href */}
                            <div>
                                <Link
                                    href={page.link}
                                    passHref
                                    className="flex items-center w-full px-2 py-2 text-xl text-white group hover:bg-slate-700"
                                >
                                    {page.navTitle}
                                </Link>
                            </div>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
