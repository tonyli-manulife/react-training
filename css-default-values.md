好的，这是一份常用 CSS 属性及其默认值的列表，按功能分类，方便您查阅。

### 字体与文本 (Font & Text)

| 属性 (Property) | 默认值 (Default Value) | 描述 |
| :--- | :--- | :--- |
| `color` | `inherit` | 继承父元素的颜色。根元素通常默认为黑色 (`#000000`)。 |
| `font-family` | (浏览器决定) | 通常是 `serif` 字体，如 "Times New Roman"。 |
| `font-size` | `medium` | 通常在桌面浏览器中是 `16px`。 |
| `font-weight` | `normal` (或 `400`) | 正常粗细。 |
| `font-style` | `normal` | 正常样式，非斜体。 |
| `line-height` | `normal` | 浏览器决定，通常是字体大小的 1.2 倍左右。 |
| `text-align` | `start` (或 `left`) | 在从左到右的语言中默认为左对齐。 |
| `text-decoration` | `none` | 没有装饰线（如下划线、删除线等）。 |
| `text-transform` | `none` | 不改变文本的大小写。 |
| `letter-spacing` | `normal` | 正常的字符间距。 |
| `word-spacing` | `normal` | 正常的单词间距。 |

---

### 盒子模型 (Box Model)

| 属性 (Property) | 默认值 (Default Value) | 描述 |
| :--- | :--- | :--- |
| `width`, `height` | `auto` | 宽度和高度由内容决定。 |
| `margin` | `0` | 外边距为 0。 |
| `padding` | `0` | 内边距为 0。 |
| `border-width` | `medium` | 边框宽度。但只有设置了 `border-style` 才会显示。 |
| `border-style` | `none` | 没有边框。 |
| `border-color` | `currentcolor` | 边框颜色与元素的 `color` 属性值相同。 |
| `box-sizing` | `content-box` | `width` 和 `height` 只包含内容区域。 |

---

### 布局 (Layout)

| 属性 (Property) | 默认值 (Default Value) | 描述 |
| :--- | :--- | :--- |
| `display` | `inline` | 对于大多数元素是 `inline`，但像 `<div>`, `<p>`, `<h1>` 等块级元素默认为 `block`。 |
| `position` | `static` | 正常文档流布局，`top`, `right`, `bottom`, `left` 无效。 |
| `top`, `bottom`, `left`, `right` | `auto` | 浏览器自动计算位置。 |
| `float` | `none` | 元素不浮动。 |
| `clear` | `none` | 不清除浮动。 |
| `z-index` | `auto` | 堆叠顺序由文档流决定。 |
| `overflow` | `visible` | 内容超出元素框时会显示出来。 |

---

### Flexbox 布局

| 属性 (Property) | 默认值 (Default Value) | 描述 |
| :--- | :--- | :--- |
| `flex-direction` | `row` | 主轴方向为水平（从左到右）。 |
| `flex-wrap` | `nowrap` | 项目不换行。 |
| `justify-content` | `flex-start` | 项目在主轴上从起点开始排列。 |
| `align-items` | `stretch` | 项目在交叉轴上拉伸以填充容器。 |
| `align-content` | `stretch` | 当有多根轴线时，轴线在交叉轴上如何对齐。 |
| `flex-grow` | `0` | 项目不放大。 |
| `flex-shrink` | `1` | 当空间不足时，项目会缩小。 |
| `flex-basis` | `auto` | 项目的初始大小由其内容决定。 |

---

### 背景与颜色 (Background & Color)

| 属性 (Property) | 默认值 (Default Value) | 描述 |
| :--- | :--- | :--- |
| `background-color` | `transparent` | 背景色为透明。 |
| `background-image` | `none` | 没有背景图片。 |
| `background-repeat` | `repeat` | 背景图片在水平和垂直方向上平铺。 |
| `background-position` | `0% 0%` | 背景图片从左上角开始。 |
| `background-size` | `auto` | 背景图片保持原始尺寸。 |
| `opacity` | `1` | 完全不透明。 |

### 其他常用属性

| 属性 (Property) | 默认值 (Default Value) | 描述 |
| :--- | :--- | :--- |
| `visibility` | `visible` | 元素可见。 |
| `cursor` | `auto` | 浏览器根据上下文决定光标样式。 |
| `list-style-type` | `disc` | 对于 `<ul>` 列表，项目符号是实心圆。 |
| `list-style-position` | `outside` | 列表项目符号在文本块之外。 |

了解这些默认值对于编写更简洁、可预测的 CSS 非常有帮助。
