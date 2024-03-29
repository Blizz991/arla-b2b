'use strict';

window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

(function (global) {
	var MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	var COLORS = [
		'#4dc9f6',
		'#f67019',
		'#f53794',
		'#537bc4',
		'#acc236',
		'#166a8f',
		'#00a950',
		'#58595b',
		'#8549ba'
	];

	var Samples = global.Samples || (global.Samples = {});
	var Color = global.Color;

	Samples.utils = {
		// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
		srand: function (seed) {
			this._seed = seed;
		},

		rand: function (min, max) {
			var seed = this._seed;
			min = min === undefined ? 0 : min;
			max = max === undefined ? 1 : max;
			this._seed = (seed * 9301 + 49297) % 233280;
			return min + (this._seed / 233280) * (max - min);
		},

		numbers: function (config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 1;
			var from = cfg.from || [];
			var count = cfg.count || 8;
			var decimals = cfg.decimals || 8;
			var continuity = cfg.continuity || 1;
			var dfactor = Math.pow(10, decimals) || 0;
			var data = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = (from[i] || 0) + this.rand(min, max);
				if (this.rand() <= continuity) {
					data.push(Math.round(dfactor * value) / dfactor);
				} else {
					data.push(null);
				}
			}

			return data;
		},

		labels: function (config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 100;
			var count = cfg.count || 8;
			var step = (max - min) / count;
			var decimals = cfg.decimals || 8;
			var dfactor = Math.pow(10, decimals) || 0;
			var prefix = cfg.prefix || '';
			var values = [];
			var i;

			for (i = min; i < max; i += step) {
				values.push(prefix + Math.round(dfactor * i) / dfactor);
			}

			return values;
		},

		months: function (config) {
			var cfg = config || {};
			var count = cfg.count || 12;
			var section = cfg.section;
			var values = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = MONTHS[Math.ceil(i) % 12];
				values.push(value.substring(0, section));
			}

			return values;
		},

		color: function (index) {
			return COLORS[index % COLORS.length];
		},

		transparentize: function (color, opacity) {
			var alpha = opacity === undefined ? 0.5 : 1 - opacity;
			return Color(color).alpha(alpha).rgbString();
		}
	};

	// DEPRECATED
	window.randomScalingFactor = function () {
		return Math.round(Samples.utils.rand(10, 100));
	};

	window.randomScalingFactor1 = function () {
		return Math.round(Samples.utils.rand(0, 500));
	};
	
	window.randomScalingFactor2 = function () {
		return Math.round(Samples.utils.rand(100, 1000));
	};

	// INITIALIZATION
	Samples.utils.srand(Date.now());
}(this));


var co2 = [
	randomScalingFactor2(),
	randomScalingFactor2(),
	randomScalingFactor2(),
	randomScalingFactor2(),
	randomScalingFactor2()
];

var cowsVsCo2 = {
	type: 'line',
	data: {
		labels: ['2015', '2016', '2017', '2018', '2019'],
		datasets: [{
			label: 'Køer',
			backgroundColor: window.chartColors.red,
			borderColor: window.chartColors.red,
			data: [
				randomScalingFactor1(),
				randomScalingFactor1(),
				randomScalingFactor1(),
				randomScalingFactor1(),
				randomScalingFactor(1)
			],
			fill: false,
		}, {
			label: 'CO₂ i ton',
			fill: false,
			backgroundColor: window.chartColors.blue,
			borderColor: window.chartColors.blue,
			data: [
				randomScalingFactor2(),
				randomScalingFactor2(),
				randomScalingFactor2(),
				randomScalingFactor2(),
				randomScalingFactor2()
			],
		}]
	},
	options: {
		responsive: true,
		aspectRatio: 2,
		maintainAspectRatio: false,
		title: {
			display: true,
			text: 'Køer vs CO₂ produceret',
			fontSize: 18
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'År'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Værdi'
				}
			}]
		}
	}
};

var co2VsKgMilk = {
	type: 'line',
	data: {
		labels: ['2015', '2016', '2017', '2018', '2019'],
		datasets: [{
			label: 'Kg CO₂',
			backgroundColor: window.chartColors.orange,
			borderColor: window.chartColors.orange,
			data: [
				randomScalingFactor1(),
				randomScalingFactor1(),
				randomScalingFactor1(),
				randomScalingFactor1(),
				randomScalingFactor(1)
			],
			fill: false,
		}
		]
	},
	options: {
		responsive: true,
		aspectRatio: 2,
		maintainAspectRatio: false,
		title: {
			display: true,
			text: 'kg. CO₂ per kg. mælk',
			fontSize: 18
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'År'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Værdi'
				}
			}]
		}
	}
};

window.onload = function () {
	var cowsVsCo2Id = document.getElementById('cows-vs-co').getContext('2d');
	var co2VsKgMilkId = document.getElementById('co-vs-kg-milk').getContext('2d');
	
	window.myLine = new Chart(cowsVsCo2Id, cowsVsCo2);
	window.myLine = new Chart(co2VsKgMilkId, co2VsKgMilk);
};