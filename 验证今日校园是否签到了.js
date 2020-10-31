device.wakeUpIfNeeded();

shell("svc wifi enable",true);

shell("am force-stop com.wisedu.cpdaily", true);

launchApp("今日校园");
sleep(20000);
back();     //关闭弹出广告
sleep(20000);
back();     //关闭更新提示
sleep(10000);
while(!click("消息"));
click(674,1858);//为鲁棒性考虑请自行填写坐标并删除注释
sleep(10000);
while(!click("辅导员通知"));
sleep(10000);

if(click("未填写 >")){
    //填写可能失败


curTime = new Date(); 
var date = (curTime.getMonth() +1) + "月" + curTime.getDate() + "日，星期" + curTime.getDay()  ;



//发送邮件给10086@qq.com和10001@qq.com。
app.sendEmail({
    email: ["zxkmm6@163.com"],
    subject: "！！！签到失败！！！！！",
    text: date + "   签到失败！！！！"
});

sleep(4000);
click("邮件");
sleep(5000);
click(995,147);



    var manager = context.getSystemService(android.app.Service.NOTIFICATION_SERVICE);
    var notification;
    if (device.sdkInt >= 26) {
        var channel = new android.app.NotificationChannel("channel_id", "channel_name", android.app.NotificationManager.IMPORTANCE_DEFAULT);
        channel.enableLights(true);
        channel.setLightColor(0xff0000);
        channel.setShowBadge(false);
        manager.createNotificationChannel(channel);
        notification = new android.app.Notification.Builder(context, "channel_id")
            .setContentTitle("签到失败！！"+new date())
            .setContentText("今日校园自动签到失败！！！")
            .setWhen(new Date().getTime())
            .setSmallIcon(org.autojs.autojs.R.drawable.autojs_material)
            .setTicker("签到失败！！！")
            .build();
    } else {
        notification = new android.app.Notification.Builder(context)
            .setContentTitle("签到失败！！")
            .setContentText("今日校园自动签到失败！！！")
            .setWhen(new Date().getTime())
            .setSmallIcon(org.autojs.autojs.R.drawable.autojs_material)
            .setTicker("签到失败！！！")
            .build();
            

            
            
            
    }
    manager.notify(1, notification);


}else{
    //填写成功


curTime = new Date(); 
var date = (curTime.getMonth() +1) + "月" + curTime.getDate() + "日，星期" + curTime.getDay()  ;



//发送邮件给10086@qq.com和10001@qq.com。
app.sendEmail({
    email: ["zxkmm6@163.com"],
    subject: "签到成功",
    text: date + "   签到成功"
});


sleep(4000);
click("邮件");
sleep(5000);
click(995,147);


    var manager = context.getSystemService(android.app.Service.NOTIFICATION_SERVICE);
    var notification;
    if (device.sdkInt >= 26) {
        var channel = new android.app.NotificationChannel("channel_id", "channel_name", android.app.NotificationManager.IMPORTANCE_DEFAULT);
        channel.enableLights(true);
        channel.setLightColor(0xff0000);
        channel.setShowBadge(false);
        manager.createNotificationChannel(channel);
        notification = new android.app.Notification.Builder(context, "channel_id")
            .setContentTitle("签到成功"+new date())
            .setContentText("今日校园自动签到")
            .setWhen(new Date().getTime())
            .setSmallIcon(org.autojs.autojs.R.drawable.autojs_material)
            .setTicker("成功提醒")
            .build();
    } else {
        notification = new android.app.Notification.Builder(context)
            .setContentTitle("签到成功")
            .setContentText("今日校园自动签到！")
            .setWhen(new Date().getTime())
            .setSmallIcon(org.autojs.autojs.R.drawable.autojs_material)
            .setTicker("成功提醒")
            .build();
    }
    manager.notify(1, notification);
}


sleep(10000);

shell("am force-stop com.wisedu.cpdaily", true);

shell("svc wifi disable",true);

Power();

engines.stopAll();
