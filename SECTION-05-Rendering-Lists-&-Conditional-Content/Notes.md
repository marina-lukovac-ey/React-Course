### SECTION 5: RENDERING LISTS & CONDITIONAL CONTENT:

### ExpenseDate is a component that should be separate...

> It only should be

### Button Cancel i Button Delete should be separate components

### Separate folder: for

- Reusables
- Containers

### Separate file:

- Service
- useCallback(); ??? Momir
- newHooks ???

### Key prop is a solution to the React's behaviour of updating the state of array items, it always adds new element to the end and rerenders whole list in order to match list's order ==> PERFORMANCE ISSUES <== Should be unique values

### Max's approach: break condition ? true : false

1. split into two separate blocks jsx

```
{filteredExpenses.length === 0 && (
          <p>There is no expenses for the current year.</p>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.price}
              date={expense.date}
            />
          ))}
```

2. Asign jsx code to a variable...
   > And moved that to another component... :)
   > there is possible to return separatelly

```
  let expensesContent = <p>There is no expenses for the current year.</p>;
  if (filteredExpenses.length) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.price}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearSelection={yearUpdated} selected={pickedYear} />
        {expensesContent}
      </Card>
```

## WORKING WITH CHARTS AND CHARTBAR

- Every data point will be rendered... (for every month)
-

## ADDING DYNAMIC STYLES:

```
style={{backgroundColor: value}};
style={{'background-color': value}};
```

Promisi- u job queue... Ide pre Message queue-a..
sta se sve prosledjuje, i sta ima prednost???
Redosled???
reject(); se ponasa od Promise.reject() ...

### GRANULACIJA...

- CONDICIONALNI PRIKAZ...
- Razbijanje na logicke celine...
- Ima smisla iz pogleda sire slike

### COMPOZICIJA

- REACT RENDEROVANJE...
- MEMIZATION>>> sta se renderuje, sta ide u kes, itd...
- +string ==> number
