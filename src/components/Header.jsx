import { useDisclosure } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react"
import { IoIosSearch, IoMdMenu } from "react-icons/io"
import { Link, useNavigate } from "react-router-dom"

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react"
import { IoClose } from "react-icons/io5"
import axios from "axios"
import { imgURL, BASE_URL } from "../utilities/URL"

export default function Header({ categories, onLogoClick }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestData, setSuggestData] = useState(null)
  const navigate = useNavigate()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // State to track dropdown visibility
  const dropdownRef = useRef(null) // Ref for the dropdown
  const inputRef = useRef(null) // Ref for the input field

  return (
    <>
      <div className="text-white bg-white w-full">
        <header
          id="sticky-header"
          class="absolute left-0 top-[15px] lg:top-[30px] xl:top-[40px] w-full z-10 is-sticky"
        >
          <div class="container">
            <div class="grid grid-cols-12">
              <div class="col-span-12">
                <div class="flex flex-wrap items-center justify-between">
                  <Link to="/" class="block">
                    <img
                      class="w-full h-full white-logo"
                      src="https://htmldemo.net/bery/bery/assets/images/logo/logo.svg"
                      loading="lazy"
                      width="99"
                      height="46"
                      alt="brand logo"
                    />
                    <img
                      class="w-full h-full hidden dark-logo"
                      src="https://htmldemo.net/bery/bery/assets/images/logo/logo.svg"
                      loading="lazy"
                      width="99"
                      height="46"
                      alt="brand logo"
                    />
                  </Link>
                  <nav class="flex flex-wrap items-center">
                    <ul class="hidden lg:flex flex-wrap items-center font-lora text-[16px] xl:text-[18px] leading-none text-black">
                      <li class="mr-7 xl:mr-[40px] relative group py-[20px]">
                        <Link
                          to="/"
                          class="sticky-dark transition-all text-white hover:text-secondary"
                        >
                          Home
                        </Link>
                      </li>
                      <li class="mr-7 xl:mr-[40px] relative group py-[20px]">
                        <a
                          href="about"
                          class="sticky-dark transition-all text-white hover:text-secondary"
                        >
                          About
                        </a>
                      </li>
                      <li class="mr-7 xl:mr-[40px] relative group py-[20px]">
                        <a
                          href="#"
                          class="sticky-dark transition-all text-white hover:text-secondary"
                        >
                          Properties
                        </a>
                      </li>
                      <li class="mr-7 xl:mr-[40px] relative group py-[20px]">
                        <a
                          href="#"
                          class="sticky-dark transition-all text-white hover:text-secondary"
                        >
                          Pages
                        </a>
                      </li>

                      <li class="mr-7 xl:mr-[40px] relative group py-[20px]">
                        <a
                          href="#"
                          class="sticky-dark transition-all text-white hover:text-secondary"
                        >
                          Blog
                        </a>
                      </li>
                      <li class="mr-7 xl:mr-[40px] relative group py-[20px]">
                        <a
                          href="contact-us"
                          class="sticky-dark transition-all text-white hover:text-secondary"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>

                    <ul class="flex flex-wrap items-center">
                      <li class="sm:mr-5 xl:mr-[20px] relative group">
                        <a href="#">
                          <img
                            src="https://htmldemo.net/bery/bery/assets/images/user/avater.png"
                            loading="lazy"
                            width="62"
                            height="62"
                            alt="avater"
                          />
                        </a>

                        <ul
                          class="list-none bg-white drop-shadow-[0px_6px_10px_rgba(0,0,0,0.2)] rounded-[12px] flex flex-wrap flex-col w-[180px] absolute top-[120%] sm:left-1/2 sm:-translate-x-1/2 transition-all
                group-hover:top-[60px] invisible group-hover:visible opacity-0 group-hover:opacity-100 right-0
                
                "
                        >
                          <li class="border-b border-dashed border-primary border-opacity-40 last:border-b-0 hover:border-solid transition-all">
                            <Link
                              to={"/login"}
                              class="font-lora leading-[1.571] text-[14px] text-primary p-[10px] capitalize block transition-all hover:bg-secondary hover:text-white text-center my-[-1px] rounded-t-[12px]"
                            >
                              login
                            </Link>
                          </li>

                          <li class="border-b border-dashed border-primary border-opacity-40 last:border-b-0 hover:border-solid transition-all">
                            <Link
                              to={"/signup"}
                              class="font-lora leading-[1.571] text-[14px] text-primary p-[10px] capitalize block transition-all hover:bg-secondary hover:text-white text-center my-[-1px] rounded-b-[12px]"
                            >
                              register
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          href="add-properties"
                          class="sticky-btn before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-white before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto hover:text-primary before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium text-white hidden sm:block text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-secondary after:rounded-md after:transition-all"
                        >
                          Add Property
                        </a>
                      </li>
                      <li class="ml-2 sm:ml-5 lg:hidden">
                        <a
                          href="#offcanvas-mobile-menu"
                          class="offcanvas-toggle flex text-[#016450] hover:text-secondary"
                        >
                          <svg
                            width="24"
                            height="24"
                            class="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
