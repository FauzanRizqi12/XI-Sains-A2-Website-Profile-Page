const totalStudents = 37;
const itemsPerPage = 9;
let currentPage = 1;

// NAMA-NAMA & DATA DIRI MANUAL (DEFAULT)
const manualData = {
  1: {
    nama: "Abdul Hafiz Ramadhan",
    umur: "",
    title: "Geography Addict",
    ttl: "29 September 2008",
    minat: "Geography",
  },
  2: {
    nama: "Abdurrahman Al Faqih Lubis",
    umur: "",
    ttl: "10 Agustus 2009",
    minat: "Basket",
  },
  3: {
    nama: "Ainur Wilda Siregar",
    umur: "",
    ttl: "26 Mei 2010",
    minat: "Listening Music",
  },
  4: { nama: "Alfiansyah", umur: "", ttl: "3 Oktober 2008", minat: "Paskibra" },
  5: {
    nama: "Alvaro Laisina",
    umur: "",
    ttl: "28 September 2009",
    minat: "Olimpiade",
  },
  6: {
    nama: "Aqilla Zahrani Hendrawan",
    umur: "",
    ttl: "13 Juli 2009",
    minat: "Pramugari",
  },
  7: {
    nama: "Arif Azman Harahap",
    umur: "",
    ttl: "30 Juni 2009",
    minat: "Pemain Timnas",
  },
  8: { nama: "Ayu Dyah", umur: "", ttl: "04 Januari 2009", minat: "Archer" },
  9: {
    nama: "Azka Ulima Husna Nadeak",
    umur: "",
    ttl: "04 Desember 2009",
    minat: "",
  },
  10: {
    nama: "Desvina Haura Fairuz",
    umur: "",
    ttl: "5 Desember 2009",
    minat: "",
  },
  11: {
    nama: "Desvita Haura Fairuz",
    umur: "",
    ttl: "5 Desember 2009",
    minat: "Listening Music",
  },
  12: {
    nama: "Dewi Andini",
    umur: "",
    title: "S.Psi. M.Psi., Psikolog",
    ttl: "10 Maret 2009",
    minat: "Psychology, 1230J",
  },
  13: {
    nama: "Dhafira Khairiyah Batubara",
    umur: "",
    ttl: "21 Desember 2009",
    minat: "",
  },
  14: {
    nama: "Fadhilatun Nisa Manurung",
    umur: "",
    ttl: "13 Agustus 2009",
    minat: "Travelling",
  },
  15: {
    nama: "Faza Marwan Azka",
    umur: "",
    title: "Success Person",
    ttl: "29 September 2009",
    minat: "Vehicle Modification",
  },
  16: {
    nama: "Firly Bagus Cahyo",
    umur: "",
    ttl: "21 Januari 2009",
    minat: "Guitarist",
  },
  17: {
    nama: "Fitryah Handayani Daulay",
    umur: "",
    title: "Psych Addict",
    ttl: "19 September 2009",
    minat: "Writing, Travelling",
  },
  18: {
    nama: "Khadijah Limbong",
    umur: "",
    ttl: "16 Februari 2009",
    minat: "",
  },
  19: {
    nama: "Khansa Alya Pramana",
    umur: "",
    ttl: "10 Juli 2009",
    minat: "Writing Novel",
  },
  20: {
    nama: "Muhammad Fauzan Al Fakhri",
    umur: "",
    ttl: "11 April 2009",
    minat: "Gaming",
  },
  21: {
    nama: "Muhammad Fathur Rais",
    title: "Biology Addict",
    umur: "",
    ttl: "12 Maret 2009",
    minat: "Membaca",
  },
  22: {
    nama: "M. Fauzan Rizqi Srg",
    title: "IT Developer",
    umur: "",
    ttl: "2 Desember 2009",
    minat: "Programmer, Pro Gamer",
  },
  23: {
    nama: "Muhammad Jibril Imaman",
    umur: "",
    ttl: "10 September 2009",
    minat: "Olahraga",
  },
  24: {
    nama: "Muhammad Nabil Althaf",
    umur: "",
    ttl: "1 Februari 2009",
    minat: "Gaming",
  },
  25: {
    nama: "Nafiza Almira",
    umur: "",
    ttl: "16 Oktober 2009",
    minat: "Qira'atul Qur'an",
  },
  26: {
    nama: "Najwa Ayu Azzahra",
    umur: "",
    ttl: "13 September 2009",
    minat: "Miliarder",
  },
  27: {
    nama: "Nara Raissa Fahri",
    umur: "",
    title: "Biology Addict",
    ttl: "17 April 2010",
    minat: "Anime, Mendengar Musik, Sastra",
  },
  28: {
    nama: "Nayla Yasmin",
    umur: "",
    ttl: "23 Desember 2009",
    minat: "Travelling, Drawing, Scientific Research",
  },
  29: {
    nama: "Rakka Syah Ananda Siregar",
    title: "",
    umur: "",
    ttl: "20 Juli 2009",
    minat: "PNS Kementrian Keuangan",
  },
  30: { nama: "Safa Zahirah Arifin", umur: "", ttl: "30 Juni 2009", minat: "" },
  31: {
    nama: "Shaliha Salsabila Iman",
    umur: "",
    ttl: "18 Desember 2009",
    minat: "Olahraga",
  },
  32: {
    nama: "Shata Nabil Akyi",
    title: "'Ketua' IT",
    umur: "",
    ttl: "1 Desember 2009",
    minat: "Photografi, Tracking",
  },
  33: {
    nama: "Syifa Qalbu Sinaga",
    umur: "",
    ttl: "28 Oktober 2009",
    minat: "",
  },
  34: {
    nama: "Ubay Ghaizan",
    umur: "",
    ttl: "2 Januari 2009",
    minat: "Berkendara Malam",
  },
  35: {
    nama: "Wardatun Husniyah Hasibuan",
    umur: "",
    ttl: "8 Januari 2009",
    minat: "Nonton Film, Bernyanyi",
  },
  36: {
    nama: "Yola Putri Irbi",
    umur: "",
    ttl: "12 Agustus 2009",
    minat: "Menari, Cortis & Sean",
  },
  37: {
    nama: "Zhahir Farzan Dani",
    umur: "",
    title: "Math Master",
    ttl: "24 Juni 2009",
    minat: "Listening Music",
  },
};

// INITIALIZE STUDENTS ARRAY (MENCEGAH ERROR UNDEFINED)
const studentsData = Array.from({ length: totalStudents }, (_, i) => {
  const id = i + 1;
  return {
    absen: id,
    ...(manualData[id] || { nama: `Siswa ${id}`, ttl: "Unknown", minat: "-" }),
  };
});

// JSONBIN CLOUD SETUP
const JSONBIN_BIN_ID = "6ad64c64ac6210605a3fbb01";
const JSONBIN_API_KEY =
  "$2a$10$PakBeuR7kVeDug/kqnbVhO2j/QgdTCWXrFefORQZ11/mkgPLmVHgm";
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;

// 1. AMBIL DATA TERBARU DARI CLOUD SAAT WEB DIBUKA
async function loadCloudData() {
  try {
    const res = await fetch(`${JSONBIN_URL}/latest`, {
      headers: { "X-Master-Key": JSONBIN_API_KEY },
    });
    const cloudResult = await res.json();
    const cloudData = cloudResult.record;

    if (cloudData) {
      studentsData.forEach((student) => {
        if (cloudData[student.absen]) {
          Object.assign(student, cloudData[student.absen]);
        }
      });
    }
  } catch (err) {
    console.error("Gagal mengambil data cloud, menggunakan data lokal:", err);
  } finally {
    changePage(1);
  }
}

// FLOATING MESSAGES SYSTEM
let bdayMessages = JSON.parse(
  localStorage.getItem("bday_messages_store") || "[]",
);
let currentMsgLoopIndex = 0;
let isLoopActive = false;

function startContinuousMessageLoop() {
  if (bdayMessages.length === 0 || isLoopActive) return;
  isLoopActive = true;
  playNextLoopMessage();
}

function playNextLoopMessage() {
  if (bdayMessages.length === 0) {
    isLoopActive = false;
    return;
  }
  if (currentMsgLoopIndex >= bdayMessages.length) {
    currentMsgLoopIndex = 0;
  }
  const msg = bdayMessages[currentMsgLoopIndex];
  renderFloatingBubble(msg.toName, msg.message, msg.fromName, () => {
    currentMsgLoopIndex++;
    setTimeout(playNextLoopMessage, 600);
  });
}

function renderFloatingBubble(toName, message, fromName, onComplete) {
  const container = document.getElementById("floating-messages");
  if (!container) return;

  const bubble = document.createElement("div");
  bubble.className = "floating-msg";
  bubble.innerHTML = `
    <div class="floating-msg-for">🎂 UNTUK: ${escapeHtml(toName.toUpperCase())}</div>
    <div class="floating-msg-text">${escapeHtml(message)}</div>
    <div class="floating-msg-from">— ${escapeHtml(fromName)}</div>
  `;

  container.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
    if (onComplete) onComplete();
  }, 6500);
}

// PIN & EDIT SYSTEM
function promptEditPin() {
  if (!currentModalStudent) return;

  const pinInput = document.getElementById("pin-input-field");
  const pinError = document.getElementById("pin-error-msg");
  const subtitle = document.getElementById("pin-modal-subtitle");

  if (pinInput) pinInput.value = "";
  if (pinError) pinError.style.display = "none";

  if (subtitle) {
    const hasCustomPin = Boolean(currentModalStudent.pin);
    const hintText = hasCustomPin
      ? "(Gunakan PIN rahasia khusus kamu)"
      : `(Petunjuk: 10 + Nomor Absen, misal 10${currentModalStudent.absen.toString().padStart(2, "0")})`;

    subtitle.innerHTML = `Masukkan PIN untuk <b>${escapeHtml(currentModalStudent.nama)}</b>:<br><span class="pin-hint">${hintText}</span>`;
  }

  const pinModal = document.getElementById("pin-modal");
  if (pinModal) {
    pinModal.classList.add("active");
    setTimeout(() => {
      if (pinInput) pinInput.focus();
    }, 150);
  }
}

function closePinModal() {
  const pinModal = document.getElementById("pin-modal");
  if (pinModal) pinModal.classList.remove("active");
}

function submitPin() {
  if (!currentModalStudent) return;

  const pinInput = document.getElementById("pin-input-field");
  const pinError = document.getElementById("pin-error-msg");

  const expectedPin =
    currentModalStudent.pin ||
    "10" + currentModalStudent.absen.toString().padStart(2, "0");
  const enteredPin = pinInput ? pinInput.value.trim() : "";

  if (enteredPin === expectedPin) {
    closePinModal();
    const editBox = document.getElementById("edit-form-box");
    if (editBox) {
      editBox.style.display = "flex";
      document.getElementById("edit-nama").value =
        currentModalStudent.nama || "";
      document.getElementById("edit-title").value =
        currentModalStudent.title || "";
      document.getElementById("edit-ttl").value = currentModalStudent.ttl || "";
      document.getElementById("edit-minat").value =
        currentModalStudent.minat || "";

      const scrollContainer = document.querySelector(".modal-body-scroll");
      if (scrollContainer) {
        setTimeout(() => {
          editBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 150);
      }
    }
  } else {
    if (pinError) {
      pinError.style.display = "block";
      pinError.textContent = "❌ Kode Akses PIN Salah! Coba lagi.";
    }
    if (pinInput) {
      pinInput.value = "";
      pinInput.focus();
    }
  }
}

async function savePersonalData() {
  if (!currentModalStudent) return;
  const absen = currentModalStudent.absen;

  const newNama = document.getElementById("edit-nama").value.trim();
  const newTitle = document.getElementById("edit-title").value.trim();
  const newTtl = document.getElementById("edit-ttl").value.trim();
  const newMinat = document.getElementById("edit-minat").value.trim();

  const updatedAllData = {};
  studentsData.forEach((s) => {
    updatedAllData[s.absen] = {
      nama: s.absen === absen ? newNama : s.nama,
      title: s.absen === absen ? newTitle : s.title,
      ttl: s.absen === absen ? newTtl : s.ttl,
      minat: s.absen === absen ? newMinat : s.minat,
      pin: s.pin || "",
    };
  });

  try {
    const res = await fetch(JSONBIN_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": JSONBIN_API_KEY,
      },
      body: JSON.stringify(updatedAllData),
    });

    if (res.ok) {
      Object.assign(currentModalStudent, updatedAllData[absen]);
      alert("✅ Profil berhasil diperbarui secara online!");
      openModal(currentModalStudent);
    } else {
      alert("❌ Gagal menyimpan ke cloud server.");
    }
  } catch (err) {
    console.error("Error saving data:", err);
    alert("⚠️ Terjadi kesalahan koneksi saat menyimpan.");
  }
}

function closeEditForm() {
  const editBox = document.getElementById("edit-form-box");
  if (editBox) editBox.style.display = "none";
}

// RENDER CARDS & PAGINATION
const container = document.getElementById("student-container");
const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clear-search");
let isSearching = false;

function renderCards(dataList) {
  const gridContent = document.getElementById("grid-content");
  if (!gridContent) return;
  gridContent.innerHTML = "";

  if (dataList.length === 0) {
    gridContent.innerHTML = `<div class="no-results">[ SISWA TIDAK DITEMUKAN ]</div>`;
    return;
  }

  dataList.forEach((student) => {
    const formatAbsen = student.absen.toString().padStart(2, "0");
    const isBday = checkIsBirthdayToday(student.ttl);
    const card = document.createElement("div");
    card.className = "student-card" + (isBday ? " birthday-active" : "");
    card.onclick = () => openModal(student);
    card.innerHTML = `
      ${isBday ? '<div class="birthday-badge-tag">🎂 ULTAH!</div>' : ""}
      <div class="photo-box">
        <img src="img/${formatAbsen}.png" alt="Foto ${formatAbsen}" onerror="this.parentElement.innerHTML='?';">
      </div>
      <div class="card-footer">
        <span class="status-text">Number Of :</span>
        <span class="absen-number">${formatAbsen}</span>
      </div>`;
    gridContent.appendChild(card);
  });
}

function changePage(page) {
  if (isSearching) return;
  const gridContent = document.getElementById("grid-content");
  const buttons = document.querySelectorAll("#pagination button");
  if (!gridContent) return;

  gridContent.classList.remove("page-transition");
  gridContent.classList.add("page-exit");

  setTimeout(() => {
    currentPage = page;
    gridContent.innerHTML = "";
    gridContent.classList.remove("page-exit");

    const start = (page - 1) * itemsPerPage;
    let end =
      page === 4
        ? studentsData.length
        : Math.min(start + itemsPerPage, studentsData.length);

    if (page === 4) {
      gridContent.classList.add("page-4-layout");
    } else {
      gridContent.classList.remove("page-4-layout");
    }

    const pageData = studentsData.slice(start, end);
    renderCards(pageData);

    gridContent.classList.add("page-transition");

    buttons.forEach((btn, index) => {
      if (index + 1 === page) btn.classList.add("active");
      else btn.classList.remove("active");
    });
  }, 300);
}

function handleSearch() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const paginationNav = document.getElementById("pagination");

  if (query.length > 0) {
    isSearching = true;
    if (clearBtn) clearBtn.style.display = "inline-block";
    if (paginationNav) paginationNav.style.opacity = "0.3";

    const filtered = studentsData.filter((student) => {
      const matchNama = (student.nama || "").toLowerCase().includes(query);
      const matchMinat = (student.minat || "").toLowerCase().includes(query);
      const matchAbsen =
        student.absen.toString() === query ||
        student.absen.toString().padStart(2, "0") === query;
      return matchNama || matchMinat || matchAbsen;
    });

    const gridContent = document.getElementById("grid-content");
    if (gridContent) {
      gridContent.classList.remove("page-4-layout");
      renderCards(filtered);
    }
  } else {
    isSearching = false;
    if (clearBtn) clearBtn.style.display = "none";
    if (paginationNav) paginationNav.style.opacity = "1";
    changePage(currentPage);
  }
}

function clearSearch() {
  if (searchInput) searchInput.value = "";
  handleSearch();
}

if (searchInput) searchInput.addEventListener("input", handleSearch);

function hitungUmurOtomatis(ttlString) {
  if (!ttlString || ttlString === "Unknown") return "N/A";
  const daftarBulan = {
    Januari: 0,
    Februari: 1,
    Maret: 2,
    April: 3,
    Mei: 4,
    Juni: 5,
    Juli: 6,
    Agustus: 7,
    September: 8,
    Oktober: 9,
    November: 10,
    Desember: 11,
  };

  const bagian = ttlString.split(" ");
  if (bagian.length < 3) return "N/A";
  const tanggal = parseInt(bagian[0]);

  // Penanganan sensitivitas huruf besar/kecil nama bulan
  const bulanNama =
    bagian[1].charAt(0).toUpperCase() + bagian[1].slice(1).toLowerCase();
  const bulan = daftarBulan[bulanNama];
  const tahun = parseInt(bagian[2]);

  if (isNaN(tanggal) || bulan === undefined || isNaN(tahun)) return "N/A";

  const lahir = new Date(tahun, bulan, tanggal);
  const hariIni = new Date();

  let umur = hariIni.getFullYear() - lahir.getFullYear();
  const selisihBulan = hariIni.getMonth() - lahir.getMonth();

  if (
    selisihBulan < 0 ||
    (selisihBulan === 0 && hariIni.getDate() < lahir.getDate())
  ) {
    umur--;
  }
  return umur + " Tahun";
}

function loadOptimizedImage(src, targetElement, student) {
  const formatAbsen = student.absen.toString().padStart(2, "0");
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = src;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const maxSize = 300;
    let width = img.width;
    let height = img.height;

    if (width > maxSize) {
      height = Math.round((height * maxSize) / width);
      width = maxSize;
    }

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, width, height);

    targetElement.innerHTML = "";
    targetElement.appendChild(canvas);
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.objectFit = "cover";

    const badge = document.createElement("div");
    badge.className = "absen-badge";
    badge.innerText = formatAbsen;
    targetElement.appendChild(badge);
  };

  img.onerror = () => {
    targetElement.innerHTML = `
      <div class="photo-placeholder">?</div>
      <div class="absen-badge">${formatAbsen}</div>
    `;
  };
}

function checkIsBirthdayToday(ttlString) {
  if (!ttlString || ttlString === "Unknown") return false;
  const daftarBulan = {
    Januari: 0,
    Februari: 1,
    Maret: 2,
    April: 3,
    Mei: 4,
    Juni: 5,
    Juli: 6,
    Agustus: 7,
    September: 8,
    Oktober: 9,
    November: 10,
    Desember: 11,
  };
  const bagian = ttlString.split(" ");
  if (bagian.length < 3) return false;
  const tanggal = parseInt(bagian[0]);
  const bulanNama =
    bagian[1].charAt(0).toUpperCase() + bagian[1].slice(1).toLowerCase();
  const bulan = daftarBulan[bulanNama];

  const today = new Date();
  return today.getDate() === tanggal && today.getMonth() === bulan;
}

function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = [
    "#ff007f",
    "#ffd700",
    "#00ffff",
    "#ff4500",
    "#00ffcc",
    "#ffffff",
  ];
  const particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2 + 50,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.8) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      opacity: 1,
    });
  }

  let animationFrame;
  const startTime = Date.now();

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const elapsed = Date.now() - startTime;

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.rotation += p.rotationSpeed;
      if (elapsed > 1200) p.opacity -= 0.03;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    if (elapsed < 2200) {
      animationFrame = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  render();
}

function initBirthdayNotification() {
  if (!("Notification" in window)) return;
  const banner = document.getElementById("notif-banner");
  if (Notification.permission === "default" && banner) {
    banner.style.display = "flex";
  } else if (Notification.permission === "granted") {
    checkAndTriggerBirthdayNotifications();
  }
}

function requestBirthdayNotification() {
  if (!("Notification" in window)) return;
  Notification.requestPermission().then((permission) => {
    dismissNotifBanner();
    if (permission === "granted") checkAndTriggerBirthdayNotifications();
  });
}

function dismissNotifBanner() {
  const banner = document.getElementById("notif-banner");
  if (banner) banner.style.display = "none";
}

function checkAndTriggerBirthdayNotifications() {
  if (!("Notification" in window) || Notification.permission !== "granted")
    return;

  const bdayStudents = studentsData.filter((s) => checkIsBirthdayToday(s.ttl));
  bdayStudents.forEach((student) => {
    new Notification("🎂 Ulang Tahun Hari Ini! 🎉", {
      body: `${student.nama} sedang berulang tahun hari ini! Klik untuk lihat profilnya di website.`,
      icon: `img/${student.absen.toString().padStart(2, "0")}.png`,
    });
  });
}

let currentModalStudent = null;

function openModal(student) {
  const modal = document.getElementById("detail-modal");
  const formatAbsen = student.absen.toString().padStart(2, "0");
  const photoContainer = modal.querySelector(".modal-photo-container");
  const isBday = checkIsBirthdayToday(student.ttl);
  currentModalStudent = student;

  modal.classList.remove("closing");
  closeEditForm();

  photoContainer.innerHTML = `<div class="photo-placeholder">LOADING...</div><div class="absen-badge">${formatAbsen}</div>`;
  loadOptimizedImage(`img/${formatAbsen}.png`, photoContainer, student);

  document.getElementById("m-nama").innerText = student.nama || "-";
  const titleEl = document.getElementById("m-title");
  if (titleEl) {
    const titleText = student.title || "STUDENT";
    titleEl.innerHTML = `<span class="fiery-title">${titleText} 🔥</span>`;
  }
  document.getElementById("m-umur").innerText = hitungUmurOtomatis(student.ttl);
  document.getElementById("m-ttl").innerText = student.ttl || "-";
  document.getElementById("m-minat").innerText = student.minat || "-";

  const giftBtn = document.getElementById("gift-btn");
  if (giftBtn) giftBtn.style.display = isBday ? "inline-block" : "none";

  let bdayBanner = modal.querySelector(".birthday-banner");
  if (bdayBanner) bdayBanner.remove();

  if (isBday) {
    bdayBanner = document.createElement("div");
    bdayBanner.className = "birthday-banner";
    bdayBanner.innerHTML = `🎉 HAPPY BIRTHDAY ${student.nama.toUpperCase()}! 🎂🎁`;
    const modalCard = modal.querySelector(".modal-content");
    modalCard.insertBefore(bdayBanner, modalCard.firstChild);
    launchConfetti();
  }

  modal.classList.add("active");
}

function handleSmartClose() {
  const editBox = document.getElementById("edit-form-box");
  if (editBox && editBox.style.display === "flex") {
    closeEditForm();
  } else {
    closeModal();
  }
}

function closeModal() {
  const modal = document.getElementById("detail-modal");
  if (!modal) return;
  modal.classList.add("closing");
  closeEditForm();

  setTimeout(() => {
    modal.classList.remove("active");
    modal.classList.remove("closing");
  }, 400);
}

// INITIALIZATION EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
  loadCloudData();
  initBirthdayNotification();
  startContinuousMessageLoop();

  const detailModal = document.getElementById("detail-modal");
  if (detailModal) {
    detailModal.addEventListener("click", function (e) {
      if (e.target === this) closeModal();
    });
  }

  const pinInput = document.getElementById("pin-input-field");
  if (pinInput) {
    pinInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submitPin();
      }
    });
  }

  const pinModal = document.getElementById("pin-modal");
  if (pinModal) {
    pinModal.addEventListener("click", function (e) {
      if (e.target === this) closePinModal();
    });
  }
});

// BIRTHDAY GIFT MESSAGE SYSTEM SETUP
function getDeviceId() {
  let id = localStorage.getItem("_bday_device_id");
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("_bday_device_id", id);
  }
  return id;
}

function getTodayKey() {
  const d = new Date();
  return (
    d.getFullYear() +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0")
  );
}

function getLimitKey() {
  return "bday_limit_" + getTodayKey();
}

function hasAlreadySent(recipientAbsen) {
  try {
    const raw = localStorage.getItem(getLimitKey());
    if (!raw) return false;
    const data = JSON.parse(raw);
    const key = getDeviceId() + "_" + String(recipientAbsen);
    return !!data[key];
  } catch (e) {
    return false;
  }
}

function recordSent(recipientAbsen) {
  try {
    const raw = localStorage.getItem(getLimitKey());
    const data = raw ? JSON.parse(raw) : {};
    const key = getDeviceId() + "_" + String(recipientAbsen);
    data[key] = 1;
    localStorage.setItem(getLimitKey(), JSON.stringify(data));
  } catch (e) {}
}

const BANNED_WORDS = [
  "anjing",
  "anjg",
  "anying",
  "bangsat",
  "brengsek",
  "bajingan",
  "kampret",
  "keparat",
  "babi",
  "celeng",
  "tai",
  "tahi",
  "taik",
  "tolol",
  "goblok",
  "bodoh",
  "idiot",
  "dungu",
  "asu",
  "jancok",
  "jancuk",
  "jangkrik",
  "cuk",
  "kontol",
  "memek",
  "ngentot",
  "entot",
  "ngewe",
  "pepek",
  "titit",
  "toket",
  "bokep",
  "cabul",
  "seks",
  "porn",
  "sex",
  "fuck",
  "shit",
  "bitch",
  "asshole",
  "damn",
  "cunt",
  "dick",
  "cock",
  "pussy",
  "ass",
];

function containsBannedWord(text) {
  const lower = text.toLowerCase().replace(/[^a-z0-9\s]/g, "");
  return BANNED_WORDS.some((word) => {
    return (
      new RegExp("(^|\\s)" + word + "($|\\s|[^a-z])", "i").test(lower) ||
      lower.includes(word)
    );
  });
}

function getTodayBirthdayStudents() {
  return studentsData.filter((s) => checkIsBirthdayToday(s.ttl));
}

function openGiftModal() {
  const bdayStudents = getTodayBirthdayStudents();
  if (bdayStudents.length === 0) return;

  const selectEl = document.getElementById("gift-to");
  selectEl.innerHTML = "";
  bdayStudents.forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s.absen;
    opt.textContent =
      s.nama + " (No. " + String(s.absen).padStart(2, "0") + ")";
    if (currentModalStudent && s.absen === currentModalStudent.absen) {
      opt.selected = true;
    }
    selectEl.appendChild(opt);
  });

  document.getElementById("gift-from").value = "";
  document.getElementById("gift-message").value = "";
  document.getElementById("char-count").textContent = "0";
  const errEl = document.getElementById("gift-error");
  errEl.style.display = "none";
  errEl.textContent = "";

  document.getElementById("gift-modal").classList.add("active");
}

function closeGiftModal() {
  document.getElementById("gift-modal").classList.remove("active");
}

const msgTextarea = document.getElementById("gift-message");
if (msgTextarea) {
  msgTextarea.addEventListener("input", function () {
    document.getElementById("char-count").textContent = this.value.length;
  });
}

const giftModalOverlay = document.getElementById("gift-modal");
if (giftModalOverlay) {
  giftModalOverlay.addEventListener("click", function (e) {
    if (e.target === this) closeGiftModal();
  });
}

function sendBirthdayMessage() {
  const selectEl = document.getElementById("gift-to");
  const fromEl = document.getElementById("gift-from");
  const msgEl = document.getElementById("gift-message");

  const recipientAbsen = parseInt(selectEl.value);
  const senderName = fromEl.value.trim();
  const message = msgEl.value.trim();

  if (!senderName) {
    showGiftError("⚠️ Nama kamu wajib diisi!");
    fromEl.focus();
    return;
  }
  if (!message) {
    showGiftError("⚠️ Pesan tidak boleh kosong!");
    msgEl.focus();
    return;
  }

  if (containsBannedWord(senderName)) {
    showGiftError("🚫 Nama mengandung kata yang tidak diperbolehkan.");
    fromEl.focus();
    return;
  }

  if (containsBannedWord(message)) {
    showGiftError(
      "🚫 Pesan mengandung kata yang tidak diperbolehkan (kasar / SARA / vulgar).",
    );
    msgEl.focus();
    return;
  }

  if (hasAlreadySent(recipientAbsen)) {
    const recipient = studentsData.find((s) => s.absen === recipientAbsen);
    const rName = recipient ? recipient.nama.split(" ")[0] : "orang ini";
    showGiftError(
      "⚠️ Kamu sudah mengirim pesan untuk " +
        rName +
        " hari ini. Boleh kirim lagi besok ya! 😊",
    );
    return;
  }

  recordSent(recipientAbsen);
  const recipient = studentsData.find((s) => s.absen === recipientAbsen);
  const rName = recipient ? recipient.nama.split(" ")[0] : "dia";

  closeGiftModal();
  enqueueFloatingMessage(rName, message, senderName);
}

function showGiftError(text) {
  const errEl = document.getElementById("gift-error");
  errEl.textContent = text;
  errEl.style.display = "block";
}

const msgQueue = [];
let msgPlaying = false;

function enqueueFloatingMessage(toName, message, fromName) {
  msgQueue.push({ toName, message, fromName });
  if (!msgPlaying) playNextMessage();
}

function playNextMessage() {
  if (msgQueue.length === 0) {
    msgPlaying = false;
    return;
  }
  msgPlaying = true;
  const { toName, message, fromName } = msgQueue.shift();
  _showFloatingBubble(toName, message, fromName);
}

const FLOAT_DURATION = 6000;

function _showFloatingBubble(toName, message, fromName) {
  const container = document.getElementById("floating-messages");
  if (!container) {
    playNextMessage();
    return;
  }

  const bubble = document.createElement("div");
  bubble.className = "floating-msg";
  bubble.style.animationDuration = FLOAT_DURATION + "ms";
  bubble.innerHTML =
    '<div class="floating-msg-for">🎂 UNTUK: ' +
    escapeHtml(toName.toUpperCase()) +
    "</div>" +
    '<div class="floating-msg-text">' +
    escapeHtml(message) +
    "</div>" +
    '<div class="floating-msg-from">— ' +
    escapeHtml(fromName) +
    "</div>";

  container.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
    setTimeout(playNextMessage, 300);
  }, FLOAT_DURATION + 200);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
