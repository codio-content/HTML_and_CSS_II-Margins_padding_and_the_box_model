We already previously saw a way to center text, it's `text-align:center;` but this will center text inside its "box". We didn't see yet how to center a box inside its parent.

If you look at the left preview in the bottom left hand pane, you will see two boxes at the top. The first one is an `h1` and the second one is a `p`. Both have a class `center` and the `p` has a class `emphasized` which makes it different from the other paragraphs underneath it.

Now, if you look at the code of `index.html` in the top left hand pane, you will see the style for the center class and the emphasized class as well as the default style for the `body`, `h1` and `p`.

You may think we achieved the desired result because the text is actually centered. But it is not what we want for this example, we don't want the orange and white boxes to stretch all the way to the sides of the page with the text centered in it. What we want is the boxes to "fit" the text but still be centered.

Let's try to achieve this! First we have to define a width for the boxes so they won't stretch all the way. On the line 22 of the `index.html` in the top left hand pane, add `width:400px;` inside the `.center` selector.

Now, refresh the bottom view. Ok we have the boxes not taking all the space, which is what we want, and the text is centered inside those boxes, as expected from the `text-align:center;` but the boxes are aligned on the left.

How do we center these boxes horizontally so they are always in the middle ? We could try to give them a left margin which is big enough so that it "seems" they are in the middle ... But what happens when the width of the window changes ? Or when the size of the content inside changes ? Don't forget that as the web developer you are not always in control on what content will be put inside your pages.

Let's use centering with margins. Add in `index.html`, just underneath the `width:400px;`, inside the `.center` selector, the following line : `margin:10px auto;` and then refresh the bottom preview. We have the desired result !

Let's analyse this line : `margin:10px auto;`. We know from the definitions of margins that this will give to these elements a vertical margin of "10px" and a horizontal margin of "auto". In this context "auto" means that the horizontal margin will automatically fill all the available space of its container. Try to resize horizontally the preview window and you will see that it always stay centered.

If we visualize the margins in this case, it would look like this :

![](.guides/img/centering-with-margins.png)

As you see with the red arrows, the margin on the left and right stretch to fill all the available space.

{Check It!|assessment}(test-2685391133)

|||guidance

Solution :

```css
  .center {
    text-align:center;
    width:400px;
    margin:10px auto;
  }
```
|||