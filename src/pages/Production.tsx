import './Production.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardMedia, Typography, Container, Dialog, DialogTitle, DialogContent, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState, ReactNode } from 'react';
import portfolioImage1 from '../images/Production/iTLサークル紹介.png';
import portfolioImage2 from '../images/Production/iTL Free  Classroom.png';
import portfolioImage3 from '../images/Production/JEARN.png';
import portfolioImage4 from '../images/Production/単位計算アプリ.png';
import portfolioImage5 from '../images/Production/SDGsビンゴアプリケーション.png';
import portfolioImage6 from '../images/Production/iTLMagicCircle.png';


// ダイアログの内容を定義するインターフェース
interface DialogContent {
  title: string[];
  content: ReactNode;
}

interface Project {
  id: number;
  title: string[];
  yymd: string;
  dialogContent: DialogContent;  
}

const Production = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: ["iTLサークル紹介"],
      yymd: "2024年5月12日",
      dialogContent: {
        title: ["iTLサークル紹介"],
        content: (
          <Box >
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage1}
              alt="プロジェクト1"
              sx={{ borderRadius: 1 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">
              BBQで新入生歓迎会を行いました。
            </Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">
              2024年5月12日
            </Typography>
            <Typography variant="h6" gutterBottom>使用ツール</Typography>
            <Typography variant="body1" sx={{ maxWidth: '200px' }}>
              <ul style={{ 
                margin: 0,
                paddingLeft: '20px',
              }}>
                <li>Figma</li>
                <li>React</li>
              </ul>
            </Typography>
            
          </Box>
        )
      }
    },
    {
      id: 2,
      title: ["iTL Free Classroom"],
      yymd: "2024年8月3日～4日",
      dialogContent: {
        title: ["iTL Free Classroom"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage2}
              alt="プロジェクト2"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">
              BBQで新入生歓迎会を行いました。
            </Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">
              2024年5月12日
            </Typography>
            <Typography variant="h6" gutterBottom>使用ツール</Typography>
            <Typography variant="body1" sx={{ maxWidth: '200px' }}>
              <ul style={{ 
                margin: 0,
                paddingLeft: '20px',
              }}>
                <li>Figma</li>
                <li>React</li>
              </ul>
            </Typography>
          </Box>
        )
      }
    },
    {
      id: 3,
      title: ["JEARNサイト"],
      yymd: "2023年10月14日",
      dialogContent: {
        title: ["JEARNサイト"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage3}
              alt="プロジェクト3"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">
              BBQで新入生歓迎会を行いました。
            </Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">
              2024年5月12日
            </Typography>
            <Typography variant="h6" gutterBottom>使用ツール</Typography>
            <Typography variant="body1" sx={{ maxWidth: '200px' }}>
              <ul style={{ 
                margin: 0,
                paddingLeft: '20px',
              }}>
                <li>Figma</li>
                <li>React</li>
              </ul>
            </Typography>            
          </Box>
        )
      }
    },
    {
      id: 4,
      title: ["中央大学専用単位計算アプリ"],
      yymd: "2023年10月14日",
      dialogContent: {
        title: ["中央大学専用単位計算アプリ"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage4}
              alt="プロジェクト3"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">
              BBQで新入生歓迎会を行いました。
            </Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">
              2024年5月12日
            </Typography>
            <Typography variant="h6" gutterBottom>使用ツール</Typography>
            <Typography variant="body1" sx={{ maxWidth: '200px' }}>
              <ul style={{ 
                margin: 0,
                paddingLeft: '20px',
              }}>
                <li>Figma</li>
                <li>React</li>
              </ul>
            </Typography>           
          </Box>
        )
      }
    },
    {
      id: 5,
      title: ["SDGsビンゴアプリケーション"],
      yymd: "年月日",
      dialogContent: {
        title: ["SDGsビンゴアプリケーション"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage4}
              alt="プロジェクト3"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">
              BBQで新入生歓迎会を行いました。
            </Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">
              2024年5月12日
            </Typography>
            <Typography variant="h6" gutterBottom>使用ツール</Typography>
            <Typography variant="body1" sx={{ maxWidth: '200px' }}>
              <ul style={{ 
                margin: 0,
                paddingLeft: '20px',
              }}>
                <li>Figma</li>
                <li>React</li>
              </ul>
            </Typography>            
          </Box>
        )
      }
    },
    {
      id: 6,
      title: ["iTL Magic Circle"],
      yymd: "年月日",
      dialogContent: {
        title: ["iTL Magic Circle"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage4}
              alt="プロジェクト3"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">
              BBQで新入生歓迎会を行いました。
            </Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">
              2024年5月12日
            </Typography>
            <Typography variant="h6" gutterBottom>使用ツール</Typography>
            <Typography variant="body1" sx={{ maxWidth: '200px' }}>
              <ul style={{ 
                margin: 0,
                paddingLeft: '20px',
              }}>
                <li>Figma</li>
                <li>React</li>
              </ul>
            </Typography>           
          </Box>
        )
      }
    },
    
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
    <div className="porduction">
      <div className="porduction-hedder">
        <h1>Portfolio（制作物）</h1>
      </div>
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
                    width="320"
                    image={
                      project.id === 1 ? portfolioImage1 : 
                      project.id === 2 ? portfolioImage2 : 
                      project.id === 3 ? portfolioImage3 :
                      project.id === 4 ? portfolioImage4 :
                      project.id === 5 ? portfolioImage5 :
                      project.id === 6 ? portfolioImage6 :
                      "https://via.placeholder.com/300"
                    }
                    alt={project.title.join(' ')}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title.map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < project.title.length - 1 && <br />}
                        </span>
                      ))}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.yymd}
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
          {selectedProjectData && (
            <>
              <DialogTitle sx={{ textAlign: 'center' }}>
                <HighlightOffIcon onClick={handleClose} sx={{ position: 'absolute', right: 12, top: 12, cursor: 'pointer',fontSize: 36 }} />
                
                <Typography variant="h5" fontWeight="bold">
                  {selectedProjectData.dialogContent.title.map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < selectedProjectData.dialogContent.title.length - 1 && <br />}
                    </span>
                  ))}
                </Typography>
              </DialogTitle>
              <DialogContent dividers>
                {selectedProjectData.dialogContent.content}
              </DialogContent>
            </>
          )}
        </Dialog>
    </div>

    <Footer />
  </>
  );
};

export default Production;