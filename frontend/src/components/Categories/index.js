import './index.css'

const Categories = ({onSelect}) => {
  const items = ['Mountain', 'Flowers', 'Beaches', 'Cities']

  return (
    <div className="categories">
      {items.map(item => (
        <button key={item} onClick={() => onSelect(item)}>
          {item}
        </button>
      ))}
    </div>
  )
}

export default Categories