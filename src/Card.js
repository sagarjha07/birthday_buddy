import React, { useState } from "react";
import data from "./data";

const Card = () => {
	const [people, setPeople] = useState(data);
	return (
		<div className="card">
			<h3>{people.length} Birthdays today</h3>
			{people.map((d) => {
				return (
					<div className="people">
						<img className="img" src={d.image} alt="" />
						<div className="details">
							<span className="name">{d.name}</span>
							<span className="age">{d.age} years</span>
						</div>
					</div>
				);
			})}
			<button
				className="btn"
				onClick={() => {
					setPeople([]);
				}}
			>
				Clear All
			</button>
		</div>
	);
};

export default Card;
