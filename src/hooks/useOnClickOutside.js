import { useEffect, useRef, useState } from 'react';

export const useOnClickOutside = isInitialValue => {
	const [isOpen, setIsOpen] = useState(isInitialValue);

	const ref = useRef(null);

	const handleClickOutside = event => {
		// если существует таргет, и он ВНЕ области меню
		if (ref.current && !ref.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);

		// сейчас ПРИ РАЗМОНТИРОВАНИИ должны отписаться
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});

	return { ref, isOpen, setIsOpen };
};
