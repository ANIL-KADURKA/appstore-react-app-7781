// Write your code here
import './index.css'

const AppItem = props => {
  const {AppEachItem} = props
  const {appName, imageUrl, category} = AppEachItem
  console.log(category)
  return (
    <li className="app-element">
      <img src={imageUrl} className="image-icon" alt={appName} />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
