import gsap from 'gsap'


const handleAnimation = (entries, self) => {
	let targets = entries.map((entry) => {
		if (entry.isIntersecting) {
			self.unobserve(entry.target)
			return entry.target
		}
	})
	gsap.to(targets, {
		opacity: 1,
		stagger: {
			each: 0.1,
			from: 'random',
			amount: 1.5,
		},
	})
}


const items = document.querySelectorAll('.div')
let observer = new IntersectionObserver(handleAnimation)

items.forEach((item) => {
	observer.observe(item)
})