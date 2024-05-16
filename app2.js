//Original Version//
const questions = [


    {

        question: "Siapakah ilmuwan yang dikenal karena perannya dalam memecahkan kode Enigma Jerman selama Perang Dunia II dan kontribusinya dalam pengembangan komputer modern yang digunakan banyak orang-orang saat ini?", //6//
        answers: [
            { text: "Charles Babbage", correct: false },
            { text: "John von Neumann", correct: false },
            { text: "Grace Hopper", correct: false },
            { text: " Joseph Oppenheimer", correct: false },
            { text: "Alan Turing", correct: true },
        ],
    },
    
    {
        question: "Apa dampak sosial utama dari penemuan komputer pada abad ke-20?", //1//
        answers: [
            { text: "Perubahan pola ekonomi", correct: false },
            { text: "Perkembangan industri otomotif", correct: false },
            { text: "Transformasi dalam pendidikan dan pekerjaan", correct: true },
            { text: "Penurunan minat dalam seni dan budaya", correct: false },
            { text: "Peningkatan penggunaan obat-obatan terlarang", correct: false },
        ],
    },

    {
        question: "Peristiwa apa yang menandai awal era komputer pribadi dan dampaknya terhadap masyarakat?", //2//
        answers: [
            { text: "Penemuan transistor", correct: false },
            { text: "Peluncuran komputer Apple II", correct: true },
            { text: "Pembuatan Internet", correct: false },
            { text: "Terbitnya buku War Games", correct: false },
            { text: "Pembentukan Perserikatan Bangsa-Bangsa", correct: false },
        ],
    },
    {
        question: "Bagaimana peran komputer dalam Revolusi Industri 4.0 mempengaruhi lapangan pekerjaan dan sosial?", //3//
        answers: [
            { text: "Peningkatan ketergantungan pada teknologi", correct: true },
            { text: "Peningkatan permintaan pekerja manual", correct: false },
            { text: "Penurunan angka pengangguran", correct: false },
            { text: "Kehilangan minat dalam pendidikan tinggi", correct: false },
            { text: "Meningkatnya pertumbuhan populasi dunia", correct: false },
        ],
    },

    {
        question: "Komputer ENIAC, yang dibangun pada tahun 1940-an, memiliki dampak sosial besar karena:",  //4//
        answers: [
            { text: "Memperluas kesenjangan gender di bidang teknologi", correct: true },
            { text: "Mempercepat pertumbuhan ekonomi global", correct: false },
            { text: "Mendorong penemuan roket antariksa", correct: false },
            { text: "Membantu dalam perawatan kesehatan masyarakat", correct: false },
            { text: "Menyebabkan kemunduran dalam perkembangan transportasi", correct: false },
        ],
    },

    {
        question: "Perkembangan komputer pribadi seperti IBM PC pada tahun 1980-an memberikan akses kepada masyarakat untuk:", //5//
        answers: [
            { text: "Terhubung dengan antariksa", correct: false },
            { text: "Mengakses informasi dan komunikasi pribadi", correct: true },
            { text: "Menjalankan bisnis besar", correct: false },
            { text: "Menjadi lebih terisolasi secara sosial", correct: false },
            { text: "Mempertahankan gaya hidup tradisional", correct: false },
        ],
    },

    {

        question: "Apa yang dimaksud dengan hak kekayaan intelektual (HKI) dalam konteks produk informatika?", //6//
        answers: [
            { text: "Hak untuk mengakses internet gratis", correct: false },
            { text: "Hak untuk mengklaim kepemilikan atas karya kreatif", correct: true },
            { text: "Hak untuk mengekspor perangkat lunak", correct: false },
            { text: "Hak untuk menghapus data pribadi dari internet", correct: false },
            { text: "Hak untuk menyalin dan mendistribusikan konten tanpa izin", correct: false },
        ],
    },

    {

        question: "Bagaimana produk informatika berkontribusi terhadap pertumbuhan ekonomi?", //7//
        answers: [
            { text: "Dengan membatasi akses informasi", correct: false },
            { text: "Dengan menciptakan lapangan kerja baru", correct: true },
            { text: "Dengan meningkatkan biaya produksi", correct: false },
            { text: "Dengan mengurangi investasi dalam teknologi", correct: false },
            { text: "Dengan meningkatkan kebutuhan akan bahan bakar fosil", correct: false },
        ],
    },

    {
        question: " Manakah dari pernyataan berikut yang benar tentang variabel dalam pemrograman prosedural?", //8//
        answers: [
            { text: "Variabel hanya dapat diinisialisasi sekali", correct: false },
            { text: " Variabel adalah simbol yang digunakan untuk menyimpan dan memanipulasi data", correct: true },
            { text: "Variabel harus selalu dideklarasikan sebelum digunakan", correct: false },
            { text: "Variabel hanya dapat menyimpan satu nilai pada satu waktu", correct: false },
            { text: "Variabel harus selalu dideklarasikan dengan tipe data yang sama", correct: false },
        ],
    },

   

    {
        question: " Apa yang dimaksud dengan prosedur dalam pemrograman prosedural?", //9//
        answers: [
            { text: "Sebuah blok kode yang menjalankan operasi aritmatika", correct: false },
            { text: " ebuah blok kode yang menjalankan serangkaian instruksi secara berurutan", correct: true },
            { text: "Sebuah blok kode yang menghasilkan nilai balik", correct: false },
            { text: "Sebuah blok kode yang memungkinkan untuk melakukan percabangan", correct: false },
            { text: "Sebuah metode untuk membagi program menjadi modul terpisah", correct: false },
        ],
    },


    {
        question: "Manakah dari struktur pengendalian berikut yang digunakan untuk melakukan iterasi dalam pemrograman prosedural?", //10//
        answers: [
            { text: "If-else", correct: false },
            { text: " For", correct: true },
            { text: "Switch", correct: false },
            { text: "Try-catch", correct: false },
            { text: "While", correct: false },
        ],
    },


    
];



let currentQuestionIndex = 0;
let userScore = 0;
let restartAttempts = 0;
const maxRestarts = 1;

const startButtonEl = document.querySelector(".start-btn");
const welcomeScreenEl = document.querySelector(".welcome-screen");
const quizScreenEl = document.querySelector(".quiz-screen");
const questionEl = document.querySelector(".question");
const answersButtons = document.querySelector(".answers-container");
const nextButtonEl = document.querySelector(".next-btn");

startButtonEl.addEventListener("click", startQuiz);

function startQuiz() {
    if (restartAttempts < maxRestarts) {
        welcomeScreenEl.style.display = "none";
        quizScreenEl.style.display = "flex";
        currentQuestionIndex = 0;
        userScore = 0;
        nextButtonEl.innerHTML = "Next";
        nextButtonEl.style.display = "none";
        displayQuestion();
    } else {
        alert("You have reached the maximum number of restarts. Please re-authenticate.");
        authenticateNewPassword();
    }
}

function displayQuestion() {
    resetContainer();
    questionEl.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach((answer) => {
        const buttonEl = document.createElement("button");
        buttonEl.innerHTML = answer.text;
        buttonEl.classList.add("ans-btn");
        answersButtons.appendChild(buttonEl);

        if (answer.correct) {
            buttonEl.dataset.correctAns = answer.correct;
        }

        buttonEl.addEventListener("click", checkAnswer);
    });
}

function checkAnswer(e) {
    const selectedButton = e.target;
    if (selectedButton.dataset.correctAns) {
        userScore++;
        selectedButton.classList.add("correct-ans");
    } else {
        selectedButton.classList.add("wrong-ans");
    }

    Array.from(answersButtons.children).forEach((button) => {
        if (button.dataset.correctAns === "true") {
            button.classList.add("correct-ans");
        }
        button.disabled = true;
    });

    nextButtonEl.style.display = "block";
}

function displayResult() {
    resetContainer();
    questionEl.innerHTML = `Quiz is Completed! <br> Your Score: <span class="score">${userScore}/${questions.length}</span>`;
    nextButtonEl.innerHTML = "Restart Quiz";
    restartAttempts++;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        nextButtonEl.style.display = "none";
    } else {
        displayResult();
    }
}

nextButtonEl.addEventListener("click", function () {
    if (currentQuestionIndex < questions.length) {
        nextQuestion();
    } else {
        startQuiz();
    }
});

function resetContainer() {
    questionEl.textContent = "";
    answersButtons.innerHTML = "";
}

// Passwords list
const passwords = [
    { first: "s", second: "5" },
    { first: "m", second: "10" },
    { first: "d", second: "15" },
    // Add more passwords as needed
];

function getRandomPasswordSet() {
    const randomIndex = Math.floor(Math.random() * passwords.length);
    return passwords[randomIndex];
}

function authenticate() {
    let passwordAttempts = 3;
    const delayTime = 3000;
    let firstPasswordEntered = false;
    let secondPasswordEntered = false;
    const { first: firstPassword, second: secondPassword } = getRandomPasswordSet();

    while (passwordAttempts > 0) {
        if (!firstPasswordEntered) {
            const inputPassword = prompt("Masukkan kata sandi pertama:");

            if (inputPassword === firstPassword) {
                firstPasswordEntered = true;
                alert("Kata sandi pertama benar. Masukkan kata sandi kedua.");
            } else {
                passwordAttempts--;
                alert("Kata sandi pertama salah. Sisa percobaan: " + passwordAttempts);

                if (passwordAttempts === 0) {
                    alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                    setTimeout(authenticate, delayTime);
                    return;
                }
            }
        } else if (!secondPasswordEntered) {
            const inputPassword = prompt("Masukkan kata sandi kedua:");

            if (inputPassword === secondPassword) {
                secondPasswordEntered = true;
                unlockWebsite();
                return;
            } else {
                passwordAttempts--;
                alert("Kata sandi kedua salah. Sisa percobaan: " + passwordAttempts);

                if (passwordAttempts === 0) {
                    alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                    setTimeout(authenticate, delayTime);
                    return;
                }
            }
        }
    }
}

function authenticateNewPassword() {
    let passwordAttempts = 3;
    const delayTime = 3000;
    let firstPasswordEntered = false;
    let secondPasswordEntered = false;
    let thirdPasswordEntered = false;

    const newPasswords = [
        { 
        first: "newPassword1", 
        second: "newPassword2", 
        third: "newPassword3" },
        // Add more password sets as needed
    ];

    const { first: firstPassword, second: secondPassword, third: thirdPassword } = newPasswords[0];

    while (passwordAttempts > 0) {
        if (!firstPasswordEntered) {
            const inputPassword = prompt("Masukkan kata sandi baru pertama:");

            if (inputPassword === firstPassword) {
                firstPasswordEntered = true;
                alert("Kata sandi pertama benar. Masukkan kata sandi kedua.");
            } else {
                passwordAttempts--;
                alert("Kata sandi pertama salah. Sisa percobaan: " + passwordAttempts);

                if (passwordAttempts === 0) {
                    alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                    setTimeout(authenticateNewPassword, delayTime);
                    return;
                }
            }
        } else if (!secondPasswordEntered) {
            const inputPassword = prompt("Masukkan kata sandi baru kedua:");

            if (inputPassword === secondPassword) {
                secondPasswordEntered = true;
                alert("Kata sandi kedua benar. Masukkan kata sandi ketiga.");
            } else {
                passwordAttempts--;
                alert("Kata sandi kedua salah. Sisa percobaan: " + passwordAttempts);

                if (passwordAttempts === 0) {
                    alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                    setTimeout(authenticateNewPassword, delayTime);
                    return;
                }
            }
        } else if (!thirdPasswordEntered) {
            const inputPassword = prompt("Masukkan kata sandi baru ketiga:");

            if (inputPassword === thirdPassword) {
                thirdPasswordEntered = true;
                unlockWebsite();
                return;
            } else {
                passwordAttempts--;
                alert("Kata sandi ketiga salah. Sisa percobaan: " + passwordAttempts);

                if (passwordAttempts === 0) {
                    alert("Anda telah mencapai jumlah maksimum percobaan. Silakan coba lagi dalam beberapa detik.");
                    setTimeout(authenticateNewPassword, delayTime);
                    return;
                }
            }
        }
    }
}

function unlockWebsite() {
    document.body.classList.remove("locked");
    restartAttempts = 0;
}

document.addEventListener("DOMContentLoaded", function() {
    authenticate();
});










