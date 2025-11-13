# 🚀 Vercel Deploy Rehberi

Bu rehber, projenizi Vercel'de güvenli bir şekilde deploy etmeniz için hazırlanmıştır.

## ✅ Ön Hazırlık

Projeniz deploy için hazır! Aşağıdaki dosyalar zaten mevcut:
- ✓ `package.json` - Tüm dependencies tanımlı
- ✓ `next.config.ts` - Next.js konfigürasyonu hazır
- ✓ `.gitignore` - Vercel için optimize edilmiş
- ✓ `vercel.json` - Vercel konfigürasyonu oluşturuldu

## 📝 Deploy Adımları

### Yöntem 1: Vercel Dashboard ile (Önerilen - En Kolay)

1. **Vercel hesabı oluşturun**
   - https://vercel.com adresine gidin
   - GitHub hesabınızla giriş yapın

2. **Yeni proje oluşturun**
   - "Add New Project" butonuna tıklayın
   - GitHub repository'nizi seçin
   - Vercel otomatik olarak Next.js projesini algılayacak

3. **Konfigürasyonu kontrol edin**
   - Framework Preset: `Next.js` (otomatik seçili olacak)
   - Build Command: `npm run build`
   - Output Directory: `.next` (otomatik)
   - Install Command: `npm install`

4. **Environment Variables ekleyin (varsa)**
   - Environment Variables bölümüne gidin
   - Gerekli değişkenleri ekleyin (API keys, database URLs, vb.)

5. **Deploy edin**
   - "Deploy" butonuna tıklayın
   - İlk deploy 2-3 dakika sürebilir
   - Deploy tamamlandığında otomatik bir URL alacaksınız

### Yöntem 2: Vercel CLI ile (Terminal)

1. **Vercel CLI'ı yükleyin**
   ```bash
   npm install -g vercel
   ```

2. **Vercel'e login olun**
   ```bash
   vercel login
   ```

3. **Projeyi deploy edin**
   ```bash
   # Test deploy için (preview)
   vercel
   
   # Production deploy için
   vercel --prod
   ```

4. **İlk deploy sırasında sorulacak sorular:**
   - Set up and deploy? → **Y**
   - Which scope? → Hesabınızı seçin
   - Link to existing project? → **N** (ilk kez)
   - What's your project's name? → `egitim-otomasyon` (veya istediğiniz isim)
   - In which directory is your code located? → `./` (enter)
   - Want to override the settings? → **N**

## 🔄 Otomatik Deploy (Sürekli Deployment)

Vercel, GitHub ile entegre olunca:
- Her `main` branch'e push otomatik production deploy olur
- Her pull request otomatik preview URL oluşturur
- Her commit için deploy status görebilirsiniz

## 🌍 Environment Variables Yönetimi

### Dashboard'dan environment variable ekleme:
1. Vercel Dashboard → Projenizi seçin
2. Settings → Environment Variables
3. Variable ekleyin:
   - Name: `NEXT_PUBLIC_API_URL`
   - Value: API URL'iniz
   - Environment: Production/Preview/Development seçin

### CLI'dan environment variable ekleme:
```bash
vercel env add NEXT_PUBLIC_API_URL production
```

## 📊 Build Kontrolü

Deploy etmeden önce lokal olarak test edin:

```bash
# Lokal olarak build edin
npm run build

# Build'i test edin
npm start
```

Eğer lokal build başarılı ise, Vercel'de de başarılı olacaktır.

## ⚠️ Önemli Notlar

1. **Environment Variables:**
   - `NEXT_PUBLIC_` ile başlayan değişkenler client-side'da görünür
   - Gizli API key'leri `NEXT_PUBLIC_` ile başlatmayın

2. **Domain Ayarları:**
   - Vercel size otomatik bir domain verir: `proje-adi.vercel.app`
   - Özel domain eklemek için: Settings → Domains

3. **Monitoring:**
   - Deployment logs: Dashboard → Deployments → Logs
   - Analytics: Dashboard → Analytics (production'da)

## 🔧 Sorun Giderme

### Build hatası alırsanız:
```bash
# Lokal olarak temiz build deneyin
rm -rf .next node_modules
npm install
npm run build
```

### Deploy sonrası 404 hatası:
- `next.config.ts` dosyasını kontrol edin
- Route'ların doğru export edildiğinden emin olun

### Environment variable tanınmıyor:
- Değişken adının doğru olduğundan emin olun
- Vercel'de redeploy yapın (değişkenler deploy sırasında inject edilir)

## 📚 Faydalı Komutlar

```bash
# Deployment listesini görüntüle
vercel ls

# Production domain'i aç
vercel --prod --open

# Logs görüntüle
vercel logs

# Proje bilgilerini görüntüle
vercel inspect

# Environment variables listesi
vercel env ls
```

## 🎉 Deploy Başarılı!

Deploy tamamlandıktan sonra:
- Vercel size bir URL verecek (örn: `egitim-otomasyon.vercel.app`)
- Bu URL'yi ziyaret edin
- Projeniz canlı!

## 🔗 Yararlı Linkler

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

