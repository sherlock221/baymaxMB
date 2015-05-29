'use strict';


/**
 * 配置路由
 * @sherlock221b
 */
Baymax.config(
      function ($stateProvider,$urlRouterProvider,VERSION) {

          $stateProvider
              //根
              .state('app', {
                  url: '/app',
                  abstract : true,
                  templateUrl: 'tpl/app.html?v='+VERSION.vs
              })

              .state('app.auth', {
                  url: '/auth',
                  abstract : true
               })

              //登录
              .state('app.auth.login', {
                  url: '/login',
                  views: {
                      "app@": {
                          templateUrl: 'tpl/auth/login.html?v='+VERSION.vs,
                          controller : "LoginCtrl"
                      }
                  }
              })

              //tab
              .state("app.tab",{
                  url: '/tab',
                  templateUrl: 'tpl/tab/tab.html?v='+VERSION.vs
              })


              //聊天
              .state("app.tab.chat",{
                  url: '/chat',
                  views : {
                      "chat@app.tab" : {
                            templateUrl: 'tpl/chat/chat.html?v='+VERSION.vs
                      }
                  }
              })
              //联系人
              .state("app.tab.contact",{
                  url: '/contact',
                  views : {
                      "contact@app.tab" : {
                          templateUrl: 'tpl/contact/contact.html?v='+VERSION.vs
                      }
                  }


              })

              //我
              .state("app.tab.user",{
                  url: '/user',
                  views : {
                      "user@app.tab" : {
                          templateUrl: 'tpl/user/user.html?v='+VERSION.vs
                      }
                  }


              })



          //登录
          $urlRouterProvider.otherwise('/app/tab/chat');

      }
  );


