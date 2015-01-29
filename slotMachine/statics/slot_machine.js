;(function(){
    var slot = {
        init : function (option) {
            this.setScreen(option.screenOption);
            this.setSlotBtn(option.btnOption);
            this.slotBgBlink(option.slotBgOption);
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
        },
        setScreen : function (options) {
            options.screenNode.css({
                top : options.screenT,
                left : options.screenL,
                height : options.screenH,
                width : options.screenW
            });
        },
        setSlotBtn : function (options) {
            options.btnNode.css({
                top : options.btnT,
                left : options.btnL,
                height : options.btnH,
                width : options.btnW
            });
        },
        buildBars : function (options) {
        //build slot bars
            //todo
        },
        slotBgBlink : function (options) {
        }
    }

    slot.init({
        screenOption : {
            screenT : "19%",
            screenL : "10%",
            screenW : "80%",
            screenH : "36.5%",
            screenNode : $("#slotScreen")
        },
        btnOption : {
            btnT : "56%",
            btnL : "0",
            btnW : "100%",
            btnH : "43%",
            btnNode : $("#slotBtn")
        },
        barOption : {
            itemNum : 5
        },
        slotBgOption : {
            blinkInterval : 800,
            blinkImgs : ['images/slot-bg-1.png', 'images/slot-bg-2.png'],
        }
    });
})();
