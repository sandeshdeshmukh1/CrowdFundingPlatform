const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  "icon mosquito toe scene car maximum phrase stomach casual plug impulse gym",
  // remember to change this to your own phrase!
  "https://rinkeby.infura.io/v3/55a4317116e94636bddcfbe5c37c6cd4"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  // console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data:compiledFactory.bytecode})
    .send({from:accounts[0],gas:'1000000'});

  
  console.log("Contract deployed to", result.options.address);
};
deploy();

// 0xAda336Ca3896Dc326867750FCFE5C1e0Bd368FBb