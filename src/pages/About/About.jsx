import { Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { FaReact, FaNodeJs, FaDatabase, FaLock, FaUser, FaCloudUploadAlt, FaDownload, FaTrashAlt, FaSignInAlt, FaUserPlus, FaInfoCircle, FaKey, FaBell, FaListAlt } from 'react-icons/fa';

const About = () => (
  <Box sx={{ maxWidth: 900, mx: 'auto', mt: 6, p: 3 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <FaInfoCircle size={32} color="#1976d2" style={{ marginRight: 12 }} />
        <Typography variant="h4" color="primary" fontWeight={700}>
          Folders Auction — Hakkında
        </Typography>
      </Box>
      <Typography variant="body1" mb={2}>
        <b>Folders Auction</b>, dosya paylaşımı ve yönetimi için geliştirilmiş modern, güvenli ve kullanıcı dostu bir web uygulamasıdır. 
        Kullanıcılar dosya yükleyebilir, indirebilir, kendi dosyalarını yönetebilir ve başkalarının paylaştığı dosyaları görüntüleyebilir. 
        Proje, hem frontend hem de backend tarafında güncel teknolojiler ve en iyi güvenlik uygulamaları ile geliştirilmiştir.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" fontWeight={600} mb={1}>
        <FaUser style={{ marginRight: 8 }} />
        Kullanıcı Deneyimi ve İş Akışı
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon><FaListAlt color="#1976d2" /></ListItemIcon>
          <ListItemText
            primary="Ana sayfada, kullanıcı giriş yapmış olsun veya olmasın, sistemdeki tüm dosyalar listelenir. Bu alan ortak bir paylaşım alanı olarak tasarlanmıştır."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaCloudUploadAlt color="#1976d2" /></ListItemIcon>
          <ListItemText
            primary="Upload (Yükle) butonu her zaman görünür. Ancak kullanıcı giriş yapmamışsa, butona tıklayınca otomatik olarak giriş yapma sayfasına yönlendirilir."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaDownload color="#1976d2" /></ListItemIcon>
          <ListItemText
            primary="Download (İndir) butonu da aynı şekilde, giriş yapılmamışsa kullanıcıyı login sayfasına yönlendirir. Giriş yapan kullanıcılar ise dosyaları doğrudan indirebilir."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaSignInAlt color="#1976d2" /></ListItemIcon>
          <ListItemText
            primary="Kullanıcılar kolayca kayıt olabilir ve giriş yapabilir. Giriş yapınca backend'den dönen JWT token localStorage'da saklanır ve tüm korumalı işlemlerde kullanılır."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaTrashAlt color="#e53935" /></ListItemIcon>
          <ListItemText
            primary="Kullanıcı giriş yaptıktan sonra, ana sayfadaki dosya kartlarında sadece kendi yüklediği dosyalar için silme (Delete) butonu görünür. Başkasının dosyası silinemez."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaLock color="#1976d2" /></ListItemIcon>
          <ListItemText
            primary="Silme işlemi hem frontend hem de backendde güvenli şekilde kontrol edilir. Backend'de her CRUD işleminde JWT token zorunludur ve sadece dosyanın sahibi dosyayı silebilir."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaUser color="#1976d2" /></ListItemIcon>
          <ListItemText
            primary="Kullanıcı giriş yaptıysa, header'daki giriş yap ve kayıt ol butonları kaybolur, yerine kullanıcı adı ve profil ikonu gelir. Buradan dashboard veya logout işlemleri yapılabilir."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaListAlt color="#1976d2" /></ListItemIcon>
          <ListItemText
            primary="Dashboard sayfasında sadece giriş yapan kullanıcıya ait dosyalar listelenir. Bunun için özel bir endpoint kullanılır: GET /api/Files/my"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaBell color="#1976d2" /></ListItemIcon>
          <ListItemText
            primary="Sistemde yapılan işlemler (başarılı veya hatalı) React Toastify ile bildirim olarak kullanıcıya gösterilir."
          />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" fontWeight={600} mb={1}>
        <FaDatabase style={{ marginRight: 8 }} />
        Backend & API Güvenliği
      </Typography>
      <Typography variant="body2" mb={1}>
        Uygulamanın backend'i <b>ASP.NET Core</b> ile yazılmıştır. Tüm kritik işlemler JWT tabanlı kimlik doğrulama ile korunur. 
        Her dosya yükleme, silme ve kullanıcıya özel dosya listeleme işlemlerinde token zorunludur. 
        Sadece <b>GET /api/Files</b> ve <b>GET /api/Files/download/{'{id}'}</b> endpointleri herkese açıktır, diğer tüm işlemler için giriş yapılması gerekir.
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon><FaUserPlus color="#43a047" /></ListItemIcon>
          <ListItemText primary="POST /api/Auth/register — Kayıt ol" />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaSignInAlt color="#1976d2" /></ListItemIcon>
          <ListItemText primary="POST /api/Auth/login — Giriş yap" />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaCloudUploadAlt color="#1976d2" /></ListItemIcon>
          <ListItemText primary="POST /api/Files/upload — Dosya yükle (JWT zorunlu)" />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaDownload color="#1976d2" /></ListItemIcon>
          <ListItemText primary="GET /api/Files — Tüm dosyaları listele (herkes erişebilir)" />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaUser color="#1976d2" /></ListItemIcon>
          <ListItemText primary="GET /api/Files/my — Sadece giriş yapan kullanıcının dosyalarını getir (JWT zorunlu)" />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaDownload color="#1976d2" /></ListItemIcon>
          <ListItemText primary="GET /api/Files/download/{id} — Dosya indir (herkes erişebilir)" />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaTrashAlt color="#e53935" /></ListItemIcon>
          <ListItemText primary="DELETE /api/Files/{id} — Dosya sil (JWT zorunlu, sadece sahibi silebilir)" />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" fontWeight={600} mb={1}>
        <FaReact style={{ marginRight: 8 }} />
        Kullanılan Teknolojiler & Kütüphaneler
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon><FaReact color="#1976d2" /></ListItemIcon>
          <ListItemText primary="React (frontend)" />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaNodeJs color="#43a047" /></ListItemIcon>
          <ListItemText primary="ASP.NET Core (backend)" />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaDatabase color="#1976d2" /></ListItemIcon>
          <ListItemText primary="SQL Server (veritabanı)" />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaLock color="#1976d2" /></ListItemIcon>
          <ListItemText primary="JWT Authentication" />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaReact color="#1976d2" /></ListItemIcon>
          <ListItemText primary="React Toastify (bildirimler)" />
        </ListItem>
        <ListItem>
          <ListItemIcon><FaBell color="#1976d2" /></ListItemIcon>
          <ListItemText primary="Material UI (arayüz) ve React Icons (ikonlar)" />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body2" color="textSecondary" mt={2}>
        <b>Folders Auction</b> projesi, modern web standartlarına uygun olarak geliştirilmiştir. 
        Hem güvenli hem de kullanıcı dostu bir dosya yönetim deneyimi sunar. 
        Proje, gerçek hayatta dosya paylaşımı ve yönetimi gerektiren tüm senaryolara kolayca uyarlanabilir.
      </Typography>
    </Paper>
  </Box>
);

export default About; 