javascript有一个主线程和调用栈(也称之为执行栈),所有的任务都会放到调用栈
中等待主线程来执行

同步任务会在调用栈中按照顺序等待主线程依次执行,异步任务会在异步任务有了结果后,将
注册的回调函数放入任务队列中等待主线程空闲的时候(调用栈被清空),执行

当某个宏任务执行完后,会查看是否有微任务队列;如果有,先执行微任务队列中的所有任务,如果
没有,会读取宏任务队列中排在最前面的任务,执行宏任务的过程中,遇到微任务,依次加入微任务
队列,栈空后,再次读取微任务队列里的任务,以此类推