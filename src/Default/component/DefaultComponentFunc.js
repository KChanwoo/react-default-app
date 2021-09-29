/**
 *
 * @author ChanWoo Gwon, Yonsei Univ. Researcher, since 2020.05
 * @date 2021.09.25
 */
 import { useState, useRef, useEffect } from 'react';

function DefaultComponentFunc({onEventListener}) {
	const context = useRef(null);
	const [defaultValue, setDefaultValue] = useState("default");

	useEffect(() => {

	}, [defaultValue]);

	return (
		<div>
			{defaultValue}
		</div>
	)
}

export default DefaultComponentFunc;