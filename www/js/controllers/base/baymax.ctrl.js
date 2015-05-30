

Baymax.controller('BaymaxCtrl', function($scope,$rootScope,$q,$state,$ionicModal,$ionicLoading,toastr,toastrConfig,$ionicPopup,$timeout,Util,SERVER) {
        //console.log("欢迎来到baymax");

         //测试url
    SERVER.url = SERVER.test;



    //loading
    $rootScope.loading = function(isLoading){
        if(isLoading){
            $ionicLoading.show({
                //40秒超时时间
                duration : 1000 * 40
            });
        }
        else{
            $ionicLoading.hide();
        }
    }



    //模态窗口
    $rootScope.modal = function(url,scope,animate){
        var defer = $q.defer();
        $ionicModal.fromTemplateUrl(url,{
            scope: scope,
            animation: animate || 'slide-in-up'
        })
            .then(function(modal) {
                modal.show();
                defer.resolve(modal);
            });

        return defer.promise;
    }

    $scope.openModal = function(modal) {
        modal.show();
    };
    $scope.closeModal = function(modal) {
        modal.hide();
    };


    //测试
    //$rootScope.modal("tpl/user/setting.html",$scope)
    //    .then(function(modal){
    //            console.log(modal);
    //    });




    $rootScope.setUser = function(key,user){
        Util.setLgObj(key,user);
        $rootScope.user = user;
    }
    $rootScope.getUser = function(){
        return Util.getLgObj("user");
    }




    //toast
    toastrConfig.positionClass = "toast-bottom-center";
    toastrConfig.maxOpened = 1;

    $rootScope.toastSuccess = function(content,timeOut){
        toastr.success(content,{
            timeOut : timeOut || 2500,
            positionClass: 'toast-bottom-center'
        });
    }
    $rootScope.toastError = function(content,timeOut){
        toastr.error(content,{
            timeOut : timeOut || 2500,
            positionClass: 'toast-bottom-center'
        });
    }
    $rootScope.toastInfo = function(content,timeOut){
        toastr.info(content,{
            timeOut : timeOut || 2500,
            positionClass: 'toast-bottom-center'
        });
    }



    //pop
    var alertPop = function(title,content){
        var alertPopup = $ionicPopup.alert({
            title: title,
            template: content
        });
    }

    $rootScope.alertError = function(content,title){
        alertPop(title || "错误",content);
    }

    $rootScope.alertSuccess = function(content,title){
        alertPop(title || "完成",content);
    }

    $rootScope.alertInfo = function(content,title){
        alertPop(title || "提示",content);
    }

    //显示confirm
    $rootScope.confirm = function(title,content,ok,cancel) {
        return $ionicPopup.confirm({
            title: title,
            template: content,
            cancelText : cancel || "取消",
            okText  :  ok || "确定"
        });
    };

    //prompt
    $rootScope.prompt = function(title,content,inputType,placeholder){
        return $ionicPopup.prompt({
            title: 'title',
            template: content,
            inputType: inputType || "text",
            inputPlaceholder: placeholder
        });
    }


    $rootScope.go = function(state){
        $state.go(state);
    }


    //
    //
    //
    ////通知部分使用html5
    //$rootScope.notify = function(title,body,icon){
    //    var notification = new AudioNotify(title,{
    //        body: body,
    //        icon: icon,
    //        soundFile : "audio/msn.mp3"
    //    });
    //
    //    ////2秒关闭
    //    $timeout(function(){
    //        notification.close();
    //    },2000);
    //}






    //对Array进行扩展
    Array.prototype.removeObj=function(obj,key)
    {
        for(var i=0;i <this.length;i++){
            var a = this[i];
            if(a[key] == obj[key]){
                this.remove(i);
            }
        }
    }
    Array.prototype.remove=function(dx)
    {

        if(isNaN(dx)||dx>this.length){return false;}
        for(var i=0,n=0;i<this.length;i++)
        {
            if(this[i]!=this[dx])
            {
                this[n++]=this[i]
            }
        }
        this.length-=1
    }


    Array.prototype.unique = function (key) {
        var temp = new Array();
        this.sort();
        for(i = 0; i < this.length; i++) {
            var fb = this[i]
            var sb = this[i+1]

            if(this[i+1]){
                if( fb[key] == sb[key]) {
                    continue;
                }
            }
            //console.log("f",fb.id);
            //console.log("s",sb.id);
            temp[temp.length]=this[i];
        }
        return temp;
    }





});
