document.addEventListener('keydown', function(event) {
    // 使用 key 或 code 属性而不是 keyCode
    //var keyCode = event.code; // 或者 event.code;
    //console.log(key); // 输出按键的实际值或物理位置
    if (event.code == 123) {
        //alert('请尊重劳动成果！');
        return false;
    } else if ((event.ctrlKey) && (event.shiftKey) && (event.code == 73)) {
        //alert('请尊重劳动成果！');
        return false;
    } else if ((event.ctrlKey) && (event.code == 85)) {
        //alert('请尊重劳动成果！');
        return false;
    } else if ((event.ctrlKey) && (event.code == 83)) {
        //alert('请尊重劳动成果！');
        return false;
    }
});
document.oncontextmenu = function () {
    //alert('请尊重劳动成果！');
    return false;
}