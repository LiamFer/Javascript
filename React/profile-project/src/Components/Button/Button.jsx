function Button({ text, link }) {
  return (
    <>
      <a
        style={{
          backgroundColor: "#262C36",
          textDecoration: "none",
          color: "white",
          padding: "6px",
          borderRadius: "10px",
          width: "100px",
          textAlign: "center",
          border: "#3D444D 2px solid",
        }}
        href={link}
        target="_blank"
      >
        {text}
      </a>
    </>
  );
}

export default Button;
