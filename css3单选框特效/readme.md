### CSS3 单选框动画特效
#### 第一个特效
<img src="images/1.gif" width="310" height="110" alt="特效一"/>

> HTML代码
```html

<div class="radio-1">
    <input type="radio" name="radio-1" id="radio-1-1" checked="checked">
    <label for="radio-1-1"></label>
 
    <input type="radio" name="radio-1" id="radio-1-2">
    <label for="radio-1-2"></label>
 
    <input type="radio" name="radio-1" id="radio-1-3">
    <label for="radio-1-3"></label>
</div>

```

我们指定 input 标签的 type 值为 radio，并且一下所有的 radio 的 name 值都相同，这样才可以实现单选效果。只要设置了 label 中的 for 属性，当我们点击label 元素的时候，浏览器会自动把焦点转移到 radio 上去。

```CSS3
.radio-1 {
        width: 900px;
        padding: 3% 0%;
        margin: 10px auto;
        background-color: darkseagreen;
        text-align: center;
    }
 
    .radio-1 label {
        display: inline-block;
        position: relative;
        width: 28px;
        height: 28px;
        border: 1px solid #cccccc;
        border-radius: 100%;
        cursor: pointer;
        background-color: #ffffff;
        margin-right: 10px;
    }
    .radio-1 label:after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        top: 4px;
        left: 4px;
        background-color: #666;
        border-radius: 50%;
        transform: scale(0);
        transition: transform .2s ease-out;
    }
```
这里我们用到了 after 选择器就是为了设置如上图所示的小黑点。首先我们设置 content 属性为空，意思就是我们不需要填充任何内容，因为我们只是想设置背景色为黑色，仅此而已。还有，刚开始的时候我们设置 transform 的 scale 值为 0 ，其达到的效果就是将小黑点隐藏。
```CSS3
   .radio-1 [type="radio"]:checked + label {
        background-color: #eeeeee;
        transition: background-color .2s ease-in;
    }
 
    .radio-1 [type="radio"]:checked + label:after {
        transform: scale(1);
        transition: transform .2s ease-in;
    }
```
这里使用的 + 符号,它的学名叫做 相邻同胞选择器，意思就是选择紧接在另一个元素后的元素，而且二者有相同的父元素，在这里的意思就是选中在radio 后出现的 label ，在一个 非常庞大的系统中，我们可能多次使用到 label 元素，为了避免混淆，这样设置将更加准确。这里我们看到了 transition 属性，这个属性是用于设置过渡效果的。最后，将我们的 radio 隐藏掉，就大功告成了。
```
    .radio-1 [type="radio"]{
        display: none;
    }
```

### 第二个特效
<img src="images/2.gif" width="310" height="110" alt="特效二"/>

和上一个一模一样，除了将 transform 属性设置成 rotate

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Radio</title>
    <style>
        .radio-2 {
            width: 900px;
            padding: 3% 0;
            margin: 50px auto;
            background-color: darkseagreen;
            text-align: center;
        }
 
        .radio-2 label {
            display: inline-block;
            width: 28px;
            height: 28px;
            overflow: hidden;
            border: 1px solid #eeeeee;
            border-radius: 100%;
            margin-right: 10px;
            background-color: #ffffff;
            position: relative;
            cursor: pointer;
        }
 
        .radio-2 label:after {
            content: "";
            position: absolute;
            top: 4px;
            left: 4px;
            width: 20px;
            height: 20px;
            background-color: #666666;
            border-radius: 50%;
            transform: rotate(-180deg);
            transform-origin: -2px 50%;
            transition: transform .2s ease-in;
        }
 
        .radio-2 [type="radio"] {
            display: none;
        }
 
        .radio-2 [type="radio"]:checked + label:after{
            transform: rotate(0deg);
            transition: transform .2s ease-out;
        }
    </style>
</head>
<body>
<div class="radio-2">
    <input type="radio" name="radio-2" id="radio-2-1" checked="checked">
    <label for="radio-2-1"></label>
 
    <input type="radio" name="radio-2" id="radio-2-2">
    <label for="radio-2-2"></label>
 
    <input type="radio" name="radio-2" id="radio-2-3">
    <label for="radio-2-3"></label>
</div>
 
</body>
</html>
```