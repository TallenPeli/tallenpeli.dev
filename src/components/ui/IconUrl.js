import "../../styles/components/ui/IconUrl.css";

const IconUrl = ({ title, url, icon, iconSide }) => {
  const Tag = url === "" ? "span" : "a";
  const props =
    url === ""
      ? { className: "icon-url" }
      : { href: url, className: "icon-url" };

  return (
    <Tag {...props}>
      {iconSide === "left" ? (
        <>
          {icon}
          <p>{title}</p>
        </>
      ) : (
        <>
          <p>{title}</p>
          {icon}
        </>
      )}
    </Tag>
  );
};

export default IconUrl;
