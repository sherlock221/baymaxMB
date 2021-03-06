/**
 * Baymax User
 * sherlock221b
 */

Baymax.service('UserSev', function($http,$q,SERVER) {

    return {

        /**
         * 获取未受理客户列表信息
         * @return
         */
        accpetUser : function(){
            var defer =  $q.defer();
            $http.get(SERVER.url.notify+"/notaccpet",{
            })
                .success(function(result){
                    defer.resolve(result);
                })
                .error(function(err){

                    defer.reject(err);
                });
            return  defer.promise;
        },



        /**
         * 获取未结束的列表
         * @params csUserId
         */
        getNotoverUser : function(csUserId){
            var defer =  $q.defer();
            $http.get(SERVER.url.notify+"/notover",{
                params : {
                    csUserId : csUserId
                }
            })
                .success(function(result){
                    defer.resolve(result);
                })
                .error(function(err){

                    defer.reject(err);
                });
            return  defer.promise;

        },

        /**
         * 和用户建立连接
         * @return
         */
         connectionUser : function(conversation){
            var defer =  $q.defer();
            $http.post(SERVER.url.notify+"/accpet/user",conversation,{headers:{"is-json-data":1}}
            )
                .success(function(result){
                    defer.resolve(result);
                })
                .error(function(err){

                    defer.reject(err);
                });
            return  defer.promise;
        },

        /**
         * 结束链接
         */
        shutdown : function(conversation){
            var defer =  $q.defer();
            $http.post(SERVER.url.notify+"/conversation/close",conversation,{headers:{"is-json-data":1}})
                .success(function(result){
                    defer.resolve(result);
                })
                .error(function(err){
                    defer.reject(err);
                });
            return  defer.promise;
        },

        /**
         * 获得用户历史记录
         * @param  index  0 当前会话  1 : 上一次会话  依次递增拉取历史
         * @param  conversation
         */
        getUserHistory : function(index,conversation){
            var defer =  $q.defer();
            $http.post(SERVER.url.notify+"/conversation/history/"+index,conversation,{headers:{"is-json-data":1}}
            )
                .success(function(result){
                    defer.resolve(result);
                })
                .error(function(err){

                    defer.reject(err);
                });
            return  defer.promise;
        },


        /**
         * 发送消息
         * messageType ： txt : 文字   img ：图片  voice : 音频
         */
        sendMessage : function(messageObj){
            var defer =  $q.defer();
            $http.post(SERVER.url.notify+"/message/send",messageObj,{headers:{"is-json-data":1}}
            )
                .success(function(result){
                    defer.resolve(result);
                })
                .error(function(err){

                    defer.reject(err);
                });
            return  defer.promise;
        },


        /**
         * 设置最大可接受会话数
         *   0 < num < 50
         */
        setMaxConversation : function(csUserId,conversations){
            var defer =  $q.defer();
            $http.post(SERVER.url.notify+"/update/conversations",{
                    csUserId : csUserId,
                    conversations : conversations
                },{headers:{"is-json-data":1}}
            )
            .success(function(result){
                defer.resolve(result);
            })
            .error(function(err){
                defer.reject(err);
            });

            return  defer.promise;
        },

        /**
         * 获取客服最大会话数
         */
        getMaxConversation : function(csUserId){
            var defer =  $q.defer();
            $http.get(SERVER.url.notify+"/conversations",{
                    params : {
                        csUserId : csUserId
                    }
                }
            )
                .success(function(result){
                    defer.resolve(result);
                })
                .error(function(err){

                    defer.reject(err);
                });
            return  defer.promise;
        }

    }

});