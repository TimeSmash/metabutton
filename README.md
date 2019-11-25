# metabutton
A simple React component that will `console.log` the props/state of its parent component. Use this to selectively console.log a component's state or props versus having them all print to the page at once. This can also be used as an alternative to `debugger` in some scenarios.

## Overview

Implement MetaButton in any components you wish to know the props or state of with the simple click of a button. MetaButton can be used to print either props, state, or both, depending on the props you give it. It also has built-in functionality to detect when certain props are missing (described below). 

## Props

The following props MetaButton can receive are:

`pCompName` : A <b>String.</b> The name of the component you want to look at the props/state for. You can either choose to type in your component's name manually, or use `this.constructor.name` for class components. This is a <b>mandatory</b> prop--MetaButton won't function without it.

`pCompProps` : An <b>Object.</b> The props of the component you want to analyze. It can remain undefined if `pCompState` is given instead. In the event both pCompProps and pCompState are given, the component's props will always be printed first to the console.

`pCompState` : An <b>Object.</b> The state of the component you want to analyze. It can remain undefined if `pCompProps` is given instead. In the event both pCompState and pCompProps are given, the component's props will always be printed first to the console.

## Errors

Errors are given in the form of alerts, and will return nothing to the console. They will fire in one of the following scenarios:

1. `pCompName` was not given as a prop to MetaButton. For proper console.log messages and button display, this must be given as a prop.

2. Neither `pCompProps` and `pCompState` were given as props to MetaButton. If neither state nor props is given to MetaButton, it cannot report anything.


