export const cleanse = (input: string) => {
  if (input === undefined || input.length === 0) {
    return input
  }
  let str = input.trim().toLowerCase()
  str = str.replace(/[áàảãạâấầẩẫậăắằẳẵặ]/ig, 'a')
  str = str.replace(/[éèẻẽẹêếềểễệ]/ig, 'e')
  str = str.replace(/[iíìỉĩị]/ig, 'i')
  str = str.replace(/[óòỏõọơớờởỡợôốồổỗộ]/ig, 'o')
  str = str.replace(/[úùủũụưứừửữự]/ig, 'u')
  str = str.replace(/[yýỳỷỹỵ]/ig, 'y')
  str = str.replace(/[đ]/ig, 'd')
  return str
}
