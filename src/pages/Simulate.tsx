import { useState } from 'react'
import { useService } from '../hooks'
import {
  AmountInput,
  Card,
  CardSmall,
  Loader,
  QuotaSectionSlider,
  Text,
} from '../components'
import { addComma } from '../utils/addComma'
import '../styles/text.css'

export const Simulate = () => {
  const [isError, setIsError] = useState(false)
  const { data, loadingPrimary, loadingSecondary, response, onChange } =
    useService(isError)
  return (
    <>
      {loadingSecondary && (
        <div aria-label="loader" role={'article'} className="loading" />
      )}
      <main className="main_container">
        <Text className="text_bold size_1 font_outfit">Simula tu cuenta</Text>
        <div className="separator" />
        {loadingPrimary ? (
          <Loader />
        ) : (
          data &&
          response && (
            <>
              <Card
                title="Tu cuota mensual será:"
                monthlyAmount={`S/ ${response.monthly_amount}`}
                isError={isError}
              >
                <CardSmall
                  title="Cuotas"
                  subtitle={`${data.quota}`}
                  verticalSeparator
                />
                <CardSmall
                  title="TEA"
                  subtitle={`${response.tea.toFixed(2)}%`}
                  verticalSeparator
                />
                <CardSmall
                  title="Pago 1ª cuota"
                  subtitle={`${response.payment_date}`}
                />
              </Card>
              <AmountInput
                textLabel={'Ingrese un monto'}
                amountInitial={String(data.amount)}
                onChange={onChange}
                amountMin={addComma(String(response.min_amount))}
                amountMax={addComma(String(response.max_amount))}
                hasError={isError}
                setIsError={setIsError}
              />
              <QuotaSectionSlider
                onChange={onChange}
                title="Elige el número de cuotas"
                quotaMin={response?.min_quota}
                quotaMax={response?.max_quota}
              />
            </>
          )
        )}
      </main>
    </>
  )
}
