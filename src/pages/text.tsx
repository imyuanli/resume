import React, {useRef} from 'react';
import {Button} from 'antd';
import {exportPDF} from "../utils";

/**
 * 文章
 */
// class Article extends Component {
//     constructor(props) {
//         super(props);
//         this.pdfRef = React.createRef();
//     }
//
//     // 点击导出PDF
//
//
//     render() {
//
//     }
// }

const Article = () => {

    const pdfRef = useRef(null)

    const onExportPDF = async () => {
        await exportPDF('测试导出PDF', pdfRef.current)
    }
    return (
        <div className="main-container" style={{background: '#fff'}}>
            <div style={{textAlign: 'center'}}>
                <Button type="primary" onClick={onExportPDF}>导出PDF</Button>
            </div>
            <div ref={pdfRef} style={{
                width: 800,
                padding: 30,
                boxSizing: 'border-box',
                margin: '0 auto',
                lineHeight: '30px',
                fontSize: 14
            }}>
                <h2>aaa</h2>
                <div>
                    据中国商飞公司消息，昨天（5月14日）早上6时52分，一架编号为B-001J的C919大飞机从浦东机场第4跑道起飞，于9时54分安全降落，标志着中国商飞公司即将交付首家用户的首架C919大飞机首次飞行试验圆满完成。
                    在3小时2分钟的飞行中，试飞员与试飞工程师协调配合，完成了预定的各项任务，飞机状态及性能良好。目前，C919大飞机试飞取证和交付准备工作正在有序推进。
                    首家用户、首架飞机、首次飞行，这些令人兴奋的关键性字眼，预示着国产大飞机C919在首飞五年之后，即将迎来交付商业用户的历史性时刻。机身上的编号也表明，这不再是一架用于验证飞行的原型机，而是即将交付的1号机。虽然这架试飞飞机的机身依然是中国商飞公司的涂装，但在正式交付前，会换上首家用户中国东方航空的喷漆。
                    航空圈内传播的视频显示，在此次试飞前6天，也就是5月8日，这架东航首架C919飞机已经在上海浦东机场第五跑道进行了低、中速滑行试验，完成了飞机燃油、液压系统和刹车功能检查等项目。
                    国产大飞机距离正式交付已经只有一步之遥了。中国人坐上自己设计生产的大型客机的梦想，在今年或将得以实现。
                    前不久，在上海的抗疫保卫战中，突发疾病去世的志愿者孟庆功，就是中国商飞的型号副总设计师，同时也是中国商飞复合材料中心副主任。国产C919首架交付机的首次试飞成功的消息，想必也是对他在天之灵最好的告慰了。
                    自那之后，国人就一直在关注着国产大飞机的进展，期盼着定型交付，进入市场运营那天能早日到来。
                    但研发一款具有国际主流水准的大型客机并非是一蹴而就的事情，即便是对于波音、空客这样的国际航空巨头来说，依然要经过复杂的流程，更何况中国在这方面的经验还几乎就是一张白纸。
                    从首飞到交付的速度快慢，和机型成熟度以及创新程度也都有关系。在这一方面，作为中国商飞的竞争对手，波音和空客显然经验更足。以空客A320举例，其首飞到交付仅相距1年多的时间，但这也是在空客拥有A300和A310两款机型成功研发的基础之上才达成的。
                    虽然2017年到2018年间，C919的试飞工作进行不多。但从2018年年中开始，C919整体的取证试飞工作已经加快，并开始展开密集的飞行测试。自2019年起，6架C919在上海、阎良、东营、南昌等地进行飞行试验，开展了一系列地面试验和飞行试验。2020年11月，C919获型号检查核准书（TIA），全面进入局方审定试飞阶段。
                    除了试飞取证，C919也先后在2020-2021的两届南昌飞行大会上公开亮相，其中一届还进行了飞行表演。
                    就研制进度而言，民用飞机主要会经历立项、设计、样机制造、试飞、适航审定、小批量交付和批量生产这几个阶段，而C919项目正处于适航审定阶段，简单来说，就是通过各种试验，判断飞机能否正常航行，如果通过验证，就能拿到适航证，进而转入产业化阶段。
                    在2022年上海两会期间，中国商用飞机有限责任公司副总经理、总会计师吴永良曾表示，国产C919项目仍处于适航取证阶段，预计将于2022年完成交付，具体的交付将等到取证完成后才具备条件。
                    其实，在去年的9月，民航华东局就发布消息，东方航空首架C919进入总装阶段。当时华东局副局长吕新明提到，C919批生产首架机是在型号合格审定工作尚未完成之前开展生产许可审定工作。这也是民航局顺应国产民机发展的需要和提升国产民机竞争力的重要举措。
                    “2022年，大飞机项目将由研制阶段逐步转入产业化阶段。”今年2月7日，中国商飞董事长贺东风在干部大会上表示。
                    如今，即将交付首家用户的首架C919大飞机首次飞行试验圆满完成，离取证完成从而实现交付的时间表又顺利迈进了一步。
                    C919国内单价不到1亿美元
                    国务院发布的《“十四五”现代综合交通运输体系发展规划》指出，我国将重点推动C919大型客机示范运营和ARJ21支线客机系列化发展。
                    2021年3月1日，中国东方航空作为国产大飞机C919全球首家启动用户，与中国商飞公司在上海签署了C919大型客机购机合同。当时公布首批引进5架，东航也将成为全球首家运营C919大型客机的航空公司。2020年，东航下属一二三航空开始运营国产ARJ21飞机。
                </div>
                <h2>bbb</h2>
                <div>
                    据中国商飞公司消息，昨天（5月14日）早上6时52分，一架编号为B-001J的C919大飞机从浦东机场第4跑道起飞，于9时54分安全降落，标志着中国商飞公司即将交付首家用户的首架C919大飞机首次飞行试验圆满完成。
                    在3小时2分钟的飞行中，试飞员与试飞工程师协调配合，完成了预定的各项任务，飞机状态及性能良好。目前，C919大飞机试飞取证和交付准备工作正在有序推进。
                    首家用户、首架飞机、首次飞行，这些令人兴奋的关键性字眼，预示着国产大飞机C919在首飞五年之后，即将迎来交付商业用户的历史性时刻。机身上的编号也表明，这不再是一架用于验证飞行的原型机，而是即将交付的1号机。虽然这架试飞飞机的机身依然是中国商飞公司的涂装，但在正式交付前，会换上首家用户中国东方航空的喷漆。
                    航空圈内传播的视频显示，在此次试飞前6天，也就是5月8日，这架东航首架C919飞机已经在上海浦东机场第五跑道进行了低、中速滑行试验，完成了飞机燃油、液压系统和刹车功能检查等项目。
                    国产大飞机距离正式交付已经只有一步之遥了。中国人坐上自己设计生产的大型客机的梦想，在今年或将得以实现。
                    前不久，在上海的抗疫保卫战中，突发疾病去世的志愿者孟庆功，就是中国商飞的型号副总设计师，同时也是中国商飞复合材料中心副主任。国产C919首架交付机的首次试飞成功的消息，想必也是对他在天之灵最好的告慰了。
                    自那之后，国人就一直在关注着国产大飞机的进展，期盼着定型交付，进入市场运营那天能早日到来。
                    但研发一款具有国际主流水准的大型客机并非是一蹴而就的事情，即便是对于波音、空客这样的国际航空巨头来说，依然要经过复杂的流程，更何况中国在这方面的经验还几乎就是一张白纸。
                    从首飞到交付的速度快慢，和机型成熟度以及创新程度也都有关系。在这一方面，作为中国商飞的竞争对手，波音和空客显然经验更足。以空客A320举例，其首飞到交付仅相距1年多的时间，但这也是在空客拥有A300和A310两款机型成功研发的基础之上才达成的。
                    虽然2017年到2018年间，C919的试飞工作进行不多。但从2018年年中开始，C919整体的取证试飞工作已经加快，并开始展开密集的飞行测试。自2019年起，6架C919在上海、阎良、东营、南昌等地进行飞行试验，开展了一系列地面试验和飞行试验。2020年11月，C919获型号检查核准书（TIA），全面进入局方审定试飞阶段。
                    除了试飞取证，C919也先后在2020-2021的两届南昌飞行大会上公开亮相，其中一届还进行了飞行表演。
                    就研制进度而言，民用飞机主要会经历立项、设计、样机制造、试飞、适航审定、小批量交付和批量生产这几个阶段，而C919项目正处于适航审定阶段，简单来说，就是通过各种试验，判断飞机能否正常航行，如果通过验证，就能拿到适航证，进而转入产业化阶段。
                    在2022年上海两会期间，中国商用飞机有限责任公司副总经理、总会计师吴永良曾表示，国产C919项目仍处于适航取证阶段，预计将于2022年完成交付，具体的交付将等到取证完成后才具备条件。
                    其实，在去年的9月，民航华东局就发布消息，东方航空首架C919进入总装阶段。当时华东局副局长吕新明提到，C919批生产首架机是在型号合格审定工作尚未完成之前开展生产许可审定工作。这也是民航局顺应国产民机发展的需要和提升国产民机竞争力的重要举措。
                    “2022年，大飞机项目将由研制阶段逐步转入产业化阶段。”今年2月7日，中国商飞董事长贺东风在干部大会上表示。
                    如今，即将交付首家用户的首架C919大飞机首次飞行试验圆满完成，离取证完成从而实现交付的时间表又顺利迈进了一步。
                    C919国内单价不到1亿美元
                    国务院发布的《“十四五”现代综合交通运输体系发展规划》指出，我国将重点推动C919大型客机示范运营和ARJ21支线客机系列化发展。
                    2021年3月1日，中国东方航空作为国产大飞机C919全球首家启动用户，与中国商飞公司在上海签署了C919大型客机购机合同。当时公布首批引进5架，东航也将成为全球首家运营C919大型客机的航空公司。2020年，东航下属一二三航空开始运营国产ARJ21飞机。
                </div>
            </div>
        </div>
    );
}

export default Article;