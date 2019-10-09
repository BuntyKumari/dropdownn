import React, { Component } from 'react';

class Dropdown extends Component {
	constructor(props) {
		super(props);
	}
	render() {
        const { productName, productTitle, band, bandTitle, subBand, subTitle } = this.props;
		return (
			<div className="dropdown">
				<div className="dropdown-container">
					<div>
						<select>
							<option>{productTitle}</option>
							{productName && productName.length > 0 &&
								productName.map((item, index) => (
									<option value={item} key={index}>
										{item}
									</option>
								))}
						</select>
					</div>
					<div>
					{/* disabled ="productName.length > 0 " */}
						<select>
							<option>{bandTitle}</option>
							{band && band.length > 0 &&
								band.map((item, index) => (
									<option value={item} key={index}>
										{item}
									</option>
								))}
						</select>
					</div>
					<div>
						<select>
							<option>{subTitle}</option>
							{subBand && subBand.length > 0 &&
								subBand.map((item, index) => (
									<option value={item} key={index}>
										{item}
									</option>
								))}
						</select>
					</div>
				</div>
			</div>
		);
	}
}

export default Dropdown;
