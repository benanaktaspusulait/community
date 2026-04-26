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
- hizli sonuc arayan `yardim istegi` kullanicilari

## Ilk Pilot Community ve Hero Use-case

Faz 1 icin onerilen ilk pilot:

- `Community tipi`: UK Turks
- `Scope`: tek bir yogun lokasyon veya sehir kumesi
- `Hero request`: `oda ariyorum / ev ariyorum`
- `Supporting request`: `provider veya tavsiye ariyorum`

Buradaki urun mantigi sunlardir:

- ev ve oda talepleri cok tekrar eder
- yeni gelen kullanici icin hizli deger yaratir
- topluluk hafizasi burada hemen ise yarar
- provider arayisi ise daha sonra advertiser paketine baglanabilecek ticari sinyal uretir

## Ilk Wedge ve PM Odagi

Faz 1'de urun tum community davranislarini ayni anda kazanmaya calismamalidir.

Ilk giris use-case'i net olmalidir:

- `oda ariyorum`
- `ev ariyorum`
- `is ariyorum`
- `provider veya tavsiye ariyorum`

Bu use-case'ler secilmelidir cunku:

- tekrar frekanslari yuksektir
- insanlar mevcut gruplarda bunlari surekli tekrar sorar
- topluluk hafizasi ve arama burada hemen deger uretir
- advertiser ve provider tarafi icin ileride ticari zemin hazirlar

Bu nedenle Faz 1'in ana urun tezi:

`Bir community'de en sik tekrar eden ihtiyaclari, chat yerine yapili ve aranabilir hale getirmek.`

## Faz 1 Basari Tanimi

Faz 1 basarili sayilacaksa sunlar gerceklesmeli:

- adminler topluluk icin invite link paylasabilmeli
- kullanicilar eski bilgiye arama ile ulasabilmeli
- topic group mantigi acik ve uygulanabilir olmali
- ayni sorularin tekrar orani dusmeye baslamali
- en az birkac grup gunluk akisi mevcut platformlar yerine burada dondurmeye baslamali
- problemli kullanicilar `Sikayet Et` akisi ile moderatorlere hizlica iletilebilmeli
- yeni kullanici ilk oturumda ya cevabi bulmali ya da kolayca `Yardim Istegi` acabildigini anlamalidir

## Faz 1 Aha Moment

Faz 1'in ilk 1-2 dakikada gostermesi gereken deger su olmalidir:

- aradigim seyin burada daha once sorulmus cevabi var
- yoksa bunu duz mesaj gibi degil, net formatta acabiliyorum
- admin bu platformu daha duzenli yonetiyor

Bu nedenle onboarding ve ilk ekranlar, bos feed hissi vermemeli; dogrudan:

- solved thread'ler
- populer yardim istekleri
- pinned kaynaklar
- ilgili lokasyon veya topic group'lar

gostermelidir.

## Faz 1 Icerik Stratejisi

Pilot asamada icerik tamamen organik akisla birakilmamalidir. Faz 1 icin dogru model:

- `curated-first`: ilk faydali kutuphane admin, moderator ve migration concierge tarafindan kurulur
- `organic-second`: uye katkisi bunun ustune gelir
- `memory-first`: feed'de ne kadar cok post oldugu degil, ne kadar hizli sonuc bulundugu onemlidir

Bu nedenle Faz 1'de:

- ana sayfa genel geyik veya serbest chat akisina donmemelidir
- en faydali icerikler `FAQ`, `rehber`, `cozum karti` veya `solved thread` olarak sabitlenmelidir
- tekrar eden konular serbest post olmaktan cikartilip template ve yonlendirme ile duzenlenmelidir
- adminler toplulugu sadece moderasyonla degil, aktif kurasyonla da yonetmelidir

Ilk pilot icin icerik karari net olmalidir:

`Baslangicta kaliteyi admin destekli kurasyon korur; tamamen organik akis ancak bu temel oturduktan sonra saglikli hale gelir.`

## Faz 1 Kapsami

### 0. Faz 1 Scope Kontrolu

Faz 1 genis gorunebilir; bunun nedeni pilot migration'in bos, guvensiz veya daginik hissedilirse calismayacak olmasidir. Yine de uygulama sirasinda kapsam iki katmana ayrilmalidir:

**Core pilot:**

- community / location / topic group yapisi
- invite, join request ve public preview akislarinin temeli
- structured post, yardim istegi, template ve thread yapisi
- arama, filtre, FAQ / Altin Bilgi Kutuphanesi ve temel medya-link erisimi
- temel moderasyon, sikayet, block ve reklam gorunurluk tercihi

**Launch guardrails:**

- hesap silme ve veri talep sureci
- rate limiting ve spam sinyalleri
- reklam onayi
- deep link ve preview davranisi
- iki dilli UI temeli

Core pilot calismadan guardrails tek basina deger yaratmaz. Guardrails olmadan da pilot guven kaybeder. Bu nedenle ikisi ayni fazda dusunulur, ama implementasyon onceligi core pilot olmalidir.

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

### 1.1 Temel Lokasyon Modeli

Bu urunde lokasyon opsiyonel bir sus degil, cekirdek relevance sinyalidir.

Ama lokasyon tek tip dusunulmemelidir. Faz 1'de en az su ayrim net olmalidir:

- `User location`: kullanicinin ana bolgesi
- `Content location`: post, ilan veya yardim isteginin ilgili oldugu lokasyon
- `Ad location`: reklamin hedefledigi veya hizmet verdigi lokasyon

Bu uc veri ayni alan gibi modellenirse hem gizlilik hem de relevance bozulur.

Faz 1 icin onerilen temel model:

- kullanici onboarding'de bir `base location` secer
- bu alan tam adres degil; sehir, bolge veya postcode district seviyesinde tutulur
- kullanici bu bilginin profilde ne kadar gorunecegini secebilir
- sistem, feed ve aramada bu lokasyonu relevance icin kullanir

Tam adres veya hassas adres bilgisi Faz 1'in default'u olmamalidir.

### 1.2 Community Acma ve Yetki Modeli

Faz 1'de community acma tam serbest olmamalidir. Aksi halde cok hizli sekilde duplicate, bos veya dusuk kaliteli alanlar olusur.

Bu nedenle Faz 1 icin onerilen model:

- `Ana community` sadece platform adminleri veya platform tarafindan onaylanmis community admin tarafindan acilabilir
- `Location community` ve `topic group` parent community altinda olusur
- parent community admini, kendi yapisi icinde yeni alt alan acma yetkisine sahip olabilir

Bu model erken fazda kaliteyi korur ve ayni sehir veya ayni konu icin 10 farkli daginik topluluk olusmasini engeller.

### 1.3 Rol Katmanlari

Faz 1'de bile tek tip admin yeterli olmayabilir. En azindan su roller dusunulmelidir:

- `Platform admin`: tum sistemi yonetir, ana community acar, ust seviye kurallari belirler
- `Community admin`: belirli bir ana community'nin sahibidir veya yoneticisidir
- `Sub-admin`: belirli bir location community veya topic group'tan sorumludur
- `Moderator`: icerik ve uye moderasyonu yapar
- `Member`: normal kullanici

Erken faz karari olarak `community founder` ayri bir rol olmamali; Faz 1'de community admin ile ayni yetki setinde ele alinmalidir.

### 1.4 Sub-admin Mantigi

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

Faz 1 karari olarak sub-admin yeni group acmamalidir. Yeni location veya topic ihtiyaci varsa talep acmali; scoped create yetkisi ancak Faz 3'te ve explicit izinle verilebilmelidir.

### 1.5 Faz 1 Permission Snapshot

Faz 1'de sistemi basit tutmak icin yetki dagilimi de sade olmalidir:

| Aksiyon | Platform admin | Community admin | Sub-admin | Moderator | Member |
| --- | --- | --- | --- | --- | --- |
| Ana community ac | Yes | No by default | No | No | No |
| Location community / topic group ac | Yes | Yes | No (Faz 3'te acilabilir) | No | No |
| Sub-admin ata | Yes | Yes in own community | No | No | No |
| Moderator ata | Yes | Yes in own community | No | No | No |
| Invite link olustur | Yes | Yes | Scoped | No by default | No |
| Kullaniciyi group'tan cikar | Yes | Yes | Scoped | Scoped if allowed | No |

Bu snapshot'in ana mantigi su:

- ana community acilisi kontrollu kalir
- operasyon community admin ve sub-admin uzerine dagilir
- moderatorler yapi kurmaz, duzeni korur
- member sadece kullanir, raporlar, katki verir

Moderator tarafinda ilk varsayilan mantik su olmalidir:

- scoped `mute` varsayilan olarak acik olabilir
- scoped `remove` community policy veya report threshold ile sinirlanmalidir

### 2. Uyelik ve Katilim Yollari

Faz 1'de ana katilim yolu invite link olmalidir; ama public ve private community farklari nedeniyle katilim kanallari tek tip ele alinmamalidir.

**Invite link:**

- community veya belirli group icin olusturulabilmeli
- link ile hizli kayit ve join akisi olmali
- suresi ve kullanim limiti ayarlanabilmeli (orn: 7 gun gecerli, max 50 kullanim)
- iptal edilebilmeli

**QR kod:**

- her invite link icin otomatik QR kod olusturulmali
- in-person etkinlik, toplanti veya masa ustu materyallerinde kullanilabilmeli
- QR kodu scan eden kullanici ayni invite link akisina girmeli

**Social login:**

- Google ve Apple ile giris kayit friction'ini dusurur
- ozellikle invite link sonrasi gelen yeni kullanici icin kritiktir; email + sifre akisi bu noktada kaybettirir
- social login varsayilan seceneklerden biri olmali; email + sifre alternatif olarak kalmali

**Bulk invite (migration icin):**

- admin email veya telefon listesi yukleme ile toplu davet gonderebilmeli
- her davet kisisellestirilmis invite link icermeli
- gonderim zaman asimi veya teslim edilememe durumunda admin bildirilmeli
- bu ozellik migration concierge operasyonunun temel araci olacak

**Join request (private community):**

- private topluluklar icin invite link olmadan `Katilmak Istiyorum` akisi
- adminin gorecegi kisa giris sorulari
- onay, red veya beklemeye alma

**Web preview -> self-registration (public community):**

- public community'lerde web preview'dan `Katil` butonuna basan kullanici kayit akisina girmeli
- invite link beklenmemeli; topluluk public olarak isaretlendiyse direkt kayit acik olmali
- community admin community'yi public / yarim-public / private olarak tanimlamali

**Lokasyon ve ilgi secimi:**

- ilk giriste lokasyon secimi ve ilgilenilen topic group secimi
- lokasyon gorunurlugu tercihi: `profilde goster`, `sadece community icinde goster`, `sadece sistem kullansin`

**WhatsApp ve iMessage preview kartlari:**

- paylasildiginda kart gorunumu icin OG tag'ler olmali

### 2.1 Approval Engine Temelleri

Faz 1'de onay gerektiren butun akislar farkli yerlerde daginik kalmamali; ortak bir mantikla ele alinmalidir.

Ilk fazda tek kuyruk mantigina oturtulabilecek approval tipleri:

- join request onayi
- yeni location veya topic talebi
- hassas group'larda post yayin onayi gerekiyorsa bu akis
- pinned kaynak veya rehber yayinlama onayi

Boylece admin veya sub-admin `hangi talep nereye geldi` diye farkli ekranlarda kaybolmaz.

### 2.2 Gecisi Hakli Cikaran Faz 1 Deneyimi

Faz 1'de kullaniciya hemen deger gostermezsen gecis olmaz. Bu nedenle ilk surumde su hissettirilmeli:

- buradaki bilgi kaybolmuyor
- topluluga girmeden once bile burada isime yarayan icerik oldugunu gordum
- admin beni buraya tasimakta zorlanmadi

Bu hissi olusturacak ilk deneyim:

- **Welcome Thread**: Her yeni uyenin topluluk kurallarini ve ilk adimlari gorebilecegi sabit onboarding postu.
- **Member Bio & Interests**: Ilk giriste kisa bir tanitim ve ilgi duyulan `topic group`larin secimi (feed'i kisisellestirmek icin).
- lokasyon ve ilgi alanina gore hizli onboarding
- en faydali pinned thread'lerin one cikmasi
- `solved` veya `best answer` isaretli thread'lerin hemen gosterilmesi
- paylasildiginda disarida da anlasilan preview kartlari
- login oncesi okunabilen hafif web preview veya acik ozet ekranlari
- `oda ariyorum` gibi yardim isteklerinin de burada acildigini gosteren net ornekler

### 2.3 Web-first Discovery ve Shareability

Bu urun sadece mobile icinde gorunurse Facebook Groups replacement acisindan zayif kalir.

Faz 1'de en azindan su gorunur yuzler olmali:

- davetiye veya thread preview linkleri
- public veya yarim-public faydali thread ozetleri
- arama motoruna acilabilecek rehber veya kaynak sayfalari

Ama amac tam public social network olmak degil; disaridan bakan kullaniciya burada deger oldugunu gostermektir.

### 2.4 Kullanici Profili

Her uye icin temel bir profil yapisi olmali. Bu profil sosyal ag profili gibi agir degil; ama kimin ne oldugunu anlamaya yetecek kadar net olmali.

**Faz 1 profil alanlari:**

- isim veya takma ad
- profil gorseli (opsiyonel)
- kisa tanitim (1-2 cumle)
- base location (gorunurluk tercihi ile)
- katilim tarihi
- uye oldugu topic group'lar
- acik yardim istekleri ve paylasimlari
- `Sikayet Et` butonu

Profil, kimin guvenilir oldugunu anlamanin ilk adimidir. Faz 2'de faydalilik sinyalleri, Faz 4'te verified badge'ler bu profilin ustune biner.

### 2.5 Feed ve Kesif Mantigi

Kullanicinin ana ekranda ne gordugu urunun basarisi icin belirleyicidir.

**Faz 1 feed kurallari:**

- feed varsayilan olarak kullanicinin secili topic group'larina ve lokasyonuna gore filtrelenir
- feed sirasi: once pinned / sabitlenmis icerik, sonra yenilik bazli siralama
- `Cozuldu` veya `Kapandi` status'undeki icerikler varsayilan olarak feed'de daha asagida gosterilir veya gizlenir
- `Cozum Karti` ve `Rehber` tipleri arama ve feed'de on sira alir
- reklam feed icinde ayri slotlardan gosterilir; normal icerikle karistirilmaz
- feed bos gorunuyorsa en cok aranan veya en cok kaydedilen icerikler gosterilir

**Feed ne olmamali:**

- kronolojik mesaj akisi (WhatsApp benzeri)
- genel sohbet ve dusuk sinyalli paylasimlarla dolan sosyal akis
- `Merhaba, nasilsiniz` tarzinda icerikle dolan bir timeline

Feed'in temel sorusu: `Bu kullanicinin simdi en cok isine yarayacak icerik ne?`

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
- Yardim Istegi

Tum postlarda en az su alanlar olmali:

- baslik
- aciklama
- lokasyon
- group
- olusturan kullanici
- olusturma tarihi
- durum / status

### 4.1 Yapilandirilmis Template'ler

Ozellikle yuksek niyetli icerikler serbest metinle acilmamalidir. Faz 1'de en az su template mantigi olmalidir:

- `Kiralik / oda ilani`: fiyat, lokasyon, oda tipi, tasinma tarihi, iletisim sekli
- `Is ilani`: rol, lokasyon, calisma tipi, ucret araligi opsiyonel, basvuru yolu
- `Is ariyorum`: aranan rol, lokasyon, deneyim ozeti, calisma tercihi
- `Satilik`: urun adi, fiyat, durum, lokasyon, teslim sekli
- `Provider ariyorum`: hangi hizmet, lokasyon, butce opsiyonel, aciliyet

Bu template'ler sayesinde:

- filtreleme gercekten ise yarar
- arama kalitesi artar
- ayni ihtiyaclar karsilastirilabilir hale gelir
- topluluk kirliligi azalir

### 4.2 Yardim Istegi / Need Request Akisi

Bu urunde `yardim istiyorum` tipi icerik ayri bir deger tasir. Cunku bircok gercek kullanim sunlardan olusur:

- `oda ariyorum`
- `ev ariyorum`
- `is ariyorum`
- `cocuk bakicisi ariyorum`
- `guvenilir muhasebeci ariyorum`

Bu tip icerikler ne tam soru ne tam ilandir. Bu nedenle Faz 1'de `Yardim Istegi` birinci sinif post tipi olmali.

Minimum alanlar:

- ne ariyor
- lokasyon
- kategori
- aciliyet optional
- butce optional
- tercih edilen iletisim sekli
- durum: `acik`, `eslesme bekliyor`, `cozuldu`, `kapandi`

Bu sayede topluluk daha hizli cevap verir ve ayni ihtiyac daha sonra aranabilir hale gelir.

Lokasyon kullaniminda Faz 1 kurali su olmali:

- `Soru`, `Ilan` ve `Yardim Istegi` tiplerinde `content location` neredeyse zorunlu olmali
- sadece genel tavsiye veya duyuru tipi iceriklerde daha gevsek davranilabilir

Boylece kullanici alakasiz sehir veya bolge icerigiyle bogulmaz.

### 4.3 Cozum Kartlari

Bazi sorular her hafta yeniden sorulur. Bunlarin sadece yorumlu bir thread olarak kalmasi yeterli degildir.

Faz 1'de belirli icerikler `Cozum Karti` formatina donusturulebilmelidir:

- sorun veya ihtiyac basligi
- kisa ozet
- adim adim checklist
- gerekiyorsa belge, link veya form baglantilari
- altinda topluluk tartismasi ve guncellemeler

Ornek:

- `Ehliyetimi nasil degistiririm?`
- `Londra'da dogru muhasebeciyi nasil secerim?`
- `Milton Keynes'te nursery bakarken neye dikkat etmeliyim?`

Bu format, community memory'yi duz mesajlardan daha kullanisli hale getirir.

### 4.4 Sonuc ve Status Katmani (Content Lifecycle)

Mevcut platformlarda bir post acildiktan sonra sonuc cogu zaman kaybolur. Bu urunde ise post'un kaderi gorunur olmalidir.

Ilk fazda temel status mantigi yeterlidir:

- `Acik`
- `Cozuldu`
- `Kapandi` (Zaman asimi veya gecersizlik durumu)

Ozellikle `Yardim Istegi`, ilan ve soru tiplerinde bu status'ler, yeni kullanicinin hangi icerikin hala gecerli oldugunu anlamasini kolaylastirir. Zamanla eskiyen ve `Kapandi` durumuna gecen icerikler aramada daha dusuk oncelikle gosterilmelidir.

### 5. Thread ve Yorumlar

Her postun altinda:

- yorum
- reply
- solved / best answer

olmalidir.

Bu, mevcut group akisini topluluk hafizasina ceviren ana mekaniktir.

Yardim istekleri de bu thread mantigina oturmali; boylece ayni ihtiyac yeniden dogdugunda eski cevaplara donulebilir.

### 5.1 Faz 1 Iletisim Katmani

Faz 1'de chat deneyimi tamamen kaldirilmamis olur; ama bilincli sekilde asenkron yapida tutulur.

Bu fazda iletisim sadece su katmanlardan olusmalidir:

- thread altinda yorum
- yoruma reply
- solved / best answer
- mention veya bildirim ile birini geri cagirma

Yani kullanici etkileisimi vardir, ama bu etkileisim mesaj nehri gibi akip gitmez.

Faz 1 kurali:

- degerli bilgi thread icinde kalir
- admin veya member ayrica DM ile konusmaz
- canli group chat acilmaz

Bu sinir, urunun ilk farkini korur:

`mesajlasma degil, bulunabilir community hafizasi`

### 6. Arama ve Filtreleme

Faz 1'in en kritik farklastirici ozelligi budur.

Minimum arama ozellikleri:

- kelime bazli arama
- lokasyona gore filtre
- topic group'a gore filtre
- post tipine gore filtre
- sadece `Yardim Istegi` postlarini filtreleme
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

### 7. Altin Bilgi Kutuphanesi

Her community, WhatsApp ve Telegram'dan ayrisan degerini burada hissettirmelidir. Bu nedenle Faz 1'de basit ama guclu bir `Altin Bilgi Kutuphanesi` olmalidir.

Her community ve topic group icin:

- pinned posts
- sik sorulan sorular
- onboarding rehberleri
- wiki benzeri sabit rehber sayfalari
- dosya veya dokuman eklenebilen temel kaynak postlari
- sabitlenmis onemli link ve medya koleksiyonlari

olmalidir.

Yeni gelen kullanici eski icerigi kazimak zorunda kalmadan once bunlari gormelidir.

Kutuphane mantigi su sekilde calismalidir:

- en cok tekrar eden sorular once thread olarak dogar
- sonra admin veya moderator tarafindan FAQ / rehber / cozum kartina yukseltilir
- eskiyen veya gecerliligini kaybeden bilgi acikca guncellenir veya arsivlenir

Bu, platformun zamanla cop veri yigini yerine topluluk hafizasina donusmesini saglar.

### 7.1 Admin Curated Seed Mantigi

Pilot asamada ilk icerik omurgasi admin destekli olmali; tamamen organik olmamalidir.

Faz 1'de beklenen model:

- ilk rehberler admin veya migration concierge tarafindan girilir
- ilk FAQ listesi topluluktaki en cok sorulanlardan derlenir
- ilk provider listeleri ve tavsiye thread'leri moderator kontroluyle duzenlenir
- daha sonra kullanici katkisiyla bu kutuphane buyur

Kisacasi:

`Ilk pilotta icerik sahibi once topluluk yonetimidir; topluluk uyeleri daha sonra bunu zenginlestirir.`

### 7.2 Cold Start ve Seed Operasyonu

Faz 1 teknik olarak dogru olsa bile bos hissediyorsa migration basarisiz olur.

Bu nedenle ilk topluluklar icin operasyonel olarak su minimum paket hazirlanmalidir:

- en az 20-30 solved veya rehber niteliginde seed thread
- her ana topic icin en az 5 yardim istegi veya ornek request
- en cok paylasilan link ve medya icin baslangic arsivi
- en az 10-20 provider, ilan veya tavsiye sinyali
- ilk pinned FAQ ve hos geldin rehberi
- en az birkac `Cozum Karti`

Bu, urunun ilk gunden `burasi bos` degil `burasi ise yariyor` hissi vermesini saglar.

### 7.3 Migration Concierge ve Admin Onboarding

Ilk topluluklari sadece self-serve tasimaya calismak risklidir.

Faz 1'de ozellikle ilk buyuk community'ler icin su destek modeli dusunulmelidir:

- admin ile birlikte ilk group yapisini kurma
- mevcut kurallari ve FAQ'lari urune tasima
- eski yararli thread'leri veya linkleri seed icerige donusturme
- ilk invite ve paylasim metinlerini hazirlama

Bu operasyon, daha sonra urunlesebilecek bir `migration concierge` teklifinin de temelini atar.

Bu nedenle Faz 1 icin net karar:

- ilk 3-5 anchor community concierge-led tasinmalidir
- self-serve migration daha sonra bu operasyonun sadelestirilmis hali olarak urune eklenmelidir

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

### 8.3 Kullanici Bazli Engelleme

Admin moderasyonundan ayri olarak, kullanicinin kendi deneyimini kontrol edebilmesi de gerekir.

Faz 1'de minimum model:

- bir kullanici baska bir kullaniciyi engelleyebilmeli
- engellenen kullanicinin postlari ve yorumlari engeli koyan kisi icin gizlenmeli
- engellenen kullanici engellendigini bilmemeli (sessiz engel)
- engel kaldirilabilmeli
- engelleme rapor akisini etkilememeli; engellenen kisi hala sikayet edilebilmeli

Bu ozellik ozellikle buyuyen topluluklarda moderator mudahalesi olmadan bireysel rahatsizliklari yonetir.

### 8.4 Hesap Silme ve Veri Haklari

UK pazari GDPR kapsamindadir. Bu nedenle Faz 1'den itibaren kullanicinin veri haklari acik tanimlanmali.

**Hesap silme:**

- kullanici kendi hesabini silebilmeli
- silme islemi geri donulemez; kullaniciya onay adimi gosterilmeli
- hesap silindiginde: profil bilgileri, lokasyon, bio ve kisisel veriler kaldirilir
- kullanicinin actigi thread ve yorumlar anonim hale getirilir (icerik kalir, isim `Silinmis Kullanici` olur); community hafizasi bozulmaz
- DM veya birebir iletisimler tamamen silinir (Faz 5'te DM geldiginde)

**Veri indir:**

- Faz 1'de kullanici kendi verisini talep edebilmeli; bu talep destek veya admin operasyonu ile manuel / yari-manuel islenebilir
- self-serve JSON veya CSV export Faz 4'teki daha olgun export altyapisiyla urunlesmelidir
- bu islem Faz 4'teki admin export'tan farklidir; bireysel kullanici hakki olarak Faz 1'de politika ve surec seviyesinde tanimli olmali

**Gizlilik ilkesi:**

- kullanici verisi ucuncu tarafla (advertiser dahil) bireysel olarak paylasilmamali
- profil gorunurlugu kullanici tarafindan ayarlanabilmeli

### 8.5 Tekrarlayan Icerigi Daha Acarken Kirma

Faz 1'de bile ayni sorunun tekrar tekrar acilmasi pasif sekilde izlenmemelidir.

Minimum davranis:

- kullanici baslik yazarken benzer thread'ler onerilmeli
- ilgili FAQ veya rehber varsa once gosterilmeli
- admin duplicate thread'i ana thread'e yonlendirebilmeli

AI destekli versiyon daha sonra gelir; ama kullaniciya `bu daha once cevaplandi` hissi Faz 1'de bile verilmelidir.

### 8.6 Hassas Konu ve Sorumluluk Sinirlari

Saglik, hukuk, finans ve aile gibi topic group'larda bilgi paylasimi daha dikkatli ele alinmalidir.

Faz 1'de minimum kurallar:

- bu alanlarda paylasilan cevaplar profesyonel tavsiye yerine gecmez uyarisi tasimeli
- adminler gerekli gordugunde post onayi veya daha siki moderasyon acabilmeli
- acil durum veya yuksek riskli konular icin kullanici profesyonel destek almaya yonlendirilmelidir

Bu kural, bilgi hafizasini korurken platformun yanlis guven hissi uretmesini engeller.

### 9. Reklam Sistemi - Faz 1

Reklam normal post degil, ayri bir akis olmalidir.

Ilk fazda:

- her kullanici `Reklam Ver` ekranindan reklam olusturabilir
- reklam sponsorlu olarak etiketlenir
- reklam hedef lokasyon ve hedef konu secimi yapabilir
- reklam veren en azindan `target location` ve `service area` girebilmelidir
- reklam normal postlardan ayri veri modelinde tutulur
- reklam yayina cikmadan once en azindan basit admin veya platform onayindan gecmelidir

En kritik kural:

- reklam yasak degil
- reklam gormek zorunlu degil

Bu nedenle kullanici seviyesinde net bir tercih olmali:

- reklam goster
- reklam gosterme

`Reklam gosterme` secen kullanici feed, liste ve onerilerde reklam gormemelidir.

Bir diger kritik kural:

- reklam sadece `Reklam Ver` akisindan sisteme girmeli
- sponsorlu icerik acikca etiketlenmeli
- normal `Saglik`, `Gezi`, `Is` veya benzeri topic akislari reklamla kirletilmemeli
- reklam veren normal post acip sponsorluymus gibi davranamamali; bu moderasyon sebebi olmalidir
- onay bekleyen reklam kullaniciya `pending review` olarak gorunmeli, feed'e dusmemelidir

Tam adres bu fazda zorunlu olmamalidir. Ama kullaniciya alakasiz reklam gostermemek icin reklam tarafinda en az sehir, bolge veya hizmet alani seviyesinde lokasyon net olmalidir.

### 9.1 Ilk Sales Yonu

Faz 1'de reklam tarafi gelir motoru olmaktan cok ileride satilabilir bir capability olarak dogrulanir.

Bu nedenle ilk ticari odak:

- advertiser'a self-serve reklam verme mantigini gostermek
- provider veya isletmenin topluluga kontrollu erisim saglayabildigini kanitlamak
- reklam gostermeyen kullanicinin deneyimini bozmadan bunu yapmak

Ilk fazin amaci buyuk reklam geliri degil; `buradan olculebilir fayda cikabilir` sinyalini almaktir.

### 10. Temel Bildirimler

Ilk fazda sadece gerekli bildirimler olmali:

- postuna yorum geldi
- soruna cevap geldi
- takip ettigi group'ta yeni duyuru var
- yardim istegine cevap veya teklif geldi

Faz 1'de bildirim kanali **uygulama ici (in-app)** ve **push** olmali. Email ve SMS kapsami asagida tanimlanmistir.

**Email - sadece transactional:**

- email dogrulama
- sifre sifirlama
- join request onaylandi / reddedildi
- account ile ilgili onemli degisiklikler

Engagement emaili (haftalik digest vb.) Faz 1'de olmamali; spam olarak algilanma riski yuksektir.

**SMS - sadece kritik guvenlik:**

- email dogrulama alternatifleri olarak SMS OTP (telefon dogrulama aktif edilmisse)
- sifre sifirlama SMS'i (email'e erisim yoksa fallback)

SMS ile engagement bildirimi veya community alert gondermek Faz 1 kapsami disindadir.

Spam hissi yaratacak notification yogunlugundan kacinilmalidir.

### 11. Temel Kaynak Kutuphanesi

Facebook Groups ve Telegram gruplarinda insanlar sabit dosyalar, listeler ve rehberler paylasir. Bunlar sadece mesaj akisina birakilirsa yine kaybolur.

Bu nedenle Faz 1'de en azindan su olmali:

- pinned kaynak postlari
- PDF, dokuman veya link ekleri
- topluluk icin sabit checklist veya form baglantilari
- daha once paylasilan linklerin ve medya eklerinin temel arsiv gorunumu

Bu ozellik, sadece chat replacement degil ayni zamanda bilgi kutuphanesi hissi verir.

### 12. Dil ve Lokalizasyon Destegi

UK Turks gibi iki dilli topluluklarda urun ilk gunden lokalizasyon sorunuyla karsilasir.

Faz 1 icin minimum beklenti:

- UI hem Turkce hem Ingilizce desteklemeli; varsayilan dil onboarding'de secilmeli
- Post ve thread icerigi kullanicinin kendi dilinde girilmeli; sistem dil filtrelemesi Faz 1'de zorunlu degil
- Bildirim metinleri kullanicinin secili diline gore gelmeli
- Admin tarafindan topluluk kurallari ve pinned icerik her iki dilde de eklenebilmeli

Tam ceviri altyapisi veya icerik ceviri ozelligi Faz 1 kapsami disinda tutulmali. Ama UI dil destegi olmadan pilot toplulukta hemen engel olusur.

### 13. Hesap Guvenligi ve Rate Limiting

Urun public invite ile buyudukce spam ve suistimal erken risk haline gelir.

Faz 1 icin minimum guvenlik katmani:

**Hesap dogrulama:**
- kayit sirasinda email dogrulama zorunlu olmali
- telefon dogrulama opsiyonel ama private topluluklar icin admin tercihe bagli aktive edebilmeli

**Yeni uye throttle:**
- ilk 24-48 saatte yeni uye post limiti uygulanmali (ornek: ilk gun max 5 post)
- bu limit community admin tarafindan ayarlanabilmeli
- email dogrulamasi tamamlanmis veya guvenilir invite ile gelen uyeler icin limit daha gevse tutulabilmeli

**Spam sinyali:**
- kisa surede cok sayida tekrar post acma otomatik flag uretmeli
- moderator kuyruguna dusmeli, aninda ban olmamali

### 14. Deep Link ve Invite Teknik Gerekliligi

Invite linkleri WhatsApp, Telegram veya social media uzerinden paylasildigi icin teknik davranis cok onemlidir.

Faz 1'de zorunlu davranislar:

- invite linki uygulamayi aciyorsa dogru group veya community'e dogrudan gondermeli
- uygulama yuklu degilse web preview sonrasi install + otomatik yonlendirme akisi olmali
- belirli bir thread'in linki paylasildiginda o thread'e deep link calismali
- link preview meta tag'leri (og:title, og:description, og:image) olmali; WhatsApp ve iMessage'da kart gorunumu saglanmali
- suresi dolmus veya iptal edilmis invite linkleri net hata mesaji vermeli, sessizce bos ekran acmamali

## Faz 1'de Olmamasi Gerekenler

Asagidaki konular bu fazda bilerek disarida birakilmali:

- DM veya private chat
- full real-time group chat (Faz 1'de sadece thread/comment bazli asenkron iletisim vardir)
- AI assistant
- gelismis kimlik dogrulama
- rating ve review sistemi
- event modulu
- anket ve poll sistemi
- odeme, checkout veya reklam open auction modeli
- detayli analytics ve growth automation
- agir enterprise sales configurasyonlari

## Faz 1 Cikisinda Beklenen Sonuc

Bu faz sonunda urun su cumleyle anlatilabilmelidir:

`Davetiye, public preview veya join request ile girilen; konu bazli ayrilmis, asenkron thread yapisiyla hafiza olusturan, aranabilir ve reklam gorunurlugu kullanici tarafindan kontrol edilen community platformu.`

Eger bu net bir sekilde calisiyorsa Faz 2'ye gecmek anlamlidir.

Bu noktada ayrica sunu da gosterebilmelidir:

`Yeni kullanici burada daha hizli sonuc buluyor; admin ise mevcut gruplara gore daha az kaos yonetiyor.`
