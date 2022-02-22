# tree2readme
## 功能介绍
> 将文件夹目录转为readme.md目录

假设有如下文件夹目录
```
情人节
    components
        IntroductionDialog
            DialogContent.vue
            index.vue
        RecordDialog
            DialogContent.vue
            Index.vue
        SelectFriend
            Index.vue
        SpringFestivalSpecialDialog
    index.html
```

执行后会自动生成readme.md文件，并将文件目录写入到readme.md

最后你讲的到一个有下面内容的readme.md

```
情人节
├── components
|   ├── IntroductionDialog
|   |   ├── DialogContent.vue
|   |   └── index.vue
|   ├── RecordDialog
|   |   ├── DialogContent.vue
|   |   └── Index.vue
|   ├── SelectFriend
|   |   └── Index.vue
|   └──  SpringFestivalSpecialDialog
└── index.html
```

## 使用介绍

1. `npm i tree2readme -g`
2. `cd /test/dir`
3. 输入 `tree2readme start`

## 参数
1. `--exclude <regexp>`, 排除不需要在readme中列出的文件类型，默认排除图片
   1. `tree2readme start --exclude /\.md$/` 排除md文件
