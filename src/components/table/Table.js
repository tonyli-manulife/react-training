import './Table.css'

export function Table(props) {
  const { headers, data = [] } = props
  return (
    <div className='table-wrapper'>
      <table>
        <thead>
          <tr>
            {
              headers.map((header, index) =>
                <th className=""
                  key={header.label + index}
                  align={header.align}
                  width={header.width}>
                  {header.label}
                </th>
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr key={index}>
                {
                  headers.map(header => {
                    const { key, align } = header;
                    return header.render ?
                      <td key={item[key] + index}>{header.render(item)}</td>
                      : (<td key={item[key] + index} align={align}>{item[key]}</td>)
                  })
                }
              </tr>
            ))

          }
        </tbody>
      </table>
    </div>
  )
}