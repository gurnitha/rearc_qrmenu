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