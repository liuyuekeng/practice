;(function(){
    var slot = {
        init : function (option) {
            console.log(option);
        },
        tpls : {
            ItemTpl : function (id) {
            //build slot bar item
            //@id   str/num     bg image index
                return "<div class='slot-item bg-" + id + "'></div>";
            },
            barTpl : function (items) {
            //build one slot bar
            //@items    array   clection of items in the bar
                var prefix = "<div class='bar'>";
                var suffix = "</div>";
                var str = prefix;
                var len = items.length;
                for (var i = 0; i < len; i++) {
                    str += items[i];
                }
                str += suffix;
            }
        }
        buildBars : function (options) {
        //build slot bars
            //todo
        }
    }
})();
