## Multi column list

Another use of negative margins is if you want to have multi columns lists, like this :

![](.guides/img/list-margin.png)

Have a look at the preview in the bottom left hand pane, it doesn't look like this yet !

It looks more like "stairs" for now. What we did, in order to move the 3rd and 4th items to the left is to give them a left margin of 120px (using the class `col2`). For the 5th and 6th items we have twice this with a left margin of 240px (using the class `col3`).

The problem is that by default, elements are not authorized to overlap each others.
To change this we need to add negative top margins to the 3rd and 5th li's. So they will go up, and the others will follow.
We defined for the `li` selector, a line height of 1em which is simply : "The height of one character in the current font" ..

Now we have to make the 3rd and 5th list item go up "2 lines" so we have to add them a negative margin of "2 lines" which is : `margin-top:-2em;`. We have already added a class called "top" on the 3rd and 5th items.
Go ahead and add the style `margin-top:-2em;` to the .top selector on line 10 then refresh the preview at bottom!

Nice ! Exactly what we wanted ...

{Check It!|assessment}(test-3205313735)

|||guidance

Solution :

```css
      .top { margin-top:-2em; }
```
|||

## How does it work ?

Let's add some borders to visualize what happens initially :

![](.guides/img/with-borders.png)

We see that because we added the left margins, our list items shifted left.
Nevertheless they don't go up as the other li's are there already and no overlapping is allowed by default.

When we add the class "top" to the 3rd li, it goes up and all the li's that were underneath as well. Like this :

![](.guides/img/first-up.png)

Then we add the class "top" on the 5th li as well and it will also shift up along with the last one.

![](.guides/img/second-up.png)

Now they are all alined, and we have our multi columnt list !