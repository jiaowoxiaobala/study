// 函数记忆是指将上次的计算结果缓存起来,当下次调用时,如果遇到相同的参数
// 就直接返回缓存中的数据

// 思路: 把参数和对应的结果数据存到一个对象中,调用时,判断参数对应的数据是否
// 存在,存在就返回对应的结果数据