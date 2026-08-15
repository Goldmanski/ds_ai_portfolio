# Eksploracyjna analiza danych pasażerów Titanica

**Utworzone: 2026-08-15**

Eksploracyjna analiza danych pasażerów Titanica. Projekt skupia się na analizie czynników związanych z przeżyciem katastrofy, takich jak wiek, płeć, klasa biletu czy liczba członków rodziny na pokładzie. W ramach analizy wykorzystano statystyki opisowe, filtrowanie i grupowanie danych oraz wizualizacje pozwalające odkryć najważniejsze zależności w zbiorze.

<a href="my_project_titanic.ipynb" class="md-button md-button--primary">Pobierz Notebook</a>

<iframe
    id="content"
    src="my_project_titanic_as_report.html"
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