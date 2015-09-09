This is a very interesting and common question when starting web development.

Let's start by having a look at this example :

![](.guides/img/one-background.png)

There is a gray container which is the same on both sides. On the left we used paddings and on the right we used margins.

When there is a background color and/or a border, the difference is pretty obvious. Adding padding will make the whole box grow, along with its background color and the border, while adding a margin will just add space outside of the box.

Now if we look at this example, things become less obvious :

![](.guides/img/one-transparent.png)

In this case there is no border or background color and the end result is, visually, the same. In this case it's up to you to choose the option that makes the most sense. Do you want your content box to be bigger? If so then add some padding. If you want to add space around your box then add margins.

Well this is not entirely true as there is a still a small difference between both. In order to see it, let's add more paragraphs in our example :

![](.guides/img/multi-transparent.png)

Do you see the difference ? It seems there is more space when you put padding than when you put margin, While both have a size of 20px.

How is that possible ?

It might be more clear if we put our background-color and borders back, like this :

![](.guides/img/multi-background.png)

You might start to understand what's happening : On the left side, each box has its own padding of 20px and thus it makes a space of 40px between the contents, on the right the margins are also 20px each but margins "collapse". 
So the two margins of two adjacents elements will collapse! It is by the definition of a margin, if you say that you want a margin of 20px, you mean that you want 20px of space around your box until the next box, and if the other box has the same margin, then by leaving 20px between both boxes you are satisfying both margins of 20px. This is called **margin collapse** and you can see it in more details here :

![](.guides/img/multi-background-zoom.png)

Basically margins are not part of an element, while paddings are part of an element, that's why background-color applies to padding and to margins. That's why padding is respected everytime, because it makes the element bigger, margin on the other end, is just a constraint on the distance relative to other elements around.

In general it is best to use margins to put space between elements, except if there is a background-color and/or a border. You can also combine both margins and paddings, this it totally valid.