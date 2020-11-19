for(var i = 1; i <= 9; i++){
    var output='';
    for(var j=1; j<=i; j++){
        output = output + i + '*' + j + '=' + (i*j) + " ";
    }
    console.log(output);
}
