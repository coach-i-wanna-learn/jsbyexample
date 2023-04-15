console.table(Array.from(chunksInfoMap.entries()).map(([key,val]) => [key.split(' ')[0], [...val.modules].map(val => val.request.slice(93)).toString(), [...val.chunks].map(val => val.name)]))
undefined
(13) [Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3), Array(3)]
- 初始状态
┌─────────┬──────────────────┬──────────────────────────────────────────────────────────────────────────┬─────────────────────────────────────┐
│ (index) │        0         │                                    1                                     │                  2                  │
├─────────┼──────────────────┼──────────────────────────────────────────────────────────────────────────┼─────────────────────────────────────┤
│    0    │    'default'     │                              'src/index.js'                              │             [ 'main' ]              │
│    1    │    'default'     │ 'src/c.js,src/d.js,src/f.js,src/node_modules/x.js,src/node_modules/z.js' │            [ 'async-c' ]            │
│    2    │    'default'     │ 'src/b.js,src/d.js,src/f.js,src/node_modules/x.js,src/node_modules/y.js' │            [ 'async-b' ]            │
│    3    │    'default'     │ 'src/a.js,src/d.js,src/e.js,src/node_modules/x.js,src/node_modules/y.js' │            [ 'async-a' ]            │
│    4    │    'default'     │                     'src/d.js,src/node_modules/x.js'                     │ [ 'async-a', 'async-b', 'async-c' ] │
│    5    │    'default'     │          'src/d.js,src/node_modules/x.js,src/node_modules/y.js'          │      [ 'async-a', 'async-b' ]       │
│    6    │    'default'     │                                'src/f.js'                                │ [ 'async-b', 'async-c', 'async-g' ] │
│    7    │    'default'     │                           'src/f.js,src/g.js'                            │            [ 'async-g' ]            │
│    8    │ 'defaultVendors' │                         'src/node_modules/x.js'                          │ [ 'async-a', 'async-b', 'async-c' ] │
│    9    │ 'defaultVendors' │              'src/node_modules/x.js,src/node_modules/y.js'               │      [ 'async-a', 'async-b' ]       │
│   10    │ 'defaultVendors' │              'src/node_modules/x.js,src/node_modules/z.js'               │            [ 'async-c' ]            │
│   11    │ 'defaultVendors' │              'src/node_modules/x.js,src/node_modules/y.js'               │            [ 'async-b' ]            │
│   12    │ 'defaultVendors' │              'src/node_modules/x.js,src/node_modules/y.js'               │            [ 'async-a' ]            │
└─────────┴──────────────────┴──────────────────────────────────────────────────────────────────────────┴─────────────────────────────────────┘
- 拆分 'src/node_modules/x.js' 
┌─────────┬──────────────────┬────────────────────────────────────────────────────┬─────────────────────────────────────┐
│ (index) │        0         │                         1                          │                  2                  │
├─────────┼──────────────────┼────────────────────────────────────────────────────┼─────────────────────────────────────┤
│    0    │    'default'     │                   'src/index.js'                   │             [ 'main' ]              │
│    1    │    'default'     │ 'src/c.js,src/d.js,src/f.js,src/node_modules/z.js' │            [ 'async-c' ]            │
│    2    │    'default'     │ 'src/b.js,src/d.js,src/f.js,src/node_modules/y.js' │            [ 'async-b' ]            │
│    3    │    'default'     │ 'src/a.js,src/d.js,src/e.js,src/node_modules/y.js' │            [ 'async-a' ]            │
│    4    │    'default'     │                     'src/d.js'                     │ [ 'async-a', 'async-b', 'async-c' ] │
│    5    │    'default'     │          'src/d.js,src/node_modules/y.js'          │      [ 'async-a', 'async-b' ]       │
│    6    │    'default'     │                     'src/f.js'                     │ [ 'async-b', 'async-c', 'async-g' ] │
│    7    │    'default'     │                'src/f.js,src/g.js'                 │            [ 'async-g' ]            │
│    8    │ 'defaultVendors' │              'src/node_modules/y.js'               │      [ 'async-a', 'async-b' ]       │
│    9    │ 'defaultVendors' │              'src/node_modules/z.js'               │            [ 'async-c' ]            │
│   10    │ 'defaultVendors' │              'src/node_modules/y.js'               │            [ 'async-b' ]            │
│   11    │ 'defaultVendors' │              'src/node_modules/y.js'               │            [ 'async-a' ]            │
└─────────┴──────────────────┴────────────────────────────────────────────────────┴─────────────────────────────────────┘
- 拆分 'src/node_modules/y.js'  
┌─────────┬──────────────────┬────────────────────────────────────────────────────┬─────────────────────────────────────┐
│ (index) │        0         │                         1                          │                  2                  │
├─────────┼──────────────────┼────────────────────────────────────────────────────┼─────────────────────────────────────┤
│    0    │    'default'     │                   'src/index.js'                   │             [ 'main' ]              │
│    1    │    'default'     │ 'src/c.js,src/d.js,src/f.js,src/node_modules/z.js' │            [ 'async-c' ]            │
│    2    │    'default'     │            'src/b.js,src/d.js,src/f.js'            │            [ 'async-b' ]            │
│    3    │    'default'     │            'src/a.js,src/d.js,src/e.js'            │            [ 'async-a' ]            │
│    4    │    'default'     │                     'src/d.js'                     │ [ 'async-a', 'async-b', 'async-c' ] │
│    5    │    'default'     │                     'src/d.js'                     │      [ 'async-a', 'async-b' ]       │
│    6    │    'default'     │                     'src/f.js'                     │ [ 'async-b', 'async-c', 'async-g' ] │
│    7    │    'default'     │                'src/f.js,src/g.js'                 │            [ 'async-g' ]            │
│    8    │ 'defaultVendors' │              'src/node_modules/z.js'               │            [ 'async-c' ]            │
└─────────┴──────────────────┴────────────────────────────────────────────────────┴─────────────────────────────────────┘
- 拆分 'src/node_modules/z.js' 
┌─────────┬───────────┬──────────────────────────────┬─────────────────────────────────────┐
│ (index) │     0     │              1               │                  2                  │
├─────────┼───────────┼──────────────────────────────┼─────────────────────────────────────┤
│    0    │ 'default' │        'src/index.js'        │             [ 'main' ]              │
│    1    │ 'default' │ 'src/c.js,src/d.js,src/f.js' │            [ 'async-c' ]            │
│    2    │ 'default' │ 'src/b.js,src/d.js,src/f.js' │            [ 'async-b' ]            │
│    3    │ 'default' │ 'src/a.js,src/d.js,src/e.js' │            [ 'async-a' ]            │
│    4    │ 'default' │          'src/d.js'          │ [ 'async-a', 'async-b', 'async-c' ] │
│    5    │ 'default' │          'src/d.js'          │      [ 'async-a', 'async-b' ]       │
│    6    │ 'default' │          'src/f.js'          │ [ 'async-b', 'async-c', 'async-g' ] │
│    7    │ 'default' │     'src/f.js,src/g.js'      │            [ 'async-g' ]            │
└─────────┴───────────┴──────────────────────────────┴─────────────────────────────────────┘
- 拆分 'src/f.js'
┌─────────┬───────────┬──────────────────────────────┬─────────────────────────────────────┐
│ (index) │     0     │              1               │                  2                  │
├─────────┼───────────┼──────────────────────────────┼─────────────────────────────────────┤
│    0    │ 'default' │        'src/index.js'        │             [ 'main' ]              │
│    1    │ 'default' │     'src/c.js,src/d.js'      │            [ 'async-c' ]            │
│    2    │ 'default' │     'src/b.js,src/d.js'      │            [ 'async-b' ]            │
│    3    │ 'default' │ 'src/a.js,src/d.js,src/e.js' │            [ 'async-a' ]            │
│    4    │ 'default' │          'src/d.js'          │ [ 'async-a', 'async-b', 'async-c' ] │
│    5    │ 'default' │          'src/d.js'          │      [ 'async-a', 'async-b' ]       │
│    6    │ 'default' │          'src/g.js'          │            [ 'async-g' ]            │
└─────────┴───────────┴──────────────────────────────┴─────────────────────────────────────┘
- 拆分 'src/d.js'
┌─────────┬───────────┬─────────────────────┬───────────────┐
│ (index) │     0     │          1          │       2       │
├─────────┼───────────┼─────────────────────┼───────────────┤
│    0    │ 'default' │   'src/index.js'    │  [ 'main' ]   │
│    1    │ 'default' │     'src/c.js'      │ [ 'async-c' ] │
│    2    │ 'default' │     'src/b.js'      │ [ 'async-b' ] │
│    3    │ 'default' │ 'src/a.js,src/e.js' │ [ 'async-a' ] │
│    4    │ 'default' │     'src/g.js'      │ [ 'async-g' ] │
└─────────┴───────────┴─────────────────────┴───────────────┘
- 拆分 src/a.js,src/e.js
┌─────────┬───────────┬────────────────┬───────────────┐
│ (index) │     0     │       1        │       2       │
├─────────┼───────────┼────────────────┼───────────────┤
│    0    │ 'default' │ 'src/index.js' │  [ 'main' ]   │
│    1    │ 'default' │   'src/c.js'   │ [ 'async-c' ] │
│    2    │ 'default' │   'src/b.js'   │ [ 'async-b' ] │
│    3    │ 'default' │   'src/g.js'   │ [ 'async-g' ] │
└─────────┴───────────┴────────────────┴───────────────┘
- 拆分 src/index.js
┌─────────┬───────────┬────────────┬───────────────┐
│ (index) │     0     │     1      │       2       │
├─────────┼───────────┼────────────┼───────────────┤
│    0    │ 'default' │ 'src/c.js' │ [ 'async-c' ] │
│    1    │ 'default' │ 'src/b.js' │ [ 'async-b' ] │
│    2    │ 'default' │ 'src/g.js' │ [ 'async-g' ] │
└─────────┴───────────┴────────────┴───────────────┘
- 拆分 'src/g.js'  
┌─────────┬───────────┬────────────┬───────────────┐
│ (index) │     0     │     1      │       2       │
├─────────┼───────────┼────────────┼───────────────┤
│    0    │ 'default' │ 'src/c.js' │ [ 'async-c' ] │
│    1    │ 'default' │ 'src/b.js' │ [ 'async-b' ] │
└─────────┴───────────┴────────────┴───────────────┘
- 拆分 'src/c.js'
┌─────────┬───────────┬────────────┬───────────────┐
│ (index) │     0     │     1      │       2       │
├─────────┼───────────┼────────────┼───────────────┤
│    0    │ 'default' │ 'src/b.js' │ [ 'async-b' ] │
└─────────┴───────────┴────────────┴───────────────┘
- 拆分 'src/b.js'
┌─────────┐
│ (index) │
├─────────┤
└─────────┘