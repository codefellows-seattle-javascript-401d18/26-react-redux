![cf](https://i.imgur.com/7v5ASc8.png) 27: Combining Reducers
======

# Lab27-Isaiah

### Completed Following Featured Tasks:

Work in progress

### Documentation:
This lab to provide a better understanding of how react and redux operate together.

##### The following is the assignment as presented:

```md
![cf](https://i.imgur.com/7v5ASc8.png) 27: Combining Reducers
======

## Submission Instructions
* continue working on the fork you created from lab 26
* open a **new branch** for today's assignment
* upon completion, create a **new pull request** in github
* submit a link to your PR in canvas

## Learning Objectives
* students will be able to combine reducers to simplify the management of complex application states
* students will continue to work with the fundamental principles of redux to gain a better understanding on state management

## Requirements
#### Configuration  
* `README.md`
* `.babelrc`
* `.gitignore`
* `package.json`
* `webpack.config.js`
* `src/**`
* `src/main.js`
* `src/style`
* `src/style/main.scss`

#### Feature Tasks
##### Expense
* in this app, an expense should contain *(at least)* the following properties
  * `id` - a unique identifier
  * `timestamp` - a date from when the category was created
  * `name` - a string that is the name of the category
  * `categoryId` - an id that corresponds to an existing category
  * `price` - a number that is the total amount of $ in the category

##### Redux
###### app reducer
* export a reducer that holds the entire app state from `reducer/index.js`
* create a reducer that will combine your `categories` reducer and `expenses` reducer

###### expenses reducer
* create a expense reducer in your your reducer directory
* this reducer should support the following interactions
  * `CATEGORY_CREATE` - create a category array to store expense objects
  * `CATEGORY_DELETE` - delete the whole category key/value pair from the expense object
  * `EXPENSE_CREATE` - store an expense
  * `EXPENSE_UPDATE` - update an existing expense
  * `EXPENSE_DELETE` - delete an existing expense
* if you need others feel free to add them

###### action creators
* you should create an action creator for each interaction supported by your expenses reducer

###### store
* in `lib/store.js` export a function that will return a redux store from your app reducer

##### Components
* create the following component and structure it according to the diagram below:

App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [Category Item] -- list of Category items
           CategoryForm  -- for updating categories
           ExpenseForm -- for creating expenses
           [ExpenseItem]  -- list of expense items
              ExpenseForm -- for updating an expense


###### Update the CategoryItem Component
* should keep all of the features described in lab-26
* add an `ExpenseForm` to your category item that enables the user to create expenses on your app state
* display all of the `ExpenseItem`'s belonging to the category

##### ExpenseForm Component
* should have an `onComplete` prop that will be invoked with the form state on submit
* should support an `expense` prop that will set the initial form state and update the state (using hook `componentWillReceiveProps()`)
* should have a `buttonText` prop that will configure the submit button's text

##### ExpenseItem Component
* should have a button that will delete the expense from the appState `onClick`
* should display the `name` and `price` of the component
* should display an `ExpenseForm` that will enable the user to update the expense in the app state


```
