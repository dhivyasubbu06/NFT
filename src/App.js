import React, { useState } from 'react';
import web3 from './web3';
import ConnectWallet from './components/ConnectWallet';
import UploadNFT from './components/UploadNFT';
import NFTDisplay from './components/NFTDisplay';
import './styles/App.css';

const App = () => {
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
  };

  return (
    <div className="App">
      <header>
        <h1>NFT Marketplace</h1>
        {account ? <p>Connected: {account}</p> : <ConnectWallet connectWallet={connectWallet} />}
      </header>
      {account && (
        <main>
          <UploadNFT />
          <NFTDisplay />
        </main>
      )}
    </div>
  );
};

export default App;






/*import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UploadNFT from './components/UploadNFT';

function App() {
  return (
    <div className="App">
      <Navbar />
      <UploadNFT />
    </div>
  );
}

export default App;*/




