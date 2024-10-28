import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isWalletOpen, setWalletOpen] = useState(false);
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setWalletConnected(true);
        setWalletOpen(false);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('MetaMask is not installed!');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">NFT Marketplace</div>
      <div className="navbar-links">
        <a href="#collections">Collections</a>
        <div className="search-bar">
          <input type="text" placeholder="Search NFTs..." />
          <FaSearch />
        </div>
        <FaShoppingCart className="cart-icon" title="Cart" />
        <FaUserCircle className="user-icon" title="Connect Wallet" onClick={() => setWalletOpen(true)} />
      </div>

      {/* Wallet Modal */}
     {isWalletOpen && (
        <div className="wallet-modal">
          <div className="wallet-modal-content">
            <h3>Connect Wallet</h3>
            <button onClick={connectMetaMask}>MetaMask</button>
            <button onClick={() => alert('Coming Soon!')}>Coinbase Wallet</button>
            <button onClick={() => alert('Coming Soon!')}>WalletConnect</button>
            <button onClick={() => setWalletOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Wallet Address Display */}
      {isWalletConnected && (
        <div className="wallet-address">
          Connected: {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;





/*import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ connectWallet, onConnect }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">NFT Marketplace</Link>
            </div>

            <div className="navbar-links">
                <div className="navbar-item" onClick={toggleDropdown}>
                    Discover <FaChevronDown />
                    {showDropdown && (
                        <div className="dropdown-menu">
                            <Link to="/collections" onClick={() => setShowDropdown(false)}>Collections</Link>
                            <Link to="/uploadnft" onClick={() => setShowDropdown(false)}>Upload NFT</Link>
                            <button onClick={() => { connectWallet(); setShowDropdown(false); }}>Connect Wallet</button>
                        </div>
                    )}
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search NFTs..." />
                    <FaSearch />
                </div>

                <Link to="/cart" className="cart-icon"><FaShoppingCart /></Link>

                <div className="user-icon" onClick={onConnect}>
                    <FaUser />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;*/




