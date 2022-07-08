import './Button.css'

export function Button({
  key,
  type = 'primary',
  size = "large",
  text,
  onClick
}) {
  return (
    <button key={key} className={'btn btn-'+type+' btn-'+size} onClick={onClick}>{text}</button>
  )
}