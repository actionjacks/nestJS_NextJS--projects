import React, { useState } from 'react'

export interface Player {
  name: string
  age: number
}
export interface TextInputProps {
  text: string
  fn?: () => void
}

const TextInput: React.FC<TextInputProps> = ({ text }) => {
  const [player, setPlayer] = useState<Player>({
    name: 'jacek', age: 15
  })

  return (
    <div>
      {text}
      <div>
        {player.name}
        {player.age}
      </div>
      <input />
    </div>
  )
}

export default TextInput