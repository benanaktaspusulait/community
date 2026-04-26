# Faz 1 Product Flows

## Amac

Bu dokuman, Faz 1 roadmap'ini gercek kullanici ve admin akislarina indirger.

Faz 1'in asil amaci yeni bir sosyal medya veya chat uygulamasi yapmak degildir. Amac, mevcut WhatsApp, Facebook Groups ve Telegram gruplarindaki bilgiyi:

- aranabilir
- kalici
- konu bazli
- onaylanabilir
- filtrelenebilir
- reklam tercihine saygili

hale getirmektir.

## Tasarim Prensipleri

- `Memory-first`: Eski bilgi bulunamiyorsa urun basarisizdir.
- `Structured-first`: Yardim, ilan, soru ve tavsiye duz mesaj gibi acilmamalidir.
- `Curated-first`: Pilot baslangicinda degerli bilgi admin ve moderator destegiyle olusturulmalidir.
- `No general chat feed`: Ana deneyim serbest sohbet akisina donmemelidir.
- `Topic discipline`: Saglik grubunda gezi, gezi grubunda reklam, ev grubunda alakasiz sohbet akmamalidir.
- `User-controlled ads`: Reklam girmek serbesttir; reklam gormek kullanicinin tercihidir.
- `Scoped moderation`: Her admin her seyi degil, yetkili oldugu community, location veya topic'i yonetmelidir.

## Aktorler

| Aktor | Tanimi |
| --- | --- |
| Visitor | Public preview veya paylasilan link ile gelen, henuz uye olmayan kisi |
| Member | Community veya group'a katilmis normal kullanici |
| Power user | Soru cevaplayan, kaynak oneren, faydali uye sinyali ureten kullanici |
| Advertiser / provider | Reklam, hizmet veya ticari duyuru girmek isteyen kisi ya da isletme |
| Moderator | Icerik ve uye davranisini yoneten scoped yetkili |
| Sub-admin | Belirli location community veya topic group'tan sorumlu admin |
| Community admin | Ana community'nin operasyonundan sorumlu kisi |
| Platform admin | Ana community acma, ust politika ve platform genelinde karar yetkisine sahip kisi |

## Faz 1 Flow Oncelikleri

| Oncelik | Flow |
| --- | --- |
| P0 | Public preview, invite/join, onboarding, feed, search, structured post, help request, comment/thread, report, ad preference |
| P0 | Admin approval queue, member removal, pinned/Altin Bilgi management, topic/location setup |
| P1 | Reklam olusturma ve temel reklam onayi, QR invite, data request, media/link archive |
| P1 | Public thread/resource preview, duplicate deflection, account deletion |
| P2 | Bulk invite import, advanced migration tooling, advanced ad reporting, manual weekly summary support |

P0 akislar olmadan pilot migration calismaz. P1 akislar pilotu guvenli ve ikna edici yapar. P2 akislar Faz 1 icinde dusunulebilir ama ilk kullanilabilir surumu bloke etmemelidir.

## Flow 1: Public Preview -> Join

### Problem

Kullanici WhatsApp, Facebook veya Telegram'dan cikmadan once burada gercek deger oldugunu gormek ister.

### Giris Noktalari

| Giris | Ornek |
| --- | --- |
| Invite link | Adminin WhatsApp grubunda paylastigi katilim linki |
| Public community preview | Google veya paylasilan web linki ile acilan community sayfasi |
| Public thread/resource preview | Paylasilan solved thread, FAQ veya cozum karti |
| QR code | Etkinlik, cami, okul veya lokal isletmede scan edilen kod |

### Happy Path

1. Visitor public preview sayfasini acar.
2. Sistem community adini, lokasyonunu, topic group'larini ve secilmis faydali icerikleri gosterir.
3. Visitor login olmadan sinirli sayida solved thread, Altin Bilgi ve aktif yardim istegi gorur.
4. Visitor `Join` veya `Request to join` aksiyonunu secer.
5. Public community ise kullanici kayit sonrasi katilir.
6. Private community ise join request acilir ve admin onayi bekler.
7. Invite link ile gelen kullanici uygun group'a direkt yonlendirilir.

### Karar Noktalari

| Soru | Karar |
| --- | --- |
| Community public mi private mi | Public ise hizli join, private ise onay kuyrugu |
| Invite link gecerli mi | Gecerliyse join akisi, degilse expired invite ekrani |
| Kullanici zaten uye mi | Direkt ilgili community veya post'a yonlendirme |
| Profil eksik mi | Onboarding'e yonlendirme |

### Cikti

- yeni member kaydi
- membership status
- source attribution: invite, public preview, QR, shared thread
- ilk topic/location secimi

## Flow 2: Onboarding

### Problem

Kullanici cok form doldurmadan deger gormeli, ama sistemin relevance uretmesi icin minimum sinyaller alinmalidir.

### Happy Path

1. Kullanici Google, Apple veya email ile giris yapar.
2. Ad, gorunen isim ve temel profil alanlarini tamamlar.
3. Base location secer: sehir, bolge veya postcode district.
4. Lokasyon gorunurlugunu belirler.
5. Ilgilendigi topic group'lari secer.
6. Bildirim tercihlerini secer.
7. Reklam gorunurluk tercihini belirler.
8. Sistem ilk deger ekranini gosterir: populer solved thread, Altin Bilgi ve aktif yardim istekleri.

### Minimum Alanlar

| Alan | Faz 1 Karari |
| --- | --- |
| Display name | Zorunlu |
| Login identity | Zorunlu |
| Base location | Zorunlu, hassas adres degil |
| Location visibility | Zorunlu tercih |
| Topic interest | En az bir secim onerilir |
| Ad preference | Default net gosterilmeli, kullanici degistirebilmeli |

### Cikti

- member profile
- base location
- visibility preference
- topic memberships
- notification preference
- ad visibility preference

## Flow 3: Home Feed ve Topic Discovery

### Problem

Ana ekran bos veya daginik gorunurse kullanici mevcut gruba geri doner.

### Happy Path

1. Member home feed'i acar.
2. Sistem kullanicinin base location, topic membership ve ad preference bilgisine gore feed olusturur.
3. Ustte pinned bilgi, Altin Bilgi veya admin pick gorunur.
4. Ardindan acik yardim istekleri, solved thread'ler ve yeni structured post'lar listelenir.
5. Reklamlar sadece kullanici reklam gormeyi kabul ettiyse gosterilir.
6. Kullanici topic group'a girerek sadece o konunun akisina bakar.

### Feed Icerik Tipleri

| Tip | Feed Davranisi |
| --- | --- |
| Pinned resource | Ustte sabit veya one cikan |
| Solved thread | Arama ve feed'de yuksek sinyal |
| Help request | Status ile gosterilir |
| Listing | Template alanlariyla ozetlenir |
| Question | Thread olarak acar |
| Ad | Sadece ad preference izin verirse gosterilir |

### Anti-Junk Kurallari

- Genel sohbet ana feed'de yer almamalidir.
- Topic disi post, admin veya moderator tarafindan tasinabilmeli ya da kaldirilabilmelidir.
- Duz metinli ilan, ilgili template'e donusturulmeden yayina alinmamalidir.

## Flow 4: Search ve Duplicate Deflection

### Problem

Urunun WhatsApp, Facebook ve Telegram'a karsi en buyuk farki eski bilgiye erisimdir.

### Happy Path

1. Kullanici arama kutusuna ihtiyacini yazar.
2. Sistem thread, cozum karti, FAQ, media, link, ilan ve yardim isteklerini birlikte arar.
3. Kullanici kategori, lokasyon, topic group, status ve tarih ile filtreler.
4. Sonuclar solved, saved, admin pick veya high engagement sinyallerine gore siralanir.
5. Sonuc yoksa kullaniciya structured post veya yardim istegi acma onerilir.
6. Yeni post yazarken sistem benzer eski icerikleri gosterir.

### Arama Sonuc Tipleri

| Sonuc | Ornek |
| --- | --- |
| Thread | `Ehliyet degisimi nasil yapilir?` |
| Altin Bilgi | `UK'de oda kiralarken dikkat edilecekler` |
| Help request | `Milton Keynes oda ariyorum` |
| Listing | `Satilik bebek arabasi` |
| Provider | `Community-approved muhasebeci` |
| Media/link | Daha once paylasilan video, belge veya link |

### Faz 1 Siniri

Faz 1'de semantik AI arama zorunlu degildir. Ancak keyword search, filtre, solved/pinned one cikarma ve yeni post oncesi benzer icerik gosterimi gereklidir.

## Flow 5: Yardim Istegi

### Problem

Kullanici bazen bilgi degil, sonuc ister. Ornek: `oda ariyorum`, `ev ariyorum`, `is ariyorum`, `muhasebeci ariyorum`.

### Happy Path

1. Kullanici `Create` ekranindan `Yardim Istegi` secer.
2. Sistem yardim tipi sorar.
3. Kullanici template alanlarini doldurur.
4. Sistem benzer aktif istekleri ve ilgili Altin Bilgi'leri gosterir.
5. Kullanici istegi yayinlar.
6. Diger uyeler yorum, teklif, yonlendirme veya kaynak onerisi ekler.
7. Kullanici status'u gunceller: `acik`, `eslesme bulundu`, `cozuldu`, `kapandi`.
8. Cozulmus istek, ileride arama sonucunda faydali kaynak olarak gorunur.

### Oda Ariyorum Template Ornegi

| Alan | Zorunlu mu |
| --- | --- |
| Lokasyon | Yes |
| Butce araligi | Yes |
| Tasima tarihi | Yes |
| Kisa aciklama | Yes |
| Tercihler | No |
| Iletisim tercihi | Yes |

### Cikti

- structured request
- request status
- comments/offers
- solved signal
- future search artifact

## Flow 6: Structured Post ve Listing

### Problem

Serbest metin ilanlar hem aramayi hem filtrelemeyi hem de moderasyonu bozar.

### Happy Path

1. Kullanici post tipi secer: soru, ilan, tavsiye, hizmet, satilik, kiralik, is ariyorum.
2. Sistem ilgili template'i acar.
3. Zorunlu alanlar tamamlanmadan publish edilmez.
4. Hassas topic veya reklam sinyali varsa post approval queue'ya girebilir.
5. Post yayinlandiktan sonra thread detayinda yorum alir.
6. Post sahibi status, fiyat, lokasyon veya uygunluk bilgisini guncelleyebilir.

### Template Kararlari

| Post Tipi | Zorunlu Alan Ornekleri |
| --- | --- |
| Satilik | Fiyat, durum, lokasyon, foto |
| Kiralik | Lokasyon, fiyat, tarih, uygunluk |
| Is Ariyorum | Role, lokasyon, calisma tipi, deneyim |
| Hizmet | Hizmet tipi, lokasyon, fiyat araligi, uygunluk |
| Soru | Topic, lokasyon relevance, baslik |

### Faz 1 Siniri

Payment, escrow, booking, full CRM veya delivery tracking Faz 1'de olmamalidir.

## Flow 7: Altin Bilgi ve Cozum Kartlari

### Problem

En degerli community bilgisi mesaj akisinda kaybolmamalidir.

### Happy Path: Okuma

1. Kullanici Library veya Search uzerinden Altin Bilgi'ye ulasir.
2. Cozum karti adim adim bilgi, checklist, link ve related thread'leri gosterir.
3. Kullanici kaydeder, paylasir veya guncelleme onerir.

### Happy Path: Olusturma

1. Admin veya moderator tekrar eden bir thread'i tespit eder.
2. Thread ozetinden cozum karti taslagi olusturur.
3. Gerekirse kaynak linkleri, medya ve checklist ekler.
4. Admin review sonrasi karti yayinlar.
5. Kart ilgili topic group ve arama sonuclarinda one cikar.

### Cikti

- kalici knowledge artifact
- source thread baglantisi
- owner/editor bilgisi
- last updated tarihi
- helpful/save sinyalleri

## Flow 8: Media ve Link Archive

### Problem

WhatsApp ve Telegram gruplarinda daha once paylasilan link, video, dosya veya gorseli bulmak zordur.

### Happy Path

1. Kullanici topic group icinde `Media & Links` alanini acar.
2. Sistem link, video, gorsel ve dosyalari type, tarih, post ve topic'e gore listeler.
3. Kullanici filtreler ve ilgili orijinal thread'e gider.
4. Admin degerli link veya dosyayi Altin Bilgi'ye baglayabilir.

### Faz 1 Siniri

Faz 1'de medya arsivi temel listeleme ve filtreleme olarak dusunulmelidir. Otomatik OCR, transcript, video summary veya dosya icinden arama Faz 6 konusudur.

## Flow 9: Sikayet, Block ve Group'tan Cikarma

### Problem

Topluluklarda bazen kullanici davranisi bozulur. Adminin bununla basit ve izlenebilir sekilde ilgilenmesi gerekir.

### Happy Path: Sikayet

1. Kullanici post, yorum veya profil uzerinden `Sikayet Et` secer.
2. Sistem sebep sorar: spam, taciz, konu disi, dolandiricilik, uygunsuz icerik, diger.
3. Sikayet admin/moderator queue'ya duser.
4. Sikayet edilen kullanici hakkinda report count ve history gorunur.
5. Moderator aksiyon alir: no action, warn, mute, content remove, group remove, platform escalate.

### Happy Path: Block

1. Kullanici baska bir kullaniciyi block eder.
2. Block edilen kisinin yorumlari ve profil etkilesimi kullanici icin sinirlanir.
3. Block, admin moderation aksiyonundan ayridir.

### Karar Noktalari

| Sinyal | Aksiyon |
| --- | --- |
| Tekil dusuk risk sikayet | Moderator review |
| Tekrarlayan spam | Mute veya group removal |
| Dolandiricilik supheleri | Content remove, group removal, platform escalate |
| Hassas konu zarari | Daha siki review ve disclaimer |

### Cikti

- report record
- moderation decision
- audit trail
- scoped removal veya mute

## Flow 10: Reklam Gorunurluk Tercihi

### Problem

Reklam girmek serbest olabilir; ama kullanici reklam gormek istemiyorsa reklam gormemelidir.

### Happy Path

1. Kullanici onboarding veya settings icinde reklam tercihini gorur.
2. `Reklamlari goster` veya `Reklamlari gizle` secimi yapar.
3. Sistem native ad, sponsored placement ve ileride ad network katmaninda bu tercihe uyar.
4. Kullanici istedigi zaman tercihi degistirir.

### Karar

Reklam tercihi sadece UI tercihi degil, feed ranking ve delivery seviyesinde uygulanmalidir.

### Cikti

- ad visibility preference
- delivery eligibility signal
- consent/change history

## Flow 11: Reklam Olusturma ve Temel Onay

### Problem

Provider ve lokal isletmeler community'ye ulasmak ister. Ancak denetimsiz reklam toplulugu sogutur.

### Happy Path

1. Kullanici `Reklam Ver` akisina girer.
2. Reklam tipi secer: hizmet, isletme, etkinlik, duyuru, urun.
3. Baslik, aciklama, lokasyon, hedef topic, gorsel ve tarih araligi girer.
4. Sistem reklam preview'i gosterir.
5. Reklam `pending review` durumuna gecer.
6. Admin veya platform onayi sonrasi reklam aktif olur.
7. Reklam sadece reklam gormeyi kabul eden ve hedef lokasyon/topic'e uyan kullanicilara gosterilir.
8. Reklam veren temel performans sinyallerini gorur.

### Temel Raporlama Sinyalleri

| Sinyal | Faz 1 / Faz 2 Yorumu |
| --- | --- |
| Impression | Faz 1'de basit sayac olabilir |
| Click | Faz 1'de basit sayac olabilir |
| Save | Fayda sinyali olarak guclu |
| Helpful/like | Reklamin topluluk tarafindan nasil algilandigini gosterir |
| Report/hide | Kalite ve policy sinyali |

### Faz 1 Siniri

Billing, campaign budget, advanced targeting ve detayli ROI dashboard Faz 5'e kalmalidir. Ancak reklam verenin `reklamim yayinlandi mi, goruldu mu, tiklandi mi` sorusuna erken cevap verilebilmelidir.

## Flow 12: Admin Migration ve Community Setup

### Problem

Mevcut WhatsApp, Facebook veya Telegram admini yeni platforma gecmek icin kontrol, kolaylik ve guven ister.

### Happy Path

1. Platform admin veya community admin ana community taslagini acar.
2. Lokasyon ve topic group yapisi belirlenir.
3. Kurallar ve post tipleri tanimlanir.
4. Ilk Altin Bilgi, FAQ ve seed thread'ler eklenir.
5. Invite link ve QR kod hazirlanir.
6. Admin mevcut grupta preview linkleri ve invite linki paylasir.
7. Ilk uyeler gelir, onboarding olur ve pilot baslar.

### Minimum Setup Checklist

| Alan | Gereklilik |
| --- | --- |
| Community name | Zorunlu |
| Location scope | Zorunlu |
| Topic groups | En az 3-5 baslangic grubu |
| Rules | Zorunlu |
| Seed content | En az temel FAQ ve cozum kartlari |
| Admin roles | En az community admin |
| Invite link | Zorunlu |

## Flow 13: Approval Queue

### Problem

Join request, reklam, kaynak yayinlama ve hassas post onaylari farkli yerlerde olursa admin operasyonu dagilir.

### Happy Path

1. Admin `Approval Queue` ekranini acar.
2. Queue item tiplerini gorur: join request, ad review, resource publish, sensitive post, group request.
3. Item detayinda context, risk sinyalleri ve onerilen aksiyonlari gorur.
4. Admin approve, reject, request edit veya escalate karari verir.
5. Sistem kullaniciya sonucu bildirir.

### Cikti

- approval decision
- audit trail
- notification
- published/rejected/pending status

## Flow 14: Account ve Data Rights

### Problem

Pilot bile olsa kullanici hesap, gizlilik ve veri haklari konusunda guven duymalidir.

### Happy Path

1. Kullanici settings icinde account alanina girer.
2. Hesap silme veya data request aksiyonunu gorur.
3. Faz 1'de data request manuel veya yari manuel surecle islenebilir.
4. Hesap silme talebi onay adimindan sonra isleme alinir.

### Faz 1 Siniri

Tam self-service export ve gelismis veri yonetimi Faz 4'e kalabilir. Ancak talep yolu ve destek sureci Faz 1'de net olmalidir.

## Faz 1 Disinda Kalmasi Gerekenler

- tam chat veya DM
- payment, escrow, booking ve delivery
- full rating/review sistemi
- advanced AI assistant
- advanced event management
- full ad billing ve campaign optimization
- public API
- cok detayli verification
- kullanicilarin serbest ana community acmasi

## Tasarimdan Teknik Modele Donusecek Ana Nesneler

| Product Nesnesi | Teknik Model Adayi |
| --- | --- |
| Community | community |
| Location community | community node / location scope |
| Topic group | group / channel |
| Membership | membership |
| Role assignment | role binding |
| Structured post | post + post type + template values |
| Yardim istegi | request |
| Comment | comment |
| Altin Bilgi | resource / knowledge card |
| Media/link archive item | attachment / link artifact |
| Report | report |
| Moderation decision | moderation action |
| Ad preference | user preference |
| Advertisement | ad campaign / ad creative |
| Approval item | approval task |
| Invite link | invite |
