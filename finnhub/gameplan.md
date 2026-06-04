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

```js
fetch(`...`) // 1. `fetch` the url first
  .then(response => response.json()) // 2. get response object => calls .json() to on it
  .then(data => {
    // ...
    // 3. the parsed object is now a struct
    //  i'll get access fields with data.fieldName
    document.getElementById("open-price").textContent = data.o;
  })
```

# to know
- [x] `fetch` -> `.then` chains
- [x] reading API documents and seeing what is necessary
- [x] `document.getElementById()`
- [x] basic HTML
- [x] `setInterval` or `clearInterval`

## DOM elements
  - [x] basics
    - `document` references the entire webpage
    - `.GetElementById("...")` method searches page for element wiht that id, returns as object
    - `.value` is for inputs, shows what the user typed
    - `.textContent` reads/overwrites text elements
  
  - [ ] creating & appending DOM elments 
  - `.createElement`
        creates a new **HTML element**
```js
        const newDiv = document.createElement("div");
```
  
  - `.append`
        this will add anything you give it
```js
        const div = document.getElementById("myDiv");
        const h3 = document.createElement("h3");
        // 1st append the h3 to the div
        // 2nd append the h3 text content to the page
        div.append(h3);
        h3.append("Hello! I am an appended h3");
```


## setting an interval
```js
let cd = setInterval(CoolDown, 1000)
                // function, delay (t)
```
you can add additional arguments after
