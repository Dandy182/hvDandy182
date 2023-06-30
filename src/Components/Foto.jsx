

export default function Foto({sFoto, img, nameFoto}){

    return(<div className={sFoto}>
        <img src={img} alt={nameFoto} />
    </div>)
}