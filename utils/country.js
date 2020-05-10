export const getCountryData = (countrySeries) => {

    if (!countrySeries) {
        return {}
    }
    const out = {
        date: null,
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        suffering: 0,
        mortalityrate: 0
    }

    countrySeries.forEach((val, i, arr) => {
        out.date = val.date
        out.confirmed += parseInt(val.confirmed)
        out.recovered += parseInt(val.recovered)
        out.deaths += parseInt(val.deaths)
    })

    out.suffering = out.confirmed - (out.deaths + out.recovered)
    out.mortalityrate = out.deaths / out.confirmed

    return out;
}

export const addExtraSeriesData = ({entry = null, countryName = null} = {}) => {
    const { confirmed, deaths, recovered} = entry
    return {
        ...entry,
        countryName,
        mortalityRate: (deaths === 0 || confirmed === 0) ? 0 : deaths / confirmed,
        suffering: confirmed - (deaths + recovered)
    }
}
export const getAggregateData = (countryData) => {
    if (countryData == undefined) { return {} }
    const out = {}
    Object.keys(countryData).forEach((name) => {
        out[name] = getCountryData(countryData[name])
    })
    return out
}

export const getChartData = (dataset) => {
    const keys = Object.keys(dataset)
    // console.log('keys', keys)
    // console.log('dataset', dataset)
    
    return keys.map((countryName) => {
        const countryData = dataset[countryName]
        const lastEntryIndex = countryData.length - 1
        return countryData[lastEntryIndex]
    })
}

export default {
    getCountryData,
    getAggregateData,
    addExtraSeriesData,
    getChartData
}