import logo from "./media/logo.png";
import "./App.css";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Nosotros", "Membresia", "Recarga de puntos", "SOCA en Acción"];

function App() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="bg-white flex flex-col">
      <AppBar
        position="static"
        sx={{
          backgroundImage: "linear-gradient(to bottom, #7DB9FF, white)",
          border: "none",
        }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={logo}
              className="hidden md:flex h-20 w-auto m-4 mr-2"
              alt="soca"
            />

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <img
              src={logo}
              className="h-20 w-auto m-4 md:hidden mr-20"
              alt="SOCA"
            />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <section className="self-center w-full max-w-[1279px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0 p-4">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/515415df-6eab-490e-bd76-8dd47b9bfa01?apiKey=f9ed1825c5104496bd57288a76ba297c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/515415df-6eab-490e-bd76-8dd47b9bfa01?apiKey=f9ed1825c5104496bd57288a76ba297c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/515415df-6eab-490e-bd76-8dd47b9bfa01?apiKey=f9ed1825c5104496bd57288a76ba297c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/515415df-6eab-490e-bd76-8dd47b9bfa01?apiKey=f9ed1825c5104496bd57288a76ba297c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/515415df-6eab-490e-bd76-8dd47b9bfa01?apiKey=f9ed1825c5104496bd57288a76ba297c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/515415df-6eab-490e-bd76-8dd47b9bfa01?apiKey=f9ed1825c5104496bd57288a76ba297c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/515415df-6eab-490e-bd76-8dd47b9bfa01?apiKey=f9ed1825c5104496bd57288a76ba297c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/515415df-6eab-490e-bd76-8dd47b9bfa01?apiKey=f9ed1825c5104496bd57288a76ba297c&"
              className="aspect-[0.9] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10 max-sm:mt-1"
              alt="Closet"
            />
          </div>
          <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col w-[626px] my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-black text-center text-7xl font-medium backdrop-blur-[2px] self-stretch max-md:max-w-full max-md:text-4xl">
                Vive el primer clóset ilimitado del mundo
              </h1>
              <div className="self-stretch flex w-full gap-5 ml-3 mt-14 flex-wrap pr-6">
                <div
                  className="bg-gray flex flex-col grow shrink-0 basis-auto px-5 py-6 rounded-2xl border-solid border-yellow-200 relative"
                  style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                >
                  <input
                    type="email"
                    placeholder="Ingresa tu correo y vive la experiencia .."
                    className="text-stone-600 text-center text-xl font-medium self-center bg-transparent border-none focus:border-none focus:ring-0 w-full h-full outline-none"
                  />
                </div>

                <button className="text-stone-600 text-xl font-bold self-stretch bg-yellow-200 flex-grow pl-4 pr-5 pt-5 pb-7 rounded-2xl border-0 border-solid border-stone-600">
                  Únete
                </button>
              </div>

              <h2 className="text-black text-center text-3xl font-bold self-center mt-16 max-md:max-w-full max-md:mt-10">
                <span className="">¿Comprar y vender ropa?</span>
                <br />
                <span className="font-bold">Mejor intercambia</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="self-center w-full max-w-[1279px] max-md:max-w-full max-md:mt-10 mt-20">
        {/* Full Width Title */}
        <h1 className="text-black text-center text-7xl font-medium backdrop-blur-[2px] self-stretch max-md:max-w-full max-md:text-4xl ">
          Intercambia tu ropa x puntos <br />y tus{" "}
          <span style={{ color: "pink" }}>puntos</span> x ropa
        </h1>

        {/* Two Columns: 1/3 and 2/3 */}
        <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0 mt-10">
          {/* 1/3 Column */}
          <div className="flex flex-col items-stretch w-1/3 max-md:w-full p-4">
            <Typography variant="body1">
              Content for 1/3 column. You can add more components or text here.
            </Typography>
          </div>

          {/* 2/3 Column */}
          <div className="flex flex-col items-stretch w-2/3 max-md:w-full p-4">
            <Typography variant="body1">
              Content for 2/3 column. This can be text, images, or any other
              content. You have more space here compared to the 1/3 column.
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
