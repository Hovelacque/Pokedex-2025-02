export default function PokemonCard({pokemon}){
    return (
        <>
        <img src={pokemon.imgSrc}/>
        <label style={{marginRight:5}} >{pokemon.name}</label>
        </>
    )
}