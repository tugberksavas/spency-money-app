import React from "react";
import { moneyFormat } from "../helpers";
import "../css/header.css";

function Header({ money, total }) {
  return (
    <div>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Harcayacak <span>$ {moneyFormat(money - total)}</span> paraniz kaldi.
        </div>
      )}
      {total === 0 && (
        <div className="header">
          Harcamak icin <span>$ {moneyFormat(money)}</span> paraniz var.
        </div>
      )}
      {money - total === 0 && <div className="header">Paran bitti!!!</div>}
    </div>
  );
}

export default Header;
