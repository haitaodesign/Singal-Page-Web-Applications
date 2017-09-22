/**
 * spa.shell.js
 * Shell modules for SPA
 */ 

 spa.shell=(function () {  
    //------------------------ 变量声明 ------------------------
    var configMap = {
        main_html: String()+
        '<div class="spa-shell-head">'+
        '<div class="spa-shell-head-logo"></div>'+
        ' <div class="spa-shell-head-acct"></div>'+
        '<div class="spa-shell-head-search"></div>'+
        '</div>'+
        '<div class="spa-shell-main spa-x-closed">'+
        '<div class="spa-shell-main-nav"></div>'+
        '<div class="spa-shell-main-content"></div>'+
        '</div>'+
        '<div class="spa-shell-foot"></div>   '+
        '<div class="spa-shell-chat"></div>'+
        '<div class="spa-shell-modal"></div>',
        chat_extend_time:1000,
        chat_retract_time:300,
        chat_extend_height:450,
        chat_retract_height:15
    },
    stateMap = { $container: null },
    jqueryMap = {
        // $container:$container,
        // $chat:$container.find('.spa-shell-chat')
    },
    setJqueryMap,toggleChat,initModule;

    // 缓存DOM方法
    setJqueryMap = function(){
        var $container = stateMap.$container,
        jqueryMap = { $container: $container};
    }
    // 事件处理函数
    toggleChat = function(do_extend,callback){
        var px_chat_ht = jqueryMap.$chat.height(),
        is_open = px_chat_ht === configMap.chat_extend_height,
        is_closed = px_chat_ht === configMap.chat_retract_height,
        is_sliding = ! is_open && !is_closed;
    }
    //公共方法
    initModule = function($container){
        stateMap.$container = $container;
        $container.html(configMap.main_html);
        setJqueryMap();
    }

    return {
        initModule: initModule
    };

 }());