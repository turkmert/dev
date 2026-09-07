(function(){
  "use strict";
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- matrix rain ---------- */
  var canvas = document.getElementById('matrix-rain');
  var ctx = canvas.getContext('2d');
  var cols, drops;
  function sizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.floor(canvas.width / 16);
    drops = new Array(cols).fill(0).map(function(){ return Math.random() * -50; });
  }
  sizeCanvas();
  window.addEventListener('resize', sizeCanvas);
  var chars = "01アイウエオカキクケコサシスセソABCDEFGHIJK$#@&%";
  function drawMatrix(){
    ctx.fillStyle = 'rgba(5,9,6,0.06)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.font = '14px monospace';
    for(var i=0;i<drops.length;i++){
      var char = chars[Math.floor(Math.random()*chars.length)];
      var x = i*16;
      var y = drops[i]*16;
      ctx.fillStyle = Math.random() > 0.94 ? '#b6ffd0' : '#1f5c3c';
      ctx.fillText(char, x, y);
      if(y > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  if(!reduceMotion){
    setInterval(drawMatrix, 55);
  } else {
    ctx.fillStyle = '#050906';
    ctx.fillRect(0,0,canvas.width,canvas.height);
  }

  /* ---------- cursor glow ---------- */
  var glow = document.getElementById('cursor-glow');
  if(window.matchMedia('(pointer: fine)').matches){
    window.addEventListener('mousemove', function(e){
      glow.style.setProperty('--x', e.clientX + 'px');
      glow.style.setProperty('--y', e.clientY + 'px');
    });
  }

  /* ---------- boot sequence ---------- */
  var bootLinesText = [
    'booting mert-os v2.6 ...',
    'initializing kernel modules [ok]',
    'mounting /home/mert ......... [ok]',
    'loading certifications.log .. [ok]',
    'loading badges/ ............. [ok]',
    'connecting tryhackme.com/api  [ok]',
    'starting session for: guest',
    ''
  ];
  var bootEl = document.getElementById('boot');
  var bootLinesEl = document.getElementById('boot-lines');
  var skipBtn = document.getElementById('skip-boot');

  function finishBoot(){
    bootEl.classList.add('hide');
    setTimeout(function(){ bootEl.style.display = 'none'; }, 650);
    startHero();
  }

  function runBoot(){
    if(reduceMotion){ finishBoot(); return; }
    var li = 0;
    function nextLine(){
      if(li >= bootLinesText.length){
        setTimeout(finishBoot, 350);
        return;
      }
      var span = document.createElement('div');
      span.textContent = bootLinesText[li];
      if(bootLinesText[li].indexOf('[ok]') === -1) span.className = 'dim';
      bootLinesEl.appendChild(span);
      li++;
      setTimeout(nextLine, 220);
    }
    nextLine();
  }
  skipBtn.addEventListener('click', finishBoot);
  runBoot();

  /* ---------- hero: glitch + typewriter roles ---------- */
  function startHero(){
    var glitchEl = document.getElementById('glitch-name');
    if(!reduceMotion){
      glitchEl.classList.add('run');
      setTimeout(function(){ glitchEl.classList.remove('run'); }, 1500);
    }

    var roles = [
      'network & security specialist',
      'linux enthusiast',
      'ccna certified',
      'tryhackme — top 2%',
      'pardus contributor'
    ];
    var roleEl = document.getElementById('role-type');
    if(reduceMotion){ roleEl.textContent = roles[0]; return; }
    var ri = 0, ci = 0, deleting = false;
    function tick(){
      var word = roles[ri];
      if(!deleting){
        ci++;
        roleEl.textContent = word.slice(0, ci);
        if(ci === word.length){ deleting = true; setTimeout(tick, 1400); return; }
      } else {
        ci--;
        roleEl.textContent = word.slice(0, ci);
        if(ci === 0){ deleting = false; ri = (ri+1) % roles.length; }
      }
      setTimeout(tick, deleting ? 35 : 65);
    }
    tick();
  }

  /* ---------- mobile nav ---------- */
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('term-nav');
  toggle.addEventListener('click', function(){
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      nav.classList.remove('open');
      nav.querySelectorAll('a').forEach(function(x){ x.classList.remove('current'); });
      a.classList.add('current');
    });
  });

  /* ---------- scroll reveal: log lines ---------- */
  document.querySelectorAll('.log-list li, .commit-list li, .badge-card').forEach(function(el){
    el.classList.add('reveal-line');
  });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry, idx){
      if(entry.isIntersecting){
        var el = entry.target;
        var siblings = Array.prototype.slice.call(el.parentElement.children);
        var delay = siblings.indexOf(el) * 70;
        setTimeout(function(){ el.classList.add('in'); }, delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.reveal-line').forEach(function(el){ io.observe(el); });

  /* ---------- count-up stats ---------- */
  var statIO = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      var el = entry.target;
      var target = parseInt(el.getAttribute('data-target'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      if(reduceMotion){ el.textContent = target + suffix; statIO.unobserve(el); return; }
      var start = null, duration = 900;
      function step(ts){
        if(!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        el.textContent = Math.floor(progress * target) + suffix;
        if(progress < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(step);
      statIO.unobserve(el);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.stat .num').forEach(function(el){ statIO.observe(el); });

  /* ---------- generative dark ambient pad ---------- */
  /* slow, evolving minor-key chord pad with soft filtered tones and a
     built-in delay for space. no percussion, no blips, no noise — just a
     moody bed of sound. no audio file needed. */
  var audio = { ctx:null, master:null, on:false, voices:null, filter:null,
                chordIndex:0, chordTimer:null };

  /* dark minor-key progression, low registers, in Hz: [sub, tone1, tone2, tone3] */
  var CHORDS = [
    [55.00, 110.00, 130.81, 164.81],  // A minor
    [43.65, 87.31,  110.00, 130.81],  // F major
    [65.41, 130.81, 164.81, 196.00],  // C major
    [41.20, 82.41,  98.00,  123.47]   // E minor
  ];
  var CHORD_HOLD = 11000;   // ms each chord is held
  var GLIDE_TIME = 6.5;     // seconds to glide into the next chord

  function buildAudioGraph(){
    var ctx = new (window.AudioContext || window.webkitAudioContext)();
    var master = ctx.createGain();
    master.gain.value = 0;

    /* slow-breathing lowpass filter darkens and softens every voice */
    var filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 700;
    var lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.045;
    var lfoGain = ctx.createGain();
    lfoGain.gain.value = 220;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    /* simple dark delay for a sense of space, without needing an impulse file */
    var delay = ctx.createDelay(2.0);
    delay.delayTime.value = 0.55;
    var feedback = ctx.createGain();
    feedback.gain.value = 0.32;
    var delayFilter = ctx.createBiquadFilter();
    delayFilter.type = 'lowpass';
    delayFilter.frequency.value = 1200;
    delay.connect(delayFilter);
    delayFilter.connect(feedback);
    feedback.connect(delay);

    filter.connect(master);
    filter.connect(delay);
    delay.connect(master);
    master.connect(ctx.destination);

    /* four sustained voices: a sub tone plus three chord tones, each with
       its own slow-attack gain so nothing ever "hits" — pure pad, no attack */
    var chord = CHORDS[0];
    var voices = chord.map(function(freq, i){
      var osc = ctx.createOscillator();
      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.value = freq;
      osc.detune.value = (Math.random() * 6) - 3;
      var gain = ctx.createGain();
      gain.gain.value = i === 0 ? 0.22 : 0.11;
      osc.connect(gain);
      gain.connect(filter);
      osc.start();
      return { osc: osc, gain: gain };
    });

    audio.ctx = ctx;
    audio.master = master;
    audio.filter = filter;
    audio.voices = voices;
    audio.chordIndex = 0;
  }

  function glideToChord(index){
    var chord = CHORDS[index];
    var now = audio.ctx.currentTime;
    audio.voices.forEach(function(voice, i){
      voice.osc.frequency.cancelScheduledValues(now);
      voice.osc.frequency.setValueAtTime(voice.osc.frequency.value, now);
      voice.osc.frequency.exponentialRampToValueAtTime(chord[i], now + GLIDE_TIME);
    });
  }

  function scheduleChords(){
    clearTimeout(audio.chordTimer);
    (function loop(){
      audio.chordTimer = setTimeout(function(){
        if(audio.on){
          audio.chordIndex = (audio.chordIndex + 1) % CHORDS.length;
          glideToChord(audio.chordIndex);
        }
        loop();
      }, CHORD_HOLD);
    })();
  }

  function setAudio(on){
    audio.on = on;
    var btn = document.getElementById('sound-toggle');
    btn.setAttribute('aria-pressed', on);
    if(on){
      if(!audio.ctx) buildAudioGraph();
      if(audio.ctx.state === 'suspended') audio.ctx.resume();
      audio.master.gain.cancelScheduledValues(audio.ctx.currentTime);
      audio.master.gain.setTargetAtTime(0.5, audio.ctx.currentTime, 3);
      scheduleChords();
    } else if(audio.ctx){
      audio.master.gain.cancelScheduledValues(audio.ctx.currentTime);
      audio.master.gain.setTargetAtTime(0.0001, audio.ctx.currentTime, 1.5);
      clearTimeout(audio.chordTimer);
    }
  }

  document.getElementById('sound-toggle').addEventListener('click', function(){
    setAudio(!audio.on);
  });

  /* try to start immediately on page load — some browsers permit this.
     if the browser blocks it (most will, until a gesture happens), fall
     back to starting on the very first click/keypress/tap anywhere,
     which is as close to "default on" as the web platform allows. */
  var autoStarted = false;
  function autoStartAudio(){
    if(autoStarted) return;
    autoStarted = true;
    setAudio(true);
    ['click','keydown','touchstart'].forEach(function(evt){
      window.removeEventListener(evt, autoStartAudio);
    });
  }
  autoStartAudio();
  if(!audio.ctx || audio.ctx.state === 'suspended'){
    autoStarted = false;
    ['click','keydown','touchstart'].forEach(function(evt){
      window.addEventListener(evt, autoStartAudio, { once:true, passive:true });
    });
  }

  /* ---------- interactive terminal ---------- */
  var ltOutput = document.getElementById('lt-output');
  var ltInput = document.getElementById('lt-input');
  function printLine(text, cls){
    var d = document.createElement('div');
    if(cls) d.className = cls;
    d.textContent = text;
    ltOutput.appendChild(d);
    ltOutput.scrollTop = ltOutput.scrollHeight;
  }
  printLine('welcome. this is a real (harmless) little shell. type "help" to see what it knows.');

  /* --- shared ip/location lookup, fetched once and cached --- */
  var ipDataPromise = null;
  function fetchIpData(){
    if(!ipDataPromise){
      ipDataPromise = fetch('https://ipwho.is/')
        .then(function(r){ return r.json(); })
        .then(function(data){ return (data && data.success !== false) ? data : null; })
        .catch(function(){ return null; });
    }
    return ipDataPromise;
  }

  function weatherCodeToText(code){
    var map = {
      0:'clear sky', 1:'mainly clear', 2:'partly cloudy', 3:'overcast',
      45:'fog', 48:'depositing rime fog',
      51:'light drizzle', 53:'drizzle', 55:'dense drizzle',
      61:'light rain', 63:'rain', 65:'heavy rain',
      71:'light snow', 73:'snow', 75:'heavy snow',
      80:'rain showers', 81:'rain showers', 82:'violent rain showers',
      95:'thunderstorm'
    };
    return map[code] || 'unknown conditions';
  }

  /* --- command history (up/down arrow recall, like a real shell) --- */
  var cmdHistory = [];
  var historyIndex = 0;

  var commands = {
    help: function(){
      return [
        'available commands:',
        '  whoami      about me',
        '  certs       list certifications',
        '  badges      list credly badges',
        '  stats       tryhackme stats',
        '  works       contributions & projects',
        '  contact     ways to reach out',
        '  myip        look up your public ip + isp',
        '  location    approximate location from your ip',
        '  weather     current weather at your location',
        '  sysinfo     your browser & device info',
        '  localtime   your local date, time & timezone',
        '  history     show commands you have run this session',
        '  echo <msg>  repeat a message back',
        '  sudo        try it',
        '  clear       clear the screen'
      ].join('\n');
    },
    whoami: function(){ return 'mert turk — senior it / network & security specialist. based in Türkiye.'; },
    certs: function(){ return 'cyber security, comptia pentest+, pre security, web fundamentals — all tryhackme-verified.'; },
    badges: function(){ return 'ccna: intro to networks / switching-routing-wireless / enterprise-security-automation.'; },
    stats: function(){ return 'tryhackme.com/p/turkmert — top 2%, rank 32442, 18 badges, 151 rooms completed.'; },
    works: function(){ return 'pardus gönüllü platformu, pardus forum, tryhackme community.'; },
    contact: function(){ return 'see the links above — tryhackme, credly, pardus.'; },
    sudo: function(){ return 'permission denied: nice try 😉'; },
    clear: function(){ ltOutput.innerHTML = ''; return null; },
    echo: function(args){ return args ? args : ''; },

    localtime: function(){
      var now = new Date();
      var tz = 'unknown';
      try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch(e){}
      return now.toString() + '\ntimezone: ' + tz;
    },

    sysinfo: function(){
      var ua = navigator.userAgent;
      var browser = 'unknown browser';
      if(ua.indexOf('Edg') > -1) browser = 'Edge';
      else if(ua.indexOf('Firefox') > -1) browser = 'Firefox';
      else if(ua.indexOf('Chrome') > -1) browser = 'Chrome';
      else if(ua.indexOf('Safari') > -1) browser = 'Safari';
      return [
        'browser: ' + browser,
        'platform: ' + (navigator.platform || 'unknown'),
        'screen: ' + screen.width + 'x' + screen.height,
        'language: ' + navigator.language,
        'connection: ' + (navigator.onLine ? 'online' : 'offline')
      ].join('\n');
    },

    history: function(){
      if(cmdHistory.length <= 1) return 'no earlier commands yet.';
      return cmdHistory.slice(0, -1).map(function(c, i){ return (i+1) + '  ' + c; }).join('\n');
    },

    myip: function(){
      printLine('resolving public ip address...');
      fetchIpData().then(function(data){
        if(!data){ printLine('could not resolve — request blocked or offline.', 'err'); return; }
        printLine('ip: ' + data.ip, 'ok');
        printLine('isp: ' + ((data.connection && data.connection.isp) || 'unknown'));
      });
      return null;
    },

    location: function(){
      printLine('triangulating approximate location from ip...');
      fetchIpData().then(function(data){
        if(!data){ printLine('location lookup failed.', 'err'); return; }
        printLine(data.city + ', ' + data.region + ', ' + data.country, 'ok');
        printLine('lat/long: ' + data.latitude.toFixed(3) + ', ' + data.longitude.toFixed(3));
        printLine('note: ip-based location is approximate, not gps-precise.');
      });
      return null;
    },

    weather: function(){
      printLine('fetching local weather...');
      fetchIpData().then(function(data){
        if(!data){ printLine('weather lookup failed — no location available.', 'err'); return; }
        return fetch('https://api.open-meteo.com/v1/forecast?latitude=' + data.latitude +
          '&longitude=' + data.longitude + '&current_weather=true')
          .then(function(r){ return r.json(); })
          .then(function(w){
            var cw = w && w.current_weather;
            if(!cw){ printLine('weather service returned no data.', 'err'); return; }
            printLine(data.city + ': ' + cw.temperature + '°C, ' + weatherCodeToText(cw.weathercode), 'ok');
            printLine('wind: ' + cw.windspeed + ' km/h');
          });
      }).catch(function(){ printLine('weather service unreachable.', 'err'); });
      return null;
    }
  };

  function handleCommand(raw){
    var trimmed = raw.trim();
    if(trimmed === '') return;
    printLine('$ ' + raw, 'echo');
    cmdHistory.push(trimmed);
    historyIndex = cmdHistory.length;
    var parts = trimmed.split(/\s+/);
    var cmd = parts[0].toLowerCase();
    var args = parts.slice(1).join(' ');
    if(commands[cmd]){
      var out = commands[cmd](args);
      if(out) printLine(out, 'ok');
    } else {
      printLine('command not found: ' + cmd + ' — type "help"', 'err');
    }
  }
  ltInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      handleCommand(ltInput.value);
      ltInput.value = '';
    } else if(e.key === 'ArrowUp'){
      e.preventDefault();
      if(historyIndex > 0){
        historyIndex--;
        ltInput.value = cmdHistory[historyIndex] || '';
      }
    } else if(e.key === 'ArrowDown'){
      e.preventDefault();
      if(historyIndex < cmdHistory.length - 1){
        historyIndex++;
        ltInput.value = cmdHistory[historyIndex] || '';
      } else {
        historyIndex = cmdHistory.length;
        ltInput.value = '';
      }
    }
  });
})();
