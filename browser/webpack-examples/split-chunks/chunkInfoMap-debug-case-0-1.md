┌─────────┬──────────────────┬────────────────────────────────────────────────────────┬─────────────────────────────────────┐
│ (index) │        0         │                           1                            │                  2                  │
├─────────┼──────────────────┼────────────────────────────────────────────────────────┼─────────────────────────────────────┤
│    0    │    'default'     │            'src/d.js,src/node_modules/x.js'            │ [ 'async-a', 'async-b', 'async-c' ] │
│    1    │    'default'     │ 'src/d.js,src/node_modules/x.js,src/node_modules/y.js' │      [ 'async-a', 'async-b' ]       │
│    2    │    'default'     │                       'src/f.js'                       │ [ 'async-b', 'async-c', 'async-g' ] │
│    3    │ 'defaultVendors' │                'src/node_modules/x.js'                 │ [ 'async-a', 'async-b', 'async-c' ] │
│    4    │ 'defaultVendors' │     'src/node_modules/x.js,src/node_modules/y.js'      │      [ 'async-a', 'async-b' ]       │
│    5    │ 'defaultVendors' │     'src/node_modules/x.js,src/node_modules/z.js'      │            [ 'async-c' ]            │
│    6    │ 'defaultVendors' │     'src/node_modules/x.js,src/node_modules/y.js'      │            [ 'async-b' ]            │
│    7    │ 'defaultVendors' │     'src/node_modules/x.js,src/node_modules/y.js'      │            [ 'async-a' ]            │
└─────────┴──────────────────┴────────────────────────────────────────────────────────┴─────────────────────────────────────┘



┌─────────┬──────────────────┬──────────────────────────────────┬─────────────────────────────────────┐
│ (index) │        0         │                1                 │                  2                  │
├─────────┼──────────────────┼──────────────────────────────────┼─────────────────────────────────────┤
│    0    │    'default'     │            'src/d.js'            │ [ 'async-a', 'async-b', 'async-c' ] │
│    1    │    'default'     │ 'src/d.js,src/node_modules/y.js' │      [ 'async-a', 'async-b' ]       │
│    2    │    'default'     │            'src/f.js'            │ [ 'async-b', 'async-c', 'async-g' ] │
│    3    │ 'defaultVendors' │     'src/node_modules/y.js'      │      [ 'async-a', 'async-b' ]       │
│    4    │ 'defaultVendors' │     'src/node_modules/z.js'      │            [ 'async-c' ]            │
│    5    │ 'defaultVendors' │     'src/node_modules/y.js'      │            [ 'async-b' ]            │
│    6    │ 'defaultVendors' │     'src/node_modules/y.js'      │            [ 'async-a' ]            │
└─────────┴──────────────────┴──────────────────────────────────┴─────────────────────────────────────┘


┌─────────┬──────────────────┬─────────────────────────┬─────────────────────────────────────┐
│ (index) │        0         │            1            │                  2                  │
├─────────┼──────────────────┼─────────────────────────┼─────────────────────────────────────┤
│    0    │    'default'     │       'src/d.js'        │ [ 'async-a', 'async-b', 'async-c' ] │
│    1    │    'default'     │       'src/d.js'        │      [ 'async-a', 'async-b' ]       │
│    2    │    'default'     │       'src/f.js'        │ [ 'async-b', 'async-c', 'async-g' ] │
│    3    │ 'defaultVendors' │ 'src/node_modules/z.js' │            [ 'async-c' ]            │
└─────────┴──────────────────┴─────────────────────────┴─────────────────────────────────────┘

┌─────────┬───────────┬────────────┬─────────────────────────────────────┐
│ (index) │     0     │     1      │                  2                  │
├─────────┼───────────┼────────────┼─────────────────────────────────────┤
│    0    │ 'default' │ 'src/d.js' │ [ 'async-a', 'async-b', 'async-c' ] │
│    1    │ 'default' │ 'src/d.js' │      [ 'async-a', 'async-b' ]       │
│    2    │ 'default' │ 'src/f.js' │ [ 'async-b', 'async-c', 'async-g' ] │
└─────────┴───────────┴────────────┴─────────────────────────────────────┘

┌─────────┬───────────┬────────────┬─────────────────────────────────────┐
│ (index) │     0     │     1      │                  2                  │
├─────────┼───────────┼────────────┼─────────────────────────────────────┤
│    0    │ 'default' │ 'src/d.js' │ [ 'async-a', 'async-b', 'async-c' ] │
│    1    │ 'default' │ 'src/d.js' │      [ 'async-a', 'async-b' ]       │
└─────────┴───────────┴────────────┴─────────────────────────────────────┘

┌─────────┐
│ (index) │
├─────────┤
└─────────┘