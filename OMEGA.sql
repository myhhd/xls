SET NAMES UTF8;
DROP DATABASE IF EXISTS OMEGA;
CREATE DATABASE OMEGA CHARSET=UTF8;
USE OMEGA;
#创建用户信息表
CREATE TABLE OM_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),      #姓名
  upwd VARCHAR(32),       #密码
  uemail VARCHAR(255),    #邮箱
  gender BOOL,            #性别
  birthday DATE           #出生日期
);
#插入基本用户信息
INSERT INTO OM_user VALUES(null,'tom','123456','tom@163.com','1','2000-10-10');
INSERT INTO OM_user VALUES(null,'jerry','123456','jerry@163.com','1','2000-10-10');
INSERT INTO OM_user VALUES(null,'rose','123456','rose@163.com','0','2000-10-10');
#创建首页轮播表
CREATE TABLE OM_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),   #图片路径
  detail VARCHAR(255),    #图片描述
  href  VARCHAR(255)      #图片链接
);
#插入首页轮播表信息
INSERT INTO OM_index_carousel VALUES(null,"img/index/lunbo1.jpg","1",'product_details.html?nid=1');
INSERT INTO OM_index_carousel VALUES(null,"img/index/lunbo2.jpg","1",'product_details.html?nid=1');
INSERT INTO OM_index_carousel VALUES(null,"img/index/lunbo3.jpg","1",'product_details.html?nid=1');
INSERT INTO OM_index_carousel VALUES(null,"img/index/lunbo4.jpg","1",'product_details.html?nid=1');
INSERT INTO OM_index_carousel VALUES(null,"img/index/lunbo5.jpg","1",'product_details.html?nid=1');
INSERT INTO OM_index_carousel VALUES(null,"img/index/lunbo2_1.jpg","2",'product_details.html?nid=1');
INSERT INTO OM_index_carousel VALUES(null,"img/index/lunbo2_2.jpg","2",'product_details.html?nid=1');
INSERT INTO OM_index_carousel VALUES(null,"img/index/lunbo2_3.jpg","2",'product_details.html?nid=1');
INSERT INTO OM_index_carousel VALUES(null,"img/index/lunbo2_4.jpg","2",'product_details.html?nid=1');
#创建首页商品表
CREATE TABLE OM_laptop_index(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_name VARCHAR(32),  #类型
  name  VARCHAR(64),        #商品名称
  img_url VARCHAR(255),     #图片路径
  detail_href VARCHAR(255)  #商品路径
);
#插入首页商品表信息
INSERT INTO OM_laptop_index VALUES(null,'至臻天文台表','欧米茄“同轴•至臻天文台表”39毫米','img/index/index_two_1.jpg','product_details.html?nid=1');
INSERT INTO OM_laptop_index VALUES(null,'至臻天文台表','欧米茄41毫米至臻天文台表','img/index/index_two_2.jpg','product_details.html?nid=1');
INSERT INTO OM_laptop_index VALUES(null,'至臻天文台表','欧米茄44.25毫米至臻天文台计时腕表','img/index/index_two_3.jpg','product_details.html?nid=1');
INSERT INTO OM_laptop_index VALUES(null,'至臻天文台表','欧米茄同轴至臻天文台38毫米女士腕表','img/index/index_two_4.jpg','product_details.html?nid=1');
INSERT INTO OM_laptop_index VALUES(null,'至臻天文台表','欧米茄同轴至臻天文台表39.5毫米','img/index/index_two_5.jpg','product_details.html?nid=1');
INSERT INTO OM_laptop_index VALUES(null,'至臻天文台表','欧米茄27毫米至臻天文台小秒针腕表','img/index/index_two_6.jpg','product_details.html?nid=1');
#创建巴塞尔钟表珠宝展表
CREATE TABLE OM_bs_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),       #标题
  subtitle VARCHAR(255),    #副标题
  img_url VARCHAR(255),     #图片路径
  detail_href VARCHAR(255)  #商品路径
);
#插入巴塞尔钟表珠宝展表
INSERT INTO OM_bs_laptop VALUES(null,'超霸系列"月之暗面"阿波罗8号腕表','这款卓越计时腕表通过镂空表盘和精巧机芯呈现出月球表面的现象，仿佛将真正的月球佩戴于腕间','img/product/product_1.jpg','product_details.html?nid=1');
INSERT INTO OM_bs_laptop VALUES(null,'欧米茄海马系列300米潜水表','探索欧米茄经典腕表的全新设计！欧米茄首款海马系列300米潜水表诞生25年后，由内而外全新升级','img/product/product_2.jpg','product_details.html?nid=1');
INSERT INTO OM_bs_laptop VALUES(null,'欧米茄海马系列1948限量版腕表','为纪念海马系列腕表问世70周年，欧米茄推出两款海马系列1948限量版腕表','img/product/product_3.jpg','product_details.html?nid=1');
INSERT INTO OM_bs_laptop VALUES(null,'碟飞名典系列腕表','探索这一专门为女士打造的精致腕表系列，经典纤薄的表壳与时尚典雅的格调备受瞩目。','img/product/product_4.jpg','product_details.html?nid=1');
INSERT INTO OM_bs_laptop VALUES(null,'欧米茄海马系列AQUA TERRA珠宝腕表','这款欧米茄腕表镶饰闪耀钻石和迷人红宝石，尽显华丽璀璨之美和精湛的制表工艺。','img/product/product_5.jpg','product_details.html?nid=1');
#创建产品家族详情
CREATE TABLE OM_laptop_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),            #标题
  title_detail VARCHAR(255),    #标题详情
  title_img VARCHAR(255),       #标题图片
  design  VARCHAR(64),          #设计
  design_detail VARCHAR(255),   #设计详情
  design_img VARCHAR(255),      #设计详情图片
  appearance_title VARCHAR(64), #外观标题
  appearance_href VARCHAR(255), #外观详情-视频
  appearance VARCHAR(64),       #外观
  appearance_detail VARCHAR(255),#外观详情
  appearance_img VARCHAR(255),  #外观图片
  surface VARCHAR(64),          #手表表面
  surface_title VARCHAR(64),    #表面标题
  surface_detail VARCHAR(255),  #表面详情
  surface_img VARCHAR(255),     #表面图片
  pback_title VARCHAR(64),      #表背标题
  pback_detail  VARCHAR(255),   #表背详情
  pback_img   VARCHAR(255),     #表背图片
  today_recommend VARCHAR(64),  #今日推荐
  today_detail VARCHAR(255),    #今日推荐详情
  today_img VARCHAR(255),       #今日推荐图片
  all_style VARCHAR(64),        #所有款式
  all_style_detail VARCHAR(255),#所有款式详情
  nid INT                       #产品类型型号
);
INSERT INTO OM_laptop_family VALUES(null,'欧米茄海马系列300米潜水表','自1993年起，欧米茄海马系列300米潜水表变开启了传奇篇章。为致敬该款腕表诞生25周年，欧米茄推出全新海马系列300米潜水表，由内而外焕然一新。全新海马系列300米潜水表传承了该款腕表的独创设计和海洋精神，采用高级材质打造，设计元素全面革新。','img/product_details/details_1.jpg','设计细节','全新海马系列300米潜水表的表壳直径升级至42毫米，所有的设计细节再次革新，包括新颖的陶瓷表圈，其中潜水刻度或OMEGA Ceragold®技术打造，或覆以白色珐琅。腕表内部搭载8800至臻天文台机芯，实现了全新腕表在精准度、性能以及防磁性的卓越提升。','img/product_details/details_2.jpg','"表圈上的白色珐琅彰显持久纯净的美感"','img/product_details/details.mp4','外观焕新','表盘采用陶瓷精制而成，有黑色、蓝色或PVD铬色可选，更以激光雕刻技术呈现了首款海马系列300米潜水表备受欢迎的波纹图案。表盘上的小时刻度全新升级，覆有Super-LumiNova夜光涂层，镂空指针的设计上亦有细微调整。','img/product_details/details_3.jpg','"腕表日历窗移至6点钟位置，令外观造型更显对称平衡"','全新排氦气阀门','排氦气阀门⁠一直是欧米茄海⁠马⁠系⁠列⁠3⁠0⁠0⁠米⁠潜⁠水⁠表⁠的显著特征之⁠一⁠。全新表款将排氦气阀门改为圆锥形⁠，并采用欧米茄专利技术⁠，令佩戴者可在水下将腕表内⁠的氦气排出表外','img/product_details/details_4.jpg','透明表背','腕表表背呈现波纹边缘设计⁠，透过蓝宝石玻璃表镜⁠，由瑞士联邦计量研究院⁠（⁠METAS⁠）严苛核准⁠的欧米茄8800至臻天文台机芯⁠的运转美态清晰可见','img/product_details/details_5.jpg','钛钽限量版腕表','这款珍贵腕表承袭1993年原型表款⁠的独创设计⁠，再次将钽金属融入表圈和表链⁠的设计⁠，限量发行2⁠,500枚⁠。该款腕表亦采用钛金属和Sedna® 18K金材质⁠，钽金属⁠的蓝灰色调与⁠二级钛金属和Sedna® 18K金⁠的色泽形成微妙⁠的对比⁠。','img/product_details/details_6.jpg','所有款式','欧米茄海⁠马⁠系⁠列⁠3⁠0⁠0⁠米⁠潜⁠水⁠表推出14种全新表款⁠，包括6款精钢腕表⁠，以及8款精钢与K金腕表⁠。全新腕表配备经典⁠的精钢表链⁠，⁠或⁠一体式橡胶表带⁠，有黑色和蓝色两种选择⁠。金属表链经由人体工学设计⁠，与表壳连接更为紧密⁠，并且采用了欧米茄专利⁠的推拉式可调节表扣⁠，令潜水员可轻松进行调节⁠。',1);
#创建巴塞尔钟表珠宝展商品详细表
CREATE TABLE OM_laptop_details(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  series VARCHAR(64),       #系列
  genre  VARCHAR(64),       #类型
  img_url VARCHAR(255),     #图片路径
  ACC VARCHAR(64),          #手表配饰
  serial VARCHAR(64),       #序列号
  distance TINYINT,         #表耳间距
  chain VARCHAR(32),        #表链类型
  watchcase VARCHAR(32),    #表壳类型
  diameter  TINYINT,        #表壳直径
  color VARCHAR(16),        #表盘颜色
  glass_type VARCHAR(64),   #表镜玻璃类型
  waterproof VARCHAR(64),   #防水性能
  nid INT                   #产品类型型号
);
#插入商品详情表内容
INSERT INTO OM_laptop_details VALUES(null,'SEAMASTER','海马系列300米至臻天文台潜水表','img/product_details/details7.png','精钢表壳 搭配 橡胶表带','210.32.42.20.06.001','20','精钢表链','精钢表壳','42','黑色','圆弧形双面防反光耐磨损蓝宝石玻璃表镜','30个大气压(300米/1000英尺)',1);
INSERT INTO OM_laptop_details VALUES(null,'SEAMASTER','海马系列300米至臻天文台潜水表','img/product_details/details8.png','精钢表壳 搭配 精钢表链','210.30.42.20.03.001','20','精钢表链','精钢表壳','42','蓝色','圆弧形双面防反光耐磨损蓝宝石玻璃表镜','30个大气压(300米/1000英尺)',1);
INSERT INTO OM_laptop_details VALUES(null,'SEAMASTER','海马系列300米至臻天文台潜水表','img/product_details/details9.png','精钢表壳 搭配 精钢表链','210.30.42.20.01.001','20','精钢表链','精钢表壳','42','黑色','圆弧形双面防反光耐磨损蓝宝石玻璃表镜','30个大气压(300米/1000英尺)',1);
INSERT INTO OM_laptop_details VALUES(null,'SEAMASTER','海马系列300米至臻天文台潜水表','img/product_details/details10.png','精钢表壳 搭配 精钢表链','210.20.42.20.03.001','20','精钢-黄金表链','精钢-黄金表壳','42','蓝色','圆弧形双面防反光耐磨损蓝宝石玻璃表镜','30个大气压(300米/1000英尺)',1);
INSERT INTO OM_laptop_details VALUES(null,'SEAMASTER','海马系列300米至臻天文台潜水表','img/product_details/details11.png','精钢表壳-Sedna® K金表壳 搭配 橡胶表带','210.22.42.20.01.002','20','橡胶表带','精钢表壳-Sedna@ K金表壳','42','黑色','圆弧形双面防反光耐磨损蓝宝石玻璃表镜','30个大气压(300米/1000英尺)',1);
INSERT INTO OM_laptop_details VALUES(null,'SEAMASTER','海马系列300米至臻天文台潜水表','img/product_details/details12.png','钛金属-金属-Sedna® K金 搭配 钛金属-金属-Sedna® K金','210.60.42.20.99.001','','','','','','','',1);