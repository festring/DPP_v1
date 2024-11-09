import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { CONTACT_ABI, CONTACT_ADDRESS } from './config';


function handleClick() {
  // 특정 링크로 이동하는 코드
  window.location.href = 'https://ipfs.io/ipfs/QmZT52fkR3mkQ6W3nenXz6okUwVh4amaTBxchQg4viAxkD?filename=best.pt';
}


function App() {
  
  const [account, setAccount] = useState();
  const [contactList, setContactList] = useState();
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      // Instantiate smart contract using ABI and address.
      const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
      // set contact list to state variable.
      setContactList(contactList);
      // Then we get total number of contacts for iteration
      const counter = await contactList.methods.count().call();
      // iterate through the amount of time of counter
      for (var i = 1; i <= counter; i++) {
        // call the contacts method to get that particular contact from smart contract
        const contact = await contactList.methods.contacts(i).call();
        // add recently fetched contact to state variable.
        setContacts((contacts) => [...contacts, contact]);
      }
    }
    
    load();
    
  }, []);
  
  return (
    <div className="glass-container">
      <p>Your account </p><span>  {account}</span><br></br>
      <hr /> 
      <h1>Digital Product Passport</h1>
      <hr />
      <ul>
      <div className="button-container">
        <button className="button" onClick={handleClick}>AI Model Hash Code</button>
        <p className="description">Only authorized users can access the model.<br></br>
You can access the model by attaching the code to https:// ipfs.io/ipfs/</p>
      </div>
      <br></br>
        {Object.keys(contacts).map((contact, index) => (
          <li key={`${contacts[index].brand}`}>
            <span><b>Brand: </b>{contacts[index].brand}</span><br></br>
            <span><b>Supply Chain: </b>{contacts[index].supply}</span><br></br>
            <span><b>Product Name: </b>{contacts[index].product}</span><br></br>
            <span><b>Raw Materials: </b>{contacts[index].materials}</span><br></br>
            <span><b>Regulation: </b>{contacts[index].regulation}</span><br></br>
            <span><b>Circularity: </b>{contacts[index].circularity}</span><br></br>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default App;