export const DEFAULT_DATA ={
    basicInfo:{
        userName:'',
        avatar:'',
        position:'',
        gender:'',
        email:'',
        phone:'',
        weChatNumber:'',
        jobDate:'',
        birthDate:'',
        city:'',
        salary:'',
    },
    advantages:{
        value:""
    },
    education:[
        {
            schoolName:'',
            qualification:'',
            major:'',
            timeSlot:'',
            associationActivity:''
        }
    ],
}

export const DEFAULT_PLACEHOLDER ={
    basicInfo:{
        userName:'请输入您的姓名',
        avatar:'',
        position:'请输入职位',
        gender:'请选择性别',
        email:'请输入您的邮箱',
        phone:'请输入您的手机号',
        weChatNumber:'请输入您的微信号',
        jobDate:'请选择参加工作时间',
        birthDate:'',
        city:'请选择期望城市',
        salary:'请输入薪资',
    },
    advantages:"例如：两年UI设计经验，熟悉IOS和Android的界面设计规范，对产品本色有独特见解，有一定的手绘基础",
    education:{
        schoolName:'学校',
        qualification:'学历',
        major:'',
        timeSlot:'',
        associationActivity:
            '1、在校期间学习成绩优秀，多次获得校二等、校一等奖学金；\n' +
            '2、担任学生会宣传部干事，负责活动设计类工作；\n' +
            '3、多次参加志愿者活动，获得社会实践先进个人称号；\n' +
            '4、获得优秀毕业设计荣誉。\n'+
            '5、......'
    },
    // internship:[
    //   {
    //     corporateName:'',
    //     In service time:'',
    //     Position Type,
    //   }
    // ],
}

export const DEFAULT_SUBTITLE ={
    basicInfo:{
        userName:'姓名',
        avatar:'头像',
        position:'期望职位',
        gender:'性别',
        email:'邮箱',
        phone:'电话',
        weChatNumber:'微信号',
        jobDate:'参加工作日期',
        birthDate:'出生日期',
        city:'期望工作城市',
        salary:'薪资要求',
    },
    advantages:"个人优势",
    education:{
        schoolName:'学校名称',
        qualification:'学历',
        major:'专业',
        timeSlot:'起止时间',
        associationActivity:'在校经历'
    },
    // internship:[
    //   {
    //     corporateName:'',
    //     In service time:'',
    //     Position Type,
    //   }
    // ],
}

//展示的模块
export const DEFAULT_MODULE_DISPLAY={
    advantages:true,
    education:true
}