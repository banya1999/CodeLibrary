var data = {
	categoryList: [
		// 主要菜单
		{ id: 1, name: "手机", fid: 0 },
		{ id: 2, name: "笔记本", fid: 0 },
		{ id: 3, name: "平板", fid: 0 },
		{ id: 4, name: "智能穿戴&VR", fid: 0 },
		{ id: 5, name: "智能家居", fid: 0 },
		{ id: 6, name: "智慧屏", fid: 0 },
		{ id: 7, name: "耳机音箱", fid: 0 },
		{ id: 8, name: "配件", fid: 0 },
		{ id: 9, name: "生态产品", fid: 0 },
		{ id: 10, name: "增值服务", fid: 0 },
		// 手机二级菜单
		{ id: 11, name: "HUAWEI P系列", avatar: "../img/index/menuphone/phone01.png", fid: 1 },
		{ id: 12, name: "HUAWEI Mate系列", avatar: "../img/index/menuphone/phone02.png", fid: 1 },
		{ id: 13, name: "HUAWEI nova系列", avatar: "../img/index/menuphone/phone03.png", fid: 1 },
		{ id: 14, name: "华为畅享系列", avatar: "../img/index/menuphone/phone04.png", fid: 1 },
		{ id: 15, name: "HUAWEI 麦芒系列", avatar: "../img/index/menuphone/phone05.png", fid: 1 },
		{ id: 16, name: "荣耀 V系列", avatar: "../img/index/menuphone/phone06.png", fid: 1 },
		{ id: 17, name: "荣耀 HONOR系列", avatar: "../img/index/menuphone/phone07.png", fid: 1 },
		{ id: 18, name: "荣耀 X系列", avatar: "../img/index/menuphone/phone08.png", fid: 1 },
		{ id: 19, name: "荣耀 Play系列", avatar: "../img/index/menuphone/phone09.png", fid: 1 },
		//笔记本
		{ id: 20, name: "华为MateBook X系列", avatar: "../img/index/book/book1.png", fid: 2 },
		{ id: 21, name: "华为MateBook系列", avatar: "../img/index/book/book2.png", fid: 2 },
		{ id: 22, name: "华为MateBook D系列", avatar: "../img/index/book/book3.png", fid: 2 },
		{ id: 23, name: "荣耀MagicBook系列", avatar: "../img/index/book/book4.png", fid: 2 },
		{ id: 24, name: "荣耀MagicBook Pro系列", avatar: "../img/index/book/book5.png", fid: 2 },
		//平板
		{ id: 25, name: "华为MatePad 系列", avatar: "../img/index/pad/pad1.png", fid: 3 },
		{ id: 26, name: "荣耀 V系列", avatar: "../img/index/pad/pad2.jpg", fid: 3 },
		{ id: 27, name: "华为畅享系列", avatar: "../img/index/pad/pad3.png", fid: 3 },
		{ id: 28, name: "荣耀数字系列", avatar: "../img/index/pad/pad4.png", fid: 3 },
		{ id: 29, name: "荣耀畅玩系列", avatar: "../img/index/pad/pad5.png", fid: 3 },
		// vr
		{ id: 30, name: "智能手表", avatar: "../img/index/VR/VR.png", fid: 4 },
		{ id: 31, name: "儿童手表", avatar: "../img/index/VR/VR2.png", fid: 4 },
		{ id: 32, name: "智能手环", avatar: "../img/index/VR/VR3.png", fid: 4 },
		{ id: 33, name: "VR", avatar: "../img/index/VR/VR4.png", fid: 4 },
		{ id: 34, name: "智能健康配件", avatar: "../img/index/VR/VR5.png", fid: 4 },
		//智能家具
		{ id: 35, name: "智能路由", avatar: "../img/index/AIhouse/router1.png", fid: 5 },
		{ id: 36, name: "移动路由", avatar: "../img/index/AIhouse/router2.png", fid: 5 },
		{ id: 37, name: "智能音箱", avatar: "../img/index/AIhouse/router3.png", fid: 5 },
		{ id: 38, name: "智能存储", avatar: "../img/index/AIhouse/router4.png", fid: 5 },
		{ id: 39, name: "Hlink生态", avatar: "../img/index/AIhouse/router5.png", fid: 5 },
		//ping
		{ id: 40, name: "华为智慧屏", avatar: "../img/index/ping/ping1.png", fid: 6 },
		{ id: 41, name: "荣耀智慧屏态", avatar: "../img/index/ping/ping2.png", fid: 6 },
		//音响
		{ id: 42, name: "真无线耳机", avatar: "../img/index/ear/ear1.jpg", fid: 7 },
		{ id: 43, name: "有线耳机", avatar: "../img/index/ear/ear2.jpg", fid: 7 },
		{ id: 44, name: "蓝牙耳机", avatar: "../img/index/ear/ear3.jpg", fid: 7 },
		{ id: 45, name: "蓝牙音箱", avatar: "../img/index/ear/ear4.png", fid: 7 },
		{ id: 46, name: "智能眼睛", avatar: "../img/index/ear/ear5.png", fid: 7 },
		{ id: 47, name: "智能音箱", avatar: "../img/index/ear/ear6.png", fid: 7 },
		//配件
		{ id: 48, name: "充电线/线材", avatar: "../img/index/peijian/p1.png", fid: 8 },
		{ id: 49, name: "移动电源", avatar: "../img/index/peijian/p2.jpg", fid: 8 },
		{ id: 50, name: "自拍杆/支架", avatar: "../img/index/peijian/p3.png", fid: 8 },
		{ id: 51, name: "摄像机/镜头", avatar: "../img/index/peijian/p4.png", fid: 8 },
		{ id: 52, name: "智能硬件", avatar: "../img/index/peijian/p5.png", fid: 8 },
		{ id: 53, name: "生活周边", avatar: "../img/index/peijian/p6.png", fid: 8 },
		{ id: 54, name: "保护壳", avatar: "../img/index/peijian/p7.png", fid: 8 },
		{ id: 55, name: "保护套", avatar: "../img/index/peijian/p8.png", fid: 8 },
		{ id: 56, name: "贴膜", avatar: "../img/index/peijian/p9.png", fid: 8 },
		{ id: 57, name: "个人电脑配件", avatar: "../img/index/peijian/p10.png", fid: 8 },
		{ id: 58, name: "平板配件", avatar: "../img/index/peijian/p11.png", fid: 8 },
		{ id: 59, name: "智慧屏配件", avatar: "../img/index/peijian/p12.png", fid: 8 },
		{ id: 60, name: "穿戴配件", avatar: "../img/index/peijian/p13.png", fid: 8 },
		//生态产品
		{ id: 61, name: "智能灯光", avatar: "../img/index/env/s1.png", fid: 9 },
		{ id: 62, name: "生活电器", avatar: "../img/index/env/s2.png", fid: 9 },
		{ id: 63, name: "数码周边", avatar: "../img/index/env/s3.png", fid: 9 },
		{ id: 64, name: "环境卫士", avatar: "../img/index/env/s4.png", fid: 9 },
		{ id: 65, name: "安防门锁", avatar: "../img/index/env/s5.png", fid: 9 },
		{ id: 66, name: "健康保健", avatar: "../img/index/env/s6.png", fid: 9 },
		{ id: 67, name: "运动健身", avatar: "../img/index/env/s7.png", fid: 9 },
		{ id: 68, name: "户外出行", avatar: "../img/index/env/s8.png", fid: 9 },
		{ id: 69, name: "厨电卫浴", avatar: "../img/index/env/s9.png", fid: 9 },
		{ id: 70, name: "影音娱乐", avatar: "../img/index/env/s10.png", fid: 9 },
		{ id: 71, name: "个护美妆", avatar: "../img/index/env/s11.png", fid: 9 },
		
		{ id: 72, name: "华为视频卡", avatar: "../img/index/other/o1.png", fid: 10 },
		{ id: 73, name: "花币卡", avatar: "../img/index/other/o2.png", fid: 10 },
		{ id: 74, name: "华为音乐卡", avatar: "../img/index/other/o3.png", fid: 10 },
		{ id: 75, name: "华为云空间", avatar: "../img/index/other/o5.png", fid: 10 },
		{ id: 76, name: "电池更换服务", avatar: "../img/index/other/o4.png", fid: 10 },
		{ id: 77, name: "服务器", avatar: "../img/index/other/o6.png", fid: 10 },
		{ id: 78, name: "AI 计算平台", avatar: "../img/index/other/o7.png", fid: 10 }
	],
	
	bannerList: [
		{ id: 6, avatar: "../img/index/banner/banner06.jpg" },
		{ id: 1, avatar: "../img/index/banner/banner01.jpg" },
		{ id: 2, avatar: "../img/index/banner/banner02.jpg" },
		{ id: 3, avatar: "../img/index/banner/banner03.jpg" },
		{ id: 4, avatar: "../img/index/banner/banner04.jpg" },
		{ id: 5, avatar: "../img/index/banner/banner05.jpg" },
		{ id: 6, avatar: "../img/index/banner/banner06.jpg" },
		{ id: 1, avatar: "../img/index/banner/banner01.jpg" }
	],	
		
	advList: [
		{ id: 6, avatar: "../img/index/aadv/a6.jpg" },
		{ id: 1, avatar: "../img/index/aadv/a1.png" },
		{ id: 2, avatar: "../img/index/aadv/a2.jpg" },
		{ id: 3, avatar: "../img/index/aadv/a3.jpg" },
		{ id: 4, avatar: "../img/index/aadv/a4.png" },
		{ id: 5, avatar: "../img/index/aadv/a5.jpg" },
		{ id: 6, avatar: "../img/index/aadv/a6.jpg" },
		{ id: 1, avatar: "../img/index/aadv/a1.png" }
	],
	
	
	
	// 商品列表页=====
	productList: [
		//华为P系列
		{ pid: 1, cid: 11, name: "HUAWEI P40 Pro+", nav: "HUAWEI P系列", title: "HUAWEI P40 Pro+ 5G 全网通 8GB+256GB（陶瓷白）", 
		avatar: "../img/list-phone/huawei_P/p1.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98,
		img: "../img/p40p+/p2.jpg&../img/p40p+/p1.png&../img/p40p+/p3.png&../img/p40p+/p4.png&../img/p40p+/p5.png&../img/p40p+/p6.png&../img/p40p+/p7.png&../img/p40p+/p8.png&../img/p40p+/p9.png",
		imgDetail: "../img/p40p+/img1.jpg&../img/p40p+/img5.jpg&../img/p40p+/img6.jpg&../img/p40p+/img7.jpg&../img/p40p+/img8.jpg&../img/p40p+/img9.jpg&../img/p40p+/img10.jpg&../img/p40p+/img2.png&../img/p40p+/img3.png&../img/p40p+/img4.png"
		 },
		 
		{ pid: 2, cid: 11, name: "HUAWEI P40 Pro", nav: "HUAWEI P系列", title: "HUAWEI P40 Pro 5G 全网通 8GB+256GB（陶瓷白）",  
		 avatar: "../img/list-phone/huawei_P/p2.png", price: 5988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98 },
		{ pid: 3, cid: 11, name: "HUAWEI P40", nav: "HUAWEI P系列", title: "HUAWEI P40 5G 全网通 8GB+256GB（陶瓷白）",   
		avatar: "../img/list-phone/huawei_P/p3.png", price: 4488, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98 },
		
		{ pid: 4, cid: 20, name: "HUAWEI MateBook X Pro 2020款", avatar: "../img/laptopmx/m1.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98 },
		{ pid: 5, cid: 20, name: "HUAWEI MateBook X Pro 2019 款", avatar: "../img/laptopmx/m2.png", price: 5988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98 },
		// { pid: 6, cid: 12, name: "测试", avatar: "../img/list-phone/huawei_P/p3.png", price: 4488, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98 },
		//全部手机
		
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p1.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p2.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p3.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p4.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p5.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p6.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p7.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p8.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p9.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p10.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p11.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p12.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p13.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p14.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p15.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p16.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p17.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p18.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p19.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  },
		{ aid: 1,  name: "麦芒9 5G", avatar: "../img/phoneAll/p20.png", price: 7988, tips: "多款可选", info: "一站式换新 分期免息", conmentcount: 2916, conmentrate: 98  }
		
	
	],
	
	userList: [
		{ name: 'user1', pwd:'123', phone:'12312341234' },
		{ name: 'user2', pwd:'123', phone:'12312341234' }
	],
	
	cartList: [
		{ id: 1, name: 'user1', pid:1, count: 2, date: '2020-08-05 14:00:00'},
		{ id: 2, name: 'user1', pid:2, count: 1, date: '2020-08-05 14:12:10'},
		{ id: 3, name: 'user1', pid:3, count: 3, date: '2020-08-05 14:35:00'},
		{ id: 4, name: 'user1', pid:4, count: 3, date: '2020-08-05 14:35:00'}
		// { id: 4, name: 'user1', pid:1, count: 5, date: '2020-08-05 14:12:10'}
		
	],
	addressList: []
	
};


sessionStorage.setItem("data",JSON.stringify(data));