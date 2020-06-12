import colors from './colors.json'

export const debounce = function(func, wait, immediate) {
	let timeout

	return function executedFunction() {
		const context = this
		const args = arguments

		const later = function() {
			timeout = null
			if (!immediate) func.apply(context, args)
		}

		const callNow = immediate && !timeout

		clearTimeout(timeout)

		timeout = setTimeout(later, wait)

		if (callNow) func.apply(context, args)
	}
}

export const getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}

export const getRandomColor = function() {
	let random = getRandomInt(0, 148)
	return colors[random].color
}

//scroll settings
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

function preventDefault(e) {
	e.preventDefault()
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e)
		return false
	}
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false
try {
	window.addEventListener(
		'test',
		null,
		Object.defineProperty({}, 'passive', {
			// eslint-disable-next-line getter-return
			get: function() {
				supportsPassive = true
			},
		})
	)
} catch (e) {
	console.log(e)
}

var wheelOpt = supportsPassive ? { passive: false } : false
var wheelEvent =
	'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

// call this to Disable
export const disableScroll = function() {
	window.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
	window.addEventListener('touchmove', preventDefault, wheelOpt) // mobile
	window.addEventListener('keydown', preventDefaultForScrollKeys, false)
}

// call this to Enable
export const enableScroll = function() {
	window.removeEventListener(wheelEvent, preventDefault, wheelOpt)
	window.removeEventListener('touchmove', preventDefault, wheelOpt)
	window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
}
