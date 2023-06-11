// Write your code here

import './index.css'

const TabItem = props => {
  const {TabEachItem, onClickTabItem, highlight} = props
  const {tabId, displayText} = TabEachItem

  const onClickButton = () => {
    onClickTabItem(tabId)
  }

  const specialClass = highlight ? 'activeBtn' : ''
  const specialClass2 = highlight ? 'pure-Hello' : ''

  return (
    <li>
      <button
        className={`button ${specialClass}`}
        type="button"
        onClick={onClickButton}
      >
        {displayText}
      </button>
      <hr className={`Hello ${specialClass2}`} />
    </li>
  )
}

export default TabItem
