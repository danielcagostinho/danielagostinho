import React from 'react';

import './LanguagePill.scss';

const LanguagePill = ({children, color}) => {
  return ( 
    <div className="LanguagePill" style={{backgroundColor: color}}>
      <p>{children}</p>
    </div>
   );
}
 
export default LanguagePill;