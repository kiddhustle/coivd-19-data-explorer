import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr';
import NoSSR from 'react-no-ssr';
import { Bar, BarChart, Legend, LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Layout from '../../components/MyLayout'
import { getChartData, getCountryData, addExtraSeriesData } from '../../utils/country'
import {fetcher} from '../index'

export default () => {
    const router = useRouter();
    const {countryName} = router.query
    const [countryDataset, setCountryDataset] = useState([])
    console.log('countryName', countryName)
    const { data, error } = useSWR(
        `https://pomber.github.io/covid19/timeseries.json`,
        fetcher,
        {
            onError: (err, key, config) => {
                console.log('err', err)
                console.log('key', key)
                console.log('config', config)

            },
            onSuccess: (data, key, config) => {
                console.log('data', data)
                console.log('countryName', countryName)
                const country = data[countryName]
                const dataset = country.map((entry) => addExtraSeriesData(entry, countryName))
                setCountryDataset(dataset)
            },
            initialData: {}
        }
    );
    return (
        <Layout>
            <h1>{router.query.countryName}</h1>
            <div>
                <NoSSR>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={countryDataset}>
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line dataKey="confirmed" fill="#8884d8" />
                            <Line Bar dataKey="recovered" fill="#82ca9d" />
                            <Line dataKey="deaths" fill="#aa0000" />
                        </LineChart>
                    </ResponsiveContainer>
                </NoSSR>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Suffering</th>
                        <th>Mortality Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {countryDataset.map((data) => {
                        const {
                            countryName, date, confirmed, deaths,
                            recovered, suffering, mortalityRate
                        } = data

                        return (<tr key={date}>
                            <td title="date">{date}</td>
                            <td title="confirmed">{confirmed}</td>
                            <td title="deaths">{deaths}</td>
                            <td title="recovered">{recovered}</td>
                            <td title="sufferers (approx)">{suffering}</td>
                            <td title="mortality rate">{(mortalityRate * 100).toFixed(2)}%</td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </Layout>
    );
};

// export async function getStaticPaths() {
//     // Return a list of possible value for id
// }

// export async function getStaticProps({ params }) {
//     // Fetch necessary data for the blog post using params.id
// }