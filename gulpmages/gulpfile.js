var gulp=require('gulp');  
    spritesmith=require('gulp.spritesmith');  

gulp.task('sprite',function(){  
     gulp.src('images/*.png')  
        .pipe(spritesmith({  
            imgName:'sprite.png',  
            cssName:'css/index.css',  
            padding:5,  
            algorithm:'binary-tree'  
        }))  
        .pipe(gulp.dest('result/')) //输出目录
}) 

gulp.task("default", ["sprite"]);