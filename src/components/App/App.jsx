import "./App.module.css";
import { Layout } from "../Layout/Layout";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  return (
    <>
      <Layout>
        <h1>Телефонна книга</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Layout>
    </>
  );
}

export default App;
