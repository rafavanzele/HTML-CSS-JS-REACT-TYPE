import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'

import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'
import HookUseRef from '../components/HookUseRef'
import HookUseCallBack from '../components/HookUseCallBack'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'

const Home = () => {
  // 4 USECONTEXT
  const {contextValue} = useContext(SomeContext)

  
  return (
    <div>
      <h1>Home</h1>
      {/* 1 USESTATE (obs: para leitura de dados esse hook nao tem tanta importancia. Mas para alterar dados sim) */}
      <HookUseState />

      {/* 2 USEREDUCER */}
      <HookUseReducer/>

      {/* 3 USEEFFECT */}
      <HookUseEffect/>

      {/* 4 USECONTEXT */}
      <h2>4. UseContext</h2>
      <p>Valor do contexto: {contextValue}</p>

      <hr />

      {/* 5 USEREF */}
      <HookUseRef/>

      <hr />

      {/* 6 USECALLBACK */}
      <HookUseCallBack/>

      <hr />

      {/* 7 USEMEMO */}
      <HookUseMemo/>

      <hr />

      {/* 8 USELAYOUTEFFECT */}
      <HookUseLayoutEffect/>

      {/* 9 USEIMPERATIVEHANDLE */}
      <HookUseImperativeHandle/>

      <hr />

      {/* 10 CUSTOMHOOK */}
      <HookCustom/>

      <hr />
    </div>
  )
}

export default Home