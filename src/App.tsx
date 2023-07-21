import './App.css'
import { Popover } from './components/Popover/Popover'
import { Button } from './components/Button/Button'

const renderCustomButton = (handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void, isOpen: boolean) => {
  return <Button isOpen={isOpen} onButtonClick={handleClick} />
}

function App() {
  const style = {
    maxWidth: 350 + 'px'
  }

  return (
    <>
      <Popover position='bottom' trigger={renderCustomButton}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p className="Text" style={{ marginBottom: 10 }}>
            Dimensions
          </p>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="width">
              Width
            </label>
            <input className="Input" id="width" defaultValue="100%" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="maxWidth">
              Max. width
            </label>
            <input className="Input" id="maxWidth" defaultValue="300px" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="height">
              Height
            </label>
            <input className="Input" id="height" defaultValue="25px" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="maxHeight">
              Max. height
            </label>
            <input className="Input" id="maxHeight" defaultValue="none" />
          </fieldset>
        </div>
      </Popover>
      <Popover position='bottom' trigger={renderCustomButton}>
        <div>
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
        </div>
      </Popover>
    </>
  )
}

export default App
