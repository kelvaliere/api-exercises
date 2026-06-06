# gameplan:
- three text fields:
  - min
  - sec
  - symbol/ticker
- table:
  - open | high | low | current | previous close | time

# getting the prices from finnhub
- **make sure to fetch the api**
  https://api.finnhub.io/api/v1/quote?symbol=${symbol}&token=d8761mpr01ql0hskeai0d8761mpr01ql0hskeaig

make an `data` object

- open price = data.o
- high price = data.h
- low price = data.l
- current price = data.c
- previous close price = data.pc
- time = data.t

```json
{
  "c": 310.86, // current
  "d": -4.34,
  "dp": -1.3769,
  "h": 316.94, // high
  "l": 308.85, // low
  "o": 313.8425, // open
  "pc": 315.2, // prev close
  "t": 1780516124 // time
}
```

1. make variables so they are usable in the function
  - symbol
  - sec
  - write a function for button's `onclick` to work
  - set an interval afterwards
