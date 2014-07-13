module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {

			index: {
				expand: true,
				cwd: 'wp/',
				src: ['index.php'],
				dest: './',
				options: {
			     	process: function (content, srcpath) {
			        	return content.replace(/wp\-/g,"wp/wp-");
			        }	
			    }
			},

			wp_content: {
				expand: true,
				cwd: 'wp/',
				src: ['wp-content/*'],
				dest: './'
			},

			wp_config: {
				expand: true,
				cwd: 'wp/',
				src: ['wp-config-sample.php'],
				dest: './'
			}
		}

	});

	/*['grunt-contrib-copy'].forEach(function(task){
		grunt.loadNpmTask(task);
	});*/
	grunt.loadNpmTasks('grunt-contrib-copy');


	grunt.registerTask('init', ['copy:index', 'copy:wp_content', 'copy:wp_config']);
}