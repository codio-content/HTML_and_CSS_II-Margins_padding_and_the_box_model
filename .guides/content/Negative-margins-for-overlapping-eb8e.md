It is totally valid in CSS to use negative margins values like this `margin-top:-10px;`. But why would we do that ?
They are a few cases where negative margins are quite useful.

## Overlapping content

Have a look at the preview in the bottom left hand pane. We would like to have the darker blue box "my title" to be overlapping on top with the lighter blue blox underneath it, like this :

![](.guides/img/overlapping.png)

In order to achieve this, change the line 8 of example1.html, which is highlighted in the top left hand pane, to this :

```css
margin-top:-10px;
```

Then refresh the bottom preview !

Using a negative top margin on the paragraph, we allowed him to move up and be under the darker blue block.

{Check It!|assessment}(test-4202137766)

|||guidance

Solution :

```css
    p {
      margin-top:-10px;
    }
```
|||

## How does it work ?

At the begining we have a margin of 10px around the light blue paragraph. If we visualize the margins, it looks like this :

![](.guides/img/with-margin.png)

If we put the margin top to 0px, the two elements will touch but not overlap, like this :

![](.guides/img/null-margin.png)

Now if we put the negative margins of -10px, we have the desired result :

![](.guides/img/negative-margin.png)

If you look at the red arrows, you see that the margins actually go "inside" the element. and thus the top dark blue title is aligned with this "inside" margins. We have added a red line to make this more obvious. That's what happen when you give a negative margin to an element, it allows other elements to come "inside".



