import React from "react";
import TextoCentral from "../components/TextoCentral";

export default (comp) => {
  const route = comp.route || { params: { numero: 0 } };

  return (
    <TextoCentral corFundo="#9932cd">
      Tela C = {route.parans.numero}
    </TextoCentral>
  );
};
