import {Button} from 'antd';

export interface PopoverContentProps {
  items: {label: string}[]
}

export const PopoverContent = ({items}: PopoverContentProps) => {
  return (
    <>
      {items.map(el => (
        <div>
          <Button>{el.label}</Button>
        </div>
      ))}
    </>
  )
}
