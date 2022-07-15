### Styling Components:

Conditional & Dynamic Styles
Styled Components
CSS Modules

1.  Add styling if input is invalid:
2.  Setting inline styles on condition
3.  CSS Classes Dynamically
4.  Styled Components... Solution to scoped CSS values...
5.  styled.button`` // attacked template literal, JS Built-IN
6.  insert styles into literals from .css
7.  remove button from the style
8.  for pseudo selectors &:focus, &:hover, &:active
    - Just regular CSS Rules...
    - Acts like a Card Component all passed here gets passed further
    - Adds uniques class names for each styled element...
9.  created StyledComponend Above the function component... in the same file
10. set all the styles in the FormControl then just tweek the className conditionally < FormControl className = {!isValid && 'invalid'}>
11. Another way: use props to send them to the Styled Component:

    - pass to FormControl invalid={!isValid} ??? why this way
    - using props in styled:
      go to place where certain style property should be defined...
      instead of the value insert

      ```
      ${props=>props.propName ? 'styleIfTrue': "styleIfFalse'}
      ```

12. MEDIA QUERIES:

    - Add media query for the button to expand over the whole component if on mobile devices:

      ```
      @media (min-width: 768px) {
      width: auto;
      }
      ```

13. USING CSS MODULES: npx-create-react-app already supports css modules...

    - needs to be named differently Button.module.css
    - needs to be imported like:

    ```
    import styles from './Button.module.css'
    ```

    or

    ```
    import classes from './Button.module.css'
    ```

    - needs to be used: `<button className ={styles.button}>`

14. DYNAMIC STYLES WITH CSS MODULES: - if className is in two-word form: `<div className={`${styles['form-control']} ${!isValid && styles.invalid}}>` ==> bracket notation and dot - exibits behaviour: when typing, red backgroud and border stay
    until goal is added - Media queries:
    ```
    @media (min-width: 768px) {
    /_ the same like styled-components _/
    .button {
    width: auto;
    }
    }
    ```
