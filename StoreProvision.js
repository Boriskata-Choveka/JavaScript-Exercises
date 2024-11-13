function store(arrStock, arrOrder) {
  let stocks = [];
  let stock = {};

  for (let i = 0; i < arrStock.length; i++) {
    if (i % 2 === 0) {
      stock.type = arrStock[i];
    } else {
      stock.amount = parseInt(arrStock[i]);
      stocks.push(stock);
      stock = {};
    }
  }

  for (let i = 0; i < arrOrder.length; i++) {
    if (i % 2 === 0) {
      stock.type = arrOrder[i];
    } else {
      stock.amount = parseInt(arrOrder[i]);
      let checkKeyPresenceInArray = (type) =>
        stocks.some((stock) => Object.values(stock).includes(type));

      if (checkKeyPresenceInArray(stock.type)) {
        for (let j = 0; j < stocks.length; j++) {
          if (stocks[j].type == stock.type) {
            stocks[j].amount = stocks[j].amount + stock.amount;
          }
        }
      } else {
        stocks.push(stock);
      }
      stock = {};
    }
  }

  for (let i = 0; i < stocks.length; i++) {
    console.log(`${stocks[i].type} -> ${stocks[i].amount}`);
  }
}
