import "./styles/app.css";
import {
  Card,
  CardSmall,
  Loader,
  SectionSlider,
  Text,
  TextInput,
} from "./components";
import "./styles/text.css";
import { useService } from "./hooks";
import { addComma } from "./utils/addComma";
import { useMemo, useState } from "react";

const App = () => {
  const [isError, setIsError] = useState(false);
  const { data, loadingPrimary, loadingSecondary, response, onChange } =
    useService(isError);

  const params = useMemo(
    () => ({
      onChange,
      title: "Elige el número de cuotas",
      min: response?.min_quota,
      max: response?.max_quota,
    }),
    [onChange, response?.min_quota, response?.max_quota]
  );

  return (
    <>
      {loadingSecondary && (
        <div aria-label="loader" role={"article"} className="loading" />
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
              <Card montlyAmount={response.monthly_amount} isError={isError}>
                <CardSmall
                  primary="Cuotas"
                  secondary={`${data.quota}`}
                  separator
                />
                <CardSmall
                  primary="TEA"
                  secondary={`${response.tea.toFixed(2)}%`}
                  separator
                />
                <CardSmall
                  primary="Pago 1ª cuota"
                  secondary={`${response.payment_date}`}
                />
              </Card>
              <TextInput
                initial={String(data.amount)}
                onChange={onChange}
                min={addComma(String(response.min_amount))}
                max={addComma(String(response.max_amount))}
                isError={isError}
                setIsError={setIsError}
              />
              <SectionSlider {...params} />
            </>
          )
        )}
      </main>
    </>
  );
};

export default App;
