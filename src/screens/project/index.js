import { Box } from "@mui/material";
import { Grid } from '@mui/material';
import "./index.css";
import NavBar from '../../components/navbar/index.js'

function ProjectScreen() {
    return (
        <div>
            <NavBar />
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container sx={{
                        color: "#000000",
                        flexGrow: 1,
                        position: "static",
                        bgcolor: "#E0E2EB",
                        height: "900px",
                        width: "auto",
                        marginTop: "10px",
                        marginLeft: "10px",
                        marginRight: "10px",
                    }}
                        rowSpacing={1} columnSpacing={2}>
                        <Grid sx={{ borderStyle: "solid" }} item xs={6} md={4}>Tool Box
                        </Grid>
                        <Grid sx={{ borderStyle: "solid" }} item xs={6} md={4}>Workspace
                        </Grid>
                        <Grid sx={{ borderStyle: "solid" }} item xs={6} md={4}>Playground
                        </Grid>


                        {/* <Box sx={{
                    bgcolor:'#E0E2EB',
                    height: '900px',
                    width: '30%',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    marginRight: '24px',
                    marginLeft: '24px',
                    flexGrow:1,
                    position:'static',
                    }}>Tool Box</Box>
                    <Box sx={{
                    bgcolor:'#E0E2EB',
                    height: '900px',
                    width: '30%',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    marginRight: '24px',
                    marginLeft: '24px',
                    flexGrow:1,
                    position:'static',
                    }}>Workspace</Box>
                    <Box sx={{
                    bgcolor:'#E0E2EB',
                    height: '900px',
                    width: '30%',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    marginRight: '24px',
                    marginLeft: '24px',
                    flexGrow:1,
                    position:'static',
                    }}>Playground</Box> */}
                    </Grid>
                </Box>
            </div>

        </div>

    );
}

export default ProjectScreen;