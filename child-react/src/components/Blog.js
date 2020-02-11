import React from 'react';
import { Result, Progress } from 'antd';

export default class extends React.Component {
  render() {
    return (
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <div key="1" style={{ width: 500, margin: '0 auto' }}>
            <Progress key="1-1" percent={75} />
            <Progress key="1-2" percent={70} status="exception" />
            <Progress key="1-3" percent={100} />
          </div>
        ]}
      />
    );
  }
}
