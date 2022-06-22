## 第十八天

使用 vim 调用 vconsole 的命令

## commands 字段

使用 vim 的配置替代 vscode 的快捷键

如下：

```
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before": ["<Leader>", "f", "d"],
    "commands": ["editor.action.formatDocument"]
  }
],
```

## 功能点

格式化代码：空格+f+d

重命名: 空格+r+e

折叠代码: 空格+[
