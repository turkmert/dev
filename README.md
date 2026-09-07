# 🕶️ Mert Turk — Terminal Portfolio

A single-file, dark-themed portfolio site styled as a live terminal session — matrix rain background, generative ambient music, and a real interactive shell that fetches live data.

**[🇬🇧 English](#-english) · [🇹🇷 Türkçe](#-türkçe) · [🇷🇺 Русский](#-русский)**

---

## 🇬🇧 English

### About

This is a personal portfolio site for **Mert Turk — Senior IT / Network & Security Specialist**, built around a hacker/terminal aesthetic instead of a conventional resume layout. Certifications, CCNA badges, TryHackMe stats, and project history are all presented as if you're reading the output of real terminal commands.

### Features

- **Animated matrix rain background**, rendered live on `<canvas>`
- **Boot sequence intro** — a typed fake system boot log on page load
- **Glitch-text hero** with a typewriter effect cycling through roles
- **Scroll-triggered reveal animations** and animated count-up statistics
- **Generative ambient background music** — a slowly evolving minor-key chord pad, synthesized live with the Web Audio API (no audio file required)
- **A real interactive shell** at the bottom of the page — not canned responses. Commands like `myip`, `location`, and `weather` make live requests and return real data about the visitor
- **Command history** with ↑ / ↓ arrow-key recall, like an actual terminal
- Fully responsive, accessible (keyboard focus states, `prefers-reduced-motion` support)

### Tech Stack

- HTML5, CSS3 (custom properties, no framework), vanilla JavaScript (no build step, no dependencies)
- Web Audio API — generative music engine
- Canvas API — matrix rain animation
- [Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono) — JetBrains Mono
- [Font Awesome](https://fontawesome.com/) — icons
- [ipwho.is](https://ipwho.is/) and [open-meteo.com](https://open-meteo.com/) — free, no-key public APIs powering the shell's `myip`, `location`, and `weather` commands

### Getting Started

This is a single self-contained file — no installation, no build step, no dependencies to install.

```bash
git clone https://github.com/turkmert/<your-repo>.git
cd <your-repo>
open index.html   # or just double-click it
```

### Deploying to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select the branch (usually `main`) and root folder.
4. Save — your site will be live at `https://turkmert.github.io/<your-repo>/`.

### Interactive Shell Commands

| Command | What it does |
|---|---|
| `help` | Lists all available commands |
| `whoami` | Short bio |
| `certs` | Lists certifications |
| `badges` | Lists CCNA badges |
| `stats` | TryHackMe profile stats |
| `works` | Projects & community contributions |
| `contact` | Ways to get in touch |
| `myip` | Looks up your public IP and ISP |
| `location` | Approximate location from your IP |
| `weather` | Current weather at your location |
| `sysinfo` | Your browser, OS, screen, and language |
| `localtime` | Your local date, time, and timezone |
| `history` | Commands you've run this session |
| `echo <text>` | Repeats your message back |
| `clear` | Clears the screen |

### Customization

Everything lives in `index.html`:
- Colors: the `:root { --bg-void: ... }` block at the top of the `<style>` section
- Certifications / badges / stats / works / contact: search for the matching `id="..."` in the HTML
- Music: search for `generative dark ambient pad` — edit `CHORDS`, `CHORD_HOLD`, `GLIDE_TIME`
- Shell commands: search for `var commands = {`

### Privacy Note

The `myip`, `location`, and `weather` commands send the visitor's IP address to ipwho.is and api.open-meteo.com to look those things up — the same as any IP-lookup or weather widget would. Nothing is stored or sent anywhere else.

### License & Credits

© 2025 Mert Turk. All rights reserved.
TryHackMe profile: [tryhackme.com/p/turkmert](https://tryhackme.com/p/turkmert) · Credentials verified via TryHackMe & Credly.

---

## 🇹🇷 Türkçe

### Hakkında

Bu, **Mert Turk — Kıdemli IT / Ağ ve Güvenlik Uzmanı** için hazırlanmış, klasik bir özgeçmiş düzeni yerine hacker/terminal estetiğiyle kurgulanmış kişisel bir portföy sitesidir. Sertifikalar, CCNA rozetleri, TryHackMe istatistikleri ve proje geçmişi, sanki gerçek terminal komutlarının çıktısını okuyormuşsunuz gibi sunulur.

### Özellikler

- **Canlı matrix yağmuru arka planı**, `<canvas>` üzerinde gerçek zamanlı çiziliyor
- **Önyükleme (boot) animasyonu** — sayfa yüklendiğinde sahte bir sistem açılış günlüğü yazılıyor
- **Glitch efektli başlık** ve rolleri döngüsel yazan daktilo (typewriter) efekti
- **Kaydırmayla tetiklenen animasyonlar** ve sayaç şeklinde artan istatistikler
- **Üretici (generative) arka plan müziği** — Web Audio API ile canlı olarak sentezlenen, yavaşça değişen minör akor dizisi (herhangi bir ses dosyasına ihtiyaç yok)
- Sayfanın altında **gerçek çalışan bir interaktif terminal** — hazır cevaplar değil. `myip`, `location`, `weather` gibi komutlar gerçek zamanlı istek atıp ziyaretçi hakkında gerçek veri döndürür
- Gerçek bir terminal gibi ↑ / ↓ ok tuşlarıyla **komut geçmişi** hatırlatma
- Tamamen duyarlı (responsive) ve erişilebilir (klavye odak durumları, `prefers-reduced-motion` desteği)

### Kullanılan Teknolojiler

- HTML5, CSS3 (özel değişkenler, framework yok), saf (vanilla) JavaScript — derleme adımı ve bağımlılık yok
- Web Audio API — üretici müzik motoru
- Canvas API — matrix yağmuru animasyonu
- [Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono) — JetBrains Mono
- [Font Awesome](https://fontawesome.com/) — ikonlar
- [ipwho.is](https://ipwho.is/) ve [open-meteo.com](https://open-meteo.com/) — terminaldeki `myip`, `location` ve `weather` komutlarını çalıştıran, ücretsiz ve API anahtarı gerektirmeyen açık API'ler

### Başlarken

Bu, tek parça ve bağımsız bir dosyadır — kurulum, derleme adımı veya bağımlılık gerektirmez.

```bash
git clone https://github.com/turkmert/<repo-adiniz>.git
cd <repo-adiniz>
open index.html   # ya da doğrudan çift tıklayın
```

### GitHub Pages ile Yayınlama

1. Bu depoyu GitHub'a gönderin (push).
2. **Settings → Pages** sekmesine gidin.
3. **Source** altında ilgili dalı (genellikle `main`) ve kök klasörü seçin.
4. Kaydedin — siteniz `https://turkmert.github.io/<repo-adiniz>/` adresinde yayında olacak.

### İnteraktif Terminal Komutları

| Komut | Ne yapar |
|---|---|
| `help` | Tüm komutları listeler |
| `whoami` | Kısa özgeçmiş |
| `certs` | Sertifikaları listeler |
| `badges` | CCNA rozetlerini listeler |
| `stats` | TryHackMe profil istatistikleri |
| `works` | Projeler ve topluluk katkıları |
| `contact` | İletişim yolları |
| `myip` | Genel IP adresinizi ve servis sağlayıcınızı bulur |
| `location` | IP adresinizden yaklaşık konum |
| `weather` | Bulunduğunuz konumdaki güncel hava durumu |
| `sysinfo` | Tarayıcı, işletim sistemi, ekran ve dil bilgileriniz |
| `localtime` | Yerel tarih, saat ve saat diliminiz |
| `history` | Bu oturumda çalıştırdığınız komutlar |
| `echo <metin>` | Yazdığınız mesajı geri döndürür |
| `clear` | Ekranı temizler |

### Özelleştirme

Her şey `index.html` içinde:
- Renkler: `<style>` bölümünün başındaki `:root { --bg-void: ... }` bloğu
- Sertifikalar / rozetler / istatistikler / projeler / iletişim: HTML içinde ilgili `id="..."` değerini arayın
- Müzik: `generative dark ambient pad` ifadesini arayın — `CHORDS`, `CHORD_HOLD`, `GLIDE_TIME` değerlerini düzenleyin
- Terminal komutları: `var commands = {` ifadesini arayın

### Gizlilik Notu

`myip`, `location` ve `weather` komutları, bu bilgileri sorgulamak için ziyaretçinin IP adresini ipwho.is ve api.open-meteo.com servislerine gönderir — herhangi bir IP sorgulama veya hava durumu widget'ının yapacağı gibi. Başka hiçbir yere hiçbir veri gönderilmez veya saklanmaz.

### Lisans ve Teşekkür

© 2025 Mert Turk. Tüm hakları saklıdır.
TryHackMe profili: [tryhackme.com/p/turkmert](https://tryhackme.com/p/turkmert) · Sertifikalar TryHackMe ve Credly üzerinden doğrulanmıştır.

---

## 🇷🇺 Русский

### О проекте

Это персональный сайт-портфолио для **Мерта Турка — старшего IT-специалиста по сетям и безопасности**, оформленный в эстетике хакерского терминала вместо классического резюме. Сертификаты, значки CCNA, статистика TryHackMe и история проектов представлены так, будто вы читаете вывод настоящих команд терминала.

### Возможности

- **Анимированный фон в стиле «матричного дождя»**, отрисовывается в реальном времени на `<canvas>`
- **Анимация загрузки системы** — при открытии страницы печатается имитация системного лога загрузки
- **Глитч-эффект заголовка** и эффект печатной машинки, циклически показывающий роли
- **Анимации появления при прокрутке** и анимированный счётчик статистики
- **Генеративная фоновая музыка** — медленно меняющиеся минорные аккорды, синтезируемые в реальном времени через Web Audio API (без аудиофайлов)
- Внизу страницы — **настоящий работающий интерактивный терминал**, а не заготовленные ответы. Команды `myip`, `location` и `weather` делают запросы в реальном времени и возвращают настоящие данные о посетителе
- **История команд** с прокруткой стрелками ↑ / ↓, как в настоящем терминале
- Полностью адаптивный и доступный дизайн (видимый фокус клавиатуры, поддержка `prefers-reduced-motion`)

### Технологии

- HTML5, CSS3 (пользовательские свойства, без фреймворков), чистый JavaScript — без сборки и зависимостей
- Web Audio API — генеративный музыкальный движок
- Canvas API — анимация «матричного дождя»
- [Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono) — шрифт JetBrains Mono
- [Font Awesome](https://fontawesome.com/) — иконки
- [ipwho.is](https://ipwho.is/) и [open-meteo.com](https://open-meteo.com/) — бесплатные публичные API без ключа доступа, на которых работают команды `myip`, `location` и `weather`

### Начало работы

Это единый самодостаточный файл — установка, сборка и зависимости не требуются.

```bash
git clone https://github.com/turkmert/<название-репозитория>.git
cd <название-репозитория>
open index.html   # или просто откройте двойным щелчком
```

### Публикация на GitHub Pages

1. Отправьте (push) этот репозиторий на GitHub.
2. Перейдите в **Settings → Pages**.
3. В разделе **Source** выберите нужную ветку (обычно `main`) и корневую папку.
4. Сохраните — сайт будет доступен по адресу `https://turkmert.github.io/<название-репозитория>/`.

### Команды интерактивного терминала

| Команда | Что делает |
|---|---|
| `help` | Показывает список всех команд |
| `whoami` | Краткая информация о себе |
| `certs` | Список сертификатов |
| `badges` | Список значков CCNA |
| `stats` | Статистика профиля TryHackMe |
| `works` | Проекты и участие в сообществе |
| `contact` | Способы связи |
| `myip` | Определяет ваш публичный IP и провайдера |
| `location` | Приблизительное местоположение по IP |
| `weather` | Текущая погода в вашем местоположении |
| `sysinfo` | Информация о браузере, ОС, экране и языке |
| `localtime` | Ваше местное время, дата и часовой пояс |
| `history` | Команды, выполненные в этой сессии |
| `echo <текст>` | Повторяет введённое сообщение |
| `clear` | Очищает экран |

### Настройка

Всё находится в `index.html`:
- Цвета: блок `:root { --bg-void: ... }` в начале раздела `<style>`
- Сертификаты / значки / статистика / проекты / контакты: ищите соответствующий `id="..."` в HTML
- Музыка: найдите `generative dark ambient pad` — измените `CHORDS`, `CHORD_HOLD`, `GLIDE_TIME`
- Команды терминала: найдите `var commands = {`

### Примечание о конфиденциальности

Команды `myip`, `location` и `weather` отправляют IP-адрес посетителя на ipwho.is и api.open-meteo.com для получения этих данных — так же, как это делает любой сервис определения IP или виджет погоды. Никакие данные больше никуда не отправляются и не сохраняются.

### Лицензия и благодарности

© 2025 Мерт Турк. Все права защищены.
Профиль TryHackMe: [tryhackme.com/p/turkmert](https://tryhackme.com/p/turkmert) · Сертификаты подтверждены через TryHackMe и Credly.
