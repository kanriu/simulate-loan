import { useEffect, useRef, useState } from "react";
import { Data, Response } from "../interfaces/services";
import { getAmountSimulation, getInformation } from "../services";

export const useService = (isError: boolean) => {
  const [data, setData] = useState<Data>();
  const [response, setResponse] = useState<Response>();
  const [loadingPrimary, setLoadingPrimary] = useState(true);
  const [loadingSecondary, setLoadingSecondary] = useState(false);
  const teaRef = useRef<number>();
  useEffect(() => {
    const timeOut = setTimeout(async () => {
      try {
        const responseFetch = await getInformation();
        setResponse({
          ...responseFetch,
        });
        setData({
          amount: responseFetch.max_amount,
          quota: responseFetch.max_quota,
        });
        teaRef.current = responseFetch.tea;
        setLoadingPrimary(false);
      } catch (error) {
        console.log(error);
      }
    }, 1000);
    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    if (data && response) {
      if (!isError) setLoadingSecondary(true);
      const timeOut = setTimeout(() => {
        const { teaActual, monthly_amount } = getAmountSimulation(
          data.amount,
          data.quota,
          response.max_quota,
          teaRef.current!
        );
        setResponse({
          ...response,
          tea: teaActual,
          monthly_amount: Number(monthly_amount.toFixed(2)),
        });
        setLoadingSecondary(false);
      }, 500);
      return () => clearTimeout(timeOut);
    }
  }, [data?.amount, data?.quota, isError]);

  const onChange = <K extends keyof Data>(value: Data[K], field: K) => {
    if (data) {
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
