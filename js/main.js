$(function() {
    $('#slider').nivoSlider({
        data:[
            {
                img_src:"img/toystory.jpg",//展示的图片
                data_thumb:"",//当controlNavThumbs设置成true时的，导航条展示的小图url,放空或者不写默认为img_src
                a_href:"",//图片的超链接
                img_alt:"",//图片无法显示时的描述信息
                title:" "//展示的标题
            },
            {
                img_src:"img/up.jpg",//展示的图片
                a_href:"http://dev7studios.com",//图片的超链接
                title:"这是一个例子的说明"//展示的标题
            },
            {
                img_src:"img/walle.jpg"//展示的图片
            }
        ],
        css:{
            width:"1000px",
            height:"500px"
        }
    });
});