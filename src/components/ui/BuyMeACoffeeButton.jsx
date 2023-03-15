import React from 'react';

const BuyMeACoffeeButton = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <a href="https://www.buymeacoffee.com/elmonickcool" target="_blank" rel="noopener">
            <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" >
          </a>
        `,
      }}
    />
  );
};

export default BuyMeACoffeeButton;