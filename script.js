// 模态框功能
function showDemoRequest(productName) {
    document.getElementById('modalProductName').textContent = '您选择的产品：' + productName;
    document.getElementById('demoRequestModal').style.display = 'block';
}

function showVPNInfo() {
    document.getElementById('vpnInfoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('demoRequestModal').style.display = 'none';
    document.getElementById('vpnInfoModal').style.display = 'none';
    document.getElementById('partnerInfoModal').style.display = 'none';
}

// 当用户点击模态框外部时关闭模态框
window.onclick = function(event) {
    if (event.target == document.getElementById('demoRequestModal')) {
        document.getElementById('demoRequestModal').style.display = 'none';
    }
    if (event.target == document.getElementById('vpnInfoModal')) {
        document.getElementById('vpnInfoModal').style.display = 'none';
    }
    if (event.target == document.getElementById('partnerInfoModal')) {
        document.getElementById('partnerInfoModal').style.display = 'none';
    }
}

// 合作伙伴信息
const partnerInfo = {
    yonyou: {
        name: '用友',
        logo: 'images/tmp.png',
        description: '用友网络科技股份有限公司是亚太地区领先的企业云服务提供商，致力于为企业提供全球领先的企业云服务。',
        cooperation: '立信管理咨询与用友在财务数字化转型领域展开深度合作，共同为企业提供财务共享服务中心建设、财务数字化转型等解决方案。',
        cases: [
            '某大型央企集团财务共享服务中心建设项目',
            '某制造业上市公司数字化财务转型项目',
            '某金融机构智能财务系统建设项目'
        ]
    },
    huawei: {
        name: '华为',
        logo: 'images/tmp.png',
        description: '华为技术有限公司是全球领先的ICT基础设施和智能终端提供商，致力于把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界。',
        cooperation: '立信管理咨询与华为在企业数字化转型领域展开战略合作，共同为企业提供基于华为云的智能财务、智能供应链等解决方案。',
        cases: [
            '某能源集团智能财务分析平台建设项目',
            '某大型制造企业供应链数字化转型项目',
            '某政府机构数据治理与分析平台建设项目'
        ]
    },
    kingdee: {
        name: '金蝶',
        logo: 'images/tmp.png',
        description: '金蝶国际软件集团有限公司是亚太地区领先的企业管理软件及云服务提供商，致力于为企业提供全方位的管理软件及云服务。',
        cooperation: '立信管理咨询与金蝶在企业财务管理、企业资源计划等领域展开深度合作，共同为企业提供基于金蝶云的财务管理、ERP实施等解决方案。',
        cases: [
            '某大型零售集团财务管理系统实施项目',
            '某制造业企业ERP系统升级项目',
            '某服务业企业全面预算管理系统建设项目'
        ]
    },
    alibaba: {
        name: '阿里巴巴',
        logo: 'images/tmp.png',
        description: '阿里巴巴集团是全球领先的数字商业平台，致力于构建未来商业基础设施，让天下没有难做的生意。',
        cooperation: '立信管理咨询与阿里云在企业数智化转型领域展开战略合作，共同为企业提供基于阿里云的大数据分析、人工智能应用等解决方案。',
        cases: [
            '某大型零售集团客户画像与精准营销项目',
            '某金融机构智能风控系统建设项目',
            '某制造业企业供应链优化项目'
        ]
    },
    tencent: {
        name: '腾讯',
        logo: 'images/tmp.png',
        description: '腾讯是全球领先的互联网增值服务提供商，致力于通过互联网服务提升人类生活品质。',
        cooperation: '立信管理咨询与腾讯云在企业数字化协同、智能客服等领域展开深度合作，共同为企业提供基于腾讯云的数字化办公、智能客服等解决方案。',
        cases: [
            '某服务业企业数字化办公平台建设项目',
            '某零售集团智能客服系统实施项目',
            '某政府机构协同办公平台建设项目'
        ]
    },
    baidu: {
        name: '百度',
        logo: 'images/tmp.png',
        description: '百度是全球领先的人工智能平台公司，致力于用科技让复杂的世界更简单。',
        cooperation: '立信管理咨询与百度智能云在人工智能应用、智能决策等领域展开战略合作，共同为企业提供基于百度智能云的AI决策支持、智能分析等解决方案。',
        cases: [
            '某金融机构智能决策支持系统建设项目',
            '某制造业企业智能质检系统实施项目',
            '某能源集团设备预测性维护系统建设项目'
        ]
    }
};

// 表单提交
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感谢您的留言，我们会尽快与您联系！');
            contactForm.reset();
        });
    }

    const demoRequestForm = document.getElementById('demoRequestForm');
    if (demoRequestForm) {
        demoRequestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感谢您的申请，我们的产品经理会尽快与您联系安排演示！');
            demoRequestForm.reset();
            closeModal();
        });
    }
});
