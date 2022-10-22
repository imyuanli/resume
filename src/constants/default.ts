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
            major: '',
            time: '',
            describe: ''
        }
    ],
    internship: [
        {
            name: '',
            time: '',
            positionType: '',
            describe: '',
            result: ''
        }
    ],
    project: [
        {
            name: '',
            role: '',
            time: '',
            describe: '',
            result: ''
        }
    ],
    work: [
        {
            name: '',
            time: '',
            positionType: '',
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
            role: '',
            time: '',
            describe: '',
        }
    ]
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
        major: '例如：软件工程',
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
        positionType: '填写职位名称',
        describe: '填写实习经历',
        result: '填写实习成果'
    },
    project: {
        name: '例如：鸢离起始页',
        role: '例如：前端开发工程师',
        time: '',
        describe: '填写项目描述',
        result: '填写项目业绩'
    },
    work: {
        name: '例如：北京字节跳动科技有限公司',
        time: '',
        positionType: '填写职位名称',
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
        role: '例如：学生会会长',
        time: '',
        describe: '填写项目描述',
    }
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
        major: '专业',
        time: '在校时间',
        describe: '在校经历'
    },
    internship: {
        name: '公司名称',
        time: '在职时间',
        positionType: '职位类型',
        describe: '实习经历',
        result: '实习成果'
    },
    project: {
        name: '项目名称',
        role: '项目角色',
        time: '项目时间',
        describe: '项目描述',
        result: '项目业绩'
    },
    work: {
        name: '公司名称',
        time: '在职时间',
        positionType: '职位类型',
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
        role: '担任角色',
        time: '项目时间',
        describe: '填写项目描述',
    }
}

//展示的模块
export const DEFAULT_MODULE_DISPLAY = {
    advantages: true,
    education: true
}

//默认对象
export const DEFAULT_SINGLE = {
    education: {
        name: '',
        qualification: '',
        major: '',
        time: '',
        describe: ''
    },
    internship: {
        name: '',
        time: '',
        positionType: '',
        describe: '',
        result: ''
    },
    project: {
        name: '',
        role: '',
        time: '',
        describe: '',
        result: ''
    },
    work: {
        name: '',
        time: '',
        positionType: '',
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
        role: '',
        time: '',
        describe: '',
    }
}