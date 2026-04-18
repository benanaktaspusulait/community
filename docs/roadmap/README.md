# Community Platform Roadmap

Bu roadmap'in amaci, mevcutta cok sayida olan WhatsApp, Facebook Groups ve Telegram community gruplarinin yerini alabilecek bir urunun adim adim nasil kurulacagini netlestirmektir.

Bu urun klasik bir chat app degil. Ana vaadi su:

- community bilgisini kaybetmeden saklamak
- yeni gelen kullanicinin eski bilgiye hizli ulasmasini saglamak
- konu bazli gruplari ve grup kurallarini korumak
- ilan, tavsiye ve sorulari organize etmek
- yardim ve ihtiyac taleplerini yapili sekilde toplamak
- reklam gostermeyi kullanici kontrolune birakmak

## Urun Prensipleri

Bu plan boyunca degismemesi gereken ana kararlar:

1. `Chat-first` degil, `community memory + structured actions` urunu olmali.
2. Tek feed yerine `community > location > topic group` hiyerarsisi olmali.
3. Her topic group kendi konusu icinde kalmali; konu disi paylasim moderasyonla yonetilmeli.
4. Reklam serbest olmali, ancak reklam gosterimi tamamen kullanici tercihine bagli olmali.
5. Normal post ile sponsorlu reklam ayni veri modeli ve ayni gorunurluk mantigi ile calismamali.
6. Ana community acma yetkisi kontrollu olmali; alt yapilar ise yetki devri ile yonetilebilmelidir.

## Faz Ozeti

| Faz | Ana amac | Cikis sonucu |
| --- | --- | --- |
| Faz 1 | 1-3 mevcut WhatsApp, Facebook veya Telegram grubunu tasiyabilecek pilot urun | Aranabilir, thread bazli, davetiye ile girilen community platformu |
| Faz 2 | Gunluk kullanim ve admin operasyonlarini guclendirmek | Toplulugun ana akis platformu olmak |
| Faz 3 | Guven ve gelir modelini urune yerlestirmek | Verified profiles, reviews, advertisers ve premium araclari |
| Faz 4 | Birden fazla ulke ve community tipine acilmak | Global topluluk platformu ve intelligence layer |

## Fazlar Arasi Gecis Mantigi

Roadmap'te sira bilerek bu sekilde:

- Faz 1'de once `tasinma sebebi` cozulur: bilgi kaybi, arama, grup duzeni.
- Faz 2'de `geri gelme sebebi` cozulur: aktif kullanim, admin kolayligi, tekrar gelen akis.
- Faz 3'te `guven ve gelir` cozulur: verified business, reviews, reklam arayuzu, monetization.
- Faz 4'te `olcek ve farklilasma` cozulur: farkli ulkeler, farkli etnik veya ilgi topluluklari, AI destekleri.

## Gecisi Hakli Cikaran Katmanlar

Bu urun sadece daha duzenli oldugu icin kazanmaz. WhatsApp, Facebook Groups ve Telegram'dan kullanici cekmesi icin su katmanlar gercekten hissedilmelidir:

- `Arama + solved + pinned bilgi`: eski bilgi gercekten bulunabilmeli
- `Saved search + keyword alerts`: kullanici ihtiyacini sistem takip etmeli
- `Admin tools + sub-admin delegation`: toplulugu yonetmek ciddi sekilde kolaylasmali
- `Migration bridge`: preview kartlari ve paylasilabilir thread ozetleri ile gecis kolaylasmali
- `Structured requests`: insanlar post degil sonuc acmali; `oda ariyorum`, `ev ariyorum`, `eleman ariyorum`, `muhasebeci ariyorum` gibi
- `Guvenli paylasim`: hassas konular icin daha guvenli bir alan hissi olmali
- `Join approval + giris sorulari`: private community'lerde adminin uye kabulunu kontrol etmesi kolay olmali
- `Kaynak kutuphanesi`: dosya, form, checklist ve sabit rehberler tek yerde durmali
- `Link ve medya arsivi`: daha once paylasilan link, video ve gorsellere mesaj akisini kazimadan dogrudan erisim olmali
- `Hafif anketler ve karar akislari`: topluluk kararlari veya hizli yoklamalar grup sohbetine dagilmamali

## Ana Kullanim Senaryolari

Bu urun ilk gunden su davranislari desteklemelidir:

- Bir kullanici davetiye linki ile community'ye katilir.
- Kendi lokasyonuna ve ilgilendigi konu gruplarina girer.
- Eski sorulari arayarak bulur.
- Daha once paylasilmis link, video veya gorsellere dogrudan gider.
- Gerekirse `Yardim Istegi` acarak ihtiyacini net formatta topluluga iletir.
- Gerekirse yeni bir soru veya ilan acar.
- Bir admin group kurallarini uygular ve pinned bilgileri yonetir.
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

## Dokuman Yapisi

- [Faz 1 - Pilot Migration](/Users/benanaktas/project/community/docs/roadmap/phase-1-pilot-migration.md)
- [Faz 2 - Daily Usage and Admin Operations](/Users/benanaktas/project/community/docs/roadmap/phase-2-daily-usage-and-ops.md)
- [Faz 3 - Trust and Monetization](/Users/benanaktas/project/community/docs/roadmap/phase-3-trust-and-monetization.md)
- [Faz 4 - Expansion and Intelligence](/Users/benanaktas/project/community/docs/roadmap/phase-4-expansion-and-intelligence.md)

Cross-cutting konular artik ayri destek dosyalari yerine Faz 1-3 dokumanlarinin icine dagitildi.

## Acik Kararlar

Ileride netlestirilmesi gereken ama simdiden takip edilmesi faydali konular:

- `community founder` ayri bir rol mu olacak, yoksa community admin ile ayni mi kalacak
- sub-admin yeni group acabilecek mi, yoksa sadece request mi gonderecek
- moderator mute ve remove yetkileri hangi community tiplerinde varsayilan acik olacak
- community admin advertiser kurallarina ne kadar mudahil olabilecek

## Kisa Sonuc

Bu urun basarili olacaksa ilk sorusu su olmali:

`Insanlar neden yeni bir community icin tekrar WhatsApp, Facebook grubu veya Telegram grubu acmak yerine burayi kullansin?`

Bu roadmap'in her fazi bu soruya daha guclu bir cevap vermek icin tasarlandi.
