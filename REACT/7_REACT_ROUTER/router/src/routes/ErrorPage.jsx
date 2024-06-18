// Obs.: nas páginas de ERRO do react, deve-se sempre importar esse hook abaixo
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div>
            <h1>Ops!</h1>
            <p>Tivemos um problema</p>

            <p>{error.statusText}</p>
            <p>{error.error.message}</p>
        </div>
    )
}

export default ErrorPage