import "../../styles/components/ui/PageFooter.css";

const PageFooter = () => {
  return (
    <div className="page-footer">
      <p>© {new Date().getFullYear()} Tallen Pelissero</p>
    </div>
  );
};

export default PageFooter;
