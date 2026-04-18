# Community Platform Roadmap

Bu roadmap'in amaci, mevcutta cok sayida olan WhatsApp, Facebook Groups ve Telegram community gruplarinin yerini alabilecek bir urunun adim adim nasil kurulacagini netlestirmektir.

Bu urun klasik bir chat-first uygulama degil. Ana vaadi su:

- community bilgisini kaybetmeden saklamak
- yeni gelen kullanicinin eski bilgiye hizli ulasmasini saglamak
- konu bazli gruplari ve grup kurallarini korumak
- ilan, tavsiye ve sorulari organize etmek
- yardim ve ihtiyac taleplerini yapili sekilde toplamak
- reklam gostermeyi kullanici kontrolune birakmak

## Urun Prensipleri

Bu plan boyunca degismemesi gereken ana kararlar:

1. `Chat-first` degil, `community memory + structured actions` urunu olmali. Ancak toplulugun canli kalmasi icin fazlar ilerledikce kontrollu bir chat katmani eklenmelidir.
2. Tek feed yerine `community > location > topic group` hiyerarsisi olmali.
3. Her topic group kendi konusu icinde kalmali; konu disi paylasim moderasyonla yonetilmeli.
4. Reklam serbest olmali, ancak reklam gosterimi tamamen kullanici tercihine bagli olmali.
5. Normal post ile sponsorlu reklam ayni veri modeli ve ayni gorunurluk mantigi ile calismamali.
6. Ana community acma yetkisi kontrollu olmali; alt yapilar ise yetki devri ile yonetilebilmelidir.
7. Ilk giris use-case'i net olmali: is, ev, hizmet ve yardim istekleri urunun ilk wedge'i olarak ele alinmali.
8. Ilk gelir modeli son kullanicidan degil; advertiser, provider ve operasyon yukunu azaltmak isteyen community admin tarafindan gelmelidir.
9. Lokasyon urunun cekirdek sinyali olmali; ama kullanici, post ve reklam ayni lokasyon mantigi ile modellenmemelidir.
10. Lokasyon verisi varsayilan olarak hassas olmamali; sehir, bolge veya postcode district seviyesinde tutulup gorunurlugu kullanici tarafindan kontrol edilebilmelidir.

## Faz Ozeti

| Faz | Ana amac | Cikis sonucu |
| --- | --- | --- |
| Faz 1 | 1-3 mevcut WhatsApp, Facebook veya Telegram grubunu tasiyabilecek pilot urun | Aranabilir, thread bazli (asenkron), davetiye ile girilen community platformu |
| Faz 2 | Gunluk kullanim ve admin operasyonlarini guclendirmek | Toplulugun ana akis platformu ve hafif canli etkilesim (quick rooms) |
| Faz 3 | Guven ve gelir modelini urune yerlestirmek | Verified profiles, reviews, monetization ve opsiyonel DM / group live mode |
| Faz 4 | Birden fazla ulke ve community tipine acilmak | Global topluluk platformu ve intelligence layer |

## Ilk Giris Stratejisi

Bu urun ilk gunden her seyi cozen generic bir community app gibi konumlanmamali.

Ilk wedge su olmalidir:

- tekrar eden pratik ihtiyaclar: `oda ariyorum`, `ev ariyorum`, `is ariyorum`, `muhasebeci ariyorum`
- grup adminlerinin en cok yoruldugu operasyonlar: duzen, onay, moderasyon, tekrar sorular
- advertiser ve service provider'larin olculebilir fayda gorecegi yerel demand alanlari

Bu nedenle ilk giris noktasi:

- genel sohbet degil
- buyuk sosyal feed degil
- `structured requests + searchable community memory + admin control`

olmali.

## Ilk ICP ve Buyer'lar

Ilk donemde urunun ayni anda herkese satilmaya calismasi risklidir. En net hedef segmentler:

- `Community admin`: mevcut WhatsApp, Facebook Group veya Telegram yapisini tasimak isteyen yonetici
- `Power user`: surekli soru cevaplayan veya tavsiye veren aktif uye
- `Need-driven member`: is, ev, hizmet veya yardim arayan uye
- `Provider / advertiser`: topluluga kontrollu sekilde ulasmak isteyen hizmet veren veya isletme

Ilk para kazanma acisindan en olasi buyer'lar:

- advertiser veya provider paketleri
- buyuk community admin'leri icin pro tooling
- migration veya setup destegi isteyen topluluklar

## Ilk Pilot Secimi

Ilk launch market'i fazla genis tutulmamalidir. En mantikli ilk pilot:

- `Community tipi`: UK Turks
- `Yapi`: tek bir yogun sehir veya sehir kumesi etrafinda baslayan topluluk
- `Hero flow`: `oda ariyorum / ev ariyorum`
- `Destekleyici flow`: `provider veya tavsiye ariyorum`

Bu secim sunu dengeler:

- yuksek tekrar eden ihtiyac
- hizli `aha moment`
- topluluk hafizasi icin net fayda
- advertiser veya provider tarafina uzanabilecek ilk ticari zemin

## Aha Moment

Bu urunun ilk dakikadaki degeri cok net hissedilmelidir.

Beklenen `aha moment` senaryolari:

- yeni kullanici eski bir cevabi arayip 1 dakika icinde bulur
- kullanici `Yardim Istegi` acip dogru ilan, provider veya eski thread ile eslesir
- admin ayni sorunun tekrarini azaltan thread, FAQ ve onay akislarini tek yerde gorur

Kisaca:

`Burada bilgi kaybolmuyor, ihtiyacim daha hizli cozuluyor ve admin olmak daha kolay.`

## Fazlar Arasi Gecis Mantigi

Roadmap'te sira bilerek bu sekilde:

- Faz 1'de once `tasinma sebebi` cozulur: bilgi kaybi, arama, grup duzeni. Chat sadece thread/comment bazli asenkron yapidadir.
- Faz 2'de `geri gelme sebebi` cozulur: aktif kullanim, admin kolayligi, hafif live chat (quick rooms) ve kisa sureli etkilesim.
- Faz 3'te `guven ve gelir` cozulur: verified business, reviews, reklam arayuzu, monetization ve opsiyonel birebir (DM) veya grup bazli canli modlar.
- Faz 4'te `olcek ve farklilasma` cozulur: farkli ulkeler, farkli etnik veya ilgi topluluklari, AI destekleri.

## Gecisi Hakli Cikaran Katmanlar

Bu urun sadece daha duzenli oldugu icin kazanmaz. WhatsApp, Facebook Groups ve Telegram'dan kullanici cekmesi icin su katmanlar gercekten hissedilmelidir:

- `Arama + solved + pinned bilgi`: eski bilgi gercekten bulunabilmeli
- `Saved search + keyword alerts`: kullanici ihtiyacini sistem takip etmeli
- `Admin tools + sub-admin delegation`: toplulugu yonetmek ciddi sekilde kolaylasmali
- `Admin AI & Automation`: Duplicate tespiti, auto-FAQ ve thread ozetleme ile moderasyon yukunun azalmasi
- `Migration bridge`: preview kartlari ve paylasilabilir thread ozetleri ile gecis kolaylasmali
- `Structured requests`: insanlar post degil sonuc acmali; `oda ariyorum`, `ev ariyorum`, `eleman ariyorum`, `muhasebeci ariyorum` gibi
- `Location relevance`: kullaniciya alakasiz sehir veya hizmet alanindaki icerikler gosterilmemeli
- `Outcome state`: ilan, soru veya yardim istegi `acik`, `cozuldu`, `eslesti`, `kapandi` gibi durumlar tasimeli
- `Approval engine`: join request, group request, resource publish ve hassas akislar tek mantikla yonetilebilmeli
- `Guvenli paylasim`: hassas konular icin daha guvenli bir alan hissi olmali
- `Join approval + giris sorulari`: private community'lerde adminin uye kabulunu kontrol etmesi kolay olmali
- `Kaynak kutuphanesi`: dosya, form, checklist ve sabit rehberler tek yerde durmali
- `Link ve medya arsivi`: daha once paylasilan link, video ve gorsellere mesaj akisini kazimadan dogrudan erisim olmali
- `Hafif anketler ve karar akislari`: topluluk kararlari veya hizli yoklamalar grup sohbetine dagilmamali
- `Web-first discovery`: login oncesi preview, paylasilabilir public thread ve indexlenebilir faydali sayfalar ile disaridan deger gosterilmeli

## Ana Kullanim Senaryolari

Bu urun ilk gunden su davranislari desteklemelidir:

- Bir kullanici davetiye linki ile community'ye katilir.
- Kendi lokasyonunu secip gorunurluk seviyesini belirler, sonra ilgilendigi konu gruplarina girer.
- Eski sorulari arayarak bulur.
- Daha once paylasilmis link, video veya gorsellere dogrudan gider.
- Gerekirse `Yardim Istegi` acarak ihtiyacini net formatta topluluga iletir.
- Gerekirse yardim isteginin durumunu `acik`, `eslesme bulundu` veya `kapandi` olarak takip eder.
- Gerekirse yeni bir soru veya ilan acar.
- Bir admin group kurallarini uygular ve pinned bilgileri yonetir.
- Bir admin join request, group talebi veya kaynak yayina alma gibi onaylari tek kuyruktan yonetir.
- Bir ana community admini, kendi alt lokasyon veya topic alanlari icin sub-admin atayabilir.
- Bir kullanici uygunsuz bir uyeyi `Sikayet Et` butonu ile raporlar.
- Bir admin, biriken sikayetlere bakip ilgili kullaniciyi group'tan cikarir.
- Bir kullanici `Reklam Ver` akisindan reklam olusturur.
- Reklam gormek istemeyen kullanici ayarlardan bunu tamamen kapatir.

## Basari Kriterleri

Roadmap boyunca takip edilmesi gereken cekirdek metrikler:

- haftalik aktif community sayisi
- grup bazli haftalik post sayisi
- soru basina cevaplanma orani
- ayni sorunun tekrar edilme orani
- arama yapan kullanicinin soru acmadan cikis orani
- davetiye ile gelen kullanicilarin 7 gun elde tutulma orani
- kullanici sikayetlerinin sonuclanma suresi
- group'tan cikarilan problemli uye orani
- reklam gormeye acik kullanici orani
- reklam tiklanma ve gizlenme orani
- reklam bazli pozitif aksiyon orani
- advertiser tekrar kampanya acma orani
- ilk oturumda arama veya request acma orani
- admin basina tekrar eden soru azalmasi
- yardim isteklerinin sonuca donme orani
- migration yapilan community'lerde 30 gunluk aktiflik
- community admin veya advertiser icin olculebilir ROI hikayesi olusma orani

## Dokuman Yapisi

- [Faz 1 - Pilot Migration](/Users/benanaktas/project/community/docs/roadmap/phase-1-pilot-migration.md)
- [Faz 2 - Daily Usage and Admin Operations](/Users/benanaktas/project/community/docs/roadmap/phase-2-daily-usage-and-ops.md)
- [Faz 3 - Trust and Monetization](/Users/benanaktas/project/community/docs/roadmap/phase-3-trust-and-monetization.md)
- [Faz 4 - Expansion and Intelligence](/Users/benanaktas/project/community/docs/roadmap/phase-4-expansion-and-intelligence.md)

Cross-cutting konular artik ayri destek dosyalari yerine Faz 1-3 dokumanlarinin icine dagitildi.

## Kararlastirilan Ilk Kararlar

Su noktalar icin bu roadmap artik net yon onermektedir:

- `Community founder` erken fazda ayri rol olmamali; Faz 1-2'de community admin ile ayni rolde ele alinmali
- `Sub-admin` Faz 1'de yeni group acmamalidir; sadece request gonderebilmeli, scoped create yetkisi Faz 2'de kontrollu acilabilmelidir
- `Moderator` kendi kapsaminda varsayilan olarak mute uygulayabilmeli; remove ise community policy veya esik bazli yetki ile calismalidir
- `Community admin` kendi toplulugundaki reklam uygunlugu, yerlesimi ve yerel kurallara mudahil olabilmeli; fiyatlama, billing ve platform geneli reklam kurallari merkezi kalmalidir
- ilk productized commercial package `Provider / Advertiser Starter` olmalidir; `Admin Pro` ikinci adimda gelmelidir
- ilk migration motion self-serve degil, `concierge-led` baslamalidir; daha sonra Faz 2 ile hibrit self-serve modele donmelidir

## Kisa Sonuc

Bu urun basarili olacaksa ilk sorusu su olmali:

`Insanlar neden yeni bir community icin tekrar WhatsApp, Facebook grubu veya Telegram grubu acmak yerine burayi kullansin?`

Bu roadmap'in her fazi bu soruya daha guclu bir cevap vermek icin tasarlandi.
