
var projectName = '企业博客网站';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '企业介绍',
	url: './pages/qiyejieshao/list.html'
}, 
{
	name: '产品信息',
	url: './pages/chanpinxinxi/list.html'
}, 
{
	name: '企业动态',
	url: './pages/qiyedongtai/list.html'
}, 
{
	name: '企业相册',
	url: './pages/qiyexiangce/list.html'
}, 
{
	name: '文章信息',
	url: './pages/wenzhangxinxi/list.html'
}, 

{
	name: '企业新闻',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/ssmtok55/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"员工","menuJump":"列表","tableName":"yuangong"}],"menu":"员工管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"企业信息","menuJump":"列表","tableName":"qiyexinxi"}],"menu":"企业信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"企业介绍","menuJump":"列表","tableName":"qiyejieshao"}],"menu":"企业介绍管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"部门分类","menuJump":"列表","tableName":"bumenfenlei"}],"menu":"部门分类管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"产品信息","menuJump":"列表","tableName":"chanpinxinxi"}],"menu":"产品信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"企业动态","menuJump":"列表","tableName":"qiyedongtai"}],"menu":"企业动态管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"企业相册","menuJump":"列表","tableName":"qiyexiangce"}],"menu":"企业相册管理"},{"child":[{"buttons":["查看","删除","审核"],"menu":"文章信息","menuJump":"列表","tableName":"wenzhangxinxi"}],"menu":"文章信息管理"},{"child":[{"buttons":["查看","删除","修改"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"企业新闻","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"企业介绍列表","menuJump":"列表","tableName":"qiyejieshao"}],"menu":"企业介绍模块"},{"child":[{"buttons":["查看"],"menu":"产品信息列表","menuJump":"列表","tableName":"chanpinxinxi"}],"menu":"产品信息模块"},{"child":[{"buttons":["查看"],"menu":"企业动态列表","menuJump":"列表","tableName":"qiyedongtai"}],"menu":"企业动态模块"},{"child":[{"buttons":["查看"],"menu":"企业相册列表","menuJump":"列表","tableName":"qiyexiangce"}],"menu":"企业相册模块"},{"child":[{"buttons":["查看","查看评论","新增"],"menu":"文章信息列表","menuJump":"列表","tableName":"wenzhangxinxi"}],"menu":"文章信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"企业介绍","menuJump":"列表","tableName":"qiyejieshao"}],"menu":"企业介绍管理"},{"child":[{"buttons":["查看"],"menu":"产品信息","menuJump":"列表","tableName":"chanpinxinxi"}],"menu":"产品信息管理"},{"child":[{"buttons":["查看"],"menu":"企业动态","menuJump":"列表","tableName":"qiyedongtai"}],"menu":"企业动态管理"},{"child":[{"buttons":["查看"],"menu":"企业相册","menuJump":"列表","tableName":"qiyexiangce"}],"menu":"企业相册管理"},{"child":[{"buttons":["查看","新增","查看评论","删除","修改"],"menu":"文章信息","menuJump":"列表","tableName":"wenzhangxinxi"}],"menu":"文章信息管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"企业介绍列表","menuJump":"列表","tableName":"qiyejieshao"}],"menu":"企业介绍模块"},{"child":[{"buttons":["查看"],"menu":"产品信息列表","menuJump":"列表","tableName":"chanpinxinxi"}],"menu":"产品信息模块"},{"child":[{"buttons":["查看"],"menu":"企业动态列表","menuJump":"列表","tableName":"qiyedongtai"}],"menu":"企业动态模块"},{"child":[{"buttons":["查看"],"menu":"企业相册列表","menuJump":"列表","tableName":"qiyexiangce"}],"menu":"企业相册模块"},{"child":[{"buttons":["查看","查看评论","新增"],"menu":"文章信息列表","menuJump":"列表","tableName":"wenzhangxinxi"}],"menu":"文章信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"员工","tableName":"yuangong"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
