import { Response } from '../interfaces/services'
import moment from 'moment'
import 'moment/locale/es'

export const getInformation: () => Promise<Response> = async () => {
  const response = await fetch('informations.json')
  const data = await response.json()
  return {
    ...data,
    tea: Number(data.tea.toFixed(2)),
    payment_date: String(
      moment(new Date(data.payment_date)).locale('es').format('DD MMM')
    ),
    monthly_amount: Number(data.monthly_amount.toFixed(2)),
  }
}

export const getAmountSimulation = (
  amount: number,
  quota: number,
  maxQuota: number,
  tea: number
) => {
  const teaActual = (tea * quota) / maxQuota
  return {
    teaActual,
    monthly_amount: ((amount * teaActual) / 100 + amount) / quota,
  }
}
