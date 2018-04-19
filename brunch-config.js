exports.paths = {
	public: 'dist',
	watched: ['scripts', 'styles']
}

exports.files = {
	javascripts: {
		entryPoints: {
			'scripts/scripts.js': 'scripts/scripts.min.js'
		}
	},
	stylesheets: {
		joinTo: 'styles/styles.min.css'
	}
};

exports.plugins = {
	babel: { presets: ['env'] },
	postcss: { processors: [require('autoprefixer')] }
};