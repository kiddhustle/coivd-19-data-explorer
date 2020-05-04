import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NoSSR from 'react-no-ssr';
import Layout from '../components/MyLayout';
import Link from 'next/link'
import Router, { useRouter } from 'next/router';
import useSWR from 'swr';
// import Plot from 'react-plotly.js';
import { Bar, BarChart, Legend,  LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { getChartData, getCountryData, addExtraSeriesData } from '../utils/country'
import next from 'next';

// import Plotly from 'plotly.js-dist'

export const DATA_URL = `https://pomber.github.io/covid19/timeseries.json`

export function fetcher(url) {
    return fetch(url).then(r => r.json());
}

export default function Index(props) {
    const [mounted, setMounted] = useState(false);
    const {dataset} = props
    // const [dataset, setDataset] = useState({})
    const { query } = useRouter();
    // const { data, error } = useSWR(
    //     `https://pomber.github.io/covid19/timeseries.json`,
    //     fetcher,
    //     {
    //         onError: (err, key, config) => {
    //             console.log('err', err)
    //             console.log('key', key)
    //             console.log('config', config)

    //         },
    //         onSuccess: (data, key, config) => {
    //             const newData = {}
    //             Object.keys(data).forEach((name) => {
    //                 const country = data[name]
    //                 newData[name] = country.map((entry) => addExtraSeriesData(entry, name))
    //             })
    //             setDataset(newData)
    //         },
    //         initialData: {}
    //     }
    // );

    const countryNames = Object.keys(dataset)
    const chartData = getChartData(dataset)
    // console.log('chartData', chartData)

    return (
        <Layout>
            <p>Home page</p>
            <div>
                <NoSSR>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={chartData} onClick={(e)=> {
                        if(!e) {return}
                            const nextUrl = `/countries/${e.activeLabel}`
                            Router.push(nextUrl)
                            console.log(`Clicked label: ${nextUrl}`)
                        }}>
                        <XAxis dataKey="countryName" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="confirmed" fill="#8884d8" />
                        <Bar dataKey="recovered" fill="#82ca9d" />
                        <Bar dataKey="deaths" fill="#aa0000" />
                    </BarChart>
                </ResponsiveContainer>
                </NoSSR>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Suffering</th>
                        <th>Mortality Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {countryNames.map((name) => {
                        const countrySeries = dataset[name]
                        const lastEntryIndex = countrySeries.length - 1
                        const {
                            date, confirmed, deaths, recovered, suffering, mortalityRate
                        } = countrySeries[lastEntryIndex]

                        return (<tr key={name}>
                            <td title="country">
                                <Link href={`/countries/${name}`}>
                                    <a>{name}</a>
                                </Link>
                                </td>
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
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const res = await axios.get(DATA_URL)
    const { data } = await res

    const dataset = {}
    Object.keys(data).forEach((name) => {
        const country = data[name]
        dataset[name] = country.map((entry) => addExtraSeriesData(entry, name))
    })
    
    return {
        props: {
            dataset
        }
    }
}