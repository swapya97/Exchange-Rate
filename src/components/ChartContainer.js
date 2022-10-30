import React from "react";

function ChartContainer(props) {
  return (
    <div className="ExchangeRateChart">
      <div className="ExchangeRateChart-margin-top">
        <h3 className="ExchangeRateChart-title">Exchange Rates</h3>
      </div>

      <div className="ExchangeRateChart-margin"></div>
      {props.children}
      <div className="ExchangeRateChart-margin"></div>
    </div>
  );
}

export default ChartContainer;
