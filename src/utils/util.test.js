import Utils from './index'

const mockCity = {
  'city': [
    { 'code': '110000', 'name': '北京市' },
    { 'code': '120000', 'name': '天津市' },
    { 'code': '130000', 'name': '河北省' },
    { 'code': '140000', 'name': '山西省' }],
  'county': [
    { 'code': '110100', 'name': '市辖区', 'parent': '110000' },
    { 'code': '110200', 'name': '县', 'parent': '110000' },
    { 'code': '120100', 'name': '市辖区', 'parent': '120000' },
    { 'code': '120200', 'name': '县', 'parent': '120000' },
    { 'code': '130100', 'name': '石家庄市', 'parent': '130000' }],
  region: [{ 'code': '110101', 'name': '东城区', 'parent': '110100' },
    { 'code': '110102', 'name': '西城区', 'parent': '110100' },
    { 'code': '110105', 'name': '朝阳区', 'parent': '110100' },
    { 'code': '110106', 'name': '丰台区', 'parent': '110100' },
    { 'code': '110107', 'name': '石景山区', 'parent': '110100' }]
}

describe('test get cascader data', () => {
  it('should get data', () => {
    let data = Utils.getCascaderData(mockCity)
    console.log(data)
  })
})
