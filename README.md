# Angular Starter Project

Includes router and redux

Watch server
```
npm start
```

Build server
```
npm run build
```

redux usage:
Inside the component for use in databinding

```
@Store() public store


<div> {{ store.value }} <div>
```

the `store` object is available on the window (and in the console)
To test it, type the following in the console

```
store.dispatch({type: "UPDATE_TEMPLATE", payload: { text: "This is an update test"}})
```
