const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return { ...obj, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value

    return obj;
}

function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;

    return newObj;

}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    obj[`${key}`] = undefined

    return obj;
} 