import {Field, filedSize, FieldCell} from './utils'
import {Row, Col} from 'antd';
import styles from './GameField.module.scss'
import bomb from './bomb.png'
import clsx from 'clsx'

const field = new Field();

interface FieldCellRendererProps {
  cell: FieldCell
}

const numberClass = {
  1: 'red',
  2: 'green',
  3: 'purple'
}

const FieldCellRenderer = ({cell}: FieldCellRendererProps) => {
  if(cell.type === 'bomb') {
    return <div  className={styles.bombWrapper}>
      <img alt="bomb" src={bomb} className={styles.bomb}/>
    </div>
  }

  if(cell.type === 'button') {
    return  <div className={styles.button}/>
  }

  if(cell.type === 'number') {
    return  <div className={clsx(styles[numberClass[cell.number!]], styles.number)}>{cell.number}</div>
  }

  if(cell.type === 'empty') {
    return  null
  }

  return null
}

const arrForField = new Array(filedSize).fill(0)


export const GameField = () => {
  return (
    <>
      {arrForField.map((_, x) =>
      <Row  className={styles.row} gutter={4} key={x}>
        {
          arrForField.map((_, y) => (
            <Col span={1}>
            <FieldCellRenderer key={y} cell={field.getCell(x, y)}/>
            </Col>
          ))
        }
      </Row>)}
    </>
  )
}
