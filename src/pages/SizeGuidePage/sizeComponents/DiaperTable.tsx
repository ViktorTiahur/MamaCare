import React from 'react'
import SizeTable from './SizeTable';

const diaperColumns = ['Size', 'Baby Weight (kg)', 'Age Range (approx.)'];
const diaperRows = [
  ['Newborn', '<4', '0-1 Month'],
  ['Size 1', '4-6', '1-3 Months'],
  ['Size 2', '5-8', '2-6 Months'],
  ['Size 3', '7-13', '5-12 Months'],
  ['Size 4', '9-14', '9-18 Months'],
  ['Size 5', '11-16', '18-24 Months'],
  ['Size 6', '13+', '2+ Years']
];


const DiaperTable = () => {
  return (
    <SizeTable columns={diaperColumns} rows={diaperRows}/>
  )
}

export default DiaperTable