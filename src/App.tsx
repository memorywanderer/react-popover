import './App.css'
import { Popover } from './components/Popover/Popover'
import { Button } from './components/Button/Button'

const renderCustomButton = (handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void) => {
  return <Button onButtonClick={handleClick} />
}

function App() {
  const style = {
    maxWidth: 350 + 'px'
  }

  return (
    <>
      <Popover position='bottom' trigger={renderCustomButton}>
        <div>
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
        </div>
      </Popover>
      <Popover position='bottom' trigger={renderCustomButton}>
        <div>
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
        </div>
      </Popover>
      <Popover position='right' trigger={renderCustomButton}>
        <div style={style}>
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
          Some text
        </div>
      </Popover>
    </>
  )
}

export default App
