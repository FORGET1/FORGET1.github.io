new Vue({
    el: "#app",
    data: {
        // count_down: 5,
        word_index: 0,
        // show_button: false,
        show_products: false,
        show_card: false
    },
    created: function () {

    },
    mounted: function () {
        var self = this;
        var my_swiper = new Swiper ('.swiper-container', {
            nextButton: ".swiper-button-next",
            onInit: function (swiper) {
                $("#page_0").addClass("show_title");
            },
            onSlideChangeEnd (swiper) {
                $("#page_" + swiper.activeIndex).addClass("show_title");
                if (swiper.activeIndex == 3) {
                    my_swiper.disableTouchControl();
                    setTimeout(function() {
                        self.word_index ++;
                    }, 100);
                    var word_timer = setInterval (function() {
                        self.word_index ++;
                        if(self.word_index >= 7) {
                            clearInterval(word_timer);
                        }
                    }, 1400);
                }
            }
        });
    },
    methods: {
        // start_count: function () {
        //     var self = this;
        //     self.show_products = true;
        //     var card_timer = setInterval (function() {
        //         self.count_down --;
        //         if(self.count_down <= 0) {
        //             clearInterval(card_timer);
        //         }
        //     }, 1000);
        // }
    }
});
