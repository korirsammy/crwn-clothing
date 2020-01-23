import React from 'react';
import {withRouter} from 'react-router-dom';

import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage=()=>(
    <div className='homepage'>
       <Directory/>      
    </div>
);

export default HomePage; 