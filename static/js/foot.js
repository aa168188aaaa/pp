
// 通用的底部信息模板函数
function getFooterHtml (companyName, icpNumber, companyAddress, mailNumber, additionalInfo) {
  return `
    <footer class="footer_box">
      <div class="footer_box_whole">
          <div class="footer_box_txt">
            <span>本网站的图文和软件来自于网络，如有内容侵犯您的合法权益，请及时联系推广发行方，我们将第一时间安排删除。资质域名方不做推广发行。</span></br>
            <span class="footer_box_gs">${companyName}</span>&nbsp;|&nbsp; 
            <span class="footer_box_dz">${companyAddress}</span>&nbsp;|&nbsp; 
            <a href="https://mail.qq.com/" target="_blank"><span class="footer_box_dh">${mailNumber}</span></a></br>
            <a href="https://beian.miit.gov.cn/" target="_blank"><span class="footer_box_icp">${icpNumber}</span></a>&nbsp;|&nbsp; 
            <span class="footer_box_year">Copyright © 2003-2024</span>
            <div class="footer_box_xy">
              <a class="footer_box_ys" href="/public/html/yszc.html" target="_blank"><span>隐私政策</span></a>&nbsp;|&nbsp;
              <a class="footer_box_qx" href="/public/html/yhqx.html" target="_blank"><span>用户权限</span></a>
            </div>
               ${additionalInfo}
          </div>
      </div>
    </footer>`;
}
// 定义不同公司的底部信息
const companiesInfo = {
  'baidu.com': { name: '百度（中国）集团有限公司', icp: '京ICP备1997091376号', adress: '', mail: '投诉邮箱:baidu@qq.com', add: ``, nav: ``, change: `` },
  'shfs0.com': { name: '上海服嗖网络科技有限公司', icp: '沪ICP备2021017643号', adress: '', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },
  'shyihuoh.com': { name: '', icp: '', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'shyihuoi.com': { name: '', icp: '', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'beimeidao.cn': { name: '北美道（北京）科技有限公司', icp: '京ICP备2022024416号', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'wxquyl.cn': { name: '无锡趣有量网络科技有限公司', icp: '苏ICP备2024096168号', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'wxqzykj.cn': { name: '无锡趣之游科技有限公司宿迁分公司', icp: '苏ICP备2024087816号', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'xnxxxj.cn': { name: '无锡市曦轩信息咨询有限责任公司盐城分公司', icp: '苏ICP备2021002978号', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },

  'wxqzlkj.cn': { name: '无锡起之乐科技有限公司', icp: '苏ICP备2024087725号', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'dltom.cn': { name: '大连拓梦商务服务有限公司', icp: '辽ICP备2024027892号', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'whzw1.com': { name: '武汉众威网络科技有限公司', icp: '鄂ICP备2022013966号', adress: '', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },
  'steam001.cn': { name: '武汉众智信诚科技有限公司', icp: '鄂ICP备2024051149号', adress: '', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },
  'rihangyz.cn': { name: '扬州日航网络科技有限公司', icp: '苏ICP备2024122779号', adress: '', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `` },
  'njcyt88.com': { name: '南京诚誉通网络科技有限公司', icp: '苏ICP备2021038381号', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'cjzdhw.cn': { name: '南京邦京希科技有限公司', icp: '苏ICP备2024122783号', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'jdyx6.cn': { name: '重庆睿偌科技有限公司', icp: '皖ICP备2024040564号', adress: '', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `` },
  'xuanheng04.cn': { name: '淮南轩恒网络科技有限公司', icp: '皖ICP备19020792号', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'gg.dcmingkj.cn': { name: '长沙大葱铭科技有限公司', icp: '湘ICP备2024044041号', adress: '', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },
  'e7fer.cn': { name: '上海亦起飞信息技术有限公司', icp: '沪ICP备2024065730号', adress: '公司地址:', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  '51cqyh.com': { name: '陕西必火互娱网络科技有限责任公司', icp: '陕ICP备2023010203号', adress: '公司地址:', mail: '投诉邮箱:tousu3369@163.com', add: ``, nav: ``, change: `` },
  '51aion.com': { name: '陕西必火互娱网络科技有限责任公司', icp: '陕ICP备2023010203号', adress: '公司地址:', mail: '投诉邮箱:tousu3369@163.com', add: ``, nav: ``, change: `` },
  '94dn.com': { name: '陕西必火互娱网络科技有限责任公司', icp: '陕ICP备2023010203号', adress: '公司地址:', mail: '投诉邮箱:tousu3369@163.com', add: ``, nav: ``, change: `` },

  'dljcchb2.cn': { name: '大连聚铖才教育咨询有限公司河北第二分公司', icp: '冀ICP备2024086026号', adress: '公司地址:', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'jyses.cn': { name: '沈阳升势文化传媒有限公司大连市高新园区嘉悦分公司司', icp: '辽ICP备2024028211号', adress: '公司地址:', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'gg59.cn': { name: '扬州斐猫网络科技有限公司', icp: '苏ICP备2024089196号', adress: '公司地址:', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'sjzgw.cn': { name: '华资信息技术（海口）有限公司', icp: '琼ICP备2023014974号', adress: '公司地址:', mail: '投诉邮箱:400-100-1234', add: ``, nav: ``, change: `` },

  'office.ssjas.cn': { name: '沈阳升势文化传媒有限公司大连市高新园区佳胜分公司', icp: '辽ICP备2024028797号', adress: '公司地址:', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'zbzhiguo.top': { name: '淄博执过文化传媒有限公司', icp: '鲁ICP备2023029685号', adress: '公司地址:', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'hncsbinli.cn': { name: '长沙市芙蓉区炳粟网络工作室（个体工商户）', icp: '湘ICP备2024072142号', adress: '公司地址:', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'yoipluu.cn': { name: '南宁杰泽网络科技有限公司', icp: '桂ICP备2024043892号', adress: '公司地址:', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `` },

  'ra2.sdjiapa.cn': { name: '扬州久尺网络科技有限公司', icp: '苏ICP备2023028652号', adress: '公司地址:', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'sdjiapa.cn': { name: '扬州久尺网络科技有限公司', icp: '苏ICP备2023028652号', adress: '公司地址:', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `` },

  'nbvkso.cn': { name: '扬州市啄迈房地产咨询有限公司', icp: '苏ICP备2023011671号', adress: '公司地址:', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `` },
  'deep.sjhejw.cn': { name: '宁波凯莱教育科技有限公司扬州分公司', icp: '浙ICP备2022000558号', adress: '公司地址:', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `` },
  'czjytrs.cn': { name: '河南祥豚网络科技有限公司', icp: '豫ICP备2021034178号', adress: '公司地址:', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `` },
  'chenggroup.com.cn': { name: '湖南汇成数字科技集团有限公司', icp: '湘ICP备2023015488号', adress: '公司地址:', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `` },
  'shengyanwl.cn': { name: '厦门盛岩金双网络科技有限公司', icp: '闽ICP备2022006795号', adress: '公司地址:', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `` },

  'shuwei-1.top': { name: '上海述维网络科技有限公司', icp: '沪ICP备2023022930号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },
  'shuwei-2.top': { name: '上海述维网络科技有限公司', icp: '沪ICP备2023022930号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },
  'shuwei-3.top': { name: '上海述维网络科技有限公司', icp: '沪ICP备2023022930号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },
  'whzwei.xyz': { name: '武汉众威网络科技有限公司', icp: '鄂ICP备2022013966号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },
  'bubusheng.top': { name: '南京优芯选网络科技有限公司', icp: '苏ICP备2023045110号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },
  'hmapps3.com': { name: '上海和迈网络科技有限公司', icp: '沪ICP备2021008865号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },
  'shhutuik.cn': { name: '上海互推网络科技有限公司', icp: '沪ICP备19026104号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },
  'edfcfc.cn': { name: '南京之迅衣网络科技有限公司惠州分公司', icp: '苏ICP备2024151645号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },


  'lds1.njmsy.com': { name: '南京迈斯远网络科技有限公司', icp: '苏ICP备2025163210号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },
  'lds2.njmsy.com': { name: '南京迈斯远网络科技有限公司', icp: '苏ICP备2025163210号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },
  'dz6.njmsy.com': { name: '南京迈斯远网络科技有限公司', icp: '苏ICP备2025163210号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'dz7.njmsy.com': { name: '南京迈斯远网络科技有限公司', icp: '苏ICP备2025163210号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'njmsy.com': { name: '南京迈斯远网络科技有限公司', icp: '苏ICP备2025163210号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },

  'njlhg.com': { name: '南京蓝弘广网络科技有限公司', icp: '苏ICP备2025163648号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },
  'wczbmkx.cn': { name: '扬州康鹏网络科技有限公司', icp: '苏ICP备2025165945号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },
  'lhmpauvi.cn': { name: '义乌市轶仞教育科技有限公司', icp: '浙ICP备2024106890号', adress: '公司地址:', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },


  'wxqilinz.cn': { name: '无锡麒林智科技有限公司合肥分公司', icp: '苏ICP备2024093127号', adress: '', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },
  'eoghrt.cn': { name: '济南航赫网络科技有限公司', icp: '鲁ICP备2024090452号', adress: '公司地址:', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },
  'pbgsfa.cn': { name: '台州爱唛网络科技有限公司新乡分公司', icp: '浙ICP备2021039562号', adress: '公司地址:', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },
  'sjhejw.cn': { name: '宁波凯莱教育科技有限公司扬州分公司', icp: '浙ICP备2022000558号', adress: '公司地址:', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },

  'ra2.sydxwl.cn': { name: '沈阳东先科技有限公司', icp: '辽ICP备2023013561号', adress: '', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `通过正版授权渠道下载，感受更快、更安全的下载体验` },
  'sydxwl.cn': { name: '沈阳东先科技有限公司', icp: '辽ICP备2023013561号', adress: '', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `通过正版授权渠道下载，感受更快、更安全的下载体验` },

  'gogo.bangyoun.cn': { name: '上海榜游信息技术有限公司', icp: '沪ICP备2021018077号', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'bangyoun.cn': { name: '', icp: '', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `通过正版授权渠道下载，感受更快、更安全的下载体验` },

  'click.njguanxia.com': { name: '南京观夏网络科技有限公司', icp: '苏ICP备2023019762号', adress: '', mail: '投诉邮箱:mrging@qq.com', add: ``, nav: ``, change: `通过正版授权渠道下载，感受更快、更安全的下载体验` },
  'njguanxia.com': { name: '合肥城市网络科技有限公司南京分公司', icp: '皖ICP备2022006344号', adress: '', mail: '投诉邮箱:mrging@qq.com', add: ``, nav: ``, change: `通过正版授权渠道下载，感受更快、更安全的下载体验` },

  'zip.wxczy.cn': { name: '无锡楚之游网络科技有限公司', icp: '苏ICP备2024095838号', adress: '', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `` },
  'lds.wxczy.cn': { name: '无锡楚之游网络科技有限公司', icp: '苏ICP备2024095838号', adress: '公司地址:', mail: '投诉邮箱:', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },
  'wxczy.cn': { name: '无锡楚之游网络科技有限公司', icp: '苏ICP备2024095838号', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },

  'soft6.wxqef.cn': { name: '无锡起飞尔网络科技有限公司', icp: '苏ICP备2022022001号', adress: '', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `通过正版授权渠道下载，感受更快、更安全的下载体验` },
  'wxqef.cn': { name: '无锡起飞尔网络科技有限公司', icp: '苏ICP备2022022001号', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },
  'wxqerf.cn': { name: '无锡起飞尔网络科技有限公司', icp: '苏ICP备2022022001号', adress: '', mail: '投诉邮箱:', add: ``, nav: ``, change: `` },

  'game.jjqlxx.cn': { name: '靖江企量信息科技有限公司江门市分公司', icp: '苏ICP备2024074472号', adress: '', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `通过正版授权渠道下载，感受更快、更安全的下载体验` },
  'jjqlxx.cn': { name: '靖江企量信息科技有限公司江门市分公司', icp: '苏ICP备2024074472号', adress: '', mail: '投诉邮箱:38702312@qq.com', add: ``, nav: ``, change: `` },

  'wx.yzhzkj.cn': { name: '扬州市汇洲科技有限公司南京分公司', icp: '苏ICP备2024144515号', adress: '公司地址:', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  '360soft.yzhzkj.cn': { name: '扬州市汇洲科技有限公司南京分公司', icp: '苏ICP备2024144515号', adress: '公司地址:', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `` },
  'dz1.yzhzkj.cn': { name: '扬州市汇洲科技有限公司南京分公司', icp: '苏ICP备2024144515号', adress: '公司地址:', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'dz2.yzhzkj.cn': { name: '扬州市汇洲科技有限公司南京分公司', icp: '苏ICP备2024144515号', adress: '公司地址:', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'dz3.yzhzkj.cn': { name: '扬州市汇洲科技有限公司南京分公司', icp: '苏ICP备2024144515号', adress: '公司地址:', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'dz4.yzhzkj.cn': { name: '扬州市汇洲科技有限公司南京分公司', icp: '苏ICP备2024144515号', adress: '公司地址:', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'dz5.yzhzkj.cn': { name: '扬州市汇洲科技有限公司南京分公司', icp: '苏ICP备2024144515号', adress: '公司地址:', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'yzhzkj.cn': { name: '扬州市汇洲科技有限公司南京分公司', icp: '苏ICP备2024144515号', adress: '公司地址:', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `` },

  'xz.fyswxx.cn': { name: '阜阳时蔚信息科技有限公司南京分公司', icp: '皖ICP备2024068126号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },
  'sy1.fyswxx.cn': { name: '阜阳时蔚信息科技有限公司南京分公司', icp: '皖ICP备2024068126号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360手游助手下载，感受更快、更安全的下载体验` },
  'dz1.fyswxx.cn': { name: '阜阳时蔚信息科技有限公司南京分公司', icp: '皖ICP备2024068126号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'dz2.fyswxx.cn': { name: '阜阳时蔚信息科技有限公司南京分公司', icp: '皖ICP备2024068126号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'dz3.fyswxx.cn': { name: '阜阳时蔚信息科技有限公司南京分公司', icp: '皖ICP备2024068126号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'dz4.fyswxx.cn': { name: '阜阳时蔚信息科技有限公司南京分公司', icp: '皖ICP备2024068126号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'dz5.fyswxx.cn': { name: '阜阳时蔚信息科技有限公司南京分公司', icp: '皖ICP备2024068126号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'dz6.fyswxx.cn': { name: '阜阳时蔚信息科技有限公司南京分公司', icp: '皖ICP备2024068126号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'dz7.fyswxx.cn': { name: '阜阳时蔚信息科技有限公司南京分公司', icp: '皖ICP备2024068126号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },
  'dz8.fyswxx.cn': { name: '阜阳时蔚信息科技有限公司南京分公司', icp: '皖ICP备2024068126号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过360应用市场下载，感受更快、更安全的下载体验` },

  '360soft.fyswxx.cn': { name: '阜阳时蔚信息科技有限公司南京分公司', icp: '皖ICP备2024068126号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `<div class="nav_lds">通过360软件管家下载，感受更快、更安全的下载体验</div>` },
  'fyswxx.cn': { name: '阜阳时蔚信息科技有限公司南京分公司', icp: '皖ICP备2024068126号', adress: '公司地址:', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `` },

  'qq.steampowere.top': { name: '合肥飞软网络科技有限公司南京分公司', icp: '皖ICP备2023006344号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `` },
  'new.steampowere.top': { name: '合肥飞软网络科技有限公司南京分公司', icp: '皖ICP备2023006344号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过正版授权渠道下载，感受更快、更安全的下载体验` },
  'steampowere.top': { name: '合肥飞软网络科技有限公司南京分公司', icp: '皖ICP备2023006344号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },

  'lds.steampowere.shop': { name: '合肥邦年网络科技有限公司南京分公司', icp: '皖ICP备2023006343号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },
  'sys.steampowere.shop': { name: '合肥邦年网络科技有限公司南京分公司', icp: '皖ICP备2023006343号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },
  'steampowere.shop': { name: '合肥邦年网络科技有限公司南京分公司', icp: '皖ICP备2023006343号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },

  'softload.cn': { name: '南京欣趣网络科技有限公司', icp: '皖ICP备2023006343号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过**软件市场下载，感受更快、更安全的下载体验` },
  'sengzai.com': { name: '马鞍山圣秦网络科技有限公司合肥分公司', icp: '皖ICP备2021013847号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },
  'iorcpw.cn': { name: '惠州市庆兴科技有限公司', icp: '粤ICP备2025377260号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },
  'hfak.top': { name: '惠州市庆兴科技有限公司', icp: '粤ICP备2025377260号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },
  'zhaocai123.cn': { name: '上海招财网络科技有限公司', icp: '沪ICP备2023019031号', adress: '', mail: '举报电话：400-105-5185', add: ``, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },


  'kafan58.com': { name: '卡饭（上海）信息安全有限公司', icp: '沪ICP备2020031077号', adress: '公司地址:', mail: '投诉邮箱:mrgehuaming@qq.com', add: ``, nav: ``, change: `` },

  'fengmiu.cn': { name: '合肥水花网络科技有限公司', icp: '皖ICP备2022004577号', adress: '合肥市高新区习友路3333号508-1室', mail: '举报电话：400-688-6515', add: `<a class="footer_box_xzw"><span>水花下载网提供下载</span></a>`, nav: ``, change: `` },
  'wxxzn.cn': { name: '无锡星之凝科技咨询有限公司', icp: '苏ICP备2023028484号', adress: '无锡市新吴区菱湖大道200-16（D2）栋600-927', mail: '举报电话：400-688-6515', add: `<a class="footer_box_xzw"><span>星之凝下载网提供下载</span></a>`, nav: ``, change: `` },
  'dw2.zuitie.cn': { name: '马鞍山超聪网络科技有限公司', icp: '皖ICP备2021013870号', adress: '马鞍山市郑蒲港新区孵化园6号楼4层', mail: '举报电话：400-688-6515', add: `<a class="footer_box_xzw"><span>超聪下载网提供下载</span></a>`, nav: ``, change: `通过疾风软件市场下载，感受更快、更安全的下载体验` },
  'zuitie.cn': { name: '马鞍山超聪网络科技有限公司', icp: '皖ICP备2021013870号', adress: '马鞍山市郑蒲港新区孵化园6号楼4层', mail: '举报电话：400-688-6515', add: `<a class="footer_box_xzw"><span>超聪下载网提供下载</span></a>`, nav: ``, change: `` },
};

// 将A指向B公司所示信息对象

// 纯净版
companiesInfo['dltmer.cn'] = companiesInfo['dltom.cn'];
companiesInfo['shfs4.com'] = companiesInfo['shfs0.com'];
companiesInfo['steam111.com'] = companiesInfo['steam001.cn'];
companiesInfo['gamesteamplay.cn'] = companiesInfo['whzw1.com'];
companiesInfo['xuanheng07.cn'] = companiesInfo['xuanheng04.cn'];
companiesInfo['xuanheng09.cn'] = companiesInfo['xuanheng04.cn'];

// 导航版
companiesInfo['xznkjzx.cn'] = companiesInfo['wxxzn.cn'];
companiesInfo['wxxingzn.cn'] = companiesInfo['wxxzn.cn'];
companiesInfo['fengshei.cn'] = companiesInfo['fengmiu.cn'];
companiesInfo['sengfeng.cn'] = companiesInfo['fengmiu.cn'];

// 定义公共导航栏模板
const commonNavTemplate = (logoSrc) => `
  <div class="nav_box">
    <div class="nav_box_all">
      <div class="nav_left">
        <a href="/index.html" target="_blank" class="nav_logo">
          <img src="${logoSrc}" alt="logo" class="nav_logo_ico"></img>
        </a>
      </div> 
      <div class="nav_right">
        <div class="nav_seach">
          <div class="nav_search_txt">
            <input type="text" placeholder="输入软件名搜索" value="" class="nav_search-input"></input>
            <a target="_blank" class="nav_search_btn" value="" href="/"></a>
          </div>
          <a target="_blank" class="search-btn" value="" href="/"></a>
        </div>
        <div class="head_right_text"> 
          <a class="nav_right_txt1" href="/">热门搜索：</a>
          <a class="nav_right_txt2" target="_blank" href="/index.html">网易云音乐</a>
          <a class="nav_right_txt3" target="_blank" href="/index.html">MuMu模拟器</a>
          <a class="nav_right_txt4" target="_blank" href="/index.html">QQ游戏大厅</a>
        </div>
      </div>
    </div>
  </div>`;

// 定义不同域名的logo路径
const logoPaths = {
  'fengmiu.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shuihua.png',
  'zip.wxczy.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shuihua.png',
  'lds.wxczy.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shuihua.png',
  'soft6.wxqef.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shuihua.png',

  'zuitie.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/baozang_1.png',

  'game.jjqlxx.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/danji.png',
  'ra2.sdjiapa.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/danji.png',

  'xz.fyswxx.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shiwei.png',
  'sy1.fyswxx.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shiwei.png',
  '360soft.fyswxx.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shiwei.png',
  'dz1.fyswxx.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shiwei.png',
  'dz2.fyswxx.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shiwei.png',
  'dz3.fyswxx.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shiwei.png',
  'dz4.fyswxx.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shiwei.png',
  'dz5.fyswxx.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shiwei.png',
  'dz6.fyswxx.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shiwei.png',
  'dz7.fyswxx.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shiwei.png',
  'dz8.fyswxx.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/shiwei.png',

  '360soft.yzhzkj.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/huizhou.png',
  'wx.yzhzkj.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/huizhou.png',
  'dz1.yzhzkj.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/huizhou.png',
  'dz2.yzhzkj.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/huizhou.png',
  'dz3.yzhzkj.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/huizhou.png',
  'dz4.yzhzkj.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/huizhou.png',
  'dz5.yzhzkj.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/huizhou.png',

  'steampowere.top': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/feiruan.png',
  'steampowere.shop': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/bangnian.png',

  'kafan58.com': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/kafan.webp',

  'wxxzn.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/xzn_1.png',
  'iorcpw.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/xzn_1.png',
  'hfak.top': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/xzn_1.png',

  'gg59.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/70w.webp',
  'sjzgw.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/70w.webp',

  'softload.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/baozang_1.png',
  'sengzai.com': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/baozang_1.png',

  'lds1.njmsy.com': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/maisi.png',
  'lds2.njmsy.com': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/maisi.png',
  'dz6.njmsy.com': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/maisi.png',
  'dz6.njmsy.com': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/maisi.png',
  'dz7.njmsy.com': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/maisi.png',
  'njmsy.com': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/maisi.png',

  'njlhg.com': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/lanhong.png',
  'ra2.sydxwl.cn': 'https://cms-1314943257.cos.ap-nanjing.myqcloud.com/common/wz_logo/70w.webp'
};

// 更新 companiesInfo 对象中的 nav 部分
for (let domain in logoPaths)
{
  companiesInfo[domain].nav = commonNavTemplate(logoPaths[domain]);
}

// 如果有其他域名使用相同的 nav 部分，也可以在这里进行更新
companiesInfo['dw2.zuitie.cn'].nav = commonNavTemplate(logoPaths['zuitie.cn']);


// 默认信息
const defaultInfo = { name: '北京超越时代网络科技有限公司', icp: '京ICP备2001010101号' };

// 根据域名获取公司信息
const currentHost = window.location.host;
let companyInfo = defaultInfo;
for (let domain in companiesInfo)
{
  if (currentHost.includes(domain))
  {
    companyInfo = companiesInfo[domain];
    break;
  }
}

// 添加导航栏
if (companyInfo.nav)
{
  document.body.insertAdjacentHTML('afterbegin', companyInfo.nav);
}

// 获取具有类名 "lds_txt" 的元素
// var ghElement = document.querySelector('.lds_txt');
// // 检查是否找到了元素
// if (ghElement)
// {
//   // 在 "lds_txt" 类元素之后插入HTML内容
//   ghElement.insertAdjacentHTML('afterend', companyInfo.lds);
// }
// else
// {
//   console.log('没有找到相关类名的元素');
// }


// 获取具有类名 "change_txt" 的元素
var ghElement = document.querySelector('.change_txt');
// 检查是否找到了元素
if (ghElement)
{
  // 替换 "change_txt" 类元素的文字内容
  //   ghElement.textContent = companyInfo.change;
  ghElement.innerHTML = companyInfo.change;
} else
{
  console.log('没有找到需要更换的类名');
}

// 添加页脚信息
const additionalInfo = companyInfo.additionalInfo || '';
// 添加版权信息到页面底部
document.body.insertAdjacentHTML('beforeend', getFooterHtml(companyInfo.name, companyInfo.icp, companyInfo.adress, companyInfo.mail, companyInfo.add));


// 禁止拖拽
function disableDrag () {
  ['dragstart'].forEach(function (ev) {
    document.addEventListener(ev, function (ev) {
      ev.preventDefault();
      ev.returnValue = false;
    });
  });
}

// 右键
function disableaddEventListener () {
  document.addEventListener('contextmenu', function (e) {
    if (!(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA'))
    {
      e.preventDefault();
    }
  }, false);
}

// 禁止文本选择
function disableTextSelect () {
  document.addEventListener('mousedown', function (e) {
    if (e.button === 0)
    {
      setTimeout(function () {
        if (window.getSelection)
        {
          window.getSelection().removeAllRanges();
        } else if (document.selection)
        {
          document.selection.empty();
        }
      }, 0);
    }
  }, false);
}

// 禁止iframe嵌套
function preventIframeNesting () {
  if (window.top !== window.self)
  {
    window.top.location = "about:blank";
  }
}

// 禁止保存和open开发者工具
function disableKeyboardShortcuts () {
  document.addEventListener('keydown', function (e) {
    var isMac = navigator.platform.indexOf('Mac') !== -1;
    var isCtrl = isMac ? e.metaKey : e.ctrlKey;
    var keyCode = e.keyCode;

    if ((isCtrl && keyCode === 83) || keyCode === 123 || (e.shiftKey && keyCode === 121) || (isCtrl && keyCode === 122))
    {
      e.preventDefault();
    }
  }, false);
}

// 调用函数
// 拖拽
disableDrag();
// 右键
// disableaddEventListener();
// 文本选择
disableTextSelect();
// iframe
preventIframeNesting();
// ctrl s
disableKeyboardShortcuts();

