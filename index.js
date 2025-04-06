const leftScroll = document.getElementById('left-scroll');
		const scrollTrack = document.getElementById('scroll-track');
		const phoneDisplay = document.getElementById('phone-display');
	
		leftScroll.addEventListener('scroll', () => {
		  const scrollTop = leftScroll.scrollTop;
		  const scrollHeight = leftScroll.scrollHeight - leftScroll.clientHeight;
		  const scrollPercent = scrollTop / scrollHeight;
	
		  const maxTranslate = scrollTrack.scrollWidth - phoneDisplay.clientWidth;
		  const translateX = maxTranslate * scrollPercent;
	
		  scrollTrack.style.transform = `translateX(-${translateX}px)`;
		});