// import CityData from '../assets/city.json'

const DateMap = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default class Utils {
  static getCascaderData(data) {
    let countys = _findChild(data.county, data.region);
    let citys = _findChild(data.city, countys);

    return citys;
  }

  static getRange(start, end, step = 1) {
    let s = parseInt(start) || 0;
    let e = parseInt(end) || 0;
    if (start > end || step < 0) {
      return [];
    }

    let rs = [];
    for (let i = s; i < e; i += step) {
      rs.push(i);
    }
    return rs;
  }

  static isLeapYear(year) {
    return (
      (year % 100 === 0 && year % 4 === 0) ||
      (year % 4 === 0 && year % 100 !== 0)
    );
  }

  static getDate(month, year) {
    let dateNumber = DateMap[month];
    if(Utils.isLeapYear(year) && month === 2){
      dateNumber += 1;
    }
    return dateNumber;
  }
  /**
   * 
   * @param {string} cityCode 
   * @param {string} dateStr 
   * @param {boolean} gender  true: man false: women
   */
  static genID(cityCode, dateStr, gender){
    //geneate random sequence code
    let sequence_1 = +getRandomInt(0,9),
        sequence_2 = +getRandomInt(0,9),
        sequence_3 = +getRandomInt(0,9); 
    
    if(
       ( gender  && sequence_3 % 2 === 0) || 
       ( !gender && sequence_3 % 2 === 1)
    ){
      sequence_3 = (sequence_3 + 1) % 10
    }

    let preId = cityCode + dateStr + sequence_1 + sequence_2 + sequence_3;

    //weight
    let weight = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];

    let sum = weight
              .map( (w, i) => w * preId[i] )
              .reduce((s, n) => s + n);
    let verificationCode = sum % 11;

    //verification code map
    let verifyMap = [1, 0,  'X',  9,  8,  7,  6,  5,  4,  3, 2];
    return preId + verifyMap[verificationCode]; 
  }
}

function getRandomInt(start, end){
  let random = Math.random();
  let range = end -start + 1;
  return start + parseInt(random * range);
}
/**
 *
 * @param {Array} parent
 * @param {Array} childern
 */
const _findChild = (parent, children) => {
  return parent.map(item => {
    let itemChildren = [];

    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      if (item.code === child.parent) {
        itemChildren.push(_mapCityData(child));
      }
    }

    return {
      ..._mapCityData(item),
      children: itemChildren,
      parent: item.parent
    };
  });
};

function _mapCityData(data) {
  return {
    value: data.value || data.code,
    label: data.label || data.name,
    children: data.children
  };
}
