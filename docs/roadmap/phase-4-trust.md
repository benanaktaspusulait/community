# Faz 4 - Guven

## Fazin Amaci

Faz 4, topluluktaki kimlerin guvenilir oldugunu gorunur kilmak icin gerekli altyapiyi kurar.

Faz 3'te operasyon yukleri azalip admin araclari olgunlasir. Faz 4 ise bir adim ilerleyerek kullanicinin `Bu kisi guvenilir mi?` sorusuna platform uzerinden cevap bulabilmesini saglar.

## Bu Faz Neden Simdi Geliyor

Guven altyapisi erken gelirse:

- review sistemi kullanilmaz; toplulukta yeterli aktivite yoktur
- verified profiller anlamsiz kalir; hangi baglamda dogrulandigi belirsizdir
- provider sayfalarini dolduracak yeterli talep yoktur

Faz 3'te operasyonel ve Faz 2'de engagement temeli kurulduktan sonra guven katmani anlamli hale gelir.

Bu faz ayni zamanda Faz 3'te kurulan otomasyon temellerinin (duplicate detection, auto-FAQ, admin dashboard) calistigi varsayimiyla ilerler. Admin operasyon yuku azalmadan guven katmani icin gerekli kapasiteyi ayirmak zorlaşır.

## Faz 4 Kapsami

### 1. Verified Profiles

Bu fazda farkli guven seviyeleri eklenir:

- verified member
- verified service provider
- verified business
- moderator verified expert

Bu dogrulamalar her topluluk icin ayni derinlikte olmak zorunda degildir; esnek sistem olarak tasarlanmali.

Dogrulama yontemleri en azindan sunlari kapsamali:

- email veya telefon dogrulamasi (basal)
- community admin tarafindan manuel onay
- is belgesi veya referans bazli dogrulama (provider / business icin)

### 2. Provider ve Business Sayfalar

Hizmet verenler icin normal kullanici profilinden farkli sayfalar gerekir:

- hizmet kategorileri
- hizmet bolgeleri ve service area
- iletisim bilgileri
- aciklama ve gorseller
- community icindeki gecmis reklam veya tavsiyeler

Bu sayfalar, advertiser katmani ve trust katmani arasinda kopru kurar.

### 3. Rating ve Review Sistemi

Topluluklarin en cok tekrar eden sorularindan biri:

`Bu kisi guvenilir mi?`

Bu nedenle:

- hizmet verenler icin review yazabilme
- puan ortalamasi
- review yaniti birakma (provider tarafindan)
- sahte veya kotu niyetli review moderasyonu

olmali.

**Review moderasyon modeli:**

- review yazildiginda basit spam / hakaret kontrolu
- sikayet edilen review moderatora duser
- provider dispute acabilir; moderator karara varabilir
- haksiz toplu review saldirilarini engelleyecek rate limit

### 3.1 Sonuc ve Sosyal Kanit Katmani

Topluluktaki neyin islediginin gorunmesi deger uretir:

- `bu thread cozuldu`
- `bu provider en cok onerilenler arasinda`
- `bu ilan cevaplandi`
- `bu rehber en cok kaydedilenler arasinda`

**Dispute Resolution (Opsiyonel):**

- ozellikle yuksek montanli veya riskli hizmetlerde (kira, ev tasima) admin onayli guvenli odeme veya depozito tutma opsiyonlarinin arastirilmasi
- hizmet veren ve alan arasindaki anlasmazliklarin moderatörlere raporlanma akisi

Bu tip sonuc sinyalleri yeni kullaniciya platformun gercek fayda uretebildigini gosterir.

### 4. Reputation Katmani

Sadece verification yetmez; davranis bazli sinyaller de gerekir:

- toplulukta gecirdigi sure
- faydali cevap sayisi
- onaylanmis katkilar
- rapor gecmisi

Bu sinyaller kullanicinin kimin daha guvenilir oldugunu anlamasina yardim eder.

### 5. Supply-side Sagligi

Ticari modelin surmesi icin sadece demand gelmesi yetmez; yeterli arz olmali:

- yeterli provider profili
- aktif advertiser veya hizmet veren
- guncel is, ev ve hizmet icerigi

Bu nedenle Faz 4'te supply-side health metrikleri izlenmeli. Kullanici gelir ama sonuc bulamazsa guven degil hayal kirikligi olusur.

### 6. Event-Lite ve RSVP Katmani

Facebook Groups replacement icin zaman zaman etkinlik veya bulusma planlama ihtiyaci dogabilir.

Tam kapsamli event platformu gerekmez. Hafif model:

- bulusma veya etkinlik postunu RSVP ile acma
- kim geliyor goruntuleme
- tarih ve lokasyon bilgisini yapili saklama
- bildirim: etkinlik yaklasinca katilimcilara hatirlat

Bu Facebook Groups replacement tarafini guclendirir ama urunu tam event app'e cevirmeden ilerler.

### 7. Icerik Backup ve Export

Community admin'in topluluktan ayrilmasi veya platformu degistirmesi durumunda icerik kaybolmamali.

Minimum export katmani:

- community admin kendi toplulugundaki thread, kaynak ve pinned icerigi export edebilmeli (JSON veya CSV formatinda)
- kullanici kendi postlarini ve kaydettigi icerigi export edebilmeli
- export talepleri kuyrukla islenmeli; buyuk topluluklarda aninda olmayabilir

Bu ozellik kullanicilara platform kilitlenmesi (vendor lock-in) konusunda guvence verir ve uzun vadede topluluk cekimini arttirir.

### 8. Referans Community ve Case Study Katmani

Yeni admin ve advertiser'lari ikna etmek icin somut ornekler gerekir:

- referans community hikayeleri
- admin testimonial'lari
- advertiser basari ozetleri
- `bu community tasindi ve su sonuc alindi` tipi case study'ler

Bu katman Faz 5'teki ticari sales motion icin kritik destek saglar.

## Faz 4 Basari Kriterleri

- verified profile basvuru ve kabul oranlari
- review birakma oranlari
- trust signal olan profillere daha yuksek etkilesim
- topluluktaki scam veya supheli icerik oraninin dusmesi
- supply-side saglik metriklerinin izleniyor olmasi
- referans community veya case study ureten topluluk sayisi

## Faz 4 Riskleri

- verification surecinin fazla agirlasmasi (friction artar, kullanici baslamaz)
- review sisteminin suistimal edilmesi (rekabet bazli sahte review)
- supply-side yetersiz kaldigi halde trust badge dagitilmasi (bos guven)

## Faz 4'te Disarida Kalabilecekler

- advertiser billing ve kampanya araclari → Faz 5
- DM ve live mode → Faz 5
- AI ve semantik katman → Faz 6

## Faz 4 Cikisinda Beklenen Sonuc

`Kullanici toplulukta kimin guvenilir oldugunu platforma bakarak anlayabiliyor. Hizmet arayan ile hizmet veren arasindaki guven koprusu artik topluluk hafizasina dayaniyor.`
