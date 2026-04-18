# Faz 2 - Retention & Engagement

## Fazin Amaci

Faz 2, kullanicinin platforma sadece ihtiyac aninda degil; duzenli olarak geri gelmesini saglar.

Faz 1 tasinma icin yeterlidir. Faz 2 ise tekrar tekrar geri gelmek icin gereklidir.

## Bu Faz Neyi Cozer

Faz 1 sonrasinda tipik sorunlar:

- kullanici sadece ihtiyac aninda gelir, oradan gider
- ilgili yeni icerikten habersiz kalir
- ayni seyi tekrar tekrar aramasini gerektirir
- yardim istegi acilir ama eslesme pasif kalir

Faz 2 bu sorulara cevap verir:

`Kullanici neden haftada birden fazla kez geri gelsin?`

## Faz 2 Basari Tanimi

Faz 2 basarili sayilacaksa:

- kullanici ayni aramayi ikinci kez yapmak zorunda kalmamali
- saved search veya alert sayesinde sisteme geri donmeli
- yardim istegi acip eslesme beklemeye devam edebilmeli
- takip ettigi konu ve linklere kolayca donebilmeli
- urun haftada en az bir kez acilacak kadar `pull` hissi yaratmali

## Faz 2 Kapsami

### 1. Subscription ve Kisisel Feed

Kullanici tum community'yi degil, ilgilendigi alanlari takip etmelidir.

Bu fazda:

- group bazli takip
- lokasyon bazli takip
- sadece secili topic'leri one cikaran kisisel feed
- sessize alma ve takipten cikma
- sadece `Yardim Istegi` akisini takip etme

ozellikleri olmalidir.

### 1.1 Lokasyon Tercihleri ve Hassasiyet Seviyesi

Faz 2'de lokasyon modeli kullanici tarafinda olgunlasmalidir:

- base location guncelleme
- birden fazla ilgilenilen lokasyon takip etme
- arama ve alert'lerde lokasyon kapsamini daraltma veya genisletme
- profilde gorunen lokasyon hassasiyetini ayarlama

Ornek:

- kullanici Manchester'da yasayip London jobs takip etmek isteyebilir
- ama profilinde sadece `North West` gorunsun isteyebilir

Bu esneklik olmadan urun ya fazla kisa menzilli ya da fazla ifsaci hale gelir.

### 2. Saved Search ve Keyword Alerts

Bu fazin en guclu farklastirici ozelligi budur.

Kullanicinin sistemi kendi adina takip etmesini saglar:

- `MK room`, `Turkish accountant`, `contractor jobs` gibi ihtiyac bazli bildirimler
- kayitli aramalarda yeni eslesme geldiginde bildirim
- keyword tetiklendiginde push veya email ile haber verme
- alert'i durdurma, sessize alma veya duzenleyebilme

Bu sayede kullanici ayni seyi tekrar tekrar aramak zorunda kalmaz.

### 3. Duplicate Reduction Akislari

Kullanici yeni post acarken sistem benzer icerikleri gostermelidir.

Ornek davranislar:

- ayni basliga yakin thread onerisi
- benzer soru bulunursa once onu gosterme
- mevcut cevap yeterliyse yeni soru acmadan yonlendirme

Bu ozellik community memory mantigini gercekten calisir hale getirir.

**Thread merge / redirect:**

- admin veya moderator bir thread'i mevcut benzer thread ile birlestirirse
- eski thread linke donusmeli; kullanici oraya tikladiginda ana thread'e gitmeli
- duplicate acip cevap bekleyen kullaniciya bildirim gitmeli

### 4. Yardim Istegi Matching

Faz 1'de pasif olan `Yardim Istegi` bu fazda eslesen bir akisa donusmeli.

Ornekler:

- `oda ariyorum` istegi acan kullaniciya ilgili oda ilanlari onerilebilir
- `muhasebeci ariyorum` istegine uygun provider veya eski tavsiye thread'leri gosterilebilir
- ilgili advertiser veya hizmet verenlere bu istekten haberdar olma imkani verilebilir

**Matching kalite sinyalleri:**

- oneri gosterildiginde kullanici `Faydali buldum` / `Hayir alakasiz` aksiyonu verebilmeli
- bu sinyaller ileriki matching sirasini iyilestirmek icin kullanilmali
- yardim istegini acip eslesen kullanici durumu `Eslesme Bulundu` olarak isaretleyebilmeli

### 4.1 Outcome ve Lifecycle Mantigi

Faz 1'deki temel status modeli bu fazda anlamli lifecycle'a donusmeli.

`Yardim Istegi`, ilan ve soru tiplerinde:

- `Acik`
- `Eslesme bulundu`
- `Cozuldu`
- `Kapandi`
- `Suresi doldu`

gibi durumlar izlenebilir olmali.

### 5. Structured Request Template'leri

`Yardim Istegi` sadece bos metinle acilan tip olarak kalmamali.

En sik use-case'ler icin hazir template'ler:

- `oda ariyorum`
- `oda arkadasi ariyorum`
- `ev ariyorum`
- `is ariyorum`
- `provider ariyorum`

Bu template'ler:

- eksik bilgi oranini dusurur
- matching kalitesini arttirir
- advertiser ve provider tarafinda daha net talep sinyali uretir

### 6. Saved Content ve Kisisel Kutuphane

Kullanici:

- onemli postlari kaydedebilmeli
- kendi cevap verdigi thread'leri gorebilmeli
- takip ettigi ilanlari ayri gorebilmeli
- kaydettigi link ve medyalara tek noktadan ulasabilmeli

### 6.1 Media Gallery ve Link Hub

Group icindeki medya ve linklere dogrudan erisim bu fazda guclenmelidir:

- group bazli `Medya` sekmesi
- group bazli `Linkler` sekmesi
- domain veya kaynak tipine gore filtreleme
- en cok kaydedilen veya tiklanan linklerin one cikmasi
- video, gorsel ve dosya tiplerinin ayri listelenmesi

Kullanici `o video neredeydi` diye eski thread kazimak zorunda kalmamali; dogrudan ilgili kutuphaneye gitmeli.

### 7. Bildirim Yonetimi ve Kanal Stratejisi

Kullanicinin bildirimlerini granular kontrol etmesi gerekir.

**Bildirim tipleri:**

- postuna yorum geldi
- soruna cevap geldi
- takip ettigi group'ta yeni duyuru
- yardim istegine eslesme veya cevap geldi
- saved search'te yeni icerik eslesti
- takip edilen request durum degistirdi

**Kanal onceligi ve fallback:**

- birincil kanal: **push** (uygulama yuklu ve push izni varsa)
- push calismazsa veya izin yoksa: **email** (kullanici email dogrulamasi tamamlamissa)
- **SMS** engagement bildirimi icin kullanilmamali; sadece Faz 1'deki guvenlik akislari icin gecerlidir
- kullanici push iznini iptal ederse sistem email'e otomatik gecmeli; kullanici bunu bildirim tercihlerinden gorebilmeli

**Kullanici kontrolleri:**

- group bazli bildirim acma / kapama
- bildirim frekansi: aninda, gunluk ozet, haftalik ozet
- bildirim kanali tercihi: push, email, uygulama ici
- `Sessiz mod` belirli saatler icin (orn: 22:00 - 08:00 arasi bildirim gelmesin)
- bildirim tipi bazli kontrol: yorum bildirimleri acik, duyuru bildirimleri kapali gibi

Bildirim yogunlugu kullanicinin kendisine gore ayarlanabilmeli. Varsayilan agresif olmamali.

### 8. Haftalik Ozet ve Digest

Push bildirimlere ek olarak daha olgun bir digest sistemi:

- gunluk veya haftalik kisisellestirilmis ozet
- cevap bekleyen sorular
- takip edilen group'taki onemli gelismeler
- saved search eslesmeleri

Bu, urunu rahatsiz edici degil faydali hale getirir.

### 9. Retention Loop Tasarimi

Faz 2'de urunun geri gelme sebepleri acik tasarlanmalidir:

- saved search sonucunda yeni eslesme gelmesi
- takip edilen request veya ilanin durum degistirmesi
- kaydedilen link veya medyalara yeni ekler gelmesi
- yardim istegine cevap veya teklif gelmesi

Boylece urun sadece ihtiyac aninda acilan degil, duzenli kontrol edilen topluluk merkezi haline gelir.

### 10. Uye Buyume Mekanikleri

Faz 1'de invite link ile manuel tasinma yapildi. Faz 2'de buyumenin sistem destegi olmasi gerekir.

**Referral / uye getir:**

- mevcut uye topluluk linkini paylastiginda kimin getirdigi izlenmeli
- admin hangi kanaldan (WhatsApp, Instagram, dogrudan link) kac kisi geldigini gorebilmeli
- referral takibi reklama donusmemeli; sadece admin analytics icin kullanilmali

**Organik keşif artisi:**

- public community'lerde `katil` akisini kolaylastirmak (Faz 1'de basladi)
- web discovery sayfalarinin arama motoruna acilmasi (Faz 3'te olgunlasacak; ama Faz 2'de altyapi hazir olmali)

Bu mekanikler admin'in `insanlari nereden getirdigini` anlamasina yardim eder ve ileride farkli kanallar denenmesini mumkun kilar.

### 11. Admin Gorünürlük Altyapisi

Faz 3'te admin dashboard acilacak; o dashboardun gosterecegi metrikler bu fazda birikmeye baslamali.

Faz 2'de altyapisal olarak loglanmasi gereken sinyaller:

- hangi aramalarin sonucsuz kaldigi
- hangi thread'lerin cevapsiz kapandigi
- kullanici bazi post tiplerinde ne kadar sure geciriyor
- saved search ve alert eslesme frekanslari

Bu veri Faz 2'de kullaniciya gosterilmez; arka planda toplanir. Faz 3'te admin dashboard acildiginda anlamli geri bildirim verebilmesi icin bu birikimin olmasi gerekir.

### 11. Reklam Tarafinda Faz 2 Iyilestirmesi

Temel reklam sistemi Faz 1'de kuruldu. Bu fazda yalnizca operasyonel iyilestirme yeterlidir:

- reklam hedefleme alanlari netlesir (lokasyon ve topic secimi iyilesir)
- hangi group'larda daha cok ilgi oldugu olculur
- reklam gizleme ve gosterme tercihleri daha iyi islenir
- advertiser icin temel performans raporu (gosterim, tiklama, gizleme) acilir

Derin analitik ve commercial packaging Faz 5'e kalmali.

## Faz 2 Basari Kriterleri

- haftalik aktif kullanici orani artmali
- arama yapip yeni soru acmayan kullanici orani artmali
- kullanici saved search veya alert sayesinde geri donmus olmali
- cevaplanmayan soru orani dusmeli
- yardim isteklerinin eslesme ve sonuca donme orani artmali
- haftalik geri gelen kullanici oraninin saved search ve request updates ile artmasi

## Faz 2'de Disarida Kalabilecekler

- gelismis group yonetimi ve rol delegasyonu → Faz 3
- admin dashboard ve otomasyon → Faz 3
- quick rooms, poll → Faz 3
- verified profiller ve review sistemi → Faz 4
- advertiser billing ve kampanya → Faz 5
- AI → Faz 6

## Faz 2 Cikisinda Beklenen Sonuc

`Kullanici platformu sadece bilgi icin degil, takip icin de kullaniyor. Sistem kullanici adina calisarak yeni eslesmeleri, cevaplanmis istekleri ve ilgili icerigi hatirlatmaya basliyor.`
