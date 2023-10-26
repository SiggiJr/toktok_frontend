import React, { useState } from 'react'

export default function DarkMode() {
  const [isChecked, setIsChecked] = useState(false)
  const handleToggle = () => {
    setIsChecked(prevChecked => !prevChecked)
  }
  return <div onClick={handleToggle}>DarkMode</div>
}
