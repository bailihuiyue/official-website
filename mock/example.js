module.exports = {
  "get /User/Login": { data: { bRes: true, Ticket: "abc" } },
  "post /User/GetUserAll": {
    data: [
      {
        id: "@uuid()",
        LoginName: "@cstr(2,6)",
        Password: "@str(6,18)",
        IsAction: "true",
        createTime: "@time()",
      },
      {
        id: "@uuid()",
        LoginName: "@cstr(2,6)",
        Password: "@str(6,18)",
        IsAction: "true",
        createTime: "@time()",
      },
      {
        id: "@uuid()",
        LoginName: "@cstr(2,6)",
        Password: "@str(6,18)",
        IsAction: "true",
        createTime: "@time()",
      },
    ],
  },
  "post /User/CreateUser": { data: true },
  "post /User/ModifiedUser": { data: true },
  "get /User/DeleteUser": { data: true },
  //
  "/Cases/GetCasesAll": {
    data: [
      {
        id: 29,
        img: "/imagestore/2020/0605/439332ec-11c0-440c-8800-d94b0479c22c.jpg",
        title: "上海市公共安全教育实训基地项目位",
        content:
          "位于上海市青浦区沪青平公路6888号“东方绿舟”东南 角，四界范围为：东临城市河道，南至沪青平公路，西界绿湖路，北靠现有的东方绿舟停机 坪。项目用地面积65048平方米（以实测为准），新建总建筑面积约为26467平方米（地上 23500平方米，地下2967平方米）",
        Del: null,
        createTime: "2020-06-05T21:12:45.387",
      },
      {
        id: 28,
        img: "/imagestore/2020/0605/fcebfcd1-7b8c-4214-9fc4-c9c275ccaaf0.jpg",
        title: "高端装备用特种电缆检测评估服务基地",
        content:
          "高端装备用特种电缆检测评估服务基地建设 一期工程位于上海市宝山区山连路558号， 项目建筑面积为19324.03平方米（地上建 筑面积为15446.74平方米，地下建筑面积\n为3877.29平方米）。",
        Del: null,
        createTime: "2020-06-05T21:05:45.157",
      },
      {
        id: 27,
        img: "/imagestore/2020/0605/e6cad4d5-0f76-4241-a112-8660acf8c281.jpg",
        title: "中国移动上海公司临港数据中心",
        content:
          "上海移动临港IDC研发与产业化基地项目一 期数据中心2#机楼微模块机房配套工程",
        Del: null,
        createTime: "2020-06-05T21:02:05.567",
      },
      {
        id: 26,
        img: "/imagestore/2020/0605/0c6fa4a8-94da-4fc5-bac4-76c59d52c2b2.jpg",
        title: "上海合作组织国际司法交流培训基地项目",
        content:
          "上海合作组织国际司法交流合作培训基地（上海政法学院）工程位于松江区泗陈公路5488号\n上海政法学院东南部，项目用地面积66125平方米（以实测为准），新建总建筑面积约为 24976平方米，其中地上建筑面积为22476平方米，地下建筑面积约为2500平方米。",
        Del: null,
        createTime: "2020-06-05T20:58:05.57",
      },
    ],
  },
  "/Cases/GetCasesById/:id": {
    data: {
      id: 29,
      img: "/imagestore/2020/0605/439332ec-11c0-440c-8800-d94b0479c22c.jpg",
      title: "上海市公共安全教育实训基地项目位",
      content:
        "位于上海市青浦区沪青平公路6888号“东方绿舟”东南 角，四界范围为：东临城市河道，南至沪青平公路，西界绿湖路，北靠现有的东方绿舟停机 坪。项目用地面积65048平方米（以实测为准），新建总建筑面积约为26467平方米（地上 23500平方米，地下2967平方米）",
      Del: null,
      createTime: "2020-06-05T21:12:45.387",
    },
  },
  "post /Cases/CreateCases": { data: true },
  "post /Cases/ModifiedCases": { data: true },
  "post /Cases/DeleteCases": { data: true },
  //
  "/Course/GetCourseAll": [
    { id: 10, year: "2012年9月", content: "上海韭菜工程管理有限公司成立" },
    {
      id: 11,
      year: "2016年11月",
      content:
        "上海韭菜工程管理股份有限公司“工程管理标准化+互联网协作平台“开发上线，并成功投入项目使用。",
    },
    {
      id: 12,
      year: "2017年11月",
      content: "上海韭菜工程管理股份有限公司获得高新技术企业证书",
    },
    {
      id: 14,
      year: "2018年3月",
      content: "上海韭菜工程管理股份有限公司股份改制成功。",
    },
  ],
  "post /Course/CreateCourse": { data: true },
  "post /Course/ModifiedCourse": { data: true },
  "post /Course/DeleteCourse": { data: true },
  //
  "/Enterprise/GetEnterpriseAll": [],
  "post /Enterprise/CreateEnterprise": { data: true },
  "post /Enterprise/ModifiedEnterprise": { data: true },
  "post /Enterprise/DeleteEnterprise": { data: true },
  //
  "/Dictionary/GetDictionaryAll": {
    data: [
      { id: 1, Key: "首页主标题", content: "立人立己 达人达己" },
      { id: 2, Key: "首页副标题", content: "" },
      { id: 3, Key: "首页副标题英文", content: "" },
      { id: 4, Key: "走进韭菜标题", content: "走进韭菜" },
      { id: 5, Key: "经典案例标题", content: "经典案例" },
      { id: 6, Key: "帮助中心标题", content: "帮助中心" },
      { id: 7, Key: "联系我们标题", content: "联系我们" },
      { id: 8, Key: "诚聘英才标题", content: "诚聘英才" },
      { id: 9, Key: "新闻资讯标题", content: "新闻资讯" },
      { id: 12, Key: "产品中心标题", content: "产品中心" },
      { id: 13, Key: "学习模块标题", content: "学习模块" },
      {
        id: 14,
        Key: "产品视频链接",
        content: "http://www.shkjem.com/video/kj.mp4",
      },
      { id: 15, Key: "邮箱", content: "Jiucailml@163.com" },
      { id: 16, Key: "地址", content: "上海市杨浦区翔殷路128号12号楼101" },
      { id: 17, Key: "电话", content: "021-55802368" },
      {
        id: 18,
        Key: "公司简介中文",
        content:
          "公司成立于2012年9月，是一家集工程监理、项目管理、第三方评估、招标代理、专业化软件开发于一体的多元化股份制工程咨询企业，公司位于上海市杨浦区上海理工大学国家科技园区内。近年来，公司注重科技研发，特别是工程咨询领域的管理创新及信息化研发。公司拥有员工120多人，其中国家注册监理工程师20余人、其他注册专业技术人员5名，大学本科及以上学历员工占60%以上；工程管理信息化服务产品研发团队拥有10人，其中博士1名，硕士4名。正是这样年轻化高学历的精英团队，让公司在信息化管理服务的研发上实力倍增。\n公司研发的“韭菜管理平台”依托云技术实现了工程咨询领域中质量管理、安全管理、材料管理、危险性较大的分部分项工程管控及装配式建筑管理的信息化集成，以该平台为载体进行工程管理业务服务创新，开创了属于韭菜模式的工程管理信息化服务产品。凭借工程管理信息化服务产品，公司承接了多项工程监理项目，同时，开启了与大型咨询企业的合作新模式，为多个复杂项目（包含大型地产项目、复杂公建项目、大型工程群等）的质量、安全管理提供了系统性解决方案，实现了服务项目“无重大安全事故、无重大返工、工程材料无伪劣产品、工程管理留下痕迹、施工过程可追溯”的管理目标。\n2017 年 11 月，公司获得国家高新技术企业证书；2018年9月公司成功登录上海股权托管交易中心科创板；2019年5月，公司参加“创业在上海”国际创新创业大赛并获得立项；2020年3月，公司研发的 “工程管理标准化信息协作平台软件”被认定为上海市高新技术成果转化项目。目前，公司已经取得国家软件著作权 32 项，在申请发明专利1项。",
      },
      {
        id: 19,
        Key: "公司简介英文",
        content:
          "Brief Introduction of Science and Technology Shanghai Branch was founded in 1995 and is headquartered in (Taoyuan City, Taiwan) Construction Management Consulting Co., Ltd. (established in 1987), and has a branch in the mainland. Shanghai Jiucai passed the legal consulting agency approved by the National Certification and Accreditation Regulatory Commission, the first management consulting company in Greater China that passed ISO9001 certification; the world's first ISO14001 certified management consulting firm, and in 2008 passed ISO27001 information security management system. Jiucai's service projects: counseling and training for ISO international standards; business management guidance; system integration services; education and training. Jiucai's resources: Jiucai has a complete service system, process management. Independent consultant system (each consultant has experienced practical teaching experience). Independent textbook materials (with independent course development system). Science and engineering characteristics: There are many years of counseling experience, many of which are well-known international companies have maintained good cooperation so far. Good at multi-system integration and multi-factory integration, and it is still one of the few domestic counseling firms that can provide counseling: CQT.CQE.CRE, and strives to promote corporate social responsibility, environmental systems (greenhouse gas inventory reduction management), and enterprise energy conservation. every aspect! The establishment of the Division aims to grow together with the company, creating a win-win atmosphere for the company's reasonable resources!",
      },
      { id: 20, Key: "APP下载地址", content: "../static/home_top.jpg" },
    ],
  },
  "post /Dictionary/CreateDictionary": { data: true },
  "post /Dictionary/ModifiedDictionary": { data: true },
  "post /Dictionary/DeleteDictionary": { data: true },
  //
  "/Honor/GetHonorAll": {
    data: [
      {
        id: 36,
        img: "/imagestore/2020/0605/16024bde-6f13-4c48-afae-76b73f485cae.jpg",
        remark: "高新成果转化证书",
        createTime: "2020-06-05T21:22:10.94",
      },
      {
        id: 28,
        img: "/imagestore/2019/0718/2603939b-833f-426a-9352-1f08fccec51c.jpg",
        remark: "建筑工程监理服务系统V1.0 软著证书",
        createTime: "2019-07-18T16:39:18.197",
      },
      {
        id: 27,
        img: "/imagestore/2019/0718/dd60cc71-3bfe-4a59-a7bf-03375358dd2a.jpg",
        remark: "建筑建理工作任务发布系统V1.0 软著证书",
        createTime: "2019-07-18T16:37:20.32",
      },
      {
        id: 31,
        img: "/imagestore/2018/0805/25d84da6-deaf-4503-aef2-7355ecb157ee.jpg",
        remark: "高新技术企业证书",
        createTime: "2018-08-05T17:35:13.717",
      },
      {
        id: 26,
        img: "/imagestore/2018/0516/3e58a57c-0921-4284-bb70-888ea3dc3f0a.png",
        remark: " 工程预算处理软件V1.0 软著证书",
        createTime: "2018-07-06T11:27:15.56",
      },
    ],
  },
  "post /Honor/CreateHonor": { data: true },
  "post /Honor/ModifiedHonor": { data: true },
  "post /Honor/DeleteHonor": { data: true },
  //
  "/News": {
    data: [
      {
        id: 19,
        title: "热烈祝贺上海韭菜获得上海市工程监理资质",
        img: "/imagestore/2018/0917/98c71315-86dc-4c99-b973-c89136bd8885.jpg",
        type: 1,
        content:
          "      热烈祝贺上海韭菜工程管理股份有限公司获得上海市工程监理资质证书(房屋建筑工程和市政公用工程）!",
        createTime: "2018-09-17T19:46:46.673",
      },
      {
        id: 15,
        title: "上海韭菜工程管理有限公司科创板创立大会顺利召开",
        img: "/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg",
        type: 1,
        content:
          "历时2个月的企业经营财务状况梳理及企业内部日常行政运营工作，通过法律法规整合管理，企业各大部门如财务、运营、项目管理、技术研发，都形成了各自的工作流程，各部门相互配合，为韭菜今后工程管理标准化软件的广泛使用，为成为项目管理行业的佼佼者努力。2018年3月12日上午10时上海韭菜工程管理股份有限公司创立大会暨2018年第一次临时股东大会顺利召开。",
        createTime: "2018-07-23T16:24:11.633",
      },
    ],
  },
  "/News/GetNewsAll": {
    data: [
      {
        id: 19,
        title: "热烈祝贺上海韭菜获得上海市工程监理资质",
        img: "/imagestore/2018/0917/98c71315-86dc-4c99-b973-c89136bd8885.jpg",
        type: 1,
        content:
          "      热烈祝贺上海韭菜工程管理股份有限公司获得上海市工程监理资质证书(房屋建筑工程和市政公用工程）!",
        createTime: "2018-09-17T19:46:46.673",
      },
      {
        id: 18,
        title: "国务院安委会办公室关于2018年上半年全国建筑业安全生产形势的通报",
        img: "/imagestore/2018/0808/d5bb75c1-d840-41e9-8f29-74214cc30e51.jpg",
        type: 2,
        content:
          "国务院安委会办公室关于2018年上半年全国建筑业安全生产形势的通报\n\n安委办函〔2018〕67号\n\n各省、自治区、直辖市及新疆生产建设兵团安全生产委员会，国务院安委会有关成员单位，有关中央企业：\n\n2018年上半年，各地区、各有关部门以及中央企业认真贯彻落实党中央、国务院关于安全生产工作的决策部署，加大建筑业安全监管力度，健全安全生产责任体系，强化专项整治和隐患排查治理，建筑业安全生产形势总体稳定，但事故总量同比增加，且发生1起重大事故，安全生产形势依然严峻复杂。现将有关情况通报如下：\n\n一、上半年建筑业安全生产形势\n\n（一）事故总量持续保持在高位。上半年全国建筑业共发生生产安全事故1732起、死亡1752人，同比分别上升7.8%和1.4%，事故总量已连续9年排在工矿商贸事故第一位，事故起数和死亡人数自2016年起连续“双上升”；较大事故发生32起、死亡113人，同比分别下降17.9%和26.1%；重大事故发生1起，同比持平。\n\n（二）部分地区和行业领域较大事故多发。上半年共有18个省份发生建筑业较大以上事故，其中9个省份发生2起及以上较大事故。房屋建筑及市政工程领域的较大事故占比最大，其余较大事故主要发生在交通建设工程、电力建设工程领域。\n\n（三）高处坠落和坍塌是事故主要类型。在一般事故中，高处坠落事故占全部事故总数的48.2%，物体打击占13.6%，其他分别为坍塌、触电、机械伤害等。在较大事故中，坍塌事故起数占总数的45.1%，其余分别为高处坠落、中毒窒息、物体打击等。唯一的1起重大事故为坍塌事故。\n\n（四）中央企业较大以上事故多发。上半年共有6家中央企业发生了8起较大事故和1起重大事故，其中有5起发生在公路、铁路、地铁工程建设领域，有7起发生在中西部地区，有5起发生在施工风险较大的地下工程。\n\n（五）复杂地质条件下施工重大事故风险较高。部分复杂地质地区的隧道工程及地铁工程施工安全风险较高，上半年的广东佛山“2·7”地铁坍塌重大事故发生在深厚富水粉砂层且临近强透水的中粗砂层，隧道透水涌砂涌泥坍塌的风险高。此外，2017年的建筑业1起隧道瓦斯爆炸重大事故和2起各被困9人的隧道坍塌重大涉险事故，也均发生在不良地质和特殊岩土地质隧道施工过程中。\n\n（六）企业主体责任不落实仍是事故发生的主要原因。部分施工单位安全生产红线意识不牢，存在侥幸心理，大部分的事故中施工单位总承包、专业承包、劳务分包关系界限不清、职责不明，现场管理混乱，以包代管、包而不管，安全技术交底和培训教育流于形式，不按专项方案施工，施工现场违规违章行为普遍，直接导致事故发生；建设、监理等单位未严格对工程项目进行监督管理，对施工现场安全隐患督促整改不力。\n\n二、下一步工作要求\n\n当前，全国建筑业规模庞大，在建工程数量持续保持在高位，且目前正值汛期和施工旺季，各地区、各有关部门和中央企业要清醒认识建筑业安全生产面临的严峻形势，进一步筑牢安全红线意识，全面加强建筑业安全生产工作。\n\n（一）严格落实企业安全生产主体责任。各地区、各有关部门要定期组织责任制落实情况专项执法检查，推动企业建立健全全员安全生产责任制。要督促施工单位加强对分包和劳务队伍的入场审核和管理，对危险性较大的作业，全过程带班监督管理。要督促建设单位保证安全生产投入，不得对勘察、设计、施工、监理等单位提出不符合法律法规和强制性标准规定的要求，不得压缩合同约定的工期。勘察、设计单位必须在勘察设计文件中提出预防事故的措施建议。监理单位必须严格实施安全监理，按规定对关键工序专项巡视检查和旁站。\n\n（二）切实加强施工现场安全管理。各有关单位要针对施工现场风险类型，加强安全管理，针对高处坠落事故风险，要对相应区域的临边、洞口、攀登、悬空和交叉作业部位等进行防护。针对基坑工程、脚手架、起重机械等坍塌事故风险，要严格落实危险性较大的工程施工安全管理规定，必须规范编制施工方案、制定有针对性的安全技术措施，进行书面安全技术交底，施工时由专人负责监控，并加强安全检查，发现问题和隐患必须及时处理和整改。\n\n（三）强化复杂地质条件下施工安全风险管控。各有关单位要加强复杂地质条件下风险因素识别及控制方案等方面的工作，编制地质风险因素控制方案及专项施工方案，并按规定进行论证审查后组织实施。隧道施工必须严格超前地质预报，地质条件发生重大变化时，必须重新评估确认。软弱破碎富水、岩溶发育等易发生突水突泥隧道施工，必须提前探明周边地质情况，并相应采取加固、堵排水等措施。有限空间内施工作业必须做到“先通风、再检测、后作业”,并控制火源。高瓦斯、瓦斯突出隧道内必须采用防爆设备。\n\n（四）深化建筑施工安全专项治理行动。各地区、各有关部门要根据专项治理实施方案，组织专门力量，集中开展专项治理，严查施工现场违法违规行为和事故隐患。要强化过程督导，各省（区、市）要每半年开展一次、各地（市）要每季度开展一次建筑施工安全专项治理行动督查检查。要结合专项治理工作方案，细化监督检查计划和施工现场检查内容，对安全风险较高的重点工程项目在专项治理工作阶段内要实现检查“全覆盖”。\n\n（五）加强安全监管执法和事故调查处理力度。在检查执法中，对发现的问题，要严格依法依规采取现场处理、责令整改、行政处罚、行政强制等措施，切实做到“检查必执法、执法必严格”。要认真组织事故调查处理，查清事故原因，严格对事故责任企业和人员资质资格的处罚。对发生较大及以上生产安全责任事故，瞒报、谎报、迟报生产安全事故等失信行为的，严格按规定将负有责任的建设、施工、监理等单位和有关人员纳入安全生产领域失信联合惩戒“黑名单”，实施有效惩戒。\n\n（六）扎实做好当前汛期安全生产工作。各地区、各有关部门要立即督促有关企业排查汛期建设工程安全生产情况，特别是工程项目营地要科学选址，合理布局，与作业区分开设置，保持安全距离。对易发生灾情的工程和营地等，要开展危险源辨识与风险评估，建立风险台账,强化日常巡查，动态监控隐患变化，对于检查出的隐患和问题要指定专人负责督办，限期整改，确保尽快治理。组织开展有针对性的应急演练，做好装备、物资、队伍等各项应急准备工作。要加强汛期值班值守，严格执行领导干部到岗带班和关键岗位24小时值班制度，发现险情要立即将所有人员疏散转移到安全地带，切实保证施工人员生命安全和社会稳定。\n\n  国务院安委会办公室\n\n     2018年7月19日",
        createTime: "2018-08-08T10:59:07.677",
      },
      {
        id: 17,
        title: "住房城乡建设部关于发布国家标准《大体积混凝土施工标准》的公告 ",
        img: "/imagestore/2018/0808/ef5a8f93-96ba-4e30-a772-b38223235c62.jpg",
        type: 2,
        content:
          "《大体积混凝土施工标准》已为国家标准，编号为GB50496-2018，自2018年12月1日起实施。其中第4.2.2、5.3.1条为强制性条文，要求严格执行。原国家标准《大体积混凝土施工规范》GB50496-2009同时废止。",
        createTime: "2018-08-08T10:53:13.023",
      },
      {
        id: 15,
        title: "上海韭菜工程管理有限公司科创板创立大会顺利召开",
        img: "/imagestore/2018/0529/d3f75b1c-cb7e-488f-95ac-8f80f5c332fe.jpg",
        type: 1,
        content:
          "历时2个月的企业经营财务状况梳理及企业内部日常行政运营工作，通过法律法规整合管理，企业各大部门如财务、运营、项目管理、技术研发，都形成了各自的工作流程，各部门相互配合，为韭菜今后工程管理标准化软件的广泛使用，为成为项目管理行业的佼佼者努力。2018年3月12日上午10时上海韭菜工程管理股份有限公司创立大会暨2018年第一次临时股东大会顺利召开。",
        createTime: "2018-07-23T16:24:11.633",
      },
    ],
  },
  "/News/GetNewsById/:id": {
    data: {
      id: 19,
      title: "热烈祝贺上海韭菜获得上海市工程监理资质",
      img: "/imagestore/2018/0917/98c71315-86dc-4c99-b973-c89136bd8885.jpg",
      type: 1,
      content:
        "      热烈祝贺上海韭菜工程管理股份有限公司获得上海市工程监理资质证书(房屋建筑工程和市政公用工程）!",
      createTime: "2018-09-17T19:46:46.673",
    },
  },
  "post /News/CreateNews": { data: true },
  "post /News/ModifiedNews": { data: true },
  "post /News/DeleteNews": { data: true },
  //
  "/Team/GetTeamAll": {
    data: [
      {
        id: 16,
        img: "/imagestore/2019/0425/ad5bffa4-e608-4f0c-8cbd-f9daa2af8ef2.jpg",
        remark: "参加第七届中国（上海）国际技术进出口交易会",
        createTime: "2020-06-05T21:34:46.743",
      },
      {
        id: 11,
        img: "/imagestore/2019/0425/9db92c6e-95e9-43df-b6d4-8b2e83f85dbe.jpg",
        remark: "参加第七届中国（上海）国际技术进出口交易会",
        createTime: "2020-06-05T21:34:41.023",
      },
      {
        id: 6,
        img: "/imagestore/2019/0425/3ee5db59-d021-4d0d-927e-70e850303f16.jpg",
        remark: "参加第七届中国（上海）国际技术进出口交易会",
        createTime: "2020-06-05T21:34:36.397",
      },
      {
        id: 22,
        img: "/imagestore/2019/0426/cafb7b6a-71dd-4a9b-881b-d3f9da6b8967.jpg",
        remark: "",
        createTime: "2019-04-26T16:06:18.193",
      },
      {
        id: 21,
        img: "/imagestore/2019/0426/958585c0-18a3-450b-b7e1-c8ee4c2f7bec.jpg",
        remark: "",
        createTime: "2019-04-26T16:06:11.277",
      },
      {
        id: 20,
        img: "/imagestore/2019/0426/37af22f2-d6d8-4b10-8377-9a28fa8dd8db.jpg",
        remark: "",
        createTime: "2019-04-26T16:06:03.21",
      },
      {
        id: 19,
        img: "/imagestore/2019/0426/f40c7512-4057-4b2f-84dc-d8ee93d6f5e1.jpg",
        remark: "",
        createTime: "2019-04-26T16:05:55.947",
      },
      {
        id: 18,
        img: "/imagestore/2019/0426/f929d681-38c3-4d4f-b845-fa695f4801e8.jpg",
        remark: "",
        createTime: "2019-04-26T16:05:47.69",
      },
      {
        id: 17,
        img: "/imagestore/2019/0426/12633c2f-387c-4587-a88a-43666265f886.jpg",
        remark: "",
        createTime: "2019-04-26T16:05:38.187",
      },
    ],
  },
  "post /Team/CreateTeam": { data: true },
  "post /Team/ModifiedTeam": { data: true },
  "post /Team/DeleteTeam": { data: true },

  "post /api/Upload/UploadImage": ()=>"imagestore/2020/0605/439332ec-11c0-440c-8800-d94b0479c22c.jpg",
};
