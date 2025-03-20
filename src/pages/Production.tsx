import './Production.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardMedia, Typography, Container, Dialog, DialogTitle, DialogContent, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState, ReactNode } from 'react';
import portfolioImage1 from '../images/Production/iTLMagicCircle.png';
import portfolioImage2 from '../images/Production/SDGsビンゴアプリケーション.png';
import portfolioImage3 from '../images/Production/単位計算アプリ.png';
import portfolioImage4 from '../images/Production/JEARN.png';
import portfolioImage5 from '../images/Production/iTLFreeClassroom.png';
import portfolioImage6 from '../images/Production/iTLサークル紹介.png';


// ダイアログの内容を定義するインターフェース
interface DialogContent {
  title: string[];
  content: ReactNode;
}

interface Project {
  id: number;
  title: string[];
  dialogContent: DialogContent;  
}

const Production = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: ["iTL Magic Circle"],
      dialogContent: {
        title: ["iTL Magic Circle"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage1}
              alt="iTL Magic Circle"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">
            iTL Magic Circleさんから依頼を受け、部員集め・サークル紹介・公演依頼募集・知名度向上を目的にサイトを作成しました。
            </Typography>
            <Typography variant="h6" gutterBottom>使用ツール</Typography>
            <Typography variant="body1" sx={{ maxWidth: '200px' }}>
              <ul style={{ 
                margin: 0,
                paddingLeft: '20px',
              }}>
                <li>HTML</li>
                <li>CSS</li>
                <li>javaScript</li>
              </ul>
            </Typography>       
            <Typography variant="h6" gutterBottom>制作物</Typography>
            <Typography variant="body1">
            <a href="https://itl-magic-circle.netlify.app/">https://itl-magic-circle.netlify.app/</a>
            </Typography>     
          </Box>
        )
      }
    },
    {
      id: 2,
      title: ["SDGsビンゴアプリケーション"],
      dialogContent: {
        title: ["SDGsビンゴアプリケーション"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage2}
              alt="SDGsビンゴアプリケーション"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">
            SDGsの17の目標に関連する具体的なアクションをビンゴゲーム形式で提供する教育的Webアプリケーションです。ユーザーは日常生活で実践可能なタスクに取り組みながら、SDGsへの理解を深め、持続可能な社会への貢献を実感できます。
            </Typography>
            <Typography variant="h6" gutterBottom>使用ツール</Typography>
            <Typography variant="body1" sx={{ maxWidth: '200px' }}>
              <ul style={{ 
                margin: 0,
                paddingLeft: '20px',
              }}>
                <li>フロントエンド：React</li>
                <li>バックエンド：Firebase</li>
              </ul>
            </Typography>           
          </Box>
        )
      }
    },
    {
      id: 3,
      title: ["中央大学専用単位計算アプリ"],
      dialogContent: {
        title: ["中央大学専用単位計算アプリ"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage3}
              alt="中央大学専用単位計算アプリ"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">
            「manabaやCplusが使いづらく、自身の単位確認ができない」「確認できても不安」そういった学生のためのアプリケーションです。
            </Typography>
            <Typography variant="h6" gutterBottom>使用ツール</Typography>
            <Typography variant="body1" sx={{ maxWidth: '200px' }}>
              <ul style={{ 
                margin: 0,
                paddingLeft: '20px',
              }}>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>Django</li>
              </ul>
            </Typography>           
          </Box>
        )
      }
    },
    {
      id: 4,
      title: ["JEARNサイト"],
      dialogContent: {
        title: ["JEARNサイト"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage4}
              alt="JEARNサイト"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">
            非営利団体JEARNのHP改修プロジェクトです。
            このプロジェクトのゴールはHPを完成させて、誰でもドキュメントを見れば改修・更新ができる状態にすることです。

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
                <li>HTML</li>
                <li>CSS</li>
                <li>Figma</li>
                <li>BootStrap</li>
              </ul>
            </Typography>            
          </Box>
        )
      }
    },
    {
      id: 5,
      title: ["iTL Free Classroom"],
     
      dialogContent: {
        title: ["iTL Free Classroom"],
        content: (
          <Box>
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage5}
              alt="iTL Free Classroom"
              sx={{ borderRadius: 1, mt: 2 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">
            このアプリケーションは、Vue.jsとFirebaseを使用して開発した大学内の空き教室可視化ツールです。学生や教職員が、空いている教室や授業が行われている教室を簡単に確認できるように設計されています。
            </Typography>            
            <Typography variant="h6" gutterBottom>使用ツール</Typography>
            <Typography variant="body1" sx={{ maxWidth: '200px' }}>
              <ul style={{ 
                margin: 0,
                paddingLeft: '20px',
              }}>
                <li>フロントエンド：Vue.js</li>
                <li>バックエンド：Firebase</li>
              </ul>
            </Typography>
          </Box>
        )
      }
    },
    {
      id: 6,
      title: ["iTLサークル紹介"],
      dialogContent: {
        title: ["iTLサークル紹介"],
        content: (
          <Box >
            <CardMedia
              component="img"
              height="300"
              image={portfolioImage6}
              alt="iTLサークル紹介サイト"
              sx={{ borderRadius: 1 }}
            />
            <Typography variant="h6" gutterBottom>プロジェクト説明</Typography>
            <Typography variant="body1">
            学部独自のサークルが多いiTL。「iTLにはどんなサークルがある？」「公認なのか非公認なのかも分からない...。」新入生によくあるこれらの悩みを、解決するためのサイトを作成しました。GDGsと国際連盟がタッグを組み、iTLのサークルを一覧にまとめてあります。iTLならではの魅力的なサークルがたくさんあるので、新入生はぜひご覧ください！
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
          {[...projects].reverse().map((project) => (
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