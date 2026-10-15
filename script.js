(() => {
  "use strict";

  /* ============================================================
     i18n — EN / FA. Every translatable string lives here; the HTML
     carries data-i18n (text), data-i18n-aria (aria-label) and
     data-i18n-content (meta content). Résumé downloads use the
     .cv-link class so each language serves its own PDF.
     ============================================================ */
  const I18N = {
    en: {
      "meta.title": "Nima Baselizadeh — AI & Computer Vision Engineer",
      "meta.description": "Nima Baselizadeh — machine learning engineer with 7 years of experience specializing in computer vision, generative AI, LLMs and vision-language models. Based in Hamadan, Iran.",
      "brand.name": "Nima Baselizadeh",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.research": "Research",
      "nav.contact": "Contact",
      "nav.cv": "Download CV",
      "nav.primary": "Primary navigation",
      "nav.mobile": "Mobile navigation",
      "nav.menu": "Toggle navigation menu",
      "lang.switch": "Site language",
      "cv.en": "nima_baselizadeh_en.pdf",
      "cv.fa": "nima_baselizadeh_pr.pdf",

      "hero.eyebrow": "AI & Computer Vision Engineer",
      "hero.name": "Nima Baselizadeh",
      "hero.lede": "Machine learning engineer with seven years of experience specializing in computer vision — from classical image processing to modern deep learning — with a growing focus on generative AI, large language models and multi-modal systems.",
      "hero.cta.contact": "Get in touch",
      "hero.cta.work": "View work",
      "hero.meta.location": "Hamadan, Iran",
      "hero.meta": "Contact details",
      "hero.scroll": "Scroll to about section",
      "term.whoami": "whoami",
      "term.whoami.out": "nima baselizadeh · ai & cv engineer",
      "term.focus": "cat focus.txt",
      "term.focus.out": "computer vision · generative ai · llm / vlm",
      "term.log": "git log --oneline -3",
      "term.log.out": "7 years · research + production · 10+ projects",

      "about.eyebrow": "01 — About",
      "about.title": "Teaching machines to see — carefully, and responsibly.",
      "about.p1": "I am a machine learning engineer with seven years of experience specializing in computer vision. My expertise spans classical image processing techniques and cutting-edge deep learning methods, and I work hard to keep up with a field that never stands still.",
      "about.p2": "Alongside professional work, I actively study generative AI — particularly large language models (LLMs) and vision-language models (VLMs) — and contribute to open-source projects. I am most excited about integrating LLMs and vision models into multi-modal solutions.",
      "about.p3": "I thrive in dynamic, innovative environments where I can collaborate with like-minded people, explore new ideas, and push the boundaries of what is possible in machine learning.",
      "about.facts": "Quick facts",
      "fact.location.label": "Based in",
      "fact.location": "Hamadan, Iran — open to remote",
      "fact.edu.label": "Education",
      "fact.edu": "M.Sc. Electrical Engineering, Malek Ashtar Univ. of Technology",
      "fact.focus.label": "Focus",
      "fact.focus": "Computer vision · Generative AI · Multi-modal",
      "fact.english.label": "English",
      "fact.english": "Professional working proficiency",
      "fact.now.label": "Currently",
      "fact.now": "Exploring LLM + vision multi-modal systems",

      "exp.eyebrow": "02 — Experience",
      "exp.title": "Roles & responsibilities.",
      "exp.1.date": "Dec 2023 — Apr 2024",
      "exp.1.role": "Artificial Intelligence Engineer",
      "exp.1.org": "Nazru Company · Tehran, Iran",
      "exp.1.desc": "Built generative-model pipelines for object and shadow removal in satellite imagery, taking research prototypes toward production quality.",
      "exp.2.date": "Sep 2022 — Feb 2024",
      "exp.2.role": "Research Assistant",
      "exp.2.org": "Malek Ashtar University of Technology · Tehran, Iran",
      "exp.2.desc": "Research associate working on domain adaptation from simulation to real space for object detection in aerial images, with results published as preprints.",
      "exp.3.date": "Jan 2020 — Sep 2020",
      "exp.3.role": "Teaching Assistant — Deep Learning",
      "exp.3.org": "Malek Ashtar University of Technology · Tehran, Iran",
      "exp.3.desc": "Assisted the graduate deep learning course: lab sessions, project supervision and evaluation.",
      "exp.4.date": "Sep 2019 — Jan 2020",
      "exp.4.role": "Teaching Assistant — Machine Learning",
      "exp.4.org": "Malek Ashtar University of Technology · Tehran, Iran",
      "exp.4.desc": "Assisted the machine learning course: lab sessions, assignments and evaluation.",

      "edu.eyebrow": "03 — Education",
      "edu.title": "Academic background.",
      "edu.1.degree": "M.Sc. · Electrical Engineering",
      "edu.1.field": "Telecommunications Systems",
      "edu.1.school": "Malek Ashtar University of Technology · Tehran, Iran",
      "edu.1.meta": "2017 — 2021 · GPA 16.97 / 20",
      "edu.1.note": "Thesis: improving the accuracy of man-made object detection in aerial and satellite images using deep learning.",
      "edu.2.degree": "B.Sc. · Electrical Engineering",
      "edu.2.field": "Electrical Engineering",
      "edu.2.school": "Bu-Ali Sina University · Iran",
      "edu.2.meta": "2012 — 2016 · GPA 16.55 / 20",
      "edu.2.note": "Final project: temperature control system based on an AVR microcontroller.",
      "edu.3.degree": "Diploma",
      "edu.3.field": "Mathematics & Physics",
      "edu.3.school": "Ayatollah Madani High School · Hamadan, Iran",
      "edu.3.meta": "2008 — 2012 · GPA 19.64 / 20",

      "skills.eyebrow": "04 — Skills",
      "skills.title": "Tools of the trade.",
      "skills.group1": "Programming & ML",
      "skills.group2": "Tools & Platforms",
      "skills.group3": "Domains",
      "chip.mv": "Machine vision",
      "chip.od": "Object detection",
      "chip.is": "Instance segmentation",
      "chip.mi": "Medical imaging",
      "chip.gen": "Generative AI",
      "chip.vlm": "LLMs & VLMs",
      "chip.da": "Domain adaptation",

      "proj.eyebrow": "05 — Projects",
      "proj.title": "Selected work.",
      "proj.1.tag": "M.Sc. Thesis",
      "proj.1.date": "Feb 2022",
      "proj.1.title": "Man-Made Object Detection in Aerial & Satellite Imagery",
      "proj.1.desc": "Master's thesis on improving the detection accuracy of man-made objects in aerial and satellite images using deep learning methods — the foundation of my research direction in overhead imagery.",
      "proj.1.for": "For: Malek Ashtar University of Technology",
      "proj.2.tag": "Generative AI",
      "proj.2.date": "Dec 2023",
      "proj.2.title": "Object & Shadow Removal in Satellite Images",
      "proj.2.desc": "Generative inpainting pipeline that removes unwanted objects and their cast shadows from satellite imagery.",
      "proj.2.for": "For: Nazru Company",
      "proj.3.tag": "Domain Adaptation",
      "proj.3.date": "Oct 2022",
      "proj.3.title": "Sim-to-Real Adaptation for Aerial Object Detection",
      "proj.3.desc": "Bridged simulation and real-world domains so detectors trained on synthetic data generalize to real aerial imagery.",
      "proj.3.for": "For: Malek Ashtar University of Technology",
      "proj.4.tag": "Medical Imaging",
      "proj.4.date": "Jul 2024",
      "proj.4.title": "Cerebral Hemorrhage Instance Segmentation",
      "proj.4.desc": "Deep-learning instance segmentation of cerebral hemorrhage regions in medical scans.",
      "proj.4.for": "Research project",
      "proj.5.tag": "Deep Learning",
      "proj.5.date": "Sep 2023",
      "proj.5.title": "Emotion Recognition: CNNs + Transformers",
      "proj.5.desc": "Hybrid convolutional–transformer network recognizing emotions from facial imagery.",
      "proj.5.for": "Personal interest",
      "proj.6.tag": "Medical Imaging",
      "proj.6.date": "Aug 2023",
      "proj.6.title": "Missing Tooth Area Detection for Implant Planning",
      "proj.6.desc": "Detects missing tooth regions in panoramic radiographic images to support dental implant planning.",
      "proj.6.for": "Academic research",
      "proj.7.tag": "Medical Imaging",
      "proj.7.date": "Jun 2023",
      "proj.7.title": "Dental Caries Detection",
      "proj.7.desc": "Deep neural network detecting dental caries in radiographic images.",
      "proj.7.for": "Academic research",
      "proj.8.tag": "Computer Vision",
      "proj.8.date": "Jul 2020",
      "proj.8.title": "License Plate Detection on Intercity Roads",
      "proj.8.desc": "Automatic number-plate recognition pipeline for vehicles on highways.",
      "proj.8.for": "Industry project",
      "proj.9.tag": "Computer Vision",
      "proj.9.date": "Jun 2020",
      "proj.9.title": "AI Meter Reading for Electricity & Gas",
      "proj.9.desc": "Automated reading of electricity and gas meters from images.",
      "proj.9.for": "Industry project",
      "proj.10.tag": "Computer Vision",
      "proj.10.date": "Dec 2019",
      "proj.10.title": "Face Recognition System",
      "proj.10.desc": "Face recognition pipeline developed during my research assistantship.",
      "proj.10.for": "For: Malek Ashtar University of Technology",

      "proj.11.tag": "Live Product",
      "proj.11.date": "Sep 2025 — Oct 2026",
      "proj.11.title": "PelakGuard — Real-Time License Plate Detection, Masking & Reading",
      "proj.11.desc": "A live product that protects car owners' privacy when they publish vehicle ads: upload a photo, the plate is detected and masked (blur, redaction box, or custom logo), and the protected image is ready in seconds. Detection and recognition run on my own lightweight models — trained on a Persian plate dataset and optimized for real-time use — with four engines for standard, angled/rotated, OCR (Persian/English/Arabic) and hybrid cases, an interactive box editor, and a full Persian/English interface.",
      "proj.11.link.live": "Live product — pelakgard.ir",
      "proj.12.tag": "Speech AI",
      "proj.12.date": "Sep — Oct 2026",
      "proj.12.title": "DikteYar — Offline Persian Speech Dictation for Windows",
      "proj.12.desc": "A Windows dictation tool that turns Persian speech into text in any program with one global hotkey — fully offline on the user's machine, with the live transcription beside the cursor. Built on an offline speech-recognition model (Shenava-Koochik, 114M parameters, via sherpa-onnx) running in real time on CPU, with voice punctuation commands, spoken-number to digit conversion, and stability work that cut the final word error rate from 34.1% to 30% in real-speech tests.",
      "proj.12.link.repo": "GitHub",
      "proj.13.tag": "Speech AI",
      "proj.13.date": "Sep 2026",
      "proj.13.title": "ParSiGo — Offline Persian Text-to-Speech with Voice Cloning",
      "proj.13.desc": "A Persian text-to-speech tool that turns any text into natural speech offline on CPU and clones a new voice from a few seconds of reference audio. The model was optimized and exported to ONNX Runtime to run without PyTorch — cutting dependencies from ~1.2 GB to ~200 MB with output quality identical to the original engine — behind a Persian RTL interface with phoneme editing, built-in and user-uploaded voices, and long-text support. Model package and demo published on Hugging Face, and the project has 180+ stars on GitHub.",
      "proj.13.link.repo": "GitHub",
      "proj.14.tag": "LLM / RAG",
      "proj.14.date": "Jul — Nov 2025",
      "proj.14.title": "DocQAI — Local Question-Answering over Persian Pharmaceutical References",
      "proj.14.desc": "A question-answering assistant for Persian pharmacy reference content: ask about a drug in natural Persian — indications, dosage, brands, side effects — and get answers grounded in the source text with citations, running entirely locally so sensitive material never leaves the machine. Includes the full RAG pipeline (ingestion, chunking, Qwen3 embeddings via Ollama, semantic retrieval), a bilingual Persian/English interface, chat sessions, and a documents dashboard.",
      "proj.14.link.repo": "GitHub",

      "res.eyebrow": "06 — Research",
      "res.title": "Preprints & publications.",
      "res.read": "Read",
      "res.1.meta": "Preprint · March 2023 · Preprints.org",
      "res.1.desc": "A loss function aimed at false-positive reduction in detection models.",
      "res.2.meta": "Preprint · October 2022 · Preprints.org",
      "res.2.desc": "Proposes the active identity function as an activation function in neural networks.",

      "cred.eyebrow": "07 — Credentials",
      "cred.title": "Certificates & honors.",
      "cred.certs": "Certificates",
      "cred.c1.date": "Jun 2020",
      "cred.c2.date": "Jul 2020",
      "cred.c3.date": "Apr 2020",
      "cred.c4.date": "Feb 2020",
      "cred.honors": "Honors",
      "cred.h1.rank": "Rank 811",
      "cred.h1.desc": "Master's entrance exam, among nationwide participants",
      "cred.h1.date": "Sep 2017",
      "cred.h2.rank": "Rank 2600",
      "cred.h2.desc": "Bachelor's entrance exam, among nationwide participants",
      "cred.h2.date": "Sep 2012",

      "contact.eyebrow": "08 — Contact",
      "contact.title": "Let's build something that sees the world better.",
      "contact.lede": "Open to roles and collaborations in machine learning and computer vision — full-time, contract or research. The fastest way to reach me is email.",
      "contact.email": "nimabaselizadeh@gmail.com",
      "contact.phone": "+98 937 266 5686",
      "contact.cv": "Download CV (PDF)",
      "ref.label": "References",
      "ref.name": "Ali Akbar Kiaei",
      "ref.role": "Post-doctorate in Artificial Intelligence for Medicine",
      "ref.org": "Sharif University of Technology",
      "ref.note": "Additional references available on request.",

      "footer.name": "Nima Baselizadeh",
      "footer.city": "Hamadan, Iran",
      "footer.note": "Built from scratch — HTML, CSS & a little JavaScript. Hosted on GitHub Pages.",
      "footer.top": "Back to top ↑",
    },

    fa: {
      "meta.title": "نیما باسلی زاده — مهندس هوش مصنوعی و بینایی کامپیوتر",
      "meta.description": "نیما باسلی زاده — مهندس یادگیری ماشین با هفت سال سابقه کار و تخصص در بینایی کامپیوتر، هوش مصنوعی مولد، مدل‌های زبانی بزرگ و مدل‌های زبانی-بصری. مقیم همدان، ایران.",
      "brand.name": "نیما باسلی زاده",
      "nav.about": "دربارهٔ من",
      "nav.experience": "سوابق شغلی",
      "nav.skills": "مهارت‌ها",
      "nav.projects": "پروژه‌ها",
      "nav.research": "تحقیقات",
      "nav.contact": "تماس",
      "nav.cv": "دانلود رزومه",
      "nav.primary": "ناوبری اصلی",
      "nav.mobile": "ناوبری موبایل",
      "nav.menu": "باز و بسته کردن منو",
      "lang.switch": "زبان سایت",
      "cv.en": "nima_baselizadeh_en.pdf",
      "cv.fa": "nima_baselizadeh_pr.pdf",

      "hero.eyebrow": "مهندس هوش مصنوعی و بینایی کامپیوتر",
      "hero.name": "نیما باسلی زاده",
      "hero.lede": "مهندس یادگیری ماشین با هفت سال سابقه کار و تخصص در بینایی کامپیوتر — از پردازش کلاسیک تصویر تا یادگیری عمیق مدرن — با تمرکز رو به رشد بر هوش مصنوعی مولد، مدل‌های زبانی بزرگ و سامانه‌های چندوجهی.",
      "hero.cta.contact": "با من تماس بگیرید",
      "hero.cta.work": "دیدن کارها",
      "hero.meta.location": "همدان، ایران",
      "hero.meta": "راه‌های ارتباط",
      "hero.scroll": "رفتن به بخش دربارهٔ من",
      "term.whoami": "whoami",
      "term.whoami.out": "نیما باسلی زاده · مهندس هوش مصنوعی و بینایی کامپیوتر",
      "term.focus": "cat focus.txt",
      "term.focus.out": "بینایی کامپیوتر · هوش مصنوعی مولد · LLM / VLM",
      "term.log": "git log --oneline -3",
      "term.log.out": "۷ سال سابقه · پژوهش + تولید · بیش از ۱۰ پروژه",

      "about.eyebrow": "۰۱ — دربارهٔ من",
      "about.title": "به ماشین‌ها دیدن را یاد می‌دهم.",
      "about.p1": "من یک مهندس یادگیری ماشین با هفت سال سابقه کار هستم که تخصص اصلی‌ام در حوزهٔ بینایی کامپیوتر است. هم با تکنیک‌های کلاسیک پردازش تصویر کار کرده‌ام و هم با روش‌های مدرن این حوزه آشنا هستم. همیشه سعی می‌کنم جدیدترین فناوری‌های این حوزه را روز نگه دارم و تقویت مستمر مهارت‌ها را بخش لذت‌بخش کارم بدانم.",
      "about.p2": "در کنار کار حرفه‌ای، به هوش مصنوعی مولد — به‌ویژه مدل‌های زبانی بزرگ (LLM) و مدل‌های زبانی-بصری (VLM) — علاقه‌مندم؛ فعالانه در این حوزه‌ها مطالعه می‌کنم و در پروژه‌های متن‌باز مشارکت می‌کنم. مشتاقم مدل‌های زبانی و بصری را با هم ترکیب کنم تا راهکارهای چندوجهی پیشرفته ارائه دهم.",
      "about.p3": "مشتاق حضور در محیط‌های پویا و نوآورانه‌ام؛ جایی که بتوانم از مهارت‌هایم استفاده کنم و با متخصصانی هم‌فکر ایده‌های تازه را کشف کنیم و مرزهای ممکن در یادگیری ماشین و هوش مصنوعی را جابجا کنیم.",
      "about.facts": "نکات کلیدی",
      "fact.location.label": "محل زندگی",
      "fact.location": "همدان، ایران — آمادهٔ کار دورکار",
      "fact.edu.label": "تحصیلات",
      "fact.edu": "کارشناسی ارشد مهندسی برق، دانشگاه صنعتی مالک اشتر",
      "fact.focus.label": "حوزهٔ تمرکز",
      "fact.focus": "بینایی کامپیوتر · هوش مصنوعی مولد · سامانه‌های چندوجهی",
      "fact.english.label": "زبان انگلیسی",
      "fact.english": "سطح حرفه‌ای کاری",
      "fact.now.label": "در حال حاضر",
      "fact.now": "مطالعهٔ سامانه‌های چندوجهی LLM + بینایی",

      "exp.eyebrow": "۰۲ — سوابق شغلی",
      "exp.title": "نقش‌ها و مسئولیت‌ها.",
      "exp.1.date": "دی ۱۴۰۲ — اردیبهشت ۱۴۰۳",
      "exp.1.role": "مهندس هوش مصنوعی",
      "exp.1.org": "شرکت نازرو · تهران، ایران",
      "exp.1.desc": "طراحی و توسعهٔ مدل‌های مولد برای حذف اشیاء و سایه در تصاویر ماهواره‌ای، با تمرکز بر رساندن پروتوتایپ‌های تحقیقاتی به سطح تولید.",
      "exp.2.date": "مهر ۱۴۰۱ — آذر ۱۴۰۲",
      "exp.2.role": "همکار پژوهشی",
      "exp.2.org": "دانشگاه صنعتی مالک اشتر · تهران، ایران",
      "exp.2.desc": "پژوهش در حوزهٔ تطبیق دامنه از فضای شبیه‌سازی به فضای واقعی برای تشخیص اشیا در تصاویر هوایی؛ نتایج به شکل پری‌پرینت منتشر شد.",
      "exp.3.date": "سال ۱۳۹۹ · استاد: دکتر علی اکبر کیایی",
      "exp.3.role": "تدریس‌یار درس یادگیری عمیق",
      "exp.3.org": "دانشگاه صنعتی مالک اشتر · تهران، ایران",
      "exp.3.desc": "همراهی در درسٔ کارشناسی ارشد یادگیری عمیق: برگزاری جلسات آزمایشگاه، راهنمایی پروژه‌ها و ارزیابی.",
      "exp.4.date": "سال ۱۳۹۸ · استاد: دکتر علی اکبر کیایی",
      "exp.4.role": "تدریس‌یار درس یادگیری ماشین",
      "exp.4.org": "دانشگاه صنعتی مالک اشتر · تهران، ایران",
      "exp.4.desc": "همراهی در درسٔ یادگیری ماشین: برگزاری جلسات آزمایشگاه، تکالیف و ارزیابی.",

      "edu.eyebrow": "۰۳ — تحصیلات",
      "edu.title": "سوابق تحصیلی.",
      "edu.1.degree": "کارشناسی ارشد · مهندسی برق",
      "edu.1.field": "مخابرات سیستم",
      "edu.1.school": "دانشگاه صنعتی مالک اشتر · تهران، ایران",
      "edu.1.meta": "۱۳۹۶ — ۱۴۰۰ · معدل ۱۶،۹۷ از ۲۰",
      "edu.1.note": "پایان‌نامه: بهبود دقت تشخیص اشیای ساخت بشر در تصاویر هوایی و ماهواره‌ای با روش‌های یادگیری عمیق.",
      "edu.2.degree": "کارشناسی · مهندسی برق",
      "edu.2.field": "مهندسی برق",
      "edu.2.school": "دانشگاه بوعلی سینا · همدان، ایران",
      "edu.2.meta": "۱۳۹۱ — ۱۳۹۵ · معدل ۱۶،۵۵ از ۲۰",
      "edu.2.note": "پروژهٔ پایانی: سامانهٔ کنترل دما با میکروکنترلر AVR.",
      "edu.3.degree": "دیپلم",
      "edu.3.field": "ریاضی و فیزیک",
      "edu.3.school": "دبیرستان آیت‌الله مدنی · همدان، ایران",
      "edu.3.meta": "۱۳۸۷ — ۱۳۹۱ · معدل ۱۹،۶۴ از ۲۰",

      "skills.eyebrow": "۰۴ — مهارت‌ها",
      "skills.title": "ابزارهای کار.",
      "skills.group1": "برنامه‌نویسی و یادگیری ماشین",
      "skills.group2": "ابزارها و پلتفرم‌ها",
      "skills.group3": "حوزه‌های تخصصی",
      "chip.mv": "بینی ماشین",
      "chip.od": "تشخیص اشیا",
      "chip.is": "قطعه‌بندی نمونه‌ای",
      "chip.mi": "تصویربرداری پزشکی",
      "chip.gen": "هوش مصنوعی مولد",
      "chip.vlm": "مدل‌های زبانی و زبانی-بصری",
      "chip.da": "تطبیق دامنه",

      "proj.eyebrow": "۰۵ — پروژه‌ها",
      "proj.title": "گزیدهٔ پروژه‌ها.",
      "proj.1.tag": "پایان‌نامهٔ کارشناسی ارشد",
      "proj.1.date": "بهمن ۱۴۰۰",
      "proj.1.title": "بهبود دقت تشخیص اشیای ساخت بشر در تصاویر هوایی و ماهواره‌ای",
      "proj.1.desc": "پایان‌نامهٔ کارشناسی ارشد دربارهٔ بهبود دقت تشخیص اشیای ساخت بشر در تصاویر هوایی و ماهواره‌ای با روش‌های یادگیری عمیق — بنیاد مسیر پژوهشی من در تصاویر هوایی.",
      "proj.1.for": "کارفرما: دانشگاه صنعتی مالک اشتر",
      "proj.2.tag": "هوش مصنوعی مولد",
      "proj.2.date": "آذر ۱۴۰۲",
      "proj.2.title": "حذف اشیاء و سایه در تصاویر ماهواره‌ای",
      "proj.2.desc": "خط تولید مدل‌های مولد برای حذف اشیاء ناخواسته و سایه‌های آن‌ها از تصاویر ماهواره‌ای.",
      "proj.2.for": "کارفرما: شرکت نازرو",
      "proj.3.tag": "تطبیق دامنه",
      "proj.3.date": "مهر ۱۴۰۱",
      "proj.3.title": "تطبیق دامنه از شبیه‌سازی به واقعیت برای تشخیص اشیا در تصاویر هوایی",
      "proj.3.desc": "پر کردن فاصلهٔ دامنهٔ شبیه‌سازی و دنیای واقعی تا مدل‌های آموزش‌دیده روی دادهٔ مصنوعی روی تصاویر واقعی هوایی کارایی داشته باشند.",
      "proj.3.for": "کارفرما: دانشگاه صنعتی مالک اشتر",
      "proj.4.tag": "تصویربرداری پزشکی",
      "proj.4.date": "تیر ۱۴۰۳",
      "proj.4.title": "قطعه‌بندی نمونه‌ای نواحی خونریزی مغزی",
      "proj.4.desc": "قطعه‌بندی نمونه‌ای نواحی خونریزی مغزی در تصاویر CT با روش‌های یادگیری عمیق.",
      "proj.4.for": "پروژهٔ شخصی",
      "proj.5.tag": "یادگیری عمیق",
      "proj.5.date": "شهریور ۱۴۰۲",
      "proj.5.title": "تشخیص احساسات با ترکیب CNN و ترانسفورماتور",
      "proj.5.desc": "شبکهٔ ترکیبی کانولوشنی-ترانسفورماتور برای تشخیص احساسات از تصاویر چهره.",
      "proj.5.for": "علاقهٔ شخصی",
      "proj.6.tag": "تصویربرداری پزشکی",
      "proj.6.date": "مرداد ۱۴۰۲",
      "proj.6.title": "تشخیص نواحی دندان مفقود برای برنامه‌ریزی ایمپلنت",
      "proj.6.desc": "تشخیص نواحی دندان از دست رفته در تصاویر رادیوگرافی پانورامیک برای پشتیبانی از برنامه‌ریزی ایمپلنت دندان.",
      "proj.6.for": "پروژهٔ پژوهشی",
      "proj.7.tag": "تصویربرداری پزشکی",
      "proj.7.date": "خرداد ۱۴۰۲",
      "proj.7.title": "تشخیص پوسیدگی دندان",
      "proj.7.desc": "تشخیص پوسیدگی دندان در تصاویر رادیوگرافیک با شبکهٔ عصبی عمیق.",
      "proj.7.for": "پروژهٔ پژوهشی",
      "proj.8.tag": "بینایی کامپیوتر",
      "proj.8.date": "تیر ۱۳۹۹",
      "proj.8.title": "تشخیص پلاک خودرو در جاده‌های بین‌شهری",
      "proj.8.desc": "سامانهٔ بازشناسی خودکار پلاک خودروها در بزرگراه‌ها.",
      "proj.8.for": "پروژهٔ صنعتی",
      "proj.9.tag": "بینایی کامپیوتر",
      "proj.9.date": "خرداد ۱۳۹۹",
      "proj.9.title": "خوانش هوشمند کنتور برق و گاز",
      "proj.9.desc": "خوانش خودکار کنتورهای برق و گاز از روی تصویر.",
      "proj.9.for": "پروژهٔ صنعتی",
      "proj.10.tag": "بینایی کامپیوتر",
      "proj.10.date": "دی ۱۳۹۸",
      "proj.10.title": "سامانهٔ بازشناسایی چهره",
      "proj.10.desc": "خط لولهٔ بازشناسی چهرهٔ توسعه‌یافته در دوران همکاری پژوهشی.",
      "proj.10.for": "کارفرما: دانشگاه صنعتی مالک اشتر",

      "proj.11.tag": "محصول زنده",
      "proj.11.date": "شهریور ۱۴۰۴ — مهر ۱۴۰۵",
      "proj.11.title": "پلاک‌گارد — تشخیص و پوشاندن پلاک خودرو به‌صورت بلادرنگ",
      "proj.11.desc": "محصول زنده‌ای که حریم خصوصی مالکان خودرو را هنگام انتشار آگهی حفظ می‌کند: کاربر عکس را آپلود می‌کند، پلاک شناسایی و با تارکردن، جعبهٔ مشکی یا لوگو دلخواه پوشانده می‌شود و تصویر نهایی در چند ثانیه آماده است. تشخیص و خواندن با مدل‌های سبک اختصاصی خودم انجام می‌شود که روی دادهٔ پلاک فارسی آموزش دیده و برای اجرای بلادرنگ بهینه شده‌اند — چهار موتور برای موارد استاندارد، کج و چرخیده، پلاک‌خوان (فارسی/انگلیسی/عربی) و ترکیبی — همراه ویرایشگر دستی کادرها و رابط کامل فارسی و انگلیسی.",
      "proj.11.link.live": "محصول زنده — pelakgard.ir",
      "proj.12.tag": "هوش مصنوعی گفتاری",
      "proj.12.date": "شهریور — مهر ۱۴۰۵",
      "proj.12.title": "دیکته‌یار — دیکتهٔ آفلاین گفتار فارسی برای ویندوز",
      "proj.12.desc": "ابزاری که در هر برنامهٔ ویندوز با یک کلید میان‌بر سراسری و کاملاً آفلاین، گفتار فارسی را به متن تبدیل و درج می‌کند و متن زنده را کنار مکان‌نما نشان می‌دهد. ساخته‌شده روی موتور آفلاین تشخیص گفتار (مدل Shenava-Koochik با ۱۱۴ میلیون پارامتر، از طریق sherpa-onnx) با اجرای بلادرنگ روی CPU، همراه دستورهای نگارشی گفتاری، تبدیل عدد گفته‌شده به رقم و بهبود پایداری که نرخ خطای متن نهایی را در آزمون گفتار واقعی از ۳۴٫۱٪ به ۳۰٪ رساند.",
      "proj.12.link.repo": "گیت‌هاب",
      "proj.13.tag": "هوش مصنوعی گفتاری",
      "proj.13.date": "شهریور ۱۴۰۵",
      "proj.13.title": "پارسی‌گو — تبدیل متن فارسی به گفتار آفلاین با کلون صدا",
      "proj.13.desc": "ابزاری که هر متن فارسی را آفلاین روی CPU به گفتار طبیعی تبدیل می‌کند و از چند ثانیه صدای مرجع، صدای تازه را کلون می‌کند. مدل بهینه و به ONNX Runtime صادر شد تا بدون PyTorch اجرا شود — حجم وابستگی‌ها از حدود ۱٫۲ گیگابایت به ۲۰۰ مگابایت کم شد و کیفیت خروجی برابر موتور اصلی ماند — پشت رابط فارسی راست‌به‌چپ با ویرایش فونم، صداهای آماده و آپلازی کاربر و پشتیبانی از متن بلند. پکیج مدل و دموی آنلاین روی Hugging Face منتشر شد و پروژه بیش از ۱۸۰ ستاره در گیت‌هاب گرفته است.",
      "proj.13.link.repo": "گیت‌هاب",
      "proj.14.tag": "مدل زبانی / RAG",
      "proj.14.date": "مرداد — آبان ۱۴۰۴",
      "proj.14.title": "دک‌کیوای‌آی — پرسش‌و‌پاسخ محلی روی مرجع دارویی فارسی",
      "proj.14.desc": "دستیاری که روی کتابچهٔ مرجع دارویی فارسی به سؤال‌ها پاسخ می‌دهد: کاربر با زبان فارسی دربارهٔ یک دارو می‌پرسد — کاربرد، دوز مصرف، برندها، عوارض — و پاسخ را همراه با استناد به متن منبع می‌گیرد؛ همه چیز کاملاً محلی اجرا می‌شود و محتوای پزشکی حساس از دستگاه خارج نمی‌شود. شامل خط لولهٔ کامل RAG (پردازش، قطعه‌بندی، embedding با Qwen3 روی Ollama، بازیابی معنایی)، رابط دوزبانه فارسی و انگلیسی، جلسات چت و داشبورد مدیریت اسناد.",
      "proj.14.link.repo": "گیت‌هاب",

      "res.eyebrow": "۰۶ — تحقیقات",
      "res.title": "پری‌پرینت‌ها و انتشارات.",
      "res.read": "مطالعه",
      "res.1.meta": "پری‌پرینت · اسفند ۱۴۰۱ · Preprints.org",
      "res.1.desc": "تابع زیانی برای کاهش مثبت‌های کاذب در مدل‌های تشخیص اشیا.",
      "res.2.meta": "پری‌پرینت · مهر ۱۴۰۱ · Preprints.org",
      "res.2.desc": "پیشنهاد تابع هویت فعال (active identity function) به‌عنوان تابع فعال‌ساز در شبکه‌های عصبی.",

      "cred.eyebrow": "۰۷ — گواهینامه‌ها و افتخارات",
      "cred.title": "گواهینامه‌ها و افتخارات.",
      "cred.certs": "گواهینامه‌ها",
      "cred.c1.date": "خرداد ۱۳۹۹",
      "cred.c2.date": "تیر ۱۳۹۹",
      "cred.c3.date": "فروردین ۱۳۹۹",
      "cred.c4.date": "بهمن ۱۳۹۸",
      "cred.honors": "افتخارات",
      "cred.h1.rank": "رتبه ۸۱۱",
      "cred.h1.desc": "کنکور کارشناسی ارشد، سطح کشور",
      "cred.h1.date": "شهریور ۱۳۹۶",
      "cred.h2.rank": "رتبه ۲۶۰۰",
      "cred.h2.desc": "کنکور کارشناسی، سطح کشور",
      "cred.h2.date": "شهریور ۱۳۹۱",

      "contact.eyebrow": "۰۸ — تماس",
      "contact.title": "بیایید چیزی بسازیم که دنیا را بهتر ببیند.",
      "contact.lede": "برای همکاری در زمینهٔ یادگیری ماشین و بینایی کامپیوتر — تمام‌وقت، پروژه‌ای یا پژوهشی — در خدمتم. سریع‌ترین راه ارتباط، ایمیل است.",
      "contact.email": "nimabaselizadeh@gmail.com",
      "contact.phone": "+۹۸ ۹۳۷ ۲۶۶ ۵۶۸۶",
      "contact.cv": "دانلود رزومه (PDF)",
      "ref.label": "معرف‌ها",
      "ref.name": "علی اکبر کیایی",
      "ref.role": "پسادکترا هوش مصنوعی در پزشکی",
      "ref.org": "دانشگاه صنعتی شریف",
      "ref.note": "معرف‌های بیشتر در صورت درخواست ارائه می‌شود.",

      "footer.name": "نیما باسلی زاده",
      "footer.city": "همدان، ایران",
      "footer.note": "ساخته‌شده از صفر — HTML، CSS و کمی JavaScript. میزبانی روی GitHub Pages.",
      "footer.top": "بازگشت به بالا ↑",
    },
  };

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const toFaDigits = (s) => String(s).replace(/\d/g, (d) => FA_DIGITS[Number(d)]);

  const getLang = () => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "fa" || saved === "en") return saved;
    } catch (e) { /* storage unavailable */ }
    return (navigator.language || "en").toLowerCase().startsWith("fa") ? "fa" : "en";
  };

  const applyLang = (lang) => {
    const dict = I18N[lang] || I18N.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });
    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
      const key = el.getAttribute("data-i18n-content");
      if (dict[key] != null) el.setAttribute("content", dict[key]);
    });
    document.querySelectorAll(".cv-link").forEach((el) => {
      el.setAttribute("href", lang === "fa" ? dict["cv.fa"] : dict["cv.en"]);
    });

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.title = dict["meta.title"];

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });

    try { localStorage.setItem("lang", lang); } catch (e) { /* storage unavailable */ }

    const year = document.getElementById("year");
    if (year) year.textContent = lang === "fa" ? toFaDigits(new Date().getFullYear()) : String(new Date().getFullYear());
  };

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });

  applyLang(getLang());

  /* ---------- header state + scroll progress ---------- */
  const header = document.querySelector(".site-header");
  const progressBar = document.querySelector(".scroll-progress-bar");

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 8);
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile navigation ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  const setMobileNav = (open) => {
    navToggle.setAttribute("aria-expanded", String(open));
    mobileNav.hidden = !open;
  };

  navToggle.addEventListener("click", () => {
    setMobileNav(navToggle.getAttribute("aria-expanded") !== "true");
  });

  mobileNav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => setMobileNav(false))
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      setMobileNav(false);
      navToggle.focus();
    }
  });

  /* ---------- reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- active nav link ---------- */
  const navLinks = Array.from(document.querySelectorAll(".site-nav a, .mobile-nav a"));

  const setActive = (id) => {
    navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
  };

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    document.querySelectorAll("main section[id]").forEach((section) => spy.observe(section));
  }

  /* ---------- hero background: drifting node network ---------- */
  const canvas = document.querySelector(".hero-canvas");

  if (canvas && !prefersReduced) {
    const ctx = canvas.getContext("2d");
    const hero = canvas.parentElement;
    let width = 0;
    let height = 0;
    let nodes = [];
    let raf = null;
    let onScreen = true;

    const config = () => {
      const small = window.innerWidth < 720;
      return {
        count: small ? 24 : 46,
        linkDist: small ? 95 : 125,
        speed: small ? 0.16 : 0.24,
      };
    };

    let cfg = config();

    const seed = () => {
      const rand = (min, max) => min + Math.random() * (max - min);
      nodes = Array.from({ length: cfg.count }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-cfg.speed, cfg.speed),
        vy: rand(-cfg.speed, cfg.speed),
        r: rand(0.7, 2.1),
        accent: Math.random() < 0.16,
      }));
    };

    const resize = () => {
      cfg = config();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = hero.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < cfg.linkDist) {
            ctx.strokeStyle = `rgba(148, 163, 184, ${(1 - dist / cfg.linkDist) * 0.09})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = n.accent ? "rgba(245, 180, 97, 0.65)" : "rgba(154, 164, 184, 0.5)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (raf === null && onScreen && !document.hidden) raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (raf !== null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    };

    resize();
    start();

    let resizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
      }, 150);
    });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => {
        onScreen = entry.isIntersecting;
        onScreen ? start() : stop();
      }).observe(hero);
    }

    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  }
})();
