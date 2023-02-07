import { Tab } from '@rneui/themed';
import React, {useState} from 'react';

function RneTab() {
    const [index, setIndex] = React.useState(0);
    return (
      <>
        <Tab value={index} onChange={setIndex} dense>
          <Tab.Item>Tab</Tab.Item>
          <Tab.Item>Tab</Tab.Item>
        </Tab>
      </>
    );
  };


  export default RneTab;
