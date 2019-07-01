# easySlider
Slider studenti CFP San Zeno

## Getting Started
### Step 1
Per integrare lo slider prima di tutto realizzare una lista di immagini raggruppandolo in un tag strutturale 
```
<div id="..">
  <ul>
    <li><img /></li>
    {...}
  </ul>
</div>
```
### Step 2
Collegare il file js
```
<script src="slider.min.js"></script>
```
### Step 3
Inizializzare lo script 
```
<script>
   var slider = new _easySlider("[inserire id]")
</script>
```
## Personalizzare il tempo
Il tempo di cambio slide di default è 8 secondi (8000ms).
Per modificarlo passare come secondo attributo un oggetto.duration.
```
<script>
   var slider = new _easySlider("[inserire id]", {duration: 5000})
</script>
```

