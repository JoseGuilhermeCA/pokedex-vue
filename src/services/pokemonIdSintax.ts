export  function pokemonIdSintax(crudeId: number) {
    if (crudeId < 10) {
        return `#00${crudeId}`
    } else if (crudeId < 100) {
        return `#0${crudeId}`
    } else if (crudeId < 1000) {
        return `#${crudeId}`
    }
}