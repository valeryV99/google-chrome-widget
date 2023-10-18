import logo from '@assets/img/logo.svg'
import useStorage from '@src/shared/hooks/useStorage'
import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage'
import withSuspense from '@src/shared/hoc/withSuspense'
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary'
import { Button } from '@root/src/components/Button'

const Popup = () => {
  const theme = useStorage(exampleThemeStorage)

  return (
    <div className="App">
      <header className="pt-8 px-6 flex justify-between items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="text-gray-dark">Skip</button>
      </header>
      <div className="flex gap-2">
        <Button className="flex-1">Text</Button>
        <Button className="flex-1" outline>
          Text
        </Button>
      </div>
      <p className="text-lime-400">
        Edit <code>src/pages/popup/Popup.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React!
      </a>
      <button
        style={{
          color: theme === 'light' ? '#fff' : '#000',
        }}
        onClick={exampleThemeStorage.toggle}
      >
        Toggle theme: [{theme}]
      </button>
    </div>
  )
}

export default withErrorBoundary(
  withSuspense(Popup, <div> Loading ... </div>),
  <div> Error Occur </div>
)
