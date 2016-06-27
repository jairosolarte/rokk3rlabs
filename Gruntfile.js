module.exports = function(grunt){
 
    grunt.initConfig({


    	uglify: {
      		my_target: {
        		files: {
        		'_/js/scripts.min.js': ['_/components/js/vendor/*.js','_/components/js/scripts.js']
        		}
      		} //my_target
    	}, //uglify

    	watch: {
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify'],
				options: {
				  spawn: false,
				}
			}, //scripts
			scss: {       
			    files: '_/components/scss/**/*.scss',       
			    tasks: ['compass']     
  			} //scss
		}, //watch

    	compass: {     
			dist: { 
				options: {         
				  config: 'config.rb',         
				  sourcemap: true       
				} 
			}//dist      
		},//compass
        
    });
 	
    grunt.loadNpmTasks('grunt-contrib-watch');
 	grunt.loadNpmTasks('grunt-contrib-uglify');
 	grunt.loadNpmTasks('grunt-contrib-compass');
};