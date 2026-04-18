# Faz 2 - Daily Usage and Admin Operations

## Fazin Amaci

Faz 2'nin amaci, urunu sadece bilgiye donulen bir yer olmaktan cikarip toplulugun gunluk kullanim merkezi haline getirmektir.

Faz 1 tasinma icin yeterlidir. Faz 2 ise tekrar tekrar geri gelmek icin gereklidir.

## Bu Faz Neyi Cozer

Faz 1'den sonra tipik sorunlar sunlar olur:

- kullanici sadece ihtiyac aninda gelir
- admin yonetimi zaman almaya devam eder
- ayni topic icinde kalite farklari olusur
- insanlar yeni post acmadan once eski icerige bakmaz

Faz 2, bu operasyonel ve davranissal sorunlari cozer.

## Faz 2 Kapsami

### 1. Gelismis Group Yonetimi

Adminler icin daha guclu kontroller gerekir:

- post tipine gore group bazli izinler
- yalnizca adminin post acabilecegi announcement alanlari
- group kurallari icin zorunlu kabul akisi
- post tasima ve birlestirme is akislari
- group bazli kullanici cezasi, mute ve cikarilma kurallari

Bu sayede konu bazli gruplar mevcut platformlardaki daginik admin emegine gore daha sistemli yonetilir.

### 1.1 Role Delegation ve Community Requests

Faz 2'de rol modeli daha olgun hale gelmelidir:

- community admin, sub-admin atayabilmeli ve geri alabilmeli
- sub-admin sadece kendi kapsamindaki alanlari gorebilmeli
- guvenilir uyeler yeni location community veya topic group acilmasi icin talep gonderebilmeli
- bu talepler admin onayi ile aktif hale gelmeli

Boylece platform merkezi kontrol ile topluluk bazli delegasyonu dengeler.

### 1.1.1 Faz 2 Permission Evolution

Faz 2'de Faz 1'deki sabit rol modeli biraz daha esneyebilir:

| Aksiyon | Platform admin | Community admin | Sub-admin | Moderator | Member |
| --- | --- | --- | --- | --- | --- |
| Yeni location/topic talebi ac | Yes | Yes | Yes | No | Request |
| Yeni alt group ac | Yes | Yes | Scoped if enabled | No | No |
| Moderator ata | Yes | Yes | Scoped if explicitly allowed | No | No |
| Scoped mute / remove uygula | Yes | Yes | Scoped | Scoped if allowed | No |
| Community advertiser kurallarini guncelle | Yes | Yes in own community | No | No | No |

Bu evrim kontrollu olmalidir. Faz 2'de bile billing, top-level role atama ve ana community acilisi merkezi kalmalidir.

### 1.2 Kullanici Sikayet Esikleri

Faz 1'de temel raporlama vardir. Faz 2'de bu akis daha akilli hale gelir:

- group bazli sikayet sayisi esikleri
- belirli esiklerde otomatik moderator flag'i
- tekrar eden sikayetlerde yari-otomatik group'tan cikarma
- haksiz veya toplu sikayetleri engellemek icin admin override

Buradaki oncelik platform geneli ban degil, once group duzenini korumaktir.

### 2. Duplicate Reduction Akislari

Kullanici yeni post acarken sistem benzer icerikleri gostermelidir.

Ornek davranislar:

- ayni basliga yakin thread onerisi
- benzer soru bulunursa once onu gosterme
- mevcut cevap yeterliyse yeni soru acmadan yonlendirme

Bu faz, community memory mantigini gercekten calisir hale getirir.

### 3. Subscription ve Kisisel Feed

Kullanici tum community'yi degil, ilgilendigi alanlari takip etmelidir.

Bu fazda:

- group bazli takip
- lokasyon bazli takip
- sadece secili topic'leri one cikaran feed
- sessize alma ve takipten cikma
- saved search ve keyword alert'leri
- `MK room`, `Turkish accountant`, `contractor jobs` gibi ihtiyac bazli bildirimler
- sadece `Yardim Istegi` akisini takip etme

ozellikleri gerekir.

### 3.1 Gecisi Guclendiren Faz 2 Degeri

Faz 2'de kullanici sadece aramak icin degil, takip etmek icin de gelmelidir.

Bu noktada en guclu farklastiricilar:

- bir ilani, hizmeti veya ihtiyaci sistemin benim yerime takip etmesi
- sadece ilgilendigim konularin bana gelmesi
- ayni seyi tekrar tekrar aramak zorunda kalmamam

Bu yuzden `saved search + keyword alerts` bu fazin en guclu gecis ozelliklerinden biridir.

### 3.2 Yardim Istegi Matching

Faz 2'de `Yardim Istegi` daha guclu bir akisa donusmelidir.

Ornek:

- `oda ariyorum` istegi acan kullaniciya ilgili oda ilanlari onerilebilir
- `muhasebeci ariyorum` istegine uygun provider veya eski tavsiye thread'leri gosterilebilir
- ilgili advertiser veya hizmet verenlere bu istekten haberdar olma imkani verilebilir

Bu sayede yardim istegi sadece pasif post olarak kalmaz; eslesme ve aksiyon baslatan bir modele donusur.

### 4. Saved Content ve Kisisel Kutuphane

Kullanici:

- onemli postlari kaydedebilmeli
- kendi cevap verdigi thread'leri gorebilmeli
- takip ettigi ilanlari ayri gorebilmeli

Bu, urunun kalici kullanim degerini arttirir.

### 4.1 Media Gallery ve Link Hub

Faz 2'de dogrudan erisim daha guclu bir kesif deneyimine donusmelidir.

Bu seviyede:

- group bazli `Media` sekmesi
- group bazli `Links` sekmesi
- domain veya kaynak tipine gore filtreleme
- en cok kaydedilen veya en cok tiklanan linklerin one cikmasi
- video, gorsel ve dosya tiplerinin ayri listelenmesi

Bu sayede kullanici `o video neredeydi`, `o faydali link kim paylasmisti` diye eski thread kazimaz; dogrudan ilgili kutuphaneye gider.

### 5. Admin Dashboard Lite

Adminlerin toplulugu yonettigini hissetmesi icin minimum dashboard gerekir:

- bekleyen raporlar
- sikayet esigine yaklasan kullanicilar
- en aktif group'lar
- cevaplanmamis sorular
- spam veya off-topic yogunlugu
- en cok aranan konular

Bu bilgi admini daha etkili moderator yapar.

### 6. Structured Migration Araclari

Bu fazda eski topluluk birikimini daha iyi tasimak gerekir:

- mevcut FAQ icin manuel import ekranlari
- eski yararli icerikleri rehbere cevirme
- topluluk kurallarini hazir template ile olusturma
- Facebook Group veya Telegram sabit kaynaklarini kutuphane yapisina donusturme
- eski onemli thread'leri `guide` veya `resource` formatina cevirme
- eski medya ve link paylasimlarini etiketli arsiv yapisina donusturme

Bu sayede bir admin yeni community kurarken bos sayfadan baslamaz.

### 7. Bildirim ve Ozet Mantigi

Sadece anlik push yerine daha olgun bir bildirim sistemi gerekir:

- gunluk veya haftalik ozet
- cevap bekleyen sorular
- takip edilen group'taki onemli gelismeler
- sadece kullanicinin secili alanlari

Bu, urunu rahatsiz edici degil faydali hale getirir.

### 8. Hizli Etkilesim Katmani

Tam anlamiyla chat olmadan da topluluk canli tutulabilir.

Bu fazda hafif etkilesim eklenebilir:

- hizli reaksiyonlar
- kisa status update tipleri
- acil duyuru formatlari

Ama yine de urun `chat-first` hale getirilmemelidir.

### 8.1 Polls ve Hafif Karar Mekanikleri

Facebook Groups ve Telegram'da topluluklar cok sik hizli yoklama yapar:

- bulusma tarihi secme
- oneriler arasinda secim yapma
- admin kararlarini yoklama

Bu nedenle Faz 2'de hafif bir poll sistemi dusunulmelidir:

- tek secimli veya cok secimli anket
- belirli sure sonunda kapanma
- sonucu sabitleyebilme veya duyuruya cevirebilme

Bu ozellik, topluluk kararlari icin chati spam'lemeyen net bir akis saglar.

### 9. Hassas Konular Icin Guvenli Paylasim

Bazi konu basliklari insanlarin acik kimlikle yazmak istemedigi alanlardir:

- saglik
- aile ici sorunlar
- hukuki sorular
- finansal zorluklar

Bu nedenle Faz 2'de su model dusunulmelidir:

- topluluga gorunur ama gercek kimligi sadece adminin gorebildigi yarim-anonim postlar
- sadece belirli group'larda aktif edilen guvenli paylasim modu
- suistimali azaltmak icin moderator onayi veya daha sik raporlama

Bu ozellik dogru kurgulanirsa, mevcut platformlarda insanlarin yazmaya cekindigi bircok hassas konu burada cozulmeye baslar.

Bu da kullaniciya sadece duzen degil, daha once sormaya cesaret edemedigi konular icin deger verir.

## Faz 2'de Reklam Tarafi

Reklam sistemi bu fazda daha kontrollu hale gelir:

- reklam hedefleme alanlari netlesir
- hangi gruplarda daha cok ilgi oldugu olculur
- reklam gizleme ve reklam gosterme tercihleri daha iyi islenir
- kullanicinin ilgi alanina uygun reklamlar siralanabilir
- advertiser icin temel performans raporu acilir

Bu rapor ilk etapta su sinyalleri gosterebilir:

- gosterim
- unique reach
- tiklama
- begeni
- `Faydali buldum` aksiyonu
- kaydetme
- profil veya iletisim goruntuleme
- reklam gizleme orani

Bu noktada advertiser'a sadece `goruldu` demek yetmez. Rapor su ayrimi yapabilmelidir:

- `Erisim`: gosterim, unique reach
- `Pozitif sinyal`: begeni, `Faydali buldum`, kaydetme
- `Ilgi`: tiklama, profil veya iletisim goruntuleme
- `Negatif sinyal`: reklam gizleme, ilgilenmiyorum, sikayet

Faz 2'de tam donusum analitigi gerekmeyebilir, ama advertiser en azindan reklamin toplulukta ise yarayip yaramadigini anlamalidir.

Yine de temel ilke degismez:

- reklam gormek istemeyen kullanici reklam gormemelidir

## Faz 2 Basari Kriterleri

- haftalik aktif kullanici orani artmali
- arama yapip soru acmayan kullanici orani artmali
- cevaplanmayan soru orani dusmeli
- moderator is yukunun yonetilebilir oldugu gorulmeli
- kullanici takip ettigi gruplara duzenli geri donmeli
- sikayet edilen kullanicilar icin islem alma suresi kisalmali
- ayni kullanici icin tekrar eden sikayetler azalmali
- advertiser acilan raporlardan anlamli fayda gorebilmeli
- role delegation sayesinde ana admin uzerindeki operasyon yukunun azalmasi
- poll ve kaynak kutuphanesi kullanim oraninin artmasi
- link ve medya arsivi kullanim oraninin artmasi
- yardim isteklerinin cevaplanma ve sonuca donme orani artmali

## Faz 2'de Hala Disarida Kalabilecekler

- gelismis kimlik ve belge dogrulama
- isletme profilleri
- review ve rating sistemi
- gelismis advertiser billing
- AI summarization

Bu alanlar Faz 3 ve Faz 4'te daha dogru bir yere oturur.

## Faz 2 Cikisinda Beklenen Sonuc

Bu faz sonunda urun sadece WhatsApp alternatifi degil, ayni zamanda Facebook Groups ve Telegram group davranislarini da daha duzenli ve daha faydali sekilde toplayan ana topluluk ortami haline gelmelidir.
