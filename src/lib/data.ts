import type { KosakataIslam } from "@/lib/types";

export const simkoniData: KosakataIslam[] = [
  {
    id: 1,
    keyword: ["wakaf", "perwakafan", "waqf"],
    kosakata: "Wakaf",
    notasi: "297.63",
    konteks: "Digunakan untuk karya yang membahas wakaf dalam aspek hukum (fiqh), pengelolaan (nadzir), aset wakaf, dan praktik keagamaan terkait di dunia Islam.",
    kategori: "Fiqh",
    catatan: "Gunakan notasi ini jika wakaf adalah subjek utama. Untuk wakaf sebagai bagian dari ekonomi Islam, pertimbangkan notasi ekonomi syariah."
  },
  {
    id: 2,
    keyword: ["zakat", "infak", "sedekah", "infaq"],
    kosakata: "Zakat",
    notasi: "297.64",
    konteks: "Mencakup karya tentang zakat sebagai kewajiban ibadah (rukun Islam), aspek hukum (fiqh), jenis-jenisnya (maal, fitrah), dan perannya dalam sistem distribusi ekonomi Islam.",
    kategori: "Fiqh",
    catatan: "Bedakan dengan 'Pajak'. Jika karya membandingkan zakat dan pajak, gunakan notasi untuk kedua subjek. Infak dan sedekah yang lebih umum bisa masuk di sini jika dibahas dalam konteks fiqh."
  },
  {
    id: 3,
    keyword: ["hadis", "sunnah", "hadits", "bukhari", "muslim"],
    kosakata: "Hadis",
    notasi: "297.2",
    konteks: "Untuk karya-karya yang berfokus pada studi Hadis, termasuk ilmu musthalah al-hadits (terminologi), kritik sanad dan matan, serta kitab-kitab himpunan hadis (e.g., Shahih Bukhari, Muslim, dll).",
    kategori: "Ulumul Hadis",
  },
  {
    id: 4,
    keyword: ["tafsir", "ta'wil", "quran", "al-qur'an"],
    kosakata: "Tafsir Al-Qur'an",
    notasi: "297.13",
    konteks: "Karya yang secara spesifik menafsirkan ayat-ayat Al-Qur'an, baik secara tahlili (analitis per ayat), ijmali (global), maupun maudhu'i (tematik).",
    kategori: "Ulumul Qur'an",
    catatan: "Jika karya hanya berupa terjemahan Al-Qur'an tanpa tafsir mendalam, gunakan notasi untuk terjemahan (297.11). Jika membahas metode tafsir, gunakan 'Ilmu Tafsir (297.12)."
  },
  {
    id: 5,
    keyword: ["akhlak", "etika", "tasawuf", "sufisme", "tazkiyatun nafs"],
    kosakata: "Akhlak & Tasawuf",
    notasi: "297.5",
    konteks: "Meliputi karya-karya tentang etika Islam, moralitas, penyucian jiwa (tazkiyatun nafs), dan jalan spiritual dalam Islam (sufisme, tarekat).",
    kategori: "Akhlak & Tasawuf",
  },
  {
    id: 6,
    keyword: ["sejarah islam", "tarikh", "sirah nabawiyah"],
    kosakata: "Sejarah Islam",
    notasi: "297.9",
    konteks: "Karya yang membahas sejarah peradaban Islam, termasuk Sirah Nabawiyah (sejarah Nabi Muhammad SAW), masa Khulafaur Rasyidin, dinasti-dinasti Islam, hingga perkembangan Islam di berbagai wilayah.",
    kategori: "Sejarah Islam",
    catatan: "Untuk biografi tokoh selain Nabi Muhammad, gunakan notasi biografi (920) dengan penambahan subjek tokoh tersebut."
  },
  {
    id: 7,
    keyword: ["al-qur'an", "quran", "mushaf"],
    kosakata: "Al-Qur'an dan ilmu yang berkaitan",
    notasi: "297.1",
    konteks: "Mencakup mushaf Al-Qur'an dan ilmu pendukung yang berkaitan langsung dengan Al-Qur'an.",
    kategori: "Ulumul Qur'an"
  },
  {
    id: 8,
    keyword: ["ilmu al-qur'an", "ulumul quran", "ulum al-qur'an"],
    kosakata: "Ilmu-ilmu Al-Qur'an",
    notasi: "297.11",
    konteks: "Kajian umum tentang ilmu-ilmu Al-Qur'an (ulumul Qur'an), termasuk hubungan Al-Qur'an dan Al-Hadis secara metodologis.",
    kategori: "Ulumul Qur'an"
  },
  {
    id: 9,
    keyword: ["asbabun nuzul", "sebab turunnya ayat", "asbab nuzul"],
    kosakata: "Asbabun Nuzul",
    notasi: "297.111",
    konteks: "Kajian sebab-sebab turunnya ayat Al-Qur'an dan pembahasan kemurnian naskah.",
    kategori: "Ulumul Qur'an"
  },
  {
    id: 10,
    keyword: ["qiraat", "qiraah", "bacaan al-qur'an", "tilawah"],
    kosakata: "Ilmu Qiraat",
    notasi: "297.112",
    konteks: "Studi variasi bacaan Al-Qur'an, hafalan, dan tatacara pembacaan.",
    kategori: "Ulumul Qur'an"
  },
  {
    id: 11,
    keyword: ["tajwid", "makharijul huruf", "hukum bacaan"],
    kosakata: "Tajwid",
    notasi: "297.1121",
    konteks: "Aturan pelafalan Al-Qur'an (makharij, sifat huruf, hukum bacaan) untuk ketepatan tilawah.",
    kategori: "Ulumul Qur'an"
  },
  {
    id: 12,
    keyword: ["terjemahan al-qur'an", "terjemah quran", "translation"],
    kosakata: "Al-Qur'an dan terjemahannya",
    notasi: "297.12",
    konteks: "Karya terjemahan Al-Qur'an ke berbagai bahasa, termasuk indeks Al-Qur'an.",
    kategori: "Ulumul Qur'an",
    catatan: "Tambahkan notasi bahasa dari Tabel 6 jika diperlukan (contoh: 297.1221 untuk bahasa Inggris)."
  },
  {
    id: 13,
    keyword: ["ilmu tafsir", "metode tafsir", "ushul at-tafsir"],
    kosakata: "Ilmu Tafsir",
    notasi: "297.131",
    konteks: "Metodologi tafsir, pendekatan tahlili/ijmali/maudhu'i, kaidah penafsiran ayat.",
    kategori: "Ulumul Qur'an"
  },
  {
    id: 14,
    keyword: ["juz amma", "ayat kursi", "surat yasin", "tafsir surat"],
    kosakata: "Kumpulan ayat/surat tertentu",
    notasi: "297.14",
    konteks: "Kumpulan atau tafsir atas surat/ayat tertentu seperti Juz Amma, Ayat Kursi, Yasin, Al-Baqarah, Al-Maidah.",
    kategori: "Ulumul Qur'an"
  },
  {
    id: 15,
    keyword: ["kritik al-qur'an", "komentar al-qur'an", "orientalisme al-qur'an"],
    kosakata: "Kritik dan komentar Al-Qur'an",
    notasi: "297.15",
    konteks: "Kajian kritik, sanggahan, dan komentar terhadap Al-Qur'an secara akademik.",
    kategori: "Ulumul Qur'an"
  },
  {
    id: 16,
    keyword: ["kandungan al-qur'an", "tema al-qur'an", "maudhu'i"],
    kosakata: "Kandungan Al-Qur'an",
    notasi: "297.16",
    konteks: "Pembahasan tema/isi Al-Qur'an seperti hukum, akidah, kisah, etika, dan sosial.",
    kategori: "Ulumul Qur'an"
  },
  {
    id: 17,
    keyword: ["kisah al-qur'an", "cerita nabi", "legenda islam"],
    kosakata: "Cerita dan kisah dari Al-Qur'an",
    notasi: "297.161",
    konteks: "Kisah, legenda, perumpamaan dalam Al-Qur'an untuk pendidikan agama Islam.",
    kategori: "Ulumul Qur'an"
  },
  {
    id: 18,
    keyword: ["mtq", "musabaqah tilawatil quran", "lomba hafalan"],
    kosakata: "Musabaqah Tilawatil Qur'an (MTQ)",
    notasi: "297.17",
    konteks: "Kegiatan lomba terkait Al-Qur'an seperti tilawah, tahfiz, dan musabaqah lainnya.",
    kategori: "Ulumul Qur'an"
  },
  {
    id: 19,
    keyword: ["sejarah al-qur'an", "kodifikasi", "penyusunan mushaf"],
    kosakata: "Sejarah Al-Qur'an",
    notasi: "297.19",
    konteks: "Sejarah penurunan, pengumpulan, penulisan, dan pembukuan Al-Qur'an.",
    kategori: "Ulumul Qur'an"
  },
  {
    id: 20,
    keyword: ["hadis", "hadits", "sunnah", "as-sunnah"],
    kosakata: "Al-Hadis dan yang berkaitan",
    notasi: "297.2",
    konteks: "Kajian umum tentang hadis dan sunnah Nabi Muhammad SAW.",
    kategori: "Ulumul Hadis"
  },
  {
    id: 21,
    keyword: ["ilmu hadis", "musthalah al-hadits", "ulumul hadis"],
    kosakata: "Ilmu Hadis",
    notasi: "297.21",
    konteks: "Studi terminologi, metodologi, dan kritik hadis (sanad dan matan).",
    kategori: "Ulumul Hadis"
  },
  {
    id: 22,
    keyword: ["dirayah", "asbab wurud", "nasikh mansukh"],
    kosakata: "Dirayah/Keotentikan Hadis",
    notasi: "297.211",
    konteks: "Penilaian keotentikan hadis, termasuk asbab wurud serta nasikh-mansukh.",
    kategori: "Ulumul Hadis"
  },
  {
    id: 23,
    keyword: ["kumpulan hadis", "jawami'", "musnad", "sunan"],
    kosakata: "Kumpulan Hadis (Umum)",
    notasi: "297.22",
    konteks: "Kompilasi hadis secara umum, tidak terbatas pada satu kitab tertentu.",
    kategori: "Ulumul Hadis"
  },
  {
    id: 24,
    keyword: ["shahih bukhari", "imam bukhari", "al-bukhari"],
    kosakata: "Kumpulan Hadis Bukhari",
    notasi: "297.221",
    konteks: "Karya yang berfokus pada kompilasi hadis Imam al-Bukhari.",
    kategori: "Ulumul Hadis"
  },
  {
    id: 25,
    keyword: ["shahih muslim", "imam muslim"],
    kosakata: "Kumpulan Hadis Muslim",
    notasi: "297.222",
    konteks: "Karya yang berfokus pada kompilasi hadis Imam Muslim.",
    kategori: "Ulumul Hadis"
  },
  {
    id: 26,
    keyword: ["abu dawud", "abu daud", "sunan abu dawud"],
    kosakata: "Kumpulan Hadis Abu Dawud",
    notasi: "297.223",
    konteks: "Kompilasi hadis Sunan Abu Dawud.",
    kategori: "Ulumul Hadis"
  },
  {
    id: 27,
    keyword: ["an-nasa'i", "nasai", "sunan an-nasa'i"],
    kosakata: "Kumpulan Hadis Nasa'i",
    notasi: "297.224",
    konteks: "Kompilasi hadis Sunan an-Nasa'i.",
    kategori: "Ulumul Hadis"
  },
  {
    id: 28,
    keyword: ["at-tirmidzi", "turmuzi", "sunan tirmidzi"],
    kosakata: "Kumpulan Hadis Turmuzi/Tirmidzi",
    notasi: "297.225",
    konteks: "Kompilasi hadis Sunan at-Tirmidzi.",
    kategori: "Ulumul Hadis"
  },
  {
    id: 29,
    keyword: ["ibnu majah", "sunan ibnu majah"],
    kosakata: "Kumpulan Hadis Ibnu Majah",
    notasi: "297.226",
    konteks: "Kompilasi hadis Sunan Ibnu Majah.",
    kategori: "Ulumul Hadis"
  },
  {
    id: 30,
    keyword: ["musnad", "ahmad bin hanbal", "imam hanbal"],
    kosakata: "Kumpulan Hadis Ahmad bin Hanbal",
    notasi: "297.227",
    konteks: "Kompilasi hadis Musnad Ahmad bin Hanbal.",
    kategori: "Ulumul Hadis"
  },
  {
    id: 31,
    keyword: ["imam malik", "muwatta", "malik bin anas"],
    kosakata: "Kumpulan Hadis Malik bin Anas",
    notasi: "297.228",
    konteks: "Kompilasi hadis Imam Malik (al-Muwatta).",
    kategori: "Ulumul Hadis"
  },
  {
    id: 32,
    keyword: ["derajat hadis", "sahih", "hasan", "daif", "mursal", "mawdu"],
    kosakata: "Kumpulan Hadis menurut derajat",
    notasi: "297.24",
    konteks: "Pengelompokan hadis berdasarkan derajat keotentikan (sahih, hasan, da'if, dll).",
    kategori: "Ulumul Hadis"
  },
  {
    id: 33,
    keyword: ["kritik hadis", "hadis palsu", "syiah"],
    kosakata: "Kritik terhadap Hadis",
    notasi: "297.25",
    konteks: "Kritik terhadap hadis, termasuk pembahasan hadis lemah/palsu dan perspektif Syiah.",
    kategori: "Ulumul Hadis"
  },
  {
    id: 34,
    keyword: ["akidah", "aqidah", "ilmu kalam", "rukun iman"],
    kosakata: "Akidah/Ilmu Kalam",
    notasi: "297.3",
    konteks: "Kajian akidah Islam (keimanan), rukun iman, dan syahadat.",
    kategori: "Aqidah/Ilmu Kalam"
  },
  {
    id: 35,
    keyword: ["tauhid", "iman kepada allah", "pengesaan tuhan"],
    kosakata: "Iman kepada Allah (Tauhid)",
    notasi: "297.31",
    konteks: "Pembahasan tauhid, pengesaan Tuhan, dan dasar-dasar iman kepada Allah.",
    kategori: "Aqidah/Ilmu Kalam"
  },
  {
    id: 36,
    keyword: ["asmaul husna", "nama-nama allah", "sifat allah"],
    kosakata: "Sifat dan Asmaul Husna",
    notasi: "297.311",
    konteks: "Kajian sifat-sifat Allah serta Asmaul Husna.",
    kategori: "Aqidah/Ilmu Kalam"
  },
  {
    id: 37,
    keyword: ["mukmin", "musyrik", "munafik", "kafir", "mualaf"],
    kosakata: "Hubungan Allah dengan makhluk",
    notasi: "297.313",
    konteks: "Status dan istilah terkait hubungan manusia dengan Allah (mukmin, musyrik, munafik, kafir, mualaf).",
    kategori: "Aqidah/Ilmu Kalam"
  },
  {
    id: 38,
    keyword: ["malaikat", "iman kepada malaikat"],
    kosakata: "Iman kepada Malaikat",
    notasi: "297.32",
    konteks: "Kajian keimanan terhadap malaikat dalam Islam.",
    kategori: "Aqidah/Ilmu Kalam"
  },
  {
    id: 39,
    keyword: ["kitab-kitab allah", "taurat", "injil", "zabur"],
    kosakata: "Iman kepada kitab-kitab Allah",
    notasi: "297.33",
    konteks: "Keimanan terhadap kitab-kitab Allah selain Al-Qur'an (Taurat, Injil, Zabur).",
    kategori: "Aqidah/Ilmu Kalam",
    catatan: "Jangan gunakan untuk Al-Qur'an dan terjemahan; lihat 297.1 dan 297.12."
  },
  {
    id: 40,
    keyword: ["nabi", "rasul", "mukjizat", "ulul azmi"],
    kosakata: "Iman kepada Nabi dan Rasul",
    notasi: "297.34",
    konteks: "Keimanan kepada para nabi dan rasul, mukjizat, dan karamah.",
    kategori: "Aqidah/Ilmu Kalam",
    catatan: "Tidak untuk sirah Nabi Muhammad SAW; lihat 297.91."
  },
  {
    id: 41,
    keyword: ["akhirat", "hari kemudian", "yaum al-akhir"],
    kosakata: "Iman kepada Hari Kemudian",
    notasi: "297.35",
    konteks: "Eskatologi Islam: kehidupan setelah mati, alam barzah, hari kiamat, surga-neraka, pahala-dosa.",
    kategori: "Aqidah/Ilmu Kalam"
  },
  {
    id: 42,
    keyword: ["qadha", "qadar", "takdir"],
    kosakata: "Iman kepada Qadha dan Qadar",
    notasi: "297.36",
    konteks: "Pembahasan takdir, ketetapan Allah, dan implikasi akidah.",
    kategori: "Aqidah/Ilmu Kalam"
  },
  {
    id: 43,
    keyword: ["jin", "iblis", "setan"],
    kosakata: "Jin, Iblis, Setan",
    notasi: "297.371",
    konteks: "Kepercayaan Islam terkait makhluk gaib seperti jin, iblis, dan setan.",
    kategori: "Aqidah/Ilmu Kalam"
  },
  {
    id: 44,
    keyword: ["dajjal", "al-masih", "imam mahdi"],
    kosakata: "Dajjal, Al-Masih, Imam Mahdi",
    notasi: "297.373",
    konteks: "Kepercayaan eskatologis tentang Dajjal, Al-Masih, dan Imam Mahdi.",
    kategori: "Aqidah/Ilmu Kalam"
  },
  {
    id: 45,
    keyword: ["fiqh", "hukum islam", "syariat"],
    kosakata: "Fiqh/Hukum Islam",
    notasi: "297.4",
    konteks: "Kajian umum syariat dan hukum Islam (fiqh).",
    kategori: "Fiqh/Hukum Islam"
  },
  {
    id: 46,
    keyword: ["usul fiqh", "ushul fiqh", "metodologi fiqh"],
    kosakata: "Usul Fikih",
    notasi: "297.402",
    konteks: "Metodologi penetapan hukum (dalil, kaidah, istinbat).",
    kategori: "Fiqh/Hukum Islam"
  },
  {
    id: 47,
    keyword: ["ibadah", "ritual islam", "praktik agama"],
    kosakata: "Ibadah",
    notasi: "297.41",
    konteks: "Ritual/praktik agama Islam secara komprehensif (salat, puasa, zakat, haji, dll).",
    kategori: "Ibadah"
  },
  {
    id: 48,
    keyword: ["thaharah", "bersuci", "wudhu", "tayamum", "najis"],
    kosakata: "Bersuci (Thaharah)",
    notasi: "297.411",
    konteks: "Ketentuan bersuci: wudu, tayamum, istinja', mandi wajib, najis, hadas.",
    kategori: "Ibadah"
  },
  {
    id: 49,
    keyword: ["salat", "shalat", "sholat", "azan", "iqamat"],
    kosakata: "Salat",
    notasi: "297.412",
    konteks: "Ketentuan salat, adzan, iqamah, dan pelaksanaan.",
    kategori: "Ibadah"
  },
  {
    id: 50,
    keyword: ["salat wajib", "salat fardhu", "lima waktu"],
    kosakata: "Salat Wajib",
    notasi: "297.4121",
    konteks: "Salat fardhu lima waktu dan ketentuannya.",
    kategori: "Ibadah"
  },
  {
    id: 51,
    keyword: ["salat jumat", "jum'at"],
    kosakata: "Salat Jumat",
    notasi: "297.41212",
    konteks: "Ketentuan dan pelaksanaan salat Jumat.",
    kategori: "Ibadah"
  },
  {
    id: 52,
    keyword: ["salat jenazah", "shalat jenazah"],
    kosakata: "Salat Jenazah",
    notasi: "297.41213",
    konteks: "Ketentuan salat jenazah dalam Islam.",
    kategori: "Ibadah"
  },
  {
    id: 53,
    keyword: ["salat sunah", "salat sunnah", "duha", "istisqa", "istikharah"],
    kosakata: "Salat Sunah",
    notasi: "297.4122",
    konteks: "Ragam salat sunah seperti gerhana, duha, istisqa, istikharah, dan lainnya.",
    kategori: "Ibadah",
    catatan: "Untuk tarawih/tahajud/qiyamul lail lihat 297.4133."
  },
  {
    id: 54,
    keyword: ["masjid", "mushola", "surau", "langgar"],
    kosakata: "Masjid",
    notasi: "297.4125",
    konteks: "Masjid dan fasilitasnya, pengelolaan jamaah dan takmir.",
    kategori: "Ibadah"
  },
  {
    id: 55,
    keyword: ["itikaf", "i'tikaf"],
    kosakata: "I'tikaf",
    notasi: "297.4126",
    konteks: "Praktik i'tikaf dan ketentuannya.",
    kategori: "Ibadah"
  },
  {
    id: 56,
    keyword: ["puasa", "shaum"],
    kosakata: "Puasa",
    notasi: "297.413",
    konteks: "Ibadah puasa dalam Islam dan ketentuannya.",
    kategori: "Ibadah"
  },
  {
    id: 57,
    keyword: ["ramadan", "ramadhan", "puasa wajib"],
    kosakata: "Puasa Wajib (Ramadan)",
    notasi: "297.4131",
    konteks: "Ketentuan puasa wajib Ramadan dan ibadah bulan Ramadan.",
    kategori: "Ibadah"
  },
  {
    id: 58,
    keyword: ["qiyamul lail", "tarawih", "tahajud", "salat malam"],
    kosakata: "Qiyamul Lail (Tarawih/Tahajud)",
    notasi: "297.4133",
    konteks: "Salat malam termasuk tarawih dan tahajud.",
    kategori: "Ibadah"
  },
  {
    id: 59,
    keyword: ["lailatul qadar", "lailatulkadar"],
    kosakata: "Lailatul Qadar",
    notasi: "297.4134",
    konteks: "Pembahasan malam Lailatul Qadar.",
    kategori: "Ibadah"
  },
  {
    id: 60,
    keyword: ["zakat", "fitrah", "maal", "mustahiq", "amil"],
    kosakata: "Zakat (Umum)",
    notasi: "297.414",
    konteks: "Ketentuan zakat dan pengelolaannya (amil, mustahiq).",
    kategori: "Ibadah"
  },
  {
    id: 61,
    keyword: ["zakat fitrah"],
    kosakata: "Zakat Fitrah",
    notasi: "297.4141",
    konteks: "Ketentuan zakat fitrah.",
    kategori: "Ibadah"
  },
  {
    id: 62,
    keyword: ["zakat mal", "zakat maal", "harta simpanan"],
    kosakata: "Zakat Mal",
    notasi: "297.4142",
    konteks: "Ketentuan zakat harta, emas, perak, simpanan.",
    kategori: "Ibadah"
  },
  {
    id: 63,
    keyword: ["zakat pendapatan", "zakat profesi"],
    kosakata: "Zakat Pendapatan/Profesi",
    notasi: "297.4143",
    konteks: "Zakat atas penghasilan/pendapatan dan profesi.",
    kategori: "Ibadah"
  },
  {
    id: 64,
    keyword: ["haji", "manasik"],
    kosakata: "Haji",
    notasi: "297.415",
    konteks: "Ibadah haji dan manasiknya.",
    kategori: "Ibadah"
  },
  {
    id: 65,
    keyword: ["umrah", "umroh"],
    kosakata: "Umrah",
    notasi: "297.4154",
    konteks: "Ibadah umrah dan ketentuannya.",
    kategori: "Ibadah"
  },
  {
    id: 66,
    keyword: ["mekah", "madinah", "masjidilharam", "masjid nabawi", "al-aqsa"],
    kosakata: "Kota/Tempat Suci Islam",
    notasi: "297.4157",
    konteks: "Lokasi suci dalam Islam seperti Makkah, Madinah, Ka'bah, Masjidilharam, Masjid Nabawi, Al-Aqsa.",
    kategori: "Ibadah"
  },
  {
    id: 67,
    keyword: ["jenazah", "pengurusan mayat", "takziah", "ziarah kubur", "tahlil"],
    kosakata: "Pengurusan Jenazah",
    notasi: "297.416",
    konteks: "Pengurusan sakit/jenazah, takziah, ziarah kubur, talqin dan tahlil.",
    kategori: "Ibadah"
  },
  {
    id: 68,
    keyword: ["kurban", "qurban"],
    kosakata: "Kurban/Qurban",
    notasi: "297.4171",
    konteks: "Ibadah penyembelihan hewan kurban.",
    kategori: "Ibadah"
  },
  {
    id: 69,
    keyword: ["akikah", "aqiqah"],
    kosakata: "Akikah",
    notasi: "297.4172",
    konteks: "Ibadah akikah untuk kelahiran anak.",
    kategori: "Ibadah"
  },
  {
    id: 70,
    keyword: ["khitan", "sunat"],
    kosakata: "Khitan/Sunat",
    notasi: "297.418",
    konteks: "Khitan dalam perspektif hukum Islam.",
    kategori: "Ibadah"
  },
  {
    id: 71,
    keyword: ["muamalah", "jual beli", "perdagangan", "riba"],
    kosakata: "Muamalah (Hukum Dagang/Perdagangan)",
    notasi: "297.42",
    konteks: "Hukum dagang/perdagangan, perjanjian, syarikah, riba, sedekah/infak/wakaf/hibah.",
    kategori: "Muamalah"
  },
  {
    id: 72,
    keyword: ["bank syariah", "perbankan islam", "baitul mal"],
    kosakata: "Bank Islam/Keuangan Syariah",
    notasi: "297.427",
    konteks: "Sistem perbankan dan lembaga keuangan Islam.",
    kategori: "Muamalah",
    catatan: "Untuk sistem ekonomi Islam secara umum gunakan 297.63."
  },
  {
    id: 73,
    keyword: ["munakahat", "hukum keluarga", "pernikahan", "perceraian"],
    kosakata: "Hukum Keluarga (Munakahat)",
    notasi: "297.43",
    konteks: "Hukum perkawinan, perceraian, iddah, rujuk, hak-kewajiban suami-istri.",
    kategori: "Fiqh/Hukum Islam"
  },
  {
    id: 74,
    keyword: ["waris", "faraid", "harta pusaka", "ahli waris"],
    kosakata: "Hukum Waris (Faraid)",
    notasi: "297.44",
    konteks: "Hukum waris Islam: harta pusaka, ahli waris, pembagian, wasiat.",
    kategori: "Fiqh/Hukum Islam"
  },
  {
    id: 75,
    keyword: ["jinayat", "hukum pidana islam", "zina", "hudud", "qishas"],
    kosakata: "Hukum Pidana Islam (Jinayat)",
    notasi: "297.45",
    konteks: "Pidana dalam Islam: pencurian, perampokan, pembunuhan, zina, pemerkosaan, penyimpangan seksual, minuman keras, narkoba, sumpah palsu, murtad, judi, suap, korupsi.",
    kategori: "Fiqh/Hukum Islam"
  },
  {
    id: 76,
    keyword: ["qada'", "pengadilan agama", "perdata islam"],
    kosakata: "Hukum Pengadilan Islam (Qada')",
    notasi: "297.46",
    konteks: "Sistem peradilan agama dan hukum perdata Islam.",
    kategori: "Fiqh/Hukum Islam"
  },
  {
    id: 77,
    keyword: ["jihad", "hukum perang", "terorisme"],
    kosakata: "Jihad, Perang & Damai, Terorisme",
    notasi: "297.474",
    konteks: "Pembahasan jihad serta hukum perang dan damai dalam Islam, termasuk isu terorisme.",
    kategori: "Fiqh/Hukum Islam"
  },
  {
    id: 78,
    keyword: ["mazhab", "hanafi", "maliki", "syafii", "hanbali", "syiah"],
    kosakata: "Mazhab Fikih",
    notasi: "297.48",
    konteks: "Perbandingan mazhab dan hubungan antar mazhab (Hanafi, Maliki, Syafi'i, Hanbali, Syiah).",
    kategori: "Fiqh/Hukum Islam"
  },
  {
    id: 79,
    keyword: ["halal haram", "makanan halal", "minuman halal"],
    kosakata: "Makanan dan Minuman (Halal-Haram)",
    notasi: "297.491",
    konteks: "Ketentuan halal-haram pada makanan dan minuman.",
    kategori: "Fiqh/Hukum Islam"
  },
  {
    id: 80,
    keyword: ["fikih wanita", "hukum wanita"],
    kosakata: "Fikih Wanita",
    notasi: "297.496",
    konteks: "Masalah fikih terkait wanita dalam Islam.",
    kategori: "Fiqh/Hukum Islam",
    catatan: "Untuk kedudukan wanita dalam Islam lihat 297.61522."
  },
  {
    id: 81,
    keyword: ["akhlak", "etika islam", "adab", "budi pekerti"],
    kosakata: "Akhlak",
    notasi: "297.51",
    konteks: "Etika, adab, dan budi pekerti dalam Islam (naqli dan aqli).",
    kategori: "Akhlak"
  },
  {
    id: 82,
    keyword: ["tasawuf", "sufi", "mistik islam", "tarekat"],
    kosakata: "Tasawuf",
    notasi: "297.52",
    konteks: "Ajaran tasawuf, jenis dan tingkatan tasawuf, serta tarekat.",
    kategori: "Tasawuf"
  },
  {
    id: 83,
    keyword: ["doa", "dzikir", "wirid", "istighosah", "shalawat"],
    kosakata: "Doa dan Zikir",
    notasi: "297.54",
    konteks: "Kumpulan doa, zikir, wirid, istighosah, dan shalawat.",
    kategori: "Ibadah"
  },
  {
    id: 84,
    keyword: ["sosial islam", "budaya islam", "masyarakat islam"],
    kosakata: "Sosial & Budaya Islam",
    notasi: "297.6",
    konteks: "Kajian sosial dan budaya dalam masyarakat Islam (struktur, perubahan, layanan).",
    kategori: "Sosial & Budaya"
  },
  {
    id: 85,
    keyword: ["politik islam", "negara islam", "khalifah"],
    kosakata: "Politik Islam",
    notasi: "297.62",
    konteks: "Pandangan Islam terhadap politik, negara Islam, dan sistem pemerintahan.",
    kategori: "Sosial & Budaya"
  },
  {
    id: 86,
    keyword: ["ekonomi islam", "ekonomi syariah", "bisnis islami"],
    kosakata: "Ekonomi Islam",
    notasi: "297.63",
    konteks: "Sistem ekonomi Islam (ekonomi syariah), keuangan, dan bisnis Islami.",
    kategori: "Sosial & Budaya"
  },
  {
    id: 87,
    keyword: ["organisasi islam", "mui", "muhammadiyah", "nu"],
    kosakata: "Organisasi Islam",
    notasi: "297.66",
    konteks: "Organisasi sosial, politik, pemuda/mahasiswa, dan wanita Islam (MUI, Muhammadiyah, NU, dll).",
    kategori: "Sosial & Budaya"
  },
  {
    id: 88,
    keyword: ["kesenian islam", "sastra islam", "arsitektur islam", "kaligrafi"],
    kosakata: "Kesenian & Kebudayaan Islam",
    notasi: "297.67",
    konteks: "Kesenian dan budaya Islam: sastra, arsitektur, seni rupa, dekorasi, khat/kaligrafi, musik, drama/film.",
    kategori: "Sosial & Budaya"
  },
  {
    id: 89,
    keyword: ["adat islam", "halalbihalal", "hari besar islam", "idul fitri", "idul adha", "maulid"],
    kosakata: "Adat & Hari Besar Islam",
    notasi: "297.69",
    konteks: "Adat istiadat Islam termasuk halalbihalal dan peringatan hari-hari besar Islam.",
    kategori: "Sosial & Budaya"
  },
  {
    id: 90,
    keyword: ["filsafat islam", "falsafah islam"],
    kosakata: "Filsafat Islam",
    notasi: "297.71",
    konteks: "Kajian filsafat dalam tradisi Islam dan pemikirannya.",
    kategori: "Filsafat Islam"
  },
  {
    id: 91,
    keyword: ["psikologi islam", "kepribadian islam"],
    kosakata: "Psikologi Islam",
    notasi: "297.715",
    konteks: "Kajian psikologi dalam perspektif Islam.",
    kategori: "Filsafat Islam"
  },
  {
    id: 92,
    keyword: ["dakwah", "tablig", "penyebaran islam", "mubaligh"],
    kosakata: "Dakwah Islam",
    notasi: "297.72",
    konteks: "Penyebaran ajaran Islam, pelaku dakwah, kepemimpinan Islam.",
    kategori: "Dakwah"
  },
  {
    id: 93,
    keyword: ["pendidikan islam", "madrasah", "pesantren", "tpa", "majlis taklim"],
    kosakata: "Pendidikan Islam",
    notasi: "297.73",
    konteks: "Metode/sistem pendidikan Islam, madrasah, pondok pesantren, TPA/TPQ, majelis taklim.",
    kategori: "Pendidikan Islam"
  },
  {
    id: 94,
    keyword: ["tajdid", "pembaharuan islam", "pemurnian"],
    kosakata: "Pemurnian & Pembaharuan",
    notasi: "297.74",
    konteks: "Gerakan pemurnian (Wahhabiyah) dan pembaharuan pemikiran dalam Islam.",
    kategori: "Filsafat Islam"
  },
  {
    id: 95,
    keyword: ["media islam", "pers islam", "jurnal islam", "majalah islam"],
    kosakata: "Pers & Media Massa Islam",
    notasi: "297.75",
    konteks: "Media massa Islam dan pers keislaman.",
    kategori: "Sosial & Budaya"
  },
  {
    id: 96,
    keyword: ["sunni", "ahlussunnah", "aswaja"],
    kosakata: "Sunni/Ahlussunnah",
    notasi: "297.81",
    konteks: "Aliran Sunni dalam Islam.",
    kategori: "Aliran & Sekte"
  },
  {
    id: 97,
    keyword: ["syiah", "shi'a"],
    kosakata: "Syiah",
    notasi: "297.82",
    konteks: "Aliran Syiah dalam Islam.",
    kategori: "Aliran & Sekte"
  },
  {
    id: 98,
    keyword: ["mu'tazilah"],
    kosakata: "Mu'tazilah",
    notasi: "297.83",
    konteks: "Aliran Mu'tazilah dalam sejarah pemikiran Islam.",
    kategori: "Aliran & Sekte"
  },
  {
    id: 99,
    keyword: ["khawarij"],
    kosakata: "Khawarij",
    notasi: "297.84",
    konteks: "Aliran Khawarij dalam sejarah Islam.",
    kategori: "Aliran & Sekte"
  },
  {
    id: 100,
    keyword: ["ahmadiyah"],
    kosakata: "Ahmadiyah",
    notasi: "297.87",
    konteks: "Aliran Ahmadiyah dalam Islam.",
    kategori: "Aliran & Sekte"
  },
  {
    id: 101,
    keyword: ["bahai", "bahaiyah", "babisme"],
    kosakata: "Bahaiyah/Babisme",
    notasi: "297.88",
    konteks: "Kepercayaan Bahai dan Babisme yang muncul kemudian.",
    kategori: "Aliran & Sekte"
  },
  {
    id: 102,
    keyword: ["sirah", "sirah nabawiyah", "biografi nabi"],
    kosakata: "Sirah Nabi Muhammad SAW",
    notasi: "297.912",
    konteks: "Sejarah hidup Nabi Muhammad SAW (Sirah Nabawiyah).",
    kategori: "Sejarah Islam"
  },
  {
    id: 103,
    keyword: ["khulafaur rasyidin", "abu bakar", "umar", "utsman", "ali"],
    kosakata: "Khulafaurrasyidin",
    notasi: "297.92",
    konteks: "Sejarah empat khalifah setelah Nabi: Abu Bakar, Umar, Utsman, Ali.",
    kategori: "Sejarah Islam"
  },
  {
    id: 104,
    keyword: ["daulah umayyah", "muawiyah", "umayyah"],
    kosakata: "Zaman Daulah Umayyah",
    notasi: "297.93",
    konteks: "Sejarah masa pemerintahan Dinasti Umayyah.",
    kategori: "Sejarah Islam"
  },
  {
    id: 105,
    keyword: ["daulah abbasiyah", "abbasiyah"],
    kosakata: "Zaman Daulah Abbasiyah",
    notasi: "297.94",
    konteks: "Sejarah masa pemerintahan Dinasti Abbasiyah.",
    kategori: "Sejarah Islam"
  }
];

const SIMKONI_URN_BASE = "urn:simkoni:";
const SIMKONI_SCHEME_ID = `${SIMKONI_URN_BASE}scheme:kosakata-notasi-islam`;
const SIMKONI_SOURCE_ID = `${SIMKONI_URN_BASE}source:pdf:2024-notasi-dan-kosakata-islam-cetak`;

const conceptId = (id: number) => `${SIMKONI_URN_BASE}concept:${id}`;

const slugifyKategori = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "dan")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const buildNotasiToIds = (data: KosakataIslam[]) => {
  const map = new Map<string, number[]>();
  for (const item of data) {
    const ids = map.get(item.notasi);
    if (ids) ids.push(item.id);
    else map.set(item.notasi, [item.id]);
  }
  return map;
};

const findBroaderIdByNotasi = (notasi: string, notasiToIds: Map<string, number[]>) => {
  const candidates: string[] = [];
  for (let i = 1; i < notasi.length; i++) {
    const prefix = notasi.slice(0, notasi.length - i);
    if (prefix.endsWith(".")) continue;
    if (notasiToIds.has(prefix)) candidates.push(prefix);
  }
  candidates.sort((a, b) => b.length - a.length);
  for (const candidate of candidates) {
    const ids = notasiToIds.get(candidate);
    if (ids && ids.length === 1) return ids[0];
  }
  return undefined;
};

/**
 * Linked Data (JSON-LD) untuk kosakata SIMKONI.
 *
 * - Model: SKOS ConceptScheme + SKOS Concept
 * - `keyword[]` -> `skos:altLabel`
 * - `kosakata` -> `skos:prefLabel`
 * - `konteks` -> `skos:scopeNote`
 * - `catatan` -> `skos:note`
 * - `notasi` -> `skos:notation`
 * - `kategori` dikelompokkan sebagai `skos:Collection`
 * - Relasi `skos:broader` diturunkan dari prefiks notasi (jika unik)
 */
export const simkoniLinkedData = (() => {
  const notasiToIds = buildNotasiToIds(simkoniData);

  const schemeNode = {
    "@id": SIMKONI_SCHEME_ID,
    "@type": "skos:ConceptScheme",
    "dcterms:title": { id: "SIMKONI: Kosakata & Notasi Islam" },
    "dcterms:language": "id",
    "dcterms:source": SIMKONI_SOURCE_ID,
  };

  const sourceNode = {
    "@id": SIMKONI_SOURCE_ID,
    "@type": "schema:CreativeWork",
    "schema:name": "2024_Notasi dan Kosakata Islam cetak (PDF)",
  };

  const conceptNodes = simkoniData.map((item) => {
    const broaderId = findBroaderIdByNotasi(item.notasi, notasiToIds);

    return {
      "@id": conceptId(item.id),
      "@type": "skos:Concept",
      prefLabel: { id: item.kosakata },
      altLabel: { id: item.keyword },
      notation: item.notasi,
      scopeNote: { id: item.konteks },
      ...(item.catatan ? { note: { id: item.catatan } } : {}),
      inScheme: SIMKONI_SCHEME_ID,
      ...(broaderId ? { broader: conceptId(broaderId) } : {}),
    };
  });

  const kategoriToMembers = new Map<string, string[]>();
  for (const item of simkoniData) {
    const memberIds = kategoriToMembers.get(item.kategori);
    const cid = conceptId(item.id);
    if (memberIds) memberIds.push(cid);
    else kategoriToMembers.set(item.kategori, [cid]);
  }

  const collectionNodes = Array.from(kategoriToMembers.entries()).map(([kategori, members]) => ({
    "@id": `${SIMKONI_URN_BASE}collection:kategori:${slugifyKategori(kategori)}`,
    "@type": "skos:Collection",
    prefLabel: { id: kategori },
    member: members,
  }));

  return {
    "@context": {
      skos: "http://www.w3.org/2004/02/skos/core#",
      dcterms: "http://purl.org/dc/terms/",
      schema: "https://schema.org/",

      prefLabel: { "@id": "skos:prefLabel", "@container": "@language" },
      altLabel: { "@id": "skos:altLabel", "@container": "@language" },
      scopeNote: { "@id": "skos:scopeNote", "@container": "@language" },
      note: { "@id": "skos:note", "@container": "@language" },

      notation: "skos:notation",
      inScheme: { "@id": "skos:inScheme", "@type": "@id" },
      broader: { "@id": "skos:broader", "@type": "@id" },
      member: { "@id": "skos:member", "@type": "@id" },
    },
    "@graph": [schemeNode, sourceNode, ...collectionNodes, ...conceptNodes],
  } as const;
})();
