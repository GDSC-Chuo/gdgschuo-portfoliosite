import './Study.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardMedia, Typography, Container, Dialog, DialogTitle, DialogContent, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState, ReactNode } from 'react';
import portfolioImage1 from '../images/Study/就活トーク会.png';
import portfolioImage2 from '../images/Study/Webサイト勉強会.png';
import portfolioImage3 from '../images/Study/GDSC Japan Networking.png';
import portfolioImage4 from '../images/Study/アクセンチュア社員講演会.png';
import portfolioImage5 from '../images/Study/2024年度新歓BBQ.png';
import portfolioImage6 from '../images/Study/オープンキャンパス.png';


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


const Study = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: ["2024年度新歓BBQ"],
      yymd: "2024年5月12日",
      dialogContent: {
        title: ["2024年度新歓BBQ"],
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
          </Box>
        )
      }
    },
    {
      id: 2,
      title: ["オープンキャンパス"],
      yymd: "2024年8月3日～4日",
      dialogContent: {
        title: ["オープンキャンパス"],
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
            <Typography variant="body1">高校生に国際情報学部の"情報の仕組み"と"情報の法学"を学んでもらうイベント。実際に自動解析を行い、そこから分かる生成AIの危険性についての説明を行った。2日合わせて参加者は90人弱となった。</Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">2024年8月3日～4日</Typography>
            <ul>
              <li>機能1の説明</li>
              <li>機能2の説明</li>
              <li>機能3の説明</li>
            </ul>
          </Box>
        )
      }
    },
    {
      id: 3,
      title: ["アクセンチュア社員講演会"],
      yymd: "2023年10月14日",
      dialogContent: {
        title: ["アクセンチュア社員講演会"],
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
            <Typography variant="body1">「生成AIが社会に与える影響とアクセンチュアに及ぼす変革」、「アクセンチュア・就活に関するお話」について対面とオンライン併用し講演を開催</Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">2023年10月14日</Typography>            
          </Box>
        )
      }
    },
    {
      id: 4,
      title: ["Connect GDSC! - GDSC", "Japan Networking Party"],
      yymd: "2023年10月14日",
      dialogContent: {
        title: ["Connect GDSC! - GDSC", "Japan Networking Party"],
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
            <Typography variant="body1">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">2023年10月14日</Typography>            
          </Box>
        )
      }
    },
    {
      id: 5,
      title: ["プロジェクト名"],
      yymd: "年月日",
      dialogContent: {
        title: ["プロジェクト名"],
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
            <Typography variant="body1">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">年月日</Typography>            
          </Box>
        )
      }
    },
    {
      id: 6,
      title: ["プロジェクト名"],
      yymd: "年月日",
      dialogContent: {
        title: ["プロジェクト名"],
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
            <Typography variant="body1">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">年月日</Typography>            
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
    <div className="study">
    <div className="study-hedder">
        <h1>Portfolio（イベント・制作物）</h1>
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

export default Study;