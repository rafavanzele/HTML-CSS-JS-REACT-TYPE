import { useEffect, useState, useMemo} from 'react'

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)

    // const premiunNumbers = ['0', '100', '200']

    const premiumNumbers = useMemo(() => {
        return ['0', '100', '200']
    }, [])

    useEffect(() => {
        console.log('premiumNumbers foi alterado')
    }, [premiumNumbers])

  return (
    <div>
        <h2>7. UseMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)} />
        {premiumNumbers.includes(number) ? <p>Acertou o número!</p> : ''}
    </div>
  )
}

export default HookUseMemo