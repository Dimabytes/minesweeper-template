import {Row, Col, Typography} from 'antd';
import styles from './GameHeader.module.scss'
import smile from './smiling.png'

export const GameHeader = () => {
  return (
    <Row justify="space-between">
      <Col>
        <Typography.Text className={styles.score}>
          015
        </Typography.Text>
      </Col>

      <Col>
        <img className={styles.smile} alt="smile" src={smile}/>
      </Col>

      <Col>
        <Typography.Text className={styles.score}>
          098
        </Typography.Text>
      </Col>
    </Row>
  )
}
