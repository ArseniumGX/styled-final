import Items from "Components/Items";
import { Botao, Box } from "Components/UI";
import { extratoLista } from "assets/info.js";

export const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items key={id} type={type} from={from} value={value} date={date} />
        );
      })}
      <Botao>Ver mais</Botao>
    </Box>
  );
};
