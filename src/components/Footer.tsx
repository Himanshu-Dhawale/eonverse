import React from 'react'
import {
  IconBrandLinkedin,
  IconBrandX,
  IconBrandInstagram,
} from '@tabler/icons-react'
import { Typography } from './Typography/Typography'

const Footer = () => {
  return (
    <footer className="bg-accent p-8 w-full flex justify-between text-white">
      <div className="flex flex-col gap-1">
        <a href="/">contact@enoverse.com</a>
        <Typography>9167804422</Typography>
        <div className="flex gap-4 mt-4 transform-3d">
          <IconBrandLinkedin className="hover:-translate-y-1 cursor-pointer" />
          <IconBrandX className="hover:-translate-y-1 cursor-pointer" />
          <IconBrandInstagram className="hover:-translate-y-1 cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-8">
        <ul className="w-max text-sm flex flex-col gap-3 ">
          <li className="hover-underline-animation left w-max">
            <a href="#">Our Vision</a>{' '}
          </li>
          <li className="hover-underline-animation left w-max">
            <a href="#">The Journey</a>
          </li>
          <li className="hover-underline-animation left w-max">
            <a href="#">Innovation</a>
          </li>
        </ul>
        <ul className="w-max text-sm flex flex-col gap-2">
          <li className="hover-underline-animation left w-max">
            <a href="#">The Future</a>
          </li>
          <li className="hover-underline-animation left w-max">
            <a href="#">Join Waitlist</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
