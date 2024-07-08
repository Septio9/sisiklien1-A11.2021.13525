import {useParams} from "react-router-dom"

function Produk() {
    let { id } = useParams();
    return (
    <div>
        Ini Produk : {id}
    </div>
  )
}

export default Produk