import React from 'react'
import { createPortal } from 'react-dom'

export default function MyPortalForHeader({value}) {
  return (
    createPortal(<span>This is the injection from portal {value}</span>, document.getElementById("header"))
  )
}
