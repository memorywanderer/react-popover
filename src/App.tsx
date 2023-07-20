import { useState } from 'react'
import './App.css'
import { Popover } from './components/Popover/Popover'
import { Button } from './components/Button/Button'

function App() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <>
      <Button onButtonClick={handleButtonClick} />
      <Popover isOpen={isOpen} anchorEl={anchorEl} position='top'>
        <span>Some text</span>
      </Popover>
    </>
  )
}

export default App
