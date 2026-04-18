# Faz 5 - Monetization ve Ticari Model

## Fazin Amaci

Faz 5, urunun surdurulebilir gelir modelini kurar.

Faz 4'te guven altyapisi ve provider sayfalar oturdu. Faz 5, bu altyapi uzerinden advertiser araclari, commercial paketler ve opsiyonel chat katmanlari ekler.

## Bu Faz Neden Simdi Geliyor

Monetization erken gelirse:

- review sistemi olmadan advertiser'in guvenirligi belirsiz kalir
- provider sayfalar yokken kampanya hedefleme anlamsiz olur
- yeterli community aktivitesi olmadan advertiser ROI dili bos kalir

Guven ve aktivite temeli oturduğunda monetizasyon dogru esiktir.

## Ilk Ticari Tez

Bu urunun ilk satis hikayesi genel kullaniciya premium satmak olmamali.

Ilk buyer segmentleri:

- topluluga ulasmak isteyen `provider` veya `advertiser`
- operasyonu buyuyen `community admin`
- migration veya setup destegi isteyen buyuk topluluklar

Bu nedenle Faz 5'te odak son kullanicidan para almak degil; topluluk ustundeki profesyonel veya operasyonel ihtiyaclari urunlestirmektir.

## Ilk Commercial Sequence

Onerilen sira:

1. `Provider / Advertiser Starter`
2. `Migration Concierge`
3. `Community Admin Pro`

Bu sira sunu kabul eder:

- ilk tekrarlanabilir gelir advertiser veya provider tarafindan daha kolay gelir
- ilk community'leri kazanmak icin concierge destek gerekir
- admin pro ise ancak operasyon faydasi net olustuktan sonra daha rahat satilir

## Faz 5 Kapsami

### 1. Advertiser Araclari

Faz 1'deki temel `Reklam Ver` akisi bu fazda olgun hale gelir:

- advertiser profili
- kampanya olusturma
- lokasyon ve topic hedefleme
- hizmet verilen lokasyonlari (service area) tanimlama
- varsa fiziksel is yeri lokasyonunu ayri belirtme
- baslangic ve bitis tarihi
- performans goruntuleme
- temel butce ve gosterim mantigi

Reklam lokasyon modelinde net ayrim korunmali:

- `target location`: reklamin kimlere gosterilecegi
- `service area`: hizmetin verildigi alan
- `business location`: varsa fiziksel nokta

Bu ayrim olmazsa reklam relevance'i duser ve kullanici deneyimi bozulur.

### 2. Advertiser Dashboard

Advertiser experience artik urunun gelir modelinin parcasi haline gelir.

Ana dashboard bloklari:

- kampanya ozeti
- hedef group ve lokasyon performansi
- pozitif topluluk sinyalleri
- ilgi sinyalleri
- niyet aksiyonlari
- negatif sinyaller

Bu dashboard hem kucuk isletme sahibinin anlayabilecegi kadar sade, hem de tekrar reklam verme kararini destekleyecek kadar anlamli olmalidir.

**Raporlama ayrimlari:**

- `Erisim`: gosterim, unique reach
- `Pozitif sinyal`: begeni, `Faydali buldum`, kaydetme
- `Ilgi`: tiklama, profil ziyareti, detay ekrani acilisi
- `Niyet`: telefon tiklama, mesaj baslatma, web site tiklama, rota alma
- `Negatif sinyal`: reklam gizleme, ilgilenmiyorum, sikayet

Advertiser sadece `goruldu` degil, `gercekten fayda uretiyor mu` sorusuna cevap bulabilmeli.

### 3. Sales Story ve ROI Dili

Advertiser / provider'a kurulacak dil:

- dogru lokasyonda gorunurluk
- ilgilenen toplulukta gercek ulasim
- begeni veya `Faydali buldum` gibi pozitif sinyaller
- telefon, mesaj veya site tiklamasi gibi niyet aksiyonlari

Community admin tarafinda ROI dili farklıdır:

- tekrar eden sorularin azalmasi
- moderasyon yukunun dusmesi
- onay kuyruklarinin yonetilebilir hale gelmesi
- toplulugun dagilmadan buyuyebilmesi

Bu iki ROI dili farkli rapor anlatilarinda sunulmali.

### 4. Commercial Packaging

Net buyer bazli paket mantigi:

- `Provider / Advertiser Starter`: gorunurluk, hedefleme, performans raporu
- `Community Admin Pro`: gelismis admin araci, approval kapasitesi, operasyon dashboard'u
- `Migration Concierge`: ilk tasima, setup ve seed icerik destegi

Her paket farkli buyer'a farkli ROI dili ile anlatilmali.

Ilk productized paket olarak `Provider / Advertiser Starter` one alinmalidir.

### 5. Gizlilik ve Veri Paylasim Sinirlari

Advertiser reporting guclenirken kullanici mahremiyeti korunmali:

- bireysel kullanici kimligi advertiser ile paylasilmaz
- kucuk segmentlerde aggregate veya anonymized veri gosterilir
- varsayilan olarak advertiser sadece kendi reklamlarinin sonucunu gorur
- community admin ancak kendi topluluguna ait toplu reklam ozetlerini gorebilir

Community admin'in advertiser tarafina mudahalesi sinirda kalmali:

- kendi community'sinde hangi reklam kategorilerinin uygun oldugu
- hangi alanlarda sponsorlu gorunurluk verilecegi
- yerel kalite veya topluluk kuralina gore reklam onayi

Ama su alanlar merkezi kalmali:

- billing ve odeme akislari
- platform genelindeki reklam urunu ve fiyatlari
- advertiser hesap seviyesindeki ust politikalar

### 6. Ad Network ve Programmatic Katman

Native community reklamlari ana monetization modeli olmaya devam eder. Olcek arttiginda programmatic katman ek gelir saglayabilir.

Dogru kullanim:

- once `native advertiser` ve `provider` inventory kullanilir
- bos kalan veya satilmayan uygun alanlar icin ad network fill devreye girer
- public web preview sayfalari ve discovery yuzleri ilk aday alanlardir

Asagidaki alanlarda ad network kapali veya cok dikkatli sinirlanmali olmalidir:

- private community ic akislari
- hassas konu group'lari: saglik, hukuki, aile ici sorunlar
- DM veya birebir iletisim ekranlari
- aktif `Yardim Istegi` kritik akis ortasi

Ana kurallar:

- kullanici reklam gormeyi kapattiysa ad network reklami da gormemeli
- network reklamlari acikca etiketlenmeli
- frekans limiti ve kalite filtreleri olmali
- network reklamlari yerel topluluk relevance'ini bozmamali

### 7. Opsiyonel DM ve Group Live Mode

Guven ve monetizasyon oturunca derin etkilesim isteyen kullanicilar icin ek chat katmanlari acilabilir.

**Opsiyonel DM (Birebir Chat):**

- ozellikle hizmet verenler ve musteriler arasinda
- veya guvenli iletisim ihtiyaci olan uyeler arasinda
- ilk temas `contact request` ile baslamali
- provider ve advertiser tarafinda engelleme, raporlama ve spam siniri olmali

**Group Live Mode:**

- belirli topic group'lar icin admin tarafindan aktive edilebilen tam zamanli chat modu
- asenkron thread yapisina paralel veya ic ice calisabilir
- varsayilan kapali; topluluk ihtiyacina gore admin yonetir
- live mode icindeki onemli bilgi gerekiyorsa thread'e veya kaynaga donusturulebilmeli

**Temel ilke degismez:**

`Chat koordinasyon ve iliski kurar; hafiza ise yine thread ve kaynak yapisinda yasar.`

### 8. Premium veya Pro Katmanlari

Bu fazda farkli gelir akislari test edilebilir:

- one cikan advertiser paketleri
- service provider abonelikleri
- community admin araclari icin pro paket
- gelismis analytics ve visibility paketleri

Reklamsiz deneyimi para ile satmak bu urun icin zorunlu olmayabilir; cunku reklam kapatma tercihi zaten urun ilkesine dahildir.

## Faz 5 Basari Kriterleri

- advertiser tekrar kullanim orani
- reklam kampanyalarinda pozitif sinyal ve niyet aksiyonu ureten oran
- farkli paket tiplerinde tekrar satin alma veya yenileme orani
- migration concierge veya admin pro alan topluluklarda retention farki
- DM veya live mode kullanim orani (istege bagli acilan gruplarda)

## Faz 5 Riskleri

- advertiser yogunlugunun topluluk kalitesini dusurmesi
- advertiser reporting'in mahremiyet sinirlarini asmasi
- DM ve live mode'un community memory'i yeniden bosaltmasi

Bu nedenle monetization ve chat katmani birlikte ama kontrollu sekilde cikmali.

## Faz 5 Cikisinda Beklenen Sonuc

`Platform sadece community conversation ortami degil; ayni zamanda guvenilir insanlari ve isletmeleri ayirt edebilen, ticari olarak surdurulebilir bir yapiya donusuyor. Gelir modeli kullanici deneyimini zorla bozmadan, secimli gorunurluge dayali olarak calisiyor.`
