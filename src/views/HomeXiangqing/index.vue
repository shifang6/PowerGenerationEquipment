<template>
  <div>
    <div class="home">
      <div class="home-header">
        <div class="home-header-left">
          <div class="home-header-left-fh">!</div>
          <div class="home-header-left-title">数据新闻</div>
        </div>

        <div class="home-right">
          <div class="home-right-top">相关预测</div>
          <div class="home-right-bottom">
            <div class="home-right-bottom-box" v-for="(item, index) in youCe" :key='index'>
              <div class="home-right-bottom-box-title">
                {{item.title}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-nav">
        <div class="home-nav-title">
          2019 年我国发电设备行业发展情况及 2020 年展望
        </div>
        <div class="home-nav-bottom">
          <div class="home-nav-bottom-time">机械工业发电设备中心</div>
          <div class="home-nav-bottom-zs"> 4月21日</div>
          <div class="home-nav-bottom-rg">点击量 392 次</div>
        </div>
      </div>
      <div class="home-top">
        <div class="home-top-sj">
          {{wenzhang}}
        </div>
        <div class="home-top-hot">
          <div class="home-top-hot-title">一、2019 年发电设备行业发展情况</div>
          <div class="home-top-hot-title">（一）行业发展特点</div>
          <div class="home-top-hot-title">1.产业规模：发电设备总产量开始了较大幅度回调。</div>
          <div class="home-top-hot-cen">
            2019 年全国发电设备生产完成 8419.16 万千瓦，同比下降 15.8%。其中完成水电机组
            1050.15 万千瓦，同比增长 37.2%，占发电设备产量的比重（以下简称“比重”）比上年增
            长 4.7 个百分点；火电机组 4997.6 万千瓦，同比下降 33.0%，比重比上年下降 16.6 个百分
            点； 风电机组 1933.41 万千瓦，同比增长 24.0%，比重比上年增长 8.9 个百分点； 核电机
            组 438 万千瓦，同比增长 102.8%，比重比上年增长 3.0 个百分点。
            近十几年来，发电设备行业产业规模总体处于高位运行状态。2006 年全国发电设备产
            1量突破 1 亿千瓦。随着电力行业供需变化，进入 2010 年以来，发电设备产量总体上呈现回
            落态势，但规模仍然较大。受国家产业政策调整、发电设备订单交货期较长等因素影响，有
            些年份呈现短时的产量上升。进入 2016 年，发电设备产量连年下降，且下降幅度逐年增大。
            在出口拓展方面没有明显增长变化的前提下，发电设备产量的变化趋势，是我国经济发展由
            高速增长转为中低速增长，以及电力需求从高速增长到平稳发展的必然结果。
          </div>
          <div class="home-top-hot-title">2.出口情况：出口机组产量较上年有较大增长，但绝对值仍处于低位。</div>
          <div class="home-top-hot-cen">
            当前全球经济增长预期下降，基础设施建设市场增速放缓，发电设备企业在国际市场竞
            争愈发激烈。2019 年，受国际局势、地区安全以及汇率风险等因素影响，海外项目执行风
            险较大，除光伏、风电等新能源项目以外，水电、火电、核电出口发电设备订单较上年未有
            明显突破。电站成套设备主要出口地区集中在东南亚、非洲和南美洲。
            2019 年，我国出口发电机组共 826.84 万千瓦，同比增长 18.2%，占发电设备总产量的
            9.8%，比上年增长 2.7 个百分点。但由于近几年发电设备出口产量基数较低，出口绝对值
            总体上仍然处于低位徘徊状态。近 5 年来，我国发电设备出口产量基本稳定在 1000 万千瓦
            2以下，而“十一五”、“十二五”时期大部分年份在 1500 万千瓦上下浮动。最高峰是 2011
            年，出口产量达到了 3000 万千瓦。
          </div>
          <div class="home-top-hot-title">2010-2019年我国发电设备出口产量及增长率（单位：万千瓦）</div>
          <div class="home-top-hot-title">3.经济效益：企业经济效益指标总体符合预期，但运营压力较大</div>
          <div class="home-top-hot-cen">
            2019年，发电设备行业生产经营情况总体符合预期，但运营压力较大。市场需求总体不
            足，发电设备产品价格竞争激烈，企业盈利空间不断压缩。
            2019 年，国内经营火电、核电的传统发电设备企业经济效益指标普遍下滑。哈尔滨、
            东方、上海电气三大集团全年完成营业收入比上年下降 0.89%，增速较全国机械工业低 3.35
            个百分点，较全国工业低 4.74 个百分点；完成利润比上年下降 3.75%，增速较全国机械工业
            高 0.78 个百分点，较全国工业低 0.46 个百分点。
            2019 年正赶上国内风电行业“抢装潮”，风电产业快速发展，但风电设备企业盈利情况
            表现不一。根据企业披露信息，金风科技 2019 年前三季度实现归母公司净利润 15.91 亿元，
            同比下降 34.24%；远景能源上半年风机销售 60 亿元，交付量增长 40%，利润增长 45%；明
            阳智能前三季度实现净利润 5.14 亿元，同比增长 98.59%；运达股份第三季度实现扭亏为盈。
            本轮抢装过程中，在制造环节，轴承、塔筒、叶片和风机供不应求，一些零部件设备交货量、
            3价格上涨，而有的企业近几个季度集中交付的是之前签订的低价风机订单。因此，订单签订
            与交付周期不同，导致整机、零部件环节的盈利变化节奏有差别。
          </div>
          <div class="home-top-hot-title">4.科技创新：创新发展不断深入，技术创新助力发电设备技术水平国
            际领先。
          </div>
          <div class="home-top-hot-cen">
            企业科技创新体系建设不断加强，创新发展不断深入。2019 年，发电设备企业在新能
            源及环保设备、核电设备、水电设备、高效清洁燃煤发电设备、燃机领域，不断突破，创新
            产品，继续攻关受制于人的关键技术。从研发需求侧入手，跟踪新产业技术前沿，加强新产
            业技术攻关和能力建设，持续加大科研投入力度；通过建立对外合作的协同机制，拓展高校、
            孵化机构、风投基金等合作渠道，打造开放式的创新合作体系，创新发展继续深入。
            新产品和技术创新助力发电设备技术水平国际领先。2019 年，我国发电设备技术水平
            不断提高，大型成套发电设备继续处于国际领先水平。水电方面，世界首座单机百万千瓦水
            电站白鹤滩 1 号 2 号机组已制造完成，目前 1 号机组进入机电安装阶段；抽水蓄能设备不再
            依赖进口，全年继续交货自主研发的 30 万千瓦级抽水蓄能机组 5 套。火电方面，高效灵活
            二次再热发电技术领跑世界，国内首台二次再热、π型炉百万机组大唐国际雷州 1 号机组正
            式投入商运行，各项技术指标优良；自主研发的国内首台 F 级 50 兆瓦重型燃机点火成功；
            首台 24MW 级 6000r∕min 的管线电机顺利通过型式试验并通过鉴定，填补国内空白。风电
            设备大容量机组研发、长叶片、高塔架应用等方面处于国际领先水平；成功研制出国内首台
            大功率 10MW 海上风机；新技术应用不断涌现，以激光雷达为代表的新型传感技术和以大
            数据分析为基础的智能技术使风电整体管理变得更加高效。核电设备方面，三代核电自主化
            CAP1400 设备研制基本完成；“华龙一号”机组主设备交货顺利，海外首堆国内首台主泵电
            机空载试验顺利完成；全国首个核能商业供热项目在海阳上线；哈电集团华能石岛湾高温气
            冷堆蒸汽发生器顺利发货；东方电气霞浦第四代核电示范快堆四大换热器技术设计工作基本
            完成，蒸汽发生器流致振动试验圆满成功；上海电气 KSB 历时八年，完成了 CAP1400 湿绕
            4组电机主泵样机全部鉴定试验项目；上海电气成功研制出世界排气面积最大，应用范围最广
            的 1905mm 低压缸末级长叶片。一年来，发电设备企业继续谱写大国重器新篇章，记录着
            装备制造业创新发展的新征程。
          </div>
          <div class="home-top-hot-title">5.转型升级：做大现有产业，加快由传统制造业向制造服务业转型。
          </div>
          <div class="home-top-hot-cen">
            发电设备企业正积极利用网络化、智能化拓展服务领域，推进企业高质量发展。
            哈电集团开发的智能远程运维诊断平台，将电站机组由“状态监测”提升至“智能化故
            障诊断及预测”，降低电站机组运维成本，提高机组运行经济性。签订的世界装机容量最大
            的抽水蓄能电站丰宁项目的水电远程运维项目，实现了“互联网+联储+备件”的商业化运行
            突破，填补国内空白。
            东方电气智能制造数字化车间和采购管理供应商协同平台日益完善，同时在用户服务、
            智能运维方面加大了建设力度。火电厂远程监测诊断系统完成了20多项专项诊断功能的开发。
            搭建了智慧风厂远程运维服务平台，风厂的故障率降低了20%，而且实现少人值守、无人值
            守，每台风机成本降低一万元到两万元。
            上海电气在提供电站EPC总承包的基础上，提供海外电站的运营维护等服务。积极推进
            智能核电开发和创新业务模式，通过建设科技研发平台，培育设计、设备和服务集成创新能
            力，实现从单纯设备销售向“设备集成+技术服务”的产业模式转变，通过搭建数字化制造
            协同管理平台，实现核电产品从传统离散型制造向数字化高端装备制造的生产模式转变。自
            主研发的基于云计算和大数据的远程管理平台“风云”系统不断升级，全面提升了风电装备
            设计制造、风电场建立、风电场运营维护等全产业链的核心竞争力。
          </div>
          <div class="home-top-hot-title">6.新兴产业：新兴产业快速发展，推动发电设备行业高质量发展。
          </div>
          <div class="home-top-hot-cen">
            2019年，发电设备企业不断调整产业结构，加大市场开拓力度，加快拓展新兴产业发展。
            哈电集团设计制造的国家首批光热发电示范项目各项参数优秀，蒸汽发生系统在光热汽
            5轮机领域取得新突破；提前完成中铝山西新材料热电分厂超低排放改造 BOT 项目；承接的
            上海崇明岛农村污水处理示范项目，水质达到我国最高标准；佳木斯富锦农村生活污水分散
            式处理示范项目取得突破；签订了印度尼西亚西加、伊拉克鲁迈拉海水淡化等多个 EPC、BOT
            项目；通过将垃圾高温焚烧，实现无菌处理，并利用热能产生电能变废为宝，实现可再生资
            源有效利用，1 至 11 月份累计拿到垃圾焚烧发电锅炉近 50 台。
            东方电气积极布局和培育发展氢能和燃料电池、环保、新能源材料、智能制造等新兴产
            业，不断拓展企业发展空间。自主研制的氢燃料电池自动化生产线正式投产，商用氢燃料电
            池发动机系统迈上了 100 台大关；自主研制的国内首台大型商业化光热汽轮发电机组，在德
            令哈 50MW 光热电站项目运行中各项参数优秀，填补了国内大规模槽式光热发电的技术空
            白；采取“资本+产业”方式，加大新兴产业投资力度，加速培育形成新的增长点。按照集
            团规划， 2020 年新兴成长产业板块将成为百亿产业，成长为未来集团高质量发展的支柱性
            产业。
            上海电气全力打造其总包的迪拜 950MW 光热光伏混合电站海外工程样板，在英国首个
            光伏工程太阳芯一号 5MW 项目一次成功并网，并开始首次在越南、澳大利亚签下光伏发电
            厂项目；在垃圾发电领域，实现了浙江台州黄岩垃圾发电 1*35MW 汽轮发电机组的首单突
            破；投资建设的江苏南通海安危废处置中心正式投产；储能业务领域，集团正在加大研发，
            并崭露头角。上海电气将以战略性产业结构调整为核心，力争到 2021 年战略性新兴产业规
            模占比达到 50%。
            杭锅集团连续几年被杭州市列入战略性新兴产业企业名单。截至目前共生产了 1800 多
            台（套）节能环保型余热锅炉，综合市场占有率 50%以上，成为中国余热发电的领军企业。
            参与研发、参股建设的光热发电项目已在青海德令哈地区稳定运行超过 3 年。
            济锅集团确立了“做世界最大生物质锅炉研发基地”目标，不断研制出多类型、多系列、
            多品种的生物质发电锅炉产品。济锅研制的中国第一台 CFB 锅炉自 1989 年投运之后，迄今
            从 35t/h--1028t/h（目标 60 万千瓦发电机组）多种规格类型的产品已生产了 2580 台，成为
            6世界上循环流化床锅炉产销量最大的企业。
          </div>
          <div class="home-top-hot-title">二、2020 年发电设备行业展望
          </div>
          <div class="home-top-hot-title">（一）新冠肺炎疫情对行业的影响
          </div>
          <div class="home-top-hot-cen">2020 年 1 月以来暴发的 新冠肺炎疫情对经济发展短期有较大冲击，影响企业复工复产，
            影响投资者预期。目前疫情已在全球传播蔓延。 2 月 28 日，世卫组织已将全球新冠肺炎
            疫情风险级别由“高”上调至“非常高”。疫情对发电设备行业短期影响显著，企业生产运
            营面临巨大挑战。
          </div>
          <div class="home-top-hot-title">1.对生产经营的影响
          </div>
          <div class="home-top-hot-cen">
            （1）企业项目执行难度明显加大。与 2003 年 SARS 疫情造成局部省市进入特殊管控情
            况不同，新冠肺炎疫情涉及面更广，国家绝大部分地区都处于紧急状态。发电设备上下游企
            业延期复工，生产所需物资难以得到保障。生产一线员工和设计人员不能按时到岗，项目生
            产和设计进度受到影响。发电设备产品交货存在较大的不确定性和延期可能，企业面临成本
            上升、合同纠纷增加等困难。
            （2）跨省物流运输尚未恢复，原材料及设备分包、采购成品无法按期到位，产成品无
            法及时发运，造成生产所需原材料短缺、成品物资积压等各种隐患。原材料订货周期会延长，
            采购价格将会上涨，运输成本也将不同程度增加，增加了企业运营成本。
            （3）企业暂停了外部沟通交流活动，以往需赴现场催货催款、贸易往来、技术交流、
            售后服务等一系列活动受阻，影响了沟通效果和工作进度。同时，由于不能及时派遣质检人
            员去分包企业检查质量，分包产品存在质量风险，影响产品性能以及产生更多的现场返修费
            用，项目质量控制受到影响。
            （4）发电设备上下游企业经营情况都会受到较大影响，大部分企业账款回收增加难度，
            本来企业就存在 “两金”占用较高，“两金”总额占流动资产比重偏高的现状，疫情使得企
            业资金链紧张的局面雪上加霜。企业完成全年销售及利润目标受到影响。
            8据某大型企业估算，目前由于受各地疫情防控措施的影响，多地物流仍然受阻，其上游
            供应商供货延迟影响预计将达 75 天，企业生产订单预计延期完成达 60 天；待交付项目预计
            对业主交付平均延迟将达 52.5 天，全年交货量影响预计平均达到 11%，部分项目预计影响
            达到 20%。预计全年产品综合制造成本也将有所上升，对今年部件价格的影响预计达 6%，
            对企业赢利能力及获取订单能力不利。
          </div>
          <div class="home-top-hot-title">2.对未来订单的影响
          </div>
          <div class="home-top-hot-cen">
            应疫情防控需要减少人员流动和人群聚集，发电设备招投标必须有的环节如客户走访、
            技术交流、客户来访等活动严重受阻，很多项目投招标和合同签约都将推迟，部分项目可能
            取消的风险。同时，疫情在一段时间内将影响经济增长，需求和生产放缓，消费低迷，投资
            不振，出口下行。2020 年新招标项目预计会有所下降，具体下降幅度有待进一步评估。
          </div>
          <div class="home-top-hot-title">（二）2020 年发电设备生产形势研判
          </div>
          <div class="home-top-hot-cen">
            为减少疫情对经济发展的影响，各部委包括发改委、工信部、财政部、税务总局、人力
            与社保部、交通运输部、海关总署、央行等均出台了相关支持政策。各地方政府相关部门集
            中发布了有针对性的复工复产扶持措施。目前国内疫情形势在好转，复工复产进程加快。因
            此，疫情短期内会对发电设备行业经济指标有影响，但从全年看，如果疫情得到有效控制，
            大部分企业可通过提升产能及生产效率等手段，弥补当前造成的损失。
          </div>
          <div class="home-top-hot-title">1. 2020 年预计发电设备产量
          </div>
          <div class="home-top-hot-cen">
            根据机械工业发电设备中心年初对主机企业的调研，2020 年全国计划生产完成发电设
            备约 8500 万千瓦，与 2019 年基本持平。虽然目前受疫情影响，项目执行有所延期，但由
            于水电、火电、核电设备产能本来有一部分是放空的，因此疫情过后，通过一系列措施，是
            可以完成全年生产目标的。风电设备方面，由于春节前主要制造企业产能利用率基本位于高
            位，假期延长造成的产量损失较难弥补，同时物流偏紧或造成产业链上下游衔接出现问题，
            进而风机产量和交付量可能低于预期。
            根据机械工业发电设备中心的调研，2020年国内主机企业出口发电机组约 800万千瓦，
            与 2019 年相比没有较大变化。2019 年国内新签约发电设备出口订单约 600 万千瓦，大部分
            在 2020 年交货。
          </div>
          <div class="home-top-hot-title">2．全年形势研判
          </div>
          <div class="home-top-hot-cen">
            水电方面，保住生态环保红线是开发水电资源的重要原则。2020 年将我国将继续加快
            发展壮大现已开发的水电清洁能源。乌东德、白鹤滩、抽水蓄能机组将继续保持建设高峰。
            2020 年水电机组预计交货继续保持较大幅度增长。新技术研发如高水头大容量机组、大型
            可变速抽水蓄能机组、海水抽水蓄能机组等是企业继续攻关的重点。
            火电方面，煤电去产能是大势所趋，煤电在电力系统中的定位已转变。国家发改委、能
            源局印发的《能源生产和消费革命战略（2016-2030）》明确了分阶段目标：2020、2030、2050
            年我国非化石能源在能源消费总量中的占比分别达 15%、20%、50%以上。2019 年，我国煤
            炭消费量占能源消费总量的 57.7%，比上年下降 1.5 个百分点；天然气、水电、核电、风电
            等清洁能源消费量占能源消费总量的 23.4%，上升 1.3 个百分点。能源转型背景下， 火电设
            备企业需要由大规模发展转向高质量发展阶段。煤电机组需要进一步创新提升，提高机组运
            行能力和可调节能力。建议重点关注煤电改造项目和新技术示范项目。
            核电方面，2019 年国家核准了荣成 CAP1400 示范堆、漳州和惠州三个项目。2020 年将
            继续积极推动核电新项目落地；同时将积极推进核能供热项目，北方地区将把一些小煤炉、
            煤锅炉改造成核能供暖。核电发展要坚持安全为本，同时实现安全与经济的协调发展。未来
            随着“华龙一号”技术、CAP1400 等技术改进，以及四代核电技术、模块化、小型堆研发、
            核电与大数据融合、与新能源系统的耦合发展，核电设备企业有很多工作要做。同时对一些
            卡脖子关键技术、核心部件和原材料仍需加大攻关。
            风电、光伏等可再生能源是未来我国能源发展的重点领域。2019 年国内陆上、海上风
            电招标 7000 万千瓦，新增并网装机 2574 万千瓦。今年 1 月份下发的《国家能源局关于 2020
            年风电、光伏发电项目建设有关事项的通知（征求意见稿）》（以下简称“《通知》”）对 2020
            年的风电建设指明了方向：积极推进平价上网项目建设；有序推进需国家财政补贴项目建设；
            积极支持分散式风电项目建设；稳妥推进海上风电项目建设；全面落实电力送出消纳条件等。
            未来北方风电市场将重启，大规模集中开发将成为陆上风电重心。南方市场，由于生态环保
            11趋严，低风速细分市场进一步优化的趋势明显，分散式开发将成为主要开发方式。风电设备
            企业正积极利用技术进步降低度电成本。但目前我国电机组的关键零部件轴承依然大量从国
            外进口，海上风电长叶片、轴承、大型铸件等设备和部件紧缺，相关配套件国产化程度低。
            风电设备企业需要加大产品研发，提升质量和可靠性。
            《通知》中指出 2020 年光伏建设方向：积极推进平价上网项目建设；合理确定需国家
            财政补贴项目竞争配置规模；全面落实电力送出消纳条件；加强后续监管工作。目前国内光
            伏存量项目正加速推进。2019 年 12 月国内抢装超 1000 万千瓦，全年新增光伏发电装机 3011
            万千瓦。预计 2020 年，国内光伏装机将保持较大幅度增长。由于光伏平价目标压力巨大，
            光伏制造企业加速降低光伏度电成本，新技术应用步伐不断加快。新能源发电设备未来前景
            可期，但任重道远。
            进一步拓展海外市场是发电设备企业转型的必由之路。尤其是传统的发电设备，国内需
            求相对饱和，下一步需进一步关注国际市场。需求方面，美国、欧盟新增电站和电网投资较
            少，以新能源电站建设以及电力设施升级换代及运行维护为主。以东盟、南非为代表的发展
            中国家经济体，电源、电网新增投资规模巨大，电力领域投资收益明显高于发达国家，燃煤
            电站在发展中国家有较好的前景。随着“一带一路”倡议的发展，国家层面将通过建立能源
            双边多边合作机制，助力企业开拓市场。
            注：本文发电设备产量、出口数据来源于机械工业发电设备中心，发电装机数据来源于
            国家能源局，能源消费数据来源于国家统计局。哈尔滨、东方、上海电气三大集团经济指标
            来源于机械工业信息中心，其他企业经济指标来自上市公司年报。其他数据来源于相关企业、
            网站公开资料。
          </div>
          <!--          <div class="home-top-hot-le">-->
          <!--            一、原煤、原油和天然气生产及相关情况-->
          <!--          </div>-->
          <!--          <div class="home-top-hot-cen2">-->
          <!--            原煤生产同比较快增长，日均环比略有下降。1—2月份，生产-->
          <!--            原煤6.2亿吨，同比增长25.0%，比2019年1—2月份增长17.1-->
          <!--            %，两年平均增长8.2%；日均产量1047万吨，比上年12月份-->
          <!--            减少88万吨。进口煤炭4113万吨，同比下降39.5%。-->
          <!--          </div>-->
          <!--          <div class="home-top-hot-cen">-->
          <!--            港口煤炭综合交易价格高位回落。2月26日秦皇岛港5500、5000-->
          <!--            和4500大卡煤炭价格分别为每吨613元、550元和494元，比1月-->
          <!--            22日最高价分别下降132元、124元和89元。-->
          <!--          </div>-->
        </div>
      </div>
<!--      <div class="home-cen">-->
<!--        <div class="home-cen-echarts"-->
<!--             id="main">-->
<!--        </div>-->
<!--        <div class="home-cen-echarts2" id="main2"></div>-->
<!--      </div>-->
      <div class="home-footer">
<!--        <div class="home-footer-top">-->
<!--          原油生产同比保持稳定增长，日均环比增产。1—2月份，生产原油3208万吨，-->
<!--          同比增长0.4%，比2019年1—2月份增长4.1%，两年平均增长2.0%；日均产-->
<!--          量54.4万吨，比上年12月份增加1.9万吨。加工原油11424万吨，同比增长-->
<!--          15.0%，比2019年1—2月份增长10.6%，两年平均增长5.2%；日均加工193.6-->
<!--          万吨，比上年12月份增加0.1万吨。-->
<!--        </div>-->
<!--        <div class="home-footer-cen">-->
<!--          原油进口小幅增长，国际原油价格持续上涨。进口原油8957万吨，同比增长-->
<!--          4.1%；国际原油价格持续上涨，2月26日布伦特原油现货离岸价格为65.86美-->
<!--          元/桶，比1月4日50.37美元/桶上涨30.8%。-->
<!--        </div>-->
        <div class="home-footer-box">
          <div class="home-footer-box-left">打印</div>
          <div class="home-footer-box-rg" @click="go">关闭</div>
        </div>
      </div>
    </div>
<!--    <back></back>-->
  </div>
</template>

<script>
  import * as echarts from 'echarts'
  import 'echarts-wordcloud'
  // import back from "./back.vue"

  export default {
    components:{
      // back
    },
    data() {
      return {
        youCe: require('@/assets/home/Snipaste_2021-04-27_15-47-47.png'),
        wenzhang: '2019 年我国国民经济运行总体平稳，结构调整稳步推进，转型升级成效明显，宏观经 \n' +
          '济指标保持在合理区间，但面临明显上升的国内外风险挑战。电力需求方面，2019 年全国 \n' +
          '电力生产运行平稳，电力供需总体平衡。全年全社会用电量 7.23 万亿千瓦时，比上年增长 \n' +
          '4.5%。全国电源工程建设完成投资比上年增长 12.6%，其中水电、风电投资分别增长 16.3% \n' +
          '和 81.3%，火电、核电投资明显减少，分别下降 19.9%和 25%。 \n' +
          '当前我国电力行业正处于从高速增长到平稳发展的转变时期，近几年受国家结构调整去 \n' +
          '产能、煤电项目停建缓建等政策影响，发电设备企业传统电源项目订单锐减。根据机械工业 \n' +
          '发电设备中心统计数据，2019 年全国发电设备（不含光伏设备，以下同）生产完成 8419.16 \n' +
          '万千瓦，比上年下降 15.8%。发电设备企业转型升级与改革发展稳步推进，生产运营情况总 \n' +
          '体符合预期。',
        youCe: [
          {
            title: '1-3月份全国电力工业统计数据'
          },
          {
            title: '3月份全社会用电量同比增长19.4%'
          },
          {
            title: '国家能源局发布2021年1-2月份全国电力工业统...'
          },
          {
            title: '2021年1-2月太阳能发电增长25.8% 两年平均...'
          },
          {
            title: '美国光伏装机量增长24%，不及中国增量'
          },
          {
            title: '王勃华：2021年我国光伏新增装机55-65GW ...'
          },
          {
            title: '2020年规上工业增加值同比增长2.8%，增速逐...'
          },
          {
            title: 'EIA：美国2021年计划新增39.7GW发电容量太...'
          },
          {
            title: '国网：截至2020年底共58GW光伏项目纳入可...'
          }
        ]
      }
    },
    mounted() {
      this.drawoneLineTable()
      this.zhezhuhunhe()
    },
    methods: {
      go() {
        this.$router.push('/home')
      },
      handleNodeClick(data) {
        console.log(data)
      },
      drawoneLineTable() {
        var chartDom = document.getElementById('main')
        var myChart = echarts.init(chartDom)
        var option

        option = {
          xAxis: {
            type: 'category',
            splitLine: {
              show: false
            },
            data: ['2020年1-2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '2021年1-2月']
          },
          yAxis: {
            type: 'value',
            splitLine: {
              show: false
            }
          },
          series: [{
            data: [-6.3, 9.6, 6.0, -0.1, -1.2, -3.7, -0.1, -0.9, 1.4, 1.5, 3.2, 25.0],
            type: 'line',
            itemStyle: { normal: { label: { show: true } } }
          }]
        }

        option && myChart.setOption(option)
      },
      zhezhuhunhe() {
        var chartDom = document.getElementById('main2')
        var myChart = echarts.init(chartDom)
        var option

        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#333'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          legend: {
            data: ['当月进口量(万吨)', '当月增速(%)']
          },
          xAxis: [
            {
              type: 'category',
              data: ['2020年1-2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '2021年1-2月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              min: 0,
              max: 10000,
              interval: 2000
            },
            {
              type: 'value',
              min: -800,
              max: 1400,
              interval: 200
            }
          ],
          series: [
            {
              name: '当月进口量(万吨)',
              type: 'bar',
              data: [6795, 2783, 3095, 2206, 2529, 2610, 2066, 1868, 1373, 1176, 3908, 4113],
              itemStyle: {
                normal: { color: '#98CEFF' }
              }
            },
            {
              name: '当月增速(%)',
              type: 'line',
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  label: { show: true },
                  lineStyle: {
                    color: '#215A9A'
                  }
                }
              },
              data: [32.9, 18.6, 22.4, -19.7, -6.6, -20.6, -37.3, -38.3, -46.3, -43.1, 1311.2, -39.5]
            }
          ]
        }

        option && myChart.setOption(option)
      }
    }
  }
</script>

<style scoped lang="scss">
  .home {
    position: relative;
    width: 1200px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-cen {
      width: 780px;
      height: 720px;
      margin-top: 30px;

      &-echarts {
        width: 780px;
        height: 300px;
      }

      &-echarts2 {
        margin-top: 20px;
        width: 780px;
        height: 400px;
      }
    }

    &-footer {
      margin-left: -1px;
      width: 780px;
      height: 700px;
      margin-bottom: 50px;

      &-box {
        margin-top: 50px;
        height: 140px;

        &-title {
          text-indent: 2rem;
          font-size: 14px;
          color: #333;
          height: 30px;
          line-height: 26px;
        }
      }
    }

    &-right {
      width: 390px;
      height: 522px;
      padding: 30px;
      background: #FFFFFF;
      box-shadow: 0px 1px 3px 0px rgba(51, 51, 51, 0.35);
      border-radius: 5px 5px 5px 5px;

      &-top {
        width: 72px;
        height: 18px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        cursor: pointer;
        color: #333333;
      }

      &-bottom {
        margin-top: 30px;

        &-box {
          margin-top: 25px;
          cursor: pointer;

          &-title {

            height: 20px;
            font-size: 16px;
            overflow: hidden;
          }
        }
      }
    }

    &-header {
      width: 1200px;
      margin-top: 20px;
      height: 50px;
      padding-left: 10px;
      display: flex;
      justify-content: space-between;

      &-left {
        display: flex;
        z-index: 10;
        background: #e8f5fe;
        width: 780px;

        &-fh {
          width: 14px;
          height: 14px;
          margin-top: 17px;
          line-height: 14px;
          margin-right: 10px;
          text-align: center;
          background-color: #adbfe0;
          border-radius: 50%;
          color: #e8f5fe;
        }

        &-title {
          font-size: 20px;
          font-weight: 600;
          line-height: 50px;
          color: #333;
        }


      }

      &-nav {
        width: 670px;
        height: 96px;
        margin-left: 55px;
        margin-top: 40px;
        text-align: center;
        border-bottom: 1px dashed #ccc;

        &-title {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #666666;
          line-height: 48px;
        }
      }
    }

    &-top {
      width: 780px;
      margin-top: 30px;
      padding-left: 20px;

      &-sj {
        width: 750px;
        line-height: 22px;
        text-indent: 2rem;
        font-size: 14px;
        color: #333;
      }

      &-bt {
        font-size: 14px;
        color: #333;
        margin-top: 20px;
      }

      &-hot {
        &-title {
          color: #333333;
          margin-top: 10px;
          margin-bottom: 10px;
          text-align: left;
          font-weight: 600;
        }

        &-cen {
          color: #333;
          line-height: 22px;
          text-indent: 2rem;
          font-size: 14px;
        }

        &-le {
          font-size: 14px;
          color: #333;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        &-cen2 {
          color: #333;
          line-height: 22px;
          text-indent: 2rem;
          font-size: 14px;
          margin-bottom: 20px;
        }
      }
    }

    &-right {
      width: 390px;
      height: 522px;
      background: #ffffff;
      box-shadow: 0px 1px 3px 0px rgba(51, 51, 51, 0.35);
      border-radius: 5px 5px 5px 5px;
    }

    &-nav {
      width: 670px;
      height: 96px;
      margin-left: 55px;
      margin-top: 40px;
      text-align: center;
      border-bottom: 1px dashed #ccc;


      &-title {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        margin-bottom: 8px;
        color: #333333;
        line-height: 48px;
      }

      &-bottom {
        width: 252px;
        height: 13px;
        display: flex;
        margin: auto;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #999999;
        justify-content: space-between;
      }
    }

    &-bb {
      margin-top: 30px;
      width: 678px;
      height: 541px;
      margin-left: 55px;
      align-items: center;
    }

    &-footer {
      margin-left: 55px;
      width: 687px;
      height: 100px;
      margin-bottom: -70px;

      &-top {
        color: #333;
        line-height: 22px;
        text-indent: 2rem;
        font-size: 14px;
        margin-bottom: 20px;
      }

      &-cen {
        color: #333;
        line-height: 22px;
        text-indent: 2rem;
        font-size: 14px;
        margin-bottom: 20px;
      }

      &-box {
        margin: 0 auto;
        margin-top: 30px;
        width: 120px;
        color: #203C99;
        display: flex;
        justify-content: space-between;
        line-height: 30px;
        height: 30px;
      }
    }
  }
</style>
