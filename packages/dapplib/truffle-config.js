require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture street repeat machine exchange giraffe light army ghost'; 
let testAccounts = [
"0x7f1db1042075d26d40b7ed85c86e89f3f474442aa4757243b2ade5e154065313",
"0x4bc9756005294e6a638e535b829b16ef88e5dc299dce4c70e6356c98314948ad",
"0x6db1499012ee28d396a0434ce619463b3534c9c21cf78285476bf14588139544",
"0x5e0d16656d628b8f10e7749c4490be4076f0e628941a1d12a249b836e7567195",
"0xb42d33f1183be98bd99aa1f03237e32e6d28c9c8c5fe0bae92ddb27495632331",
"0x24c926a42d1ff37a291faadd6ef2e3c0af846c1030be9c966096ae9f9ba18391",
"0xdf10b15a732310169da8eb134a0af1d82fb7df371ebc75911e669d503f0386bd",
"0x1d358c8701abb24c46ce381cb11867222006c92c2fe8aa2d7d7132518e75eec6",
"0x5b5c214d7fe71ee369bfbbf62a4158c18f492bd7124391b3bcbacf916d27d456",
"0x467081ca59f46bca403dd6a4f23919c1fcb7343eb7ef8348bd1daeadabdb25c7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

