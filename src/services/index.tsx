import { Response } from "../interfaces/services";
import moment from "moment";
import "moment/locale/es";

const tea = 26.5612;

export const getInformation: () => Response = () => {
  return {
    campaign_name: "Instacash",
    min_quota: 1,
    max_quota: 48,
    max_amount: 19600,
    min_amount: 1500,
    tea: Number(tea.toFixed(2)),
    payment_date: String(
      moment(new Date("2019-12-26T16:30:04.591Z")).locale("es").format("DD MMM")
    ),
    currency: "PEN",
    monthly_amount: Number((382.5912).toFixed(2)),
  };
};

export const getAmountSimulation = (
  amount: number,
  quota: number,
  maxQuota: number
) => {
  const teaActual = (tea * quota) / maxQuota;
  return {
    tea: teaActual,
    monthly_amount: ((amount * teaActual) / 100 + amount) / quota,
  };
};
