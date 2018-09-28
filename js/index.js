~function () {
    var myChart = echarts.init(ET1);
    var option = {
        title: {
            subtext: '数据来自百度百科'
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['阿杰', '季冠霖', '姜广涛', '边江', '山新', '夏磊', '沈磊', '乔诗语', '李立宏', '赵岭']
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 部'
                }
            }
        ],
        series: [
            {
                name: '作品总数',
                type: 'line',
                data: [233, 525, 253, 283, 113, 401, 195, 190, 182, 465],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    myChart.setOption(option);
}();


~function () {
    var myChart = echarts.init(ET2);
    var option = {
        title: {
            subtext: '数据来自百度百科'
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['电视剧', '电影', '动画', '广播剧', '有声作品', '游戏']
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 部'
                }
            }
        ],
        series: [
            {
                name: '各类作品数量',
                type: 'line',
                data: [240, 237, 21, 8, 0, 19],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET3);
    var option = {
    title : {
        subtext: '数据来自百度百科'
    },
    tooltip : {
        trigger: 'axis'

    },
    toolbox: {
        show : true,
        feature : {
            magicType : {show: true, type: ['line', 'bar']},
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['电视剧','电影','动画','广播剧','有声作品','游戏']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} 部'
            }
        }
    ],
    series : [
        {
            name:'各类作品数量',
            type:'line',
            data:[10, 7, 62, 23, 0, 11],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
    };
    myChart.setOption(option);
}();


~function () {
    var myChart = echarts.init(ET4);
    var option = {
    title : {
        text: '2017年排行榜前十名配音演员入行年数',
        subtext: '截止到2018年，数据来自百度'
    },

    toolbox: {
        show : true,
        feature : {
            magicType : {show: true, type: ['line', 'bar']},
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['阿杰','季冠霖','姜广涛','边江','山新','夏磊','沈磊','乔诗语','李立宏','赵岭']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'入行年数',
            type:'bar',
            data:[12,18,19,14,10,17,17,11,41,23],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
    };
    myChart.setOption(option);
}();



~function () {
    var myChart = echarts.init(ET5);
    var option = {
        title : {
        text: '被关注度最高的配音工作室（公司）',
        subtext: '数据来自搜狗指数以及微信指数'
    },
    tooltip : {
        trigger: 'axis'
    },

    toolbox: {
        show : true,
        feature : {
            magicType : {show: true, type: ['line', 'bar']},
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['729声工厂','光合积木','边江工作室','音熊联萌','北斗企鹅']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} '
            }
        }
    ],
    series : [
        {
            name:'搜狗指数',
            type:'line',
            data:[82, 30, 12, 14, 39],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'微信指数',
            type:'line',
            data:[28, 72, 24, 11,56],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
};
myChart.setOption(option);
}();