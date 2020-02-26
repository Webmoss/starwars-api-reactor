import { isObject, isArray, isString } from 'lodash';

export default value => {
  const formatted = [];
  if (isObject(value) && Object.keys(value).length > 0) {
    
    console.log("Object Value:", value)
    
    for (let key in value) {
      formatted.push(value[key]);
    }
    return formatted.join(', ');
  } else if (isArray(value) && value.length > 0) {
    return value.join(', ');
  } else if (isString(value) && value.length > 0) {
    const joined = value.split(',');
    return joined.join(', ');
  } else {
    return '';
  }
}
