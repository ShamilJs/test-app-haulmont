import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { LaunchesList } from './Components/LaunchesList';
import { Loader } from './Components/Loader';
import { Select } from './Components/Select';
import { DataType } from './types/types';

type OptionType = {launchSite: string[], rocket: string[]}

const API = 'https://api.spacexdata.com/v3/launches'

const App = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState<Array<DataType>>([])
	
	const [filterValue, setFilterValue] = useState({
		launchSite: '',
		rocket: ''
	})
	const [options, setOptions] = useState<OptionType>({
		launchSite: [],
		rocket: []
	})

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => 
		setFilterValue({...filterValue, [e.target.name]: e.target.value}) 

	const formationOption = (res: any) => {
		if (filterValue.rocket || filterValue.launchSite) return
		
		const getOptions = (filter: string) => {
			return res.reduce((acc: any, item: any ) => {
				const temp = (filter === 'launch_site') ?
					item.launch_site.site_name :
					item.rocket.rocket_name;
				acc.push(temp)
				return Array.from(new Set(acc))
			}, [])
		}

		setOptions({
			launchSite: getOptions('launch_site'),
			rocket: getOptions('rocket')
		})	
	}

	useEffect(() => {
		setIsLoading(true)
		fetch(`${API}/?site_name=${filterValue.launchSite}&rocket_name=${filterValue.rocket}`)
		.then(async response => {
			if (!response.ok) throw await response.json()
			return response.json()
		})
		.then(res => {
			formationOption(res)
			setData(res)
		})
		.catch(err => console.log(err))
		.finally(() => setIsLoading(false))
		// eslint-disable-next-line
	}, [filterValue])

	

	return (
		<div className='container'>
			<h1>Launches</h1>
			<div className="select">
				<Select
					options={options.launchSite}
					name='launchSite'
					onChange={onChange}
				/>
				<Select
					options={options.rocket}
					name='rocket'
					onChange={onChange}
				/>
			</div>
			{
				isLoading ?
					<Loader/> :
					<LaunchesList data={data}/>
			}
		</div>
	);
}

export default App;
