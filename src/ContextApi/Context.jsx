import axios from "axios";
import { createContext, useState } from "react";



export const GlobalContext = createContext();



export function GlobalProvider({ children }) {
    const [theme, setTheme] = useState(false)

    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(""); // ✅ new state for error

    // ------ login form =========>>
    const [login, setLogin] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });


    const renderingCards = async () => {
        try {
            setLoading(true);
            setError(""); // reset error

            const userRes = await axios.get(
                "https://api.github.com/users/hamzar12700"
            );
            setUser(userRes.data);

            const repoRes = await axios.get(userRes.data.repos_url);
            setRepos(repoRes.data);

        } catch (err) {
            console.log(err.message);

            // GitHub rate limit error usually 403
            if (err.response && err.response.status === 403) {
                setError("GitHub API rate limit exceeded. Please try again later.");
            } else {
                setError("Something went wrong. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    // login form api
    async function formSubmit(e) {
        e.preventDefault();

        try {
            if (login) {
                const res = await axios.post(
                    "http://localhost:5000/api/auth/login",
                    {
                        email: formData.email,
                        password: formData.password
                    },
                    { withCredentials: true }
                );

                console.log("Login Success:", res.data);
            } else {
                const res = await axios.post(
                    "http://localhost:5000/api/auth/signup",
                    {
                        name: formData.username,
                        email: formData.email,
                        password: formData.password
                    }
                );

                console.log("Signup Success:", res.data);
            }
        } catch (err) {
            console.error(err.response?.data || err.message);
        }
    }

    return <GlobalContext.Provider value={{
        theme, setTheme, renderingCards, user,
        setUser,
        repos,
        setRepos,
        loading,
        setLoading,
        error,
        setError,
        // login form =====>>
        login,
        setLogin,
        formData,
        setFormData,
        formSubmit

    }}>
        {children}
    </GlobalContext.Provider>
}