// src/lib/totalizer.js
export function round2(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100
}

const taxRates = {
UT: 0.0665,
NV: 0.08,
TX: 0.0625,
AL: 0.04,
CA: 0.0825
}

function calculate({ qty, price , state}) 
{
   const subtotal=round2(qty * price)
let discountRate=0
if(subtotal>=30000) discountRate=0.15
    else if(subtotal>=10000) discountRate=0.10
    else if(subtotal>=7000) discountRate=0.07
    else if(subtotal>=3000) discountRate=0.05
    else if(subtotal>=1000) discountRate=0.03

const discount=round2(subtotal * discountRate)
const TotalafterDiscount=round2(subtotal-discount)

let taxRate = 0
if (state && state in taxRates) {
    taxRate = taxRates[state]
}

const taxAmount = round2(TotalafterDiscount * taxRate)
const total = round2(TotalafterDiscount + taxAmount)

return { subtotal,discountRate,discount,TotalafterDiscount ,taxRate,taxAmount,total};
}
export default calculate
