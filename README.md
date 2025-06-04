# Folders Manager

Folders Manager, dosya paylaşımı ve yönetimi için geliştirilmiş modern, güvenli ve kullanıcı dostu bir web uygulamasıdır.  
Kullanıcılar dosya yükleyebilir, indirebilir, kendi dosyalarını yönetebilir ve başkalarının paylaştığı dosyaları görüntüleyebilir.  
Proje, hem frontend hem de backend tarafında güncel teknolojiler ve en iyi güvenlik uygulamaları ile geliştirilmiştir.

[![GitHub](https://img.shields.io/badge/GITHUB-24292f?style=for-the-badge&logo=github&logoColor=white)](https://github.com/osmandemir2533)
[![BACKEND](https://img.shields.io/badge/BACKEND-111111?style=for-the-badge&logoColor=white)](https://github.com/osmandemir2533/folders-manager-backend)

## Backend Projesi

Projenin backend kısmına aşağıdaki linkten ulaşabilirsiniz: [Folders Manager Backend](https://github.com/osmandemir2533/folders-manager-backend)

Backend projesi .NET Core ile geliştirilmiş olup, güvenli ve modern bir API sunmaktadır.

Backend kurulumunu yaptıktan sonra Frontend kurulumuna geçebilirsiniz. Aşağıdaki yönergeleri takip edin.

---

## 🚀 Projeyi Çalıştırmak İçin

```bash
# Repoyu klonlayın
git clone https://github.com/osmandemir2533/folders-manager-frontend.git

# Proje dizinine gidin
cd folders-manager-frontend

# Gerekli paketleri yükleyin
npm install

# Projeyi başlatın
npm run dev
```

> Backend için .NET Core projesini de kendi ortamınızda başlatmanız gerekmektedir.

---

## 📁 Klasör ve Dosya Yapısı

```
folders-manager-frontend/
│
├── public/
│   └── ...                # Statik dosyalar
├── src/
│   ├── components/
│   │   ├── FileCard.jsx
│   │   ├── Header.jsx
│   │   └── Header.css
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx
│   │   │   └── Dashboard.css
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Login/
│   │   │   ├── Login.jsx
│   │   │   └── Login.css
│   │   ├── Register/
│   │   │   ├── Register.jsx
│   │   │   └── Register.css
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
└── README.md
```

---

## 🧑‍💻 Kullanıcı Deneyimi ve İş Akışı

- **Ana sayfa:**  
  Kullanıcı giriş yapmış olsun veya olmasın, sistemdeki tüm dosyalar listelenir.  
  Bu alan ortak bir paylaşım alanı olarak tasarlanmıştır.

- **Upload (Yükle) butonu:**  
  Her zaman görünür. Ancak kullanıcı giriş yapmamışsa, butona tıklayınca otomatik olarak giriş yapma sayfasına yönlendirilir.

- **Download (İndir) butonu:**  
  Aynı şekilde, giriş yapılmamışsa kullanıcıyı login sayfasına yönlendirir.  
  Giriş yapan kullanıcılar ise dosyaları doğrudan indirebilir.

- **Kullanıcı kayıt/giriş:**  
  Kullanıcılar kolayca kayıt olabilir ve giriş yapabilir.  
  Giriş yapınca backend'den dönen JWT token localStorage'da saklanır ve tüm korumalı işlemlerde kullanılır.

- **Silme (Delete) butonu:**  
  Kullanıcı giriş yaptıktan sonra, ana sayfadaki dosya kartlarında sadece kendi yüklediği dosyalar için silme (Delete) butonu görünür.  
  Başkasının dosyası silinemez.

- **Güvenlik:**  
  Silme işlemi hem frontend hem de backendde güvenli şekilde kontrol edilir.  
  Backend'de her CRUD işleminde JWT token zorunludur ve sadece dosyanın sahibi dosyayı silebilir.

- **Header:**  
  Kullanıcı giriş yaptıysa, header'daki giriş yap ve kayıt ol butonları kaybolur, yerine kullanıcı adı ve profil ikonu gelir.  
  Buradan dashboard veya logout işlemleri yapılabilir.

- **Dashboard:**  
  Sadece giriş yapan kullanıcıya ait dosyalar listelenir.  
  Bunun için özel bir endpoint kullanılır: `GET /api/Files/my`

- **Bildirimler:**  
  Sistemde yapılan işlemler (başarılı veya hatalı) React Toastify ile bildirim olarak kullanıcıya gösterilir.

---

## 🛠️ Kullanılan Teknolojiler & Kütüphaneler

- React (frontend)
- ASP.NET Core (backend)
- SQL Server (veritabanı)
- JWT Authentication
- React Toastify (bildirimler)
- Material UI (arayüz)
- React Icons (ikonlar)

---

## 🔗 API Endpointleri

**Auth**
- `POST /api/Auth/register` — Kayıt ol
- `POST /api/Auth/login` — Giriş yap

**Files**
- `POST /api/Files/upload` — Dosya yükle (JWT zorunlu)
- `GET /api/Files` — Tüm dosyaları listele (herkes erişebilir)
- `GET /api/Files/my` — Sadece giriş yapan kullanıcının dosyalarını getir (JWT zorunlu)
- `GET /api/Files/{id}` — Dosya detayını getir (JWT zorunlu)
- `DELETE /api/Files/{id}` — Dosya sil (JWT zorunlu, sadece sahibi silebilir)
- `GET /api/Files/download/{id}` — Dosya indir (herkes erişebilir)

> Sadece `/api/Files` ve `/api/Files/download/{id}` endpointleri herkese açıktır, diğer tüm işlemler için giriş yapılması gerekir.

---

## 🖼️ Arayüz

Aşağıda uygulamanın temel ekran görüntülerini ekleyebilirsiniz:

- **Ana Sayfa Ekran Görüntüsü**
  > ![Ana Sayfa](https://github.com/user-attachments/assets/8cb877bf-80a5-492f-8bfd-82a7f326e688)

- **Dashboard Ekran Görüntüsü**
  > ![Dashboard](https://github.com/user-attachments/assets/86c26957-8a73-4e9d-aaf8-44b46ffa0ff8)

- **Dosya Kartı Yapısı**
  > ![Kart Yapısı](https://github.com/user-attachments/assets/dce56264-257c-43d6-9341-dad18acc3a06)

- **About (Hakkında) Sayfası**
  > ![About](https://github.com/user-attachments/assets/dcd215f5-4ed1-4c53-b4df-13b01ba91130)

- **İletişim (Contact) Sayfası**
  > ![Contact](https://github.com/user-attachments/assets/384f2b23-28d5-46a1-a800-16b3fc76c8b0)

---

## 📬 İletişim

Benimle her zaman iletişime geçebilirsiniz:

[![Web Sitem](https://img.shields.io/badge/Web%20Site-1976d2?style=for-the-badge&logo=google-chrome&logoColor=white)](https://osmandemir2533.github.io/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/osmandemir2533/)

---

> Proje, modern web standartlarına uygun olarak geliştirilmiştir.  
> Hem güvenli hem de kullanıcı dostu bir dosya yönetim deneyimi sunar.
