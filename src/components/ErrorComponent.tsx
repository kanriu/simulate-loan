import { FallbackProps } from 'react-error-boundary'
import IconError from '../assets/svg/IconBxErrorCircle'
import '../styles/errorComponent.css'

export const ErrorComponent = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <main className="error_main_container">
      <div className="error_div_container">
        <IconError className="icon_error" />
        <h2>Ha ocurrido un error</h2>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary} className="button_container">
          Recargar página
        </button>
      </div>
    </main>
  )
}
