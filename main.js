/* =====================================================================
 * 삼일정밀 홈페이지 설정
 * ---------------------------------------------------------------------
 * 회사 정보는 전부 아래 SITE 객체 한 곳에서 바꿉니다.
 * "[ ... 입력]" 처럼 대괄호로 시작하는 값은 아직 모르는 정보(자리표시)라
 * 페이지에 노란색으로 눈에 띄게 표시됩니다. 실제 값으로 바꾸면 사라집니다.
 * ===================================================================== */
const SITE = {
  companyName: "삼일정밀",
  companyNameEn: "SAMIL PRECISION",
  slogan: "세 번의 정밀함, 한 번의 단순함",
  tagline: "납기는 지키고, 도면대로 깎고, 값은 합리적으로 받습니다.",

  ceo: "[대표자명 입력]",
  founded: "[설립 연도 입력]",
  bizNo: "[사업자등록번호 입력]",

  address: "[주소 입력]",
  phone: "[전화번호 입력]",
  fax: "[팩스번호 입력]",
  email: "[이메일 입력]",          // 견적 문의 메일이 이 주소로 갑니다
  hours: "[상담 시간 입력]",        // 예: "평일 08:30 ~ 17:30 (점심 12:00 ~ 13:00)"
  parking: "[주차 안내 입력]",
  privacyRetention: "1년",

  // Formspree 등 폼 서비스 주소. 비워 두면 메일 앱(mailto) 방식.
  // 예: "https://formspree.io/f/xxxxabcd"
  formEndpoint: "",

  /* -------------------------------------------------------------------
   * 사이트에 보이는 수치는 전부 여기 한 곳에서 바꿉니다.
   * ※ 2026-11-05 LLM 추정 — 실제 값 확인 필요 (aiTime 만 예외: 시험 부품 시뮬레이션 실측).
   *   소규모 CNC 외주가공 업체에 현실적인 능력·약속 수준으로 넣어 둔 값입니다.
   *   실적 통계(고객 수·준수율 등)는 일부러 넣지 않았습니다.
   *   value = 큰 숫자, unit = 단위, label = 설명 한 줄, inline = 문장 속에 쓸 때 모양(선택)
   *   값을 바꾸면 첫 화면·세 기둥·설비·견적 문의에 모두 반영됩니다. 항목을 빼려면 index.html 의 data-nums 에서도 지우세요.
   * ------------------------------------------------------------------- */
  numbers: {
    // 납기
    quoteReply:  { value: "1",      unit: "영업일 안", label: "견적·납기 답변", inline: "1영업일 안" },   // LLM 추정 — 실제 값 확인 필요
    standardLead:{ value: "7",      unit: "영업일",   label: "보통 납기 (단순한 부품 소량 기준)" },        // LLM 추정 — 실제 값 확인 필요
    rushLead:    { value: "2",      unit: "영업일부터", label: "급한 건 (협의)" },                    // LLM 추정 — 실제 값 확인 필요
    delayNotice: { value: "2",      unit: "일 전",    label: "늦어질 것 같으면 미리 연락" },          // LLM 추정(약속) — 실제 값 확인 필요
    // 정밀도
    asDrawn:     { value: "도면",   unit: "대로",    label: "치수와 모양은 도면 기준" },              // 숫자 아님 — 글자 칸
    roughness:   { value: "Ra 0.8", unit: "μm",      label: "표면 거칠기 (정삭 기준)" },              // LLM 추정 — 실제 값 확인 필요
    checks:      { value: "3",      unit: "번 확인",  label: "도면 검토·가상 가공·출하 전 측정" },        // 슬로건 '세 번의 정밀함' 과 같은 뜻
    // 가격
    minOrder:    { value: "1",      unit: "개부터",   label: "최소 주문 수량" },                       // LLM 추정 — 실제 값 확인 필요
    quoteFee:    { value: "0",      unit: "원",      label: "견적·도면 검토 비용" },                   // LLM 추정 — 실제 값 확인 필요
    aiTime:      { value: "−30.9",  unit: "%",       label: "공정을 자동으로 다듬은 뒤 가공 시간 (시험 부품 10종)" }, // 시험 부품 시뮬레이션 실측 (18,790초 → 12,992초)
    // 설비
    millRange:   { value: "800×500", unit: "mm",     label: "밀링 가공 범위 (가로×세로)" },            // LLM 추정 — 실제 설비 사양으로 바꿔 주세요
    latheDia:    { value: "Ø250",   unit: "mm",      label: "선반 최대 가공 지름" },                   // LLM 추정 — 실제 설비 사양으로 바꿔 주세요
    materials:   { value: "5",      unit: "종 이상",  label: "탄소강·스테인리스·알루미늄·황동·플라스틱" }, // LLM 추정 — 실제 값 확인 필요
  },

  // 설비 현황 표. 대수·사양은 실제 보유 현황으로 바꿔 주세요. 줄을 더하거나 빼도 됩니다.
  equipment: [
    { type: "가공", name: "CNC 머시닝센터 (MCT)", spec: "[모델·테이블 크기 입력]", count: "[대수]" },
    { type: "가공", name: "CNC 선반", spec: "[모델·최대 가공 직경 입력]", count: "[대수]" },
    { type: "가공", name: "범용 밀링", spec: "[모델 입력]", count: "[대수]" },
    { type: "가공", name: "범용 선반", spec: "[모델 입력]", count: "[대수]" },
    { type: "측정", name: "마이크로미터·버니어캘리퍼스", spec: "[측정 범위 입력]", count: "[대수]" },
    { type: "측정", name: "하이트게이지·나사 게이지", spec: "[사양 입력]", count: "[대수]" },
    { type: "설계", name: "CAD/CAM 소프트웨어", spec: "[사용 프로그램 입력]", count: "[대수]" },
  ],
};

/* ===================================================================== */

document.documentElement.classList.add("js");

const isPlaceholder = (v) => typeof v === "string" && v.trim().startsWith("[");

function setText(el, value) {
  el.textContent = value;
  el.classList.toggle("placeholder", isPlaceholder(value));
}

/* 1) 설정값을 페이지에 채우기 */
function applySite() {
  document.querySelectorAll("[data-site]").forEach((el) => {
    const key = el.dataset.site;
    if (!(key in SITE)) return;
    const value = SITE[key];
    setText(el, value);

    const hrefType = el.dataset.siteHref;
    if (hrefType && el.tagName === "A") {
      if (isPlaceholder(value)) {
        el.removeAttribute("href");
      } else if (hrefType === "tel") {
        el.href = "tel:" + value.replace(/[^0-9+]/g, "");
      } else if (hrefType === "mailto") {
        el.href = "mailto:" + value;
      }
    }
  });

  // 설비 표
  const body = document.getElementById("equipBody");
  if (body) {
    body.innerHTML = "";
    SITE.equipment.forEach((row) => {
      const tr = document.createElement("tr");
      const labels = ["구분", "설비", "사양", "대수"];
      [row.type, row.name, row.spec, row.count].forEach((v, i) => {
        const td = document.createElement("td");
        td.dataset.label = labels[i];
        if (isPlaceholder(v)) {
          const span = document.createElement("span");
          setText(span, v);
          td.appendChild(span);
        } else {
          td.textContent = v;
        }
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });
  }

  // 수치 묶음 (SITE.numbers) — <dl data-nums="키,키"> 와 <b data-num-inline="키">
  document.querySelectorAll("[data-nums]").forEach((dl) => {
    dl.innerHTML = "";
    dl.dataset.nums.split(",").map((k) => k.trim()).forEach((k) => {
      const n = SITE.numbers[k];
      if (!n) return;
      const item = document.createElement("div");
      item.className = "num";
      const dd = document.createElement("dd");
      dd.textContent = n.value;
      if (n.unit) {
        const small = document.createElement("small");
        small.textContent = n.unit;
        dd.appendChild(small);
      }
      const dt = document.createElement("dt");
      dt.textContent = n.label;
      item.append(dd, dt);
      dl.appendChild(item);
    });
  });
  document.querySelectorAll("[data-num-inline]").forEach((el) => {
    const n = SITE.numbers[el.dataset.numInline];
    if (n) el.textContent = n.inline || (n.value + n.unit);
  });

  // 지도 링크
  const q = encodeURIComponent(isPlaceholder(SITE.address) ? SITE.companyName : SITE.address);
  const naver = document.getElementById("naverMap");
  const kakao = document.getElementById("kakaoMap");
  if (naver) naver.href = "https://map.naver.com/p/search/" + q;
  if (kakao) kakao.href = "https://map.kakao.com/?q=" + q;

  // 제목·설명 속 회사명
  document.title = `${SITE.companyName} | CNC 밀링·선반 정밀 부품 외주가공`;

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

/* 2) 모바일 햄버거 메뉴 */
function setupNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("open") && !nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });
  window.addEventListener("resize", () => { if (window.innerWidth > 960) setOpen(false); });
}

/* 3) 스크롤: 헤더 그림자, 현재 메뉴 표시, 맨 위로 버튼, 나타나기 효과 */
function setupScroll() {
  const header = document.querySelector(".site-header");
  const toTop = document.getElementById("toTop");
  const links = [...document.querySelectorAll(".site-nav a[href^='#']")];
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const onScroll = () => {
    const y = window.scrollY;
    header && header.classList.toggle("scrolled", y > 10);
    toTop && toTop.classList.toggle("show", y > 600);

    const pos = y + window.innerHeight * 0.35;
    let current = null;
    sections.forEach((s) => { if (s.offsetTop <= pos) current = s.id; });
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current && !a.classList.contains("nav-cta")));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const targets = document.querySelectorAll(".pillar-img, .pillar-copy, .sim, .equip-grid, .quote-form");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -40px 0px" });
    targets.forEach((t) => { t.classList.add("reveal"); io.observe(t); });
  }
}

/* 4) 견적 문의 폼 */
const RULES = {
  fName: { test: (v) => v.trim().length >= 2, msg: "이름을 2자 이상 입력해 주세요." },
  fPhone: { test: (v) => /^[0-9+\-()\s]{8,}$/.test(v.trim()), msg: "연락처를 정확히 입력해 주세요. (예: 010-1234-5678)" },
  fEmail: { test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), msg: "이메일 주소를 정확히 입력해 주세요." },
  fMsg: { test: (v) => v.trim().length >= 5, msg: "문의 내용을 5자 이상 적어 주세요." },
};

function validateForm(form) {
  let firstBad = null;
  const showErr = (id, msg) => {
    const el = form.querySelector(`#${id}`);
    const err = form.querySelector(`.err[data-for="${id}"]`);
    el.classList.toggle("invalid", !!msg);
    el.setAttribute("aria-invalid", msg ? "true" : "false");
    if (err) err.textContent = msg || "";
    if (msg && !firstBad) firstBad = el;
  };

  Object.entries(RULES).forEach(([id, rule]) => {
    const el = form.querySelector(`#${id}`);
    showErr(id, rule.test(el.value) ? "" : rule.msg);
  });
  const agree = form.querySelector("#fAgree");
  showErr("fAgree", agree.checked ? "" : "개인정보 수집·이용에 동의해 주세요.");

  if (firstBad) firstBad.focus();
  return !firstBad;
}

function buildMailto(form) {
  const v = (id) => form.querySelector(`#${id}`).value.trim();
  const files = [...form.querySelector("#fFile").files].map((f) => f.name);
  const subject = `[견적 문의] ${v("fCompany") ? v("fCompany") + " " : ""}${v("fName")}`;
  const lines = [
    `이름: ${v("fName")}`,
    `회사: ${v("fCompany") || "-"}`,
    `연락처: ${v("fPhone")}`,
    `이메일: ${v("fEmail")}`,
    "",
    "[문의 내용]",
    v("fMsg"),
    "",
    files.length
      ? `[도면 파일] ${files.join(", ")}\n※ 위 파일을 이 메일에 직접 첨부해 주세요.`
      : "※ 도면 파일이 있으면 이 메일에 직접 첨부해 주세요.",
    "",
    "개인정보 수집·이용 동의: 예",
  ];
  const to = isPlaceholder(SITE.email) ? "" : SITE.email;
  return `mailto:${encodeURIComponent(to).replace(/%40/g, "@")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

async function submitForm(form) {
  const status = document.getElementById("formStatus");
  status.classList.remove("error");

  // ----- 폼 서비스로 보내기 (Formspree 등: SITE.formEndpoint 가 있을 때) -----
  if (SITE.formEndpoint) {
    status.textContent = "보내는 중입니다…";
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(res.status);
      status.textContent = "문의를 받았습니다. 도면을 살펴보고 연락드리겠습니다.";
      form.reset();
    } catch (e) {
      status.classList.add("error");
      status.textContent = "전송에 실패했습니다. 전화나 이메일로 문의해 주세요.";
    }
    return;
  }

  // ----- 기본: 메일 앱 열기 (mailto) -----
  const href = buildMailto(form);
  form.dataset.mailto = href;   // 확인용
  window.location.href = href;
  status.innerHTML = "";
  status.append("메일 앱이 열립니다. 도면 파일은 그 메일에 직접 첨부해 보내 주세요. ");
  const a = document.createElement("a");
  a.href = href;
  a.id = "mailtoLink";
  a.textContent = "메일 앱이 안 열리면 여기를 누르세요";
  a.style.textDecoration = "underline";
  status.append(a);
  if (isPlaceholder(SITE.email)) {
    status.classList.add("error");
    status.append(" (받는 메일 주소가 아직 설정되지 않았습니다)");
  }
}

function setupForm() {
  const form = document.getElementById("quoteForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm(form)) {
      const status = document.getElementById("formStatus");
      status.classList.add("error");
      status.textContent = "필수 항목을 확인해 주세요.";
      delete form.dataset.mailto;
      return;
    }
    submitForm(form);
  });
  // 고른 파일 이름 보이기
  const file = form.querySelector("#fFile");
  const names = document.getElementById("fileNames");
  file.addEventListener("change", () => {
    const list = [...file.files].map((f) => f.name);
    names.textContent = list.length ? list.join(", ") : "선택된 파일 없음";
  });
  // 입력하면 해당 칸 오류 지우기
  form.addEventListener("input", (e) => {
    const t = e.target;
    if (t.classList.contains("invalid")) {
      t.classList.remove("invalid");
      const err = form.querySelector(`.err[data-for="${t.id}"]`);
      if (err) err.textContent = "";
    }
  });
}

applySite();
setupNav();
setupScroll();
setupForm();
