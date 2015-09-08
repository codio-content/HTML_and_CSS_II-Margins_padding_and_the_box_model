In this section we will see paddings in depth.

Paddings are the spaces from the outer edge of your content to the inner edge of the border. They are used mainly to put space around your text.

There are multiple ways of defining paddings, and they follow the same logic as margins.

## Padding with only one value

```css
padding: <width> ;
```

Where `<width>` is the size of the padding in the usual CSS units (px, %, em, ...). In this case the padding is the same on all the sides.

You can see some examples on the left (code in the top pane and preview in the bottom one). For the sake of clarity, we made the padding visible by putting the content inside it with a red background.

## Padding with two values

```css
padding: <vertical> <horizontal> ;
```

Where `<vertical>` is the size of the padding on the top and bottom sides, and `<horizontal>` is the size of the padding on the left and right sides.

[Click here](close_all; open_file paddings/two.html panel=0 ; open_preview paddings/two.html panel=1 ) to see an example in the left panes.

## Padding with three values

```css
padding: <top> <horizontal> <bottom> ;
```

Where `<top>` is the size of the top padding, `<horizontal>` is the size of the padding on the left and right sides, and `<bottom>` is the size of the padding at the bottom.

[Click here](close_all; open_file paddings/three.html panel=0 ; open_preview paddings/three.html panel=1 ) to see an example in the left panes.

##  Padding with four values

```css
padding: <top> <right> <bottom> <left> ;
```

Where `<top>` is the size of the padding on the top, `<right>` is the size of the padding on the right side, `<bottom>` is the size of the padding on the bottom and `<left>` is the size on the left side.

[Click here](close_all; open_file paddings/four.html panel=0 ; open_preview paddings/four.html panel=1 ) to see an example in the left panes.

|||info

### Reminder
An easy way to remember the order of the four values is to think about a clock like this :

<div style="margin:0 auto;">

<img src=".guides/img/css-clocksvg.png" style="width:50%" >

</div>

|||

## Individual padding parts

```css
padding-top: <width> ;
padding-right: <width> ;
padding-bottom: <width> ;
padding-left: <width> ;
```

If you only want to set one side at a time, you can use the above version. It’s practical when you just want to set one value to a certain width and all the others to zero.


