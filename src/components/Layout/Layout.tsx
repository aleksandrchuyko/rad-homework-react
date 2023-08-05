import css from './Layout.module.css';
type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <main className={css.container}>
    <h1>Hello Notes</h1>
    {children}
  </main>
);

export default Layout;
