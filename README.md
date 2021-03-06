### MEMBUAT FRONTEND QRMenu MENGGUNAKAN REACT V17.2

#### 8.1 Membuat Reat App

        Steps:

        1. Install Node.Js
        2. Membuat react app
        3. Jalankan react
        4. Buka browser
        5. Lihat hasilnya

        modified:   README.md

#### 8.2 Memodifikasi files

        Steps:

        1. Melihat strurktur file default
        2. Menghapus beberapa file
        3. Membuat Home component
        4. Membuat Login component
        5. Membuat App component
        6. Menginstal react-router-dom
        7. Menguji hasilnya

        modified:   README.md
        modified:   package-lock.json
        modified:   package.json
        deleted:    src/App.css
        deleted:    src/App.js
        deleted:    src/App.test.js
        modified:   src/index.js
        deleted:    src/logo.svg
        new file:   src/pages/Home.js
        new file:   src/pages/Login.js
        deleted:    src/reportWebVitals.js
        new file:   src/router/App.js
        deleted:    src/setupTests.js

#### 9.1 Layout in Frontend App - Instal bootstrap

        Steps:

        1. Stop react server
           > Ctr + c
        2. Instal react-bootstrapt
           > npm install react-bootstrap@1.5.2 -s
        3. Instal bootstrap 4
           > npm install bootstrap@4.6.0 -s
        4. Pada src/index.js: import 'bootstrap/dist/css/bootstrap.min.css';
        5. Pada public/index.html: instal google fonts
        6. Pada src/index.css: set the font family

        modified:   README.md
        modified:   package-lock.json
        modified:   package.json
        modified:   public/index.html
        modified:   src/index.css
        modified:   src/index.js

#### 9.2 Layout in Frontend App - Membuat layout

        Steps:

        1. Membuat folder src/layouts
        2. Membuat file src/layouts/MainLayout.js

        modified:   README.md
        new file:   src/layouts/MainLayout.js

#### 9.3 Layout in Frontend App - Setup halaman layout

        Steps:

        1. Setup halaman MainLayout
        2. Import MainLayout pada halaman Home
        3. Import MainLayout pada halaman Login
        4. Periksa hasilnya

        modified:   README.md
        modified:   src/layouts/MainLayout.js
        modified:   src/pages/Home.js
        modified:   src/pages/Login.js

#### 10. Notification with Toastify

        Steps:

        1. Instal react-toastify
           > npm install react-toastify@7.0.3 -s
        2. Periksa hasilnya
        3. Pada src/index.js: import react-toastify
        4. Pada src/router/App.js: import ToastContainer
        5. Modify index.css

        modified:   README.md
        modified:   package-lock.json
        modified:   package.json
        modified:   src/index.css
        modified:   src/index.js
        modified:   src/router/App.js

### TASK 3 - SISTEM AUTENTIKASI

#### 11 Task 3 Overview

        Pada task 3 ini kita akan belajar membuat sistem
        autentikasi menggunakan React Context and React Hooks
        dengan tujuan:

        1. Membuat sistem dapat berbagi (share) data antar
        komponen react dengan mudah.

        2. Untuk menyimpan dan berbagi authenticated token diantara
        komponen.

        3. Membuat public dan private brows antar halaman yang berbeda pada aplikasi react.

        4. Untuk membuat first function dalam react untuk melakukan
        request pada sebuah IPI dan dapatkan data dari server.

        Itulah yang akan kita lakukan pada TASK 3 ini.

        modified:   README.md

#### 12. Quick Setup for Dev

        Steps:

        1. Jalankan server qrmenu_backend
        2. Jalankan server qrmenu_frontend
        3. Login proses

           Dari halaman login kita akan melakukan login
           dengan memanggil server login API to authenticate
           the user.

           Jika login sukses, maka server akan meresponnya
           dengan mengirim auth token kembali kepada
           client.

           Perhatikanlah caranya sbb:

           1. Buka browser backend kunjungi ini:
              http://127.0.0.1:8000/auth/token/login/

           2. Pasang username dan password yg telah
              dibuat pada backend:

                username:superuser
                password:superuser

           3. Klik Post
           4. Periksa hasil:
              -token dikembalikan oleh server
              -login berhasil

              DONE:)

#### 13. Login Process

        Steps:

        1. Membuat login form pada halaman login agar
           user dapat mengisi username dan passwordnya.
        2. Membuat file baru: src/apis.js
        3. Pada apis.js: buat signIn function
           untuk memanggil login API
           untuk authenticate user:

           - jika login berhasil, server akan
             mengembalikan
             auth_token pd frontend
        4. Implemen the signIn function to Login page
        5. Add the proxy server path to package.json
           file to call the API

        NOTE:

        Login sukses!

        ING:)

        modified:   package.json
        new file:   src/apis.js
        modified:   src/pages/Login.js



#### 14. React Context

        Steps:

        Introduction



#### 15. Create Auth Context

        Steps:

        1. Buat file: pages/Places.js
        2. Tulis code pada Places.js
        3. Lihat hasilnya
        4. Buat folder: srs/contexts
        5. Buat file: src/contexts/AuthContext.js
        6. Tulis code pada AuthContext.js

        modified:   README.md
        new file:   src/contexts/AuthContext.js
        new file:   src/pages/Places.js
        modified:   src/router/App.js



#### 16. Create Private Route

        Sebagai lanjutan dari pelajaran yang lalu,
        sekarang kita akan mencari cara untuk memastikan
        apakah client yang mengunjungi halaman privat
        telah ter-authentikasi atau tidak sehingga
        kita mengarahkannya ke route yg korek.

        Jika ter-authentikasi, client akan diarahkan
        ke halaman places. Jika tidak ter-authentikasi,
        maka dia akan diarahkan ke halaman login untuk
        login atau sign in.

        Masalahnya adalah bagaimana caranya meng-authentikasi
        user?

        Cara mudah:

        1. Kita hanya perlu mendapatkan AuthContext.
        2. Memeriksanya apakah ia memiliki token value.

        Baiklah kita praktekan agar lebih riil.


        Steps:

        1. Membuat custom route: 
           src/router/PrivateRoute.js
        2. App.js import: AuthProvider
        3. App.js import: PrivateRoute.js 
        4. App.js: wrap route with AuthProvider as
           the  top route
        5. App.js: Add PrivateRoute for places
        6. MainLayout.js: Create goToPlaces const
           and add link to navbar for places

        modified:   README.md
        modified:   src/contexts/AuthContext.js
        modified:   src/layouts/MainLayout.js
        modified:   src/router/App.js
        new file:   src/router/PrivateRoute.js



#### 17. Storing Auth Token

        Pada latihan yg baru saja kita selesaikan,
        kita telah membuat AuthContext sebagai wadah
        untuk men-share data lintas komponen, tetapi
        kita belum men-store token yg dikembalikan
        oleh server sehingga setelah berhasil logi 
        sistem mengembalikan/redirect lagi kita ke 
        halaman login.

        Itulah sebabanya, walaupun sdh berhasil 
        login namun dikembalikan lagi ke halaman 
        login.

        Oleh karena itu, kita harus melakukan 
        beberapa hal dalam pelajaran ini agar 
        tujuan ke halaman Places stlh berhasil 
        login bisa tercapai.

        Steps:

        1. Memodifikasi letak menu Places
        2. Menghilangkan flash message
        3. Pada AuthContext.js: Implemen Sign In dan Sign Out proses:
           - store auth token when signed in
           - remove auth token when signed out
           - Handle the login status

        modified:   src/apis.js
        modified:   src/contexts/AuthContext.js
        modified:   src/layouts/MainLayout.js
        modified:   src/pages/Login.js

        NOTE:

        Spinner tidak bekerja!!!






