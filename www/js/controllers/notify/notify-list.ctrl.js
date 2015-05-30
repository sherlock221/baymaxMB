
Baymax.controller('NotifyListCtrl', function($scope,$rootScope,UserSev,Util,SERVER) {

    console.log("NotifyListCtrl...");


    //拒绝通知
    var rejectNotify = function(notify){
        var  list =$rootScope.getNotifyList();
        list.removeObj(notify,"id");
        $rootScope.updateNotifyList(list);
    }

    //接受通知
    var resolveNotify = function(user){

        //发起请求
        user.csUserId = $rootScope.user.csUserId;

        UserSev.connectionUser(user).then(function (result) {
            if (result) {
                //获得一次用户最近历史记录
                user.index = 0;

                UserSev.getUserHistory(user.index, user).then(function (message) {
                    console.log("获得消息来自 历史记录:");
                    console.log(message);
                    //将消息填充到用户内
                    user.message = message;
                    //选中当前用户
                    $scope.currentUser = user;

                }, function (err) {
                    $rootScope.alertError("获得用户历史记录失败！");
                });


                //填充用户
                var list;

                     list = $rootScope.getUserList();
                     list.push(user);

                $rootScope.updateUserList(list);

                //删除现有通知
                rejectNotify(user);

            }
            else {
                $rootScope.alertError("和用户建立连接失败!");
            }

        });

    }



    $scope.rejectNotify = rejectNotify;
    $scope.resolveNotify = resolveNotify;




});