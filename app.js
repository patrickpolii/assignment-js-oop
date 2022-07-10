class SuperMarket {
  item = [
    ["beras", 10],
    ["tepung", 15],
    ["kopi", 20],
    ["gula", 50],
    ["minyak", 18],
  ];
  constructor(name, stocks) {
    this.name = name;
    this.stocks = stocks;
  }

  itemCheck() {
    let dataItem = [];
    let dataStock = 0;

    for(let i = 0; i < this.item.length; i++) {
        if (this.item[i][0] === this.name){         
          dataItem.push(this.item[i]);
        }
    } 
    if(dataItem.length){
      //let foundNameItem = dataItem[0][0];
      let foundStockItem = dataItem[0][1];

      if(foundStockItem < this.stocks){
        dataStock = foundStockItem + (this.stocks * 2);
        console.log("Stocks sold out!!!");
        console.log("Name Item: "+this.name);
        console.log("Need to add : "+dataStock+" pcs");
      } else {
            dataStock = foundStockItem - this.stocks
            console.log("Item Name: "+this.name);
            console.log("Stocks Remain: "+foundStockItem+" pcs");
            console.log("Stock add to cart: "+this.stocks+" pcs");
            console.log("Stocks Available: "+dataStock+" pcs");
      }

    }else {
      return 'Stocks are empty';
    }
        //  if (
      //       this.item[i][0] === this.name 
      //       //this.item[i][1] >= this.stocks
      //   ) { return `${this.name} left ${
      //           this.item[i][1] - this.stocks
      //           }`;
      //   //}else if (
      //       //this.item[i][0] === this.name &&
      //       //this.item[i][1] < this.stocks
      //   //){ return `You must buy some ${
      //           //this.item[i][1] + this.stocks * 2
      //           //} for stock`;   
      //   } else {
      //       return 'Stocks are empty';
      //   }
    
  }
}
  
let pelanggan = new SuperMarket("minyak", 15);

console.log(pelanggan.itemCheck());

