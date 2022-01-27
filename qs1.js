var d1 = {'a': 100, 'b': 200, 'c':300};
var d2 = {'a': 300, 'b': 200, 'd':400};
var empt = {}
for (x in d1){
    for ( y in d2){
        if (x == y){
            empt[x]=d1[x]+d2[y]
            // console.log(empt)
        }
        else{
            empt[x]=d1[x]
            empt[y]=d2[y]
        
        }
        
        // console.log(empt)

    }
}

