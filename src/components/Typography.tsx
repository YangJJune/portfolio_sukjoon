import React from "react";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const P_H1 = ({ children, className }: TextProps) => (
  <p
    className={`text-4xl font-bold leading-tight text-white ${className || ""}`}
  >
    {children}
  </p>
);

export const P_H2 = ({ children, className }: TextProps) => (
  <p
    className={`text-3xl font-semibold leading-snug text-white ${
      className || ""
    }`}
  >
    {children}
  </p>
);

export const P_H3 = ({ children, className }: TextProps) => (
  <p
    className={`text-2xl font-medium leading-normal text-white ${
      className || ""
    }`}
  >
    {children}
  </p>
);

export const P_Text = ({ children, className }: TextProps) => (
  <p className={`text-lg leading-relaxed text-white ${className || ""}`}>
    {children}
  </p>
);

export const P_Text_B = ({ children, className }: TextProps) => (
  <p
    className={`text-lg leading-relaxed text-white font-semibold ${
      className || ""
    }`}
  >
    {children}
  </p>
);

export const highlightKeywords = (text: string, keywords: string[]) => {
  const parts = text.split(new RegExp(`(${keywords.join("|")})`, "g"));
  return parts.map((part, i) =>
    keywords.includes(part) ? (
      <span key={i} className="bg-gray-500 text-amber-400 font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

export const YellowTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-2 py-1 mr-1 rounded-lg text-sm bg-yellow text-white font-medium">
    {children}
  </span>
);
