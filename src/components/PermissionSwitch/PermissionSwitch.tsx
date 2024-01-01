import React from 'react'
import { Separator } from '../shadcn/Seperator'

const PermissionSwitch = ({
    children
    }: {
    children?: React.ReactNode
}) => {
  return (
    <div>
        {children}
        <Separator className=''/>
    </div>
  )
}

export default PermissionSwitch