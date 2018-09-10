// vue的响应式原理 数据绑定，数据变化，从而视图也会跟着变化
// 核心  利用Object.defineProperty() get、set

// 定义进行视图更新的方法
function cb (val) {
    /* 渲染视图 */
    console.log("视图更新啦～");
}

// 什么时候进行视图的更新 == 数据有变化的时候
 // Object.defineProperty来实现对对象的「响应式」化
function defineReactive (obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,       /* 属性可枚举 */
        configurable: true,     /* 属性可被修改或删除 */
        get: function reactiveGetter () {
            return val;         /* 实际上会依赖收集，下一小节会讲 */
        },
        set: function reactiveSetter (newVal) {
            if (newVal === val) return;
            cb(newVal); // 调用视图更新方法
        }
    });
}

// 让data中的所有数据都成为响应式 化的
function observer (value) {
    if (!value || (typeof value !== 'object')) {
        return;
    }
    
    Object.keys(value).forEach((key) => {
        defineReactive(value, key, value[key]);
    });
}

// 最后，让我们用 observer 来封装一个 Vue 吧！
let o = new Vue({
    data: {
        test: "I am test."
    }
});
o._data.test = "hello,world.";  /* 视图更新啦～ */