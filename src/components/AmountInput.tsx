import { useEffect, useState } from 'react'
import { Text } from './Text'
import '../styles/textInput.css'
import { Data } from '../interfaces/services'
import { useDebouncedValue } from '../hooks/useDebouncedValue'

interface Props {
  textLabel: string
  amountMin: string
  amountMax: string
  amountInitial: string
  hasError: boolean
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
  onChange: <K extends keyof Data>(value: Data[K], field: K) => void
}

export const AmountInput = ({
  textLabel,
  amountMin,
  amountMax,
  amountInitial,
  hasError,
  setIsError,
  onChange,
}: Props) => {
  const [value, setValue] = useState(`S/ ${amountInitial}.00`)
  const debounceValue = useDebouncedValue(value, 1000)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    const arrNum = text.split('.')
    if (!Number(text.replace('S/ ', ''))) {
      setValue('S/ 1.00')
      verifyMinMax('S/ 1.00')
    } else {
      if (arrNum[1] === undefined) return
      if (text.includes('S/ ') && arrNum.length <= 2 && arrNum[1].length <= 2) {
        setValue(text)
        verifyMinMax(text)
      }
    }
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(event.key)) {
      if (event.key.includes('Backspace')) return
      if (event.key.includes('ArrowLeft')) return
      if (event.key.includes('ArrowRight')) return
      if (event.key.includes('.')) return
      event.preventDefault()
    }
  }

  useEffect(() => {
    onChange(Number(debounceValue.replace('S/ ', '')), 'amount')
  }, [debounceValue])

  const verifyMinMax = (value: string) => {
    const newValue = Number(value.replace('S/ ', ''))
    if (
      newValue < Number(amountMin.replace(',', '')) ||
      newValue > Number(amountMax.replace(',', ''))
    )
      setIsError(true)
    else {
      setIsError(false)
    }
  }

  return (
    <article className="text_input_container">
      <Text className="text_bold size_3">{textLabel}</Text>
      <input
        className={`${hasError ? 'input_error' : 'input'}`}
        type={'text'}
        value={value}
        onChange={handleChange}
        placeholder="S/ 0.00"
        pattern="[0-9]*"
        onKeyDown={handleKeyDown}
      />
      <Text
        className={`text_regular size_4 mb_16 ${
          hasError ? 'color_error' : 'color_gray'
        }`}
      >
        {`Mínimo S/ ${amountMin} - Máximo S/ ${amountMax}`}
      </Text>
    </article>
  )
}
