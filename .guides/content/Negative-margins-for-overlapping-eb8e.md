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

Using a negative top margin on the paragraph, we allowed him to move up and be under the darker blue block.

## How does it work ?

At the begining we have a margin of 10px around the light blue paragraph. If we visualize the margins, it looks like this :

![](.guides/img/with-margin.png)

If we put the margin top to 0px, the two elements will touch but not overlap, like this :

![](.guides/img/null-margin.png)

Now if we put the negative margins of -10px, we have the desired result :

![](.guides/img/negative-margin.png)

If you look at the red arrows, you see that the margins actually go "inside" the element. and thus the top dark blue title is aligned with this "inside" margins. We have added a red line to make this more obvious.That's what happen when you give a negative margin to an element, it allows other to come "inside".
