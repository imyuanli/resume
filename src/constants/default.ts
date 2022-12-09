export const DEFAULT_DATA = {
    basicInfo: {
        userName: '',
        avatar: '',
        position: '',
        gender: '',
        email: '',
        phone: '',
        weChatNumber: '',
        jobDate: '',
        birthDate: '',
        city: '',
        salary: '',
    },
    advantages: "",
    education: [
        {
            name: '',
            qualification: '',
            position: '',
            time: '',
            describe: ''
        }
    ],
    internship: [
        {
            name: '',
            time: '',
            position: '',
            describe: '',
            result: ''
        }
    ],
    project: [
        {
            name: '',
            position: '',
            time: '',
            describe: '',
            result: ''
        }
    ],
    work: [
        {
            name: '',
            time: '',
            position: '',
            describe: '',
            result: ''
        }
    ],
    volunteer: [
        {
            name: '',
            duration: '',
            time: '',
            describe: '',
        }
    ],
    society: [
        {
            name: '',
            position: '',
            time: '',
            describe: '',
        }
    ],
    skill: '',
    hobby: '',
    honor: ''
}

export const DEFAULT_TITLE = {
    advantages: "个人优势",
    education: "教育经历",
    internship: "实习经历",
    project: "项目经历",
    work: "工作经历",
    volunteer: "志愿者经历",
    society: "社团经历",
    skill: '专业技能',
    hobby: '兴趣爱好',
    honor: '荣誉奖项'
}

export const DEFAULT_SUBTITLE = {
    basicInfo: {
        userName: '姓名',
        avatar: '头像',
        position: '期望职位',
        gender: '性别',
        email: '邮箱',
        phone: '电话',
        weChatNumber: '微信号',
        jobDate: '参加工作日期',
        birthDate: '出生日期',
        city: '期望工作城市',
        salary: '薪资要求',
    },
    advantages: "个人优势",
    education: {
        name: '学校名称',
        qualification: '学历',
        position: '专业',
        time: '在校时间',
        describe: '在校经历'
    },
    internship: {
        name: '公司名称',
        time: '在职时间',
        position: '职位类型',
        describe: '实习经历',
        result: '实习成果'
    },
    project: {
        name: '项目名称',
        position: '项目角色',
        time: '项目时间',
        describe: '项目描述',
        result: '项目业绩'
    },
    work: {
        name: '公司名称',
        time: '在职时间',
        position: '职位类型',
        describe: '工作内容',
        result: '工作成果'
    },
    volunteer: {
        name: '项目名称',
        duration: '总服务时长',
        time: '项目时间',
        describe: '项目描述',
    },
    society: {
        name: '社团名称',
        position: '担任角色',
        time: '项目时间',
        describe: '填写项目描述',
    },
    skill: '专业技能',
    hobby: '兴趣爱好',
    honor: '荣誉奖项'
}

export const DEFAULT_PLACEHOLDER = {
    basicInfo: {
        userName: '请输入您的姓名',
        avatar: '',
        position: '请输入职位',
        gender: '请选择性别',
        email: '请输入您的邮箱',
        phone: '请输入您的手机号',
        weChatNumber: '请输入您的微信号',
        jobDate: '请选择参加工作时间',
        birthDate: '',
        city: '请选择期望城市',
        salary: '请输入薪资',
    },
    advantages: "例如：两年UI设计经验，熟悉IOS和Android的界面设计规范，对产品本色有独特见解，有一定的手绘基础",
    education: {
        name: '例如：清华大学',
        qualification: '选择学历',
        position: '例如：软件工程',
        time: '',
        describe:
            '1、在校期间学习成绩优秀，多次获得校二等、校一等奖学金；\n' +
            '2、担任学生会宣传部干事，负责活动设计类工作；\n' +
            '3、多次参加志愿者活动，获得社会实践先进个人称号；\n' +
            '4、获得优秀毕业设计荣誉。\n' +
            '5、......'
    },
    internship: {
        name: '例如：北京字节跳动科技有限公司',
        time: '',
        position: '填写职位名称',
        describe: '填写实习经历',
        result: '填写实习成果'
    },
    project: {
        name: '例如：鸢离起始页',
        position: '例如：前端开发工程师',
        time: '',
        describe: '填写项目描述',
        result: '填写项目业绩'
    },
    work: {
        name: '例如：北京字节跳动科技有限公司',
        time: '',
        position: '填写职位名称',
        describe: '填写工作内容',
        result: '填写工作业绩'
    },
    volunteer: {
        name: '例如：中国红十字会医疗救助',
        duration: '例如：48小时',
        time: '',
        describe: '填写项目描述',
    },
    society: {
        name: '例如：校学生会',
        position: '例如：学生会会长',
        time: '',
        describe: '填写项目描述',
    },
    skill: '请输入你的专业技能',
    hobby: '请输入你的兴趣爱好',
    honor: '请输入你的荣誉奖项'
}

//默认对象
export const DEFAULT_SINGLE = {
    education: {
        name: '',
        qualification: '',
        position: '',
        time: '',
        describe: ''
    },
    internship: {
        name: '',
        time: '',
        position: '',
        describe: '',
        result: ''
    },
    project: {
        name: '',
        position: '',
        time: '',
        describe: '',
        result: ''
    },
    work: {
        name: '',
        time: '',
        position: '',
        describe: '',
        result: ''
    },
    volunteer: {
        name: '',
        duration: '',
        time: '',
        describe: '',
    },
    society: {
        name: '',
        position: '',
        time: '',
        describe: '',
    }
}

//模块
export const DEFAULT_MODULE_BLOCK = [
    {
        module_name: "advantages",
        module_display: true,
    },
    {
        module_name: "education",
        module_display: true,
    },
    {
        module_name: "internship",
        module_display: true,
    },
    {
        module_name: "project",
        module_display: true,
    },
    {
        module_name: "work",
        module_display: true,
    },
]
export const DEFAULT_MODULE_NONE = [
    {
        module_name: "volunteer",
        module_display: false,
    },
    {
        module_name: "society",
        module_display: false,
    },
    {
        module_name: "skill",
        module_display: false,
    },
    {
        module_name: "hobby",
        module_display: false,
    },
    {
        module_name: "honor",
        module_display: true,
    }
]

export const MOCK_DATA = {
    basicInfo: {
        userName: '姓名',
        avatar: '头像',
        position: '期望职位',
        gender: '性别',
        email: '邮箱',
        phone: '电话',
        weChatNumber: '微信号',
        jobDate: '参加工作日期',
        birthDate: '出生日期',
        city: '期望工作城市',
        salary: '薪资要求',
    },
    advantages: " 1.熟练使用React，vue等mvx框架及周边生态工具\n 2.熟练使用taro和uiapp开发多端，包括小程序，h5，pc\n 3.精通HTML5、CSS3、JS等，熟练使用jquery\n4.熟练使用ajax及axios做前后端分离项目\n5.熟练使用git进行协作开发\n6.熟悉es6新特性及模块化规范\n7.熟练使用antd，elementui等ui框架\n 8.有全栈开发能力，熟练使用django 和 fastapi开发后台及使用jinjia2进行SSR渲染，熟悉mysql，熟悉nodejs\n9.熟练使用dva，redux，umi开发react项目",
    education: [
        {
            name: '清华大学',
            qualification: '本科',
            position: '软件工程',
            time: '2021.10-2022.06',
            describe:
                '1、在校期间学习成绩优秀，多次获得校二等、校一等奖学金；\n' +
                '2、担任学生会宣传部干事，负责活动设计类工作；\n' +
                '3、多次参加志愿者活动，获得社会实践先进个人称号；\n' +
                '4、获得优秀毕业设计荣誉。\n' +
                '5、......'
        },
        {
            name: '清华大学',
            qualification: '本科',
            position: '软件工程',
            time: '2021.10-2022.06',
            describe:
                '1、在校期间学习成绩优秀，多次获得校二等、校一等奖学金；\n' +
                '2、担任学生会宣传部干事，负责活动设计类工作；\n' +
                '3、多次参加志愿者活动，获得社会实践先进个人称号；\n' +
                '4、获得优秀毕业设计荣誉。\n' +
                '5、......'
        },
    ],
    internship: [
        {
            name: '北京字节跳动科技有限公司',
            time: '2021.10-2022.06',
            position: '填写职位名称',
            describe: '技术栈：uniapp，vue，elementui，django，mysql\n' +
                '项目链接： http://imyuanli.cn\n' +
                '前台仓库： https://gitee.com/imyuanli/mysite-front-vue.git\n' +
                '后台仓库：https://gitee.com/imyuanli/mysiteback.git\n' +
                '该项目是用来作为浏览器主页的起始页的项目，项目采用前后端分离的架构，前端采用目前流行的uniapp＋上elementui达到快速开发前台的效果，后端采用django+mysql。登录后享有更多功能，（登录采用邮箱发送验证码的方式进行登录），如添加快捷导航，搜索引擎的个性化服务，一键切换壁纸，收藏壁纸，便利贴等，还有各种个性化设置，打造属于你的浏览器起始页。目前项目仍在持续的迭代开发。',
            result: '填写实习成果'
        },
        {
            name: '北京字节跳动科技有限公司',
            time: '2021.10-2022.06',
            position: '填写职位名称',
            describe: '技术栈：uniapp，vue，elementui，django，mysql\n' +
                '项目链接： http://imyuanli.cn\n' +
                '前台仓库： https://gitee.com/imyuanli/mysite-front-vue.git\n' +
                '后台仓库：https://gitee.com/imyuanli/mysiteback.git\n' +
                '该项目是用来作为浏览器主页的起始页的项目，项目采用前后端分离的架构，前端采用目前流行的uniapp＋上elementui达到快速开发前台的效果，后端采用django+mysql。登录后享有更多功能，（登录采用邮箱发送验证码的方式进行登录），如添加快捷导航，搜索引擎的个性化服务，一键切换壁纸，收藏壁纸，便利贴等，还有各种个性化设置，打造属于你的浏览器起始页。目前项目仍在持续的迭代开发。',
            result: '填写实习成果'
        },
    ],
    project: [
        {
            name: '例如：鸢离起始页',
            position: '例如：前端开发工程师',
            time: '',
            describe: '填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述',
            result: '填写项目业绩'
        },
        {
            name: '例如：鸢离起始页',
            position: '例如：前端开发工程师',
            time: '',
            describe: '填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述',
            result: '填写项目业绩'
        },
        {
            name: '例如：鸢离起始页',
            position: '例如：前端开发工程师',
            time: '',
            describe: '填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述',
            result: '填写项目业绩'
        },
        {
            name: '例如：鸢离起始页',
            position: '例如：前端开发工程师',
            time: '',
            describe: '填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述',
            result: '填写项目业绩'
        },
        {
            name: '例如：鸢离起始页',
            position: '例如：前端开发工程师',
            time: '',
            describe: '填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述填写项目描述',
            result: '填写项目业绩'
        },
    ],
    work: [
        {
            name: '例如：北京字节跳动科技有限公司',
            time: '',
            position: '填写职位名称',
            describe: '填写工作内容',
            result: '填写工作业绩'
        },
        {
            name: '例如：北京字节跳动科技有限公司',
            time: '',
            position: '填写职位名称',
            describe: '填写工作内容',
            result: '填写工作业绩'
        },
    ],
    volunteer: [
        {
            name: '项目名称',
            duration: '总服务时长',
            time: '项目时间',
            describe: '项目描述',
        }
    ],
    society: [
        {
            name: '社团名称',
            position: '担任角色',
            time: '项目时间',
            describe: '填写项目描述',
        }
    ],
    skill: '请输入你的专业技能',
    hobby: '请输入你的兴趣爱好',
    honor: '请输入你的荣誉奖项'
}
