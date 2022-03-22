from web3 import Web3 
from key import PRIVATE_KEY

ADRESS_FROM = '0x02dCD328BE7A6944E683FA09F540060D8CB5bF90'
ADRESS_TO = '0xDC7BBDB54b11F86302c12E68d55dcc7B3EFADd56'

ENDPOINT = 'https://ropsten.infura.io/v3/9db3174e0d9340e9b5a6b8478bf457e4'
w3 = Web3(Web3.HTTPProvider(ENDPOINT))

tx = {
    'nonce': w3.eth.get_transaction_count(ADRESS_FROM),
    'to': ADRESS_TO,
    'value': w3.toWei(0.01, 'ether'),
    'gas': 100000,
    'gasPrice': w3.toWei('99', 'gwei'),
    'data': bytes('valerii_kulikovskyi', 'utf_8')
}

signed_tx = w3.eth.account.signTransaction(tx, PRIVATE_KEY)
tx_hash = w3.eth.sendRawTransaction(signed_tx.rawTransaction)

print(w3.toHex(tx_hash)) 
