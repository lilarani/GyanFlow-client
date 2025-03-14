import React from 'react'
import { Link } from 'react-router'
import "./custom.css"
const Button = ({text,url}) => {
  return (
    <>
          <Link
              to={url}
              className="button m-1 inline-block bg-[#ffffff44]  text-textcolor px-6 py-2 rounded-lg font-semibold hover:bg-main transition"
          >
              {text}
          </Link>
    </>
  )
}

export default Button