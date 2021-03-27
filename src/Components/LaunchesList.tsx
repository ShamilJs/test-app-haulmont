import React from 'react'
import { DataType } from '../types/types'

type TargetType = {data: Array<DataType>}

export const LaunchesList: React.FC<TargetType> = ({ data }) => {

	if (!data.length) return <p className='alert'>Nothing found... &#128530;</p>

	return (
		<div className='launches-list'>
			{data.map((item: DataType, i: number) => (
				<div key={i} className='launches-list__item item'>
					<div className='item__img'>
						<img
							src={item?.links?.mission_patch_small ?? ''}
							alt="mission_patch_small"
						/>
					</div>
					<div className="item__content content">
						<div className="content__up">
							<div className="content__title">
								{item.mission_name}
							</div>
							<div className="content__date">
								{new Date(item.launch_date_utc).toLocaleDateString()}
							</div>
						</div>
						<div className="content__details">
							{item.details ?? 'Upcoming'}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}