class SuperMarket {
  item = [
    ["beras", 10],
    ["tepung", 15],
  ];
  constructor(name, stocks) {
    this.name = name;
    this.stocks = stocks;
  }

  itemCheck() {
    for(let i = 0; i < this.item.length; i++) {
        if (
            this.item[i][0] === this.name &&
            this.item[i][1] < this.stocks
        ){ return `You must buy some ${
                this.item[i][1] + this.stocks * 2
                } for stock`;   
        }
       else if (
            this.item[i][0] === this.name 
            //this.item[i][1] >= this.stocks
        ) { return `${this.name} left ${
                this.item[i][1] - this.stocks
                }`;
        //}else if (
            //this.item[i][0] === this.name &&
            //this.item[i][1] < this.stocks
        //){ return `You must buy some ${
                //this.item[i][1] + this.stocks * 2
                //} for stock`;   
        } else {
            return 'Stocks are empty';
        }
    }
  }
}
  
let pelanggan = new SuperMarket("beras", 5);

console.log(pelanggan.itemCheck());

