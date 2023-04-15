快速总结 tailwind 的样式规则：
1. 布局类

- `container`：设置容器的最大宽度
- `mx-auto`：水平居中
- `flex`：设置为弹性布局
- `flex-row`、`flex-col`：设置弹性容器的方向
- `justify-start`、`justify-center`、`justify-end`、`justify-between`、`justify-around`：设置主轴对齐方式
- `items-start`、`items-center`、`items-end`、`items-baseline`、`items-stretch`：设置交叉轴对齐方式
- `space-x-4`、`space-y-4`：设置子元素之间的水平/垂直间距

2. 文本类

- `text-[size]`：设置文本大小
- `text-[color]`：设置文本颜色
- `font-[weight]`：设置字重
- `font-sans`、`font-serif`、`font-mono`：设置字体族
- `text-center`、`text-left`、`text-right`、`text-justify`：设置文本对齐方式
- `break-words`、`truncate`、`overflow-ellipsis`、`overflow-hidden`：设置文本溢出方式

3. 边框类

- `border`、`border-[color]`、`border-[width]`、`border-[style]`：设置边框样式
- `rounded`、`rounded-[size]`、`rounded-[position]`、`rounded-[position]-[size]`：设置圆角
- `border-solid`、`border-dashed`、`border-dotted`、`border-double`：设置边框样式

4. 背景类

- `bg-[color]`：设置背景颜色
- `bg-[image]`：设置背景图片
- `bg-cover`、`bg-contain`、`bg-center`、`bg-left`、`bg-right`、`bg-top`、`bg-bottom`：设置背景图片的属性

5. 表格类

- `table`、`table-auto`、`table-fixed`：设置表格布局方式
- `table-caption`、`table-cell`、`table-row`、`table-header-group`、`table-footer-group`：设置表格元素的类型
- `table-border`、`table-divide`、`table-divider`、`table-collapse`：设置表格边框和分隔线的样式 以上只是 tailwind 的一部分样式规则，更多样式规则可以参考官方文档。