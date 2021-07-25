import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
'0xAda336Ca3896Dc326867750FCFE5C1e0Bd368FBb'
);

export default instance;