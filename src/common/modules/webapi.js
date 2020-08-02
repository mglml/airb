const api = {
    user: {
        login: '/user/login',//登录接口
        alllist:'/user/selectUserList',//所有用户接口
        addUser:'/user/insertUser',//新增用户接口
        deleteUser:'/user/deleteUserByUserID',//删除用户接口
        updateUser:'/user/updateUserByUserID',//更新用户接口
    },
    tar:{
        alllist:"/tar/selectTarList",//获取所有指标接口
        addTar:"/tar/insertTar",//新增指标接口
        deleteTar:"/tar/deleteTarByTarID",//删除指标接口
        updateTar:"/tar/updateTarByTarID",//更新指标接口
        getPageTar:'/page/getPageTar',//获取页面指标接口
        getTrend:'/page/getTrend'//获取趋势接口

    },
    screen:{
        salesVolumeAnalysis:"/bigScreen/salesVolumeAnalysis",//销售量
        netOutputAnalysis:"/bigScreen/netOutputAnalysis",//净产量
        estimatedProductionAnalysis:'/bigScreen/estimatedProductionAnalysis',//预估产量
        precipitationAnalysis:'/bigScreen/precipitationAnalysis',//降水量
        fertilizationAnalysis:'/bigScreen/fertilizationAnalysis',//施肥量
        topAnalysis:'/bigScreen/topAnalysis',//中间指标
        ratioAnalysis:'/bigScreen/ratioAnalysis',//死亡存活
        importTargetAnalysis:'/bigScreen/importTargetAnalysis',//重要指标
        queryWeather:'/bigScreen/queryWeather'//天气

    }

}
export default api