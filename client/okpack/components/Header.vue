<template>
<div>
    <nav class="navbar navbar-dark bg-danger text-light">
    <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <h5>OK YAZILIM ADMIN PANEL</h5>
    </div>
    </nav>
    <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-danger p-4 d-flex flex-column w-25">
            <a href="#" class="d-inline-block mb-3">Kategoriler</a>
            <a href="#" class="d-inline-block mb-3">Ürünler</a>
            <a href="#" class="d-inline-block mb-3">Haberler</a>
            <a href="#" class="d-inline-block mb-3">Slaytlar</a>
            <a href="#" class="d-inline-block mb-3">Sabit Sayfalar</a>
    </div>
    </div>
</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
 a {
     color: white;
     text-decoration: none;
 }
 a:hover {
     text-decoration: none;
     background: white;
     color: red;
     border: 1px solid white;
     padding: 5px;
     border-radius: 5px;
 }
 .wh{
     width: 300px;
     height: 900px;
 }
</style>