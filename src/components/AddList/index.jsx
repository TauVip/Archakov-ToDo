import { useState } from 'react'
import Badge from '../Badge'
import List from '../List'
import './AddList.scss'

const AddList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false)
  const [selectedColor, selectColor] = useState(colors[0].id)

  return (
    <div className='add-list'>
      <List
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            className: 'list__add-button',
            icon: (
              <svg
                width='12'
                height='12'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 1V15'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1 8H15'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ),
            name: 'Добавить список'
          }
        ]}
        isRemovable
      />
      {visiblePopup && (
        <div className='add-list__popup'>
          <input className='field' type='text' placeholder='Название списка' />
          <div className='add-list__popup-colors'>
            {colors.map(color => (
              <Badge
                onClick={() => selectColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectedColor === color.id && 'active'}
              />
            ))}
          </div>
          <button className='button'>Добавить</button>
        </div>
      )}
    </div>
  )
}
export default AddList
