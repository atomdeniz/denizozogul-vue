<template>
  <div class="privacy-policy">
    <div class="pp-container">
      <h1>Gizlilik Politikası</h1>
      <p class="subtitle">Telsizci - Amatör Radyo Sınav & Araçlar</p>

      <h2>Genel Bakış</h2>
      <p>Telsizci, Türk amatör telsiz operatörleri için geliştirilmiş bir mobil uygulamadır. Kullanıcı gizliliğine saygı göstermek temel önceliğimizdir. Uygulama hesap oluşturma gerektirmez ve çevrimdışı çalışacak şekilde tasarlanmıştır.</p>

      <h2>Toplanan Veriler</h2>
      <p>Telsizci aşağıdaki verileri yalnızca uygulama içi işlevsellik için kullanır ve hiçbir veriyi sunucularımıza göndermez:</p>
      <ul>
        <li><strong>Konum verisi:</strong> Röle istasyonları haritasında konumunuzu göstermek ve hava durumu bilgisi almak için kullanılır. Konum verisi cihazınızda kalır, saklanmaz ve paylaşılmaz.</li>
        <li><strong>Hareket sensörü verisi:</strong> Pusula özelliği için manyetik sensör verileri kullanılır. Bu veriler yalnızca anlık olarak işlenir ve kaydedilmez.</li>
      </ul>

      <h2>Yerel Olarak Saklanan Veriler</h2>
      <p>Aşağıdaki veriler yalnızca cihazınızda yerel olarak saklanır:</p>
      <ul>
        <li>Sınav çalışma ilerlemesi ve istatistikleri</li>
        <li>Uygulama ayarları (tema tercihi vb.)</li>
      </ul>
      <p>Bu veriler cihazınızdan dışarı çıkmaz. Uygulamayı sildiğinizde tüm yerel veriler kalıcı olarak silinir.</p>

      <h2>Üçüncü Taraf Hizmetler</h2>
      <p>Uygulama aşağıdaki üçüncü taraf hizmetleri kullanmaktadır:</p>
      <ul>
        <li><strong>Google Maps:</strong> Röle istasyonları haritası için kullanılır. Google'ın gizlilik politikası için: <a href="https://policies.google.com/privacy" target="_blank">policies.google.com/privacy</a></li>
        <li><strong>OpenWeatherMap:</strong> Hava durumu verileri için kullanılır. Konum bilgisi hava durumu sorgusu sırasında bu hizmete gönderilir.</li>
        <li><strong>CelesTrak:</strong> ISS (Uluslararası Uzay İstasyonu) yörünge verileri için kullanılır. Kişisel veri gönderilmez.</li>
      </ul>

      <h2>Reklam ve Takip</h2>
      <p>Telsizci reklam içermez, kullanıcı takibi yapmaz ve analitik aracı kullanmaz.</p>

      <h2>Çocukların Gizliliği</h2>
      <p>Uygulama çocuklara yönelik değildir ve bilerek çocuklardan kişisel veri toplamaz.</p>

      <h2>Değişiklikler</h2>
      <p>Bu gizlilik politikası güncellenebilir. Değişiklikler bu sayfada yayınlanacaktır.</p>

      <h2>İletişim</h2>
      <p>Sorularınız için: <a href="mailto:admin@denizozogul.com">admin@denizozogul.com</a></p>

      <p class="update-date">Son güncelleme: 21 Mart 2026</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TelsizciPrivacyPolicy",
  mounted() {
    const preloader = document.querySelector(".preloader");
    if (preloader) preloader.style.display = "none";
  },
};
</script>

<style scoped>
.privacy-policy {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.7;
  color: #1d1d1f;
  background: #fff;
  padding: 2rem 1rem;
  min-height: 100vh;
}
.pp-container {
  max-width: 720px;
  margin: 0 auto;
}
h1 {
  font-size: 2rem;
  margin-bottom: 0.25rem;
}
.subtitle {
  color: #6e6e73;
  margin-bottom: 2rem;
}
h2 {
  font-size: 1.25rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}
p, li {
  color: #424245;
  margin-bottom: 0.75rem;
}
ul {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}
.update-date {
  color: #6e6e73;
  font-size: 0.875rem;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e5e7;
}
a {
  color: #0066cc;
}
</style>
