import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import {Col, Row, Typography} from 'antd';

import {Toolbar} from 'components/Toolbar';
import styles from './index.module.scss'
import {GameHeader} from 'components/GameHeader';
import {GameField} from 'components/GameField';



ReactDOM.render(
  <div className={styles.main}>
    <div className={styles.content}>
      <Row justify="center">
        <Col>
          <Typography.Title>💣 Minesweeper 💣</Typography.Title>
        </Col>
      </Row>
      <Toolbar/>
      <div className={styles.game}>
        <GameHeader/>
        <GameField/>
      </div>
    </div>

  </div>,
  document.getElementById('root')
);
