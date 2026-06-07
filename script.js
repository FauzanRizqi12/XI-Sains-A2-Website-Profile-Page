const totalStudents = 37;
const itemsPerPage = 9;
let currentPage = 1;

//NAMA-NAMA & DATA DIRI//
const manualData = {
  1: {
    nama: "Abdul Hafiz Ramadhan",
    umur: "",
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

  4: {
    nama: "Alfiansyah",
    umur: "",
    ttl: "3 Oktober 2008",
    minat: "Paskibra",
  },

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

  8: {
    nama: "Ayu Dyah",
    umur: "",
    ttl: "04 Januari 2009",
    minat: "Archer",
  },

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
    ttl: "10 Maret 2009",
    minat: "Architech, Joshua",
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
    minat: "Main FF",
  },

  21: {
    nama: "Muhammad Fathur Rais",
    umur: "",
    ttl: "12 Maret 2009",
    minat: "Membaca",
  },

  22: {
    nama: "M. Fauzan Rizqi Srg",
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
    minat: "Membaca Alqur'an",
  },

  26: {
    nama: "Najwa Ayu Azzahra",
    umur: "",
    ttl: "13 September 2009",
    minat: "Jadi orang kaya",
  },

  27: {
    nama: "Nara Raissa Fahri",
    umur: "",
    ttl: "17 April 2010",
    minat: "Anime, Listen Music, Sastra",
  },

  28: {
    nama: "Nayla Yasmin",
    umur: "",
    ttl: "23 Desember 2009",
    minat: "Travelling, Drawing, Scientific Research",
  },

  29: {
    nama: "Rakka Syah Ananda Siregar",
    umur: "",
    ttl: "20 Juli 2009",
    minat: "PNS Kementrian Keuangan",
  },

  30: {
    nama: "Safa Zahirah Arifin",
    umur: "",
    ttl: "30 Juni 2009",
    minat: "",
  },

  31: {
    nama: "Shaliha Salsabila Iman",
    umur: "",
    ttl: "18 Desember 2009",
    minat: "Olahraga",
  },

  32: {
    nama: "Shata Nabil Akyi",
    umur: "",
    ttl: "1 desember 2009",
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
    minat: "Night Ride",
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
    ttl: "24 Juni 2009",
    minat: "Listening Music",
  },
};

const studentsData = Array.from({ length: totalStudents }, (_, index) => {
  const absen = index + 1;
  const defaultData = {
    nama: `Siswa ${absen}`,
    umur: "Unknown",
    ttl: "Unknown",
    minat: "N/A",
  };

  const finalData = manualData[absen] || defaultData;
  return { absen, ...finalData };
});

const container = document.getElementById("student-container");
const pageTitle = document.getElementById("page-title");
const buttons = document.querySelectorAll("#pagination button");
const modal = document.getElementById("detail-modal");

function changePage(page) {
  const gridContent = document.getElementById("grid-content");
  const buttons = document.querySelectorAll("#pagination button");

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

    for (let i = start; i < end; i++) {
      const student = studentsData[i];
      const formatAbsen = student.absen.toString().padStart(2, "0");
      const card = document.createElement("div");
      card.className = "student-card";

      card.onclick = () => openModal(student);
      card.innerHTML = `
                <div class="photo-box">
                 <img src="img/${formatAbsen}.png" alt="Foto ${formatAbsen}" onerror="this.parentElement.innerHTML='?';">
                </div>
                <div class="card-footer">
                    <span class="status-text">Number Of :</span>
                    <span class="absen-number">${formatAbsen}</span>
                </div>`;
      gridContent.appendChild(card);
    }

    gridContent.classList.add("page-transition");

    buttons.forEach((btn, index) => {
      if (index + 1 === page) btn.classList.add("active");
      else btn.classList.remove("active");
    });
  }, 300);
}

function hitungUmurOtomatis(ttlString) {
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
  const tanggal = parseInt(bagian[0]);
  const bulan = daftarBulan[bagian[1]];
  const tahun = parseInt(bagian[2]);

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

function openModal(student) {
  const modal = document.getElementById("detail-modal");
  const formatAbsen = student.absen.toString().padStart(2, "0");
  modal.classList.remove("closing");

  const photoContainer = modal.querySelector(".modal-photo-container");

  photoContainer.innerHTML = `
        <img src="img/${formatAbsen}.png" 
             alt="Foto ${student.nama}" 
             style="width: 100%; height: 100%; object-fit: cover;"
             onerror="this.parentElement.innerHTML='<div class=\'photo-placeholder\'>?</div>';">
        <div class="absen-badge">${formatAbsen}</div>
    `;

  document.getElementById("m-nama").innerText = student.nama;
  document.getElementById("m-umur").innerText = student.umur;
  document.getElementById("m-ttl").innerText = student.ttl;
  document.getElementById("m-minat").innerText = student.minat;
  document.getElementById("m-umur").innerText = hitungUmurOtomatis(student.ttl);
  modal.classList.add("active");
  document.getElementById("m-title").innerText = student.title || "NEWBIE";
}

function closeModal() {
  const modal = document.getElementById("detail-modal");

  modal.classList.add("closing");

  setTimeout(() => {
    modal.classList.remove("active");
    modal.classList.remove("closing");
  }, 400);
}

document.getElementById("detail-modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

changePage(1);

function loadOptimizedImage(src, targetElement) {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = src;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const maxSize = 500;
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
  };
}

function openModal(student) {
  const modal = document.getElementById("detail-modal");
  const formatAbsen = student.absen.toString().padStart(2, "0");
  const photoContainer = modal.querySelector(".modal-photo-container");

  modal.classList.remove("closing");

  photoContainer.innerHTML = "Loading...";
  loadOptimizedImage(`img/${formatAbsen}.png`, photoContainer);

  document.getElementById("m-nama").innerText = student.nama;
  document.getElementById("m-umur").innerText = hitungUmurOtomatis(student.ttl);
  document.getElementById("m-ttl").innerText = student.ttl;
  document.getElementById("m-minat").innerText = student.minat;

  modal.classList.add("active");
}
