const ButtonSvg = (white) => (
  <>
    <svg
      className="absolute top-0 left-0"
      width="73"
      height="47" // Adjusted height to accommodate the full figure
      viewBox="0 0 73 47"
    >
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-left)"}
        strokeWidth="2"
        d="
          M60,0 
          h-60 
          v22 
          h13 
          v3 
          h-13 
          v22 
          h60
        "
      />
    </svg>
    <svg
      className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
      height="47" // Adjusted height to 47 to accommodate the new figure
      viewBox="0 0 100 47"
      preserveAspectRatio="none"
      fill={white ? "white" : "none"}
    >
      {white ? (
        <polygon
          fill="white"
          fillRule="nonzero"
          points="100 0 100 47 0 47 0 0"
        />
      ) : (
        <>
          <polygon
            fill="url(#btn-top)"
            fillRule="nonzero"
            points="100 45 100 47 0 47 0 45"
          />
          <polygon
            fill="url(#btn-bottom)"
            fillRule="nonzero"
            points="100 0 100 2 0 2 0 0"
          />
          <polygon
            fill="url(#btn-line-top)"
            fillRule="nonzero"
            points="100 0 100 1 0 1 0 0"
          />
          <polygon
            fill="url(#btn-line-bottom)"
            fillRule="nonzero"
            points="100 46 100 47 0 47 0 46"
          />
        </>
      )}
    </svg>
    <svg
      className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
      height="47"
      viewBox="0 0 100 47"
      preserveAspectRatio="none"
      fill={white ? "white" : "none"}
    >
      {white ? (
        <polygon
          fill="white"
          fillRule="nonzero"
          points="60 47 60 17 77 17 77 0 17 0"
        />
      ) : (
        <>
          <path
            fill="url(#btn-gradient)"
            fillRule="nonzero"
            d="M0 47 L60 47 L60 17 L77 17 L77 0 L17 0 Z"
          />
          <polygon
            fill="url(#btn-top)"
            fillRule="nonzero"
            points="100 45 100 47 0 47 0 45"
          />
          <polygon
            fill="url(#btn-bottom)"
            fillRule="nonzero"
            points="100 0 100 2 0 2 0 0"
          />
          <polygon
            fill="url(#btn-line-top)"
            fillRule="nonzero"
            points="100 0 100 1 0 1 0 0"
          />
          <polygon
            fill="url(#btn-line-bottom)"
            fillRule="nonzero"
            points="100 46 100 47 0 47 0 46"
          />
        </>
      )}
    </svg>
  </>
);

export default ButtonSvg;
