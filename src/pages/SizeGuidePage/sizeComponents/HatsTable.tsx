import React from 'react'
import SizeTable from './SizeTable';

const hatsColumns = ['Age', 'Head Circumference (cm)'];
const hatsRows = [
  ['0-3 Months', '35-40'],
  ['3-6 Months', '40-44'],
  ['6-12 Months', '44-46'],
  ['1-2 Years', '46-49'],
  ['2-4 Years', '49-51']
];


const HatsTable = () => {
  return (
    <SizeTable columns={hatsColumns} rows={hatsRows}/>
  )
}

export default HatsTable