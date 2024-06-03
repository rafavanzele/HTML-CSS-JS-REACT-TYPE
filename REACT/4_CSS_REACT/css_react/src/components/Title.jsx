// CSS SCOPED (jeito mais utilizado de aplicar css de forma que os estilos nao 'vazem' de um componente para outros. Para isso usamos a extensao '.module.css')

import classes from './Title.module.css'

const Title = () => {
  return (
    <h1 className={classes.title}>Meu título Scoped</h1> //aqui inclui a classe 'title' do arquivo title.module.css
  )
}

export default Title