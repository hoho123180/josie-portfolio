import React, { FC } from 'react'

interface AProp extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children?: React.ReactNode
}

const A: FC<AProp> = ({ children, ...rest }) => {
  return (
    <a {...rest} target='_blank' rel="noreferrer noopener">
      {children}
    </a>
  )
}

export default A