# Faz 3 - Admin Olgunlugu ve Operasyon

## Fazin Amaci

Faz 3, topluluk yoneticilerinin platformu olcekle yonetebilecegi operasyonel olgunlugu kurar.

Faz 1-2'de temel admin araclari vardir. Faz 3 ise admin is yukunu ciddi sekilde azaltir, rol delegasyonunu duzenler ve topluluk operasyonunu otomasyona tasimayi baslatir.

## Bu Faz Neyi Cozer

Faz 2 sonrasinda tipik admin sorunlari:

- tek admin tum onaylari yonetemiyor
- cok sayida sub-admin varsa yetkiler karisik hale geliyor
- ayni soru tekrar tekrar geliyor, FAQ akisi yeterli degil
- moderasyon yukleri elle yapilan islemlerle yonetilemez hale geliyor

Bu faz su soruyu cevaplar:

`Admin neden bu toplulugu buradan yonetmeye devam etsin?`

## Faz 3 Kapsami

### 1. Gelismis Group Yonetimi

Adminler icin daha guclu kontroller:

- post tipine gore group bazli izinler
- yalnizca adminin post acabilecegi announcement alanlari
- group kurallari icin zorunlu kabul akisi
- post tasima ve birlestirme is akislari
- group bazli kullanici ceza, mute ve cikarilma kurallari

Bu sayede konu bazli gruplar mevcut platformlardaki daginik admin emegine gore daha sistemli yonetilir.

### 2. Role Delegation ve Community Requests

Faz 3'te rol modeli olgun hale gelir:

- community admin, sub-admin atayabilmeli ve geri alabilmeli
- sub-admin sadece kendi kapsamindaki alanlari gorebilmeli
- guvenilir uyeler yeni location community veya topic group talebi gonderebilmeli
- bu talepler admin onayi ile aktive olabilmeli

Boylece platform merkezi kontrol ile topluluk bazli delegasyonu dengeler.

### 2.1 Sub-admin Group Acma Yetkisi Acilis Kriterleri

Faz 1'de sub-admin'in yeni group acmamasi kararlastirilmisti; Faz 3'te bu yetki kontrollu olarak acilabilir.

Ama bu yetki herkese otomatik verilmemeli. Acilis kriterleri:

- sub-admin en az 30 gun aktif olarak gorev yapmis olmali
- yonetimi altindaki alanda sikayet orani dusuk olmali (admin tanimli esik)
- community admin tarafindan acikca onaylanmali; varsayilan kapali kalmali
- yetki scoped olmali: sub-admin sadece kendi atandigi lokasyon veya topic altinda alt group acabilmeli; ana community veya baska scope'ta degil

Bu kriterler olmadan yetki delegasyonu kaosa donusur. Admin `Scoped if enabled` secenegini gormeli, kriterleri gorup aktive edebilmeli.

### 2.2 Faz 3 Permission Snapshot

| Aksiyon | Platform admin | Community admin | Sub-admin | Moderator | Member |
| --- | --- | --- | --- | --- | --- |
| Yeni location/topic talebi ac | Yes | Yes | Yes | No | Request |
| Yeni alt group ac | Yes | Yes | Scoped if enabled | No | No |
| Moderator ata | Yes | Yes | Scoped if explicitly allowed | No | No |
| Scoped mute / remove uygula | Yes | Yes | Scoped | Scoped if allowed | No |
| Community advertiser kurallarini guncelle | Yes | Yes in own community | No | No | No |

Bu evrimde de billing, top-level rol atama ve ana community acilisi merkezi kalmaya devam eder.

### 3. Approval Engine Genislemesi

Faz 1'de baslayan onay mantigi bu fazda platform seviyesinde konsolide olur.

Ayni approval altyapisi uzerinden yonetilebilecek akislar:

- join request ve giris sorulari
- yeni location veya topic acma talepleri
- hassas post veya yarim-anonim paylasim onayi
- pinned kaynak, rehber veya kutuphane icerigi yayin onayi
- advertiser veya provider icin belirli community'lerde ek inceleme

Bu birden fazla moderator veya sub-admin olan topluluklarda ciddi operasyon kazanci yaratir.

### 4. Kullanici Sikayet Esikleri

Faz 1'deki temel raporlama bu fazda akillasir:

- group bazli sikayet sayisi esikleri
- belirli esiklerde otomatik moderator flag'i
- tekrar eden sikayetlerde yari-otomatik group'tan cikarma onerisi
- haksiz veya toplu sikayetleri engellemek icin admin override

Oncelik platform geneli ban degil, once group duzenini korumaktir.

### 5. Admin Dashboard

Adminlerin toplulugu yonettigini hissetmesi icin dashboard gerekir:

- bekleyen raporlar ve onay kuyruklari
- sikayet esigine yaklasan kullanicilar
- en aktif group'lar
- cevaplanmamis sorular
- spam veya off-topic yogunlugu
- en cok aranan konular
- role delegation ozeti: kim hangi alandan sorumlu

Bu bilgi admini daha etkili yonetici yapar.

### 5.1 Admin Otomasyon Temelleri

- **Duplicate Detection**: Yeni post acilirken benzer anahtar kelimeler iceren eski postlarin `Bunu mu ariyordunuz?` seklinde onerilmesi.
- **Auto-FAQ Suggestion**: Admin'in cok sik cevapladigi thread'leri tek tikla FAQ listesine ekleyebilmesi.
- **Admin ROI Gorunurlugu**: Tekrar eden soru azalma egilimi, cevaplanmayan thread sayisindaki dusus, onay kuyruklarinin durumu ve en cok sonuc ureten topic group'lar.

### 5.2 Admin Devir ve Transfer Mekanizmasi

Bir community admini toplulugu baska birine devretmek isteyebilir. Bu senaryo planlanmadan birakilirsa topluluk sahipsiz kalabilir veya platform mudahalesi gerekir.

Faz 3'te minimum devir akisi:

- mevcut community admin baskasini `admin aday` olarak atayabilmeli
- aday kabul ederse tam admin yetkisi devredilir
- eski admin tercihine gore sub-admin olarak kalabilir veya ayrilabilir
- devir loglari platform admin tarafindan gorulebilmeli

Buyuk topluluklar icin community'nin sahipsiz kalmamasi kritik platform guvencesidir.

### 6. Reklam Moderasyon Akisi

Faz 1'de reklam `Reklam Ver` akisindan self-serve olusturulabiliyordu. Ama icerigin nasil denetlendigi tanimlanmamisti.

Faz 3'te temel reklam moderasyon modeli olmali:

- yeni reklam olusturuldugunda otomatik basit kural kontrolu (yasak kelime, yaniltici iddia sinyali)
- community admin kendi toplulugunda hangi reklam kategorilerinin gorunecegine karar verebilmeli
- sikayet edilen reklam icin admin inceleme ve onay / red / duzeltme akisi
- tekrar sikayet alan advertiser icin escalation modeli

Bu akis olmadan topluluk kalitesinin korunmasi zordur; ozellikle buyuyunce.

### 7. Structured Migration Araclari

Bu fazda eski topluluk birikimini tasimak kolaylasir:

- mevcut FAQ icin manuel import ekranlari
- eski yararli icerikleri rehbere cevirme
- topluluk kurallarini hazir template ile olusturma
- Facebook Group veya Telegram sabit kaynaklarini kutuphane yapisina donusturme
- eski onemli thread'leri `guide` veya `resource` formatina cevirme
- eski medya ve link paylasimlarini etiketli arsiv yapisina donusturme

### 8. Web Discovery ve Public Value Layer

Facebook Groups replacement icin growth sadece invite ile sinirli kalmamali.

Bu fazda:

- public veya indexlenebilir solved thread sayfalari
- rehber, kaynak ve FAQ landing sayfalari
- toplulugun en cok kullanilan kutuphane alanlari icin paylasilabilir public gorunumler

Bu katman, urune login olmadan once bile `burada gercek deger var` hissi verir.

### 9. Quick Rooms

Tam anlamiyla chat-first olmadan da topluluk canli tutulabilir. Asenkron yapiya hafif canlilik eklenir.

Quick Rooms:

- Topic group icinde acilabilen, gecici veya kalici hafif chat alanlari
- hizli reaksiyonlar
- kisa status update tipleri

Quick Rooms icin kurallar:

- her group'ta varsayilan kapali; admin veya sub-admin bazli aktive edilir
- sureli / gecici oda acma destekler
- oda kapaninca degerli mesajlar `thread'e donustur`, `FAQ'ya ekle` veya `kaynak olarak sabitle` akisina girebilir
- raporlama, mute ve room-level moderasyon ayni moderator altyapisi ile calisir

Boylece canlilik gelir, bilgi kaybolmaz.

### 10. Polls ve Hafif Karar Mekanikleri

Topluluklar zaman zaman hizli yoklama yapar:

- bulusma tarihi secme
- oneriler arasinda karar
- admin kararlarini topluluga sormak

Hafif poll sistemi:

- tek secimli veya cok secimli anket
- belirli sure sonunda kapanma
- sonucu sabitleyebilme veya duyuruya cevirebilme

### 11. Hassas Konular Icin Guvenli Paylasim

Bazi konular insanlarin acik kimlikle yazmak istemedigi alanlardir:

- saglik
- aile ici sorunlar
- hukuki sorular
- finansal zorluklar

Model:

- topluluga gorunur ama gercek kimligi sadece adminin gorebildigi yarim-anonim postlar
- sadece belirli group'larda aktif edilen guvenli paylasim modu
- suistimali azaltmak icin moderator onayi veya daha sik raporlama

Bu ozellik dogru kurgulanirsa mevcut platformlarda insanlarin yazmaya cekindigi hassas konular burada cozulmeye baslar.

## Faz 3 Basari Kriterleri

- role delegation sayesinde ana admin uzerindeki operasyon yukunun azalmasi
- bekleyen onay ve moderasyon kuyruklarinin yonetilebilir hale gelmesi
- tekrar eden soru azalma egilimine dair admin ROI metrigi
- reklam sikayeti yonetilebilir seviyede kalmasi
- poll ve quick room kullanim oraninin artmasi
- migration araclari ile yeni topluluk kurulus suresinin kisalmasi

## Faz 3'te Disarida Kalabilecekler

- verified profiller → Faz 4
- rating ve review → Faz 4
- advertiser billing ve kampanya → Faz 5
- DM ve live mode → Faz 5
- AI → Faz 6

## Faz 3 Cikisinda Beklenen Sonuc

`Topluluk yonetmek artik tek kisinin omuzunda degil; delegasyon, otomasyon temelleri ve operasyon gorunurlugu ile admin daha az kaos, daha cok etki ile calisabiliyor.`
