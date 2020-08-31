// 概念: 相同的输入得到相同的输出,不依赖且不影响外部环境也不产生任何副作用
// 输出完全却决于输出
//  -具备幂等性(对于相同的参数,任何时间执行纯函数都将得到同样的结果),它不会
// 引起副作用
//  -与外部的关联应该都来源于函数参数,如果一个函数直接依赖了外部变量,那它就
// 不是纯函数(外部变量是可变的,执行结果就不可控)