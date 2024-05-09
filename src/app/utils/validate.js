export const notEmpty = ([...fields]) => {
    fields.forEach(field => {
        if (!field){
            return false
        }
    })
    return true
}

