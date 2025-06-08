const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmtok55/",
            name: "ssmtok55",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmtok55/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "企业博客网站"
        } 
    }
}
export default base
