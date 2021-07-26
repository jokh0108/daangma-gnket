import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function MainTemplate({ children }: Props) {
  return <div className="MainTemplate">{children}</div>
}

export default MainTemplate
