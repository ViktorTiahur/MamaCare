import React from 'react'
import styles from '../SizeGuidePage.module.scss'

interface SizeTableProps {
  columns: string[],
  rows: (string | number)[][]
} 

const SizeTable: React.FC<SizeTableProps> = ({ columns, rows }) => {
  return (
    <table className={styles.table} style={{"--cols": columns.length}}>

      <thead>
        <tr>
          {columns.map((col, i) => <th key={i}>{col}</th>)}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((kletka, k) => <td key={k}>{kletka}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SizeTable