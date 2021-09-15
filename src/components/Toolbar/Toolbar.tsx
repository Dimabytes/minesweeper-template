import {Col, Row, Popover, Button} from 'antd';
import {PopoverContent} from './PopoverContent';

const toolbarItems = [
  {
    label: 'Game',
    children: [
      {
        label: 'Quit',
      },
      {
        label: 'Rules',
      }
    ]
  },
  {
    label: 'Help',
    children: [
      {
        label: 'Item 1',
      },
      {
        label: 'Item 2',
      }
    ]
  }
]

export const Toolbar = () => {
  return (
    <Row gutter={3}>
      {toolbarItems.map(el => (
        <Col>
          <Popover
            content={<PopoverContent items={el.children}/>}
            trigger="click"
          >
            <Button>{el.label}</Button>
          </Popover>
        </Col>
      ))}

    </Row>
  )
}
