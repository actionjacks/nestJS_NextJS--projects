import React, { useState } from 'react'

const useNumber = (initialValue: number) => useState<number>(initialValue)

type UseNumberValue = ReturnType<typeof useNumber>[0]
type UseNumberSetState = ReturnType<typeof useNumber>[1]

const Incrementor: React.FC<{
  value: UseNumberValue,
  setValue: UseNumberSetState

}> = ({ value, setValue }) => (
  <div>
    <button onClick={() => setValue(value + 1)}>
      incrementor - {value}
    </button>
  </div>
)



export { Incrementor, useNumber }