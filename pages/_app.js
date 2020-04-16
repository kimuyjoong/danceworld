import React from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import ScheduleList from '../components/ScheduleList';

const MacArt = ({ Component }) => {
  return (
    <>
      <Head>
        <title>댄스월드</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8f25a0f7a15e0a4ca3cc5ecf2b3b115c"></script>
      </Head>
      <ScheduleList>
        <Component />  
      </ScheduleList>  
    </>
  );
};

export default MacArt;