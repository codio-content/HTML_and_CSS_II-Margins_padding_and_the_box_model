In this section we will see margins in depth.

Margins are the spacing around a box outside of the borders. They are used to put space between elements in a page.

There are multiple ways to define margins in CSS. Here are the different ways :

## Margin with only one value

```css
margin: <width> ;
```

Where `<width>` is the size of the margin in the usual CSS units (px, %, em, ...). In this case the margin is the same on all the sides of the box.

You can see some examples on the left (The code in the top pane and the preview in the bottom pane). For the sake of clarity, we made the margin visible like this <img class="margin-swatch" src=".guides/img/margin-swatch.png"> but normally it's not possible to have a "visible" margin, they are invisible by definition, they are just space between objects.


## Margin with two values

```css
margin: <vertical> <horizontal> ;
```

Where `<vertical>` is the size of the margin on the top and bottom sides, and `<horizontal>` is the size of the margin on the left and right.

[Click here](close_all; open_file margins/two.html panel=0 ; open_preview margins/two.html panel=1 ) to see an example in the left panes.

## Margin with three values

```css
margin: <top> <horizontal> <bottom> ;
```

Where `<top>` is the size of the top margin, `<horizontal>` is the size of the margin on the left and right sides, and `<bottom>` is the size of the margin at the bottom.

[Click here](close_all; open_file margins/three.html panel=0 ; open_preview margins/three.html panel=1 ) to see an example in the left panes.

##  Margin with four values

```css
margin: <top> <right> <bottom> <left> ;
```

Where `<top>` is the size of the margin on the top, `<right>` is the size of the margin on the right side, `<bottom>` is the size of the margin on the bottom and `<left>` is the size on the left side.

[Click here](close_all; open_file margins/four.html panel=0 ; open_preview margins/four.html panel=1 ) to see an example in the left panes.

|||info

An easy way to remember the order of the four values is to think about a clock like this :

<div style="margin:0 auto;">

<img src=".guides/img/css-clocksvg.png" style="width:50%" >

</div>



It's worth noting that this order of four values will be the same for paddings and borders.

|||

## Individual margin parts

```css
margin-top: <width> ;
margin-right: <width> ;
margin-bottom: <width> ;
margin-left: <width> ;
```

If you only one to set one side at a time, you can use the above version. It's practical when you just want to set one value to a certain width and all the other to zero.

