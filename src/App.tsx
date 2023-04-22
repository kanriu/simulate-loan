import { ErrorComponent } from './components'
import { Navigation } from './routes/Navigation'
import './styles/app.css'
import { ErrorBoundary } from 'react-error-boundary'
const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <Navigation />
    </ErrorBoundary>
  )
}

export default App
