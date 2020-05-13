import {addExtraSeriesData, getAggregateData, getCountryData} from './country'

const sum = (...args) => {
    let nums = args
    return nums.reduce((a, b) => {return a + b}, 0)
}

const SERIES_ENTRY_KEYS = [
    'date', 'countryName',
    'confirmed', 'deaths', 'recovered', 'suffering',
    'confirmedChange', 'deathsChange', 'recoveredChange', 'sufferingChange',
    'mortalityRate'
]

const SERIES_ENTRY_KEYS_NONDATA = [
    'date', 'countryName'
]

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
        const dataset = {}
        const countryNames = Object.keys(data)
        countryNames.forEach((countryName) => {
            const country = data[countryName]
            dataset[countryName] = country.map((entry) => addExtraSeriesData({ entry, countryName }))
        })

        it('should have series entries with expected keys', () => {
            countryNames.forEach((countryName) => {
                const country = data[countryName]
                country.map((entry) => {
                    Object.keys(entry).map((key) => {
                        expect(SERIES_ENTRY_KEYS.indexOf(key) > -1).toEqual(true)
                    })
                })
            })
        })

        // it('should have zero prev entry values on first in series', () => {
        //     console.log('dataset', dataset)
        //     countryNames.forEach((countryName) => {
        //         console.log('countryName', countryName)
        //         const country = dataset[countryName]
        //         console.log('country', country)
        //         const firstEntry = country[0]
                
        //         console.log('firstEntry', firstEntry)
        //         for (let prop in firstEntry) {
        //             console.log('prop', prop)
        //             if (SERIES_ENTRY_KEYS_NONDATA.indexOf(prop) > -1) {
        //                 continue
        //             }
        //             expect(firstEntry[prop]).toEqual(0)
        //         }
        //     })
        // })

    })
    
})