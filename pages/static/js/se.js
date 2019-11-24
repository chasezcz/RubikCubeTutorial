var i = 1;

function add(id) {
    //var z=$(e.target).attr('id');
    //console.log(id);
    if (i <= 6) {
        $('#' + id).attr('class', 'color' + i);
        i = i + 1;
        if (i > 6) {
            i = 1;
        }
    }
}

var str = 0;
//function getc()
for (var i = 0; i < 6; i++) {
    var a = $('#cube>div').eq(i).attr('class'); //获取每个面的class

    for (var j = 0; j < 9; j++) {
        var b = $('#' + a + '>div').eq(j).attr('class'); //获取每个面的颜色值
        b = b.slice(5);
        str = str + b;
    }
}
state = str;
console.log(state);