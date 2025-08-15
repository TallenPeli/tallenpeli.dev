import "../../styles/components/ui/IconUrl.css";

const IconUrl = ({ title, url, icon, iconSide }) => {
  const Selectable = url === "" ? "span" : "a";
  const props =
    url === ""
      ? { className: "icon-url" }
      : { href: url, className: "icon-url" };

  if (!title) {
    return <Selectable {...props}>{icon}</Selectable>;
  } else if (iconSide === "left") {
    return (
      <Selectable {...props}>
        {icon}
        <p>{title}</p>
      </Selectable>
    );
  } else {
    return (
      <Selectable {...props}>
        <p>{title}</p>
        {icon}
      </Selectable>
    );
  }
};

export default IconUrl;
