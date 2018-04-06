import Point from './es6/Point.js';
import zrender from 'zrender'

var body = document.querySelector('#app');
body.textContent = 'Good point: ' + new Point(1, 56);

var zr = zrender.init(document.getElementById('main'));
var circle = new zrender.Circle({
    shape: {
        cx: 50,
        cy: 10,
        r: 40
    },
    style: {
        stroke: '#F00'
    }
});
zr.add(circle);