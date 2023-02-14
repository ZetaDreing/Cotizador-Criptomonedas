import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato',sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`
const Imagen = styled.img`
    display: block;
    width: 120px;
`
const Precio = styled.p`
font-size: 24px;
    span{
        font-weight: 700;
    }
`
const Texto = styled.p`
font-size: 18px;
    span{
        font-weight: 700;
    }
`


const Resultado = ({resultado}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = resultado
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='Imgen cripto' />
        <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variacion Ultimas 24 Horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado