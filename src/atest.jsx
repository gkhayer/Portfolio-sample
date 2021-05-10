const matrix=[[1,2,3], [4,5,6], [7,8,9] ]
    
    //90-clockewise
    
    // output :
    // [[7,4,1],
    // [8,5,2],
    // [9,6,3]]

    function rotate(mat) {
        var newarr = [];
        for(var i = 0; i <= mat.lenght-1 ;i++){
            // get 1 of each in rev
                var firstrev = mat[0]
                firstrev.slice(1, mat.lenght-1);
                var secnd = mat[1]
                secnd.slice(1, mat.lenght-1)
                var third = mat[2]
                third.slice(1, mat.lenght-1 )
                
            newarr.push(firstrev)
            newarr.push(secnd)
            newarr.push(third)
            return newarr;
        }
    }

   console.log(rotate(matrix))
    