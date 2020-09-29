import React from 'react';
import Personal from './cateringInfo/personal';
import Events from './cateringInfo/events';
import Corporate from './cateringInfo/corporate';






const CateringInfo = () => {
  return (
    <div className="catering-info">
        <Personal />
        <Events />
        <Corporate />
    </div>
  );
}

export default CateringInfo;