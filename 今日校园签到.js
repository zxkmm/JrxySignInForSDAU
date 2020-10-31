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
while(!click("未填写 >"));
sleep(20000);
while(!click("否"));

// for(i=1;i<25;i++){      //一边点否一边滑动屏幕
//     while(!click("否"));
//     swipe(10, 1500, 10, 1000, 50);
// }



for(i=1;i<10;i++)
swipe(10, 1500, 10, 1000, 50);

for(i=0;i<10;i++){
    setText(i,"36.2");
}

while(!click("确认已认真查看，且填写信息无误"));
while(!click("提交给辅导员"));
sleep(300);
click(758,1128);//请自行修改签到按钮坐标

back();





sleep(10000);

shell("am force-stop com.wisedu.cpdaily", true);

//shell("svc wifi disable",true);



Power();


engines.stopAll()


