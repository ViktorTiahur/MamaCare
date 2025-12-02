import SizeTable from './SizeTable';

const shoesColumns = ['EU Size', 'US Size', 'UK Size', 'Approx. Age', 'Foot length (cm)'];
const shoesRows = [
['16-17', '1-2', '0-1', '0-6 Months', '9.5-10.2'],
['18-19', '3-4', '2-3', '6-12 Months', '10.5-11.4'],
['20-21', '5-5.5', '4-4.5', '12-18 Months', '11.7-12.5'],
['22-23', '6-7', '5-6', '18-24 Months', '13-13.7']
];


const ShoesTable = () => {
  return (
    <SizeTable columns={shoesColumns} rows={shoesRows}/>
  )
}

export default ShoesTable