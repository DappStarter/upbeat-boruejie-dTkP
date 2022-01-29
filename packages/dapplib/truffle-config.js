require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift raise saddle exchange grace fashion flock gate'; 
let testAccounts = [
"0xd509e7a26760c8d750fa2cd8d5f988669713191ec0db60baa2b36f842b663c76",
"0xa0cb6b6183c0911d84e20406805628a4d06e08de7a3ad68d3034aecf70c1a8d3",
"0x1ef30f406221d28fc9ee3bffb3bf31cd9217a3b207fdbbee414de829e3f67b67",
"0x901c56842adc8b34479b493626478fb92eccada3351ada0c06945efb64f6bee0",
"0xc68b2e4c14f8dcccd99ec6c6cc3bfeeab874036e4acd99949c5284bce8f44d01",
"0xee528c962ffaf78a42fb0094b534e27883fa43210165da7a4f045d7fd1d3cf62",
"0x99f538c1ab847e2faeea902dab3a1b1b544f100a1954747d3a425ff5a96f805c",
"0x42907aa2e8c921aa3d60220e26dffb0728d75c92acf0cb6350c3924214e6dfed",
"0x3699057a608c170db812d358da453e6d587f47440bf7403b3ddc05130f1c675b",
"0xb0f279ac425e25f31a5b7ad9736cf829c92d969dab865317458f33484e2fca50"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

