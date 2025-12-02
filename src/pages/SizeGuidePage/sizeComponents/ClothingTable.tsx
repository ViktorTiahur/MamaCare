import SizeTable from './SizeTable'

const clothingColumns = ["Size Label", "Age", "Height (cm)", "Width (kg)"];

const clothingRows = [
  ["Newborn", "0M", "up to 56", "up to 4"],
  ["0 - 3 Months", "0-3M", "56 - 62", "4 - 6"],
  ["3 - 6 Months", "3-6M", '62 - 68', '6 - 8'],
  ['6 - 9 Months', '6-9M', '68 - 74', '8 - 9'],
  ['9 - 12 Months', '6-12M', '74 - 80', '9 - 10'],
  ['12 - 18 Months', '12-18M', '80 - 86', '10 - 12'],
  ['18 - 24 Months', '18-24M', '86 - 92', '12 - 13.5'],
  ['2 - 3 Years', '2-3Y', '92 - 98', '13.5 - 15']
];

const ClothingTable = () => {
  return (
    <SizeTable columns={clothingColumns} rows={clothingRows}/>
  )
}

export default ClothingTable