const axios = require("axios");
const Telegraf = require("telegraf");
Token = "BOT_TOKEN";
const bot = new Telegraf(Token);

const apikey = "CRYPTOCOMPARE_API_KEY";

//--------INITIALIZATION------------------
bot.command(["start", "help"], (ctx) => {
  bot.telegram.sendPhoto(
    ctx.chat.id,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBesM1l6Mik7akaKjntDHSiyKJDzZGQbJNlg&usqp=CAU"
  );
  sendStartMessage(ctx);
});

//----------------------------------FUNCTIONS_______________
//----------------------------------FUNCTIONS_______________
//----------------------------------FUNCTIONS_______________

//-----START__________
bot.action("start", (ctx) => {
  ctx.deleteMessage();
  bot.telegram.sendPhoto(
    ctx.chat.id,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBesM1l6Mik7akaKjntDHSiyKJDzZGQbJNlg&usqp=CAU"
  );

  sendStartMessage(ctx);
});
//-----START__________

function sendStartMessage(ctx) {
  //bot.telegram.sendPhoto(
  //  ctx.chat.id,
  //  "https://www.tadviser.ru/images/e/eb/Sber1.jpg"
  // );
  let startMessage = `
  🦁 Welcome to pico!

  🔥 #1 place market place for cryptocurrencies
  💥 Instant Buy
  💥 Instant Sell
  ❗️ Let's begin...
  `;
  bot.telegram.sendMessage(ctx.chat.id, startMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "⛑ Help", callback_data: "help" },
          { text: "Menu 📲", callback_data: "menu" },
        ],
      ],
    },
  });
}

//---------HELP-------------------

bot.action("help", (ctx) => {
  ctx.deleteMessage();
  sendHelpMessage(ctx);
});

//---------HELP-------------------

function sendHelpMessage(ctx) {
  let startMessage = `Please take a few minutes to look up our resources and learn how to use our platform to buy or sell your cryptocurrencies!`;
  bot.telegram.sendMessage(ctx.chat.id, startMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "📨 Support", callback_data: "support" },
          { text: "📚 How it Works", callback_data: "works" },
        ],
        [{ text: "⬅️ Back to Start", callback_data: "start" }],
      ],
    },
  });
}

//---------MENU-------------------

bot.action("menu", (ctx) => {
  ctx.deleteMessage();
  sendMenuMessage(ctx);
});

//---------MENU-------------------

function sendMenuMessage(ctx) {
  let menuMessage = `
  🕹 Explore our network using the following services:
  
  📌 Markets - To buy or sell
  📌 Pay - To make payements
  📌 Confirm - To confirm
  `;
  bot.telegram.sendMessage(ctx.chat.id, menuMessage, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📉 Markets 📈", callback_data: "markets" }],
        [
          { text: "💰 Pay", callback_data: "pay" },
          { text: "🕹 Confirm", callback_data: "confirm" },
        ],
        [{ text: "⏮ Back to start", callback_data: "start" }],
      ],
    },
  });
}

//-------------CONFIRM------------------

bot.action("confirm", (ctx) => {
  ctx.deleteMessage();
  sendConfirmMessage(ctx);
});
//-------------CONFIRM------------------

function sendConfirmMessage(ctx) {
  let confirmMessage = `
  
  🕹 Please confirm that you have been paid:

  ⚡️ Received payement - If you have receieved Rubles
  
  ⚡️ Received Crypto - If you have receieved Crypto
  `;
  bot.telegram.sendMessage(ctx.chat.id, confirmMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "₽ Received Payment", callback_data: "received_pay" },
          { text: "฿ Received Crypto", callback_data: "received_crypto" },
        ],
        [{ text: "☝︎ Back to Menu", callback_data: "menu" }],
      ],
    },
  });
}

//-------------RECEIVED PAY------------------

bot.action("received_pay", (ctx) => {
  ctx.deleteMessage();
  sendReceivedPayMessage(ctx);
});
//-------------RECEIVED PAY------------------

function sendReceivedPayMessage(ctx) {
  let sendReceivedPayMessage = `⚡️ Welcome, this bot gives you cryptocurrency information`;
  bot.telegram.sendMessage(ctx.chat.id, sendReceivedPayMessage, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "👏 Complete 🤝", callback_data: "completed" }],
        [
          { text: "⛑ Help", callback_data: "help" },
          { text: "Menu 📲", callback_data: "menu" },
        ],
      ],
    },
  });
}

//-------------RECEIVED CRYPTO------------------

bot.action("received_crypto", (ctx) => {
  ctx.deleteMessage();
  sendReceivedCryptoMessage(ctx);
});
//-------------RECEIVED CRYPTO------------------

function sendReceivedCryptoMessage(ctx) {
  let startMessage = `⚡️ Welcome, this bot gives you cryptocurrency information`;
  bot.telegram.sendMessage(ctx.chat.id, startMessage, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "👏 Complete 🤝", callback_data: "completed" }],
        [
          { text: "⛑ Help", callback_data: "help" },
          { text: "Menu 📲", callback_data: "menu" },
        ],
      ],
    },
  });
}

//-------------PAY------------------

bot.action("pay", (ctx) => {
  ctx.deleteMessage();
  sendPayMessage(ctx);
});

//-------------PAY------------------

function sendPayMessage(ctx) {
  let sendPayMessage = `⚡️ Welcome, this bot gives you cryptocurrency information`;
  bot.telegram.sendMessage(ctx.chat.id, sendPayMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🏛 Fiat Currency ₽ ", callback_data: "fiat" },
          { text: "฿ Crypto Currency 🪙", callback_data: "crypto" },
        ],
        [{ text: "⬆️ Back to menu ⬆️", callback_data: "menu" }],
      ],
    },
  });
}

//-------------FIAT------------------

bot.action("fiat", (ctx) => {
  ctx.deleteMessage();
  sendFiatMessage(ctx);
});

//-------------FIAT------------------

function sendFiatMessage(ctx) {
  let sendFiatMessage = `
  ⚡️ You can make payements using the  following numbers:
  🏛 СБП = 89000000000
  🏛 СберБанк = 89100000000
  🏛 Тинькофф Онлайн = 89200000000
    `;
  bot.telegram.sendMessage(ctx.chat.id, sendFiatMessage, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "⬅️ Back to pay", callback_data: "pay" }],
        [{ text: "📥 Upload receipt", callback_data: "upload_receipt" }],
      ],
    },
  });
}

//-------------CRYPTO------------------

bot.action("crypto", (ctx) => {
  ctx.deleteMessage();
  sendCryptoMessage(ctx);
});
//-------------CRYPTO------------------

function sendCryptoMessage(ctx) {
  let sendCryptoMessage = `
  ⚡️ You can pay to the following wallets and send us the transaction ID:
  BTC => 87hjgwt92hws82jjshw82jshwy28jj
  ETH => gwtw62hhab27272jb722jwwy272wjk
  USDT => 82hay27282jhay2829jjhwt2802jj
  
  `;
  bot.telegram.sendMessage(ctx.chat.id, sendCryptoMessage, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "⬅️ Back to pay", callback_data: "pay" }],
        [{ text: " 📝 Enter hash id", callback_data: "enter_hash_id" }],
      ],
    },
  });
}

//-------------UPLOAD RECEIPT------------------

bot.action("upload_receipt", (ctx) => {
  ctx.deleteMessage();
  sendUploadReceiptMessage(ctx);
});

//-------------UPLOAD RECEIPT------------------

function sendUploadReceiptMessage(ctx) {
  let sendUploadReceiptMessage = `⚡️ Please upload your payement sleep here!`;
  bot.telegram.sendMessage(ctx.chat.id, sendUploadReceiptMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💸 Back to Pay", callback_data: "fiat" },
          { text: "Confirm 🕹", callback_data: "confirm" },
        ],
      ],
    },
  });
}

//-------------ENTER HASH ID------------------

bot.action("enter_hash_id", (ctx) => {
  ctx.deleteMessage();
  sendHashIdMessage(ctx);
});

//-------------ENTER HASH ID------------------

function sendHashIdMessage(ctx) {
  let sendHashIdMessage = `⚡️  Please Enter your blockchain transaction ID here:`;
  bot.telegram.sendMessage(ctx.chat.id, sendHashIdMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "◀️🕹 Back to confirm", callback_data: "confirm" },
          { text: "Crypto ฿▶️", callback_data: "crypto" },
        ],
      ],
    },
  });
}

//-------------TRANSACT------------------

bot.command("accept_b", (ctx) => {
  sendAcceptBMessage(ctx);
});
bot.action("accept_b", (ctx) => {
  ctx.deleteMessage();
  sendAcceptBMessage(ctx);
});

function sendAcceptBMessage(ctx) {
  let acceptBMessage = `
        ❗️ ⚡️  Please Enter your blockchain transaction ID here: 
      
      🕹 /hashid
      `;

  bot.telegram.sendMessage(ctx.chat.id, acceptBMessage, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Back to send crypto", callback_data: "crypto" }],
      ],
    },
  });
}

//-------------HASHID------------------

bot.command("hasid", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" "); // split input into an array separated by space
  console.log(inputArray);
  let message = "";

  if (inputArray.length == 1) {
    message = `
    ❗️ ⚡️  Please Enter your blockchain transaction ID here: 
    ⚡️ for example, to enter name:
    ⚡️ /hashid 723hshhsyusjsjjs8wkkkks9k92kakaj829
  
    🔦 Now do thesame:
  
  🕹 /hashid
  `;
    ctx.reply(message);
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
    let Wallet = message;
    console.log(Wallet);
    ctx.reply(
      "✅ The transaction ID is: " +
        message +
        "\n\n📌 If the hashid is not correct, please enter again with the command\n⇒ /hashid"
    );
  }

  let amountMessage = `Welcome, this bot gives you cryptocurrency information`;
  bot.telegram.sendMessage(ctx.chat.id, amountMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "⬅️ Back to send crypto", callback_data: "crypto" }, // double check "token_b"
          { text: "Confirm", callback_data: "confirm" },
        ],
      ],
    },
  });
});

//-------------MARKETS------------------

bot.action("markets", (ctx) => {
  ctx.deleteMessage();
  sendMarketsMessage(ctx);
});

//-------------MARKETS------------------

function sendMarketsMessage(ctx) {
  let sendMarketsMessage = `⚡️ Welcome, this bot gives you cryptocurrency information`;
  bot.telegram.sendMessage(ctx.chat.id, sendMarketsMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "⬆️ Buy", callback_data: "buy" },
          { text: "Sell ⬆️", callback_data: "sell" },
        ],
        [{ text: "⬅️ Back to menu", callback_data: "menu" }],
      ],
    },
  });
}

//-------------BUY------------------
//-------------BUY------------------
//-------------BUY------------------

bot.action("buy", (ctx) => {
  ctx.deleteMessage();
  sendBuyMessage(ctx);
});

//-------------BUY------------------

function sendBuyMessage(ctx) {
  let sendBuyMessage = `⚡️ Welcome, this bot gives you cryptocurrency information`;
  bot.telegram.sendMessage(ctx.chat.id, sendBuyMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "⬅️ Back to menu", callback_data: "menu" },
          { text: "Token 🪙", callback_data: "token_b" },
        ],
      ],
    },
  });
}

//-------------TOKEN------------------
/*
bot.action("token_b", (ctx) => {
  ctx.deleteMessage();
  sendTokenBMessage(ctx);
});
*/

//-------------TOKEN------------------
bot.action("token_b", (ctx) => {
  let priceMessage = `Get Price Information. select one of the cryptocurrencies below`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "BTC", callback_data: "price-BTC" },
          { text: "ETH", callback_data: "price-ETH" },
        ],
        [
          { text: "BCH", callback_data: "price-BCH" },
          { text: "LTC", callback_data: "price-LTC" },
        ],
        [{ text: "Back to Menu", callback_data: "start" }],
      ],
    },
  });
});

//-------------TOKEN------------------

let priceActionListB = ["price-BTC", "price-ETH", "price-BCH", "price-LTC"];
bot.action(priceActionListB, async (ctx) => {

  let x = null; // x is the price of 1 BTC to USD from blockchain.info
  let y = null; // y is the price of 1 BTC to RUB from blockchain.info
  let z = null; //z is the rate of 1 USD to RUB @ blockchain.info rate i.e y/x
  let btcUsdRate = null; // USD TO BTC from blockchain.info i.e 1/x
  let btcRubRate = null; // RUB TO BTC from blockchain.info i.e 1/y
  let price = null; // Price of any crypto selected currency in USD
  let symbol = ctx.match.split("-")[1]; // Spliting or removing space priceAction List and selecting the second element e.g from "price-BTC" to "BTC"
 

  axios
    .all([
      axios.get("https://blockchain.info/tobtc?currency=RUB&value=1"),
      axios.get("https://blockchain.info/tobtc?currency=USD&value=1"),
      axios.get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD&api_key=${apikey}`
      ),
    ])
    .then(
      axios.spread((rub, usd, res) => {
        console.log(rub.data);
        console.log(usd.data);
        console.log(res.data);

        //To get Blockchain,info USd to RUB Exchnage rate

        x = rub.data;
        y = usd.data;
        console.log("RUB = " + x);
        console.log("USD = " + y);
        z = y / x;
        console.log(z);
        console.log("Exchange rate USD/RUB = " + z);

        btcUsdRate = 1 / y;
        console.log("Exchange rate BTC/USD = " + btcUsdRate);
        btcRubRate = 1 / x;
        console.log("Exchange rate BTC/USD = " + btcRubRate);

        //To get Cryptocompare.com rates for any crptocurrency to USD

        let data = res.data.DISPLAY[symbol].USD;
        console.log(data);

        price = data.PRICE;

        //Rate of each cryptocurrency to USD

        let pricex = price.split(" ")[1];

        console.log("This is change := " + pricex);

        let pricey = parseFloat(pricex.replace(/,/g, ""));
        console.log("corrected price: " + pricey);

        /*
          amount = 1;
          usdRUBrate = z; // exchange rate of USD/RUB
          rateUSD = pricey; // crpoto token price in USD
          rateRUB = z * pricey; // derived crpoto token price in USD
          totalUSD = amount * rateUSD; // derived total price of purchase in USD
          totalRUB = amount * rateUSD * z; derived total price of purchase in USD
        */

        let amount = 1;
        console.log("amount = " + amount);

        let usdRUBrate = "$ " + z.toFixed(2);
        //console.log("usdRUBrate = " + usdRUBrate);
        let rateUSD = "$ " + pricey.toFixed(2);
        //console.log("rateUSD = " + rateUSD);

        let rateRUB = "₽ " + (z * pricey).toFixed(2);
        //console.log("rateRUB = " + rateRUB);

        //let totalUSDlocal = amount * rateUSD;

        //let totalUSD = "$ " + totalUSDlocal.toFixed(2);
        let totalUSD = amount * rateUSD;

        //console.log("totalUSD = " + totalUSD);

        //let totalRUBlocal = amount * rateUSD * z;
        //console.log("totalRUB = " + totalRUB);
        let totalRUB = amount * rateUSD * z;

        //let totalRUB = "₽ " + totalRUBlocal.toFixed(2);
        //console.log(rubstatus);

        let message = `
          Symbol : ${symbol}
          Open: ${data.OPENDAY}
          High: ${data.HIGHDAY}
          Low: ${data.LOWDAY}
          USD/RUB rate:${usdRUBrate}
          Amount: ${amount}
          Unit Price USD: ${rateUSD}
          Unit Price RUB: ${rateRUB}
          Total Price USD: ${totalUSD}
          Total Price RUB: ${totalRUB}
          `;
        console.log(message);
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.chat.id, message, {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "⬅️ Back to buy", callback_data: "buy" },
                { text: "✅ Accept", callback_data: "accept_b" },
              ],
            ],
          },
        });
      })
    );
});

//-------------ACCEPT------------------

bot.command("accept_b", (ctx) => {
  sendAcceptBMessage(ctx);
});
bot.action("accept_b", (ctx) => {
  ctx.deleteMessage();
  sendAcceptBMessage(ctx);
});

function sendAcceptBMessage(ctx) {
  let acceptBMessage = `
        ❗️ Please enter the following information by using the "/" key:
        ⚡️ for example, to enter name:
        ⚡️ /name Alex
        ⚡️ This means that your name is: Alex
      
        🔦 Now do thesame for the following information:
      
      🕹 /name
      🕹 /wallet
      🕹 /amount
      `;

  bot.telegram.sendMessage(ctx.chat.id, acceptBMessage, {
    reply_markup: {
      inline_keyboard: [[{ text: "Back to token", callback_data: "token_b" }]],
    },
  });
}

//-------------------NAME------------------------------

bot.command("name", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" "); // split input into an array sepated by space
  console.log(inputArray);
  let message = "";

  if (inputArray.length == 1) {
    message =
      "🖌 Please enter your name after typing:\n ⚡️ /name.\n ⚡️ For example: /name Alex";
    ctx.reply(message);
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
    let Name = message;
    console.log(Name);
    ctx.reply(
      "✅ Your name is: " +
        message +
        "\n\n📌 If your name is not correct, please enter again with the command\n⇒ /name"
    );
  }
});

//------------------WALLET ADDRESS----------

bot.command("wallet", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" "); // split input into an array separated by space
  console.log(inputArray);
  let message = "";

  if (inputArray.length == 1) {
    message =
      "🖌 Please enter your wallet address after typing\n ⚡️ /wallet.\n ⚡️ For example: /wallet 0x05301d500C7000009aC307Bef714d10E00000000";
    ctx.reply(message);
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
    let Wallet = message;
    console.log(Wallet);
    ctx.reply(
      "✅ Your wallet address is: " +
        message +
        "\n\n📌 If your wallet address is not correct, please enter again with the command\n⇒ /wallet"
    );
  }
});

//-------------AMOUNT------------------

bot.command("amount", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" "); // split input into an array separated by space
  console.log(inputArray);
  let message = "";

  if (inputArray.length == 1) {
    message =
      "🖌 Please enter the amount you want to buy after typing\n ⚡️ /amount.\n ⚡️ For example: /amount 0.01";
    ctx.reply(message);
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
    let Wallet = message;
    console.log(Wallet);
    ctx.reply(
      "✅ The amount is: " +
        message +
        "\n\n📌 If the amount is not correct, please enter again with the command\n⇒ /amount"
    );
  }

  let amountMessage = `Welcome, this bot gives you cryptocurrency information`;
  bot.telegram.sendMessage(ctx.chat.id, amountMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "⬅️ Back to token", callback_data: "token_b" }, // double check "token_b"
          { text: "choose bank", callback_data: "banks" },
        ],
      ],
    },
  });
});

//------------BANKS-----------------------
//------------BANKS-----------------------

bot.action("banks", (ctx) => {
  ctx.deleteMessage();
  sendBankMessage(ctx);
});

function sendBankMessage(ctx) {
  let bankMessage = `
  💸 We currently support only card payment, through СБП!
  ❗️ Note that all payements are in Rubles (₽)
  `;
  bot.telegram.sendMessage(ctx.chat.id, bankMessage, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🏛 СБП", callback_data: "sbp" }],
        [
          {
            text: "⬅️ Back to accept",
            callback_data: "accept_b",
          },
        ],
      ],
    },
  });
}

//-------------------SBP-------------

bot.command(["sbp"], (ctx) => {
  sendSbpMessage(ctx);
});
bot.action("sberbank", (ctx) => {
  ctx.deleteMessage();
  sendSbpMessage(ctx);
});
function sendSbpMessage(ctx) {
  bot.telegram.sendPhoto(
    ctx.chat.id,
    "https://www.akcept.ru/bitrix/templates/akcept/images/pay/logo-sbp.jpg"
  );
  let sendSbpMessage = `You have choosen Sberbank`;
  bot.telegram.sendMessage(ctx.chat.id, sendSbpMessage, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Back to bank", callback_data: "banks" }],
        [{ text: "Go to pay", callback_data: "fiat" }],
      ],
    },
  });
}

//-------------DISPUTE------------------

bot.command("dispute_b", (ctx) => {
  sendAcceptBMessage(ctx);
});
bot.action("dispute_b", (ctx) => {
  ctx.deleteMessage();
  sendAcceptBMessage(ctx);
});

function sendAcceptBMessage(ctx) {
  let acceptBMessage = `
        ❗️ Please enter the following information verify your claims and refund you. 
        Use the "/" key:
        ⚡️ for example, to enter name:
        ⚡️ /name Alex
        ⚡️ This means that your name is: Alex
      
        🔦 Now do thesame for the following information:
      
      🕹 /name
      🕹 /surname
      🕹 /phone
      🕹 /receipt
      `;

  bot.telegram.sendMessage(ctx.chat.id, acceptBMessage, {
    reply_markup: {
      inline_keyboard: [[{ text: "send dispute", callback_data: "send" }]],
    },
  });
}

//--------------------SELL------------------------------
//--------------------SELL------------------------------
//--------------------SELL------------------------------

bot.action("sell", (ctx) => {
  ctx.deleteMessage();
  sendSellMessage(ctx);
});
//--------------------SELL------------------------------

function sendSellMessage(ctx) {
  let sellMessage = `Welcome, this bot gives you cryptocurrency information`;
  bot.telegram.sendMessage(ctx.chat.id, sellMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "⬅️ Back to menu", callback_data: "menu" },
          { text: "Token 🪙", callback_data: "token_s" },
        ],
      ],
    },
  });
}

//-------------TOKEN------------------

bot.action("token_s", (ctx) => {
  let priceMessage = `Get Price Information. select one of the cryptocurrencies below`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "BTC", callback_data: "price-BTC" },
          { text: "ETH", callback_data: "price-ETH" },
        ],
        [
          { text: "BCH", callback_data: "price-BCH" },
          { text: "LTC", callback_data: "price-LTC" },
        ],
        [{ text: "Back to Menu", callback_data: "start" }],
      ],
    },
  });
});

//-------------TOKEN------------------

let priceActionListS = ["price-BTC", "price-ETH", "price-BCH", "price-LTC"];
bot.action(priceActionListS, async (ctx) => {
  //console.log(ctx.match);
  //let symbol = ctx.match.split("-")[1];
  //price = null;
  //console.log("This is symbol:= " + symbol);

  let x = null; // x is the price of 1 BTC to USD from blockchain.info
  let y = null; // y is the price of 1 BTC to RUB from blockchain.info
  let z = null; //z is the rate of 1 USD to RUB @ blockchain.info rate i.e y/x
  let btcUsdRate = null; // USD TO BTC from blockchain.info i.e 1/x
  let btcRubRate = null; // RUB TO BTC from blockchain.info i.e 1/y
  let price = null; // Price of any crypto selected currency in USD
  let symbol = ctx.match.split("-")[1]; // Spliiting or removing space priceAction List and selecting the second element e.g from "price-BTC" to "BTC"
  //let pricex = price.split(" ")[1]; // Split string seperated by spaceand get the element in the second index position = 400,052
  //let pricey = parseFloat(change.replace(/,/g, "")); // remove commas and convert string to float = 400052

  axios
    .all([
      axios.get("https://blockchain.info/tobtc?currency=RUB&value=1"),
      axios.get("https://blockchain.info/tobtc?currency=USD&value=1"),
      axios.get(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD&api_key=${apikey}`
      ),
    ])
    .then(
      axios.spread((rub, usd, res) => {
        console.log(rub.data);
        console.log(usd.data);
        console.log(res.data);

        //To get Blockchain,info USd to RUB Exchnage rate

        x = rub.data;
        y = usd.data;
        console.log("RUB = " + x);
        console.log("USD = " + y);
        z = y / x;
        console.log(z);
        console.log("Exchange rate USD/RUB = " + z);

        btcUsdRate = 1 / y;
        console.log("Exchange rate BTC/USD = " + btcUsdRate);
        btcRubRate = 1 / x;
        console.log("Exchange rate BTC/USD = " + btcRubRate);

        //To get Cryptocompare.com rates for any crptocurrency to USD

        let data = res.data.DISPLAY[symbol].USD;
        console.log(data);

        price = data.PRICE;

        //Rate of each cryptocurrency to USD

        let pricex = price.split(" ")[1];

        console.log("This is change := " + pricex);

        let pricey = parseFloat(pricex.replace(/,/g, ""));
        console.log("corrected price: " + pricey);

        /*
          amount = 1;
          usdRUBrate = z; // exchange rate of USD/RUB
          rateUSD = pricey; // crpoto token price in USD
          rateRUB = z * pricey; // derived crpoto token price in USD
          totalUSD = amount * rateUSD; // derived total price of purchase in USD
          totalRUB = amount * rateUSD * z; derived total price of purchase in USD
        */

        let amount = 1;
        console.log("amount = " + amount);

        let usdRUBrate = "$ " + z.toFixed(2);
        //console.log("usdRUBrate = " + usdRUBrate);
        let rateUSD = "$ " + pricey.toFixed(2);
        //console.log("rateUSD = " + rateUSD);

        let rateRUB = "₽ " + (z * pricey).toFixed(2);
        //console.log("rateRUB = " + rateRUB);

        let totalUSDlocal = amount * rateUSD;

        let totalUSD = "$ " + totalUSDlocal.toFixed(2);

        //console.log("totalUSD = " + totalUSD);

        let totalRUBlocal = amount * rateUSD * z;
        //console.log("totalRUB = " + totalRUB);

        let totalRUB = "₽ " + totalRUBlocal.toFixed(2);
        //console.log(rubstatus);

        let message = `
          Symbol : ${symbol}
          Open: ${data.OPENDAY}
          High: ${data.HIGHDAY}
          Low: ${data.LOWDAY}
          USD/RUB rate:${usdRUBrate}
          Amount: ${amount}
          Unit Price USD: ${rateUSD}
          Unit Price RUB: ${rateRUB}
          Total Price USD: ${totalUSD}
          Total Price RUB: ${totalRUB}
          `;
        console.log(message);
        ctx.deleteMessage();
        bot.telegram.sendMessage(ctx.chat.id, message, {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "⬅️ Back to sell", callback_data: "sell" },
                { text: "✅ Accept", callback_data: "accept_s" },
              ],
            ],
          },
        });
      })
    );
});

//-------------ACCEPT------------------

bot.command("accept_s", (ctx) => {
  sendAcceptSMessage(ctx);
});
bot.action("accept_s", (ctx) => {
  ctx.deleteMessage();
  sendAcceptSMessage(ctx);
});

//-------------ACCEPT------------------

function sendAcceptSMessage(ctx) {
  let acceptSMessage = `
        ❗️ Please enter the following information by using the "/" key:
        ⚡️ for example, to enter name:
        ⚡️ /name Alex
        ⚡️ This means that your name is: Alex
      
        🔦 Now do thesame for the following information:
      
      🕹 /name
      🕹 /surname
      🕹 /phone
      🕹 /amount
      `;

  bot.telegram.sendMessage(ctx.chat.id, acceptSMessage, {
    reply_markup: {
      inline_keyboard: [[{ text: "Back to token", callback_data: "token_s" }]],
    },
  });
}

//-------------------NAME------------------------------

bot.command("name", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" "); // split input into an array sepated by space
  console.log(inputArray);
  let message = "";

  if (inputArray.length == 1) {
    message =
      "🖌 Please enter your name after typing:\n ⚡️ /name.\n ⚡️ For example: /name Alex";
    ctx.reply(message);
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
    let Name = message;
    console.log(Name);
    ctx.reply(
      "✅ Your name is: " +
        message +
        "\n\n📌 If your name is not correct, please enter again with the command\n⇒ /name"
    );
  }
});

//-----------------SURNAME-----------------

bot.command("surname", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" "); // split input into an array sepated by space
  console.log(inputArray);
  let message = "";

  if (inputArray.length == 1) {
    message =
      "🖌 Please enter your surname after typing:\n ⚡️ /surname.\n ⚡️ For example: /surname Davinchi";
    ctx.reply(message);
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
    let Surname = message;
    console.log(Surname);
    ctx.reply(
      "✅ Your surname is: " +
        message +
        "\n\n📌 If your surname is not correct, please enter again with the command\n⇒ /surname"
    );
  }
});

//-----------------PHONE---------------------

bot.command("phone", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" "); // split input into an array separated by space
  console.log(inputArray);
  let message = "";

  if (inputArray.length == 1) {
    message = `
    📌 We currently make payements to 🏛 СБП registered users!
    📌 Please enter the phone number registerd with your 🏛 СБП account
    🖌 Enter number by typing:\n ⚡️ /phone.\n ⚡️ For example: /phone 898000000000
    `;
    ctx.reply(message);
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
    let Phone = message;
    console.log(Phone);
    ctx.reply(
      "✅ Your phone number is: " +
        message +
        "\n\n📌 If your phone number is not correct, please enter again with the command\n/⇒ phone"
    );
  }
});

//-------------AMOUNT------------------

bot.command("amount", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" "); // split input into an array separated by space
  console.log(inputArray);
  let message = "";

  if (inputArray.length == 1) {
    message =
      "🖌 Please enter the amount you want to buy after typing\n ⚡️ /amount.\n ⚡️ For example: /amount 0.01";
    ctx.reply(message);
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
    let Wallet = message;
    console.log(Wallet);
    ctx.reply(
      "✅ The amount is: " +
        message +
        "\n\n📌 If the amount is not correct, please enter again with the command\n⇒ /amount"
    );
  }

  let amountMessage = `Welcome, this bot gives you cryptocurrency information`;
  bot.telegram.sendMessage(ctx.chat.id, amountMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "⬅️ Back to token", callback_data: "token_s" }, // double check "token_b"
          { text: "choose bank", callback_data: "banks" },
        ],
      ],
    },
  });
});

//------------BANKS-----------------------
//------------BANKS-----------------------

bot.action("banks", (ctx) => {
  ctx.deleteMessage();
  sendBankMessage(ctx);
});

function sendBankMessage(ctx) {
  let bankMessage = `
  💸 We currently support only card payment, through СБП!
  ❗️ Note that all payments are in Rubles (₽)
  `;
  bot.telegram.sendMessage(ctx.chat.id, bankMessage, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🏛 СБП", callback_data: "sbp" }],
        [
          {
            text: "⬅️ Back to accept",
            callback_data: "accept_s",
          },
        ],
      ],
    },
  });
}

//-------------------SBP-------------

bot.command(["sbp"], (ctx) => {
  sendSbpMessage(ctx);
});
bot.action("sbp", (ctx) => {
  ctx.deleteMessage();
  sendSbpMessage(ctx);
});
function sendSbpMessage(ctx) {
  bot.telegram.sendPhoto(
    ctx.chat.id,
    "https://www.akcept.ru/bitrix/templates/akcept/images/pay/logo-sbp.jpg"
  );
  let sbpMessage = `You have choosen SBP`;
  bot.telegram.sendMessage(ctx.chat.id, sbpMessage, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Back to bank", callback_data: "banks" }],
        [{ text: "Send Crypto", callback_data: "crypto" }],
      ],
    },
  });
}

//-------------DISPUTE------------------

bot.command("dispute_s", (ctx) => {
  sendAcceptBMessage(ctx);
});
bot.action("dispute_s", (ctx) => {
  ctx.deleteMessage();
  sendAcceptBMessage(ctx);
});

function sendAcceptBMessage(ctx) {
  let acceptBMessage = `
        ❗️ Please enter the following information verify your claims and refund you. 
        Use the "/" key:
        ⚡️ for example, to enter name:
        ⚡️ /name Alex
        ⚡️ This means that your name is: Alex
      
        🔦 Now do thesame for the following information:
      
      🕹 /name
      🕹 /surname
      🕹 /phone
      🕹 /hashid
      `;

  bot.telegram.sendMessage(ctx.chat.id, acceptBMessage, {
    reply_markup: {
      inline_keyboard: [[{ text: "send dispute", callback_data: "send" }]],
    },
  });
}

bot.launch();
