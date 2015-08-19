In this section we will see margins in depth.

Margins are the spacing around a box outside of the borders. They are used to put space between elements.

There are multiple ways to define margins.

### One value

```css
margin: <width> ;
```

Where `<width>` is the size of the margin in the usual units. In this case the margin is the same on all the sides of the box.

You can see some code examples of it in the top left window. And a preview in the bottom left window (In this preview we made the margin visible for the sake of clarity but normally they are ALWAYS transparent).


### Two values

```css
margin: <vertical> <horizontal> ;
```

Where `<vertical>` is the size of the margin on the top and bottom sides, and `<horizontal>` is the size of the margin on the left and right.

[Click here](close_all; open_file margins/two.html panel=0 ; open_preview .guides/html/two-preview.html panel=1 ) to see an example on the left panels.

### Three values

```css
margin: <top> <horizontal> <bottom> ;
```

Where `<top>` is the size of the top margin, `<horizontal>` is the size of the margin on the left and right sides, and `<bottom>` is the size of the margin on the bottom.

[Click here](close_all; open_file margins/three.html panel=0 ; open_preview .guides/html/three-preview.html panel=1 ) to see an example on the left panels.

### Four values

```css
margin: <top> <right> <bottom> <left> ;
```

Where `<top>` is the size of the margin on the top, `<right>` is the size of the margin on the right side, `<bottom>` is the size of the margin on the bottom and `<left>` is the size on the left side.

[Click here](close_all; open_file margins/four.html panel=0 ; open_preview .guides/html/four-preview.html panel=1 ) to see an example on the left panels.

|||hint

A way to remember the order of the direction is to think about a clock which starts at `<top>`


### Individual values

```css
margin-top: <width> ;
margin-bottom: <width> ;
margin-right: <width> ;
margin-left: <width> ;
```

If you only one to set one side at a time you can use the above version. It's practical when you just want to set one value to a certain width and all the other to zero.


