import React from 'react';
import FeatureBox from './FeatureBox';

import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
     
       <FeatureBox image={featureimage1} title='Money Saving Services' />
       <FeatureBox image={featureimage2} title='Usability Interface' />

        </div>
    </div>
  )
}

export default Feature;