/**
 * Baymax 配置
 */







//常量配置
Baymax.constant("VERSION",{
    vs : "100",
    DATA_BASE : "v5"
});


Baymax.constant("SERVER", {
    url : {
        uc  : "",
        message : "",
        push : "",
        sop  : "",
        im   : ""
    },

    //测试
    test : {
          uc  : "http://10.10.68.11:10000/uc",
          message : "http://10.10.68.11:10000/message",
          ucm  : "http://10.10.68.16:8081/ucm",
          push : "http://10.10.68.13:8080/notify",
          im   : "ws://10.10.68.16:8084/notify/CS",
          notify : "http://10.10.68.16:8084/notify",
            file : "http://10.10.68.11:10000/file"
    },

    //开发环境
    dev : {
        uc  : "http://10.10.68.11:10000/uc",
        message : "http://10.10.68.11:10000/message",
        ucm  : "http://10.10.68.16:8081/ucm",
        push : "http://10.10.68.13:8080/notify",
        im   : "ws://172.16.130.212:8081/notify/CS",
        notify : "http://172.16.130.212:8081/notify",
        file : "http://10.10.68.11:10000/file"
    },
    //预发布
    formal : {
        ucm  : "http://121.41.78.49:8080/ucm",
        uc  : "http://imzhiliao.com:10000/uc",
        message : "http://imzhiliao.com:10000/message",
        push : "http://121.41.61.218:8080/notify",
        im   : "ws://121.41.61.218:8080/notify/customerIM",
        sop  : "http://121.41.61.218:9003",
        mBridge : "http://10.10.68.16:8082/mBridge",
        credit : "http://imzhiliao.com:10000/credit",
        file : "http://imzhiliao.com:10000/file",
    }
});

//配置http 拦截器
Baymax.config(function($httpProvider){
    $httpProvider.interceptors.push("AjaxInterceptors");
});

//缓存常量
Baymax.constant("CacheCons",{
    //语音下载文件夹
    voiceDir : "./cache/voice/"
});





//启动项目
Baymax.run(function($ionicPlatform,$rootScope,VERSION) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs).
        // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
        // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
        // useful especially with forms, though we would prefer giving the user a little more room
        // to interact with the app.
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            // Set the statusbar to use the default style, tweak this to
            // remove the status bar on iOS or change it to use white instead of dark colors.
            StatusBar.styleDefault();
        }
    });

    $rootScope.VERSION = VERSION;
});




