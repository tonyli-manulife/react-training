export function JSXListAndKeys(props) {
  const names = [{ id: 'p1', name: 'Tom' }, { id: 'p2', name: 'Jane' }]

  return (
    <ul>
      {
        names.map((item) =>
          <li key={item.id}>
            {item.name}
          </li>
        )
      }
    </ul>
  )
}