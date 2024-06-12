import { Container } from "postcss";

const Loading = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#191919",
        position: "fixed",
        inset: 0,
        zindex: 999
      }}
    >
      <Container sx={{ width: "40%" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>Loading...</h1>
      </Container>
    </Container>
  );
};