import './Study.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardMedia, Typography, Container, Dialog, DialogTitle, DialogContent, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState, ReactNode } from 'react';
import portfolioImage1 from '../images/Study/就活トーク会.png';
import portfolioImage2 from '../images/Study/オープンキャンパス.png';
import portfolioImage3 from '../images/Study/Webサイト勉強会.png';
import portfolioImage4 from '../images/Study/外部企業社員講演会.png';
import portfolioImage5 from '../images/Study/GDSC Japan Networking.png';
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
      title: ["就活トーク会"],
      yymd: "2024年7月2日、2024年12月15日",
      dialogContent: {
        title: ["就活トーク会"],
        content: (
          <Box >
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage1}
              alt="就活トーク会"
              sx={{ borderRadius: 1 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">
            厳選したトークテーマにより、「就活におけるiTL生ならではの強みは？」「先輩たちはどんなアピールをしたのだろう？」iTL生の具体的な就活イメージが湧く話を聞けます。同じテーマで輩それぞれの体験談を比べることもできます。2025年度は入学式明けてすぐの4月に開かれる予定です。大学生活が不安な新1年生にもオススメのイベントです！
            </Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">2024年7月2日、2024年12月15日</Typography>
          </Box>
        )
      }
    },
    {
      id: 2,
      title: ["オープンキャンパス"],
      yymd: "2024/08/03-04",
      dialogContent: {
        title: ["オープンキャンパス"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage2}
              alt="オープンキャンパス"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">高校生に国際情報学部の”情報の仕組み”と”情報の法学”を学んでもらうイベント。実際に画像解析を行い、そこからわかる生成AIの危険性についての説明が行われました。
            2日合わせて参加者数は90人弱でした。</Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">2024/08/03-04</Typography>            
          </Box>
        )
      }
    },
    {
      id: 3,
      title: ["Webサイト勉強会"],
      yymd: "2024/4/24",
      dialogContent: {
        title: ["Webサイト勉強会"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage3}
              alt="Webサイト勉強会"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">Webサイトについて3回に分けて勉強会を実施。第1回では環境構築、第2回ではHTML、第3回ではCSSについて学習しました。</Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">2024/4/24</Typography>
            <Typography variant="h6" gutterBottom>使用ツール</Typography>
            <Typography variant="body1" sx={{ maxWidth: '200px' }}>
              <ul style={{ 
                margin: 0,
                paddingLeft: '20px',
              }}>
                <li>VScode</li>
              </ul>
            </Typography>
          </Box>
        )
      }
    },
    {
      id: 4,
      title: ["外部企業社員講演会"],
      yymd: "2023年10月14日",
      dialogContent: {
        title: ["外部企業社員講演会"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage4}
              alt="外部企業社員講演会"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">外部企業の社員様をお招きして、「生成AIが社会に与える影響」、「就活に関するお話」について対面とオンライン併用し講演が開催されました。</Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">2023年10月14日</Typography>            
          </Box>
        )
      }
    },
    {
      id: 5,
      title: ["Connect GDSC! - GDSC Japan Networking Party"],
      yymd: "2023年4月1日",
      dialogContent: {
        title: ["Connect GDSC! - GDSC Japan Networking Party"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage5}
              alt="Connect GDSC! - GDSC Japan Networking Party"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">様々な大学から数人ずつ参加し、特別招待講演や懇親会を実施。チーム活動の強みを改めて認識する機会となりました。</Typography>
            <Typography variant="h6" gutterBottom>実行時期</Typography>
            <Typography variant="body1">2023年4月1日</Typography>            
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