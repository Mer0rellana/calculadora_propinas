import { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

interface TipPercentageProps{
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

export const TipPercentage = ({setTip, tip}:TipPercentageProps) => {
  return (
    <div>
        <h3 className="font-black text-2xl">
            Propina:
        </h3>

        <form>
            {
                tipOptions.map(t =>(
                    <div key={t.id} className="flex gap-2">
                        <label htmlFor={t.id}>{t.label}</label>
                        <input type="radio" name="tip" id={t.id} value={t.value} onChange={e =>setTip(+e.target.value)} checked={t.value === tip}/>
                    </div>
                ))
            }
        </form>
    </div>
  )
}
