/*******************************�����ķָ���**********************************/
//���
/*������JavaScritp��������ʾ�����ַ�//����������ע�ͣ������ǳ����е�˵���Ա�ע*/
var aBrid = 'RoBin';//������aBrid��ֵ�ı�'RoBin'
var today = new Date;//������today��ֵΪ���������
/*******************************�����ķָ���**********************************/
//����
function inchestometers(inches) {
    if (inches < 0) {
        return -1;
    } else {
        var meters = inches / 39.37;
        return meters;
    }
}
var inches = 12;
var meters = inchestometers(inches);
console.log(meters);
/*******************************�����ķָ���**********************************/
//ע��
/*
* ���齫���е�ע�ͱ�дΪ����ע�Ϳ顣
* */
//����һ��ע�͵�����
var extendedIdea = aGoodIdea + "You never know when you'll have to figure out what it does";
/*******************************�����ķָ���**********************************/
//��ֵ�͵Ⱥ�
// = ��ֵ
// == ����
