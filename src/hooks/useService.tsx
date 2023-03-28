import { useEffect, useState } from "react";
import { Data, Response } from "../interfaces/services";
import { getAmountSimulation, getInformation } from "../services";

export const useService = (isError: boolean) => {
  const [data, setData] = useState<Data>();
  const [response, setResponse] = useState<Response>();
  const [loadingPrimary, setLoadingPrimary] = useState(true);
  const [loadingSecondary, setLoadingSecondary] = useState(false);
  useEffect(() => {
    console.log("RENDERIZAR UNA VEZ");

    const timeOut = setTimeout(() => {
      setResponse({
        ...getInformation(),
      });
      setData({
        amount: getInformation().max_amount,
        quota: getInformation().max_quota,
      });
      setLoadingPrimary(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    if (data && response) {
      console.log(data);
      if (!isError) setLoadingSecondary(true);
      const timeOut = setTimeout(() => {
        const { tea, monthly_amount } = getAmountSimulation(
          data.amount,
          data.quota,
          response.max_quota
        );
        setResponse({
          ...response,
          tea,
          monthly_amount: Number(monthly_amount.toFixed(2)),
        });
        setLoadingSecondary(false);
      }, 500);
      return () => clearTimeout(timeOut);
    }
  }, [data?.amount, data?.quota, isError]);

  const onChange = <K extends keyof Data>(value: Data[K], field: K) => {
    if (data) {
      console.log(value, field);
      console.log(data);
      setData({
        ...data,
        [field]: value,
      });
    }
  };

  return {
    data,
    loadingPrimary,
    loadingSecondary,
    response,
    onChange,
  };
};
