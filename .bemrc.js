module.exports = {
	root: true,
	modules: {
		'bem-tools': {
			plugins: {
				create: {
					techs: ['html', 'sass'],
					levels: {
						'src/components': {
							default: true,
						},
					},
				},
			},
		},
	},
};
