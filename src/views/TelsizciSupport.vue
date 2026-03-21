<template>
  <div class="support-page">
    <div class="sp-container">
      <h1>Destek</h1>
      <p class="subtitle">Telsizci — Amatör Radyo Sınav & Araçlar</p>

      <h2>Sık Sorulan Sorular</h2>

      <div class="faq">
        <h3>Uygulama internet olmadan çalışır mı?</h3>
        <p>Evet. Soru bankası, Mors çevirici, Q kodları, fonetik alfabe, pusula ve UTC saat tamamen çevrimdışı çalışır. Hava durumu, ISS takibi ve röle haritası görüntüleme için internet bağlantısı gerekir.</p>
      </div>

      <div class="faq">
        <h3>Sınav soruları güncel mi?</h3>
        <p>Soru bankası BTK'nın yayınladığı resmi soru havuzuna dayanmaktadır. Güncellemeler uygulama güncellemeleri ile birlikte gelir.</p>
      </div>

      <div class="faq">
        <h3>İlerleme verilerim kaybolur mu?</h3>
        <p>Sınav ilerlemeniz cihazınızda yerel olarak saklanır. Uygulamayı silmeniz durumunda verileriniz silinir. Uygulama güncellemeleri verilerinizi etkilemez.</p>
      </div>

      <div class="faq">
        <h3>Pusula doğru göstermiyor, ne yapmalıyım?</h3>
        <p>Telefonunuzu 8 şeklinde birkaç kez çevirerek manyetik sensörü kalibre edin. Metal veya elektronik cihazlardan uzak durun.</p>
      </div>

      <h2>İletişim</h2>
      <p>Sorun bildirmek veya öneride bulunmak için bize e-posta gönderin:</p>
      <p><a href="mailto:admin@denizozogul.com">admin@denizozogul.com</a></p>

      <p class="update-date">Son güncelleme: 21 Mart 2026</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TelsizciSupport",
  mounted() {
    const preloader = document.querySelector(".preloader");
    if (preloader) preloader.style.display = "none";
  },
};
</script>

<style scoped>
.support-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.7;
  color: #1d1d1f;
  background: #fff;
  padding: 2rem 1rem;
  min-height: 100vh;
}
.sp-container {
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
h3 {
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
  color: #1d1d1f;
}
.faq {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e5e7;
}
p, li {
  color: #424245;
  margin-bottom: 0.75rem;
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
