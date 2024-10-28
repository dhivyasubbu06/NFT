import React, { useState } from 'react';

const UploadNFT = () => {
  const [nftData, setNftData] = useState({
    name: '',
    description: '',
    imageFile: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNftData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNftData((prev) => ({ ...prev, imageFile: file }));
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  const handleSubmit = () => {
    console.log('Minting NFT with data:', nftData);
    alert('NFT Minted (mock)');
  };

  const handleViewNFT = () => {
    setShowPreview(true);
  };

  return (
    <div className="upload-nft">
      <h2>Upload NFT</h2>
      <input
        type="text"
        name="name"
        placeholder="NFT Name"
        value={nftData.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="NFT Description"
        value={nftData.description}
        onChange={handleChange}
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button onClick={handleSubmit}>Mint NFT</button>
      <button onClick={handleViewNFT}>View NFT</button>

      {showPreview && imagePreview && (
        <div className="nft-preview">
          <h3>Preview:</h3>
          <img src={imagePreview} alt="NFT Preview" className="nft-image" />
        </div>
      )}
    </div>
  );
};

export default UploadNFT;





{/*import React, { useState } from 'react';

const UploadNFT = () => {
  const [nftData, setNftData] = useState({
    name: '',
    description: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNftData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Minting NFT:', nftData);
    alert('NFT Minted (mock)'); // Placeholder for actual minting
  };

  return (
    <div className="upload-nft">
      <h2>Upload NFT</h2>
      <input
        type="text"
        name="name"
        placeholder="NFT Name"
        value={nftData.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="NFT Description"
        value={nftData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={nftData.imageUrl}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Mint NFT</button>
    </div>
  );
};

export default UploadNFT;*/}

