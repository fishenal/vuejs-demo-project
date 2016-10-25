#Component slideShow:

##data:

```
isShow: true,
nowIndex: 0
```

##computed
```
nextIndex,
prevIndex
```

##props:
```
slides: [
  {
    title: 'xxx',
    src: 'img'
    href: 'http://xxx'
  },
  ...
]
```

##methods:
```
goto: function (index) {} // prev next

clearInv: function () {}

runInv: function () {}
```
