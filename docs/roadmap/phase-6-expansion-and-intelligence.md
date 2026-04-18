# Faz 6 - Expansion ve Intelligence

## Fazin Amaci

Faz 6'da urun, tek bir diaspora veya tek bir ulkeye hizmet eden cozum olmaktan cikip genellenebilir bir global community platformuna donusur.

Bu fazin ikinci odagi, biriken community hafizasini daha akilli ve daha erisilebilir kilmaktir.

## Expansion Boyutu

Bu faza kadar urun buyuk ihtimalle belirli bir community modelinde calismasini kanitlamis olur.

Buradan sonra genisleme:

- farkli sehirler
- farkli ulkeler
- farkli diaspora topluluklari
- farkli ilgi veya profesyonel aglar

Bu genisleme, ilk product truth'lari bozmadan yapilmalidir.

## Faz 6 Kapsami

### 1. Multi-Community Identity

Bir kullanici birden fazla topluluga ait olabilir:

- UK Turks
- Germany Indians
- London Parents
- Europe Tech Contractors

Bu nedenle hesap yapisi tek community'ye bagli olmamali.

### 2. Country ve Locale Katmani

Farkli topluluklar farkli operasyonel ihtiyaclar getirir:

- dil
- lokasyon yapisi
- moderation tercihleri
- reklam hedefleme mantigi

Sistem locale-aware hale gelmeli.

**Tam ceviri ve cok dilli icerik destegi:**

- Faz 1'de baslayan iki dilli UI bu fazda tam locale altyapisina donusmeli
- topluluk bazli dil ayarlari olmali
- icerik ceviri ozelligi arastirilabilir (AI destekli)

### 3. AI Discovery ve Intelligence Layer

Bu fazda AI, platformun ana vaadi olan `Community Memory`yi korumak ve erisilebilir kilmak icin kritik rol oynar:

- **Semantic Search**: Sadece kelime eslesmesi degil, `MK civari cocuk doktoru` arayan birine `Milton Keynes pediatri tavsiyeleri` thread'ini getirebilen akilli arama.
- **Thread Summarization**: Yuzlerce yorum iceren uzun bir tartismanin ana ciktilarini 3 maddede ozetleme.
- **Auto-tagging & Categorization**: Postlarin icerigine gore otomatik etiketlenmesi ve dogru topic group'a yonlendirilmesi.
- **Admin AI Automation**: Duplicate tespiti, auto-FAQ onerisi ve moderasyon yuku azaltma Faz 3'te basladi; bu fazda AI ile guclendirilir.

AI, ana urun yerine gecen degil; community hafizasini daha kullanisli yapan katman olarak konumlanmali.

### 3.1 Community AI Assistant (Sor ve Cevap Al)

Bu ozellik urunun en guclu uzun vadeli farklilastiricisidir. Toplulukta biriken tum bilgi — thread'ler, cevaplar, FAQ'lar, rehberler, yardim istegi sonuclari, provider tavsiyeleri, etkinlik arsivleri — uzerinde calisan, kullanicinin dogal dille soru sorup cevap aldigi bir AI asistandir.

**Temel kullanim senaryolari:**

- `MK'de guvenilir cocuk doktoru var mi?` → AI toplulukta daha once onerilmis doktorlari, review'lari ve ilgili thread'leri birlestirerek cevap verir
- `Kiralik oda ariyorum, 500 sterlin civari, dogu Londra` → AI acik ilanlari, benzer gecmis istekleri ve tavsiye thread'lerini getirir
- `Ingiltere'de muhasebeci secerken nelere dikkat etmeliyim?` → AI toplulukta daha once paylasilan deneyimleri ve rehberleri ozetler
- `Bu hafta MK'de ne etkinlik var?` → AI aktif etkinlikleri listeler

**Cevap modeli:**

- AI kendi bilgisinden degil, yalnizca topluluk verisinden cevap uretmeli
- her cevabin altinda kaynak thread ve post linkleri gosterilmeli; kullanici teyit edebilmeli
- AI `bu konuda toplulukta bilgi bulamadim` diyebilmeli; uydurma cevap vermemeli
- cevap yeterli degilse kullaniciya `Bu konuda yeni bir soru veya yardim istegi acmak ister misin?` secenegi sunulmali

**Topluluk katilimi ve ortak yazisma:**

AI cevabi karanlik bir kutuda kalmamali; topluluk icinde gorunur olmali ve diger uyeler katkida bulunabilmeli.

- AI'a sorulan soru ve AI'in verdigi cevap, ilgili group icinde bir thread olarak gorunur olmali
- diger uyeler bu thread'e yorum yapabilmeli: duzelme, ek bilgi, farkli deneyim paylasabilmeli
- AI cevabi `baslangic noktasi` olmali; topluluk katkisiyla zenginlesen canli bir thread'e donusmeli
- AI cevabi ile topluluk cevaplari gorsel olarak ayirt edilebilmeli (orn: AI cevabi farkli etiket veya renk ile isaretli)
- eger topluluk uyelerinden gelen cevap AI cevabindan daha faydali bulunursa, `best answer` o cevaba gecebilmeli
- AI cevabi sadece kullaniciya degil topluluga da deger uretmeli: ayni soruyu soran baskasi bu thread'i bulabilmeli

Bu yaklasim iki onemli sorunu cozer:

- AI yanlis veya eksik cevap verdiyse topluluk duzeltir; bilgi kalitesi arttirir
- AI dogru cevap verdiyse bile insan deneyimi onu zenginlestirir; soru sadece bilgi degil guven ve iliski de tasir

AI bu modelde `ilk cevabi veren` rolundedir; `son sozu soyleyen` degil. Topluluk hafizasi hem AI hem insan katkisiyla buyur.

**Kapsam ve sinirlar:**

- AI sadece kullanicinin erisim yetkisi olan community, group ve thread verisi uzerinden cevap vermeli
- private group icerigi, baskasinin DM'i veya hassas paylasim modundaki icerik AI tarafindan ozetlenmemeli
- AI cevaplarinin dogru ve guncel olup olmadigini kullanici `Faydali / Yanlis / Eskimis` ile isaretleyebilmeli; bu geri bildirim modeli iyilestirmeli

**Farkli kullanici tipleri icin deger:**

- `Yeni uye`: topluluga ilk kez gelen birisi arama yapmak yerine sorusunu sorar ve community hafizasindan aninda cevap alir; onboarding suresini kisaltir
- `Aktif uye`: daha once gormedigi eski bilgiye AI uzerinden ulasir; tekrar soru acmak zorunda kalmaz
- `Admin`: tekrar eden sorulari AI karsilar; admin yuku duser
- `Provider / advertiser`: talep sinyallerini AI uzerinden gorebilir (orn: `muhasebeci ariyorum` tipinde kac istek var)

**Admin kontrol katmani:**

- community admin AI asistani acabilir veya kapatabilir
- belirli group'larda AI cevap vermesini engelleyebilir (orn: hassas konular)
- AI'nin kullandigi kaynak havuzunu sinirlandirabilir (orn: sadece solved thread ve FAQ)
- AI cevaplarinin basinda `Bu bilgi topluluk uyelerinin paylasimlarindan derlenmistir; profesyonel tavsiye yerine gecmez` uyarisi varsayilan olarak gosterilmeli

**Teknik yaklasim (high-level):**

- topluluk verisi uzerinde calisacak bir RAG (Retrieval-Augmented Generation) modeli
- veri indeksleme: thread, yorum, FAQ, rehber, kaynak, etkinlik arsivi, provider profilleri
- indeks guncelleme: yeni icerik eklendikce veya status degistikce (solved, closed) indeks guncellenmeli
- dil destegi: topluluk dili veya kullanicinin tercih dili uzerinden cevap uretebilmeli

Bu ozellik community memory'nin son halkasini tamamlar:

`Bilgi birikti → aranabilir oldu → simdi sorulabilir hale geldi.`

### 4. Advanced Knowledge Graph

Biriken bilgi sadece post listesi olarak kalmamali. Knowledge graph, AI Assistant'in arkasindaki yapisal katmandir.

Zamanla:

- sik sorulan konular
- en guvenilir cevap kaynaklari
- lokasyon bazli rehberler
- hizmet veren ve tavsiye grafi

gibi yapilar ustunden daha akilli kesif deneyimi kurulabilir.

Knowledge graph ayni zamanda AI Assistant'in cevap kalitesini arttirir. AI sadece duz metin aramasi yapmak yerine, graf uzerinden `bu provider su konuda en cok onerilmis`, `bu lokasyonda bu tip ihtiyac en cok sorulmus` gibi yapisal bilgiyi kullanarak daha dogru ve baglamli cevap verebilir.

### 5. Community Creation at Scale

Bu fazda yeni community kurmak cok kolay olmali:

- hazir template'ler
- otomatik group yapisi
- moderation defaults
- seed content paketleri

Boylece urun tek tek elle kurulan topluluklardan cikip platform seviyesine gelir.

### 5.1 Repeatable Launch Playbook

Expansion sadece feature ile olmaz; tekrar edilebilir launch modeli de gerekir.

Bu fazda standart hale getirilebilecekler:

- yeni community icin seed content paketleri
- migration checklist'leri
- admin onboarding playbook'u
- ilk advertiser veya provider onboarding seti
- case study ve referans kullanim materyalleri

Bu katman product ve sales ekiplerinin yeni ulke veya community tiplerine daha hizli acilmasini saglar.

### 6. Gelismis Etkinlik Planlama

Faz 4'te Event-Lite, Faz 5'te sponsor etkinlik kuruldu. Faz 6'da etkinlik modulu farkli topluluk tiplerine uyum saglayacak sekilde genisler.

**Tekrar eden etkinlikler:**

- haftalik bulusma, aylik toplanti gibi periyodik etkinlik tanimlama
- her tekrarin katilim ve arsivinin ayri tutulmasi
- admin icin tekrar sablonu: tarih otomatik onerisi, ayni katilimcilara bildirim

**Coklu organizator:**

- bir etkinligi birden fazla admin veya sub-admin birlikte yonetebilmeli
- gorev paylasimi: biri mekan, digeri iletisim, ucuncusu katilim listesi

**Bilet ve kayit (opsiyonel):**

- ucretli veya ucretsiz kayit formu
- kapasite ve bekleme listesi yonetimi
- basit odeme entegrasyonu (community admin icin gelir)
- bu ozellik her community'de varsayilan degil; admin tarafindan aktive edilmeli

**Takvim entegrasyonu:**

- etkinliklerin Google Calendar veya Apple Calendar'a tek tikla eklenmesi
- community bazli etkinlik takvimi gorunumu

**Etkinlik arsivi ve bilgi birikimi:**

- gecmis etkinlikler community hafizasina katki saglamali
- etkinlik sonrasi thread'ler, paylasilan gorseller ve ciktilar arsivlenmeli
- benzer yeni etkinlik acilarken gecmis veriler referans olarak gosterilmeli

### 7. Global Monetization Variants

Olcek arttikca gelir modelleri cesitlenebilir:

- farkli ulkelerde advertiser paketleri
- topluluk bazli admin planlari
- verified provider subscriptions
- partner marketplace entegrasyonlari
- ad network mediation ve fill optimization

Bu noktada programmatic gelir modeli daha olgun hale getirilebilir:

- farkli ulke ve dil bazli ad source secimi
- public web inventory ile app inventory ayrimi
- native advertiser ile ad network arasinda yield dengesi

Ana ilke burada da degismez:

- topluluk relevance'i ve kullanici kontrolu, network gelirinden daha onceliklidir

## Faz 6 Basari Kriterleri

- ikinci ve ucuncu community tiplerinde adoption
- birden fazla ulke veya segmentte retention
- AI destekli arama veya ozet kullanim orani
- yeni community olusturma suresinin kisalmasi
- global monetization variant'larda tekrar reklam orani

## Faz 6 Riskleri

- ana urun vaadinin generic platforma donusup zayiflamasi
- AI'nin community katkisini bastirmasi
- farkli ulke ihtiyaclarinin asiri karmasik hale gelmesi
- cok dilli icerik + AI katmaninin mahremiyet risklerini artirmasi (hassas icerik ozeti veya ceviride gizlilik sirismasi)

Bu yuzden expansion, ozunden kopmadan yapilmalidir.

## Faz 6 Cikisinda Beklenen Sonuc

`Insanlarin bulundugu yerde kendi guvenilir topluluklarini buldugu, topluluk bilgisini kaybetmeden sakladigi ve farkli community tiplerine acilabilen global platform.`
