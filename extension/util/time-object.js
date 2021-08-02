/**
 * TimeObject class.
 * @property {Number} rawFrames
 * @property {Number} minutes
 * @property {Number} seconds
 * @property {Number} milliseconds
 * @property {String} formatted
 * @property {Number} framerate
 */
class TimeObject {
	/**
	 * Constructs a new TimeObject with the provided number of frames
	 * @param {Number} [frames = 0] - The value to instantiate this TimeObject with, in frames.
	 * @param {Number} [framerate = 60] - The framerate to use.
	 */
	constructor(frames = 0, framerate = 60) {
		TimeObject.setFrames(this, frames, framerate);
	}

	/**
	 * Increments a TimeObject by one frame.
	 * @param {TimeObject} t - The TimeObject to increment.
	 * @param {Number} [count = 1] - The number of frames to increase by.
	 * @returns {TimeObject} - The TimeObject passed in as an argument.
	 */
	static increment(t, count = 1) {
		t.rawFrames = t.rawFrames + count;

		const msms = TimeObject.framesToMSMS(t.rawFrames, t.framerate);
		t.minutes = msms.m;
		t.seconds = msms.s;
		t.milliseconds = msms.ms;
		t.formatted = TimeObject.formatMSMS(msms);

		return t;
	}

	/**
	 * Decrements a TimeObject by one frame.
	 * @param {TimeObject} t - The TimeObject to increment.
	 * @param {Number} [count = 1] - The number of frames to decrease by.
	 * @returns {TimeObject} - The TimeObject passed in as an argument.
	 */
	static decrement(t, count = 1) {
		t.rawFrames = t.rawFrames - count;

		const msms = TimeObject.framesToMSMS(t.rawFrames, t.framerate);
		t.minutes = msms.m;
		t.seconds = msms.s;
		t.milliseconds = msms.ms;
		t.formatted = TimeObject.formatMSMS(msms);

		return t;
	}

	/**
	 * Sets the value of a TimeObject.
	 * @param {TimeObject} t - The TimeObject to set.
	 * @param {Number} frames - The value to set to (in frames).
	 * @param {Number} rate - The framerate to use.
	 * @returns {TimeObject} - The TimeObject passed in as an argument.
	 */
	static setFrames(t, frames, rate) {
		const msms = TimeObject.framesToMSMS(frames, rate);
		t.minutes = msms.m;
		t.seconds = msms.s;
		t.milliseconds = msms.ms;
		t.formatted = TimeObject.formatMSMS(msms);
		t.rawFrames = frames;
		t.framerate = rate;

		return t;
	}

	/**
	 * Formats an MSMS object into a string (mm:ss.ms).
	 * @param {{m: number, s: number, ms: number}} msms - The MSMS object to format.
	 * @returns {string} - The formatted time string.
	 */
	static formatMSMS(hms) {
		let str = '';

		let adjustedMs = Math.floor(hms.ms / 10);
		str += `${(hms.m < 10 ? `0${hms.m}` : hms.m)}:${(hms.s < 10 ? `0${hms.s}` : hms.s)}.${(adjustedMs < 10 ? `0${adjustedMs}` : adjustedMs)}`;
		return str;
	}

	/**
	 * Formats a number of frames into a string (mm:ss.ms).
	 * @param {number} frames - The number of frames to format.
	 * @param {Number} rate - The framerate to use.
	 * @returns {string} - The formatted time sting.
	 */
	static formatFrames(frames, rate) {
		const msms = TimeObject.framesToMSMS(frames, rate);
		return TimeObject.formatMSMS(msms);
	}

	/**
	 * Parses a number of frames into an MSMS object.
	 * @param {number} frames - A number of frames.
	 * @param {Number} rate - The framerate to use.
	 * @returns {{m: number, s: number, ms: number}} - An MSMS object.
	 */
	static framesToMSMS(frames, rate) {

		let seconds = frames / rate;
		let milliseconds = seconds * 1000;

		return {
			m: Math.floor(seconds / 60),
			s: Math.floor(seconds % 60),
			ms: Math.floor(milliseconds % 1000)
		};
	}

	/**
	 * Parses a formatted time string into an integer of seconds.
	 * @param {string} timeString - The formatted time string to parse (mm:ss).
	 * @returns {number} - The parsed time string represented as seconds.
	 */
	static parseSeconds(timeString) {
		const timeParts = timeString.split(':');

		if (timeParts.length === 2) {
			return parseInt(timeParts[0] * 60, 10) + parseInt(timeParts[1], 10);
		}

		if (timeParts.length === 1) {
			return parseInt(timeParts[0], 10);
		}

		throw new Error(`Unexpected format of timeString argument: ${timeString}`);
	}
}

if (typeof module === 'object' && typeof module.exports === 'object') {
	module.exports = TimeObject;
}
