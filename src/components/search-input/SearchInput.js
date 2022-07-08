import search from '../../icons/search.svg'
import './SearchInput.css'

export function SearchInput(props) {
  const { placeholder, ...rest } = props
  return (
    <div className='search-input-wrapper'>
      <img className='search' alt='' src={search} />
      <input className='input' {...rest} placeholder={placeholder || 'Search'} />
    </div>
  )
}