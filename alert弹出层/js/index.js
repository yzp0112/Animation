/****
 * Alert对象
 *
 * title /////弹出的标题
 * msg  ////弹出的提示内容
 * callback //////回调函数
 */
function Alert(title, msg, callback) {
    this.title = title;
    this.msg = msg;
    this.callback = callback;
}
Alert.prototype = {
    //////弹出遮罩层
    showModalCover: function() {
        document.documentElement.style.overflow = 'hidden'

        //  没有直接指定style样式，而是只指定了样式类名称
        //  将样式分离到单独的样式表中：
        //  可以随时修改样式而不需要修改代码
        //  即使不懂代码也可以修改样式
        //  js代码量也减少了
        var mask = document.createElement('div')
        mask.className = 'modal-mask'
        document.body.appendChild(mask)
    },
    //////alert的主体，借助css技巧实现美化的效果
    showAlertBody: function() {
        /////注意确定按钮点击之后的回调函数
        //console.log('alert body');

        var box = document.createElement('div')
        box.className = 'modal-box'
        document.body.appendChild(box)

        var title = document.createElement('div')
        title.className = 'modal-title'
        title.innerText = this.title
        box.appendChild(title)

        var msg = document.createElement('div')
        msg.className = 'modal-message'
        msg.innerText = this.msg
        box.appendChild(msg)

        var btnBox = document.createElement('div')
        btnBox.className = 'modal-button-box'
        box.appendChild(btnBox)


    },
    /////alert按钮
    showButton: function() {
        var btn = document.createElement('div')
        btn.innerText = '确定'
        document.querySelector('.modal-button-box').appendChild(btn)

        var that = this ////把当前的对象赋值给that用于onclick中使用
        btn.onclick = function(e) {
            that.close()

            if (typeof that.callback == 'function') {
                that.callback()
            }
        }
    },
    ////alert关闭
    close: function() {
        var modal = document.querySelector('.modal-mask')
        var box = document.querySelector('.modal-box')
        document.body.removeChild(modal)
        document.body.removeChild(box)

        document.documentElement.style.overflow = 'auto'
    },
    /////展示整个效果
    show: function() {
        this.showModalCover();
        this.showAlertBody();
        this.showButton();
    }
}

/*****
 * Confirm对象
 *
 * title 标题
 * msg 提示内容
 * callback 确定按钮的回调函数
 * cancelCallBack  取消按钮的回掉函数
 *
 */
function Confirm(title, msg, callback, cancelCallBack) {
    Alert.call(this, title, msg, callback);
    this.cancelCallBack = cancelCallBack;
}
Confirm.prototype = Object.create(Alert.prototype);
Confirm.prototype.constructor = Confirm;
/////处理此处的内容
Confirm.prototype.showButton = function() {
    var btnBox = document.querySelector('.modal-button-box')
    var separator = document.createElement('span')
    separator.className = 'modal-separator'
    btnBox.appendChild(separator)

    var okBtn = document.createElement('span')
    okBtn.innerText = '确定'
    okBtn.className = 'modal-left-button'
    btnBox.appendChild(okBtn)

    var cancelBtn = document.createElement('span')
    cancelBtn.innerText = '取消'
    cancelBtn.className = 'modal-right-button'
    btnBox.appendChild(cancelBtn)

    var that = this
    okBtn.onclick = function() {
        that.close()
        if (typeof that.callback === 'function') {
            that.callback()
        }
    }
    cancelBtn.onclick = function() {
        that.close()
        if (typeof that.cancelCallBack === 'function') {
            that.cancelCallBack()
        }
    }

}


var c = new Confirm('提示框', '确定删除?',
    function(res) {
        // console.log('ok');
        (new Alert('提示框','点了确定')).show();
    }, function(res) {
        // console.log('cancel');
        (new Alert('提示框','点了取消')).show();
    })
// var c = new Alert('提示框','这是一个提示内容',function(){
//     alert('执行回调函数');
// })
c.show();


