import React from "react";
import { Container } from "@radix-ui/themes";

const Home = () => {
    return (
        <Container>
           <div className="dashboard-container">
      <h1>Test 1</h1>

      <section className="section">
        <h2>Project dikerjakan menggunakan MERN STACK</h2>
        <p>
          <strong>MERN STACK</strong> adalah sebuah stack teknologi yang terdiri dari MongoDB, Express.js, React.js, dan Node.js. Stack ini digunakan untuk membangun aplikasi web full-stack yang efisien dan skalabel.
        </p>
        <ul>
          <li><strong>MongoDB</strong>: Sebuah database NoSQL yang menyimpan data dalam format dokumen JSON. MongoDB sangat fleksibel dan cocok untuk aplikasi yang memerlukan skalabilitas dan kecepatan.</li>
          <li><strong>Express.js</strong>: Sebuah framework backend untuk Node.js yang memudahkan pembuatan API dan manajemen server. Express.js menyediakan berbagai middleware untuk menangani permintaan HTTP dan routing.</li>
          <li><strong>React.js</strong>: Sebuah library JavaScript untuk membangun antarmuka pengguna (UI) yang interaktif dan responsif. React.js menggunakan konsep komponen untuk membangun UI yang dapat digunakan kembali.</li>
          <li><strong>Node.js</strong>: Sebuah runtime environment yang memungkinkan pengembangan aplikasi JavaScript di sisi server. Node.js menggunakan mesin V8 dari Google Chrome dan dikenal dengan performanya yang cepat dan efisien.</li>
        </ul>
      </section>

      <section className="section">
        <h2> Daftar paket yang digunakan</h2>
        <ul>
    <li><strong>MongoDB</strong>: Database untuk menyimpan data mail. MongoDB digunakan karena fleksibilitasnya dalam mengelola data yang beragam dan skalabilitasnya.</li>
    <li><strong>Express.js</strong>: Framework backend untuk membangun API yang menangani permintaan CRUD (Create, Read, Update, Delete) terkait data mail. Express.js memudahkan pengelolaan routing dan middleware.</li>
    <li><strong>React.js</strong>: Library frontend untuk membangun antarmuka pengguna yang interaktif. React.js digunakan untuk membuat komponen seperti form, tabel, dan kalender yang menampilkan data mail.</li>
    <li><strong>Node.js</strong>: Runtime environment untuk menjalankan server backend. Node.js digunakan bersama dengan Express.js untuk membangun server yang efisien dan cepat.</li>
    <li><strong>Radix UI</strong>: Kumpulan komponen UI yang dapat digunakan untuk membangun antarmuka yang modern dan aksesibel. Radix UI digunakan untuk mempercantik dan meningkatkan aksesibilitas komponen seperti modal dan form.</li>
    <li><strong>Axios</strong>: Library JavaScript untuk melakukan HTTP request dari browser atau Node.js. Axios digunakan untuk berkomunikasi antara frontend dan backend dalam proyek ini.</li>
    <li><strong>React Big Calendar</strong>: Library untuk membuat kalender yang interaktif dan dapat menampilkan event. React Big Calendar digunakan untuk menampilkan data mail dalam format kalender.</li>
    <li><strong>bcryptjs</strong>: Library untuk mengenkripsi password. bcryptjs digunakan untuk meningkatkan keamanan dalam penyimpanan password pengguna.</li>
    <li><strong>cors</strong>: Middleware untuk mengatasi masalah Cross-Origin Resource Sharing (CORS) pada aplikasi web. cors digunakan untuk memungkinkan komunikasi antara frontend dan backend yang berjalan pada domain yang berbeda.</li>
    <li><strong>jsonwebtoken</strong>: Library untuk membuat dan memverifikasi JSON Web Tokens (JWT). jsonwebtoken digunakan untuk mengelola autentikasi dan otorisasi pengguna.</li>
    <li><strong>body-parser</strong>: Middleware untuk mem-parsing body request HTTP. body-parser digunakan untuk mengambil data dari body request dan membuatnya tersedia pada objek `req.body`.</li>
    <li><strong>mongoose</strong>: Library Object Data Modeling (ODM) untuk MongoDB dan Node.js. mongoose digunakan untuk mengelola hubungan antara data, menyediakan validasi skema, dan menerjemahkan antara objek dalam kode dan representasi objek tersebut di MongoDB.</li>
    <li><strong>nodemailer</strong>: Library untuk mengirim email dari Node.js. nodemailer digunakan untuk mengirim notifikasi atau konfirmasi email kepada pengguna.</li>
  </ul>
      </section>

      <section className="section">
        <h2> Deploy menggunakan:</h2>
        <ul>
          <li><strong>DB: Mongo Atlas Cloud</strong>: MongoDB Atlas adalah layanan database cloud yang dikelola sepenuhnya. Mongo Atlas Cloud digunakan untuk menyimpan data mail secara aman dan skalabel di lingkungan produksi.</li>
          <li><strong>Host: Netlify</strong>: Netlify adalah platform hosting dan CI/CD (Continuous Integration/Continuous Deployment) yang digunakan untuk mendeploy dan mengelola aplikasi frontend. Netlify memudahkan proses deployment dan pengelolaan situs web secara efisien.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Section 4: Manajemen Kode dengan Git</h2>
        <p>
          <strong>Git</strong> adalah sistem kontrol versi terdistribusi yang digunakan untuk mengelola perubahan kode sumber proyek. Git memungkinkan tim pengembang untuk bekerja secara kolaboratif, melacak perubahan, dan mengelola versi kode dengan efisien.
        </p>
        <ul>
          <li><strong>Repository</strong>: Tempat penyimpanan kode sumber dan riwayat perubahannya.</li>
          <li><strong>Branch</strong>: Cabang dari kode utama yang memungkinkan pengembangan paralel tanpa mempengaruhi kode utama.</li>
          <li><strong>Commit</strong>: Rekaman perubahan kode pada suatu titik waktu tertentu.</li>
          <li><strong>Merge</strong>: Proses menggabungkan perubahan dari satu branch ke branch lainnya.</li>
          <li><strong>Pull Request</strong>: Permintaan untuk menggabungkan perubahan dari satu branch ke branch lainnya, biasanya digunakan untuk review kode sebelum merge.</li>
        </ul>
      </section>
    </div>
        </Container>
    )
}

export default Home;