##  26. Using a build workflow
### Why?
- Optimize code
- use Next-gen JS features **ES6 vs ES7**
- be more productive **Linting**
### How?
- Use dependency management tool **npm or yarn**
- use bundler **webpack**
- compiler (next gen js) **Babel + presets**
- Development Server

## 30. Understanding JSX
```js
    //this can be replaced by but it's used for simplicity
  class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
      </div>
    );
  }
}
```
```js
class App extends Component {
  render() {
    //even if it looks like a html code, is compiled like this
    return React.CreateElement('div',{className:'App'},React.CreateElement('h1',null, 'I\'m a React App!!!'))
  }
}
```

## 31. Restrictions on JSX
- the usage of html like attributes like *className* instead of *class*
- react render can only retrieve one root element (best practice nesting everything in a div tag)

## 32. Creating a Functional Component
- use capital first letter
- use export
- import where you want to use it
- use selfclossing tags ex: <Person/>

## 33. Components & JSX cheat sheet
Components are the **core building block of React apps.** Actually, React really is just a library for creating components in its core.

A typical React app therefore could be depicted as a **component tree** - having one root component ("App") and then an potentially infinite amount of nested child components.

Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.

**JSX is NOT HTML** but it looks a lot like it. Differences can be seen when looking closely though (for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

When creating components, you have the choice between *two different ways*:
**Functional components** (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course)=>
    
```js 
    const cmp = () => { return <div>some JSX</div> }
```
    

(using ES6 arrow functions as shown here is recommended but optional)
**class-based components** (also referred to as "containers", "smart" or "stateful" components) => 
```js
    class Cmp extends Component { render () { return <div>some JSX</div> } } 
```

We'll of course dive into the difference throughout this course, you can already note that you should use 1) as often as possible though. It's the best-practice.

