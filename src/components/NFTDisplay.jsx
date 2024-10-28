import React from 'react';

const NFTDisplay = () => {
  const nfts = [
    { name: "NFT 1", description: "First NFT", imageUrl: "https://via.placeholder.com/150" },
    { name: "NFT 2", description: "Second NFT", imageUrl: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="nft-display">
      <h2>Your NFTs</h2>
      {nfts.map((nft, index) => (
        <div key={index} className="nft-card">
          <img src={nft.imageUrl} alt={nft.name} />
          <h3>{nft.name}</h3>
          <p>{nft.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NFTDisplay;

