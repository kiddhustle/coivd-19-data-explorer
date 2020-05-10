import {addExtraSeriesData, getAggregateData, getCountryData} from './country'

const sum = (...args) => {
    let nums = args
    return nums.reduce((a, b) => {return a + b}, 0)
}

const data = {
    "United Kingdom": [
        {
            date: "2020-1-22",
            confirmed: 553,
            deaths: 121,
            recovered: 227
        },
        {
            date: "2020-1-23",
            confirmed: 1043,
            deaths: 401,
            recovered: 347
        },
        {
            date: "2020-1-24",
            confirmed: 227,
            deaths: 326,
            recovered: 498
        }
    ]
}

describe('sum function', () => {
    const args = [7, 3, 5]
    const result = sum(...args)
    expect(result).toEqual(15)
})

describe('getCountryData', () => {
    it('should run test', () => {
        expect(1).toEqual(1)
    })

    describe('getCountryData', () => {
        it('should tally up values', () => {
            let countryData
            let countrySeries
            Object.keys(data).forEach((name) => {
                countrySeries = data[name]
                countryData = getCountryData(countrySeries)
                let { confirmed, deaths, recovered, suffering, mortalityrate} = countryData
                expect(confirmed).toEqual(sum(
                    ...countrySeries.map((series) => series.confirmed)
                    ))
                expect(deaths).toEqual(sum(
                    ...countrySeries.map((series) => series.deaths)
                ))
                expect(recovered).toEqual(sum(
                    ...countrySeries.map((series) => series.recovered)
                ))
            })
            
        })
    })

    describe('getAggregateData', () => {
        let result = getAggregateData(data)
        expect()
    })

    describe('addExtraSeriesData', () => {
        Object.keys(data).forEach((name) => {
            const country = data[name]
            dataset[name] = country.map((entry) => addExtraSeriesData({ entry, name }))
        })
    })
    
})