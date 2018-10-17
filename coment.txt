index.html
*/img/slaider_devase/telefon -- корректное отображение sony и prestigio
*/img/slaider_devase/telec -- корректное отображение SATURN
не отображались совсем, скорее всего из-за регистра

2164*             <p  style="width: 100%;  margin-top: 16px; text-align: center;">„тобы уточнить приблезительную стоимость ремонта телевизора, гироскутера и другой техники перезвоните по телефону <span>0953375886, 0933375886</span> </p>
492* iframe == margin: 15px 0;"
____________________________

main.js
*$('#praice_plashet') -- не вызывал прайс планшетов, поправил
____________________________

style.css
27*	text-shadow: -4px 4px 0 rgba(48,48,48,0.5), -2px 2px 0 rgba(64,64,64,0.5);
230*	text-shadow: -4px 4px 0 rgba(48,48,48,0.5), -2px 2px 0 rgba(64,64,64,0.5);
533*	.repair { padding-top: 15px;}
403*	margin-bottom: 15px;
589*	    .box-modal_close_tab {    float: right;
    top: 20%;
    position: relative;
    width: 20px;
    }
557*    .header-title_text {transform: translateY(20px);}
658*	.header-title { margin-top: 86px;
484* .blog_cart {    
    height: 320px;
    vertical-align: bottom;