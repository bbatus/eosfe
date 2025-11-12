# Eğitim Otomasyon Sistemi - Sayfa ve Bileşenler

## 🎨 Tasarım Teması (Modern & Minimal)

### Renk Paleti (Açık Tema):
- **Primary Blue**: `#2B7FFF` / `rgb(43, 127, 255)` - Butonlar, aktif menü
- **Light Blue Background**: `#E8F2FF` / `#F0F7FF` - Kart ikon arka planları
- **Sidebar Background**: `#F8F9FA` - Sol menü arka planı
- **Main Background**: `#F5F7FA` - Ana sayfa arka planı
- **White**: `#FFFFFF` - Kartlar, top bar
- **Text Dark**: `#1F2937` - Ana metinler (gray-800)
- **Text Gray**: `#6B7280` - Açıklama metinleri (gray-500)
- **Border Gray**: `#E5E7EB` - Kenarlıklar (gray-200)

### Renk Paleti (Koyu Tema):
- **Primary Blue**: `#3B82F6` / `rgb(59, 130, 246)` - Butonlar, aktif menü (daha parlak mavi)
- **Dark Blue Background**: `#1E3A5F` / `#2C4A6B` - Kart ikon arka planları
- **Sidebar Background**: `#1F2937` - Sol menü arka planı (gray-800)
- **Main Background**: `#111827` - Ana sayfa arka planı (gray-900)
- **Card Background**: `#1F2937` - Kartlar (gray-800)
- **TopBar Background**: `#1F2937` - Üst bar (gray-800)
- **Text Light**: `#F9FAFB` - Ana metinler (gray-50)
- **Text Gray**: `#9CA3AF` - Açıklama metinleri (gray-400)
- **Border Dark**: `#374151` - Kenarlıklar (gray-700)

### Tipografi (Facebook-inspired):
- **Ana Başlık**: font-bold, text-2xl (24px), text-gray-900
- **Alt Başlık**: font-semibold, text-lg (18px), text-gray-800
- **Kart Başlıkları**: font-semibold, text-base (16px), text-gray-900
- **Açıklamalar**: font-normal, text-sm (14px), text-gray-600
- **Buton Metni**: font-semibold, text-sm (14px)
- **Menü Öğeleri**: font-medium, text-sm (14px)

### Bileşen Stilleri (Modern & Clean):
- **Kartlar**: 
  - Beyaz arka plan
  - Minimal gölge: `shadow-sm` (hover: `shadow-md`)
  - İnce border: `border border-gray-200`
  - Yuvarlatılmış köşeler: `rounded-lg` (8px)
  - Padding: `p-4` veya `p-6`
  
- **Butonlar**:
  - Primary: `bg-[#2B7FFF]` + `hover:bg-[#1a6eef]`
  - Yükseklik: `py-2.5` (10px padding)
  - Border radius: `rounded-md` (6px)
  - Font: `font-semibold text-sm`
  - Transition: `transition-colors duration-200`
  
- **Input Alanları**:
  - Border: `border border-gray-300`
  - Focus: `focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent`
  - Padding: `px-4 py-2.5`
  - Border radius: `rounded-md`
  - Placeholder: `text-gray-700` (koyu gri, okunabilir)
  
- **Tablolar**:
  - Header: `bg-gray-50` + `font-semibold text-sm text-gray-700`
  - Rows: `hover:bg-gray-50` + `border-b border-gray-100`
  - Padding: `py-3 px-4`

### Spacing (Consistent & Balanced):
- Kartlar arası: `gap-4` (16px)
- Section spacing: `mb-6` (24px)
- İç padding: `p-4` (small), `p-6` (medium)
- Container max-width: `max-w-6xl`

### Shadows (Subtle & Layered):
- Default: `shadow-sm` (0 1px 2px rgba(0,0,0,0.05))
- Hover: `shadow-md` (0 4px 6px rgba(0,0,0,0.1))
- Modal/Dropdown: `shadow-lg` (0 10px 15px rgba(0,0,0,0.1))

### Animasyonlar & Transitions:
- **Kart Hover**: `hover:-translate-y-1` + `shadow-lg` + `duration-300`
- **Fade In**: `animate-fade-in` (0.2s ease-out)
- **Slide Up**: `animate-slide-up` (0.3s ease-out)
- **Shimmer**: `animate-shimmer` (2s infinite linear)
- **Toast Slide**: `animate-slide-in-right` (0.3s ease-out)

---

## 🎯 UI Component Library

### Loading States:
- **Spinner**: Küçük (sm), Orta (md), Büyük (lg), Çok Büyük (xl)
  - Renkler: Mavi, Beyaz, Gri
  - Kullanım: Buton içi, sayfa ortası, inline
  
- **Skeleton Loader**: 
  - Varyantlar: Text, Circular, Rectangular
  - Animasyon: Pulse, Wave (shimmer)
  - Hazır şablonlar: Card, Table Row, List
  
- **Progress Bar**:
  - Linear: Küçük (1px), Orta (2px), Büyük (3px)
  - Circular: Yüzde göstergeli
  - Renkler: Mavi, Yeşil, Kırmızı, Sarı

### Feedback Components:
- **Toast Notifications**:
  - Tipler: Success (yeşil), Error (kırmızı), Warning (sarı), Info (mavi)
  - Pozisyon: Sağ üst köşe
  - Otomatik kapanma: 3 saniye (özelleştirilebilir)
  - Kapatma butonu: X ikonu
  
- **Confirmation Modal**:
  - Tipler: Danger (kırmızı), Warning (sarı), Info (mavi)
  - İkonlar: Uyarı üçgeni, bilgi işareti
  - Butonlar: İptal (gri), Onayla (renkli)
  - Loading state: Spinner ile
  - ESC tuşu ile kapatma
  
- **Empty States**:
  - Hazır şablonlar: No Data, No Search Results, No Notifications
  - İkonlar: SVG illustrasyonlar
  - Action button: Opsiyonel

### Enhanced Card:
- **Hover Effects**:
  - Yukarı hareket: `-translate-y-1`
  - Gölge artışı: `shadow-sm` → `shadow-lg`
  - Smooth transition: `duration-300 ease-out`
  - Border renk değişimi: `gray-200` → `gray-300`

---

## 🎯 Gelişmiş Özellikler

### Collapsible Sidebar:
- **Mini Mode**: Sadece ikonlar (w-20)
- **Full Mode**: İkonlar + metinler (w-64)
- **Toggle Button**: Sidebar kenarında collapse/expand butonu
- **Tooltip**: Mini modda hover'da menü adları
- **Smooth Transition**: 300ms ease-in-out
- **Responsive**: Mobilde hamburger menü

### Favori Modüller:
- **Yıldız İkonu**: Hover'da görünür, tıklanabilir
- **LocalStorage**: Favoriler tarayıcıda saklanır
- **Hızlı Erişim Bölümü**: Favoriler en üstte ayrı gösterilir
- **Görsel Gösterge**: Favori modüllerde sarı yıldız badge'i
- **Dinamik Sıralama**: Favoriler otomatik en üste çıkar

### Gradient Backgrounds:
- **PageContainer**: Subtle gradient (F5F7FA → F0F2F5 → E8EAED)
- **Module Icons**: 3-color gradient (E7F3FF → D0E7FF → B8DBFF)
- **Ring Effect**: Icon'larda ring-1 ring-blue-100
- **Depth**: Gradient'ler derinlik hissi verir

---

## 🔐 Rol Bazlı Erişim Yapısı

### Roller:
1. **Admin** - Tüm modüllere tam erişim
2. **Öğretmen** - Eğitim modüllerine erişim
3. **Öğrenci** - Görüntüleme ve kendi işlemleri
4. **Veli** - Çocuğunun bilgilerine erişim

### Modül Erişim Matrisi:
- **Bildirimler**: Admin (gönder), Öğretmen (gönder), Öğrenci (görüntüle), Veli (görüntüle)
- **Kayıt Modülü**: Admin (tam), Öğretmen (görüntüle)
- **Yoklama Modülü**: Admin (tam), Öğretmen (işaretle), Öğrenci (görüntüle), Veli (görüntüle)
- **Sınav Modülü**: Admin (tam), Öğretmen (ekle/düzenle), Öğrenci (görüntüle/çöz), Veli (görüntüle)
- **Rehberlik Modülü**: Admin (tam), Öğretmen (tam), Öğrenci (randevu al), Veli (görüntüle)
- **Ödev Takip**: Admin (görüntüle), Öğretmen (ekle/değerlendir), Öğrenci (yükle/görüntüle), Veli (görüntüle)
- **İçerik Yönetimi**: Admin (tam), Öğretmen (ekle/düzenle), Öğrenci (görüntüle)
- **Öğrenci Profili**: Admin (tam), Öğretmen (görüntüle), Öğrenci (kendi profili), Veli (çocuğunun profili)
- **Duyurular**: Admin (ekle/düzenle), Öğretmen (ekle), Öğrenci (görüntüle), Veli (görüntüle)
- **Chatbot**: Tüm roller (kullan)
- **Yemek Programı**: Admin (düzenle), Tüm roller (görüntüle)
- **Ders Programı**: Admin (düzenle), Öğretmen (görüntüle), Öğrenci (görüntüle), Veli (görüntüle)
- **Etkinlikler**: Admin (ekle/düzenle), Öğretmen (ekle), Tüm roller (görüntüle)
- **Öğrenci Galerisi**: Admin (ekle/düzenle), Öğretmen (ekle), Tüm roller (görüntüle)
- **Mesajlaşma**: Tüm roller (kullan)

---

## � ️ 1. Ana Seçim Ekranı

**Sayfa**: `/`

### Bileşenler:
- Başlık: "Eğitim Otomasyon Sistemi"
- Görsel: Okul forması giymiş mutlu öğrenciler (illüstrasyon)
- Login Seçim Paneli:
  - "Hoş Geldiniz" başlığı
  - 👨‍💼 Yönetici Girişi butonu
  - 👩‍🏫 Öğretmen Girişi butonu
  - 🧒 Öğrenci Girişi butonu
  - �‍👩‍👧 Vevli Girişi butonu
- Arka plan: Pembe-sarı gradient + soyut 3D şekiller

---

## ✅ 2. Giriş Ekranı

**Sayfa**: `/login/[role]`

### Bileşenler:

- "Hoş Geldiniz" başlığı
- "Giriş Yap" alt başlığı
- Kullanıcı Adı input (kişi simgesi ile)
- Şifre input (kilit simgesi + göz ikonu ile göster/gizle)
- "Beni Hatırla" checkbox
- "Giriş Yap" butonu (mavi çerçeveli)
- "Seçim ekranına geri dön" butonu (kırmızı çerçeveli)

---

## ✅ 3. Dashboard (Ana Sayfa - Rol Bazlı)

**Sayfa**: `/dashboard`
**Not**: Aynı sayfa, içerik kullanıcı rolüne göre dinamik değişir

### Bileşenler:

#### Sol Kenar Navigasyon Menüsü (Sidebar):

- Logo alanı (üstte): "EOS" + "Eğitim Otomasyonu" alt yazısı
- Menü öğeleri (ikon + metin) - Rol bazlı görünürlük:
  - 🏠 Anasayfa (tüm roller)
  - 🔔 Bildirimler (tüm roller)
  - 👥 Kayıt Modülü (sadece Admin)
  - ✅ Yoklama Modülü (Admin, Öğretmen, Öğrenci, Veli)
  - 📝 Sınav Modülü (tüm roller)
  - 🎯 Rehberlik Modülü (tüm roller)
  - 📋 Ödev Takip Modülü (tüm roller)
  - 📂 İçerik Yönetimi (Admin, Öğretmen, Öğrenci)
  - 👤 Öğrenci Profili (tüm roller)
  - 📢 Duyurular (tüm roller)
  - 🤖 Chatbot (tüm roller)
  - 🍽️ Yemek Programı (tüm roller)
  - 📅 Ders Programı (tüm roller)
  - 🎉 Etkinlikler (tüm roller)
  - 🖼️ Öğrenci Galerisi (tüm roller)
  - 💬 Mesajlaşma (tüm roller)
- Çıkış butonu (en altta)

**Stil**: Açık gri arka plan, aktif menü mavi arka plan + beyaz metin, yuvarlatılmış köşeler

#### Üst Bilgi Çubuğu (Top Bar):

- Sol: "👤 Hoş geldiniz, [kullanıcı_adı]" (dinamik kullanıcı adı)
- Sağ:
  - �️T Yazdır ikonu
  - ⏰ Saat (canlı, örnek: 17:28)

**Stil**: Beyaz arka plan, hafif gölge, padding, sağ-sol hizalı flex

#### Ana İçerik Alanı:

- "Hoş geldiniz EOS [Rol] Kullanıcısı!" başlığı (dinamik rol)
- "Sisteminizi buradan kolayca yönetebilirsiniz." alt başlığı (açık gri)

**Modül Kartları (Grid: 3 sütun, responsive)**:

Her kart yapısı:
- Açık mavi daire içinde ikon (üstte)
- Modül başlığı (koyu gri, bold)
- Açıklama metni (açık gri, 2 satır)
- "Modüle Git" butonu (mavi, tam genişlik, yuvarlatılmış)

Kartlar (rol bazlı görünürlük):
1. **Bildirimler** (tüm roller)
   - İkon: 🔔
   - Açıklama: "Öğrencilere ve velilere anık bildirimler gönderin."
   - Buton: "Modüle Git"

2. **Kayıt Modülü** (sadece Admin)
   - İkon: 👥
   - Açıklama: "Yeni öğrenci kayıtlarını yönetin ve mevcut kayıtları görüntüleyin."
   - Buton: "Modüle Git"

3. **Sınav Modülü** (tüm roller)
   - İkon: 📝
   - Açıklama: "Sınav takvimi düşünün, sonuçları girin ve analizleri görüntüleyin."
   - Buton: "Modüle Git"

4. **Yoklama Modülü** (Admin, Öğretmen, Öğrenci, Veli)
   - İkon: ✅
   - Açıklama: "Ders ve etkinlik yoklamalarını kolayca alın ve raporlayın."
   - Buton: "Modüle Git"

5. **Ödev Takip Modülü** (tüm roller)
   - İkon: 📋
   - Açıklama: "Ödevleri oluşturun, takip edin ve değerlendirmelerinizi girin."
   - Buton: "Modüle Git"

6. **Rehberlik Modülü** (tüm roller)
   - İkon: 🎯
   - Açıklama: "Öğrenci rehberlik ve danışmanlık süreçlerini yönetin."
   - Buton: "Modüle Git"

**Kart Stili**: 
- Beyaz arka plan
- `shadow-md` gölge
- `rounded-xl` köşeler
- `p-6` padding
- Hover: hafif yukarı hareket + gölge artışı

---

## ✅ 4. Kayıt Modülü

**Sayfa**: `/registration`

### Bileşenler:

#### Ana Başlık:
- "Kayıt Modülü" başlığı

#### Kayıt Seçeneği Kartları (5 adet):

1. **Öğrenci Ekle**
   - İkon: 👨‍👩‍👧‍👦
   - Açıklama: "Yeni bir öğrenci kaydı ekleyin"
   - Buton: "Öğrenci Ekle"
   - Yönlendirme: `/registration?type=student&action=add`

2. **Öğretmen Ekle**
   - İkon: 👨‍💻👩‍💻
   - Açıklama: "Yeni bir öğretmen kaydı ekleyin"
   - Buton: "Öğretmen Ekle"
   - Yönlendirme: `/registration?type=teacher&action=add`

3. **Ders Ekle**
   - İkon: 📖
   - Açıklama: "Yeni bir ders kaydı ekleyin"
   - Buton: "Ders Ekle"
   - Yönlendirme: `/registration?type=course&action=add`

4. **Sınıf Ekle**
   - İkon: 🏠
   - Açıklama: "Yeni bir sınıf kaydı ekleyin"
   - Buton: "Sınıf Ekle"
   - Yönlendirme: `/registration?type=class&action=add`

5. **Şube Ekle**
   - İkon: 🗝️
   - Açıklama: "Yeni bir şube kaydı ekleyin"
   - Buton: "Şube Ekle"
   - Yönlendirme: `/registration?type=branch&action=add`

**Not**: Tek bir `/registration` sayfası, URL parametrelerine göre farklı formlar gösterir (Dynamic Content)

---

## ✅ 5. Öğrenci Listesi Sayfası

**Sayfa**: `/registration?type=student`

### Bileşenler:

#### Navigasyon İzi:
- Ana Sayfa > Kayıt Modülü > Öğrenci

#### Sayfa Başlığı:
- "Kayıt Modülü" ana başlık
- "Öğrenciler" alt başlık

#### Bilgi Metriği:
- Toplam öğrenci sayısı göstergesi (örn: "Toplam: 1 öğrenci")

#### Hızlı Eylem Butonları:
- **Öğrenci Ekle** butonu (mavi gradient)
- **PDF İndir** butonu (gri gradient)

#### Filtreleme ve Arama:
- Filtreleme dropdown: "Tüm Bölümler"
- Arama çubuğu: "Öğrenci adı veya TC kimlik numarasına göre ara"

#### Öğrenci Listesi Tablosu:
**Sütunlar:**
- Ad
- Soyad
- TC No
- Sınıf
- Şube
- İşlemler (Düzenle/Sil butonları)

**İşlem Butonları:**
- Düzenle (mavi kalem ikonu)
- Sil (kırmızı çöp kutusu ikonu)

#### Sayfalama:
- Önceki / Sayfa Numarası / Sonraki butonları

---

## ✅ 6. Öğrenci Ekleme Seçim Sayfası

**Sayfa**: `/registration?type=student&action=add`

### Bileşenler:

#### Sayfa Başlığı:
- "Öğrenci Ekle" başlığı
- "Ekleme yöntemini seçin" alt başlığı

#### Ekleme Yöntemi Kartları (2 adet):

1. **Manuel Ekle**
   - İkon: ✍️ (Form ikonu)
   - Açıklama: "Tek öğrenci bilgilerini manuel olarak girin"
   - Buton: "Manuel Ekle"
   - Yönlendirme: `/registration?type=student&action=add&method=manual`

2. **Toplu Ekle**
   - İkon: 📊 (Excel ikonu)
   - Açıklama: "Excel dosyası ile toplu öğrenci ekleyin"
   - Buton: "Toplu Ekle"
   - Yönlendirme: `/registration?type=student&action=add&method=bulk`

---

## ✅ 7. Manuel Öğrenci Ekleme Formu

**Sayfa**: `/registration?type=student&action=add&method=manual`

### Form Alanları:
- Ad, Soyad
- TC Kimlik No
- Öğrenci No
- E-posta, Telefon
- Doğum Tarihi
- Sınıf, Şube
- Adres
- Kaydet/İptal butonları

---

## ✅ 8. Toplu Öğrenci Ekleme Sayfası

**Sayfa**: `/registration?type=student&action=add&method=bulk`

### Bileşenler:
- Excel şablon indirme butonu
- Dosya yükleme alanı (drag & drop)
- Yüklenen dosya önizlemesi
- Kaydet/İptal butonları

---

## ✅ 9. Öğretmen Listesi Sayfası

**Sayfa**: `/registration?type=teacher`

### Bileşenler:

#### Navigasyon İzi:
- Ana Sayfa > Kayıt Modülü > Öğretmen

#### Sayfa Başlığı:
- "Kayıt Modülü" ana başlık
- "Öğretmenler" alt başlık

#### Bilgi Metriği:
- Toplam öğretmen sayısı göstergesi

#### Hızlı Eylem Butonları:
- **Öğretmen Ekle** butonu (mavi/kırmızı gradient)
- **PDF İndir** butonu (turuncu/kırmızı gradient)

#### Filtreleme ve Arama:
- Filtreleme dropdown: "Tüm Bölümler"
- Arama çubuğu: "Öğretmen adı veya TC kimlik numarasına göre ara"

#### Öğretmen Listesi Tablosu:
**Sütunlar:**
- Ad
- Soyad
- Branş
- İşlemler (Düzenle/Sil butonları)

---

## ✅ 10. Öğretmen Ekleme Formu

**Sayfa**: `/registration?type=teacher&action=add`

### Bileşenler:

#### Kontroller:
- Geri Dön butonu (sol üst, mavi)
- Kaydet butonu (sağ üst, gri/pasif)

#### Başlık:
- "Öğretmen Ekle"

#### Form Alanları:
- Ad (50 karakter sınırı)
- Soyad (50 karakter sınırı)
- TC Kimlik No (11 karakter sınırı)
- Bölüm (Dropdown: "Bölüm Seçin")
- Telefon Numarası
- Doğum Tarihi

---

## ✅ 11. Dersler Ana Ekranı

**Sayfa**: `/registration?type=course`

### Bileşenler:

#### Başlık ve Bilgi:
- "Dersler" ana başlık
- "Sisteme kayıtlı ders sayısı: 27" metriği

#### Hızlı Eylem Butonları:
- **+ Ders Ekle** butonu (mavi)
- **PDF İndir** butonu (gri)

#### Kategori Başlığı:
- "TEMEL YETERLİLİK TESTİ DERSLERİ"

#### Ders Kartları (Grid):
- Her ders için kart (TÜRKÇE, MATEMATİK, KİMYA, vb.)
- "Konuları Gör" butonu (mavi)

---

## ✅ 12. Ders Ekleme Formu

**Sayfa**: `/registration?type=course&action=add`

### Bileşenler:

#### Navigasyon İzi:
- Ana Sayfa > Kayıt Modülü > Ders Kayıt > Ekle

#### Form Başlığı:
- "Ders Ekle"

#### Form Alanları:
- **Ders Adı**: Text input ("Ders adı giriniz...")
- **Ders Türü**: Radio buttons (TYT, AYT, YDS, LGS)

#### Eylem Butonları:
- İptal Et (gri/mavi çerçeveli)
- Kaydet (koyu mavi)

---

## ✅ 13. Konu Başlıkları Yönetim Ekranı

**Sayfa**: `/registration?type=course&courseId=1&view=topics`

### Bileşenler:

#### Başlık:
- "Konu Başlıkları"
- "DERS: TÜRKÇE" bilgisi

#### Konu Listesi Tablosu:
**Sütunlar:**
- NO
- KONU BAŞLIĞI
- DÜZENLE/SİL

**İşlem Butonları:**
- Düzenle (mavi kalem)
- Sil (kırmızı çöp kutusu)

#### Konu Ekleme Alanı:
- Input: "Konu giriniz..."
- Ekle butonu (mavi, + ikonu)

#### Kontroller:
- Geri Dön butonu (koyu mavi, alt kısımda)
- Sayfalama

---

## ✅ 14. Sınıflar Listesi Sayfası

**Sayfa**: `/registration?type=class`

### Bileşenler:

#### Navigasyon İzi:
- Kayıt Modülü > Sınıf Kayıt

#### Sayfa Başlığı:
- "Sınıf Kayıt Modülü" ana başlık
- "Sınıflar" alt başlık

#### Bilgi Metriği:
- Toplam sınıf sayısı göstergesi (4)

#### Hızlı Eylem Butonları:
- **+ Sınıf Ekle** butonu (mavi/kırmızı gradient)
- **PDF İndir** butonu (kahverengi/turuncu gradient)

#### Arama:
- Arama çubuğu: "Sınıflarda ara..."

#### Sınıf Listesi Tablosu:
**Sütunlar:**
- Sınıf
- İşlemler (Düzenle/Sil butonları)

**Örnek Kayıtlar:** 12, 10, 9, 11

---

## ✅ 15. Sınıf Ekleme Formu

**Sayfa**: `/registration?type=class&action=add`

### Bileşenler:

#### Kontroller:
- Geri Dön butonu (sol üst, mavi)
- Kaydet butonu (sağ üst, gri/pasif)

#### Başlık:
- "Sınıf Ekle"

#### Form Alanları:
- **Sınıf Adı**: Text input (50 karakter sınırı)
- **Günlük Ders Sayısı**: Dropdown ("Ders sayısını seçin")

---

## ✅ 16. Şubeler Listesi Sayfası

**Sayfa**: `/registration?type=branch`

### Bileşenler:

#### Sayfa Başlığı:
- "Şube Kayıt Modülü" ana başlık
- "Şubeler" alt başlık

#### Bilgi Metriği:
- Toplam şube sayısı göstergesi (4)

#### Hızlı Eylem Butonları:
- **+ Şube Ekle** butonu (mor/turuncu gradient)
- **PDF İndir** butonu (kahverengi/turuncu gradient)

#### Arama:
- Arama çubuğu: "Şube ara..."

#### Şube Listesi Tablosu:
**Sütunlar:**
- Sınıf
- Şube
- İşlemler (Düzenle/Sil butonları)

**Örnek Kayıtlar:** 11-A, 9-A, 10-A, 12-A

---

## ✅ 17. Şube Ekleme Formu

**Sayfa**: `/registration?type=branch&action=add`

### Bileşenler:

#### Kontroller:
- Geri Dön butonu (sol üst, mavi)
- Kaydet butonu (sağ üst, gri/pasif)

#### Başlık:
- "Şube Ekle"

#### Form Alanları:
- **Sınıf**: Dropdown ("Sınıf Seçin")
- **Şube Adı**: Text input ("Ad", 50 karakter sınırı)

---

# 📋 YOKLAMA MODÜLÜ

## 🔄 Yoklama Akışı

1. **Sınıf Seçimi** → Kullanıcı sınıf seçer
2. **Şube/Ders Seçimi** → Şube ve ders kartları görüntülenir
3. **Yoklama Kaydı** → Öğrenci listesinde Var/Yok işaretleme
4. **Devamsız Takibi** → Yok yazılan öğrencileri görüntüleme ve bildirim gönderme

---

## 📝 18. Sınıf Seçim Ekranı (Yoklama)

**Sayfa**: `/attendance`

### Bileşenler:

#### Başlık:
- "Sınıf Seçin"

#### Kontroller:
- **Devamsız Öğrenciler** butonu (sağ üst)
  - Yönlendirme: `/attendance/absent-students`

#### Sınıf Dropdown:
- Placeholder: "Sınıf Seçin"
- Seçenekler: 9, 10, 11, 12

#### Şube/Ders Kartları:
- Her kart: Şube adı (örn: "12-A") + Ders numarası (1. Ders, 2. Ders, vb.)
- "Detayları Gör" butonu
- Yönlendirme: `/attendance/detail?class=12&branch=A&lesson=1`

---

## ✅ 19. Yoklama Detay Ekranı

**Sayfa**: `/attendance/detail?class=12&branch=A&lesson=1`

### Bileşenler:

#### Başlık:
- "Yoklama Detay"

#### Bilgi Alanı:
- Ders/Şube: "12-A - 1. Ders"
- Tarih ve Saat: "10.11.2025 - 22:24 (Gün Sonu)"

#### Kontroller:
- **Geri Dön** butonu (sağ üst)
- **Tümünü Seç** butonu (tüm öğrencileri Var/Yok işaretle)
- **Yoklamayı Kaydet** butonu (mavi, alt kısım)

#### Öğrenci Listesi Tablosu:
**Sütunlar:**
- Ad Soyad
- Yoklama Durumu (Toggle: Var/Yok)

**Varsayılan:** Tüm öğrenciler "Var" olarak gelir

---

## ✅ 20. Yok Yazılan Öğrenciler Ekranı

**Sayfa**: `/attendance/absent-students`

### Bileşenler:

#### Başlık:
- "Yok Yazılan Öğrenciler"

#### Kontroller:
- **Geri Dön** butonu (üst, mavi)
- **Bildirim Gönder** butonu (velilere bildirim)

#### Filtre:
- Dropdown: "Tüm Dersler" (derslere göre filtreleme)

#### Öğrenci Listesi Tablosu:
**Sütunlar:**
- Ad
- Soyad
- Sınıf
- Şube
- İşlemler (Sil butonu)

**Boş Durum:** "Hiç yok yazılan öğrenci yok." mesajı

---

## 🎯 Teknik Yapı

### Dynamic Routing Stratejisi:
- **Tek sayfa, çoklu içerik**: Her modül için tek bir page.tsx, içerik URL parametrelerine göre değişir
- **Query Parameters**: `?type=student&action=add` şeklinde
- **Component-based**: Her form tipi için ayrı component, tek sayfada render edilir

### Örnek Yapı:
```
/registration -> Ana kayıt modülü sayfası (5 kart)
/registration?type=student&action=add -> Öğrenci ekleme formu
/registration?type=student&action=edit&id=123 -> Öğrenci düzenleme formu
/registration?type=teacher&action=add -> Öğretmen ekleme formu
```

### Layout Yapısı:
- **PageContainer**: Tüm sayfa içerikleri beyaz, yuvarlak köşeli container içinde
  - Beyaz arka plan (`bg-white`)
  - Yuvarlak köşeler (`rounded-2xl`)
  - Gölge efekti (`shadow-md`, hover: `shadow-lg`)
  - İnce border (`border border-gray-100`)
  - Responsive padding (`p-5 md:p-7`)
  - Tüm modül sayfalarında kullanılır (dashboard, registration, attendance, vb.)

- **TopBar**: Modern mavi gradient header
  - Gradient: `from-[#2B7FFF] via-[#2470eb] to-[#1a6eef]`
  - Kullanıcı bilgisi sol tarafta
  - Arama, bildirim ve saat sağ tarafta
  - Sticky position (`sticky top-0 z-30`)
  - Gölge ve border efekti

- **Sidebar**: Sol menü navigasyonu
  - Aktif sayfa vurgusu: Mavi gradient arka plan + border + nokta işareti
  - Logo alanı: Gradient arka plan ile
  - Hover efektleri: Smooth transitions
  - Çıkış butonu: Kırmızı renk teması
  - Mobilde hamburger menü

### Responsive Tasarım:
- **Mobile (< 768px)**: Tek sütun, stack layout
- **Tablet (768px - 1024px)**: 2 sütun grid
- **Desktop (> 1024px)**: 3 sütun grid
- Tüm kartlar ve formlar responsive
- Sidebar mobilde hamburger menü olarak gizlenir

---


# 📚 ÖDEV TAKİP MODÜLÜ ✅

## 🔄 Ödev Takip Akışı

1. **Ödev Ekleme** → Öğretmen yeni ödev içeriği oluşturur (tarih, açıklama, dosya)
2. **Ödev Atama** → Ödev sınıf/şubeye atanır, öğrenciler listelenir
3. **Ödev Kontrol** → Atanan ödevler kontrol edilir, tamamlama durumu işaretlenir
4. **Bildirim Gönderme** → Ödevi yapmayan öğrencilerin velilerine bildirim gönderilir
5. **Ödev Raporları** → Sınıf bazında tamamlama verileri grafiklerle görselleştirilir

---

## ✅ 21. Ödev Takip Ana Menü

**Sayfa**: `/homework`

### Bileşenler:

#### Sayfa Başlığı:
- "Ödev Takip Modülü" ana başlık
- "Ödev yönetimi için bir işlem seçin" alt başlık

#### İşlem Kartları (5 adet, Grid: 3 sütun):

1. **Ödev Ekle**
   - İkon: 📝 (Belge + Kalem)
   - Açıklama: "Yeni bir ödev ekleyin"
   - Buton: "Ödev Ekle"
   - Yönlendirme: `/homework?action=add`

2. **Ödev Ata**
   - İkon: 📤 (Gönder)
   - Açıklama: "Ödev ataması yapın"
   - Buton: "Ödev Ata"
   - Yönlendirme: `/homework?action=assign`

3. **Ödev Kontrol**
   - İkon: ✅ (Onay işareti)
   - Açıklama: "Ödevleri kontrol edin"
   - Buton: "Ödev Kontrol"
   - Yönlendirme: `/homework?action=check`

4. **Bildirim Gönder**
   - İkon: 🔔 (Zil)
   - Açıklama: "Ödev ile ilgili bildirim gönderin"
   - Buton: "Bildirim Gönder"
   - Yönlendirme: `/homework?action=notify`

5. **Ödev Raporları**
   - İkon: 📊 (Grafik)
   - Açıklama: "Ödev raporlarını görüntüleyin"
   - Buton: "Ödev Raporları"
   - Yönlendirme: `/homework?action=reports`

**Kart Stili**: Beyaz arka plan, mavi ikon arka planı, hover efekti

---

## ✅ 22. Ödev Ekleme Formu

**Sayfa**: `/homework?action=add`

### Bileşenler:

#### Kontroller:
- **Geri Dön** butonu (sol üst, mavi)

#### Başlık:
- "Ödev Ekle"

#### Form Alanları:

1. **Veriliş Tarihi**
   - Tip: Date input
   - Placeholder: "gg.aa.yyyy"
   - Varsayılan: Bugünün tarihi (örn: 10.11.2025)

2. **Bitiş Tarihi**
   - Tip: Date input
   - Placeholder: "gg.aa.yyyy"
   - Zorunlu alan

3. **Ödev İçeriği (Açıklama)**
   - Tip: Textarea (çok satırlı)
   - Placeholder: "Ödev açıklamasını buraya yazın..."
   - Min yükseklik: 120px
   - Max karakter: 1000

4. **Dosya Ekle**
   - Tip: File upload
   - Buton: "Dosya Seç"
   - Desteklenen formatlar: PDF, DOC, DOCX, MP4, AVI
   - Maksimum boyut: 50MB
   - Seçilen dosya adı gösterilir

#### Eylem Butonu:
- **Ödevi Kaydet** butonu (koyu mavi, tam genişlik, alt kısım)

**Stil**: Form alanları border-gray-300, focus:ring-blue-500

---

## ✅ 23. Ödev Atama Sayfası

**Sayfa**: `/homework?action=assign`

### Bileşenler:

#### Kontroller:
- **Geri Dön** butonu (sol üst, mavi)

#### Başlık:
- "Ödev Ata"

#### Ödev Seçimi:
- **Ödev Dropdown**
  - Label: "Ödev Seçin"
  - Placeholder: "Atanacak ödevi seçin"
  - Seçenekler: Sisteme kayıtlı ödevler listesi
  - Format: "Matematik Ödevi - 10.11.2025 - 15.11.2025"

#### Sınıf/Şube Seçimi:
- **Sınıf Dropdown**
  - Label: "Sınıf"
  - Placeholder: "Sınıf Seçin"
  - Seçenekler: 9, 10, 11, 12

- **Şube Dropdown**
  - Label: "Şube"
  - Placeholder: "Şube Seçin"
  - Seçenekler: A, B, C, D (sınıfa göre dinamik)

#### Öğrenci Listesi:
- **Toplu Seçim Checkbox**
  - "Tümünü Seç" / "Tümünü Kaldır"
  
- **Öğrenci Tablosu**
  - Sütunlar:
    - Checkbox (seçim)
    - Ad
    - Soyad
    - Öğrenci No
  - Varsayılan: Tüm öğrenciler seçili

#### Eylem Butonu:
- **Ata** butonu (mavi, tam genişlik, alt kısım)
- Aktif olma koşulu: Ödev + Sınıf + Şube + En az 1 öğrenci seçili

---

## ✅ 24. Ödev Kontrol Sayfası

**Sayfa**: `/homework?action=check`

### Bileşenler:

#### Kontroller:
- **Geri Dön** butonu (sol üst, mavi)

#### Başlık:
- "Ödev Kontrol"

#### Filtreler:

1. **Sınıf Seviyesi Dropdown**
   - Label: "Sınıf Seviyesi"
   - Placeholder: "Tüm Sınıflar"
   - Seçenekler: Tümü, 9, 10, 11, 12

2. **Ödev Adı Arama**
   - Tip: Text input
   - Placeholder: "Ödev adı ile ara..."
   - İkon: 🔍 (Arama)

#### Ödev Listesi:

**Ödev Kartları** (Accordion/Genişletilebilir):
- Her kart yapısı:
  - Ödev başlığı (bold)
  - Sınıf/Şube bilgisi
  - Tarih aralığı
  - Tamamlanma durumu: "12/15 öğrenci tamamladı"
  - "Detayları Gör" butonu (genişlet/daralt)

**Genişletilmiş Kart İçeriği:**
- Öğrenci listesi tablosu:
  - Sütunlar:
    - Ad Soyad
    - Durum Toggle (Yaptı/Yapmadı)
  - Varsayılan: Tümü "Yapmadı"
  
- **Kaydet** butonu (her kart için ayrı)

#### Durum Mesajı:
- Boş durum: "Henüz atanmış ödev bulunmamaktadır."

#### Sayfalama:
- Önceki / Sayfa Numarası / Sonraki

---

## ✅ 25. Ödevleri Görüntüle/Sil Sayfası

**Sayfa**: `/homework?action=manage`

### Bileşenler:

#### Kontroller:
- **Geri Dön** butonu (sol üst, mavi)

#### Başlık:
- "Ödev Yönetimi"

#### Arama:
- Arama çubuğu: "Ödev ara..."
- İkon: 🔍

#### Ödev Listesi Tablosu:
**Sütunlar:**
- Ödev Adı
- Veriliş Tarihi
- Bitiş Tarihi
- Atanan Sınıf/Şube
- İşlemler (Düzenle/Sil)

**İşlem Butonları:**
- Düzenle (mavi kalem ikonu)
- Sil (kırmızı çöp kutusu ikonu)

#### Uyarı Mesajı:
- Boş durum: "Henüz eklenmiş ödev bulunmamaktadır."

#### Toplu İşlem:
- **Tüm Ödevleri Sil** butonu (kırmızı, alt kısım)
- Onay modalı: "Tüm ödevler silinecek. Emin misiniz?"

---

## ✅ 26. Bildirim Gönderme Sayfası

**Sayfa**: `/homework?action=notify`

### Bileşenler:

#### Kontroller:
- **Geri Dön** butonu (sol üst, mavi)

#### Başlık:
- "Ödev Bildirimi Gönder"

#### Filtre:
- **Ödev Dropdown**
  - Label: "Ödev Seçin"
  - Placeholder: "Bildirim gönderilecek ödevi seçin"
  - Seçenekler: Atanmış ödevler listesi

#### Bildirim Gönderilecek Öğrenciler:

**Açıklama Metni:**
- "Aşağıdaki öğrencilerin velilerine bildirim gönderilecektir:"
- "Listeden öğrenci çıkarmak için sil butonunu kullanın."

**Öğrenci Listesi Tablosu:**
- Sütunlar:
  - Ad
  - Soyad
  - Sınıf
  - Şube
  - Veli Telefon
  - İşlemler (Sil butonu)

**Boş Durum:**
- "Tüm öğrenciler ödevlerini tamamlamış."

#### Eylem Butonu:
- **Bildirim Gönder** butonu (yeşil, tam genişlik, alt kısım)
- Aktif olma koşulu: En az 1 öğrenci listede

#### Bildirim Mesajı Şablonu:
```
Sayın Veli,
[Öğrenci Adı] adlı öğrenciniz [Ödev Adı] ödevini teslim etmemiştir.
Bitiş Tarihi: [Tarih]
Lütfen öğrencinizi uyarınız.
```

---

## ✅ 27. Ödev Raporları Sayfası

**Sayfa**: `/homework?action=reports`

### Bileşenler:

#### Kontroller:
- **Geri Dön** butonu (sol üst, mavi)
- **PDF İndir** butonu (sağ üst, gri)

#### Başlık:
- "Ödev Raporları"
- "Sınıf bazında ödev tamamlama istatistikleri"

#### Filtreler:

1. **Tarih Aralığı**
   - Başlangıç Tarihi (Date input)
   - Bitiş Tarihi (Date input)
   - "Filtrele" butonu

2. **Sınıf Seçimi**
   - Dropdown: "Tüm Sınıflar", 9, 10, 11, 12

#### Özet Kartları (Grid: 4 sütun):

1. **Toplam Ödev**
   - İkon: 📝
   - Sayı: "45"
   - Açıklama: "Atanan ödev"

2. **Tamamlanan**
   - İkon: ✅
   - Sayı: "38"
   - Yüzde: "84%"
   - Renk: Yeşil

3. **Bekleyen**
   - İkon: ⏳
   - Sayı: "7"
   - Yüzde: "16%"
   - Renk: Turuncu

4. **Ortalama Tamamlama**
   - İkon: 📊
   - Yüzde: "84%"
   - Açıklama: "Genel başarı"

#### Grafikler:

1. **Sınıf Bazında Tamamlama Oranı (Bar Chart)**
   - X Ekseni: Sınıflar (9, 10, 11, 12)
   - Y Ekseni: Tamamlama yüzdesi (0-100%)
   - Renk: Mavi gradient

2. **Aylık Ödev Trendi (Line Chart)**
   - X Ekseni: Aylar
   - Y Ekseni: Ödev sayısı
   - İki çizgi: Atanan / Tamamlanan

3. **Tamamlama Durumu Dağılımı (Pie Chart)**
   - Tamamlandı (Yeşil)
   - Bekleyen (Turuncu)
   - Gecikmiş (Kırmızı)

#### Detaylı Tablo:

**Sınıf Bazında Detay Tablosu:**
- Sütunlar:
  - Sınıf/Şube
  - Toplam Ödev
  - Tamamlanan
  - Bekleyen
  - Tamamlama Oranı (%)
  - Durum (İlerleme çubuğu)

#### Sayfalama:
- Önceki / Sayfa Numarası / Sonraki

---

## 🎯 Ödev Modülü Teknik Yapı

### Dynamic Routing:
```
/homework -> Ana menü (5 kart)
/homework?action=add -> Ödev ekleme formu
/homework?action=assign -> Ödev atama sayfası
/homework?action=check -> Ödev kontrol sayfası
/homework?action=notify -> Bildirim gönderme
/homework?action=reports -> Ödev raporları
/homework?action=manage -> Ödev yönetimi (görüntüle/sil)
```

### Component Yapısı:
```
/app/homework/page.tsx (Ana sayfa)
/components/homework/
  - HomeworkCards.tsx (Ana menü kartları)
  - HomeworkAddForm.tsx (Ödev ekleme formu)
  - HomeworkAssign.tsx (Ödev atama)
  - HomeworkCheck.tsx (Ödev kontrol)
  - HomeworkNotify.tsx (Bildirim gönderme)
  - HomeworkReports.tsx (Raporlar)
  - HomeworkManage.tsx (Yönetim)
```

### State Yönetimi:
- Ödev listesi (localStorage veya API)
- Atama bilgileri (ödev-öğrenci ilişkisi)
- Tamamlama durumları (öğrenci bazında)
- Filtre ve arama state'leri

### Veri Modelleri:

**Homework (Ödev):**
```typescript
interface Homework {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  attachments?: File[];
  createdBy: string;
  createdAt: string;
}
```

**HomeworkAssignment (Atama):**
```typescript
interface HomeworkAssignment {
  id: string;
  homeworkId: string;
  classId: string;
  branchId: string;
  studentIds: string[];
  assignedAt: string;
}
```

**HomeworkCompletion (Tamamlama):**
```typescript
interface HomeworkCompletion {
  id: string;
  assignmentId: string;
  studentId: string;
  isCompleted: boolean;
  completedAt?: string;
  grade?: number;
  feedback?: string;
}
```

---

# 💬 MESAJLAŞMA MODÜLÜ ✅

## 🔄 Mesajlaşma Akışı

1. **Gelen Mesajları Kontrol** → Sol panelden konuşma listesini tarama
2. **Mevcut Konuşmaya Cevap** → Orta panelde mesaj akışını görüntüleme ve cevap yazma
3. **Yeni/Toplu Mesaj Gönderme** → Sağ panelden alıcı seçimi ve mesaj gönderme

---

## ✅ 28. Mesajlaşma Ana Ekranı (3 Sütunlu Düzen)

**Sayfa**: `/messages`

### Layout Yapısı:

**3 Sütunlu Grid Düzeni:**
- Sol Sütun (25%): Konuşma Listesi
- Orta Sütun (40%): Konuşma Penceresi
- Sağ Sütun (35%): Mesaj Gönder / Alıcı Seçimi

**Responsive:**
- Desktop: 3 sütun yan yana
- Tablet: 2 sütun (Sol + Orta veya Orta + Sağ)
- Mobile: Tek sütun, tab ile geçiş

---

## 📋 Sütun 1: Konuşma Listesi (Sol Panel)

### Bileşenler:

#### Başlık:
- "Konuşmalar" başlığı
- Toplam konuşma sayısı badge'i

#### Arama Çubuğu:
- Placeholder: "Konuşma veya kişi ara..."
- İkon: 🔍 (Arama)
- Real-time filtreleme

#### Konuşma Öğeleri (Liste):

Her konuşma kartı yapısı:
- **Kullanıcı Avatar**: İlk harf veya profil resmi
- **Kullanıcı Adı**: Bold, koyu gri
- **Rol Badge**: (Veli/Öğrenci/Öğretmen) - Renkli badge
- **Son Mesaj Önizleme**: Açık gri, tek satır, ellipsis
- **Zaman Bilgisi**: Sağ üst köşe (Örn: "2 saat önce")
- **Okunmamış Badge**: Mavi nokta veya sayı badge'i

**Aktif Konuşma:**
- Mavi arka plan (`bg-blue-50`)
- Sol border (`border-l-4 border-blue-500`)

**Hover Efekti:**
- Hafif gri arka plan
- Smooth transition

**Boş Durum:**
- "Henüz konuşma bulunmamaktadır."
- İkon: 💬

---

## 💬 Sütun 2: Konuşma Penceresi (Orta Panel)

### Bileşenler:

#### Konuşma Başlığı (Üst Kısım):
- **Alıcı Bilgisi**:
  - Avatar (sol)
  - Ad Soyad (bold)
  - Rol badge (Veli/Öğrenci/Öğretmen)
  - Online durumu (yeşil nokta)
- **İşlem Butonları** (sağ):
  - Arama (konuşma içi)
  - Daha fazla (3 nokta menü)

#### Mesaj Akışı (Orta Kısım):

**Tarih Ayırıcıları:**
- "Bugün", "Dün", "10 Kasım 2025"
- Ortalanmış, açık gri arka plan

**Mesaj Baloncukları:**

**Gönderilen Mesajlar (Sağda):**
- Arka plan: `bg-blue-500`
- Metin: Beyaz
- Border radius: Sol üst köşe kesik
- Sağa hizalı

**Alınan Mesajlar (Solda):**
- Arka plan: `bg-gray-100`
- Metin: Koyu gri
- Border radius: Sağ üst köşe kesik
- Sola hizalı

**Her Mesaj İçeriği:**
- Mesaj metni
- Zaman damgası (alt sağ, küçük font)
- Okundu işareti (✓✓) - sadece gönderilen mesajlarda

**Boş Durum:**
- "Görüntülemek için bir konuşma seçin."
- İkon: 💬
- Ortalanmış

#### Mesaj Gönderme Alanı (Alt Kısım):

- **Metin Input**:
  - Placeholder: "Mesajınızı yazın..."
  - Multi-line (auto-expand)
  - Max height: 120px
  
- **Ek Butonlar** (sol):
  - Emoji picker (😊)
  - Dosya ekle (📎)
  
- **Gönder Butonu** (sağ):
  - İkon: ➤ (Gönder oku)
  - Mavi arka plan
  - Yuvarlak buton
  - Disabled: Metin boşsa

---

## 📤 Sütun 3: Mesaj Gönder / Alıcı Seçimi (Sağ Panel)

### Bileşenler:

#### Başlık:
- "Yeni Mesaj Gönder"

#### Alıcı Filtreleri (Tabs):

**3 Tab:**
1. **Veliler** (👨‍👩‍👧)
2. **Öğrenciler** (🎓)
3. **Öğretmenler** (👨‍🏫)

**Aktif Tab:**
- Mavi alt border
- Mavi metin
- Bold font

#### Arama ve Toplu Seçim:

- **Arama Çubuğu**:
  - Placeholder: "Kişi ara..."
  - İkon: 🔍
  - Real-time filtreleme

- **Toplu Seçim Butonu**:
  - "Tümünü Seç" / "Tümünü Bırak"
  - Toggle buton
  - Sağ üst köşe

#### Kişi Listesi:

**Her Kişi Öğesi:**
- Checkbox (sol)
- Avatar (küçük)
- Ad Soyad
- Ek bilgi (Sınıf/Branş)
- Hover: Açık gri arka plan

**Seçili Sayaç:**
- "X kişi seçildi" metni
- Mavi renk
- Liste üstünde

#### Mesaj Yazma Alanı:

- **Textarea**:
  - Placeholder: "Mesajınızı buraya yazın..."
  - Min height: 100px
  - Max karakter: 500
  - Karakter sayacı

#### Gönder Butonu:

- **Dinamik Metin**:
  - Seçili yok: "Alıcı seçin"
  - 1 kişi: "1 kişiye gönder"
  - Çoklu: "X kişiye gönder"
  
- **Stil**:
  - Yeşil arka plan (`bg-green-600`)
  - Tam genişlik
  - Disabled: Alıcı veya mesaj yoksa

---

## 🎯 Mesajlaşma Modülü Teknik Yapı

### Component Yapısı:
```
/app/messages/page.tsx (Ana sayfa)
/components/messages/
  - MessagingLayout.tsx (3 sütunlu layout)
  - ConversationList.tsx (Sol panel)
  - ConversationWindow.tsx (Orta panel)
  - NewMessagePanel.tsx (Sağ panel)
  - MessageBubble.tsx (Mesaj baloncuğu)
  - ConversationItem.tsx (Konuşma liste öğesi)
  - RecipientSelector.tsx (Alıcı seçici)
```

### State Yönetimi:
- Konuşma listesi (conversations)
- Aktif konuşma (activeConversation)
- Mesaj listesi (messages)
- Seçili alıcılar (selectedRecipients)
- Yeni mesaj metni (newMessage)
- Filtre ve arama state'leri

### Veri Modelleri:

**Conversation (Konuşma):**
```typescript
interface Conversation {
  id: string;
  participantId: string;
  participantName: string;
  participantRole: 'parent' | 'student' | 'teacher';
  participantAvatar?: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
}
```

**Message (Mesaj):**
```typescript
interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  isSent: boolean; // true: gönderilen, false: alınan
}
```

**Recipient (Alıcı):**
```typescript
interface Recipient {
  id: string;
  name: string;
  role: 'parent' | 'student' | 'teacher';
  avatar?: string;
  additionalInfo?: string; // Sınıf/Branş
}
```

### Özellikler:
- Real-time mesajlaşma (WebSocket hazır yapı)
- Okundu bilgisi
- Online/Offline durumu
- Toplu mesaj gönderme
- Mesaj arama
- Emoji desteği
- Dosya ekleme (hazır yapı)
- Responsive 3 sütun düzeni
- Keyboard shortcuts (Enter: gönder)

---

# 📂 İÇERİK YÖNETİMİ MODÜLÜ ✅

## 🔄 İçerik Yönetimi Akışı

1. **İçerik Türü Seçimi** → PDF, Resim veya Video ekleme seçimi
2. **İçerik Yükleme** → Dosya yükleme, sınıf/ders atama
3. **İçerik Listeleme** → Tüm içerikleri görüntüleme, arama, filtreleme
4. **İçerik İşlemleri** → İndirme, görüntüleme, düzenleme, silme

---

## ✅ 29. İçerik Yönetimi Ana Menü

**Sayfa**: `/content`

### Bileşenler:

#### Sayfa Başlığı:
- "İçerik Yönetimi Modülü" ana başlık
- "İçerik türü seçerek yeni içerik ekleyin" alt başlık

#### İçerik Türü Kartları (3 adet, Grid: 3 sütun):

1. **PDF Ekle**
   - İkon: 📄 (PDF belgesi)
   - Açıklama: "Yeni bir PDF dosyası kaydı ekleyin"
   - Buton: "PDF Ekle"
   - Yönlendirme: `/content?action=add&type=pdf`

2. **Resim Ekle**
   - İkon: 🖼️ (Resim çerçevesi)
   - Açıklama: "Yeni bir fotoğraf kaydı ekleyin"
   - Buton: "Resim Ekle"
   - Yönlendirme: `/content?action=add&type=image`

3. **Video Ekle**
   - İkon: 🎥 (Video kamera)
   - Açıklama: "Yeni bir video kaydı ekleyin"
   - Buton: "Video Ekle"
   - Yönlendirme: `/content?action=add&type=video`

**Kart Stili**: Beyaz arka plan, renkli ikon arka planı, hover efekti

---

## ✅ 30. İçerik Listeleme Sayfası

**Sayfa**: `/content?action=list`

### Bileşenler:

#### Navigasyon İzi:
- Ana Sayfa > İçerikler > Görüntüle

#### Sayfa Başlığı:
- "İçerik Kayıt Modülü" ana başlık
- "İçerikler" alt başlık

#### Bilgi Metriği:
- Toplam içerik sayısı göstergesi
- Türe göre ayrı sayaçlar (PDF: X, Resim: Y, Video: Z)

#### Hızlı Eylem Butonu:
- **+ İçerik Ekle** butonu (kahverengi/turuncu gradient)
- Yönlendirme: Ana menüye

#### Filtreler:
- **İçerik Türü Dropdown**: Tümü, PDF, Resim, Video
- **Sınıf Dropdown**: Tüm Sınıflar, 9, 10, 11, 12
- **Ders Dropdown**: Tüm Dersler, Matematik, Fizik, vb.

#### Arama:
- Arama çubuğu: "İçeriklerde ara..."
- İkon: 🔍

#### İçerik Listesi Tablosu:

**Sütunlar:**
- Önizleme (Thumbnail/İkon)
- İçerik Türü (Badge: PDF/Resim/Video)
- Açıklama
- Dosya Adı
- Sınıf
- Ders
- Yüklenme Tarihi
- Dosya Boyutu
- İşlemler (Görüntüle/İndir/Düzenle/Sil)

**İşlem Butonları:**
- Görüntüle (mavi göz ikonu) - Modal veya yeni sekmede açar
- İndir (yeşil indirme ikonu)
- Düzenle (turuncu kalem ikonu)
- Sil (kırmızı çöp kutusu ikonu)

**Boş Durum:**
- "Hiç içerik bulunmamaktadır."
- İkon: 📂
- "İçerik Ekle" butonu

#### Sayfalama:
- Önceki / Sayfa Numarası / Sonraki

---

## ✅ 31. İçerik Ekleme Formu (PDF)

**Sayfa**: `/content?action=add&type=pdf`

### Bileşenler:

#### Kontroller:
- **Geri Dön** butonu (sol üst, mavi)

#### Başlık:
- "PDF Ekle"

#### Form Alanları:

1. **PDF Açıklaması**
   - Tip: Text input
   - Placeholder: "PDF açıklaması giriniz..."
   - Max karakter: 200

2. **Sınıf Seçimi**
   - Tip: Dropdown
   - Placeholder: "Sınıf Seçin"
   - Seçenekler: 9, 10, 11, 12

3. **Ders Seçimi**
   - Tip: Dropdown
   - Placeholder: "Ders Seçin"
   - Seçenekler: Matematik, Fizik, Kimya, vb.

4. **PDF Dosyası Yükleme**
   - Tip: File upload (Drag & Drop destekli)
   - Kabul edilen format: .pdf
   - Maksimum boyut: 50MB
   - Önizleme: Dosya adı ve boyutu
   - İlerleme çubuğu (yükleme sırasında)

#### Eylem Butonları:
- **İptal Et** (gri, outline)
- **Kaydet** (mavi, solid)

---

## ✅ 32. İçerik Ekleme Formu (Resim)

**Sayfa**: `/content?action=add&type=image`

### Bileşenler:

#### Kontroller:
- **Geri Dön** butonu (sol üst, mavi)

#### Başlık:
- "Resim Ekle"

#### Form Alanları:

1. **Resim Açıklaması**
   - Tip: Text input
   - Placeholder: "Resim açıklaması giriniz..."
   - Max karakter: 200

2. **Sınıf Seçimi**
   - Tip: Dropdown
   - Placeholder: "Sınıf Seçin"
   - Seçenekler: 9, 10, 11, 12

3. **Ders Seçimi**
   - Tip: Dropdown
   - Placeholder: "Ders Seçin"
   - Seçenekler: Matematik, Fizik, Kimya, vb.

4. **Resim Dosyası Yükleme**
   - Tip: File upload (Drag & Drop destekli)
   - Kabul edilen formatlar: .jpg, .jpeg, .png, .gif
   - Maksimum boyut: 10MB
   - Önizleme: Thumbnail görüntü
   - Çoklu yükleme desteği

#### Eylem Butonları:
- **İptal Et** (gri, outline)
- **Kaydet** (mavi, solid)

---

## ✅ 33. İçerik Ekleme Formu (Video)

**Sayfa**: `/content?action=add&type=video`

### Bileşenler:

#### Kontroller:
- **Geri Dön** butonu (sol üst, mavi)

#### Başlık:
- "Video Ekle"

#### Form Alanları:

1. **Video Açıklaması**
   - Tip: Text input
   - Placeholder: "Video açıklaması giriniz..."
   - Max karakter: 200

2. **Sınıf Seçimi**
   - Tip: Dropdown
   - Placeholder: "Sınıf Seçin"
   - Seçenekler: 9, 10, 11, 12

3. **Ders Seçimi**
   - Tip: Dropdown
   - Placeholder: "Ders Seçin"
   - Seçenekler: Matematik, Fizik, Kimya, vb.

4. **Video Dosyası Yükleme**
   - Tip: File upload (Drag & Drop destekli)
   - Kabul edilen formatlar: .mp4, .avi, .mov, .mkv
   - Maksimum boyut: 500MB
   - Önizleme: Video thumbnail ve süre
   - İlerleme çubuğu (yükleme sırasında)

#### Eylem Butonları:
- **İptal Et** (gri, outline)
- **Kaydet** (mavi, solid)

---

## 🎯 İçerik Yönetimi Modülü Teknik Yapı

### Dynamic Routing:
```
/content -> Ana menü (3 kart)
/content?action=list -> İçerik listesi
/content?action=add&type=pdf -> PDF ekleme formu
/content?action=add&type=image -> Resim ekleme formu
/content?action=add&type=video -> Video ekleme formu
/content?action=edit&id=123 -> İçerik düzenleme
/content?action=view&id=123 -> İçerik görüntüleme
```

### Component Yapısı:
```
/app/content/page.tsx (Ana sayfa)
/components/content/
  - ContentCards.tsx (Ana menü kartları)
  - ContentList.tsx (İçerik listesi)
  - ContentAddForm.tsx (Ekleme formu - tüm tipler)
  - ContentPreview.tsx (Önizleme modal)
  - FileUploader.tsx (Drag & drop yükleyici)
```

### State Yönetimi:
- İçerik listesi (contents)
- Filtreler (type, class, course)
- Arama terimi (searchTerm)
- Yükleme durumu (uploadProgress)
- Seçili içerik (selectedContent)

### Veri Modelleri:

**Content (İçerik):**
```typescript
interface Content {
  id: string;
  type: 'pdf' | 'image' | 'video';
  title: string;
  description: string;
  fileName: string;
  fileUrl: string;
  fileSize: number; // bytes
  thumbnail?: string;
  classId: string;
  courseId: string;
  uploadedBy: string;
  uploadedAt: string;
  viewCount: number;
  downloadCount: number;
}
```

### Özellikler:
- Drag & Drop dosya yükleme
- Çoklu dosya yükleme (resimler için)
- Dosya boyutu ve format validasyonu
- Yükleme ilerleme çubuğu
- Thumbnail oluşturma (resim ve video)
- Dosya önizleme (modal)
- Dosya indirme
- Filtreleme ve arama
- Sayfalama
- Responsive tasarım
- Dosya boyutu formatı (KB, MB, GB)

### Dosya Boyutu Limitleri:
- PDF: 50MB
- Resim: 10MB (her biri)
- Video: 500MB

### Desteklenen Formatlar:
- PDF: .pdf
- Resim: .jpg, .jpeg, .png, .gif
- Video: .mp4, .avi, .mov, .mkv

---

# 🔔 BİLDİRİM (DUYURULAR) MODÜLÜ ✅

## 🔄 Bildirim Akışı

1. **Bildirim Ana Sayfası** → Geçmiş bildirimleri görüntüleme veya yeni bildirim gönderme
2. **Bildirim Gönderme** → Alıcı seçimi, başlık ve içerik yazma
3. **Bildirim Takibi** → Gönderilen bildirimlerin listesi ve detayları

---

## ✅ 34. Bildirim Ana Sayfası

**Sayfa**: `/notifications`

### Bileşenler:

#### Sayfa Başlığı:
- "Bildirimler" ana başlık
- "Gönderilen bildirimleri görüntüleyin veya yeni bildirim gönderin" alt başlık

#### Yeni Bildirim Butonu:
- **Bildirim Gönder** butonu (merkezi, büyük)
- İkon: 🔔
- Gradient arka plan (mavi)
- Yönlendirme: `/notifications?action=send`

#### Geçmiş Bildirimler Listesi:

**Boş Durum:**
- İkon: 🔔 (büyük, açık gri)
- Mesaj: "Henüz hiçbir bildirim yok."
- Alt mesaj: "Bildirim geldiği zaman size haber vereceğiz."

**Dolu Durum (Bildirim Kartları):**

Her bildirim kartı yapısı:
- **Başlık**: Bold, koyu gri
- **Alıcı Badge**: (Öğrenciler/Veliler/Öğretmenler/Tümü) - Renkli
- **İçerik Önizleme**: İlk 100 karakter, açık gri
- **Gönderen**: Küçük font, gri
- **Tarih ve Saat**: Sağ üst köşe
- **Durum Badge**: Gönderildi (yeşil) / Bekliyor (turuncu)
- **İstatistikler**: Gönderilen kişi sayısı

**Kart Stili:**
- Beyaz arka plan
- Border ve gölge
- Hover efekti
- Tıklanabilir (detay modal)

#### Filtreler:
- **Alıcı Türü**: Tümü, Öğrenciler, Veliler, Öğretmenler
- **Tarih Aralığı**: Son 7 gün, Son 30 gün, Tümü
- **Arama**: Başlık veya içerikte ara

---

## ✅ 35. Bildirim Gönderme Formu

**Sayfa**: `/notifications?action=send`

### Bileşenler:

#### Kontroller:
- **Geri Dön** butonu (sol üst, mavi)
- **Gönder** butonu (sağ üst, başlangıçta gri/pasif)

#### Başlık:
- "Yeni Bildirim Gönder"

#### Form Alanları:

1. **Alıcı Seçimi**
   - Tip: Dropdown
   - Label: "Alıcı Seçin"
   - Placeholder: "Alıcı Seçin"
   - Seçenekler:
     - Öğrenciler (🎓)
     - Veliler (👨‍👩‍👧)
     - Öğretmenler (👨‍🏫)
     - Tümü (📢)
   - Zorunlu alan

2. **Gönderen**
   - Tip: Text input
   - Label: "Kimden"
   - Placeholder: "Kimden..."
   - Örnek: "Okul Yönetimi", "Müdürlük"
   - Max karakter: 100
   - Zorunlu alan

3. **Bildirim Başlığı**
   - Tip: Text input
   - Label: "Bildirim Başlığı"
   - Placeholder: "Bildirim Başlığı..."
   - Max karakter: 100
   - Zorunlu alan

4. **Bildirim İçeriği**
   - Tip: Textarea (çok satırlı)
   - Label: "Bildirim İçeriği"
   - Placeholder: "Bildirim İçeriği..."
   - Min yükseklik: 150px
   - Max karakter: 500
   - Karakter sayacı
   - Zorunlu alan

#### Önizleme Alanı (Opsiyonel):
- Mobil bildirim görünümü simülasyonu
- Başlık ve içerik önizlemesi
- Gerçek zamanlı güncelleme

#### Alıcı Sayısı Göstergesi:
- "Bu bildirim X kişiye gönderilecek"
- Dinamik sayı (seçilen alıcı grubuna göre)

#### Eylem Butonları:
- **İptal Et** (gri, outline)
- **Gönder** (mavi, solid)
  - Aktif olma koşulu: Tüm alanlar dolu
  - Tıklandığında onay modalı

#### Onay Modalı:
- Başlık: "Bildirimi Göndermek İstediğinize Emin Misiniz?"
- İçerik: Alıcı sayısı ve özet bilgi
- Butonlar: İptal / Evet, Gönder

---

## ✅ 36. Bildirim Detay Modalı

**Açılış**: Geçmiş bildirim kartına tıklandığında

### Bileşenler:

#### Modal Başlığı:
- Bildirim başlığı
- Kapat butonu (X)

#### Bildirim Bilgileri:
- **Gönderen**: İkon + metin
- **Alıcı Grubu**: Badge
- **Gönderim Tarihi**: Tarih ve saat
- **Durum**: Badge (Gönderildi/Bekliyor)

#### Bildirim İçeriği:
- Tam metin
- Scrollable (uzun içerik için)

#### İstatistikler:
- Gönderilen kişi sayısı
- Görüntülenme sayısı (opsiyonel)
- Tıklanma sayısı (opsiyonel)

#### Eylem Butonları:
- **Tekrar Gönder** (mavi)
- **Sil** (kırmızı)
- **Kapat** (gri)

---

## 🎯 Bildirim Modülü Teknik Yapı

### Dynamic Routing:
```
/notifications -> Ana sayfa (geçmiş bildirimler + gönder butonu)
/notifications?action=send -> Bildirim gönderme formu
```

### Component Yapısı:
```
/app/notifications/page.tsx (Ana sayfa)
/components/notifications/
  - NotificationList.tsx (Ana sayfa - liste)
  - NotificationSendForm.tsx (Gönderme formu)
  - NotificationCard.tsx (Bildirim kartı)
  - NotificationDetailModal.tsx (Detay modal)
  - NotificationPreview.tsx (Mobil önizleme)
```

### State Yönetimi:
- Bildirim listesi (notifications)
- Filtreler (recipientType, dateRange)
- Arama terimi (searchTerm)
- Form verileri (formData)
- Modal durumu (showModal, selectedNotification)

### Veri Modelleri:

**Notification (Bildirim):**
```typescript
interface Notification {
  id: string;
  title: string;
  content: string;
  sender: string;
  recipientType: 'students' | 'parents' | 'teachers' | 'all';
  recipientCount: number;
  status: 'sent' | 'pending' | 'failed';
  sentAt: string;
  viewCount?: number;
  clickCount?: number;
}
```

### Özellikler:
- Toplu bildirim gönderme
- Alıcı grubu seçimi (Öğrenci/Veli/Öğretmen/Tümü)
- Karakter sayacı
- Mobil bildirim önizlemesi
- Geçmiş bildirimleri listeleme
- Filtreleme ve arama
- Bildirim detay modalı
- Tekrar gönderme özelliği
- İstatistikler (gönderilen, görüntülenen)
- Onay modalı
- Responsive tasarım

### Alıcı Grupları ve Renkleri:
- **Öğrenciler**: Mavi badge (🎓)
- **Veliler**: Mor badge (👨‍👩‍👧)
- **Öğretmenler**: Yeşil badge (👨‍🏫)
- **Tümü**: Turuncu badge (📢)

### Durum Badge'leri:
- **Gönderildi**: Yeşil (✓)
- **Bekliyor**: Turuncu (⏳)
- **Başarısız**: Kırmızı (✗)

---

# 🎯 REHBERLİK MODÜLÜ ✅

## 🔄 Rehberlik Akışı

1. **Öğrenci Listesi** → Rehberlik notu girilecek öğrenciyi bulma
2. **Not Girişi** → Öğrenciye özel rehberlik/gözlem notu kaydetme
3. **Profil Görüntüleme** → Öğrencinin geçmiş rehberlik notlarını inceleme

---

## ✅ 37. Rehberlik Modülü - Öğrenci Listesi

**Sayfa**: `/guidance`

### Bileşenler:

#### Sayfa Başlığı:
- "Rehberlik Modülü" ana başlık
- "Öğrenci seçerek not girin veya profil görüntüleyin" alt başlık

#### Arama:
- Arama çubuğu: "Öğrenci adı veya TC kimlik..."
- İkon: 🔍
- Real-time filtreleme

#### Öğrenci Listesi Tablosu:

**Sütunlar:**
- Ad
- Soyad
- TC No
- Sınıf
- Şube
- İşlemler (Not Gir / Profil)

**İşlem Butonları:**
- **Not Gir** (koyu mavi)
  - Yönlendirme: `/guidance?action=add-note&studentId=123`
- **Profil** (koyu mavi, outline)
  - Yönlendirme: `/guidance?action=profile&studentId=123`

**Örnek Kayıt:**
- Ad: Erçin
- Soyad: Akkaya
- TC No: 63787247082
- Sınıf: 9
- Şube: A

#### Sayfalama:
- Önceki / Sayfa Numarası / Sonraki

---

## ✅ 38. Öğrenciye Not Gir Formu

**Sayfa**: `/guidance?action=add-note&studentId=123`

### Bileşenler:

#### Başlık:
- "Öğrenciye Not Gir"
- Öğrenci bilgisi: "Erçin Akkaya - 9-A"

#### Form Alanları:

1. **Not Başlığı**
   - Tip: Text input
   - Placeholder: "Bir başlık ekleyin"
   - Max karakter: 50
   - Karakter sayacı: "0/50"
   - Zorunlu alan

2. **Not İçeriği**
   - Tip: Textarea (çok satırlı)
   - Placeholder: "Notunuzu girin..."
   - Min yükseklik: 150px
   - Max karakter: 500
   - Karakter sayacı: "0/500"
   - Zorunlu alan

3. **Veli Görüntüleme Toggle**
   - Label: "Veli Görüntülenmesin"
   - Toggle buton:
     - Kapalı (Yok): Kırmızı arka plan
     - Açık (Var): Mavi arka plan
   - Varsayılan: Açık (Veli görebilir)

#### Kontroller:
- **Geri Dön** butonu (sol alt, koyu mavi)
- **Kaydet** butonu (sağ alt, başlangıçta gri/pasif)
  - Aktif olma koşulu: Başlık ve içerik dolu

---

## ✅ 39. Öğrenci Profil Ekranı

**Sayfa**: `/guidance?action=profile&studentId=123`

### Bileşenler:

#### Başlık:
- Öğrenci bilgisi: "Erçin Akkaya - 9-A"
- "Rehberlik Notları" alt başlığı

#### Kontroller:
- **Geri Dön** butonu (sol üst)
- **Yeni Not Ekle** butonu (sağ üst, mavi)

#### Filtreler:
- **Tarih Aralığı**: Son 30 gün, Son 90 gün, Tümü
- **Veli Görünürlüğü**: Tümü, Görünür, Gizli
- **Arama**: Not başlığı veya içeriğinde ara

#### Not Listesi (Kartlar):

**Her Not Kartı:**
- **Tarih**: Sağ üst köşe (örn: "10.11.2025 14:30")
- **Başlık**: Bold, koyu gri
- **İçerik**: Normal font, açık gri
- **Veli Görünürlük Badge**:
  - Görünür: Yeşil badge (👁️ Veli Görebilir)
  - Gizli: Kırmızı badge (🚫 Veli Göremez)
- **Yazan**: Küçük font, gri (örn: "Yazan: Rehber Öğretmen")
- **İşlem Butonları**:
  - Düzenle (mavi kalem ikonu)
  - Sil (kırmızı çöp kutusu ikonu)

**Boş Durum:**
- İkon: 📝
- Mesaj: "Henüz rehberlik notu bulunmamaktadır."
- "Not Ekle" butonu

**Kart Stili:**
- Beyaz arka plan
- Border ve gölge
- Hover efekti
- Kronolojik sıralama (en yeni üstte)

---

## 🎯 Rehberlik Modülü Teknik Yapı

### Dynamic Routing:
```
/guidance -> Öğrenci listesi
/guidance?action=add-note&studentId=123 -> Not ekleme formu
/guidance?action=profile&studentId=123 -> Öğrenci profil/notlar
/guidance?action=edit-note&noteId=456 -> Not düzenleme
```

### Component Yapısı:
```
/app/guidance/page.tsx (Ana sayfa)
/components/guidance/
  - StudentList.tsx (Öğrenci listesi)
  - AddNoteForm.tsx (Not ekleme formu)
  - StudentProfile.tsx (Profil ve notlar)
  - NoteCard.tsx (Not kartı)
```

### State Yönetimi:
- Öğrenci listesi (students)
- Seçili öğrenci (selectedStudent)
- Notlar listesi (notes)
- Filtreler (dateRange, visibility)
- Arama terimi (searchTerm)

### Veri Modelleri:

**Student (Öğrenci):**
```typescript
interface Student {
  id: string;
  firstName: string;
  lastName: string;
  tcNo: string;
  classId: string;
  branchId: string;
  noteCount: number;
}
```

**GuidanceNote (Rehberlik Notu):**
```typescript
interface GuidanceNote {
  id: string;
  studentId: string;
  title: string;
  content: string;
  isVisibleToParent: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt?: string;
}
```

### Özellikler:
- Öğrenci arama ve filtreleme
- Not ekleme (başlık + içerik)
- Veli görünürlük kontrolü
- Geçmiş notları listeleme
- Not düzenleme ve silme
- Kronolojik sıralama
- Karakter limitleri (Başlık: 50, İçerik: 500)
- Filtreleme (tarih, görünürlük)
- Responsive tasarım
- Sayfalama

### Veli Görünürlük:
- **Görünür** (Varsayılan): Yeşil badge, 👁️ ikonu
- **Gizli**: Kırmızı badge, 🚫 ikonu
- Toggle ile kolayca değiştirilebilir

### Rol Bazlı Erişim:
- **Admin**: Tüm işlemler
- **Öğretmen/Rehber**: Tüm işlemler
- **Öğrenci**: Sadece kendi notlarını görüntüleme (veli görünür olanlar)
- **Veli**: Sadece çocuğunun notlarını görüntüleme (veli görünür olanlar)

---

# 👤 ÖĞRENCİ PROFİLİ MODÜLÜ ✅

## 🔄 Öğrenci Profili Akışı

1. **Sınıf/Şube Seçimi** → Filtreleme yaparak öğrenci listesini daraltma
2. **Öğrenci Seçimi** → Profili görüntülenecek öğrenciyi seçme
3. **Profil Görüntüleme** → 4 sekmeli veri görüntüleme (Yoklama, Ödev, Rehberlik, Sınav)

---

## ✅ 40. Sınıf ve Şube Seçimi Ekranı

**Sayfa**: `/profile`

### Bileşenler:

#### Kontroller:
- **Geri Dön** butonu (sol üst, gri)
- **Devam Et** butonu (sağ üst, başlangıçta gri/pasif)

#### Başlık:
- "Sınıf ve Şube Seçimi"
- "Öğrenci profilini görüntülemek için sınıf ve şube seçin" alt başlık

#### Form Alanları:

1. **Sınıf Seçimi**
   - Tip: Dropdown
   - Placeholder: "Sınıf Seçin"
   - Seçenekler: 9, 10, 11, 12
   - Zorunlu alan

2. **Şube Seçimi**
   - Tip: Dropdown
   - Placeholder: "Şube Seçin"
   - Seçenekler: A, B, C, D (sınıfa göre dinamik)
   - Zorunlu alan
   - Disabled: Sınıf seçilmeden

#### Eylem Butonu:
- **Devam Et** butonu
- Aktif olma koşulu: Sınıf ve şube seçili
- Yönlendirme: `/profile?class=9&branch=A`

---

## ✅ 41. Öğrenci Seçimi Ekranı

**Sayfa**: `/profile?class=9&branch=A`

### Bileşenler:

#### Başlık:
- Dinamik başlık: "{Sınıf}-{Şube} Sınıfı - Öğrenci Seçimi"
- Örnek: "9-A Sınıfı - Öğrenci Seçimi"

#### Kontroller:
- **Geri Dön** butonu (sol üst)

#### Arama/Filtreleme:
- Arama çubuğu: "Öğrenci adı veya TC kimlik..."
- İkon: 🔍
- Real-time filtreleme

#### Öğrenci Listesi:

**Liste Öğeleri (Kartlar veya Tablo):**
- Her öğrenci için:
  - Ad Soyad
  - TC No
  - Öğrenci No
  - Profil Resmi (opsiyonel)
  - "Profili Görüntüle" butonu

**Kart Stili:**
- Beyaz arka plan
- Hover efekti
- Tıklanabilir
- Yönlendirme: `/profile?studentId=123`

---

## ✅ 42. Öğrenci Profil Bilgi Ekranı (Sekmeli)

**Sayfa**: `/profile?studentId=123`

### Bileşenler:

#### Üst Bilgi Alanı:
- **Öğrenci Bilgileri Kartı**:
  - Profil resmi (büyük, yuvarlak)
  - Ad Soyad (bold, büyük font)
  - Sınıf/Şube badge
  - TC No
  - Öğrenci No
  - Veli İletişim (telefon, e-posta)

#### Kontroller:
- **Geri Dön** butonu (sol üst)
- **Yazdır** butonu (sağ üst)

#### Navigasyon Sekmeleri (4 adet):

1. **Yoklama Bilgisi** 📊
2. **Ödev Bilgisi** 📝
3. **Rehberlik Bilgisi** 🎯
4. **Deneme Sınavı Bilgisi** 📈

**Sekme Stili:**
- Aktif: Mavi alt border, mavi metin
- Pasif: Gri metin, hover efekti

---

## 📊 Sekme 1: Yoklama Bilgisi

### Bileşenler:

#### Başlık:
- "{Ad} İsimli Öğrencinin Yoklama Bilgisi"

#### Özet Kartları (Grid: 3 sütun):

1. **Toplam Ders Günü**
   - İkon: 📅
   - Sayı: "120"

2. **Devamsızlık**
   - İkon: ❌
   - Sayı: "5"
   - Yüzde: "4.2%"
   - Renk: Kırmızı

3. **Devam Oranı**
   - İkon: ✅
   - Yüzde: "95.8%"
   - Renk: Yeşil

#### Grafik:
- **Aylık Devamsızlık Trendi (Line Chart)**
  - X Ekseni: Aylar
  - Y Ekseni: Devamsızlık sayısı
  - Renk: Kırmızı çizgi

#### Detaylı Tablo:
**Sütunlar:**
- Yoklama Tarihi
- Ders Saati
- Ders Adı
- Durum (Var/Yok/İzinli)

**Durum Badge'leri:**
- Var: Yeşil
- Yok: Kırmızı
- İzinli: Turuncu

#### Sayfalama:
- Önceki / Sayfa Numarası / Sonraki

---

## 📝 Sekme 2: Ödev Bilgisi

### Bileşenler:

#### Başlık:
- "{Ad} İsimli Öğrencinin Ödev Bilgisi"

#### Özet Kartları (Grid: 3 sütun):

1. **Toplam Ödev**
   - İkon: 📋
   - Sayı: "45"

2. **Tamamlanan**
   - İkon: ✅
   - Sayı: "38"
   - Yüzde: "84%"
   - Renk: Yeşil

3. **Eksik**
   - İkon: ❌
   - Sayı: "7"
   - Yüzde: "16%"
   - Renk: Kırmızı

#### Grafik:
- **Ödev Tamamlama Oranı (Pie Chart)**
  - Tamamlanan: Yeşil (84%)
  - Eksik: Kırmızı (16%)

#### Detaylı Tablo:
**Sütunlar:**
- Ödev Adı
- Ders
- Veriliş Tarihi
- Bitiş Tarihi
- Teslim Durumu

**Durum Badge'leri:**
- Yapıldı: Yeşil
- Yapılmadı: Kırmızı
- Geç Teslim: Turuncu

---

## 🎯 Sekme 3: Rehberlik Bilgisi

### Bileşenler:

#### Başlık:
- "{Ad} İsimli Öğrencinin Rehberlik Bilgisi"

#### Özet Kartları (Grid: 2 sütun):

1. **Toplam Not Sayısı**
   - İkon: 📝
   - Sayı: "12"

2. **Son Not Tarihi**
   - İkon: 📅
   - Tarih: "10.11.2025"

#### Grafik:
- **Rehberlik Notları Zaman Çizelgesi (Timeline)**
  - Kronolojik sıralama
  - Her not için nokta ve çizgi
  - Hover'da not detayı

#### Not Listesi (Kartlar):
**Her Not Kartı:**
- Tarih (sağ üst)
- Başlık (bold)
- İçerik önizleme
- Veli görünürlük badge'i
- Yazan bilgisi
- "Detayları Gör" butonu

---

## 📈 Sekme 4: Deneme Sınavı Bilgisi

### Bileşenler:

#### Başlık:
- "{Ad} İsimli Öğrencinin Deneme Sınavı Bilgisi"

#### Özet Kartları (Grid: 4 sütun):

1. **Toplam Sınav**
   - İkon: 📝
   - Sayı: "8"

2. **Ortalama Puan**
   - İkon: 📊
   - Puan: "385"

3. **En Yüksek Puan**
   - İkon: 🏆
   - Puan: "425"

4. **Ortalama Sıralama**
   - İkon: 🎯
   - Sıra: "45/250"

#### Grafikler:

1. **Sınav Puanları Trendi (Line Chart)**
   - X Ekseni: Sınav tarihleri
   - Y Ekseni: Toplam puan
   - Hedef çizgisi (örn: 400 puan)

2. **Ders Bazında Net Dağılımı (Bar Chart)**
   - X Ekseni: Dersler (Türkçe, Mat, Fizik, vb.)
   - Y Ekseni: Ortalama net sayısı

#### Detaylı Tablo:
**Sütunlar:**
- Sınav Adı
- Tarih
- Türkçe Net
- Matematik Net
- Fen Net
- Sosyal Net
- Toplam Puan
- Sıralama

**Sıralama Badge'i:**
- İlk 10: Altın
- İlk 50: Gümüş
- İlk 100: Bronz
- Diğer: Gri

---

## 🎯 Öğrenci Profili Modülü Teknik Yapı

### Dynamic Routing:
```
/profile -> Sınıf/Şube seçimi
/profile?class=9&branch=A -> Öğrenci listesi
/profile?studentId=123 -> Profil görüntüleme
/profile?studentId=123&tab=attendance -> Yoklama sekmesi
/profile?studentId=123&tab=homework -> Ödev sekmesi
/profile?studentId=123&tab=guidance -> Rehberlik sekmesi
/profile?studentId=123&tab=exam -> Sınav sekmesi
```

### Component Yapısı:
```
/app/profile/page.tsx (Ana sayfa)
/components/profile/
  - ClassBranchSelector.tsx (Sınıf/Şube seçimi)
  - StudentSelector.tsx (Öğrenci listesi)
  - StudentProfileLayout.tsx (Ana profil layout)
  - StudentInfoCard.tsx (Üst bilgi kartı)
  - AttendanceTab.tsx (Yoklama sekmesi)
  - HomeworkTab.tsx (Ödev sekmesi)
  - GuidanceTab.tsx (Rehberlik sekmesi)
  - ExamTab.tsx (Sınav sekmesi)
```

### State Yönetimi:
- Seçili sınıf/şube (selectedClass, selectedBranch)
- Öğrenci listesi (students)
- Seçili öğrenci (selectedStudent)
- Aktif sekme (activeTab)
- Yoklama verileri (attendanceData)
- Ödev verileri (homeworkData)
- Rehberlik notları (guidanceNotes)
- Sınav sonuçları (examResults)

### Veri Modelleri:

**StudentProfile (Öğrenci Profili):**
```typescript
interface StudentProfile {
  id: string;
  firstName: string;
  lastName: string;
  tcNo: string;
  studentNo: string;
  classId: string;
  branchId: string;
  profilePhoto?: string;
  parentPhone: string;
  parentEmail: string;
}
```

**AttendanceRecord (Yoklama Kaydı):**
```typescript
interface AttendanceRecord {
  id: string;
  studentId: string;
  date: string;
  lessonHour: number;
  courseName: string;
  status: 'present' | 'absent' | 'excused';
}
```

**ExamResult (Sınav Sonucu):**
```typescript
interface ExamResult {
  id: string;
  studentId: string;
  examName: string;
  examDate: string;
  turkishNet: number;
  mathNet: number;
  scienceNet: number;
  socialNet: number;
  totalScore: number;
  ranking: number;
  totalStudents: number;
}
```

### Özellikler:
- Sınıf/Şube filtreleme
- Öğrenci arama
- 4 sekmeli veri görüntüleme
- Özet kartları (istatistikler)
- Grafikler (Line, Bar, Pie, Timeline)
- Detaylı tablolar
- Sayfalama
- PDF yazdırma
- Responsive tasarım
- Renkli badge'ler ve göstergeler

### Grafik Kütüphanesi Önerisi:
- **Recharts** veya **Chart.js**
- Line Chart (trend)
- Bar Chart (karşılaştırma)
- Pie Chart (oran)
- Timeline (kronoloji)

### Renk Kodları:
- **Başarı/Var**: Yeşil (#10B981)
- **Hata/Yok**: Kırmızı (#EF4444)
- **Uyarı/İzinli**: Turuncu (#F59E0B)
- **Bilgi**: Mavi (#3B82F6)
- **Nötr**: Gri (#6B7280)

---

# 📢 DUYURULAR MODÜLÜ (WEB PANELİ) ✅

## 🔄 Duyurular Akışı

1. **Duyuru Gönderme** → Rol seçimi, başlık ve içerik yazma
2. **Duyuru Yayınlama** → Web panelinde ilgili kullanıcılara gösterme
3. **Duyuru Takibi** → Gönderilen duyuruları listeleme ve yönetme
4. **Bildirim Merkezi** → TopBar'daki bildirim simgesinden duyuruları görüntüleme

---

## ✅ 43. Duyurular Ana Sayfası

**Sayfa**: `/announcements`

### Bileşenler:

#### Sayfa Başlığı:
- "Duyurular" ana başlık
- "Web paneli duyurularını yönetin" alt başlık

#### Yeni Duyuru Butonu:
- **Duyuru Gönder** butonu (merkezi, büyük)
- İkon: 📢
- Gradient arka plan (mavi)
- Yönlendirme: `/announcements?action=create`

#### Geçmiş Duyurular Listesi:

**Boş Durum:**
- İkon: 📢 (büyük, açık gri)
- Mesaj: "Eklenmiş bir duyuru yok."
- Alt mesaj: "Yeni duyuru eklemek için yukarıdaki butona tıklayın."

**Dolu Durum (Duyuru Kartları):**

Her duyuru kartı yapısı:
- **Başlık**: Bold, koyu gri
- **Alıcı Rol Badge**: (Öğretmenler/Öğrenciler/Veliler/Tümü) - Renkli
- **İçerik Önizleme**: İlk 150 karakter, açık gri
- **Yayın Tarihi**: Sağ üst köşe
- **Durum Badge**: Aktif (yeşil) / Pasif (gri)
- **Görüntülenme Sayısı**: Kaç kişi gördü

**Kart Stili:**
- Beyaz arka plan
- Border ve gölge
- Hover efekti
- İşlem butonları (Düzenle/Sil/Aktif-Pasif)

#### Sayfalama:
- Önceki / Sayfa Numarası / Sonraki

---

## ✅ 44. Duyuru Gönderme Formu

**Sayfa**: `/announcements?action=create`

### Bileşenler:

#### Kontroller:
- **Geri Dön** butonu (sol üst, mavi)
- **Duyuru Gönder** butonu (sağ üst, mavi)

#### Başlık:
- "Yeni Duyuru Oluştur"

#### Form Alanları:

1. **Alıcı Rolü Seçimi**
   - Tip: Dropdown
   - Label: "Rol Seçin"
   - Placeholder: "Rol seçin"
   - Seçenekler:
     - Öğretmenler (👨‍🏫)
     - Öğrenciler (🎓)
     - Veliler (👨‍👩‍👧)
     - Tümü (📢)
   - Zorunlu alan

2. **Duyuru Başlığı**
   - Tip: Text input
   - Label: "Duyuru Başlığı"
   - Placeholder: "Duyuru Başlığı..."
   - Max karakter: 100
   - Zorunlu alan

3. **Duyuru İçeriği**
   - Tip: Textarea (çok satırlı)
   - Label: "Duyuru İçeriği"
   - Placeholder: "Duyuru İçeriği..."
   - Min yükseklik: 150px
   - Max karakter: 1000
   - Karakter sayacı
   - Zorunlu alan

4. **Öncelik Seviyesi** (Opsiyonel)
   - Tip: Radio buttons
   - Seçenekler:
     - Normal (varsayılan)
     - Önemli (turuncu badge)
     - Acil (kırmızı badge)

5. **Yayın Süresi** (Opsiyonel)
   - Başlangıç Tarihi
   - Bitiş Tarihi
   - Boş bırakılırsa süresiz

#### Önizleme Alanı:
- Duyuru kartı önizlemesi
- Gerçek zamanlı güncelleme
- Mobil ve desktop görünüm

#### Eylem Butonları:
- **İptal Et** (gri, outline)
- **Taslak Olarak Kaydet** (turuncu)
- **Yayınla** (mavi, solid)

---

## 🔔 45. Bildirim Merkezi (TopBar Dropdown)

**Açılış**: TopBar'daki bildirim simgesine tıklandığında

### Bileşenler:

#### Dropdown Başlığı:
- "Duyurular" başlık
- Okunmamış sayısı badge'i
- "Tümünü Okundu İşaretle" butonu

#### Duyuru Listesi:

**Her Duyuru Öğesi:**
- Öncelik göstergesi (sol border rengi)
- Başlık (bold)
- İçerik önizleme (2 satır)
- Zaman bilgisi (örn: "2 saat önce")
- Okundu/Okunmadı durumu (mavi nokta)

**Okunmamış Duyuru:**
- Açık mavi arka plan
- Bold başlık
- Mavi nokta (sol)

**Okunmuş Duyuru:**
- Beyaz arka plan
- Normal font
- Gri metin

#### Alt Kısım:
- "Tüm Duyuruları Gör" linki
- Yönlendirme: `/announcements/view`

**Dropdown Stili:**
- Max yükseklik: 400px
- Scrollable
- Gölge ve border
- Sağ üstten açılır
- Genişlik: 360px

---

## 📋 46. Tüm Duyurular Sayfası (Kullanıcı Görünümü)

**Sayfa**: `/announcements/view`

### Bileşenler:

#### Başlık:
- "Tüm Duyurular"
- Filtre butonları (Tümü/Okunmamış/Okunmuş)

#### Duyuru Listesi (Kartlar):

**Her Duyuru Kartı:**
- Öncelik badge'i (Normal/Önemli/Acil)
- Başlık
- Tam içerik (genişletilebilir)
- Yayın tarihi
- Yayınlayan (Admin/Müdürlük)
- Okundu işareti

**Kart Renkleri (Öncelik):**
- Normal: Beyaz
- Önemli: Turuncu border
- Acil: Kırmızı border

#### Boş Durum:
- "Henüz duyuru bulunmamaktadır."

---

## 🎯 Duyurular Modülü Teknik Yapı

### Dynamic Routing:
```
/announcements -> Ana sayfa (liste + gönder butonu)
/announcements?action=create -> Duyuru oluşturma formu
/announcements?action=edit&id=123 -> Duyuru düzenleme
/announcements/view -> Kullanıcı görünümü (tüm duyurular)
```

### Component Yapısı:
```
/app/announcements/page.tsx (Ana sayfa - admin)
/app/announcements/view/page.tsx (Kullanıcı görünümü)
/components/announcements/
  - AnnouncementList.tsx (Admin liste)
  - AnnouncementForm.tsx (Oluşturma/Düzenleme formu)
  - AnnouncementCard.tsx (Duyuru kartı)
  - AnnouncementPreview.tsx (Önizleme)
  - NotificationDropdown.tsx (TopBar dropdown)
  - UserAnnouncementList.tsx (Kullanıcı liste)
```

### State Yönetimi:
- Duyuru listesi (announcements)
- Okunmamış sayısı (unreadCount)
- Filtreler (role, priority, status)
- Form verileri (formData)
- Dropdown açık/kapalı (isDropdownOpen)

### Veri Modelleri:

**Announcement (Duyuru):**
```typescript
interface Announcement {
  id: string;
  title: string;
  content: string;
  targetRole: 'teachers' | 'students' | 'parents' | 'all';
  priority: 'normal' | 'important' | 'urgent';
  status: 'active' | 'inactive' | 'draft';
  startDate?: string;
  endDate?: string;
  createdBy: string;
  createdAt: string;
  viewCount: number;
  readBy: string[]; // Okuyan kullanıcı ID'leri
}
```

**UserAnnouncement (Kullanıcı Duyurusu):**
```typescript
interface UserAnnouncement {
  announcementId: string;
  userId: string;
  isRead: boolean;
  readAt?: string;
}
```

### Özellikler:
- Rol bazlı duyuru gönderme
- Öncelik seviyeleri (Normal/Önemli/Acil)
- Yayın süresi belirleme
- Taslak kaydetme
- Duyuru önizleme
- Okundu/Okunmadı takibi
- TopBar bildirim dropdown'u
- Gerçek zamanlı bildirim sayacı
- Filtreleme ve arama
- Düzenleme ve silme
- Aktif/Pasif yapma

### TopBar Entegrasyonu:
- Bildirim simgesi (🔔)
- Okunmamış sayısı badge'i (kırmızı)
- Animasyonlu badge (pulse efekti)
- Dropdown menü
- Tıklama dışı kapatma

### Rol Bazlı Görünüm:
- **Admin**: Tüm duyuruları oluşturabilir, düzenleyebilir
- **Öğretmen**: Sadece kendine gönderilen duyuruları görür
- **Öğrenci**: Sadece kendine gönderilen duyuruları görür
- **Veli**: Sadece kendine gönderilen duyuruları görür

### Öncelik Renkleri:
- **Normal**: Mavi (#3B82F6)
- **Önemli**: Turuncu (#F59E0B)
- **Acil**: Kırmızı (#EF4444)

---

# 🍽️ YEMEK PROGRAMI MODÜLÜ

## 🔄 Yemek Programı Akışı

1. **Takvim Görünümü** → Aylık yemek programını görüntüleme
2. **Menü Girişi** → Seçilen güne öğün bazlı yemek ekleme
3. **Yemek Yoklaması** → Sınıf/şube bazında öğrencilerin yemek yeme durumunu kaydetme

---

## ✅ 47. Yemek Takvimi Ekranı

**Sayfa**: `/meal`

### Bileşenler:

#### Başlık:
- "Yemek Takvimi"

#### Takvim Kontrolleri:

**Görünüm Sekmeleri:**
- Ay (aktif)
- Hafta
- Gün

**Navigasyon:**
- Geri butonu (<)
- Tarih aralığı: "Kasım 2025"
- İleri butonu (>)
- "Bugün" butonu (mavi)

**Eylem Butonu:**
- **Aylık Menü PDF İndir** (yeşil)

#### Takvim Alanı:

**Aylık Görünüm:**
- 7 sütun (Pazartesi - Pazar)
- Her gün kartı:
  - Gün numarası
  - Yemek sayısı göstergesi (örn: "3 öğün")
  - Hover efekti
  - Tıklanabilir
  
**Aktif Gün:**
- Sarı/Turuncu arka plan
- Bold font
- Border vurgusu

**Bugün:**
- Mavi border
- Mavi metin

**Geçmiş Günler:**
- Açık gri arka plan

**Gelecek Günler:**
- Beyaz arka plan

**Yönlendirme:**
- Güne tıklandığında: `/meal?date=2025-11-11`

---

## ✅ 48. Yemek Bilgisi Gir Formu

**Sayfa**: `/meal?date=2025-11-11`

### Bileşenler:

#### Tarih Başlığı:
- "11 Kasım 2025" (büyük, bold)

#### Sekmeler:
- **Yemek Planı** (aktif)
- **Yoklama**

#### Başlık:
- "Yemek Bilgisi Gir"

#### Öğün Kayıt Alanları (Dinamik Liste):

**Her Öğün Satırı:**
- **Öğün Dropdown**:
  - Placeholder: "Öğün Seçin"
  - Seçenekler: Sabah, Öğle, İkindi, Akşam
  
- **Yemek Adı Input**:
  - Placeholder: "Yemek Adı"
  - Max karakter: 100

- **Sil Butonu**:
  - İkon: 🗑️ (Çöp kutusu)
  - Kırmızı renk

**Varsayılan:** En az 1 satır

#### Yeni Yemek Ekle:
- **+ Yeni Yemek Ekle** linki/butonu (mavi)
- Tıklandığında yeni satır eklenir

#### Eylem Butonları:
- **İptal** (gri, outline)
- **Kaydet** (mavi, solid)

---

## ✅ 49. Yemek Yoklaması Formu

**Sayfa**: `/meal?date=2025-11-11&tab=attendance`

### Bileşenler:

#### Tarih Başlığı:
- "11 Kasım 2025"

#### Sekmeler:
- Yemek Planı
- **Yoklama** (aktif)

#### Başlık:
- "Yemek Yoklaması"

#### Filtreler:

1. **Sınıf Seçimi**
   - Dropdown: "Sınıf Seçin"
   - Seçenekler: 9, 10, 11, 12

2. **Şube Seçimi**
   - Dropdown: "Şube Seçin"
   - Seçenekler: A, B, C, D
   - Disabled: Sınıf seçilmeden

3. **Öğün Seçimi**
   - Dropdown: "Öğün Tipi Seçin..."
   - Seçenekler: Sabah, Öğle, İkindi, Akşam

#### Eylem Butonu:
- **Öğrencileri Listele** (mavi)
- Aktif olma koşulu: Sınıf + Şube + Öğün seçili

#### Öğrenci Listesi (Listele butonuna basıldıktan sonra):

**Tablo Sütunları:**
- Ad Soyad
- Öğrenci No
- Durum (Toggle: Yedi/Yemedi)

**Varsayılan:** Tüm öğrenciler "Yedi" olarak gelir

**Toggle Buton:**
- Yedi: Yeşil arka plan
- Yemedi: Kırmızı arka plan

#### Kaydet Butonu:
- **Yoklamayı Kaydet** (mavi, tam genişlik, alt kısım)

#### Kapat Butonu:
- **Kapat** (gri, sağ alt)

---

## 🎯 Yemek Programı Modülü Teknik Yapı

### Dynamic Routing:
```
/meal -> Takvim görünümü
/meal?date=2025-11-11 -> Yemek planı formu
/meal?date=2025-11-11&tab=attendance -> Yemek yoklaması
```

### Component Yapısı:
```
/app/meal/page.tsx (Ana sayfa)
/components/meal/
  - MealCalendar.tsx (Takvim görünümü)
  - MealPlanForm.tsx (Yemek planı formu)
  - MealAttendance.tsx (Yemek yoklaması)
  - MealItem.tsx (Öğün satırı)
```

### State Yönetimi:
- Seçili tarih (selectedDate)
- Aktif ay (currentMonth)
- Yemek planı (mealPlan)
- Öğün listesi (meals)
- Yoklama verileri (attendanceData)
- Seçili sınıf/şube (selectedClass, selectedBranch)

### Veri Modelleri:

**MealPlan (Yemek Planı):**
```typescript
interface MealPlan {
  id: string;
  date: string;
  meals: Meal[];
}

interface Meal {
  id: string;
  mealType: 'breakfast' | 'lunch' | 'snack' | 'dinner';
  name: string;
}
```

**MealAttendance (Yemek Yoklaması):**
```typescript
interface MealAttendance {
  id: string;
  date: string;
  mealType: 'breakfast' | 'lunch' | 'snack' | 'dinner';
  classId: string;
  branchId: string;
  studentId: string;
  hasEaten: boolean;
}
```

### Özellikler:
- Aylık takvim görünümü
- Gün seçimi ve vurgulama
- Öğün bazlı yemek ekleme
- Dinamik öğün satırları (ekle/sil)
- Sınıf/şube filtreleme
- Öğrenci listesi
- Toggle ile yoklama (Yedi/Yemedi)
- PDF menü indirme
- Responsive tasarım
- Takvim navigasyonu (ay/hafta/gün)

### Öğün Tipleri:
- 🌅 **Sabah** (Kahvaltı)
- 🍽️ **Öğle** (Öğle Yemeği)
- ☕ **İkindi** (İkindi Kahvaltısı)
- 🌙 **Akşam** (Akşam Yemeği)

### Durum Renkleri:
- **Yedi**: Yeşil (#10B981)
- **Yemedi**: Kırmızı (#EF4444)
- **Bugün**: Mavi border
- **Aktif Gün**: Sarı/Turuncu arka plan

### Takvim Özellikleri:
- Ay değiştirme (< >)
- Bugün'e hızlı dönüş
- Hafta başlangıcı: Pazartesi
- Türkçe ay isimleri
- Responsive grid

---

# 📅 DERS PROGRAMI MODÜLÜ ✅

## 🔄 Ders Programı Akışı

1. **Sınıf/Şube Seçimi** → Kullanıcı sınıf ve şube seçer
2. **Program Tablosu Görüntüleme** → Haftalık ders programı tablosu gösterilir
3. **Ders Atama** → Kullanıcı saat/gün kesişimine tıklayarak ders atar
4. **Ders Düzenleme/Silme** → Atanmış derslere tıklayarak düzenleme veya silme
5. **Programı Kaydetme** → Tüm değişiklikler kaydedilir

---

## ✅ 50. Haftalık Ders Programı Oluştur Ekranı

**Sayfa**: `/schedule`

### Bileşenler:

#### Başlık:
- "Haftalık Ders Programı Oluştur"

#### Filtreler:

1. **Sınıf Seçimi**
   - Label: "Sınıf Seçin"
   - Dropdown
   - Varsayılan: 9
   - Seçenekler: 9, 10, 11, 12

2. **Şube Seçimi**
   - Label: "Şube Seçin"
   - Dropdown
   - Varsayılan: A
   - Seçenekler: A, B, C, D

#### Ders Programı Tablosu:

**Tablo Başlığı:**
- "{Sınıf} / {Şube} Ders Programı" (Dinamik)
- Örnek: "9 / A Ders Programı"

**Tablo Yapısı:**

**Sütun Başlıkları:**
- Saat (ilk sütun)
- Pazartesi
- Salı
- Çarşamba
- Perşembe
- Cuma

**Satır Başlıkları:**
- 1. Ders
- 2. Ders
- 3. Ders
- 4. Ders
- 5. Ders
- 6. Ders
- 7. Ders
- 8. Ders
- 9. Ders

**Hücre İçeriği:**
- Boş hücre: '+' simgesi (mavi, büyük)
- Dolu hücre: Ders adı (bold, koyu gri)
- Tüm hücreler tıklanabilir
- Hover efekti: Açık mavi arka plan

**Tablo Stili:**
- Border: Tüm hücreler çerçeveli
- Header: Açık gri arka plan
- Satır başlıkları: Açık gri arka plan
- Responsive: Yatay scroll (mobilde)

#### Kaydet Butonu:
- **Programı Kaydet** (yeşil, alt kısım)
- Tam genişlik değil, sağa hizalı

---

## ✅ 51. Ders Ata Modal/Pop-up

**Açılış**: Tablo hücresine tıklandığında

### Bileşenler:

#### Modal Başlığı:
- "Ders Ata"

#### Bilgi Metni:
- "{Gün}, {Saat}. Ders"
- Örnek: "Pazartesi, 1. Ders"
- Açık gri renk

#### Ders Girişi:
- **Input Alanı**:
  - Placeholder: "Ders adını yazın..."
  - Otomatik focus
  - Max karakter: 50
  - Mevcut ders varsa, input'ta gösterilir

#### Yardım Metni:
- "Dersini kaldırmak için alanı boş bırakın..."
- Küçük font, açık gri
- Input altında

#### Eylem Butonları:
- **İptal** (gri, outline)
  - Modal'ı kapatır
  - Değişiklikleri iptal eder
  
- **Onayla** (mavi, solid)
  - Dersi kaydeder veya siler
  - Modal'ı kapatır

**Modal Stili:**
- Ortalanmış
- Beyaz arka plan
- Gölge efekti
- Yuvarlak köşeler
- Max genişlik: 500px
- Arka plan overlay: Siyah, %50 opacity

---

## 🎯 Ders Programı Modülü Teknik Yapı

### Dynamic Routing:
```
/schedule -> Ana sayfa (filtre + tablo)
```

### Component Yapısı:
```
/app/schedule/page.tsx (Ana sayfa)
/components/schedule/
  - ScheduleTable.tsx (Program tablosu + modal)
```

### State Yönetimi:
- Seçili sınıf (selectedClass)
- Seçili şube (selectedBranch)
- Program verileri (schedule)
- Modal durumu (showModal)
- Seçili slot (selectedSlot)
- Ders adı (courseName)

### Veri Modelleri:

**ScheduleSlot (Ders Slotu):**
```typescript
interface ScheduleSlot {
  id: string;
  classId: string;
  branchId: string;
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
  period: number; // 1-9
  courseName: string;
  teacherId?: string;
}
```

**WeeklySchedule (Haftalık Program):**
```typescript
interface WeeklySchedule {
  id: string;
  classId: string;
  branchId: string;
  slots: ScheduleSlot[];
  createdAt: string;
  updatedAt: string;
}
```

### Özellikler:
- Sınıf/şube filtreleme
- 5 gün x 9 saat program tablosu
- Ders atama (modal ile)
- Ders düzenleme (aynı modal)
- Ders silme (input'u boş bırakarak)
- Tablo hücreleri tıklanabilir
- Hover efektleri
- Responsive tablo (yatay scroll)
- Tek tıkla ders ekleme/düzenleme
- Programı kaydetme

### Günler:
- Pazartesi
- Salı
- Çarşamba
- Perşembe
- Cuma

### Ders Saatleri:
- 1. Ders - 9. Ders (toplam 9 saat)

### Renk Kodları:
- **Boş Hücre**: Beyaz arka plan, mavi '+' simgesi
- **Dolu Hücre**: Beyaz arka plan, koyu gri metin
- **Hover**: Açık mavi arka plan (#E8F2FF)
- **Header**: Açık gri arka plan (#F9FAFB)
- **Border**: Gri (#E5E7EB)

### Kullanıcı Deneyimi:
- Hızlı ders atama (tek tıkla modal açılır)
- Kolay düzenleme (dolu hücreye tıkla)
- Basit silme (input'u boş bırak)
- Görsel geri bildirim (hover efektleri)
- Responsive tasarım (mobil uyumlu)

### Validasyon:
- Sınıf ve şube seçimi zorunlu
- Ders adı max 50 karakter
- Aynı saat/gün'e sadece 1 ders atanabilir
- Boş input = ders silme

---

# 🎉 ETKİNLİKLER MODÜLÜ ✅

## 🔄 Etkinlikler Akışı

1. **Etkinlik Ekleme** → Yeni etkinlik oluşturma (ad ve tarih)
2. **Etkinlik Listeleme** → Tüm etkinlikleri görüntüleme
3. **Resim Yönetimi** → Etkinliğe resim ekleme ve silme
4. **Etkinlik Silme** → İstenmeyen etkinlikleri kaldırma

---

## ✅ 52. Etkinlikler Ana Sayfası

**Sayfa**: `/events`

### Bileşenler:

#### Başlık:
- "Etkinlik Modülü"

#### Bilgi Metriği:
- "Sisteme kayıtlı etkinlik sayısı: X"
- Dinamik sayaç

#### Eylem Butonu:
- **+ Etkinlik Ekle** (turuncu/koyu mavi gradient)
- Yönlendirme: `/events?action=add`

#### Etkinlik Listesi Tablosu:

**Sütunlar:**
- Etkinlik Adı
- İşlemler

**İşlem Butonları:**
- **Görüntüle** (mavi göz ikonu)
  - Etkinliğin resim yönetim sayfasına yönlendirir
  - Yönlendirme: `/events?action=view&id={eventId}`
  
- **Sil** (kırmızı çöp kutusu ikonu)
  - Onay modalı ile etkinliği siler

**Boş Durum:**
- "Henüz etkinlik eklenmemiş."
- Ortalanmış mesaj

**Tablo Stili:**
- Beyaz arka plan
- Border ve gölge
- Hover efekti (açık gri arka plan)

---

## ✅ 53. Etkinlik Ekleme Formu

**Sayfa**: `/events?action=add`

### Bileşenler:

#### Navigasyon:
- **← Etkinlik Listesine Dön** butonu (mavi, sol üst)

#### Başlık:
- "Yeni Etkinlik Ekle"

#### Form Alanları:

1. **Etkinlik Adı**
   - Label: "Etkinlik Adı"
   - Tip: Text input
   - Placeholder: "Etkinlik adını giriniz..."
   - Max karakter: 100
   - Zorunlu alan

2. **Etkinlik Tarihi**
   - Label: "Etkinlik Tarihi"
   - Tip: Date input
   - Zorunlu alan

#### Eylem Butonları:
- **İptal** (gri, outline)
  - Listeye geri döner
  
- **Kaydet** (mavi, solid)
  - Etkinliği kaydeder
  - Listeye yönlendirir

---

## ✅ 54. Etkinliğe Resim Ekle Ekranı

**Sayfa**: `/events?action=view&id={eventId}`

### Bileşenler:

#### Navigasyon:
- **← Etkinlik Listesine Dön** butonu (mavi, sol üst)

#### Başlık:
- Etkinlik adı (dinamik)
- Örnek: "Gezinti"

#### Alt Başlık/Sayaç:
- "Resimler (X)" (dinamik resim sayısı)

#### Eylem Butonu:
- **+ Resim Ekle** (turuncu/koyu mavi gradient)
- Modal açar

#### Resim Listesi Tablosu:

**Sütunlar:**
- Önizleme
- Resim Adı
- İşlemler

**Önizleme:**
- Thumbnail görüntü (64x64px)
- Yuvarlak köşeler
- Object-fit: cover

**İşlem Butonu:**
- **Sil** (kırmızı çöp kutusu ikonu)
- Onay modalı ile resmi siler

**Boş Durum:**
- "Bu etkinliğe henüz resim eklenmemiş."
- Ortalanmış mesaj
- Gri renk

---

## ✅ 55. Resim Yükleme Modalı

**Açılış**: "+ Resim Ekle" butonuna tıklandığında

### Bileşenler:

#### Modal Başlığı:
- "Resim Yükle"

#### Dosya Seçimi:
- **Label**: "Resim Seçin"
- **Input**: File input
- **Accept**: image/* (sadece resim dosyaları)
- **Tek dosya**: Multiple yok

#### Önizleme Alanı:
- Seçilen resmin önizlemesi
- Tam genişlik
- Yükseklik: 192px (h-48)
- Object-fit: cover
- Yuvarlak köşeler

#### Eylem Butonları:
- **İptal** (gri, outline)
  - Modal'ı kapatır
  - Seçimi iptal eder
  
- **Yükle** (mavi, solid)
  - Resmi yükler
  - Modal'ı kapatır
  - Listeyi günceller
  - Disabled: Dosya seçilmeden

**Modal Stili:**
- Ortalanmış
- Beyaz arka plan
- Gölge efekti
- Max genişlik: 448px (max-w-md)
- Arka plan overlay: Siyah, %50 opacity

---

## 🎯 Etkinlikler Modülü Teknik Yapı

### Dynamic Routing:
```
/events -> Ana sayfa (etkinlik listesi)
/events?action=add -> Etkinlik ekleme formu
/events?action=view&id=123 -> Resim yönetimi
```

### Component Yapısı:
```
/app/events/page.tsx (Ana sayfa)
/components/events/
  - EventList.tsx (Etkinlik listesi)
  - EventAddForm.tsx (Etkinlik ekleme formu)
  - EventImageManager.tsx (Resim yönetimi)
```

### State Yönetimi:
- Etkinlik listesi (events)
- Resim listesi (images)
- Modal durumu (showUploadModal)
- Seçili dosya (selectedFile)
- Önizleme URL (previewUrl)

### Veri Modelleri:

**Event (Etkinlik):**
```typescript
interface Event {
  id: string;
  name: string;
  date: string;
  description?: string;
  imageCount: number;
  createdAt: string;
  updatedAt: string;
}
```

**EventImage (Etkinlik Resmi):**
```typescript
interface EventImage {
  id: string;
  eventId: string;
  name: string;
  url: string;
  thumbnail: string;
  fileSize: number;
  uploadedAt: string;
}
```

### Özellikler:
- Etkinlik ekleme (ad + tarih)
- Etkinlik listeleme
- Etkinlik silme (onay modalı)
- Resim yükleme (file input)
- Resim önizleme (modal içinde)
- Resim listeleme (thumbnail ile)
- Resim silme (onay modalı)
- Geri dönüş navigasyonu
- Responsive tasarım
- Dosya tipi validasyonu (sadece resim)

### Desteklenen Resim Formatları:
- JPG/JPEG
- PNG
- GIF
- WebP
- SVG

### Resim Boyutları:
- Thumbnail: 64x64px
- Önizleme: Tam genişlik, 192px yükseklik
- Maksimum dosya boyutu: 10MB (önerilen)

### Renk Kodları:
- **Ekle Butonu**: Turuncu-Mavi gradient
- **Görüntüle**: Mavi (#2B7FFF)
- **Sil**: Kırmızı (#EF4444)
- **İptal**: Gri (#6B7280)

### Kullanıcı Deneyimi:
- Basit etkinlik ekleme
- Görsel resim yönetimi
- Thumbnail önizlemeler
- Hızlı resim yükleme
- Onay modalları (silme işlemleri)
- Geri dönüş butonları
- Responsive tasarım

### Validasyon:
- Etkinlik adı zorunlu (max 100 karakter)
- Etkinlik tarihi zorunlu
- Sadece resim dosyaları yüklenebilir
- Dosya boyutu kontrolü (önerilen: 10MB)

---

# 🖼️ ÖĞRENCİ GALERİSİ MODÜLÜ ✅

## 🔄 Öğrenci Galerisi Akışı

1. **Öğrenci Arama/Filtreleme** → Sınıf, şube veya isim ile öğrenci bulma
2. **Öğrenci Seçimi** → Galeri yönetimi için öğrenci kartına tıklama
3. **Fotoğraf Yükleme** → Başlık, açıklama ve dosya seçimi
4. **Fotoğraf Yönetimi** → Grid/liste görünümü, arama, sıralama, silme

---

## ✅ 56. Öğrenci Galerisi Ana Sayfası

**Sayfa**: `/gallery`

### Bileşenler:

#### Navigasyon İzi:
- "Anasayfa > Öğrenci Galerisi"
- Küçük font, gri renk

#### Başlık:
- "Öğrenci Galerisi"

#### Arama Çubuğu:
- Placeholder: "Öğrenci adı, soyadı veya TC No ile"
- Tam genişlik
- Real-time filtreleme

#### Filtreler (Grid: 2 sütun):

1. **Sınıf Filtresi**
   - Dropdown
   - Varsayılan: "Tüm Sınıflar"
   - Seçenekler: Tüm Sınıflar, 9, 10, 11, 12

2. **Şube Filtresi**
   - Dropdown
   - Varsayılan: "Tüm Şubeler"
   - Seçenekler: Tüm Şubeler, A, B, C, D

#### Öğrenci Kartları (Grid: 3 sütun):

**Her Kart İçeriği:**
- Öğrenci adı (bold, büyük font)
  - Örnek: "ercin akkaya"
- Bilgiler (küçük font, gri):
  - Sınıf: 9
  - Şube: A
  - TC No: 63787247082
  - X fotoğraf (mavi renk)

**Kart Stili:**
- Beyaz arka plan
- Border ve gölge
- Hover: Gölge artışı
- Tıklanabilir (cursor: pointer)
- Yuvarlak köşeler

**Boş Durum:**
- "Öğrenci bulunamadı."
- Ortalanmış mesaj

---

## ✅ 57. Öğrenci Galeri Yönetimi Ekranı

**Sayfa**: `/gallery?studentId={id}`

### Bileşenler:

#### Navigasyon:
- **← Geri Dön** butonu (mavi, sol üst)
- Listeye geri döner

#### Başlık:
- "{Öğrenci Adı} - Galeri Yönetimi"
- Örnek: "ercin akkaya - Galeri Yönetimi"

---

### Bölüm 1: Yeni Fotoğraf Yükle

#### Başlık:
- "Yeni Fotoğraf Yükle"

#### Form Alanları:

1. **Başlık (İsteğe Bağlı)**
   - Label: "Başlık (İsteğe Bağlı)"
   - Tip: Text input
   - Placeholder: "Fotoğraf başlığı..."
   - Max karakter: 100

2. **Açıklama (İsteğe Bağlı)**
   - Label: "Açıklama (İsteğe Bağlı)"
   - Tip: Textarea
   - Placeholder: "Fotoğraf açıklaması..."
   - Rows: 3
   - Max karakter: 500

3. **Dosya Yükleme Alanı**
   - Drag & Drop destekli
   - Dosya seçme butonu
   - Çoklu dosya seçimi (multiple)
   - Accept: image/*
   - Görsel: Bulut yükleme ikonu
   - Metin: "Dosyaları sürükleyin veya tıklayın"
   - Alt metin: "PNG, JPG, JPEG (Maks. 10MB)"

**Önizleme:**
- Seçilen dosyalar grid'de gösterilir (4 sütun)
- Her önizleme: 96px yükseklik
- Object-fit: cover
- Yuvarlak köşeler

#### Yükleme Butonu:
- **+ Fotoğrafları Yükle** (mavi)
- Disabled: Dosya seçilmeden
- Tüm dosyaları yükler

---

### Bölüm 2: Mevcut Fotoğraflar

#### Başlık ve Sayaç:
- "Mevcut Fotoğraflar (X)"
- Dinamik fotoğraf sayısı

#### Kontroller (Üst Kısım):

**Sol Taraf:**
- Arama çubuğu: "Fotoğraflarda ara..."
- Sıralama dropdown: "En Yeni", "En Eski", "Başlığa Göre"

**Sağ Taraf:**
- Görünüm butonları:
  - Grid görünümü (kare ikon)
  - Liste görünümü (çizgi ikon)
  - Aktif: Mavi arka plan
  - Pasif: Gri arka plan

#### Grid Görünümü (Varsayılan):

**Layout:**
- 4 sütun grid
- Her fotoğraf kartı:
  - Fotoğraf (192px yükseklik)
  - Başlık (altında, truncate)
  - Hover: Overlay + sil butonu
  - Overlay: Siyah, %50 opacity
  - Sil butonu: Kırmızı, ortalanmış

#### Liste Görünümü:

**Layout:**
- Tek sütun liste
- Her satır:
  - Thumbnail (64x64px, sol)
  - Başlık ve açıklama (orta)
  - Sil butonu (sağ)
  - Hover: Açık gri arka plan

**Boş Durum:**
- "Henüz fotoğraf yüklenmemiş."
- Ortalanmış mesaj
- Gri renk

---

## 🎯 Öğrenci Galerisi Modülü Teknik Yapı

### Dynamic Routing:
```
/gallery -> Öğrenci listesi
/gallery?studentId=123 -> Galeri yönetimi
```

### Component Yapısı:
```
/app/gallery/page.tsx (Ana sayfa)
/components/gallery/
  - StudentGalleryList.tsx (Öğrenci listesi)
  - StudentGalleryManager.tsx (Galeri yönetimi)
```

### State Yönetimi:
- Öğrenci listesi (students)
- Arama terimi (searchTerm)
- Filtreler (selectedClass, selectedBranch)
- Fotoğraf listesi (photos)
- Başlık ve açıklama (title, description)
- Seçili dosyalar (selectedFiles)
- Önizleme URL'leri (previewUrls)
- Görünüm modu (viewMode: grid/list)
- Sıralama (sortBy)

### Veri Modelleri:

**Student (Öğrenci):**
```typescript
interface Student {
  id: string;
  firstName: string;
  lastName: string;
  tcNo: string;
  classId: string;
  branchId: string;
  photoCount: number;
}
```

**Photo (Fotoğraf):**
```typescript
interface Photo {
  id: string;
  studentId: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  fileSize: number;
  uploadedAt: string;
}
```

### Özellikler:
- Öğrenci arama (ad, soyad, TC No)
- Sınıf/şube filtreleme
- Öğrenci kartları (grid layout)
- Çoklu fotoğraf yükleme
- Drag & Drop desteği
- Fotoğraf önizleme
- Başlık ve açıklama ekleme
- Grid/Liste görünüm değiştirme
- Fotoğraf arama
- Fotoğraf sıralama (yeni/eski/başlık)
- Fotoğraf silme (hover overlay)
- Responsive tasarım

### Dosya Validasyonu:
- Sadece resim dosyaları (image/*)
- Maksimum dosya boyutu: 10MB
- Desteklenen formatlar: PNG, JPG, JPEG
- Çoklu dosya yükleme

### Görünüm Modları:
- **Grid**: 4 sütun, fotoğraf odaklı
- **Liste**: Tek sütun, detay odaklı

### Sıralama Seçenekleri:
- En Yeni (uploadedAt desc)
- En Eski (uploadedAt asc)
- Başlığa Göre (title asc)

### Renk Kodları:
- **Yükle Butonu**: Mavi (#2B7FFF)
- **Sil Butonu**: Kırmızı (#EF4444)
- **Aktif Görünüm**: Mavi arka plan
- **Pasif Görünüm**: Gri arka plan
- **Hover Overlay**: Siyah, %50 opacity

### Kullanıcı Deneyimi:
- Hızlı öğrenci bulma (arama + filtre)
- Kolay fotoğraf yükleme (drag & drop)
- Çoklu dosya desteği
- Önizleme özelliği
- İki görünüm modu
- Arama ve sıralama
- Hover efektleri
- Responsive tasarım

### Validasyon:
- Başlık max 100 karakter (opsiyonel)
- Açıklama max 500 karakter (opsiyonel)
- Sadece resim dosyaları
- Dosya boyutu max 10MB
- En az 1 dosya seçilmeli (yükleme için)

---
