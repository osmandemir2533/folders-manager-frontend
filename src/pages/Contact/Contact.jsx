import { Box, Typography, Divider, Paper, Link as MuiLink, Stack, Avatar } from '@mui/material';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaUserCircle } from 'react-icons/fa';

const Contact = () => (
  <Box sx={{ maxWidth: 800, mx: 'auto', mt: 6, p: 3 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar sx={{ bgcolor: '#1976d2', width: 56, height: 56, mr: 2 }}>
          <FaUserCircle size={32} />
        </Avatar>
        <Box>
          <Typography variant="h4" color="primary" fontWeight={700}>
            Osman Demir
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Full Stack Web Developer
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" mb={2}>
        2003 yılında Erzurum'da doğdum. Erzurum Teknik Üniversitesi Bilgisayar Mühendisliği (Lisans) bölümünden mezunum. Web geliştirme ve full-stack alanlarında çalışmaktayım. React, JavaScript, .NET & .NET Core, Bootstrap, Firebase, MSSQL, C#, ve Node.js gibi modern araçlarla kullanıcı dostu ve verimli çözümler üretiyorum.
      </Typography>
      <Typography variant="body1" mb={2}>
        Yazılım geliştirme süreçlerinde clean code prensiplerini benimsiyor, SOLID prensiplerine uygun, sürdürülebilir ve ölçeklenebilir uygulamalar tasarlıyorum. Frontend'de React.js ekosistemi, backend'de .NET Core framework'ü ile modern web uygulamaları geliştirirken, veritabanı yönetimi ve sistem mimarisi konularında da etkin çözümler üretiyorum.
      </Typography>
      <Typography variant="body1" mb={2}>
        Version control sistemleri ve CI/CD süreçleriyle profesyonel iş akışlarını destekliyorum. Teknoloji ve yazılım alanındaki güncel gelişmeleri yakından takip ediyor, sürekli öğrenme ve gelişim odaklı bir yaklaşım benimsiyorum. Güçlü problem çözme yeteneklerim, yenilikçi bakış açım ve ekip çalışmasına yatkın yapımla, projelerde etkin sonuçlar elde ediyorum.
      </Typography>
      <Typography variant="body1" mb={2}>
        Yazılım geliştirme topluluklarıyla etkileşim halinde kalarak, sektördeki en iyi uygulamaları ve yeni teknolojileri projelerime entegre ediyorum. Öğrenmeye açık yaklaşımım sayesinde hem bireysel hem ekip projelerinde aktif rol alıyor, bu projeleri düzenli olarak geliştirip GitHub sayfamda paylaşıyorum.
      </Typography>
      <Divider sx={{ my: 3 }} />
      <Typography variant="h6" fontWeight={600} mb={2}>
        İletişim & Sosyal Medya
      </Typography>
      <Stack direction="row" spacing={4} alignItems="center" justifyContent="center" mb={2}>
        <MuiLink href="https://osmandemir2533.github.io/" target="_blank" rel="noopener" underline="none" sx={{ color: '#1976d2', display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600, fontSize: 18 }}>
          <FaGlobe size={24} /> Web Sitem
        </MuiLink>
        <MuiLink href="https://www.linkedin.com/in/osmandemir2533/" target="_blank" rel="noopener" underline="none" sx={{ color: '#0a66c2', display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600, fontSize: 18 }}>
          <FaLinkedin size={24} /> LinkedIn
        </MuiLink>
        <MuiLink href="https://github.com/osmandemir2533" target="_blank" rel="noopener" underline="none" sx={{ color: '#24292f', display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600, fontSize: 18 }}>
          <FaGithub size={24} /> GitHub
        </MuiLink>
        <MuiLink href="mailto:osman25dem@gmail.com" underline="none" sx={{ color: '#e53935', display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600, fontSize: 18 }}>
          <FaEnvelope size={24} /> E-posta
        </MuiLink>
      </Stack>
    </Paper>
  </Box>
);

export default Contact; 