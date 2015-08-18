Did you notice in the previous sections that when you give a width and height to an element it's applying this height to the content area, and thus if the content has some padding and a border it might actually end up taking a lot more space.

On the left you can see a first example. We set the box to have a width of 200px and a height of 100px but in the end, it's occupying a totally different space on the screen, it's occupying a width of 200+20+2 = 222px and a height of 100+20+2 = 122px.

How do we do if we want to have a box that's *really* occupying 200px in width and 100px in height ? We have to do some calculations : 

- For our total width to be 200px we need to substract the size of our borders and our padding, so 200-20-2 = 178px for our content width.

- For our total height to be 100px, again we need to substract the borders and paddings, so 100-20-2 = 78px for our content height.

It doesn't seem like a real problem you will tell me. Just some math and we have it ?

But what if we have a look at [this example](close_all ; open_file box-sizing/example2.html panel=0 ; open_preview box-sizing/example2.html panel=1)

We want both boxes to have a width of 50% EXACTLY. If the boxes are just a tiny bit wider the second box will jump underneath the first one and break our layout. But we also want to have a constant padding of 20px.

So how do it ? After some trials, we found out that putting a width of about 40% seems to do the trick !? But does it ? Try to resize your browser window smaller and see what happens ... The second box jumps down if the window becomes to small ..

There is really now way to do it ...

## Introducing box-sizing !

What we have seen is the historical and default way for browsers to handle the width and height.

But because it's impossible to achieve some layouts with it and because with this behaviour, just changing a border or a padding might break a whole website's layout, another way that is more "natural" and doesn't need any complex calculations and guessing was introduced...

The property you have to change on an element is called `box-sizing`. The default mode that we have been using until know (the one which is used when nothing is specified) is called `content-box` as the size only applies to the content.

The one we will be using now is called `border-box` as the size applies to the content + padding + border.

Let's have a look at [another example](close_all ; open_file box-sizing/example3.html panel=0 ; open_preview box-sizing/example3.html panel=1) to understand it.

We have to boxes, the first one with `box-sizing:content-box` (the default) and the second one with `box-sizing:border-box;`, you see that they have very different dimensions in the end. A red line is drawn underneath to show what the `width` property applies to in both cases.


Now let's try to solve our problem with the two boxes, one on the left, one on the right.
Using `box-sizing:border-box;` it becomes quite easy. Here is [the solution](close_all ; open_file box-sizing/example4.html panel=0 ; open_preview box-sizing/example4.html panel=1).

If you look at the style on the top of `example4.html` you will notice that we have put a `box-sizing:border-box;` as explained. And we have put a width of `48%` so we keep a little separation between the boxes. If you resize the browser window or change the padding to 30px (try it !) .. The boxes will always take 48% of the width, padding and borders included ! How much more convenient and easy it is :)

By the way, there is nothing magical in the fact that one box is staying on the left and the other one on the right, we just added some other style on it, but it's not displayed here. We will see in the next unit how to do this !









