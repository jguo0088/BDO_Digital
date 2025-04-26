// ģ̬����
function showDemoRequest(productName) {
    document.getElementById('modalProductName').textContent = '��ѡ��Ĳ�Ʒ��' + productName;
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

// ���û����ģ̬���ⲿʱ�ر�ģ̬��
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

// ���������Ϣ
const partnerInfo = {
    yonyou: {
        name: '����',
        logo: 'images/tmp.png',
        description: '��������Ƽ��ɷ����޹�˾����̫�������ȵ���ҵ�Ʒ����ṩ�̣�������Ϊ��ҵ�ṩȫ�����ȵ���ҵ�Ʒ���',
        cooperation: '���Ź�����ѯ�������ڲ������ֻ�ת������չ����Ⱥ�������ͬΪ��ҵ�ṩ������������Ľ��衢�������ֻ�ת�͵Ƚ��������',
        cases: [
            'ĳ���������Ų�����������Ľ�����Ŀ',
            'ĳ����ҵ���й�˾���ֻ�����ת����Ŀ',
            'ĳ���ڻ������ܲ���ϵͳ������Ŀ'
        ]
    },
    huawei: {
        name: '��Ϊ',
        logo: 'images/tmp.png',
        description: '��Ϊ�������޹�˾��ȫ�����ȵ�ICT������ʩ�������ն��ṩ�̣������ڰ������������ÿ���ˡ�ÿ����ͥ��ÿ����֯���������ﻥ�����������硣',
        cooperation: '���Ź�����ѯ�뻪Ϊ����ҵ���ֻ�ת������չ��ս�Ժ�������ͬΪ��ҵ�ṩ���ڻ�Ϊ�Ƶ����ܲ������ܹ�Ӧ���Ƚ��������',
        cases: [
            'ĳ��Դ�������ܲ������ƽ̨������Ŀ',
            'ĳ����������ҵ��Ӧ�����ֻ�ת����Ŀ',
            'ĳ���������������������ƽ̨������Ŀ'
        ]
    },
    kingdee: {
        name: '���',
        logo: 'images/tmp.png',
        description: '�����������������޹�˾����̫�������ȵ���ҵ����������Ʒ����ṩ�̣�������Ϊ��ҵ�ṩȫ��λ�Ĺ���������Ʒ���',
        cooperation: '���Ź�����ѯ��������ҵ���������ҵ��Դ�ƻ�������չ����Ⱥ�������ͬΪ��ҵ�ṩ���ڽ���ƵĲ������ERPʵʩ�Ƚ��������',
        cases: [
            'ĳ�������ۼ��Ų������ϵͳʵʩ��Ŀ',
            'ĳ����ҵ��ҵERPϵͳ������Ŀ',
            'ĳ����ҵ��ҵȫ��Ԥ�����ϵͳ������Ŀ'
        ]
    },
    alibaba: {
        name: '����Ͱ�',
        logo: 'images/tmp.png',
        description: '����Ͱͼ�����ȫ�����ȵ�������ҵƽ̨�������ڹ���δ����ҵ������ʩ��������û�����������⡣',
        cooperation: '���Ź�����ѯ�밢��������ҵ���ǻ�ת������չ��ս�Ժ�������ͬΪ��ҵ�ṩ���ڰ����ƵĴ����ݷ������˹�����Ӧ�õȽ��������',
        cases: [
            'ĳ�������ۼ��ſͻ������뾫׼Ӫ����Ŀ',
            'ĳ���ڻ������ܷ��ϵͳ������Ŀ',
            'ĳ����ҵ��ҵ��Ӧ���Ż���Ŀ'
        ]
    },
    tencent: {
        name: '��Ѷ',
        logo: 'images/tmp.png',
        description: '��Ѷ��ȫ�����ȵĻ�������ֵ�����ṩ�̣�������ͨ������������������������Ʒ�ʡ�',
        cooperation: '���Ź�����ѯ����Ѷ������ҵ���ֻ�Эͬ�����ܿͷ�������չ����Ⱥ�������ͬΪ��ҵ�ṩ������Ѷ�Ƶ����ֻ��칫�����ܿͷ��Ƚ��������',
        cases: [
            'ĳ����ҵ��ҵ���ֻ��칫ƽ̨������Ŀ',
            'ĳ���ۼ������ܿͷ�ϵͳʵʩ��Ŀ',
            'ĳ��������Эͬ�칫ƽ̨������Ŀ'
        ]
    },
    baidu: {
        name: '�ٶ�',
        logo: 'images/tmp.png',
        description: '�ٶ���ȫ�����ȵ��˹�����ƽ̨��˾���������ÿƼ��ø��ӵ�������򵥡�',
        cooperation: '���Ź�����ѯ��ٶ����������˹�����Ӧ�á����ܾ��ߵ�����չ��ս�Ժ�������ͬΪ��ҵ�ṩ���ڰٶ������Ƶ�AI����֧�֡����ܷ����Ƚ��������',
        cases: [
            'ĳ���ڻ������ܾ���֧��ϵͳ������Ŀ',
            'ĳ����ҵ��ҵ�����ʼ�ϵͳʵʩ��Ŀ',
            'ĳ��Դ�����豸Ԥ����ά��ϵͳ������Ŀ'
        ]
    }
};

// ���ύ
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('��л�������ԣ����ǻᾡ��������ϵ��');
            contactForm.reset();
        });
    }

    const demoRequestForm = document.getElementById('demoRequestForm');
    if (demoRequestForm) {
        demoRequestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('��л�������룬���ǵĲ�Ʒ����ᾡ��������ϵ������ʾ��');
            demoRequestForm.reset();
            closeModal();
        });
    }
});
