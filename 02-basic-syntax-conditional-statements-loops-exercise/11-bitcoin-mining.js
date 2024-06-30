function bitcoinMining(arr) {
    let arrL = arr.length;

    let dayCounter = 0;
    let goldGrams = 0;

    let dayMoney = 0;
    let totalAmount = 0;

    let bitcoinsCounter = 0;
    let firstDayBuyBitcoins = 0;
    let purchasedBitcoins = 0;
    let allBitcoins = 0;
    const bitcoinPrice = 11949.16;

    for(let i = 0; i < arrL; i++) {
        dayCounter++;
        goldGrams = arr[i];

        if(dayCounter % 3 === 0) {
            goldGrams -= goldGrams * 0.3;
        } else {
            goldGrams = goldGrams;
        }

        dayMoney = goldGrams * 67.51;
        totalAmount += dayMoney;

        if(totalAmount >= bitcoinPrice) {
            bitcoinsCounter++;

            if(bitcoinsCounter === 1) {
                firstDayBuyBitcoins = dayCounter;
            }

            purchasedBitcoins = Math.floor(totalAmount / bitcoinPrice);
            allBitcoins += purchasedBitcoins;
            totalAmount -= bitcoinPrice * purchasedBitcoins;
        }
    }

    console.log(`Bought bitcoins: ${allBitcoins}`);

    if(bitcoinsCounter > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayBuyBitcoins}`);
    }

    console.log(`Left money: ${totalAmount.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
// bitcoinMining([50, 100]);
// bitcoinMining([3124.15, 504.212, 2511.124]);