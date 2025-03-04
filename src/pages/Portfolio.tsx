import './Portfolio.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardMedia, Typography, Container, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    { id: 1, title: "プロジェクト1", description: "プロジェクトの説明文がここに入ります。", details: "プロジェクトの詳細な説明がここに入ります。技術スタックや開発期間、役割などの情報を記載します。" },
    { id: 2, title: "プロジェクト2", description: "プロジェクトの説明文がここに入ります。", details: "プロジェクトの詳細な説明がここに入ります。技術スタックや開発期間、役割などの情報を記載します。" },
    { id: 3, title: "プロジェクト3", description: "プロジェクトの説明文がここに入ります。", details: "プロジェクトの詳細な説明がここに入ります。技術スタックや開発期間、役割などの情報を記載します。" },
    { id: 4, title: "プロジェクト4", description: "プロジェクトの説明文がここに入ります。", details: "プロジェクトの詳細な説明がここに入ります。技術スタックや開発期間、役割などの情報を記載します。" },
    { id: 5, title: "プロジェクト5", description: "プロジェクトの説明文がここに入ります。", details: "プロジェクトの詳細な説明がここに入ります。技術スタックや開発期間、役割などの情報を記載します。" },
    { id: 6, title: "プロジェクト6", description: "プロジェクトの説明文がここに入ります。", details: "プロジェクトの詳細な説明がここに入ります。技術スタックや開発期間、役割などの情報を記載します。" },
    { id: 7, title: "プロジェクト7", description: "プロジェクトの説明文がここに入ります。", details: "プロジェクトの詳細な説明がここに入ります。技術スタックや開発期間、役割などの情報を記載します。" },
  ];

  const handleClickOpen = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = projects.find(project => project.id === selectedProject);

  return (
    <>  
      <Header />
      <div className="portfolio">
        <h1>ポートフォリオ</h1>
        <h2>mui material のダイアログのテスト</h2>
        <Container>
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id} component="div">
                <Card 
                  sx={{ height: '100%', cursor: 'pointer' }} 
                  onClick={() => handleClickOpen(project.id)}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/300"
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Dialog
          open={selectedProject !== null}
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            {selectedProjectData?.title}
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              {selectedProjectData?.details}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              閉じる
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;