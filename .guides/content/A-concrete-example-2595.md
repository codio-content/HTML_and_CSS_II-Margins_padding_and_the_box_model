The box model is a term used to describe the fact that in HTML, all elements can be considered as boxes. Boxes that are wrapping any content in the page.

They are made of 4 parts :

1. The *content*: the area that will actually hold your content.
1. The *padding*: the distance between your content and the inner edge of its border.
1. The *border*: the style and size of the border around the box.
1. The *margin*: the distance between the outer edge of the border and other content around.

### A concrete example 

Let's have a look at the HTML and CSS in the file concrete.html in the left hand pane.

The HTML is composed of a single `<p>` and the style displayed contains the four parts described above. The result would look like this :

![](.guides/img/real.png)

Now, if we add labels on the four different parts:

![](.guides/img/real-with-annotations.png)

We still don't see the boundaries between the parts but we can already notice :
1. The background-color applies to the content and the padding. 
1. The border has its own color
1. The margin doesn't have any color. It has the white color of the body.

If we add the boundaries:

![](.guides/img/transition.png)

Now, we can really see where are the different parts.

If we generalize it to a model:

![](.guides/img/model.png)

With again the four different parts described above : 

1. The *content*: the area that will actually hold your content (in blue).
1. The *padding*: the distance between your content and the inner edge of its border (in green).
1. The *border*: the style and size of the border around the box (in yellow).
1. The *margin*: the distance between the outer edge of the border and other content around (in orange).

Every HTML element can be seen as such a box.

Let's go to the next section to play with it !





