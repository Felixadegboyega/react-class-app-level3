import {io} from 'socket.io-client'
let baseUrl;
if (process.env.NODE_ENV === 'production') {
	baseUrl = 'http://localhost:3400/';
	// baseUrl = 'react-app.herokuapp.com';
} else {
	baseUrl = 'http://localhost:3400/';
}
const socket = io(baseUrl);

export {baseUrl, socket};