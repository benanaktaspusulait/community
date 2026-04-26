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
11. Chat katmani varsa bile community memory'i bozmamali; degerli sohbetler thread, FAQ veya kaynak yapisina donusturulebilmelidir.
12. Ad network gelir modeli olabilir; ancak bu katman native community reklaminin yerine degil, kontrollu ek gelir ve fill kaynagi olarak ele alinmalidir.
13. Icerik stratejisi `once deger, sonra akis` mantigiyla kurulmalidir; bos sohbet veya dusuk sinyalli paylasim ana feed'i doldurmamalidir.
14. Pilot asamada icerik modeli `curated-first, organic-second` olmalidir; admin, moderator ve migration concierge ilk faydali kutuphaneyi olusturmadan platform tamamen organik akisa birakilmamalidir.
15. En cok tekrar eden ihtiyaclar serbest metin degil, template ve `cozum karti` mantigiyla toplanmalidir.

## Icerik Stratejisi ve Anti-Junk Kurallari

Bu urun bilgi hafizasini koruyacaksa, icerik stratejisi de bastan buna gore kurgulanmalidir.

Temel kurallar:

- `Altin Bilgi Kutuphanesi`: En cok sorulan, en cok kaydedilen ve en cok referans verilen bilgiler Wiki / FAQ mantigiyla sabitlenmelidir.
- `Structured templates`: Ilan, yardim istegi ve benzeri yuksek niyetli icerikler zorunlu alanlarla acilmalidir; serbest metin tek basina yeterli olmamalidir.
- `Cozum kartlari`: Sadece soru-cevap degil, adim adim checklist veya net cozum formatina donebilen icerikler one cikarilmalidir.
- `Curated-first baslangic`: Ilk pilotlarda icerigin omurgasi admin, moderator ve migration concierge tarafindan kurulmali; organik akis bunun ustune eklenmelidir.
- `No general chat feed`: Ana deneyim `merhaba, nasilsiniz` akisina donmemeli; sohbet sadece sinirli odalarda ve kontrollu sekilde kalmalidir.
- `Duplicate deflection`: Ayni soru tekrar sorulmadan once sistem kullaniciyi mevcut thread, FAQ veya rehbere yonlendirmelidir.
- `Ads in their lane`: Reklam serbest olabilir; ama reklam sadece sponsorlu akis, reklam yerlestirmesi veya reklam kategorisinde gorunmeli, normal topluluk icerigi gibi davranmamalidir.
- `See first, then join`: Kullanici kaydolmadan once platformda gercekten faydali bilgi oldugunu gorebilmelidir.

Fazlar arasindaki sira kullanici geri bildirimiyle esnetilebilir; ama bu kurallar degismemelidir.

## Faz Ozeti

| Faz | Ana amac | Cikis sonucu |
| --- | --- | --- |
| Faz 1 | 1-3 mevcut WhatsApp, Facebook veya Telegram grubunu tasiyabilecek pilot urun | Aranabilir, thread bazli (asenkron), template destekli, `Altin Bilgi Kutuphanesi` olan community platformu |
| Faz 2 | Kullanicinin platforma duzenli olarak geri gelmesini saglamak ve ilk guven sinyallerini kurmak | Saved search, keyword alerts, matching, `community-approved` rehberler ve hafif validation ile retention motoru |
| Faz 3 | Admin operasyonunu olgunlastirmak, kurasyonu sistemlestirmek ve erken AI ozetleme getirmek | Rol delegasyonu, approval engine, admin dashboard, admin picks, weekly ozetler, quick rooms ve AI destekli duplicate / summary katmani |
| Faz 4 | Toplulukta kimlerin guvenilir oldugunu derinlestirmek ve sosyal kanit uretmek | Verified profiles, provider sayfalar, rating/review sistemi, reputation, event-lite ve referans community kanitlari |
| Faz 5 | Surdurulebilir gelir modeli kurmak | Advertiser araclari, billing, commercial paketler, DM/live mode ve ad network |
| Faz 6 | Birden fazla ulke ve community tipine acilmak | Global topluluk platformu, AI/intelligence katman ve locale destegi |

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

- Faz 1'de once `tasinma sebebi` cozulur: bilgi kaybi, arama, yapilandirilmis ilan / request akisi ve `Altin Bilgi Kutuphanesi`. Chat sadece thread/comment bazli asenkron yapidadir.
- Faz 2'de `geri gelme sebebi` cozulur: saved search, keyword alerts, kisisel feed ve yardim istegi matching ile duzenli kullanim aliskanligi kurulur; ayni fazda temel trust/validation sinyalleri de erken cekilir.
- Faz 3'te `admin operasyonu + kurasyon` cozulur: rol delegasyonu, approval engine, admin dashboard, admin picks ve AI destekli ozetleme ile bilgi yigin degil, duzenli kutuphane gibi kalir.
- Faz 4'te `gelismis guven + sosyal kanit` cozulur: verified profiller, provider sayfalar, rating/review, event-lite ve referans community kanitlariyla topluluk icinde kim guvenilir ve platform ne kadar ise yariyor sorulari derinlestirilir.
- Faz 5'te `gelir` cozulur: advertiser araclari, billing, commercial paketler ve opsiyonel DM/live mode ile surdurulebilir ticari model kurulur.
- Faz 6'da `olcek ve farklilasma` cozulur: farkli ulkeler, farkli etnik veya ilgi topluluklari ve gelismis AI destekleri ile global platform haline gelinir.

## Faz Gecis Kapilari

Fazlar takvimle degil, kanitla gecilmelidir. Bir fazin tamamlanmis sayilmasi icin minimum karar kapilari:

- `Faz 1 -> Faz 2`: en az 1-3 pilot topluluk aktif kullanilmali; arama, structured request, Altin Bilgi Kutuphanesi ve temel moderasyon calisir olmali.
- `Faz 2 -> Faz 3`: kullanicilar saved search, alert veya request update ile geri donuyor olmali; temel trust sinyalleri ve dogrulanmis rehberler gercek kullanim almali.
- `Faz 3 -> Faz 4`: admin operasyonu tek kisiye bagimli olmaktan cikmali; approval queue, role delegation, admin picks ve erken AI ozetleme admin is yukunu olculebilir azaltmali.
- `Faz 4 -> Faz 5`: provider / business sayfalari, review ve reputation sinyalleri yeterli hacme ulasmali; advertiser icin guven ve ROI hikayesi kurulabilmeli.
- `Faz 5 -> Faz 6`: en az bir community modelinde retention ve gelir tekrarlanabilir olmali; yeni community kurma playbook'u tekrar kullanilabilir hale gelmeli.

Bu kapilar net degilse sonraki faza gecmek yerine mevcut fazdaki adoption, kalite veya operasyon problemi cozulmelidir.

## Iletisim Katmani Evrimi

Urunun iletisim mimarisi bir anda tam chat'e donmemelidir. Onerilen evrim su sekilde:

- `Faz 1`: thread, comment, reply ve mention bazli asenkron iletisim
- `Faz 2`: asenkron yapiyi guclendirir; chat katmani yok
- `Faz 3`: topic group icinde admin kontrollu `Quick Rooms` ve kisa sureli canli akis
- `Faz 4`: asenkron; guven ve sosyal kanit katmani kurulur
- `Faz 5`: opsiyonel DM, provider-musteri iletisimi ve ihtiyaca gore `Group Live Mode`
- `Faz 6`: farkli community tiplerine gore ayarlanabilen daha esnek iletisim policy'leri

Ana ilke degismez:

`Kalici bilgi thread'de yasar, chat ise koordinasyon ve hiz icin kullanilir.`

## Gecisi Hakli Cikaran Katmanlar

Bu urun sadece daha duzenli oldugu icin kazanmaz. WhatsApp, Facebook Groups ve Telegram'dan kullanici cekmesi icin su katmanlar gercekten hissedilmelidir:

- `Arama + solved + pinned bilgi`: eski bilgi gercekten bulunabilmeli
- `Altin Bilgi Kutuphanesi`: toplulugun en cok sordugu sorular daimi FAQ / Wiki mantigiyla yasamali
- `Saved search + keyword alerts`: kullanici ihtiyacini sistem takip etmeli
- `Admin tools + sub-admin delegation`: toplulugu yonetmek ciddi sekilde kolaylasmali
- `Admin automation`: Duplicate tespiti, auto-FAQ ve thread ozetleme ile moderasyon yukunun azalmasi; ilk AI yardimi Faz 3'te baslamali, gelismis semantik katman Faz 6'ya kalmalidir
- `Admin picks ve kurasyon`: toplulugun en faydali icerikleri duzenli olarak one cikarilmali
- `Migration bridge`: preview kartlari ve paylasilabilir thread ozetleri ile gecis kolaylasmali
- `Hybrid communication`: gerekiyorsa canli konusma olmali ama bu konusmalar bilgi hafizasini yok etmemeli
- `Structured requests`: insanlar post degil sonuc acmali; `oda ariyorum`, `ev ariyorum`, `eleman ariyorum`, `muhasebeci ariyorum` gibi
- `Structured listings`: `Satilik`, `Kiralik`, `Is Ariyorum` gibi ilanlarda fiyat, lokasyon, durum ve benzeri zorunlu alanlar olmali
- `Cozum kartlari`: sik tekrarlanan konular duz mesaj yerine checklist / rehber / cozum kartina donusturulebilmeli
- `Location relevance`: kullaniciya alakasiz sehir veya hizmet alanindaki icerikler gosterilmemeli
- `Outcome state`: ilan, soru veya yardim istegi `acik`, `cozuldu`, `eslesti`, `kapandi` gibi durumlar tasimeli
- `Approval engine`: join request, group request, resource publish ve hassas akislar tek mantikla yonetilebilmeli
- `Guvenli paylasim`: hassas konular icin daha guvenli bir alan hissi olmali
- `Lightweight trust early`: verified user, approved rehber veya faydali uye sinyalleri cok gec kalmamali
- `Join approval + giris sorulari`: private community'lerde adminin uye kabulunu kontrol etmesi kolay olmali
- `Kaynak kutuphanesi`: dosya, form, checklist ve sabit rehberler tek yerde durmali
- `Link ve medya arsivi`: daha once paylasilan link, video ve gorsellere mesaj akisini kazimadan dogrudan erisim olmali
- `Hafif anketler ve karar akislari`: topluluk kararlari veya hizli yoklamalar grup sohbetine dagilmamali
- `Web-first discovery`: login oncesi preview, paylasilabilir public thread ve indexlenebilir faydali sayfalar ile disaridan deger gosterilmeli
- `Layered monetization`: native advertiser, provider paketleri ve ileride ad network fill birlikte ama kontrollu calisabilmeli

## Ana Kullanim Senaryolari

Bu urun ilk gunden su davranislari desteklemelidir:

- Bir kullanici davetiye linki, public preview veya join request ile community'ye katilir.
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
- Bir kullanici `Reklam Ver` akisindan reklam olusturur; reklam basit onaydan sonra yayina girer.
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
- cozum karti ve rehber olusturulma ve tekrar kullanilma orani
- Altin Bilgi Kutuphanesi'ndeki icerik sayisi ve kullanim sikligi
- admin pick veya kurasyon yapilan icerik orani
- arsivlenen vs aktif kalan icerik dengesi
- hesap silme talep orani (saglik sinyali olarak)

## Dokuman Yapisi

- [Faz 1 - Pilot Migration](phase-1-pilot-migration.md)
- [Faz 2 - Retention, Validation ve Erken Guven](phase-2-retention-and-engagement.md)
- [Faz 3 - Admin Olgunlugu, Kurasyon ve Erken AI](phase-3-admin-maturity-and-ops.md)
- [Faz 4 - Gelismis Guven ve Sosyal Kanit](phase-4-trust.md)
- [Faz 5 - Monetization & Ticari Model](phase-5-monetization-and-commercial.md)
- [Faz 6 - Expansion & Intelligence](phase-6-expansion-and-intelligence.md)

## Kararlastirilan Ilk Kararlar

Su noktalar icin bu roadmap artik net yon onermektedir:

- `Community founder` erken fazda ayri rol olmamali; Faz 1'de community admin ile ayni rolde ele alinmali
- `Sub-admin` Faz 1'de yeni group acmamalidir; sadece request gonderebilmeli, scoped create yetkisi Faz 3'te kontrollu acilabilmelidir
- `Moderator` kendi kapsaminda varsayilan olarak mute uygulayabilmeli; remove ise community policy veya esik bazli yetki ile calismalidir
- `Community admin` kendi toplulugundaki reklam uygunlugu, yerlesimi ve yerel kurallara mudahil olabilmeli; fiyatlama, billing ve platform geneli reklam kurallari merkezi kalmalidir
- ilk productized commercial package `Provider / Advertiser Starter` olmalidir; `Admin Pro` ikinci adimda gelmelidir
- ilk migration motion self-serve degil, `concierge-led` baslamalidir; daha sonra Faz 3 ile hibrit self-serve modele donmelidir
- reklam capability'si Faz 1'de dogrulanmali, ama billing ve gercek ticari paketleme Faz 5'te olgunlasmalidir

## Kisa Sonuc

Bu urun basarili olacaksa ilk sorusu su olmali:

`Insanlar neden yeni bir community icin tekrar WhatsApp, Facebook grubu veya Telegram grubu acmak yerine burayi kullansin?`

Bu roadmap'in her fazi bu soruya daha guclu bir cevap vermek icin tasarlandi.
