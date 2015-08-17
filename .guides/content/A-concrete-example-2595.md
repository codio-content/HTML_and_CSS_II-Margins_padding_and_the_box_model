The box model is a term used to describe the fact that in html, all elements can be considered as a boxes. Boxes that are wrapping any content in the page.

The are made of 4 parts :

1. The content
1. The padding
1. The border
1. The margin

### A concrete example 

Let's have a look at the html and css on the left.

The html is composed of a single `<p>` and the style displayed contains the 4 parts described above. The result would look like this :

![](.guides/img/real.png)

Now if we add labels on the different parts  :

![](.guides/img/real-with-annotations.png)

We still don't see the boundaries between the parts but can already notice :
1. The background-color applies to the content and the padding. 
1. The border has its own color
1. The margin doesn't have any color. It has the white color of the body.

If we add the boundaries :

![](.guides/img/transition.png)

Now we can really see where are the different parts.

If we generalize it to a model :

![](.guides/img/model.png)

With again the 4 different parts described above. Every html element can be seen as such a box.

Let's go to the next section to play with it !





