
let it
function take(chan) {
	chan(it.next.bind(it), it.return.bind(it))
}


const chan = (function (secs) {
	return (emitter, done) => {
		setInterval(() => {
			secs -= 1
			if (secs > 0) {
				emitter(secs)
			} else {
				// this causes the channel to close
				done()
			}
		}, 1000);
	}
})(5)

function* saga() {
	console.log('saga')
	while (true) {
		let seconds = yield take(chan)
		console.log(seconds)
	}
}

function run(saga) {
	it = saga()

	it.next()
}

run(saga)