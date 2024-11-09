export const CONTACT_ADDRESS = '0xd9dC623712f9B4E66c61520AF38a3aA87C7e5d23';

export const CONTACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_brand",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_supply",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_product",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_materials",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_regulation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_circularity",
				"type": "string"
			}
		],
		"name": "createContact",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contacts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "brand",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "supply",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "product",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "materials",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "regulation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "circularity",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];