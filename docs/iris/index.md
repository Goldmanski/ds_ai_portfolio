# Eksploracyjna analiza danych zbioru Iris

**Utworzone: 2026-08-12**

Projekt przedstawia eksploracyjną analizę danych (EDA) zbioru Iris. Analiza obejmuje charakterystykę danych, rozkłady cech oraz zależności pomiędzy nimi, z wykorzystaniem tabel i wizualizacji. Celem projektu jest lepsze zrozumienie struktury zbioru oraz identyfikacja wzorców pozwalających odróżnić poszczególne gatunki irysów.

<a href="iris_analysis.ipynb" download class="md-button md-button--primary">
    Pobierz Notebook
</a>

<a href="https://github.com/Goldmanski/ds_ai_portfolio/blob/main/docs/iris/iris_analysis.ipynb"
   class="md-button">
    Zobacz na GitHub
</a>

<iframe
    id="content"
    src="iris_report.html"
    width="100%"
    style="border:1px solid black;overflow:hidden;"
></iframe>
<script>
function resizeIframeToFitContent(iframe) {
    iframe.style.height = (iframe.contentWindow.document.documentElement.scrollHeight + 50) + "px";
    iframe.contentDocument.body.style["overflow"] = 'hidden';
}
window.addEventListener('load', function() {
    var iframe = document.getElementById('content');
    resizeIframeToFitContent(iframe);
});
window.addEventListener('resize', function() {
    var iframe = document.getElementById('content');
    resizeIframeToFitContent(iframe);
});
</script>