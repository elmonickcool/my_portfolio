import React from 'react';
import Image from 'next/image';

const BuyMeACoffeeButton = () => {
  return (
    <a href="https://www.buymeacoffee.com/elmonickcool" target="_blank" rel="noreferrer">
      <Image src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174" />
    </a>
  );
};

export default BuyMeACoffeeButton;
