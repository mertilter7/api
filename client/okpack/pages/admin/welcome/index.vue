<template>
  <div>
  <Header />
  <div class="d-flex justify-content-center mt-3">
    <div class="row">
      <div class="bg-secondary text-white p-4 w-full rounded shadow mb-5">
        <h5 class="fw-bold">Site Yönetim Paneli</h5>
        <p>Sitenize ait içeriklerinizi aşağıdaki menülerden yönetebilirsiniz.</p>
      </div>
      <div class="col-6">
          <div class="border shadow p-3 d-block mb-3 rounded">
            <a href="#">
            <h5 class="fw-bold">Kategoriler</h5>
            <p>Ürün veya hizmetlerinize ait kategoriler</p>
            </a>
          </div>
             <div class="border shadow p-3 d-block mb-3 rounded">
            <h5 class="fw-bold">Referanslar</h5>
            <p>Firmanızın referansları</p>
          </div>
             <div class="border shadow p-3 d-block mb-3 rounded">
            <h5 class="fw-bold">Slaytlar</h5>
            <p>Anasayfa geçişli büyük fotoğraflar</p>
          </div>
      </div>
      <div class="col-6">
          <div class="border shadow p-3 d-block mb-3 rounded">
            <h5 class="fw-bold">Ürünler / Hizmetler</h5>
            <p>Tanıtmak istediğiniz ürün veya hizmetleriniz</p>
          </div>
             <div class="border shadow p-3 d-block mb-3 rounded">
            <h5 class="fw-bold">Sabit Sayfalar</h5>
            <p>Hoşgeldiniz ve hakkımızda iletişim sayfaları</p>
          </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    components : {
        Header,
    }
}
</script>

<style>

</style>