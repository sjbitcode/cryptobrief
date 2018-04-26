const coinList = [
  {
    "id": "bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "rank": "1"
  },
  {
    "id": "ethereum",
    "name": "Ethereum",
    "symbol": "ETH",
    "rank": "2"
  },
  {
    "id": "ripple",
    "name": "Ripple",
    "symbol": "XRP",
    "rank": "3"
  },
  {
    "id": "bitcoin-cash",
    "name": "Bitcoin Cash",
    "symbol": "BCH",
    "rank": "4"
  },
  {
    "id": "eos",
    "name": "EOS",
    "symbol": "EOS",
    "rank": "5"
  },
  {
    "id": "litecoin",
    "name": "Litecoin",
    "symbol": "LTC",
    "rank": "6"
  },
  {
    "id": "cardano",
    "name": "Cardano",
    "symbol": "ADA",
    "rank": "7"
  },
  {
    "id": "stellar",
    "name": "Stellar",
    "symbol": "XLM",
    "rank": "8"
  },
  {
    "id": "iota",
    "name": "IOTA",
    "symbol": "MIOTA",
    "rank": "9"
  },
  {
    "id": "neo",
    "name": "NEO",
    "symbol": "NEO",
    "rank": "10"
  },
  {
    "id": "monero",
    "name": "Monero",
    "symbol": "XMR",
    "rank": "11"
  },
  {
    "id": "tron",
    "name": "TRON",
    "symbol": "TRX",
    "rank": "12"
  },
  {
    "id": "dash",
    "name": "Dash",
    "symbol": "DASH",
    "rank": "13"
  },
  {
    "id": "nem",
    "name": "NEM",
    "symbol": "XEM",
    "rank": "14"
  },
  {
    "id": "tether",
    "name": "Tether",
    "symbol": "USDT",
    "rank": "15"
  },
  {
    "id": "ethereum-classic",
    "name": "Ethereum Classic",
    "symbol": "ETC",
    "rank": "16"
  },
  {
    "id": "vechain",
    "name": "VeChain",
    "symbol": "VEN",
    "rank": "17"
  },
  {
    "id": "qtum",
    "name": "Qtum",
    "symbol": "QTUM",
    "rank": "18"
  },
  {
    "id": "omisego",
    "name": "OmiseGO",
    "symbol": "OMG",
    "rank": "19"
  },
  {
    "id": "binance-coin",
    "name": "Binance Coin",
    "symbol": "BNB",
    "rank": "20"
  },
  {
    "id": "icon",
    "name": "ICON",
    "symbol": "ICX",
    "rank": "21"
  },
  {
    "id": "bitcoin-gold",
    "name": "Bitcoin Gold",
    "symbol": "BTG",
    "rank": "22"
  },
  {
    "id": "lisk",
    "name": "Lisk",
    "symbol": "LSK",
    "rank": "23"
  },
  {
    "id": "zcash",
    "name": "Zcash",
    "symbol": "ZEC",
    "rank": "24"
  },
  {
    "id": "nano",
    "name": "Nano",
    "symbol": "NANO",
    "rank": "25"
  },
  {
    "id": "bytom",
    "name": "Bytom",
    "symbol": "BTM",
    "rank": "26"
  },
  {
    "id": "bitcoin-private",
    "name": "Bitcoin Private",
    "symbol": "BTCP",
    "rank": "27"
  },
  {
    "id": "verge",
    "name": "Verge",
    "symbol": "XVG",
    "rank": "28"
  },
  {
    "id": "populous",
    "name": "Populous",
    "symbol": "PPT",
    "rank": "29"
  },
  {
    "id": "bytecoin-bcn",
    "name": "Bytecoin",
    "symbol": "BCN",
    "rank": "30"
  },
  {
    "id": "steem",
    "name": "Steem",
    "symbol": "STEEM",
    "rank": "31"
  },
  {
    "id": "wanchain",
    "name": "Wanchain",
    "symbol": "WAN",
    "rank": "32"
  },
  {
    "id": "bitcoin-diamond",
    "name": "Bitcoin Diamond",
    "symbol": "BCD",
    "rank": "33"
  },
  {
    "id": "bitshares",
    "name": "BitShares",
    "symbol": "BTS",
    "rank": "34"
  },
  {
    "id": "siacoin",
    "name": "Siacoin",
    "symbol": "SC",
    "rank": "35"
  },
  {
    "id": "zilliqa",
    "name": "Zilliqa",
    "symbol": "ZIL",
    "rank": "36"
  },
  {
    "id": "dogecoin",
    "name": "Dogecoin",
    "symbol": "DOGE",
    "rank": "37"
  },
  {
    "id": "stratis",
    "name": "Stratis",
    "symbol": "STRAT",
    "rank": "38"
  },
  {
    "id": "maker",
    "name": "Maker",
    "symbol": "MKR",
    "rank": "39"
  },
  {
    "id": "0x",
    "name": "0x",
    "symbol": "ZRX",
    "rank": "40"
  },
  {
    "id": "aeternity",
    "name": "Aeternity",
    "symbol": "AE",
    "rank": "41"
  },
  {
    "id": "digixdao",
    "name": "DigixDAO",
    "symbol": "DGD",
    "rank": "42"
  },
  {
    "id": "waves",
    "name": "Waves",
    "symbol": "WAVES",
    "rank": "43"
  },
  {
    "id": "decred",
    "name": "Decred",
    "symbol": "DCR",
    "rank": "44"
  },
  {
    "id": "status",
    "name": "Status",
    "symbol": "SNT",
    "rank": "45"
  },
  {
    "id": "aion",
    "name": "Aion",
    "symbol": "AION",
    "rank": "46"
  },
  {
    "id": "rchain",
    "name": "RChain",
    "symbol": "RHOC",
    "rank": "47"
  },
  {
    "id": "ontology",
    "name": "Ontology",
    "symbol": "ONT",
    "rank": "48"
  },
  {
    "id": "golem-network-tokens",
    "name": "Golem",
    "symbol": "GNT",
    "rank": "49"
  },
  {
    "id": "augur",
    "name": "Augur",
    "symbol": "REP",
    "rank": "50"
  },
  {
    "id": "loopring",
    "name": "Loopring",
    "symbol": "LRC",
    "rank": "51"
  },
  {
    "id": "waltonchain",
    "name": "Waltonchain",
    "symbol": "WTC",
    "rank": "52"
  },
  {
    "id": "basic-attention-token",
    "name": "Basic Attention Token",
    "symbol": "BAT",
    "rank": "53"
  },
  {
    "id": "iostoken",
    "name": "IOStoken",
    "symbol": "IOST",
    "rank": "54"
  },
  {
    "id": "hshare",
    "name": "Hshare",
    "symbol": "HSR",
    "rank": "55"
  },
  {
    "id": "komodo",
    "name": "Komodo",
    "symbol": "KMD",
    "rank": "56"
  },
  {
    "id": "mixin",
    "name": "Mixin",
    "symbol": "XIN",
    "rank": "57"
  },
  {
    "id": "ardor",
    "name": "Ardor",
    "symbol": "ARDR",
    "rank": "58"
  },
  {
    "id": "digibyte",
    "name": "DigiByte",
    "symbol": "DGB",
    "rank": "59"
  },
  {
    "id": "ark",
    "name": "Ark",
    "symbol": "ARK",
    "rank": "60"
  },
  {
    "id": "kucoin-shares",
    "name": "KuCoin Shares",
    "symbol": "KCS",
    "rank": "61"
  },
  {
    "id": "centrality",
    "name": "Centrality",
    "symbol": "CENNZ",
    "rank": "62"
  },
  {
    "id": "pivx",
    "name": "PIVX",
    "symbol": "PIVX",
    "rank": "63"
  },
  {
    "id": "dentacoin",
    "name": "Dentacoin",
    "symbol": "DCN",
    "rank": "64"
  },
  {
    "id": "mithril",
    "name": "Mithril",
    "symbol": "MITH",
    "rank": "65"
  },
  {
    "id": "dragonchain",
    "name": "Dragonchain",
    "symbol": "DRGN",
    "rank": "66"
  },
  {
    "id": "gas",
    "name": "Gas",
    "symbol": "GAS",
    "rank": "67"
  },
  {
    "id": "aelf",
    "name": "aelf",
    "symbol": "ELF",
    "rank": "68"
  },
  {
    "id": "kyber-network",
    "name": "Kyber Network",
    "symbol": "KNC",
    "rank": "69"
  },
  {
    "id": "qash",
    "name": "QASH",
    "symbol": "QASH",
    "rank": "70"
  },
  {
    "id": "substratum",
    "name": "Substratum",
    "symbol": "SUB",
    "rank": "71"
  },
  {
    "id": "syscoin",
    "name": "Syscoin",
    "symbol": "SYS",
    "rank": "72"
  },
  {
    "id": "ethos",
    "name": "Ethos",
    "symbol": "ETHOS",
    "rank": "73"
  },
  {
    "id": "cryptonex",
    "name": "Cryptonex",
    "symbol": "CNX",
    "rank": "74"
  },
  {
    "id": "factom",
    "name": "Factom",
    "symbol": "FCT",
    "rank": "75"
  },
  {
    "id": "veritaseum",
    "name": "Veritaseum",
    "symbol": "VERI",
    "rank": "76"
  },
  {
    "id": "pundi-x",
    "name": "Pundi X",
    "symbol": "NPXS",
    "rank": "77"
  },
  {
    "id": "storm",
    "name": "Storm",
    "symbol": "STORM",
    "rank": "78"
  },
  {
    "id": "bancor",
    "name": "Bancor",
    "symbol": "BNT",
    "rank": "79"
  },
  {
    "id": "monacoin",
    "name": "MonaCoin",
    "symbol": "MONA",
    "rank": "80"
  },
  {
    "id": "nebulas-token",
    "name": "Nebulas",
    "symbol": "NAS",
    "rank": "81"
  },
  {
    "id": "reddcoin",
    "name": "ReddCoin",
    "symbol": "RDD",
    "rank": "82"
  },
  {
    "id": "funfair",
    "name": "FunFair",
    "symbol": "FUN",
    "rank": "83"
  },
  {
    "id": "elastos",
    "name": "Elastos",
    "symbol": "ELA",
    "rank": "84"
  },
  {
    "id": "salt",
    "name": "SALT",
    "symbol": "SALT",
    "rank": "85"
  },
  {
    "id": "gxchain",
    "name": "GXChain",
    "symbol": "GXS",
    "rank": "86"
  },
  {
    "id": "wax",
    "name": "WAX",
    "symbol": "WAX",
    "rank": "87"
  },
  {
    "id": "power-ledger",
    "name": "Power Ledger",
    "symbol": "POWR",
    "rank": "88"
  },
  {
    "id": "zcoin",
    "name": "ZCoin",
    "symbol": "XZC",
    "rank": "89"
  },
  {
    "id": "nxt",
    "name": "Nxt",
    "symbol": "NXT",
    "rank": "90"
  },
  {
    "id": "kin",
    "name": "Kin",
    "symbol": "KIN",
    "rank": "91"
  },
  {
    "id": "revain",
    "name": "Revain",
    "symbol": "R",
    "rank": "92"
  },
  {
    "id": "monaco",
    "name": "Monaco",
    "symbol": "MCO",
    "rank": "93"
  },
  {
    "id": "enigma-project",
    "name": "Enigma",
    "symbol": "ENG",
    "rank": "94"
  },
  {
    "id": "request-network",
    "name": "Request Network",
    "symbol": "REQ",
    "rank": "95"
  },
  {
    "id": "chainlink",
    "name": "ChainLink",
    "symbol": "LINK",
    "rank": "96"
  },
  {
    "id": "nucleus-vision",
    "name": "Nucleus Vision",
    "symbol": "NCASH",
    "rank": "97"
  },
  {
    "id": "byteball",
    "name": "Byteball Bytes",
    "symbol": "GBYTE",
    "rank": "98"
  },
  {
    "id": "maidsafecoin",
    "name": "MaidSafeCoin",
    "symbol": "MAID",
    "rank": "99"
  },
  {
    "id": "tenx",
    "name": "TenX",
    "symbol": "PAY",
    "rank": "100"
  }
];

export default coinList;
