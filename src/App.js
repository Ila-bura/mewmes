import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostFeed from './pages/posts/PostFeed';
import { useCurrentUser } from './contexts/CurrentUserContext';
import PostsFeed from './pages/posts/PostsFeed';
import EditPostForm from './pages/posts/EditPostForm';

function App() {
    const currentUser = useCurrentUser();
    const profile_id = currentUser?.profile_id || "";
  return (
    <div className={styles.App}>
            <NavBar />
            <Container className={styles.Main}>
            <Switch>
            <Route exact path='/' render={() => <PostsFeed message="Sorry, no results! Try another keyword." />} />
            <Route exact path='/feed' render={() => <PostsFeed message="Sorry, no results! Try another keyword or start following a user." 
            filter={`owner__followed__owner__profile=${profile_id}&`}/>} />
            <Route exact path='/saved' render={() => <PostsFeed message="Sorry, no results! Try another keyword or save a meme." 
            filter={`saved__owner__profile=${profile_id}&ordering=-saved__created_at&`}/>} />
            <Route exact path="/about" render={() => <h1>About</h1>} />
            <Route exact path='/posts/create' render={() => <PostCreateForm />} />
            <Route exact path='/signin' render={() => <SignInForm />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route exact path='/posts/:id' render={() => <PostFeed />} />
            <Route exact path='/posts/:id/edit' render={() => <EditPostForm />} />
            <Route render={() => <p>Page not found!</p>} />
        </Switch>
            </Container>
    </div>
  );
}

export default App;