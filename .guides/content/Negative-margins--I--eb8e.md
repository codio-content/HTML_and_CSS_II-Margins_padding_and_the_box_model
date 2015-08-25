It is totally valid in CSS to use negative margins values like this `margin-top:-10px;`. But why would we do that ?
They are a few cases where negative margins are quite usefull.

## Overlapping content

Have a look at the preview on the bottom left. We would like to have the darker blue "my title" to be overlapping on top of the lighter blue blox underneath it, like this :

![](.guides/img/overlapping.png)

In order to achieve this, change line 8 which is highlighted in the top left code editor to this :

```css
margin-top:-10px;
```

Then refresh the bottom preview !

Using a negative top margin on the paragraph, we allowed him to go up and be under the darker blue block.
