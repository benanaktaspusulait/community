# Faz 1 - Pilot Migration

## Fazin Amaci

Faz 1'in amaci, mevcut 1-3 WhatsApp, Facebook veya Telegram grubunun temel ihtiyaclarini bu uygulamaya tasiyabilecek kadar guclu bir ilk surum cikarmaktir.

Bu fazda hedef, tum community hayatini dijitallestirmek degil; su iki sorunu cozmektir:

- eski bilgiyi bulamama
- konu bazli gruplari duzenli sekilde yonetememe

## Hedef Kullanicilar

- WhatsApp, Facebook Group ve Telegram adminleri
- cok aktif community uyeleri
- sik soru soran yeni gelen kullanicilar
- is, ev, hizmet veya tavsiye paylasan uyeler

## Faz 1 Basari Tanimi

Faz 1 basarili sayilacaksa sunlar gerceklesmeli:

- adminler topluluk icin invite link paylasabilmeli
- kullanicilar eski bilgiye arama ile ulasabilmeli
- topic group mantigi acik ve uygulanabilir olmali
- ayni sorularin tekrar orani dusmeye baslamali
- en az birkac grup gunluk akisi mevcut platformlar yerine burada dondurmeye baslamali
- problemli kullanicilar `Sikayet Et` akisi ile moderatorlere hizlica iletilebilmeli

## Faz 1 Kapsami

### 1. Community Hiyerarsisi

Yapi su sekilde olmali:

- ana community
- location communities
- topic groups

Ornek:

- UK Turks
- Milton Keynes
- Saglik, Gezi, Is, Ev, Hizmetler

Bu sayede kullanici hem nereye ait oldugunu hem de hangi konuda yazistigini net gorur.

### 1.1 Community Acma ve Yetki Modeli

Faz 1'de community acma tam serbest olmamalidir. Aksi halde cok hizli sekilde duplicate, bos veya dusuk kaliteli alanlar olusur.

Bu nedenle Faz 1 icin onerilen model:

- `Ana community` sadece platform adminleri veya platform tarafindan onaylanmis community founder/admin tarafindan acilabilir
- `Location community` ve `topic group` parent community altinda olusur
- parent community admini, kendi yapisi icinde yeni alt alan acma yetkisine sahip olabilir

Bu model erken fazda kaliteyi korur ve ayni sehir veya ayni konu icin 10 farkli daginik topluluk olusmasini engeller.

### 1.2 Rol Katmanlari

Faz 1'de bile tek tip admin yeterli olmayabilir. En azindan su roller dusunulmelidir:

- `Platform admin`: tum sistemi yonetir, ana community acar, ust seviye kurallari belirler
- `Community admin`: belirli bir ana community'nin sahibidir veya yoneticisidir
- `Sub-admin`: belirli bir location community veya topic group'tan sorumludur
- `Moderator`: icerik ve uye moderasyonu yapar
- `Member`: normal kullanici

### 1.3 Sub-admin Mantigi

Sub-admin rolu bu urun icin cok faydalidir. Cunku buyuk bir community icinde her seyi tek adminin yonetmesi gercekci olmaz.

Sub-admin'in ilk fazda sahip olabilecegi yetkiler:

- sadece atandigi location community veya topic group'u yonetme
- invite link olusturma
- pinned post yonetme
- post tasima veya silme
- kullanici sikayetlerini gorme
- gerekli durumlarda kullaniciyi ilgili group'tan cikarma

Sub-admin'in sahip olmamasi gereken yetkiler:

- yeni ana community acma
- ana community ayarlarini degistirme
- top-level admin atama veya alma
- monetization veya advertiser ayarlarina dokunma

Bu ayrim, hem operasyonu dagitir hem de yetki karmasasini azaltir.

### 1.4 Faz 1 Permission Snapshot

Faz 1'de sistemi basit tutmak icin yetki dagilimi de sade olmalidir:

| Aksiyon | Platform admin | Community admin | Sub-admin | Moderator | Member |
| --- | --- | --- | --- | --- | --- |
| Ana community ac | Yes | No by default | No | No | No |
| Location community / topic group ac | Yes | Yes | No by default | No | No |
| Sub-admin ata | Yes | Yes in own community | No | No | No |
| Moderator ata | Yes | Yes in own community | No | No | No |
| Invite link olustur | Yes | Yes | Scoped | No by default | No |
| Kullaniciyi group'tan cikar | Yes | Yes | Scoped | Scoped if allowed | No |

Bu snapshot'in ana mantigi su:

- ana community acilisi kontrollu kalir
- operasyon community admin ve sub-admin uzerine dagilir
- moderatorler yapi kurmaz, duzeni korur
- member sadece kullanir, raporlar, katki verir

### 2. Davetiye Ile Katilim

Mevcut WhatsApp, Facebook Group ve Telegram adminleri insanlari kolayca tasiyabilmeli.

Bu nedenle:

- community veya belirli group icin invite link olusturma
- invite link ile hizli kayit ve join akisi
- ilk giriste lokasyon ve ilgilenilen group secimi
- WhatsApp, Facebook veya Telegram'da paylasilabilecek preview / invite kartlari
- tam kayit olmadan once temel pinned bilgi ve community degerini gosteren hafif preview deneyimi
- private topluluklar icin `join request` ve admin onay akisi
- istege bagli `giris sorulari` ile uye on elemesi

olmazsa olmazdir.

### 2.1 Gecisi Hakli Cikaran Faz 1 Deneyimi

Faz 1'de kullaniciya hemen deger gostermezsen gecis olmaz. Bu nedenle ilk surumde su hissettirilmeli:

- buradaki bilgi kaybolmuyor
- topluluga girmeden once bile burada isime yarayan icerik oldugunu gordum
- admin beni buraya tasimakta zorlanmadi

Bu hissi olusturacak ilk deneyim:

- lokasyon ve ilgi alanina gore hizli onboarding
- en faydali pinned thread'lerin one cikmasi
- `solved` veya `best answer` isaretli thread'lerin hemen gosterilmesi
- paylasildiginda disarida da anlasilan preview kartlari
- login oncesi okunabilen hafif web preview veya acik ozet ekranlari

### 3. Topic Group Yapisi

Her konu icin ayri alan olmali:

- Saglik
- Gezi
- Is
- Ev
- Parents
- Hizmetler

Her group'un kendi amaci ve kurali bulunmali. Konu disi paylasim normal kullanici davranisi olarak kabul edilmemeli.

### 4. Structured Content Modeli

Normal icerikler duz mesaj olmamali. Ilk fazda yeterli post tipleri:

- Soru
- Duyuru
- Ilan
- Tavsiye

Tum postlarda en az su alanlar olmali:

- baslik
- aciklama
- lokasyon
- group
- olusturan kullanici
- olusturma tarihi

### 5. Thread ve Yorumlar

Her postun altinda:

- yorum
- reply
- solved / best answer

olmalidir.

Bu, mevcut group akisini topluluk hafizasina ceviren ana mekaniktir.

### 6. Arama ve Filtreleme

Faz 1'in en kritik farklastirici ozelligi budur.

Minimum arama ozellikleri:

- kelime bazli arama
- lokasyona gore filtre
- topic group'a gore filtre
- post tipine gore filtre
- sadece link iceren paylasimlari filtreleme
- sadece gorsel veya video iceren paylasimlari filtreleme

Bir kullanici `MK nursery`, `kiralik oda`, `Turk muhasebeci` gibi sorgularla anlamli sonuc gorebilmelidir.

### 6.1 Temel Link ve Medya Erisimi

Eski paylasimlar icindeki link, video ve gorseller thread icinde gomulu kalmamalidir.

Faz 1'de en azindan su davranis olmali:

- paylasilan linkler tiklanabilir ve saklanmis preview ile gorunmeli
- gorsel ve video ekleri dogrudan acilabilmeli
- bir group icin `Paylasilan Linkler` ve `Paylasilan Medya` gibi basit gorunumler olmali
- kullanici bir medyayi actiginda hangi thread'den geldigini gorebilmeli

Bu ozellik, ozellikle Telegram ve Facebook gruplarinda biriken eski faydali icerigi daha kullanisli hale getirir.

### 7. Pinned Bilgi ve FAQ

Her community ve topic group icin:

- pinned posts
- sik sorulan sorular
- onboarding rehberleri
- dosya veya dokuman eklenebilen temel kaynak postlari
- sabitlenmis onemli link ve medya koleksiyonlari

olmalidir.

Yeni gelen kullanici eski icerigi kazimak zorunda kalmadan once bunlari gormelidir.

### 8. Moderasyon Temelleri

Admin ve moderatorler su yetkilere sahip olmali:

- post sabitleme
- post silme
- postu baska gruba tasima
- kullanici raporlarini gorme
- off-topic veya spam sebebiyle islem alma
- kullaniciyi ilgili group'tan cikarma

Normal kullanici tarafinda da minimum bir raporlama akisi olmali:

- profil veya icerik uzerinden basit bir `Sikayet Et` butonu
- kisa neden secimi: spam, hakaret, konu disi, scam, rahatsiz edici davranis
- sikayet edilen kullanici icin group bazli sikayet sayisinin tutulmasi

Ilk fazda en saglikli model, tamamen otomatik ban degil; moderator destekli cikarimdir:

- kullanici sikayet aldikca moderator kuyruguna duser
- admin isterse ilgili group'tan kullaniciyi cikarir
- gerekirse yeniden katilimi engelleyen basit bir block uygulanir

Bu kisim, mevcut platform adminlerinin urune gecmesi icin kritiktir.

### 8.1 Faz 1 Moderation Workflow

Faz 1 icin en saglikli moderasyon akisinin kisa ozeti su olur:

1. Kullanici profil veya icerikten `Sikayet Et` butonu ile rapor gonderir.
2. Rapor ilgili admin veya moderator kuyruguna duser.
3. Sistem, ayni kullanicinin ilgili group icindeki onceki sikayetlerini gosterir.
4. Admin baglami inceler: profil, postlar, onceki davranis.
5. Gerekirse uyari, icerik silme veya group'tan cikarma aksiyonu alir.
6. Kullanici group'tan cikarildiysa member status guncellenir.

Bu model Faz 1 icin yeterince basit, ama topluluk duzenini koruyacak kadar gucludur.

### 8.2 Uye Kabul ve Entry Screening

Ozellikle Facebook Groups replacement icin sadece invite yetmez. Bazi topluluklar uye kabulunu kontrol etmek ister.

Faz 1'de basit ama etkili model su olabilir:

- `join request` akisina dusen kullanici
- adminin gorecegi kisa giris sorulari
- onay, red veya beklemeye alma

Bu ozellik private topluluk kalitesini korur ve Facebook Groups'taki aliskanligi daha rahat tasir.

### 9. Reklam Sistemi - Faz 1

Reklam normal post degil, ayri bir akis olmalidir.

Ilk fazda:

- her kullanici `Reklam Ver` ekranindan reklam olusturabilir
- reklam sponsorlu olarak etiketlenir
- reklam hedef lokasyon ve hedef konu secimi yapabilir
- reklam normal postlardan ayri veri modelinde tutulur

En kritik kural:

- reklam yasak degil
- reklam gormek zorunlu degil

Bu nedenle kullanici seviyesinde net bir tercih olmali:

- reklam goster
- reklam gosterme

`Reklam gosterme` secen kullanici feed, liste ve onerilerde reklam gormemelidir.

### 10. Temel Bildirimler

Ilk fazda sadece gerekli bildirimler olmali:

- postuna yorum geldi
- soruna cevap geldi
- takip ettigi group'ta yeni duyuru var

Spam hissi yaratacak notification yogunlugundan kacinilmalidir.

### 11. Temel Kaynak Kutuphanesi

Facebook Groups ve Telegram gruplarinda insanlar sabit dosyalar, listeler ve rehberler paylasir. Bunlar sadece mesaj akisina birakilirsa yine kaybolur.

Bu nedenle Faz 1'de en azindan su olmali:

- pinned kaynak postlari
- PDF, dokuman veya link ekleri
- topluluk icin sabit checklist veya form baglantilari
- daha once paylasilan linklerin ve medya eklerinin temel arsiv gorunumu

Bu ozellik, sadece chat replacement degil ayni zamanda bilgi kutuphanesi hissi verir.

## Faz 1'de Olmamasi Gerekenler

Asagidaki konular bu fazda bilerek disarida birakilmali:

- DM veya private chat
- full real-time group chat
- AI assistant
- gelismis kimlik dogrulama
- rating ve review sistemi
- event modulu
- anket ve poll sisteminin gelismis versiyonu
- odeme, checkout veya reklam open auction modeli
- detayli analytics ve growth automation

## Faz 1 Cikisinda Beklenen Sonuc

Bu faz sonunda urun su cumleyle anlatilabilmelidir:

`Davetiye ile girilen, konu bazli ayrilmis, aranabilir ve reklam gorunurlugu kullanici tarafindan kontrol edilen community platformu.`

Eger bu net bir sekilde calisiyorsa Faz 2'ye gecmek anlamlidir.
